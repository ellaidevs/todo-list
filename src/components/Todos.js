import React from "react";

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.state = {
            markTodo: false
        }
    }

    handleSubmit = e => e.preventDefault();

    deleteTodo(e) {
        const id = e.target.id;
        this.props.deleteTodo(id);
    }

    handleMarkTodo = (e) => {
        this.setState({
            markTodo: e.target.checked
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.props.todo} readOnly={true}/>
                <input type="checkbox" onChange={this.handleMarkTodo}/>
                <input type="submit" value="Delete" onClick={this.deleteTodo} id={this.props.id}/>
            </form>
        );
    }
}

export default Todos;