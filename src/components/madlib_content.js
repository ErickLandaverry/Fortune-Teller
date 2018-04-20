import React, { Component } from 'react';

class MadlibContent extends Component {
    render() {
        this.count = 1
        const data = this.props.data;
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>
                <div className="content-wrapper">
                Hello,{this.renderLabel(data.name)}. Your fortune is looking really sketchky, actually. Let's take a look at this. You are to be living in {this.renderLabel(data.location)} in 10 years. You will not be driving a {this.renderLabel(data.car)}. #Sorry Not Sorry! No way!? You work at {this.renderLabel(data.job)}? Dont work there! quit! I see you are a {this.renderLabel(data.horoscope)}. I've heard that you guys are crazy! Nonetheless, by the power invested in my fortune teller vudu, you will be succesfull in life! (P.S) {this.renderLabel(data.secretCrush)} didn't like you in high school. 
                </div>
            </div>
        )
    }

renderLabel = function(state) {
    return (
        <span>
            <label className="black-label">{this.count++}</label><b className="bold-text">{state}</b>
        </span>
        )
    }.bind(this);
}

export default MadlibContent;