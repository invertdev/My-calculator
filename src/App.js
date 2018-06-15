import React from 'react';
import './App.css';

class Calculator extends React.Component {
  state = {
    value: null,
    displayValue: "0",
    waitingForOperand : false,
    operator: null
  };

clearDisplay(){
  this.setState({
    displayValue:'0'
  })
}
inputDigit(digit){ 
  const{displayValue, waitingForOperand} = this.state

  if(waitingForOperand){
    this.setState({
      displayValue: String(digit),
      waitingForOperand:false
    })
  }
  else{

    this.setState({
      displayValue:displayValue === "0"? String(digit) : displayValue + digit
    });

  }
}
inputDot(){
  const {displayValue, waitingForOperand} = this.state

  if(waitingForOperand){
    this.setState({
      displayValue:".",
      waitingForOperand:false
    })
  }
  else if (displayValue.indexOf('.') === -1){
    this.setState({
      displayValue:displayValue + ".",
      waitingForOperand: false
    })

  }
}
toggleSign(){
  const { displayValue } = this.state
  this.setState({
    displayValue:displayValue.charAt(0)==="-" ? displayValue.substr(1) : "-" + displayValue
  })
}
inputPercent(){
  const { displayValue } = this.state
  const value = parseFloat(displayValue)


  this.setState({
    displayValue: String(value / 100)
  })
}
performOperation(nextOperator){
  const {displayValue, operator, value} = this.state
  const nextValue = parseFloat (displayValue)

  const operations ={
    "/" : (prevValue, nextValue) => prevValue / nextValue,
    "*" : (prevValue, nextValue) => prevValue * nextValue,
    "+" : (prevValue, nextValue) => prevValue + nextValue,
    "-" : (prevValue, nextValue) => prevValue - nextValue,
    "=" : (prevValue, nextValue) => nextValue,

  }
  if (value === null){
    this.setState({
      value:nextValue
    })
  }else if(operator){
    const currentValue = value || 0
    const computedValue = operations[operator](currentValue, nextValue)

    this.setState({
      value:computedValue,
      displayValue:String(computedValue)
    })
  }
  this.setState({
    waitingForOperand:true,
    operator:nextOperator
  })
}

  render() {
    const { displayValue } = this.state
    return (
      <div className='calculator background'>
        <div className='display'>
          <div className='display-text'>{displayValue}</div>
        </div>
        <div className='center'>
          <div className='row'>
            <button className='c container' onClick={() => this.clearDisplay()}>
              <div>AC</div>
            </button>
            <button className='c container' onClick={() =>this.toggleSign()}>
              <div>+/-</div>
            </button>
            <button className='c container' onClick={() =>this.inputPercent()}>
              <div>%</div>
            </button>
            <button className='e container' onClick={() => this.performOperation('/')}>
              <div>÷</div>
            </button>
            </div>
          <div className='row'>
            <button className='d container' onClick={() => this.inputDigit(7)}>
              <div>7</div>
            </button>
            <button className='d container' onClick={() => this.inputDigit(8)}>
              <div>8</div>
            </button>
            <button className='d container' onClick={() => this.inputDigit(9)}>
              <div>9</div>
            </button>
            <button className='e container' onClick={() => this.performOperation('*')}>
              <div>x</div>
            </button>
            </div>
          <div className='row'>
            <button className='d container' onClick={() => this.inputDigit(4)}>
              <div>4</div>
            </button>
            <button className='d container' onClick={() => this.inputDigit(5)}>
              <div>5</div>
            </button>
            <button className='d container' onClick={() => this.inputDigit(6)}>
              <div>6</div>
            </button>
            <button className='e container' onClick={() => this.performOperation('-')}>
              <div>-</div>
            </button>
          </div>
          <div className='row'>
            <button className='d container' onClick={() => this.inputDigit(1)}>
              <div>1</div>
            </button>
            <button className='d container' onClick={() => this.inputDigit(2)}>
              <div>2</div>
            </button>
            <button className='d container' onClick={() => this.inputDigit(3)}>
              <div>3</div>
            </button>
            <button className='e container' onClick={() => this.performOperation('+')}>
              <div>+</div>
            </button>
          </div>
          <div className='row'>
            <zero className='d container' onClick={() => this.inputDigit(0)}>
              <div>0</div>
            </zero>
            <button className='d container' onClick={()=> this.inputDot()}>
              <div>.</div>
            </button>
            <button className='e container' onClick={() => this.performOperation('=')}>
              <div>=</div>
            </button>
          </div>          
        </div>
      </div>
    );
  }
}


export default Calculator;
