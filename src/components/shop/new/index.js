import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";

export const newContext = createContext();

const newpageComponent=()=>{

}

const newpage =(props)=>{
 const [data, dispatch]=useReducer(homeReducer,homeState);
    return(
<Fragment>
<newContext.Provider value={{ data, dispatch }}>
<Layout children={<newpageComponent/>}/>
</newContext.Provider >
</Fragment>

    );
};