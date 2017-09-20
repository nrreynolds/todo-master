import React, { Component } from 'react';
import '../App.css';

// let tasks = [{task: "thing1", date: new Date(), status: "current"}, {task: "thing2", date: new Date(2017, 2, 3), status: "current"}];

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentTask: "",
      tasks: [{task: "thing1", date: new Date(), status: "current"}, {task: "thing2", date: new Date(2017, 2, 3), status: "current"}]
    }
  }

  updateCurrent(e){
    this.setState({currentTask: e.target.value})
  }

  checkBox(e){
    const taskID = e.target.value;
    this.setState((prevState) => {
      const tasks = prevState.tasks;
      tasks[taskID].status = tasks[taskID].status === "current" ? "done" : "current";
      return {tasks: tasks, currentTask: ""}
    })
    // this.forceUpdate();
  }

  showTasks(){
    return this.state.tasks.map((task,index) => {
      return (
        <div key={index} className="ind-task">
          <h4 style={task.status === "done" ? {color: "red", textDecoration: "line-through"}: {}}> {task.task} - {task.date.toDateString()} - {task.date.toTimeString()} </h4>
          <form>
            <label>Done?</label>
            <input type="checkbox" value={index} onChange={this.checkBox.bind(this)}/>
          </form>
        </div>
      )
    })
  }

  createTask(e){
    e.preventDefault();

    this.setState((prevState) => {
      const tasks = prevState.tasks;
      tasks.push({task: this.state.currentTask, date: new Date(), status: "current"});
      return {tasks: tasks};
    })
  }
  render() {
    return (
      <div className="app">
        <h1>Another To-Do App</h1>
        <h3> Create a New Task </h3>
        <form onSubmit={this.createTask.bind(this)} >
          <input type="text" value={this.state.currentTask} onChange={this.updateCurrent.bind(this)} />
          <input type="submit" value="Create" />
        </form>

        <h4> Your Tasks </h4>
        {this.showTasks()}
      </div>
    );
  }
}

export default App;
