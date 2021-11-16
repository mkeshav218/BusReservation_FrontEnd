import React from 'react';
import './searchTICKET.css'

// import firebase from './firebase'

class Payment extends React.Component{

    constructor(){
        super();
        this.state={
            passengerName:null,
            source:null,
            destination:null,
            busName:null,
            ticketNo:null,
            seatNo:null,
            doj:null,
            arrivalTime:null,
            departureTime:null
        }
    }

    componentDidMount(){
        console.log(this.props.location.state.data)
        this.setState({
            passengerName : this.props.location.state.data.passengerName,
            source : this.props.location.state.data.source,
            destination : this.props.location.state.data.destination,
            busName : this.props.location.state.data.busName,
            ticketNo : this.props.location.state.data.ticketNo,
            seatNo : this.props.location.state.data.seatNo,
            doj : this.props.location.state.data.doj,
            arrivalTime : this.props.location.state.data.arrivalTime,
            departureTime : this.props.location.state.data.departureTime
        })
    }

    render(){
        return(
            <div>
                <label className="paymentcss">
                        Congratulations,Your booking is confirmed!!<br/>
                        Here are the details :- <br/>
                        Passenger-Name :- {this.state.passengerName}<br/>
                        Source :- {this.state.source}<br/>
                        Destination :- {this.state.destination}<br/>
                        Bus-Name :- {this.state.busName}<br/>
                        Ticket No :- {this.state.ticketNo}<br/>
                        Seat No :- {this.state.seatNo}<br/>
                        Date-Of-Journey :- {this.state.doj}<br/>
                        Departure-Time :- {this.state.departureTime}<br/>
                        Arrival-Time :- {this.state.arrivalTime}<br/>
                        Ticket-Status :- BOOKED
                        </label>
            </div>
        )
    }
}

export default Payment;