import { Button } from 'react-bootstrap';
import React from 'react';
import busservice from './api/busservice';
import './searchTICKET.css'
import { Form ,input} from "react-bootstrap";
class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            passengerName: null,
            ticketNo: null,
            email: null,
            password: null,
            source: null,
            destination: null,
            doj: null,
            busName: null,
            bookingDate: null,
            busType: null,
            fare: null,
            departureTime: null,
            arrivalTime: null,
            ticketStatus: null,
            showData: false,
            customInfo: null
        }
    }

    searchTicket() {
        busservice.searchTicketDetails(this.state.ticketNo, sessionStorage.getItem("authenticatedUser"), sessionStorage.getItem("authenticatedPassword"))
            .then(response => {
                console.log(response.data);
                this.setState({
                    showData: true,
                    passengerName: response.data.passengerName,
                    source: response.data.source,
                    destination: response.data.destination,
                    doj: response.data.doj,
                    busName: response.data.busName,
                    bookingDate: response.data.bookingDate,
                    busType: response.data.busType,
                    fare: response.data.fare,
                    departureTime: response.data.startTime,
                    arrivalTime: response.data.reachTime,
                    ticketStatus: response.data.ticketStatus
                })
            })
            .catch(response => {
                console.log(response);
                this.setState({
                    showData: false,
                    customInfo: "NO TICKET FOUND FOR TICKET-ID :- " + this.state.ticketNo
                })
                console.log(this.state.showData);
            })
    }

    render() {
        return (
            <div>
                {/* Ticket No <input type="number" onChange={(e) => this.setState({ ticketNo: e.target.value })} /><br /><br />
                <Button onClick={() => { this.searchTicket() }}>Search</Button><br /><br />
                {
                    this.state.showData ? (
                        <label className="group">
                            Passenger-Name :- {this.state.passengerName}<br />
                            Source :- {this.state.source}<br />
                            Destination :- {this.state.destination}<br />
                            Date-Of-Journey :- {this.state.doj}<br />
                            Bus-Name :- {this.state.busName}<br />
                            Booking-Date :- {this.state.bookingDate}<br />
                            Bus-Type :- {this.state.busType}<br />
                            Fare :- {this.state.fare}<br />
                            Departure-Time :- {this.state.departureTime}<br />
                            Arrival-Time :- {this.state.arrivalTime}<br />
                            Ticket-Status :- {this.state.ticketStatus}
                        </label>
                    ) : (
                        <label style={{color: "white",fontSize:30}} >{this.state.customInfo}</label>
                    )
                } */}
                
                    <form>
                        <div class="form-group" style={{backgroundColor:"white",paddingLeft:"50px",paddingRight:"50px"}}>
                            <label style={{color: "Black",fontSize:25,position:"relative",right:"550px"}}>Search Ticket</label>
                            <input type="number" class="form-control" placeholder="Enter Ticket No" /><br/>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                
            </div>

        )
    }
}

export default Search;