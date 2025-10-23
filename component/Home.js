import React from "react";
import ReactDom from "react-dom/client"
import Header from "./Header"
import Foodoption from "../option/Foodoption"
import Grocery from "./Grocery"
import Dineout from "./Dineout"
import Footer from "./footer";
import SwiggyFooter from "./Swiggyfooter";
 export default function Home(){
    return(
        <>
        <Header></Header>
        <Foodoption></Foodoption>
        <Grocery></Grocery>
        <Dineout></Dineout>
        <Footer></Footer>
        <SwiggyFooter></SwiggyFooter>
        </>
    )
 }