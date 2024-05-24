# ReactJS Expense Tracker

## Overview
The ReactJS Expense Tracker is a web application built using Vite that helps users manage their personal finances by tracking income and expenses. The application provides an intuitive interface for adding, editing, and deleting transactions, and visualizes financial data through charts and summaries.

## Features
- **Add Transactions**: Easily add income and expense transactions.
- **Edit Transactions**: Modify existing transactions as needed.
- **Delete Transactions**: Remove transactions that are no longer relevant.
- **Transaction Summary**: View a summary of your total income, expenses, and balance.
- **Charts**: Visualize your financial data through interactive charts.
- **Local Storage**: Persist data in the browser's local storage so your data is saved between sessions..

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **Context API**: State management.
- **CSS**: Styling the application..
- **Chart.js**: Visualizing data in the form of charts..
- **LocalStorage**: Storing data locally in the browser..

## Installation
To get started with the project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Binary-Shade/ReactJS-expense-tracker.git
   cd ReactJS-expense-tracker
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the development server**:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Project Structure
The project's directory structure is organized as follows:
```
reactjs-expense-tracker/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddTransaction.js
│   │   ├── TransactionList.js
│   │   ├── Balance.js
│   │   ├── IncomeExpenses.js
│   │   ├── Chart.js
│   │   └── ...
│   ├── context/
│   │   ├── GlobalState.js
│   │   ├── AppReducer.js
│   │   └── ...
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Usage
1. **Add a Transaction**:
   - Navigate to the add transaction form.
   - Enter the details of your transaction (text, amount).
   - Click "Add Transaction".

2. **Edit a Transaction**:
   - Click the edit icon next to the transaction you want to modify.
   - Update the details and save the changes.

3. **Delete a Transaction**:
   - Click the delete icon next to the transaction you want to remove.

4. **View Summary**:
   - The balance, total income, and total expenses are displayed at the top of the application.
   - The chart provides a visual representation of your transactions.

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, feel free to reach out:

- **Email**: 02042003sureshk@gmail.com
- **GitHub**: [Binary-Shade](https://github.com/Binary-Shade)

---

Thank you for using the ReactJS Expense Tracker! Your feedback and contributions are highly appreciated.
