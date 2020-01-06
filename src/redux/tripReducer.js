const initialState = {
    bookedTrips: []
}

const UPCOMING_TRIPS = 'UPCOMING_TRIPS';

export function upcomingTrips(tripObj){
    return {
        type: UPCOMING_TRIPS,
        payload: tripObj
    }
}

export default function tripReducer(state = initialState, action){
    // console.log(action.payload, action.type, 'hit')
    const { type, payload } = action;
    switch(type){
        case UPCOMING_TRIPS:
            return { ...state, bookedTrips: payload }

        default:
            return state;
    }
}