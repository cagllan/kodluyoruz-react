import { useState } from "react";
import "./styles.css";
import Form from "./Form";

function Todos() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form todos={todos} addTodos={setTodos}/>
        </header>
      </section>
    </>
  );
}

export default Todos;
