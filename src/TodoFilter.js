import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const FILTER = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
}

class TodoFilter extends Component {
  toggleFilter = (filter) => {
    this.props.toggleFilter(filter);
  }

  render() {
    return (
      <>
        <ButtonGroup aria-label="FILTER">
          <Button variant="secondary"
            onClick={this.toggleFilter.bind(this, FILTER.ALL)}
            active={this.props.filter === FILTER.ALL}>
            {FILTER.ALL}
          </Button>
          <Button variant="secondary"
            onClick={this.toggleFilter.bind(this, FILTER.ACTIVE)}
            active={this.props.filter === FILTER.ACTIVE}>
            {FILTER.ACTIVE}
          </Button>
          <Button variant="secondary"
            onClick={this.toggleFilter.bind(this, FILTER.COMPLETED)}
            active={this.props.filter === FILTER.COMPLETED}>
            {FILTER.COMPLETED}
          </Button>
        </ButtonGroup>
      </>
    );
  }
}

export default TodoFilter;