import React, { Component } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';


const FILTER = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [], // [{ id, text, isCompleted }]
      message: '',
      filter: FILTER.ALL
    };
  }

  addNewTodoItem = (itemText) => {
    let todoList = [...this.state.todoList];

    if (!todoList.find(x => x.text === itemText)) {
      let id = todoList.reduce((memo, x) => x.id > memo ? x.id : memo, 0);

      todoList.push({
        id: id + 1,
        text: itemText,
        isCompleted: false
      });

      this.setState({ todoList: todoList, message: '' });
    }
    else {
      this.setState({ message: `"${itemText}" is already on the Todo list` });
    }
  }

  toggleCompleteAll = () => {
    let todoList = [...this.state.todoList];

    let isAllCompleted = todoList.reduce((memo, x) => x.isCompleted ? memo : false, true);

    if (!isAllCompleted) {
      todoList = todoList.map(x => {
        x.isCompleted = true;
        return x;
      });
    }
    else {
      todoList = todoList.map(x => {
        x.isCompleted = false;
        return x;
      });
    }

    this.setState({ todoList: todoList });
  }

  removeItem = (id) => {
    let todoList = [...this.state.todoList];

    this.setState({
      todoList: todoList.filter(x => x.id !== id)
    });
  }

  toggleComplete = (id) => {
    let todoList = [...this.state.todoList];

    let item = todoList.find(x => x.id === id);
    item.isCompleted = !item.isCompleted;

    this.setState({
      todoList: todoList
    });
  }

  toggleFilter = (f) => {
    this.setState({
      filter: f
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-left">Todo List</h1>
                <TodoForm addNewTodo={this.addNewTodoItem} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                {this.state.message}&nbsp;
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-left">
                {this.state.todoList.filter(x => !x.isCompleted).length} items left to do
              </div>
              <div className="col text-right">
                <TodoFilter toggleFilter={this.toggleFilter} filter={this.state.filter} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <table className="table table-striped table-dark bg-dark">
                  <thead>
                    <tr>
                      <th className="col">Item</th>
                      <th onClick={this.toggleCompleteAll}>&#10004;</th>
                      <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.todoList.filter((f) => 
                      {
                        switch(this.state.filter) {
                          case FILTER.ACTIVE:
                            return !f.isCompleted;
                          case FILTER.COMPLETED:
                            return f.isCompleted;
                          default:
                            return true;
                        }
                      }) .map((x, i) =>
                        <TodoItem key={x.id}
                          item={x}
                          onClickRemove={this.removeItem}
                          onClickComplete={this.toggleComplete} />
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;