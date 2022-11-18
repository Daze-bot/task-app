/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  }

  onSubmitTask(e) {
    e.preventDefault();
    this.setState((state) => ({
      tasks: state.tasks.concat(state.task),
      task: {
        text: '',
        id: uniqid(),
      },
    }))
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
