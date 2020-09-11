//In a stateful component, we'll use techinique of 
// class based components.

import React,{Component} from 'react';
import Dropdown from './Dropdown';

//syntax of a class based component
class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    //this.state is an obj

    ///*alternate way to do
    //OnChange Handler --- Event Binding
    //e.target.value changes acc to which input field it is being called for.
    handleInputchange=(e)=>{
        console.log(e.target.value);
        let currentState = this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
    }

    render(){
        var names = ["Srilekha","Sandhya","Roshini"];
        var states = ["AP", "TS"];
        return <div>
            <br />
            <h2>LOGIN</h2>
            <input type="text" placeholder="UserName" name="username" onChange={this.handleInputchange}/>
            <input type="text" placeholder="Password" name="password" onChange={this.handleInputchange}/>
            <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>
            <Dropdown list={names}/>
            <Dropdown list={states} />
            </div>
    }
    //*/
    /*
    render(){
        return <div>
            <h1>LOGIN</h1>
            <input type="text" onChange={e=>{
                console.log(e.target.value);
            }}/>
            </div>;
    }*/
}

export default LoginComponent;