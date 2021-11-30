import { Button } from 'react-bootstrap';
import React from 'react';
import BusService from './api/busservice';
import './searchTICKET.css'

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            firstName:null,
            lastName:null,
            email:null,
            password:null,
            phone:null,
            status:null,
            check:null
        }
        this.redirectToLogin = this.redirectToLogin.bind(this);

    }
    register(){
        BusService.registerService(this.state.firstName,this.state.lastName,this.state.email,this.state.password,this.state.phone)
        .then(response =>{
            if(response.status ===200){
                this.setState({
                    status:response.status,
                    check:"Your registration is successful, You are redirecting to Login...!!"
                    
                })
                setTimeout(this.redirectToLogin,2000);
            }
        }) 
        .catch(err =>{
            console.log(err)
            this.setState({
                check:"User Already Exists...!!"
                
            })
        })
    }
    redirectToLogin(){
        this.props.history.push("/login")
    }
    render(){
        return(
            <div>
                <div>
                First Name <input type="text" onChange={(e)=>this.setState({firstName:e.target.value})}/><br/><br/>
                Last Name <input type="text" onChange={(e)=>this.setState({lastName:e.target.value})}/><br/><br/>
                Email id <input type="text" onChange={(e)=>this.setState({email:e.target.value})}/><br/><br/>
                Password <input type="password" onChange={(e)=>this.setState({password:e.target.value})}/><br/><br/>
                Confirm Password <input type="password"/><br/><br/>
                Contact Number <input type="number" onChange={(e)=>this.setState({phone:e.target.value})}/><br/><br/>
                <Button onClick={()=>{this.register()}}>Sign Up</Button>
                <h3 style={{color: "Green"}}>{this.state.check}</h3>
                </div>
            </div>
        )
    }
}

export default Register;