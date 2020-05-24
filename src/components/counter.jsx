import React, { Component } from "react";

class Counter extends Component {
  

  render() {
    console.log(this.props.id);
    return (
      <div>
        <span className={this.FormatColor()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete </button>
      </div>
    );
  }

  FormatColor() {
    let classes = "badge m-2 badge-";
    classes += this.props.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //const { count } = this.props;

    return this.props.value == 0 ? "Zero" : this.props.value;
  }

 
}

export default Counter;
