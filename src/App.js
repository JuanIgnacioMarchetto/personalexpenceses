import React, { useState } from 'react';
import './styles.css'; // Importa el archivo de estilos CSS
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
    <div className='app'>
      <div className='header'> 
        <h1 className='green6'>Personal Expense Tracker</h1>
        <BudgetForm setBudget={setBudget} />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} /> {/* Verifica que 'expenses' esté pasando correctamente */}
        <h3 className='green8'>Monthly Budget: ${budget}</h3>
      </div>
    </div>
  );
};

export default App;
