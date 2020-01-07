const initialState = {
    bookedTrips: [],
    passenger_qty: 0,
}

const UPCOMING_TRIPS = 'UPCOMING_TRIPS';
const PASSENGER_QTY = 'PASSENGER_QTY';

export function upcomingTrips(tripObj){
    return {
        type: UPCOMING_TRIPS,
        payload: tripObj
    }
}

export function passengerQty(passengers){
    return {
        type: PASSENGER_QTY,
        payload: passengers
    }
}

export default function tripReducer(state = initialState, action){
    // console.log(action.payload, action.type, 'hit')
    const { type, payload } = action;
    switch(type){
        case UPCOMING_TRIPS:
            return { ...state, bookedTrips: payload }

        case PASSENGER_QTY:
            return { ...state, passengers: payload }

        default:
            return state;
    }
}