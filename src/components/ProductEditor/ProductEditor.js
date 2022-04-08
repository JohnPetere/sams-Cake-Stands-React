import ShopCardLoader from 'components/shopCardLoader/ShopCardLoader';
import ShopEditorEntryForm from 'components/shopEditorEntryForm/ShopEditorEntryForm';
// import React, {useState} from 'react';

// import Styles from './styles.module.css'

function ProductEditor ({children, productName, handleProductName, ...props})  {
  
  return (
        <div id="shop-item" className="flex">
           
           <ShopEditorEntryForm handleProductName={handleProductName}/>
          <ShopCardLoader productName={productName}/>
        </div>
  )
}

export default ProductEditor