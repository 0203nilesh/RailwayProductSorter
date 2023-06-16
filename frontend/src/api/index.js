import axios from "axios";

const API= axios.create({baseURL: 'http://localhost:5000/'});

export const fetch_login= async(data)=>{
    const loginData =await API.post("/auth/login", data);
    // console.log(loginData);
    return loginData.data;
}

export const get_all_products= async()=>{
    const allProducts= await API.get("/product/get");
    return allProducts.data;
}

export const filter_some_products= async(data)=>{
    const filteredData= await API.post("/product/filter", data);
    return filteredData.data;
}
export const add_product= async(data)=>{
    const addedData= await API.post("/product/post", data);
    return addedData.data;
}

export const scrap_data= async(id)=>{
    const scrapMessage= await API.get(`/product/scrap/${id}`);
    return scrapMessage.data;
}