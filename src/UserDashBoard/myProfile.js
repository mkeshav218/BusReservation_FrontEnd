import React from 'react';
import APiService from '../api/busservice'
import { Button } from 'react-bootstrap';
class MyProfile extends React.Component{

    constructor(){
        super();
        this.state = {
            username: null,
            firstName: null,
            lastName: null,
            phoneNo : null,
            dateOfBirth:null,
            updatedDob:null,
            gender:null,
            updatedGender:null,
            noOfBookedTicket:null,
            wallet:null,
            updatedWallet:null
        }
    }

    updateDob(){
        let userName = sessionStorage.getItem('authenticatedUser');
        let password = sessionStorage.getItem('authenticatedPassword');
        APiService.updateDob(userName,password,this.state.updatedDob)
        .then(resp=>{
            console.log(resp);
            APiService.getUserDetails(userName,password)
            .then(resp=>{
                console.log(resp)
                this.setState({
                    userName:resp.data.email,
                    firstName:resp.data.firstName,
                    lastName:resp.data.lastName,
                    phone:resp.data.phone,
                    dateOfBirth:resp.data.dateOfBirth,
                    gender:resp.data.gender,
                    noOfBookedTicket:resp.data.noOfBookedTicket,
                    wallet:resp.data.wallet
                })
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    updateGender(){
        let userName = sessionStorage.getItem('authenticatedUser');
        let password = sessionStorage.getItem('authenticatedPassword');
        APiService.updateGender(userName,password,this.state.updatedGender)
        .then(resp=>{
            console.log(resp)
            APiService.getUserDetails(userName,password)
            .then(resp=>{
                console.log(resp)
                this.setState({
                    userName:resp.data.email,
                    firstName:resp.data.firstName,
                    lastName:resp.data.lastName,
                    phone:resp.data.phone,
                    dateOfBirth:resp.data.dateOfBirth,
                    gender:resp.data.gender,
                    noOfBookedTicket:resp.data.noOfBookedTicket,
                    wallet:resp.data.wallet
                })
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    updateWallet(){
        let userName = sessionStorage.getItem('authenticatedUser');
        let password = sessionStorage.getItem('authenticatedPassword');
        APiService.updateWallet(userName,password,this.state.updatedWallet)
        .then(resp=>{
            console.log(resp)
            APiService.getUserDetails(userName,password)
            .then(resp=>{
                console.log(resp)
                this.setState({
                    userName:resp.data.email,
                    firstName:resp.data.firstName,
                    lastName:resp.data.lastName,
                    phone:resp.data.phone,
                    dateOfBirth:resp.data.dateOfBirth,
                    gender:resp.data.gender,
                    noOfBookedTicket:resp.data.noOfBookedTicket,
                    wallet:resp.data.wallet
                })
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    componentDidMount(){
        let userName = sessionStorage.getItem('authenticatedUser');
        let password = sessionStorage.getItem('authenticatedPassword');
        APiService.getUserDetails(userName,password)
        .then(resp =>{
            console.log("&&&&7")
            console.log(resp.data.email)
            this.setState({
                userName:resp.data.email,
                firstName:resp.data.firstName,
                lastName:resp.data.lastName,
                phone:resp.data.phone,
                dateOfBirth:resp.data.dateOfBirth,
                gender:resp.data.gender,
                noOfBookedTicket:resp.data.noOfBookedTicket,
                wallet:resp.data.wallet
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <label style={{ border: "2px solid", color: "white", fontSize: "20px" }}>
                                User-Name :- {this.state.userName}<br />
                                FirstName :- {this.state.firstName}<br />
                                LastName :- {this.state.lastName}<br />
                                Contact-No :- {this.state.phone}<br />
                                Date-Of-Birth :- {this.state.dateOfBirth}<br />
                                Gender :-  {this.state.gender}<br />
                                Wallet :- {this.state.wallet}<br />
                                No-Of-Booked-Tickets :- {this.state.noOfBookedTicket}
                </label>
                <br/>
                <label style={{color:"white"}}>Update Your DOB </label>
                <input type="date" placeholder="Enter Your Dob" onChange={(e) => this.setState({ updatedDob: e.target.value })}></input>
                <Button onClick={()=>{this.updateDob()}}>UPDATE DOB</Button>
                <br/><br/>

                <label style={{color:"white"}}>Update Your GENDER </label>
                <select id="dropdown" onChange={(e) => this.setState({ updatedGender: e.target.value })}>
                    <option value=""></option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHER">OTHER</option>
                </select>
                <Button onClick={()=>{this.updateGender()}}>UPDATE GENDER</Button>
                <br/><br/>

                <label style={{color:"white"}}>Update Your WALLET </label>
                <input type="text" placeholder="Enter the Amount" onChange={(e) => this.setState({ updatedWallet: e.target.value })}></input>
                <Button onClick={()=>{this.updateWallet()}}>ADD MONEY</Button>

            </div>
        )
    }
}

export default MyProfile;