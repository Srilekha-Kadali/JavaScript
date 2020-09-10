import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
// App is a funct, returning html 
//This is cal Pure component/stateless component
const App = ()=>{
    const companyName="Pega Systems";
    return <div>
        <Header title={companyName}/>
        <Register />
        <Login />
        </div>;
};
//title is a property of header which 
//is asking app.js to pass its company name to it.
//exporting a function
export default App;