import React from 'react'

function Form() {
    return (
        <form>
          <input
            name="todo"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      );
}

export default Form