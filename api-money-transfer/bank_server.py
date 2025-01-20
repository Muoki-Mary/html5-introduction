from http.server import HTTPServer
accounts = {}

class RequestHandler(BaseHTTPRequestHandler):

    def _send_response(self, status, data):
        """Helper method to send a JSON response."""
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def do_POST(self):
        """Handle POST requests."""
        if self.path == "/account":
            # Create an account
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)

            account_id = data.get('account_id')
            balance = data.get('balance', 0)

            if not account_id:
                self._send_response(400, {"error": "Account ID is required"})
                return

            if account_id in accounts:
                self._send_response(400, {"error": "Account already exists"})
                return

            accounts[account_id] = balance
            self._send_response(201, {"message": f"Account {account_id} created successfully", "balance": balance})

def run(): 
    """Run the HTTP server."""
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, "")
    print("Server running on http://localhost:8000")
    httpd.serve_forever()

if __name__ == '__main__':
    run()