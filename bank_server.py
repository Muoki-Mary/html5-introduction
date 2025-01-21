import json 
from http.server import   BaseHTTPRequestHandler,HTTPServer

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
            
            if not balance or not isinstance(balance, (int, float)):
                self._send_response(400, {"error": "Balance must be a valid number"})
                return

            accounts[account_id] = balance
            self._send_response(201, {"message": f"Account {account_id} created successfully", "balance": balance})
        if self.path == "/transfer":
           
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
           
            account_id = self.path.split("/")[-1]

            if account_id not in accounts:
                self._send_response(404, {"error": "Account not found"})
                return

            self._send_response(200, {"account_id": account_id, "balance": accounts[account_id]})

def run(): 
    """Run the HTTP server."""
    server_address = ('', 8000)
    httpd = HTTPServer(server_address,RequestHandler)
    print("Server running on http://localhost:8000")
    httpd.serve_forever()

if __name__ == '__main__':
    run()