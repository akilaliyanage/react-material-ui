import React, { Component } from "react";
import Counter from '../components/counter'

class Counters extends Component {
   
  render() {
      return <div>
          <button onClick={this.props.onReset} className="btn btn-primary m-2">Reset</button>
          {this.props.counters.map(counter => <Counter id={counter.id} key={counter.id} value={counter.value} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter}>
          </Counter>)}
    </div>;
    }
    
   
}

export default Counters;
