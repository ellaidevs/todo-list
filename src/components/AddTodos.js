import React from "react";
import {v4 as uuid} from 'uuid';

class AddTodos extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            input: [],
            todoInputField: ''
        }
    }

    handleChange = e => {
        const id = uuid();
        this.setState({
            todoInputField: e.target.value
        });
        this.setState({
            input: {id: id, desc: e.target.value}
        });
    }

    handleSubmit = e => {
        const todoInput = this.state.input;
        this.props.addTodo(todoInput);
        this.setState({
            todoInputField: ''
        })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Type todo list here..." value={this.state.todoInputField}
                           onChange={this.handleChange}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
}

export default AddTodos;
//TODO: READ about onChange, onSubmit, onClick in React