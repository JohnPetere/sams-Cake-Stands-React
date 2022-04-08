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
  productPrice,
  productDesc,
  productRadius,
   ...props})  {
  
  return (
        <div id="shop-item" className="flex">
           
           <ShopEditorEntryForm 
           handleProductName={handleProductName}
           handleProductPrice={handleProductPrice}
           handleProductDesc={handleProductDesc}
           handleProductRadius={handleProductRadius}/>
          <ShopCardLoader 
          productName={productName}
          productPrice={productPrice}
          productDesc={productDesc}
          productRadius={productRadius}/>
        </div>
  )
}

export default ProductEditor