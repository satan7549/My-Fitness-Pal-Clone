import { Route, Routes } from "react-router-dom"
import About from "../Pages/About/About";
import FoodPage from "../Pages/Food/Food";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp"

const AllRoutes=()=>{
return (
    <Routes>
        <Route path="/" element={ <Home /> }  />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/food" element={<FoodPage />} />
    </Routes>
)
};

export default AllRoutes