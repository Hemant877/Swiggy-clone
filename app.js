import React from "react"
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDom from "react-dom/client"
import Restaurant from "./component/Restaurant"
import Home from "./component/Home";
import Restaurantmenu from "./component/Restaurantmenu";
import Searchpage from "./component/Searchpage";
import { Provider } from "react-redux";
import { store } from "./Stored/Store";
import OrderSummary from "./component/OrderSummary";
function App()
{
    return (
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/mumbai/:id" element={<Restaurantmenu></Restaurantmenu>}></Route>
            <Route path="/city/mumbai/:id/search" element={<Searchpage></Searchpage>}></Route>
            <Route path="/OrderSummary" element={<OrderSummary></OrderSummary>}></Route>
         </Routes>
        </BrowserRouter>
        </Provider>
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App></App>)