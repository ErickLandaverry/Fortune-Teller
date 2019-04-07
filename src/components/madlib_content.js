import React, { Component } from 'react';

class MadlibContent extends Component {
    render() {
        this.count = 1
        const data = this.props.data;
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>
                <div className="content-wrapper">
                Hello,{this.renderLabel(data.name)}. It looks like you are located in {this.renderLabel(data.location)} , Santa is currently in the North Pole, but will get to you soon!. So, you want a {this.renderLabel(data.gift1)} ,eh? Well have you been naughty or nice? Santa will decide how you have been this year! Why don't you tell me another gift that you want.{this.renderLabel(data.gift2)} What!? you want that! You are out of your mind! That's so expensive! Tough luck, kiddo! Alright, Alright, I will let you state why you deserve this. Why do you feel like you deserve this?{this.renderLabel(data.reason1)}. oh Geez! that's what everyone says! Try again. A {this.renderLabel(data.reason2)} ugh, I guess you can have that! Merry Christmas!;
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