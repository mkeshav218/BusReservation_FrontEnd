import { Button } from 'react-bootstrap';
import React from 'react';
import busservice from './api/busservice';
import './searchTICKET.css'
class SelectSeat extends React.Component {

    constructor() {
        super();
        this.state = {
            source: null,
            destination: null,
            seatNo: null,
            doj: null,
            busNo: null,
            passengerName: null,
            busName: null,
            pathNo: null,
            errorMessage: null
        }
    }

    book() {
        var userName = sessionStorage.getItem('authenticatedUser');
        var pwd = sessionStorage.getItem('authenticatedPassword');
        busservice.bookTicket(this.state.source, this.state.destination, this.state.seatNo, this.state.doj, this.state.busNo, userName, pwd, this.state.passengerName, this.state.busName, this.state.pathNo)
            .then(response => {
                let data = response.data
                this.props.history.push("/payment", { data: data });
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    errorMessage: "Oops,Reservation Failed...!!"
                })
            })

    }

    componentDidMount() {
        console.log("INSIDE SELECT SEAT")
        this.setState({
            source: this.props.location.state.data[1],
            destination: this.props.location.state.data[2],
            busNo: this.props.location.state.data[8],
            busName: this.props.location.state.data[9],
            pathNo: this.props.location.state.data[0]
        })
    }

    render() {
        return (
            <div>
                <div class="form-group" style={{ backgroundColor: "white", paddingLeft: "40px", paddingBlockEnd: "10px", paddingRight: "40px", position: "fixed", marginLeft: "30%" }}>
                    <h1>SELECT YOUR SEAT</h1>
                    Passenger-Name <input type="text" placeholder="Enter Passenger Name" onChange={(e) => this.setState({ passengerName: e.target.value })} /><br /><br />
                    Seat No <input type="number" placeholder="Enter Seat No" onChange={(e) => this.setState({ seatNo: e.target.value })} /><br /><br />
                    Date of Journey <input type="date" onChange={(e) => this.setState({ doj: e.target.value })} /><br /><br />
                    <Button onClick={() => { this.book() }}>BOOK</Button>
                </div>
                <div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1 style={{ color: "chartreuse" }}>{this.state.errorMessage}</h1>
                </div>
            </div>

        )
    }
}

export default SelectSeat;