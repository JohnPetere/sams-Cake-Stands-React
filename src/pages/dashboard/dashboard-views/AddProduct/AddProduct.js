import ShopCard from 'components/shopCard/ShopCard';
import ShopCardLoader from 'components/shopCardLoader/shopCard/ShopCardLoader';
import ShopEditor from 'components/shopEditor/ShopEditor';
import React from 'react'

function AddProduct(props) {
  console.log("ADD PRODUCT")
  return (
    <>
      < ShopEditor/>
      <ShopCardLoader/>
     
    </>
    
  )
}
export default AddProduct;