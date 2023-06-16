import { FETCH_ALL_DATA, FILTER_DATA } from "../constant";

export default ((state={productData: []}, action)=>{
    switch(action.type){
        case FETCH_ALL_DATA: 
        return {...state, productData: action.data};
        case FILTER_DATA:
        return {...state, productData: action.data};
        default:
            return{...state};
    }
})