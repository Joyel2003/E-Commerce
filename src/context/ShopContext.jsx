import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import React from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();



const ShopContextProvider = (props) => {
    const currency = '$'
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [carItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(carItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }

        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in carItems){
            for(const item in carItems[items]){
                try {
                    if (carItems[items][item] > 0) {
                        totalCount += carItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    useEffect(() => {
        console.log(carItems)
    }, [carItems])


    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        carItems, addToCart,
        getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;