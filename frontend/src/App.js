import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Main from "./component/ProductView/Main/Main";
import Create from "./component/Create/Create";
import Navbar from "./component/Common/Navbar/Navbar";
import { useSelector } from "react-redux";
import Loader from "./component/Common/Loader/Loader";

function App() {
  // const {isLoading}= useSelector((state)=> state.loader);
  // console.log(isLoading);
  return (
    <BrowserRouter>
    {/* {isLoading ? (<>
    <Loader/>
    </>):(<> */}
      <Navbar/>
    <Routes>
    <Route path="/" element={<> <Home/> </>}  />
    <Route path="/product" element={ <Main/> } />
    <Route path='/create' element={<Create/>}  />
    </Routes>
    {/* </>)} */}
    </BrowserRouter>
  );
}

export default App;
