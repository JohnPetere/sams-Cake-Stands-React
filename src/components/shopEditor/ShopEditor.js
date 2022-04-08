import React from 'react';

import './styles.module.css'
import ShopEditorEntryForm from 'components/shopEditorEntryForm/ShopEditor';
import ShopCardLoader from 'components/shopCardLoader/ShopCardLoader';

function ShopEditor ({children,productName,handleProductName, ...props})  {
    console.log(productName)
    console.log("handleProductName", handleProductName)
  return (
        <div className="flex" {...props}>
         
         
            <ShopEditorEntryForm handleProductName={handleProductName}/>
            <ShopCardLoader productName={productName}/>
        </div>
  )
}

export default ShopEditor