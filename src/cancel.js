import React from 'react';
import { Button } from 'react-bootstrap';
import BusService from './api/busservice';

class Cancel extends React.Component{

    constructor(){
        super();
        this.state={
            ticketNo:null,
            resAfterReq:null
        }
    }

    cancel(){
        var userName = sessionStorage.getItem('authenticatedUser');
        var pwd = sessionStorage.getItem('authenticatedPassword');
        BusService.cancelTicket(this.state.ticketNo,userName,pwd)
        .then(response=>{
            console.log(response.data);
            this.setState({
                resAfterReq:response.data
            })
        })
        .catch(response=>{
            console.log(response);
            this.setState({
                resAfterReq:"Ticket can't be cancelled...!!"
            })
        })
    }

    render(){
        return(
            <div>
                Ticket No <input type="number" onChange={(e)=>this.setState({ticketNo:e.target.value})}/><br/><br/>
                <Button onClick={()=>{this.cancel()}}>Cancel Ticket</Button>
                <h1  style={{color: "Purple"}}>{this.state.resAfterReq}</h1>
            </div>
        )
    }
}

export default Cancel;