import { Routes,Route } from "react-router-dom";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import Products from "../Components/ProductPage/Products";

function Allroutes(){
    return (
        <Routes>
            <Route path="/productDetails/:id" element={<ProductDetails/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    )
}

export default Allroutes