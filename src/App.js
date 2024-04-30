import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetForm from './components/BudgetForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h1>Personal Expense Tracker</h1>
      <BudgetForm setBudget={setBudget} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <h3>Monthly Budget: ${budget}</h3>
    </div>
  );
};

export default App;
