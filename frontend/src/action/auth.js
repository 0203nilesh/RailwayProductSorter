import * as api from '../api/index';
import { END_LOADING, LOGIN, SHOW_ALERT, START_LOADING } from '../constant';


export const login= (data, navigate)=>async(dispatch)=>{
    try {
        await dispatch({type: START_LOADING});
        const loginData= await api.fetch_login(data);
        console.log(loginData);
        if(loginData.message!==undefined){
            await dispatch({type: SHOW_ALERT, data: loginData});
        }else{
            localStorage.setItem("auth", JSON.stringify(loginData));
            await dispatch({type: SHOW_ALERT, data: {message: "Login Successfull", type: "success"}});
            await dispatch({type: LOGIN, data: loginData});
            navigate('/product');
        }
        await dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const logout= ()=>async(dispatch)=>{
    try {
        await dispatch({type: START_LOADING});
        localStorage.removeItem("auth");
        await dispatch({type: SHOW_ALERT, data: {message: "Logout Successfull", type: "success"}})
        await dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}