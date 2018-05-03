import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './actions/index';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: [],
    texts: [],
    counter: -1
  }

  componentDidMount(){
    Data.on('value', snapshot => {
        this.setState({texts: snapshot.val()})
      });
  }

  onChange() {
    this.setState({counter: this.state.counter +1},
    ()=>{
      this.setState({items: [...this.state.items, _.map(this.state.texts, (letter) =>{
        return letter[this.state.counter]
      })]
      })  })
  }
  render() {
    console.log(this.state.counter);
    return (
      <div className="App">
      <h1>Kliknij w szary prostokącik i pisz co chcesz ;)</h1>
        <input
               className="Invisible"
               type="text"
               onChange={this.onChange.bind(this)}
        />
      <h2 className="Black">
      <div className="Screen">
      {this.state.items}
      </div>
      </h2>

      </div>
    );
  }
}

export default App;
