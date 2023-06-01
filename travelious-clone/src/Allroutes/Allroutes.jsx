import { Routes,Route } from "react-router-dom";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import Trekking from "../Components/ProductPage/Trekking";
import Camping from "../Components/ProductPage/Camping";
import Activities from "../Components/ProductPage/Activities";

function Allroutes(){
    return (
        <Routes>
            <Route path="/productDetails/:id" element={<ProductDetails/>}/>
            <Route path="/trekking" element={<Trekking/>}/>
            <Route path="/camping" element={<Camping/>}/>
            <Route path="/activities" element={<Activities/>}/>
        </Routes>
    )
}

export default Allroutes