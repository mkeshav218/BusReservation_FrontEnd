import React from 'react';
import {Button} from 'react-bootstrap';
import BusService from './api/busservice';
import AuthenticationService from './authenticationservice';

class SearchBus extends React.Component {
    constructor(){
        super();
        this.state={
            src:null,
            dest:null,
            fromTime:null,
            toTime:null,
            typeOfUser:"unauthorized"
        }
    }
    async searchbus(){
        console.log(AuthenticationService.isUserLoggedIn())
        if(await AuthenticationService.isUserLoggedIn())
        {
            this.setState({
                typeOfUser:"authorized"
            })
        }
        BusService.searchBusService(this.state.src,this.state.dest,this.state.fromTime,this.state.toTime,this.state.typeOfUser)
        .then(response =>{
            console.log(response.data)
            let length = true;
            let data = response.data;
            this.props.history.push("/searchbuslist",{ length : length,data:data })
        }) 
        .catch(err =>{
            let length = false;
            let data = err.data;
            this.props.history.push("/searchbuslist",{ length : length,data:data })
        })
    }
    render(){
        return(
            <div>
                <h1 style={{color: "red"}}>Choose Your Destination</h1>
                Source <select id = "dropdown" onChange={(e)=>this.setState({src:e.target.value})}>
                    <option value=""></option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Dombivli">Dombivli</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                </select><br/><br/>
                
                Destination <select id = "dropdown" onChange={(e)=>this.setState({dest:e.target.value})}>
                    <option value=""></option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Dombivli">Dombivli</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                </select><br/><br/>From Time<input type="time" onChange={(e)=>{this.setState({fromTime:e.target.value})}}/>
                To Time<input type="time" onChange={(e)=>{this.setState({toTime:e.target.value})}}/><br/><br/>
                <Button onClick={()=>{this.searchbus()}}>Search</Button>
            </div>

        )
    }
}

export default SearchBus;