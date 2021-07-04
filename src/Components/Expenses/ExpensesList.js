import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h1 className="expenses-list__falback">Found No Expenses</h1>;
  }

  return (
    <ul>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
