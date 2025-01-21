# API Money Transfer

This project is a simple API for transferring money between accounts, built using Python.

## Features

- Transfer money between accounts securely.
- Validate account details before processing transactions.
- Track transaction history.
- Support for basic authentication.
- Error handling for insufficient funds and invalid accounts.

## Run Locally

To run this project locally, follow these steps:

### Prerequisites

- Python 3.8 or later installed.
- pip (Python package installer) installed.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Muoki-Mary/api-money-transfer.git

   ```

2. Navigate to the project directory:

cd api-transfer-money

3. Install required dependencies:

pip install -r requirements.txt

4. Run the server:

python bank_server.py

5.Use a tool Postman to send requests to the server:

Here are the endpoints for the API Money Transfer
1.Transfer Money
Endpoint :/apir/transfer

2.Check Account Balance
Endpoint :/api/balance/<account_number>

3.Transaction History
Endpoint: /api/transaction/<account_number>

Contributing

1. Create a new branch:

git checkout -b branch-name

2. Make your changes and commit them:

git add .
git commit -m "Description of changes"

3. Push the changes to your branch:

git push origin branch-name

4. Open a pull request to merge into the master branch.

License

This project is licensed under the MIT License.

Feel free to edit it further to suit your needs!
