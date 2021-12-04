import React from 'react';
import './searchTICKET.css'

// import firebase from './firebase'

class Payment extends React.Component {

    constructor() {
        super();
        this.state = {
            confirmTicket: []
        }
    }

    componentDidMount() {
        console.log(this.props.location.state.data)
        this.setState({
            confirmTicket: this.props.location.state.data
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.confirmTicket.map((p, index) => {
                        return (
                            <label style={{ border: "2px solid", color: "white", fontSize: "20px" }}>
                                Congratulations,Your booking is confirmed!!<br />
                                Here are the details :- <br />
                                Passenger-Name :- {p.passengerName}<br />
                                Source :- {p.source}<br />
                                Destination :- {p.destination}<br />
                                Bus-Name :- {p.busName}<br />
                                Ticket No :- {p.ticketNo}<br />
                                Seat No :-  {p.seatNo}<br />
                                Date-Of-Journey :- {p.doj}<br />
                                Departure-Time :- {p.departureTime}<br />
                                Arrival-Time :- {p.arrivalTime}<br />
                                Ticket-Status :- BOOKED
                            </label>
                        )
                    })
                }

            </div>

        )
    }
}

export default Payment;