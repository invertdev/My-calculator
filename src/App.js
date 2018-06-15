import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='calculator background'>
        <div className='display'></div>
        <div className='center'>
          <div className='row'>
            <div className='button c container'>
              <div>C</div>
            </div>
            <div className='button c container'>
              <div>+/-</div>
            </div>
            <div className='button c container'>
              <div>%</div>
            </div>
            <div className='button e container'>
              <div>÷</div>
            </div>
          </div>
          <div className='row'>
            <div className='button d container'>
              <div>7</div>
            </div>
            <div className='button d container'>
              <div>8</div>
            </div>
            <div className='button d container'>
              <div>9</div>
            </div>
            <div className='button e container'>
              <div>x</div>
            </div>
          </div>
          <div className='row'>
            <div className='button d container'>
              <div>4</div>
            </div>
            <div className='button d container'>
              <div>5</div>
            </div>
            <div className='button d container'>
              <div>6</div>
            </div>
            <div className='button e container'>
              <div>-</div>
            </div>
          </div>
          <div className='row'>
            <div className='button d container'>
              <div>1</div>
            </div>
            <div className='button d container'>
              <div>2</div>
            </div>
            <div className='button d container'>
              <div>3</div>
            </div>
            <div className='button e container'>
              <div>+</div>
            </div>
          </div>
          <div className='row'>
            <div className='button d container'>
              <div>0</div>
            </div>
            <div className='button d container'>
              <div>x10</div>
            </div>
            <div className='button d container'>
              <div>.</div>
            </div>
            <div className='button e container'>
              <div>=</div>
            </div>
          </div>          
        </div>
      </div>
    );
  }
}


export default App;
