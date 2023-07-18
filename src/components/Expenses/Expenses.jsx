import React, {useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const setFilteredYearHandler = year => {
    setFilterYear(year)
  }

  const filteredExpenses = props.data.filter((expense)=> {
    return expense.date.getFullYear() === Number(filterYear);
  })

  return (  
    <Card className="expenses">
    <ExpensesFilter onFilterYearSelected={setFilteredYearHandler} selectedYear={filterYear}/>
    <ExpenseList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
