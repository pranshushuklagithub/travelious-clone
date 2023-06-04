import { Routes,Route } from "react-router-dom";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import Trekking from "../Components/ProductPage/Trekking";
import Camping from "../Components/ProductPage/Camping";
import Activities from "../Components/ProductPage/Activities";
import Navbar from "../homePage"
import ConfirmationPage from "../Components/ProductPage/ConfirmationPage";

function Allroutes(){
    return (
        <Routes>
            <Route path="/productDetails/:id" element={<ProductDetails/>}/>
            <Route path="/trekking" element={<Trekking/>}/>
            <Route path="/camping" element={<Camping/>}/>
            <Route path="/activities" element={<Activities/>}/>
            <Route path="/" element={<Navbar/>} />
            <Route path="/confirmation" element={<ConfirmationPage/>} />

            
        </Routes>
    )
}

export default Allroutes