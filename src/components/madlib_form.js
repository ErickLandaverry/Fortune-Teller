import React, {Component} from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';

import _ from 'lodash';

import MadlibContent from './madlib_content';

function MadlibInput(props) {
    return (
        <Col md="4" className='input-wrapper'>
            <Row>
                <Col md="2">
                <label className="green-label">{props.index}</label>
                </Col>
                <Col md="10">
                    <input placeholder={props.placeholder} value= {props.state} type='text' onChange = {props.onChange}/>
                </Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="10">
                    <div className="input-description">{props.placeholder}</div>
                </Col>    
            </Row>
        </Col>
    );
}

class MadlibForm extends Component {

    constructor(props) {
        super(props)

        this.state ={
            completedForm:false,
            name: '',
            location: '',
            gift1: '',
            gift2: '',
            Reason: '',


        }

    }
    handleChange = function(props){
        return function(event){
            //console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this);
    }

    handleSubmit = function(event) {
                this.setState({completedForm: true});
                event.preventDefault();
            }.bind(this);

    handleClick = function() {
        this.setState({
            completedForm: false,
            name: '',
            location: '',
            gift1: '',
            gift2: '',
            reason1: '',
            reason2: '',
        });
    }.bind(this)

    renderButton = function() {
        if(this.state.completedForm) {
            return <a className="clear-button" onClick={this.handleClick}>Feel like you're telling a lie? Clear List</a>
        }
        return <input type="submit" className="generate-button" value="Send Santa your letter" /> 
            }       
    render() {

        this.inputData = [
                        {placeholder: 'Name', prop: 'name', state: this.state.color},
                        {placeholder: 'Location', prop: 'location', state: this.state.pluralNoun},
                        {placeholder: 'Gift 1', prop: 'gift1', state: this.state.adjectiveOne},
                        {placeholder: 'Gift 2', prop: 'gift2', state: this.state.celebrityOne},

                        {placeholder: 'Reason 1', prop: 'reason1', state: this.state.color},
                        {placeholder: 'Reason 2', prop: 'reason2', state: this.state.color},
                        
            
                        
            
                    ]
   
    return(
        <div className="card-wrapper">
            <Card>
            <form onSubmit={this.handleSubmit} id="madlib-form">
                    <Row style={{textAlign: 'center', color: 'white'}}>
                        {
                            _.map(this.inputData, (data, indexKey) => {
                                return <MadlibInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                            })
                        }
                    </Row>
                    <Row>
                        <Col md="12" className="button-wrapper">
                            {this.renderButton()}
                        </Col>
                    </Row>
                </form>
                <MadlibContent data={this.state}/>
                
            </Card>
        </div>
        
      );
    }
  }

export default MadlibForm;