import { useState } from "react";
import "./styles.css";
import Form from "./Form";
import List from "./List";
import ListFooter from "./ListFooter";

function Todos() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form todos={todos} addTodos={setTodos} />
        </header>
        {todos.length > 0 && <List todos={todos} changeTodos={setTodos} />}
        {todos.length > 0 && <ListFooter />}
      </section>
    </>
  );
}

export default Todos;
