import "./Expenses.css";
import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  const onChangeFilterYear = (newFilterYear) => {
    setSelectedFilterYear(newFilterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilterYear}
          onChangeFilterYear={onChangeFilterYear}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
