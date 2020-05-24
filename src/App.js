import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav'
import Counters from './components/counters';
import ButtonAppBar from './components/navigation'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  }; 

  handleDelete = (counterId) => {
    console.log('delete called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters })
  }

  reset = () => {
    const counters = this.state.counters.map(c => { c.value = 0; return c });
    this.setState({ counters });
  }

  onIncrement = (counter) => {
    console.log('clicked');
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });


  }
  render() {
    return (
      <React.Fragment>
        <ButtonAppBar/>
        <Navbar totalCounters={this.state.counters.filter(c=>c.value).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.reset} onIncrement={this.onIncrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    )
  }
    
}

export default App;
