import { Routes,Route } from "react-router-dom";
import ProductDetails from "../components/ProductPage/ProductDetails";
import Trekking from "../components/ProductPage/Trekking";
import Camping from "../components/ProductPage/Camping";
import Activities from "../components/ProductPage/Activities";
import Navbar from "../homePage"

function Allroutes(){
    return (
        <Routes>
            <Route path="/productDetails/:id" element={<ProductDetails/>}/>
            <Route path="/trekking" element={<Trekking/>}/>
            <Route path="/camping" element={<Camping/>}/>
            <Route path="/activities" element={<Activities/>}/>
            <Route path="/" element={<Navbar/>} />
        </Routes>
    )
}

export default Allroutes