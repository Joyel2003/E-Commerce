import { createContext } from "react";

export const ShopContext = createContext();

const ShopContextProvider = () =>{
    const value = {

    }
    return (
        <ShopContext.Provider>
           {props.children}
        </ShopContext.Provider>
    )
}