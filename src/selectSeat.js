import { Button } from 'react-bootstrap';
import React from 'react';
import busservice from './api/busservice';
import './searchTICKET.css'
class SelectSeat extends React.Component{

    constructor(){
        super();
        this.state={
            source:null,
            destination:null,
            seatNo:null,
            doj:null,
            busNo:null,
            passengerName:null,
            busName:null
        }
    }

    book(){
        var userName = sessionStorage.getItem('authenticatedUser');
        var pwd = sessionStorage.getItem('authenticatedPassword');
        busservice.bookTicket(this.state.source,this.state.destination,this.state.seatNo,this.state.doj,this.state.busNo,userName,pwd,this.state.passengerName,this.state.busName)
        .then(response =>{
            let data = response.data
            this.props.history.push("/payment",{data:data });
        }) 
        .catch(response =>{
            console.log(response)
        })

    }

    componentDidMount(){
        console.log("INSIDE SELECT SEAT")
        this.setState({
            source:this.props.location.state.data[1],
            destination:this.props.location.state.data[2],
            busNo:this.props.location.state.data[8],
            busName:this.props.location.state.data[9]
        })
    }

    render(){
        return(
            <div>
                <h1>SEAT SELECT UI</h1>
                Passenger-Name <input type="text" onChange={(e)=>this.setState({passengerName:e.target.value})}/><br/><br/>
                Seat No <input type="number" onChange={(e)=>this.setState({seatNo:e.target.value})}/><br/><br/>
                Date of Journey <input type="date" onChange={(e)=>this.setState({doj:e.target.value})}/><br/><br/>
                <Button onClick={()=>{this.book()}}>BOOK</Button>
            </div>
        )
    }
}

export default SelectSeat;