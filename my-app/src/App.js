import React from 'react';
import './App.css';
import { Component } from 'react';

class Count extends Component{
    constructor(props) {
	super(props);
	this.state = {
	    current: props.current
	}
	this.Increment = this.Increment.bind(this);	
	this.Decrement = this.Decrement.bind(this);
    }
    
    Increment = () => {
	let num = this.state.current + 1;
	this.setState({current: num});
	console.log(this.state.current);
    }

    Decrement = () => {
	let num = this.state.current - 1;
	if(num >= 0){	
	    this.setState({current: num});
	    console.log(this.state.current);
	}
	else{
	    alert("Stop! You can't decrement anymore.");
	}
    }
    render(){
	return (
	    <div id='count'>
		<button id='increase' type='button' onClick={this.Increment.bind(this)}>Increment</button>
		<button id='decrease' type='button' onClick={this.Decrement.bind(this)}>Decrement</button> 
	    <p>Count: {this.state.current}</p>
	    </div>
	);
	
    }
}

function App(){
    return (<Count current={1}/>);
}

export default App;
