import React from 'react'

function ListFooter({ todos, filterTodos}) {

    const completedTodo = todos.filter(item => !item.isComplete);

    const deletedAllCompletedTodos = () => filterTodos(todos.filter(item => !item.isComplete))
    
    console.log(todos)
    return (
        //  This footer should hidden by default and shown when there are todos
        <footer className="footer">
    
            {/* This should be `0 items left` by default */}
            <span className="todo-count">
                <strong>{completedTodo.length} </strong>
                items left
            </span>
    
            {/* <ul className="filters">
                <li>
                    <a className="selected">All</a>
                </li>
                <li>
                    <a>Active</a>
                </li>
                <li>
                    <a>Completed</a>
                </li>
            </ul> */}
    
             {/* Hidden if no completed items are left ↓  */}
            <button className="clear-completed" onClick={deletedAllCompletedTodos}>
                Clear completed
            </button>
        </footer>
      )
}

export default ListFooter;