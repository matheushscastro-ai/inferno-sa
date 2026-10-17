import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Cache control to ensure fresh code on mobile
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    port = 8080
    server_address = ('0.0.0.0', port)
    httpd = ThreadingHTTPServer(server_address, CustomHandler)
    print(f'Threaded HTTP server running on port {port} (0.0.0.0:{port})...')
    httpd.serve_forever()
