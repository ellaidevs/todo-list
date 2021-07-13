import React from "react";
import AddTodos from "./AddTodos";
import DisplayTodos from "./DisplayTodos";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    addTodo = todo => {
        if (todo.length === 0) return; //avoid empty todos being added
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    deleteTodo = id => {
        const currTodoList = this.state.todos;
        const updatedTodo = currTodoList.filter((todo) => {
            return todo.id !== id;
        })
        this.setState({
            todos: updatedTodo
        })
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <AddTodos addTodo={this.addTodo}/>
                <DisplayTodos
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        );
    }
}

export default TodoList;