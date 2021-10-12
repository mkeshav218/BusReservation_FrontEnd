import React from 'react';
import { Button } from 'react-bootstrap';
import BusService from './api/busservice';

class Cancel extends React.Component{

    constructor(){
        super();
        this.state={
            ticketNo:null
        }
    }

    cancel(){
        var userName = sessionStorage.getItem('authenticatedUser');
        var pwd = sessionStorage.getItem('authenticatedPassword');
        BusService.cancelTicket(this.state.ticketNo,userName,pwd)
        .then(response=>{
            console.log(response);
        })
        .catch(response=>{
            console.log(response);
        })
    }

    render(){
        return(
            <div>
                Ticket No <input type="number" onChange={(e)=>this.setState({ticketNo:e.target.value})}/><br/><br/>
                <Button onClick={()=>{this.cancel()}}>Cancel Ticket</Button>
            </div>
        )
    }
}

export default Cancel;