import { useState } from "react";
import "./styles.css";

function Todos() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
        </header>
      </section>
    </>
  );
}

export default Todos;
