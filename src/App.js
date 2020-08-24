import React from 'react';

import './App.css';

import DivTest from './Component/DivTest';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentComponentIndex: 1,
    }

    this.handleComponentShowing = this.handleComponentShowing.bind(this);
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.handleClickFour = this.handleClickFour.bind(this);
  }

  handleClickOne() {
    this.setState({
      currentComponentIndex: 1,
    })
  }

  handleClickTwo() {
    this.setState({
      currentComponentIndex: 2,
    })
  }

  handleClickThree() {
    this.setState({
      currentComponentIndex: 3,
    })
  }

  handleClickFour() {
    this.setState({
      currentComponentIndex: 4,
    })
  }
  
  handleComponentShowing(index) {
    switch(index) {
      default: return(
        <div>default</div>
      );
      case(1): return(<DivTest>1</DivTest>);
      case(2): return(<DivTest>2</DivTest>);
      case(3): return(<DivTest>3</DivTest>);
      case(4): return(<DivTest>4</DivTest>);
    }
  }

  render() {
    const { currentComponentIndex } = this.state;

    return (
      <div 
        className="App"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100px",
          justifyContent: "space-between",
        }}
      >
        <button onClick={this.handleClickOne}>1</button>
        <button onClick={this.handleClickTwo}>2</button>
        <button onClick={this.handleClickThree}>3</button>
        <button onClick={this.handleClickFour}>4</button>
        {
          this.handleComponentShowing(currentComponentIndex)
        }
      </div>
    )
  }
}

export default App;
