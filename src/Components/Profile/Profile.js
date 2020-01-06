import React, {Component} from 'react';
import './profile.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, updateUser } from "../../redux/reducer";
import TripDisplay from '../TripDisplay/TripDisplay';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingTrips: [],
            isEditing: false,
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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    editTrip = (id, trip) => {
        axios.put(`/api/upcomingtrips?id=${id}`, trip)
        .then(res => {
            this.setState({ trips: res.data });
            this.upcomingTrips()
        })
        .catch(error => console.log(error))
    }

    deleteTrip = (id) => {
        axios.delete(`/api/upcomingtrips/${id}`)
        .then(res => {
            this.setState({ trips: res.data })
            this.upcomingTrips()
        })
        .catch(error => console.log(error))
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
                  {this.state.upcomingTrips.map((booking, i) => (
             <TripDisplay key={i} booking={booking} editTrip={this.editTrip} deleteTrip={this.deleteTrip}/>

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