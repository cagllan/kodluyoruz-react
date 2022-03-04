import React from "react";

function List() {
    
  return (
    //  This section should be hidden by default and shown when there are todos
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        <li className="">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default List;
