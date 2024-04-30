import React, { useState } from 'react';

const BudgetForm = ({ setBudget }) => {
  const [budget, setBudgetValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budget) return;
    setBudget(parseFloat(budget));
    setBudgetValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Set Monthly Budget"
        value={budget}
        onChange={(e) => setBudgetValue(e.target.value)}
      />
      <button>Set Budget</button>
    </form>
  );
};

export default BudgetForm;
