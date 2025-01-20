from http.server import HTTPServer

def run():
    """Run the HTTP server."""
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, "")
    print("Server running on http://localhost:8000")
    httpd.serve_forever()

if __name__ == '__main__':
    run()