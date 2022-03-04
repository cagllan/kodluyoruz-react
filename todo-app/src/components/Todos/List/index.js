import React from "react";

function List({ todos, changeTodos }) {

  const checkTodosAllComplete = () => {
    if (todos.every((item) => item.isComplete)) {
      todos.forEach((item) => (item.isComplete = false));
      changeTodos(todos.map((todo) => ({ ...todo, isComplete: false })));
    } else {
      todos.forEach((item) => (item.isComplete = true));
      changeTodos(todos.map((todo) => ({ ...todo, isComplete: true })));
    }
  };

  const changeTodoIsComplete = (todoIndex) => {
    changeTodos(
      todos.map((todo, index) =>
        index === todoIndex
          ? { ...todo, isComplete: !todo.isComplete }
          : { ...todo }
      )
    );
  };

  const removeTodoItem = (todoIndex) => {
    todos.splice(todoIndex, 1);
    changeTodos([...todos]);
  };

  return (
    //  This section should be hidden by default and shown when there are todos
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={checkTodosAllComplete}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {todos.map((item, index) => (
          <li className={!item.isComplete ? "" : "completed"} key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.isComplete}
                onChange={() => changeTodoIsComplete(index)}
              />
              <label>{item.todo}</label>
              <button
                className="destroy"
                onClick={() => removeTodoItem(index)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
