/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>
        })}
      </ul>
    );
  }
}

export default Overview;
