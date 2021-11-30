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
                <div class="form-group" style={{backgroundColor:"white",paddingLeft:"40px",paddingRight:"40px",paddingBlockEnd:"10px", position: "fixed", marginLeft: "40%" }}>
                <label >Cancel Ticket</label>
                <input type="number" class="form-control" placeholder="Enter Ticket No" onChange={(e) => this.setState({ ticketNo: e.target.value })}/><br/>
                <Button onClick={()=>{this.cancel()}}>Cancel Ticket</Button>
               </div>
               <div>
                   <br/><br/><br/><br/><br/><br/>
               <h1  style={{color: "white"}}>{this.state.resAfterReq}</h1>
               </div>
            </div>
            
        )
    }
}

export default Cancel;