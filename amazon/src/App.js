import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';

// App is a funct, returning html 
//This is cal Pure component/stateless component
/*const App = ()=>{
    const companyName="Pega Systems";
    return <div>
        <Header title={companyName}/>
        <ProductList />
        </div>;
};*/
export class App extends Component{
    constructor(){
        super();
        this.state={
            companyName:"",
            cartCount:0
        }
    }
    handleClick=(data)=>{
        console.log(data);
        this.setState({cartCount:this.state.cartCount});
    }

    render(){
        return <div>
            <Header title={this.state.companyName} 
            cartCount={this.state.cartCount} />
            {}
            <ProductList updateCart={this.handleClick}/>
        </div>
    }
};
//title is a property of header which 
//is asking app.js to pass its company name to it.
//exporting a function
export default App;