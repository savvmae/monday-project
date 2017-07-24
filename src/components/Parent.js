import React, { Component } from 'react';

import ChildComponent from './Child';
import DisplayComponent from './Display';


export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});
    console.log(this.state)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    let whatToSay = this.state.whatToSay
    this.setState({whatToSay: '', whatWasSaid: whatToSay});
    //clear our input by resetting state

  }
  render() {
    return (
      <div>What do you want to say??
        <div>
          <input onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" value={this.state.whatToSay} />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}