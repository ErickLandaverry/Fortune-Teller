import React, { Component } from 'react';
import MadlibForm from './madlib_form';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="madlib-heading">
            <h1>Santa's list</h1>
            <div className="madlib-subheading">
            Tell santa what you want for christmas and why!
            <h3>Fill in the blanks</h3>
            </div>
          </div>  
          <MadlibForm name ="Erick"/>
        </div>
      </div>
    );
  }
}
