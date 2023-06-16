import { LOGIN, LOGOUT } from "../constant";

export default ((state={authData: null}, action)=>{
    switch(action.type){
        case LOGIN:
            return {...state, authData: action.data};
        case LOGOUT:
            return {...state, authData: null};
        default :
            return {...state}
    }
})