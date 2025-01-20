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
elif self.path == "/transfer":
            # Transfer money
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)

            from_account = data.get('from_account')
            to_account = data.get('to_account')
            amount = data.get('amount')

            if not all([from_account, to_account, amount]):
                self._send_response(400, {"error": "from_account, to_account, and amount are required"})
                return

            if from_account not in accounts or to_account not in accounts:
                self._send_response(404, {"error": "One or both accounts do not exist"})
                return

            if accounts[from_account] < amount:
                self._send_response(400, {"error": "Insufficient funds in the from_account"})
                return

            # Perform transfer
            accounts[from_account] -= amount
            accounts[to_account] += amount

            self._send_response(200, {
                "message": f"Transferred {amount} from {from_account} to {to_account}",
                "from_account_balance": accounts[from_account],
                "to_account_balance": accounts[to_account]
            })

   def do_GET(self):
        """Handle GET requests."""
        if self.path.startswith("/account/"):
            # Get account details
            account_id = self.path.split("/")[-1]

            if account_id not in accounts:
                self._send_response(404, {"error": "Account not found"})
                return

            self._send_response(200, {"account_id": account_id, "balance": accounts[account_id]})

def run(): 
    """Run the HTTP server."""
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, "")
    print("Server running on http://localhost:8000")
    httpd.serve_forever()

if __name__ == '__main__':
    run()