import React from 'react';
import { Button } from 'react-bootstrap';
import BusService from './api/busservice';
import AuthenticationService from './authenticationservice';

class SearchBus extends React.Component {
    constructor() {
        super();
        this.state = {
            src: null,
            dest: null,
            fromTime: null,
            toTime: null,
            typeOfUser: "unauthorized"
        }
    }
    async searchbus() {
        console.log(AuthenticationService.isUserLoggedIn())
        if (await AuthenticationService.isUserLoggedIn()) {
            this.setState({
                typeOfUser: "authorized"
            })
        }
        BusService.searchBusService(this.state.src, this.state.dest, this.state.fromTime, this.state.toTime, this.state.typeOfUser)
            .then(response => {
                console.log(response.data)
                let length = true;
                let data = response.data;
                this.props.history.push("/searchbuslist", { length: length, data: data })
            })
            .catch(err => {
                let length = false;
                let data = err.data;
                this.props.history.push("/searchbuslist", { length: length, data: data })
            })
    }
    render() {
        return (
            <div>
                <label style={{ color: "white", fontSize: 100 }}>Choose Your Destination</label><br /><br />

                <label style={{ color: "white", fontSize: 30 }}>Source </label>
                <select id="dropdown" onChange={(e) => this.setState({ src: e.target.value })} style={{ fontSize: 15 }} >
                    <option value=""></option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Dombivli">Dombivli</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                </select><br /><br />

                <label style={{ color: "white", fontSize: 30 }}>Destination</label>
                <select id="dropdown" onChange={(e) => this.setState({ dest: e.target.value })}>
                    <option value=""></option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Dombivli">Dombivli</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                </select><br /><br />
                <label style={{ color: "white", fontSize: 30 }}>From Time</label>
                <input type="time" onChange={(e) => { this.setState({ fromTime: e.target.value }) }} />
                <label style={{ color: "white", fontSize: 30 }}>To Time</label><input type="time" onChange={(e) => { this.setState({ toTime: e.target.value }) }} /><br /><br />
                <Button onClick={() => { this.searchbus() }} style={{ fontSize: 20 }}>Search Bus</Button>
            </div>


        )
    }
}

export default SearchBus;