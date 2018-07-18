import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './Styles.css'


class App extends Component {

  constructor(props) {
    // initialize the parent class which is Component
    super(props)

    this.state = {
      counter : 0
      
    }
  }

  handleStepperViewTextBoxChange = ((e) => { 

      this.setState({
        counter : parseInt(e.target.value)
      })
  })

  handleIncrementButtonClick = (()=> {

    //console.log(this.state.counter)

    this.setState({
      counter : this.state.counter + 1
    })

    console.log(this.state)
        
  })

  handleDecrementButtonClick = (()=> {

    //console.log(this.state.counter)

    this.setState({
      counter : this.state.counter - 1
    })

    console.log(this.state)
        
  })
   
  
  render() {
    return (
      <div className='StepperViewControl'>
      <button className='CounterBtn'onClick={this.handleDecrementButtonClick}>-</button>
      {/* <input onChange={this.handleStepperViewTextBoxChange} type="text" /> */}
      <input className='counterTextBox'value = {this.state.counter} type="text" />
      <button className='CounterBtn' id="IncrementButton"onClick={this.handleIncrementButtonClick}>+</button>
      </div>
    )
  }
}

export default App;
