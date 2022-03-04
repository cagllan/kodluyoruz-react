import React from "react";

function List({ todos, changeTodos }) {

  return (
    //  This section should be hidden by default and shown when there are todos
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {
        todos.map((item, index) => 
          (
            <li className="" key={index}>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>{item.todo}</label>
                    <button className="destroy"></button>
                </div>
            </li>
          )
        )
        }
      </ul>
    </section>
  );
}

export default List;
