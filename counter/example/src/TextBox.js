//react hooks
import React,{useState} from 'react';

//state feature is used to update component
/*const TextBox = () =>{
    //handleChange is the event setting for hooks
    //useState hook takes data as i/p; it is mapped to array 1st eleemet data
    const [data, handleChange] = useState("Enter");

    return <div>
        <input type="text" value={data}
        onChange = { e=>{
            handleChange(e.target.value);
        }
        }
        />
        <h6> {data} </h6>
        </div>
}*/

const TextBox = () =>{
    const [register, handleChange] = useState({
        firstName:"",
        lastName:"",
        age:"",
        gender:""
    });

    return <div>
        <input type="text" name="firstName" 
        value={register.firstName}
        onChange={e=>{
            handleChange({...register,firstName:e.target.value});
        }}/>
        <h6>{register.firstName}</h6>
        <br />
        <input type="text" name="lastName" 
        value={register.lastName}
        onChange={e=>{
            handleChange({...register,lastName:e.target.value});
        }}/>
        <h6>{register.lastName}</h6>
        <br />
        </div>
}

export default TextBox;