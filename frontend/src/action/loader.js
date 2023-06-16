import { END_LOADING, START_LOADING } from "../constant"


export const start_loading= ()=>async(dispatch)=>{
        dispatch({type: START_LOADING});
}

export const end_loading= ()=>async(dispatch)=>{
        dispatch({type: END_LOADING});
}