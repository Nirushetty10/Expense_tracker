import React , {useState} from "react";
import "./NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{
    const [showForm, setShowForm] = useState(false);
    const expenseSaveHandler = expense => {
        const addedExpense = {
            ...expense,
            id : Math.random().toString()
        }
        props.onAddExpense(addedExpense);
    }

    return <Card className="new-expense">
        <ExpenseForm onSaveExpense={expenseSaveHandler}/>
    </Card>
};

export default NewExpense;