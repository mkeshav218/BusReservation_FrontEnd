import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Login from './login';
import Search from './searchTicket';
import Cancel from './cancel';
import Register from './register';
import AboutUs from './aboutus';
import SearchBus from './searchbus';
import SearchBusList from './searchbuslist';
import LogOut from './logout';
//import Reservation from './reservation'; 
import Payment from './payment';
import SeatSelect from './selectSeat';
import background from "./img/bus1.jpg";
//import DeepLink from './deepLink';
function App() {
  return (
    <div className="App" style={{ 
      backgroundImage:  `url(${background})` ,
      backgroundSize: "cover",
          height: "100vh",
    }}>
    
          <Router>
          <Header/>

            <Switch>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/search" component={Search}/>
              <Route exact path="/searchbus" component={SearchBus}/>
              <Route exact path="/searchbuslist" component={SearchBusList}/>
              <Route exact path="/cancel" component={Cancel}/>
              {/* <Route exact path ="/reserve" component={Reservation}/> */}
              <Route exact path="/register" component={Register}/>
              <Route exact path="/aboutus" component={AboutUs}/>
              <Route exact path="/logout" component={LogOut}/>
              <Route exact path="/payment" component={Payment}/>
              <Route exact path="/seatselect" component={SeatSelect}/>
              {/* <Route exact path="/" component={Login}/>
              <Route exact path="/login" component={Login}/>
              <AuthenticatedRoute exact path="/logout" component={LogOut}/>
              <AuthenticatedRoute exact path="/welcome/:name" component={Welcome}/>
              <AuthenticatedRoute path="/todos" component={Todo}/>
              <Route component={WrongUrl}/> */}
            </Switch>
            <Footer/>
          </Router>

    </div>
  );
}

export default App;
