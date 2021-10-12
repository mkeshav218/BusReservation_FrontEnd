import { Button } from 'react-bootstrap';
import React from 'react';
import AuthenticationService from './authenticationservice';
import BusService from './api/busservice';
//import { useHistory } from "react-router-dom";
//import { useHistory } from 'react-router';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:null,
            password:null,
            status:null,
            check:null
        }
        this.redirectToSearch = this.redirectToSearch.bind(this);
    }
    signin(){
        BusService.loginService(this.state.username,this.state.password)
        .then(response =>{
            console.log(response)
            this.setState({
                status:response.status,
                check:"Login successful, You are redirecting to search the bus...!!"
            })
            if(this.state.status===200){
                AuthenticationService.succesfulLogin(this.state.username,this.state.password);
                console.log(this.state.check)
                setTimeout(this.redirectToSearch,2000);
            }
        })
        .catch(response =>{
            this.setState({
                check:"Email-Id and password didnot match!!"
            })
        })        
    }
    redirectToSearch(){
        this.props.history.push("/searchbus")
    }
    render(){
        return(
            <div>
                Email Id <input type="text" onChange={(e)=>this.setState({username:e.target.value})}/><br/><br/>
                Password <input type="password" onChange={(e)=>this.setState({password:e.target.value})}/><br/><br/>
                <Button onClick={()=>{this.signin()}}>Login</Button>
                <h3 style={{color: "Green"}}>{this.state.check}</h3>
            </div>
        )
    }
}

export default Login;