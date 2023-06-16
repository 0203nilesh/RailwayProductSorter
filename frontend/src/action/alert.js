import { HIDE_ALERT, SHOW_ALERT } from "../constant";


export const display_alert = (data)=> async(dispatch)=>{
    try {
        await dispatch({type: SHOW_ALERT, data: data});
    } catch (error) {
        console.log(error);
    }
}
export const remove_alert = ()=> async(dispatch)=>{
    try {
        await dispatch({type: HIDE_ALERT});
    } catch (error) {
        console.log(error);
    }
}