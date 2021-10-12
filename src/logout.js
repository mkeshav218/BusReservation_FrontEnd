import React from 'react';
import authenticationservice from './authenticationservice';
class LogOut extends React.Component{

    constructor(){
        super();
        authenticationservice.logOut();
    }
    
    render(){
        return(
            <div>
                <h1  style={{color: "Purple"}}>Thanks for Visting us...!!</h1>
                <h2 style={{color:"brown"}}>Have a good day</h2>
            </div>
        )
    }
}

export default LogOut;