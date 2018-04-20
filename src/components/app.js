import React, { Component } from 'react';
import MadlibForm from './madlib_form';


export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="madlib-heading">
            <h1>Fortune Teller</h1>
            <div className="madlib-subheading">
            No need to have someone read your palms. This fortune-teller has been proven to be 99% correct!
            <h3>Enter your current and/or desireable objects</h3>
            </div>
          </div>  
          <MadlibForm name ="Erick"/>
        </div>
      </div>
    );
  }
}
