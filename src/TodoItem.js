import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {
  onClickComplete = (e) => {
    this.props.onClickComplete(this.props.item.id)
  }

  onClickRemove = (e) => {
    this.props.onClickRemove(this.props.item.id);
  }

  render() {
    let rowClass = '';
    if (this.props.item.isCompleted) {
      rowClass = "text-white-50";
    }

    return (
      <tr>
        <td className={rowClass}>
          {this.props.item.text}
        </td>
        <td onClick={this.onClickComplete}>
          {
            this.props.item.isCompleted ?
              <>&#10004;</> :
              <>&#9744;</>
          }
        </td>
        <td>
          <button className="btn btn-link text-danger"onClick={this.onClickRemove}>
            &times;
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;