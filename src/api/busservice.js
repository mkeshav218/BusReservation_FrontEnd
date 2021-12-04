import axios from "axios";

class BusService{
    loginService(username,password){
        const loginDto = {userName:username,password:password}
        console.log("Login dto = ")
        console.log(loginDto)
        return axios.post('http://localhost:8765/registration-service/login',loginDto);
    }

    registerService(firstName,lastName,email,password,phone){
        const registerDto = {
            email:email,
            firstName:firstName,
            lastName:lastName,
            
            password:password,
            phone:phone
        }

        return axios.post('http://localhost:8765/registration-service/addregistration',registerDto);
    }

    searchBusService(src,dest,fromTime,toTime,typeOfUser){
        const searchBusDto = {
            src:src,
            dest:dest,
            fromTime:fromTime,
            toTime:toTime,
            typeOfUser:typeOfUser
        }
        console.log("Req body = ")
        console.log(searchBusDto)
        return axios.post('http://localhost:8765/search-service/searchbus',searchBusDto);
    }

    searchTicketDetails(ticketNo,email,password){
        const searchTicketDto = {
            ticketNo:ticketNo,
            email:email,
            password:password
        }
        return axios.post('http://localhost:8765/reservation-service/get-ticket-details',searchTicketDto);
    }

    // bookTicket(source,destination,seatNo,doj,busNo,email,password,passengerName,busName,pathNo){
    //     const bookTicketDto = {
    //         source:source,
    //         destination:destination,
    //         seatNo:seatNo,
    //         doj:doj,
    //         busNo:busNo,
    //         email:email,
    //         password:password,
    //         passengerName:passengerName,
    //         busName:busName,
    //         pathNo:pathNo
    //     }
    //     console.log(bookTicketDto)
    //     return axios.post('http://localhost:8765/reservation-service/add/reservation',bookTicketDto);
    // }

    bookTicket(source,destination,doj,busNo,email,password,busName,pathNo,passengerInfos){
        const bookTicketDto = {
            source:source,
            destination:destination,
            doj:doj,
            busNo:busNo,
            email:email,
            password:password,
            busName:busName,
            pathNo:pathNo,
            passengerInfos:passengerInfos
        }
        console.log(bookTicketDto)
        return axios.post('http://localhost:8765/reservation-service/add/reservation',bookTicketDto);
    }
    getAvailableSeats(doj,pathNo){
        const getAvailableSeatsDto = {
            doj:doj,
            pathNo:pathNo
        }
        return axios.post('http://localhost:8765/reservation-service/getAvailableSeats',getAvailableSeatsDto);
    }

    cancelTicket(ticketNo,email,password){
        const cancelTicketDto = {
            ticketNo:ticketNo,
            email:email,
            password:password
        }
        return axios.post('http://localhost:8765/reservation-service/cancelticket',cancelTicketDto);
    }

    // deleteTodo(user,id){
    //     return axios.delete(`http://localhost:8587/users/${user}/todos/${id}`)
    // }
}

export default new BusService();

// const article = { title: 'React POST Request Example' };
// const response = await axios.post('https://reqres.in/api/articles', article);
// this.setState({ articleId: response.data.id });