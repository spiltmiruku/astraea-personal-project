import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, updateUser } from "../../redux/reducer";
import rocket from '../../resources/Rocket.png';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingTrips: [],
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        axios
          .post("/api/logout")
          .then(() => {
            this.props.updateUser({});
          })
          .catch(error => console.log(error));
      }

    upcomingTrips = () => {
        console.log(this.props)
        if (this.props.user.user_id) {
            axios
                .get(`/api/upcomingtrips/${this.props.user.user_id}`).then(res => {
                    console.log(res)
                    this.setState({
                        upcomingTrips: res.data
                    });
                });
        }
    }

    componentDidMount() {
        this.upcomingTrips()
    }

    render() {
        // console.log(this.state, 'hit')
        return (
            <div>

            <div className='btn-container'>
                <Link className='discover-btn effect01' onClick={this.logout} to='/'><span>LOGOUT</span></Link>
                </div>
                
                <h1 className='upcoming-title'>UPCOMING TRIPS</h1>
                {/* <h2>Welcome back, {this.props.user && this.props.user.passenger_firstname}</h2> */}
                <div className='ticket-box'>
                  {this.state.upcomingTrips.map(booking => (

                      <div className='generated-ticket'>
                          <h1 className='from-to'>
                          <span className='ticket-airport'>{booking.departure_airport}</span>
                          <p className='dashes'>------ <img id="rocket-icon" src={rocket} alt="rocket" /> ------</p>
                        <span className='ticket-planet'>{booking.destination_planet}</span>
                          </h1>
                        
                        <span className='ticket-time'>{booking.flight_time}</span>
                        <span className='ticket-date'>{booking.flight_date}</span>
                        <span className='ticket-qty'>{booking.passenger_qty}</span>
                      </div>
                  ))} 
                </div>
                
            </div>
        )
    }
    
}

const mapStateToProps = reduxState => {
    return reduxState;
}

export default connect(mapStateToProps, { logout, updateUser }) (Profile);