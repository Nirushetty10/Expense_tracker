import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (date === "" || title === "" || amount === "") return;
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpense(expenseData);
    setDate("");
    setAmount("");
    setTitle("");
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div>
      {!showForm && <button onClick={showFormHandler}>Add Expenses</button>}
      {showForm && (
        <form onSubmit={formSubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                value={amount}
                min="1"
                step="1"
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={date}
                min="2020-01-01"
                max="2023-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actionS">
            <button onClick={hideFormHandler}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
