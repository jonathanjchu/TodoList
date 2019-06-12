import React, { Component } from 'react';
import './App.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newTodoText: '',
      isValid: false
    };
  }

  onItemTextChange = (e) => {
    this.setState({
      newTodoText: e.target.value,
      isValid: (e.target.value.length > 2)
    });
  }

  onTodoSubmit = (e) => {
    e.preventDefault();

    if (this.state.isValid) {
      this.props.addNewTodo(this.state.newTodoText);
      this.setState({
        newTodoText: '',
        isValid: false
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.onTodoSubmit} className="form text-right">
      <input type="text"
        name="item"
        id="item"
        onChange={this.onItemTextChange}
        value={this.state.newTodoText}
        className="form-control" />
      <input type="submit" value="Add to Todo" className="btn btn-dark" disabled={!this.state.isValid} />
    </form>
    );
  }
}

export default TodoForm;