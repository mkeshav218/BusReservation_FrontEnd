import React from 'react';
import authenticationservice from './authenticationservice';
import background from "./img/modern-bus1.jpg";

class LogOut extends React.Component {

    constructor() {
        super();
        authenticationservice.logOut();
    }

    render() {
        return (
            <div style={{
                backgroundImage: `url(${background})`,
                // backgroundSize: "cover",
                height: "100vh",
            }}>
                <h1 style={{ color: "Purple" }}>Thanks for Visting us...!!</h1>
                <h2 style={{ color: "brown" }}>Have a good day</h2>
            </div>

        )
    }
}

export default LogOut;