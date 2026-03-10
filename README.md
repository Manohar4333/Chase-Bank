# Chase Bank Project

## Overview

Chase Bank is a full-stack web application that simulates banking operations. It includes both frontend (Angular) and backend (Node.js/Express) components, allowing users to manage branches, customers, employees, and transactions.

## Features

- User authentication and registration
- Admin and user dashboards
- Branch management (create, view, update, delete)
- Customer management (create, view, update, delete)
- Employee management
- Transaction processing and reports
- Responsive UI with Angular

## Project Structure

```
Chase-Bank-master/
├── backend/        # Node.js/Express backend
│   ├── app.js
│   ├── models/
│   ├── routes/
│   └── public/
├── src/            # Angular frontend
│   ├── app/
│   ├── assets/
│   └── index.html
├── package.json    # Project dependencies
├── angular.json    # Angular config
└── README.md       # Project documentation
```

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the project root:
   ```bash
   cd ..
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Angular app:
   ```bash
   npm start
   ```

## Usage

- Access the frontend at `http://localhost:4200`
- Backend API runs at `http://localhost:3000`
- Use admin credentials to access admin dashboard

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes
4. Push to your branch and create a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact the repository owner or open an issue on GitHub.
