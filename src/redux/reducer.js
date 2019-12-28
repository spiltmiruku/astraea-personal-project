const initialState = {
    user: {}
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';

export function updateUser(userObj){
    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

export function logout(){
    return{
        type: LOGOUT,
        payload: null
    }
}

export default function reducer(state = initialState, action){
    // console.log(action.payload, action.type, 'hit')
    const { type, payload } = action;
    switch(type){
        case UPDATE_USER:
            return { ...state, user: payload }

        case LOGOUT:
            return { ...state, user: {}}

        default:
            return state;
    }
}