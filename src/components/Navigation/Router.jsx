import Home from "../../screens/Home.jsx";
import Product from "../../screens/Product.jsx";
import { Routes, Route } from "react-router";
const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="tarea" element={<Product />} />
        </Routes>
    )
}
export default Router;