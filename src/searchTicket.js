import { Button } from 'react-bootstrap';
import React from 'react';
import busservice from './api/busservice';

class Search extends React.Component{

    constructor(){
        super();
        this.state={
            ticketNo:null,
	        email:null,
	        password:null
        }
    }

    searchTicket(){
        busservice.searchTicketDetails(this.state.ticketNo,sessionStorage.getItem("authenticatedUser"),sessionStorage.getItem("authenticatedPassword"))
        .then(response =>{
            console.log(response);
        })
        .catch(response => {
            console.log(response);
        })

        // BusService.loginService(this.state.username,this.state.password)
        // .then(response =>{
        //     console.log(response)
        //     this.setState({
        //         status:response.status,
        //         check:"Login successful, You are redirecting to search the bus...!!"
        //     })
        //     if(this.state.status===200){
        //         AuthenticationService.succesfulLogin(this.state.username,this.state.password);
        //         console.log(this.state.check)
        //         setTimeout(this.redirectToSearch,2000);
        //     }
        // })
        // .catch(response =>{
        //     this.setState({
        //         check:"Email-Id and password didnot match!!"
        //     })
        // })   
    }

    render(){
        return(
            <div>
                Ticket No <input type="number" onChange={(e)=>this.setState({ticketNo:e.target.value})}/><br/><br/>
                <Button onClick={()=>{this.searchTicket()}}>Search</Button>
            </div>
        )
    }
}

export default Search;