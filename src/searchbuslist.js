import React from 'react';
import { Button } from 'react-bootstrap';
// import BusService from './api/busservice';
// import AuthenticationService from './authenticationservice';

class SearchBusList extends React.Component {
    constructor() {
        super();
        this.state = {
            length: [],
            fromTime: null,
            toTime: null,
            typeOfUser: "unauthorized",
            count: 0,
            showBusList: false
        }
    }
    async componentDidMount() {
        await this.setState({
            length: this.props.location.state.data,
            showBusList: this.props.location.state.length
        })
        console.log("Data received :- ")
        console.log(this.state.length)
        console.log("Check whether to showbuslist :- ")
        console.log(this.state.showBusList)
    }
    seatSelect(bus) {
        console.log("seatSelect method called ")
        console.log(bus)
        this.props.history.push("/seatselect", { data: bus })
    }

    render() {
        return (
            <div>
                {/* <table className="table table-dark">  */}
                <br /><br />
                {
                    this.state.showBusList ? (
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Source</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Departure_Time</th>
                                    <th scope="col">Arrival_Time</th>
                                    <th scope="col">Fare</th>
                                    <th scope="col">Bus_Name</th>
                                    <th scope="col">Bus_Type</th>
                                    <th scope="col">Select_Bus</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.length.map((bus, index) => {
                                        return (
                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{bus[1]}</td>
                                                <td>{bus[2]}</td>
                                                <td>{bus[5]}</td>
                                                <td>{bus[6]}</td>
                                                <td>{bus[7]}</td>
                                                <td>{bus[9]}</td>
                                                <td>{bus[10]}</td>
                                                <td><Button onClick={() => { this.seatSelect(bus) }}>CHOOSE BUS</Button></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    ) : (
                            <label >NO BUS FOUND</label>
                        )

                }


            </div>


        )
    }
}

export default SearchBusList;