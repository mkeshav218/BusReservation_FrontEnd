import { Button } from 'react-bootstrap';
import React from 'react';
import busservice from './api/busservice';
import './searchTICKET.css'
let globalArray = []
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
            errorMessage: null,
            passengerInfos: [],
            availableSeats: null,
            showListOfPassenger: false
        }
    }

    async book() {
        var userName = sessionStorage.getItem('authenticatedUser');
        var pwd = sessionStorage.getItem('authenticatedPassword');
        busservice.bookTicket(this.state.source, this.state.destination, this.state.doj, this.state.busNo, userName, pwd, this.state.busName, this.state.pathNo, this.state.passengerInfos)
            .then(response => {
                let data = response.data
                console.log("Inside SEAT SELECT BEFORE REDIRECT")
                console.log(data)
                this.setState({
                    passengerInfos: []
                })
                this.props.history.push("/payment", { data: data });
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    errorMessage: "Oops,Reservation Failed...!!"
                })
            })

    }

    async getAvailableSeats(doj) {
        await busservice.getAvailableSeats(doj, this.state.pathNo)
            .then(response => {
                console.log("Available seats = ")
                console.log(response)
                this.setState({
                    availableSeats: response.data
                })
            })
            .catch(err => {
                console.log("Error Available seats = ")
                console.log(err)
            })

        console.log("All Available seats = ")
        console.log(this.state.availableSeats)
    }

    async addPassenger() {
        console.log("@@@@@@@@@@@@@@@")
        console.log(this.state.seatNo);
        console.log(this.state.passengerName);

        var p1 = new PassengerInfo(this.state.seatNo, this.state.passengerName);
        if (this.state.seatNo != null && this.state.passengerName != null) {
            globalArray.push(p1)
            await this.setState({
                passengerInfos: globalArray,
                showListOfPassenger: true
            })

        }
        console.log("@@@@@@@ PASSENGER LIST UPDATED @@@@@@@@")
        console.log(this.state.passengerInfos);

    }

    componentDidMount() {
        console.log("INSIDE SELECT SEAT")
        this.setState({
            source: this.props.location.state.data[1],
            destination: this.props.location.state.data[2],
            busNo: this.props.location.state.data[8],
            busName: this.props.location.state.data[9],
            pathNo: this.props.location.state.data[0],
            passengerInfos: []
        })
        console.log("Global array = " + globalArray)
        globalArray = [];
        console.log("Global array = " + globalArray)

    }

    render() {
        return (
            <div>
                <div class="form-group" style={{ backgroundColor: "white", paddingLeft: "40px", paddingBlockEnd: "10px", paddingRight: "40px", position: "fixed", marginLeft: "30%" }}>
                    <h1>SELECT YOUR SEAT</h1>
                    Passenger-Name <input type="text" placeholder="Enter Passenger Name" onChange={(e) => this.setState({ passengerName: e.target.value })} /><br /><br />
                    Date of Journey <input type="date" onChange={(e) => {
                        this.setState({ doj: e.target.value })
                        this.getAvailableSeats(e.target.value)
                    }} /><br /><br />
                    {/* Seat No <input type="number" placeholder="Enter Seat No" onChange={(e) => this.setState({ seatNo: e.target.value })} /><br /><br /> */}

                    Seat No<select id="dropdown" onChange={(e) => this.setState({ seatNo: e.target.value })}>
                        <option value=""></option>
                        {
                            this.state.availableSeats ? (
                                this.state.availableSeats.map((state) => {
                                    return <option value={state}>{state}</option>
                                })
                            ) : (
                                    <></>
                                )

                        }

                    </select><br /><br />

                    <Button onClick={() => { this.addPassenger() }}>ADD PASSENGER</Button><br /><br />

                    <Button onClick={() => { this.book() }}>BOOK</Button>

                </div>
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1 style={{ color: "chartreuse" }}>{this.state.errorMessage}</h1>
                </div>
                <div>
                    <br /><br />
                    {
                        this.state.showListOfPassenger ? (
                            this.state.passengerInfos.map((p, index) => {
                                return (
                                    <label style={{ border: "2px solid", color: "white", fontSize: "20px" }}>
                                        Passenger-Name :- {p.passengerName}<br />
                                        Seat No :- {p.seatNo}
                                    </label>
                                )
                            })
                        ) : (
                                <></>
                            )
                    }

                </div>
            </div >


        )
    }
}

class PassengerInfo {
    constructor(seatNo, passengerName) {
        this.seatNo = seatNo;
        this.passengerName = passengerName;
    }
}

export default SelectSeat;