import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingTrips: [],
        }
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
        console.log(this.state, 'hit')
        return (
            <div>
                <h1 className='upcoming-title'>UPCOMING TRIPS</h1>
                {/* <h2>Welcome back, {this.props.user && this.props.user.passenger_firstname}</h2> */}
                <div className='ticket-box'>
                  {this.state.upcomingTrips.map(booking => (
                      <div className='generated-ticket'>
                        <span className='ticket-info'>{booking.id}</span>
                        <span className='ticket-info'>{booking.departure_aiport}</span>
                        <span className='ticket-info'>{booking.destination_planet}</span>
                        <span className='ticket-info'>{booking.flight_time}</span>
                        <span className='ticket-info'>{booking.flight_date}</span>
                        <span className='ticket-info'>{booking.passenger_qty}</span>
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

export default connect(mapStateToProps) (Profile);