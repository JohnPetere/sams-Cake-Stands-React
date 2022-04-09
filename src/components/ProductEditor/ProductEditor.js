import ShopCardLoader from 'components/shopCardLoader/ShopCardLoader';
import ShopEditorEntryForm from 'components/shopEditorEntryForm/ShopEditorEntryForm';
// import React, {useState} from 'react';

// import Styles from './styles.module.css'

function ProductEditor ({children, 
  productName, 
  handleProductName,
  handleProductPrice,
  handleProductDesc,
  handleProductRadius,
  setProductImage,
  productPrice,
  productDesc,
  productRadius,
  productImage,
  handleSubmit,
   ...props})  {
  console.log("ProductEditorComponent", productImage)
  return (
        <div id="shop-item" className="flex">
           
           <ShopEditorEntryForm 
           handleProductName={handleProductName}
           handleProductPrice={handleProductPrice}
           handleProductDesc={handleProductDesc}
           handleProductRadius={handleProductRadius}
           setProductImage={setProductImage}
           handleSubmit={handleSubmit}
           />
          <ShopCardLoader 
          productName={productName}
          productPrice={productPrice}
          productDesc={productDesc}
          productRadius={productRadius}
          productImage={productImage}/>
        </div>
  )
}

export default ProductEditor