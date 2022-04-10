import ShopCard from 'components/shopCard/ShopCard'

import React, {useState, useEffect} from 'react'
import './AllProducts.styles.css'
export default function AllProducts(...props) {
  const[isLoading, setIsLoading] = useState(false);
  const[userData, setUserData] = useState([]);
 
    useEffect(()=>{
     
      async function loadProducts(){
            const res = await fetch("https://store-front-a5e2e-default-rtdb.firebaseio.com/products.json")
            const data = await res.json();
            
            setUserData(data)
            console.log("settinguser data", data)
            setIsLoading(true)
            // console.log(data);
      }
      console.log("useEffect")
      loadProducts()
    },[])

    return (
     
    <div id="shop-items">
      {
        !isLoading?(<p>Waiting for products...</p>)
        :(
          <ShopCard isLoading="true" cakeStands={userData}/>
        ) 
      }
    
    </div>
  )
}
