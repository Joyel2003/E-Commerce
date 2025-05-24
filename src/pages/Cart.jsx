import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

function Cart() {

  const {products, currency, carItems} = useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in carItems){
      for(const item in carItems[items]){
        if (carItems[items][item] > 0) {
          tempData.push({
            _id: items
          })
        }
      }
    }

  },[carItems])
  return (
    <div>
        
    </div>
  )
}

export default Cart