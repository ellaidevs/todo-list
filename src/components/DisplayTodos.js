import React from "react";
import Todos from "./Todos";

class DisplayTodos extends React.Component {
    render() {
        const todos = this.props.todos;
        const todolist = todos.map((todo) =>
            <Todos
                key={todo.id}
                id={todo.id}
                todo={todo.desc}
                deleteTodo={this.props.deleteTodo}
            />
        );
        return (
            <div>
                {todolist}
            </div>
        );
    }
}

export default DisplayTodos;