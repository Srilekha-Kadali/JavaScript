import React,{Component} from 'react';
import asyncRequest from 'async-request';
import axios from 'axios';

//syntax of a class based component
class RegisterComponent extends Component{
    constructor() {
        super();
        this.state = {
            userName: "",
            email: "",
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            country: "",
            agreeTerms: "",
            countryList:[],
            fakeImages:[],
        }
    }

    //whenever you want to load data to component, 
    //at the time of loading for the 1st time,
    //you need to make an asynchronous call to db to fetch data
    //if call is made in render. coz render works after state update.
    async componentDidMount(){
        //let countryList = await asyncRequest("https://restcountries.eu/rest/v2/all");
        let countryList = await axios("https://restcountries.eu/rest/v2/all");
        console.log(countryList);
        this.setState({countryList:countryList.data});

        let fakeImages = await axios("https://fakerestapi.azurewebsites.net/api/CoverPhotos");
        console.log(fakeImages);
        this.setState({fakeImages:fakeImages.data});
    }

    /*//method where you'll call any external API
    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all").then(result=>{
            console.log(result);
            return result.json();
        }).catch(err=>{
            console.log(err);
        }).then(finalResult=>{
            console.log(finalResult);
        });
    }*/

    handleChange=(e)=>{
        let currentState = this.state;
        
        if(e.target.name=='terms'){
            console.log(e.target.checked);
            currentState[e.target.name]=e.target.checked;
        }
        else{
            currentState[e.target.name]=e.target.value;
        }
        this.setState(currentState);
        console.log(this.state);
    }
    bindDataToDropdown=()=>{
        return this.state.countryList.map((item,index)=>{
            return <option value={item.alpha2Code}>{item.name}</option>
        })
    }

    bindImages=()=>{
        return this.state.fakeImages.map((item,index)=>{
        return <div value={item.ID}>{item.Url}</div>
        })
    }

    render() 
    {
        return <div>
            <div>
                <img name="fakeImages" id="fakeImages" 
                src="https://fakerestapi.azurewebsites.net/api/CoverPhotos" alt="Wait" class="img-thumbnail" 
                onChange={this.handleChange} />
                {this.bindImages()}
            </div>

            <div className="form-group row">
                <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">User Name</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm"
                        name="userName"
                        id="userName" placeholder="Username" 
                        onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm"
                        name="email"
                        id="email" placeholder="Email"
                        onChange={this.handleChange}/>
                        
                </div>
            </div>

            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Country List</label>
                <div className="col-sm-10">
                    <select className="form-control form-control-sm"
                        name="countryList"
                        id="countryList" onChange={this.handleChange}>                        >
                            {this.bindDataToDropdown()}
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm"
                        name="firstName"
                        id="firstName" placeholder="col-form-label-sm" 
                        onChange={this.handleChange}/>
                       
                </div>
            </div>
            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm"
                        name="lastName"
                        id="lastName" placeholder="col-form-label-sm" />
                </div>
            </div>
            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm"
                        name="age"
                        id="age" placeholder="Age"    onChange={this.handleChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="colFormLabel" className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-10">
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="gender1" name="gender" className="custom-control-input"
                        value="M"
                        onChange={this.handleChange} />
                        <label className="custom-control-label" for="gender1">Male</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio"
                        value="F"
                        id="gender2" name="gender" className="custom-control-input" onChange={this.handleChange}/>
                        <label className="custom-control-label" for="gender2">Female</label>
                    </div>
                </div>
            </div>
           
        </div>
    }

    /*render(){
        return <div>
            <form>
            <div className="form-group row">
                <label for="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="username" placeholder="Username" onChange={this.handleInputchange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="firstname" className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="firstname" placeholder="Firstname" onChange={this.handleInputchange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="lastname" className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="lastname" placeholder="Lastname" onChange={this.handleInputchange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleInputchange}/>
                </div>
            </div>

            <fieldset className="form-group">
                <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="gender" value="male" checked onChange={this.handleInputchange}/>
                    <label className="form-check-label" for="male">
                        Male
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="gender" value="female" onChange={this.handleInputchange}/>
                    <label className="form-check-label" for="female">
                        Female
                    </label>
                    </div>
                </div>
                </div>
            </fieldset>

            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms" onChange={this.handleInputchange}/>
                    <label className="form-check-label" for="terms">
                        I agree the terms and conditions
                    </label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    }*/

    /*
    handleInputchange=(e)=>{
        console.log(e.target.value);
        let currentState = this.state;
        currentState[e.target.name]=e.target.value;
        this.setState(currentState);
    }

    render(){
        return <div>
            <br />
            <h2>REGISTER</h2>
            <form>
                <div><label for="username">Username</label>
                <input type="text" placeholder="username" name="username" id="username" onChange={this.handleInputchange}/>
                <p>You entered : {this.state.username}</p>
                </div>
                <br />

                <div><label for="firstname">Firstname</label>
                <input type="text" placeholder="firstname" name="firstname" id="firstname" onChange={this.handleInputchange}/>
                <p>You entered : {this.state.firstname}</p>
                </div>
                <br />

                <div><label for="lastname">Lastname</label>
                <input type="text" placeholder="lastname" name="lastname" id="lastname" onChange={this.handleInputchange}/>
                <p>You entered : {this.state.lastname}</p>
                </div>
                <br />

                <div><label for="email">Email</label>
                <input type="email" placeholder="email" name="email" id="email" onChange={this.handleInputchange}/>
                <p>You entered : {this.state.email}</p>
                </div>
                <br />
                
                <div><label for="age">Age</label>
                <input type="text" placeholder="age" name="age" id="age" onChange={this.handleInputchange}/>
                </div>
                <br />

                <div><label for="gender">Gender</label></div>
                <div>
                <input type="radio" name="gender" if="gender" value="male" checked />
                <label >
                    Male
                </label>
                <input type="radio" name="gender" value="female" checked />
                <label >
                    Female
                </label>
                </div>

                <div><label for="terms"></label>
                <input type="checkbox" name="terms" id="terms" />
                <label>
                I agree terms and Conditions
                </label>
                </div>
                </form>
        </div>;
    }*/
}

export default RegisterComponent;