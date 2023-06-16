import * as api from '../api';
import { END_LOADING, FETCH_ALL_DATA, FILTER_DATA, SHOW_ALERT, START_LOADING } from '../constant';

export const fetch_all_data= ()=>async(dispatch)=>{
    try {
        await dispatch({type: START_LOADING});
        const allProducts=await api.get_all_products();
        console.log(allProducts);
        if(allProducts?.message !== undefined){ 
            await dispatch({type: SHOW_ALERT, data: allProducts});
        }else{
            console.log("2");
            await dispatch({type: FETCH_ALL_DATA, data: allProducts});
            // dispatch({type: SHOW_ALERT, data: {message: "Data fetched", type: "success"}});
        }
        await dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const fetch_filter_data= (data)=>async(dispatch)=>{
    try {
        await dispatch({type: START_LOADING});
        const filteredData= await api.filter_some_products(data);
        if(filteredData?.message!==undefined){
            await dispatch({type: SHOW_ALERT, data: filteredData});
        }else{
            await dispatch({type: FILTER_DATA, data: filteredData});
            await dispatch({type: SHOW_ALERT, data: {message: "Filtered Applied Successfull", type: "success"}})
        }
        await dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const add_product_data= (data)=>async(dispatch)=>{
    try {
        await dispatch({type: START_LOADING});
        const addedData= await api.add_product(data);
        console.log(addedData);
        if(addedData.message!==undefined){
            await dispatch({type: SHOW_ALERT, data:addedData});
        }else{
            await dispatch({type: SHOW_ALERT, data: {message:"Product added successfull", type: "success"}})
        }
        await dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const scrap_product= (id)=>async(dispatch)=>{
    try {
        const scrapMessage= await api.scrap_data(id);
        const updatedData= await api.get_all_products();
        await dispatch({type: SHOW_ALERT, data: scrapMessage});
        await dispatch({type: FETCH_ALL_DATA, data: updatedData});
    } catch (error) {   
        console.log(error);
    }
}