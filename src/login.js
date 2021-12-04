import { Button } from 'react-bootstrap';
import React from 'react';
import AuthenticationService from './authenticationservice';
import BusService from './api/busservice';
import './searchTICKET.css'


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            status: null,
            check: null
        }
        this.redirectToSearch = this.redirectToSearch.bind(this);
    }
    signin() {
        BusService.loginService(this.state.username, this.state.password)
            .then(response => {
                console.log(response)
                this.setState({
                    status: response.status,
                    check: "Login successful, You are redirecting to search the bus...!!"
                })
                if (this.state.status === 200) {
                    AuthenticationService.succesfulLogin(this.state.username, this.state.password);
                    console.log(this.state.check)
                    setTimeout(this.redirectToSearch, 2000);
                }
            })
            .catch(response => {
                this.setState({
                    check: "Email-Id and password didnot match!!"
                })
            })
    }
    redirectToSearch() {
        this.props.history.push("/searchbus")
    }
    render() {
        return (
            <div>
                <div class="form-group" style={{ backgroundColor: "white", paddingLeft: "40px", paddingBlockEnd: "10px", paddingRight: "40px", position: "fixed", marginLeft: "40%" }}>
                    <label >Email Id </label>
                    <input type="text" class="form-control" placeholder="Enter email-id" onChange={(e) => this.setState({ username: e.target.value })} />
                    <label >Password</label>
                    <input type="password" class="form-control" placeholder="Enter password" onChange={(e) => this.setState({ password: e.target.value })} /><br />
                    <Button onClick={() => { this.signin() }}>Login</Button>
                </div>
                <div class="form-group">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h3 style={{ color: "white" }}>{this.state.check}</h3>
                </div>
            </div>
        )
    }
}
//,position:"relative",right:"585px" style={{color: "Black",fontSize:25}}
export default Login;