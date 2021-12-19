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

    getUserDetails(userName,password){
        const userDto = {
            userName:userName,
            password:password
        }

        return axios.post('http://localhost:8765/registration-service/getRegisteredUser',userDto);
    }

    updateDob(userName,password,dob){
        const userDto = {
            userName:userName,
            password:password,
            dob:dob
        }

        return axios.post('http://localhost:8765/registration-service/update/dob',userDto);
    }

    updateGender(userName,password,gender){
        const userDto = {
            userName:userName,
            password:password,
            gender:gender
        }

        return axios.post('http://localhost:8765/registration-service/update/gender',userDto);
    }

    updateWallet(userName,password,amount){
        const userDto = {
            userName:userName,
            password:password,
            amount:amount
        }

        return axios.post('http://localhost:8765/registration-service/add',userDto);
    }

    getAllBookings(userName,password){
        const userDto = {
            userName:userName,
            password:password
        }

        return axios.post('http://localhost:8765/reservation-service/getAllReservation',userDto);
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