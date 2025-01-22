
# API MONEY TRANSFER

This project is a simple API for transferring money between accounts, built using Python.
## Features

- Transfer money between accounts securely.
- Validate account details before processing transactions.
- Error handling for insufficient funds and invalid accounts.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Muoki-Mary/api-money-transfer.git
```

Go to the project directory

```bash
  cd api-money-transfer
```


Start the server

```bash
  python bank_server.py
```


## Testing the Money Transfer API
Transferring to the Same Account
![App Screenshot](https://github.com/Muoki-Mary/api-money-transfer/blob/master/screenshots/cannot-transfer-same-account.png?raw=true)

Creating an account with an id that already exists
![App Screenshot](https://github.com/Muoki-Mary/api-money-transfer/blob/master/screenshots/create-account-id-exists.png?raw=true)

Creating invalid balance
![App Screenshot](https://github.com/Muoki-Mary/api-money-transfer/blob/master/screenshots/create-account-invalid-balance.png?raw=true)

Creating Account Successfully
![App Screenshot](https://github.com/Muoki-Mary/api-money-transfer/blob/master/screenshots/create-account-succes.png?raw=true)

Getting Account that is not found
![App Screenshot](https://github.com/Muoki-Mary/api-money-transfer/blob/master/screenshots/get-account-not-found.png?raw=true)

Getting Account Successfully 
![App Screenshot](https://github.com/Muoki-Mary/api-money-transfer/blob/master/screenshots/get-account-succes.png?raw=true)

Insufficient Funds for Transfer
![App Screenshot](https://github.com/Muoki-Mary/api-money-transfer/blob/master/screenshots/insufficient-transfer-funds.png?raw=true)

Valid Transfer Processed
![App Screenshot](https://github.com/Muoki-Mary/api-money-transfer/blob/master/screenshots/valid-transfer.png?raw=true)

## Tech Stack

**Server:** Python


## Contributing

Contributions are always welcome!

Create a new branch:

```
git checkout -b branch-name
```

Make your changes and commit them:

```
git add .
```

```
git commit -m "Description of changes"
```


Push the changes to your branch:

```
git push origin branch-name
```

Open a pull request to merge into the master branch.

Your PR will be reviewed and your changes merged.
