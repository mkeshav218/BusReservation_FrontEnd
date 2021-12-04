import React from 'react';
import { Button } from 'react-bootstrap';
import BusService from './api/busservice';

class Reserve extends React.Component {

    constructor() {
        super();
        this.state = {
            "source": null,
            "destination": null,
            "seatNo": null,
            "doj": null,
            "busNo": null
        }
    }
    reservation() {
        var userName = sessionStorage.getItem('authenticatedUser');
        var pwd = sessionStorage.getItem('authenticatedPassword');
        BusService.bookTicket(this.state.source, this.state.destination, this.state.seatNo, this.state.doj, this.state.busNo, userName, pwd)
            .then(response => {
                console.log(response)
                this.props.history.push("/payment");
            })
            .catch(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                Source <select id="dropdown" onChange={(e) => this.setState({ source: e.target.value })}>
                    <option value=""></option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Dombivli">Dombivli</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                </select><br /><br />

                Destination <select id="dropdown" onChange={(e) => this.setState({ destination: e.target.value })}>
                    <option value=""></option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Dombivli">Dombivli</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                </select><br /><br />

                Seat No <input type="number" onChange={(e) => this.setState({ seatNo: e.target.value })} /><br /><br />
                Date of Journey <input type="date" onChange={(e) => this.setState({ doj: e.target.value })} /><br /><br />
                Bus No <input type="password" onChange={(e) => this.setState({ busNo: e.target.value })} /><br /><br />
                <Button onClick={() => { this.reservation() }}>Proceed To Payment</Button>
            </div>

        )
    }
}

export default Reserve;