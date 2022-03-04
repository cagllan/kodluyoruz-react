import { useState, useEffect } from "react";

const initialValues = { todo: "", isComplete: false };

function Form({ todos, addTodos }) {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (form.todo.trim() === "") {
      return false;
    }

    addTodos([...todos, form]);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        name="todo"
        value={form.todo}
        onChange={onChangeInput}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
}

export default Form;
