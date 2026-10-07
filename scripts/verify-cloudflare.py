#!/usr/bin/env python3
"""Contrôle local des pages exportées, ressources et navigation après hydratation."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import unquote, urlsplit
from playwright.sync_api import sync_playwright

OUTPUT = Path(__file__).resolve().parents[1] / 'dist/public'

class PagesHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(OUTPUT), **kwargs)
    def do_GET(self):
        url = unquote(urlsplit(self.path).path)
        if url == '/':
            self.path = '/index.html'
        elif Path(OUTPUT, url.lstrip('/') + '.html').exists():
            self.path = url + '.html'
        super().do_GET()
    def log_message(self, *args):
        return

server = ThreadingHTTPServer(('127.0.0.1', 0), PagesHandler)
Thread(target=server.serve_forever, daemon=True).start()
base = f'http://127.0.0.1:{server.server_port}'
errors = []
try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, executable_path='/usr/bin/chromium', args=['--no-sandbox'])
        for route in ['/', '/real-estate-paris', '/fr', '/fr/real-estate-paris', '/fr/contact-newsletter']:
            page = browser.new_page()
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.on('response', lambda response: errors.append(f'{response.status} {response.url}') if response.status >= 400 and response.url.startswith(base) else None)
            response = page.goto(base + route, wait_until='networkidle', timeout=30000)
            assert response and response.status == 200, route
            if page.locator('h2').count() < 1:
                print('DEBUG', route, 'url=',page.url,'title=',page.title(),'text=',page.locator('body').inner_text()[:350], 'errors=',errors)
            assert page.locator('h1').count() == 1, route
            assert page.locator('h2').count() >= 1, route
            assert page.locator('link[rel=canonical]').get_attribute('href') == 'https://acropolis-real-estate.com' + (route if route != '/' else '/'), route
            assert page.locator('img[src^="/manus-storage/"]').count() > 0, route
            if route.startswith('/fr'):
                assert page.locator('html').get_attribute('lang') == 'fr',route
            print(f'OK {route}: {page.locator("h1").inner_text()[:65]}')
            if route == '/fr':
                page.locator('a[href="/fr/about"]').first.click()
                page.wait_for_url('**/fr/about')
                assert page.locator('h1').count() == 1
                assert page.locator('link[rel=canonical]').get_attribute('href') == 'https://acropolis-real-estate.com/fr/about'
                print('OK navigation française /fr/about')
            page.close()
        browser.close()
    assert not errors, 'Erreurs navigateur : ' + repr(errors)
    print('Validation navigateur : aucune erreur JS ou ressource locale manquante.')
finally:
    server.shutdown()
