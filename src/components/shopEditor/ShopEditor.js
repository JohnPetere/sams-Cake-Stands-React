import ShopCardLoader from 'components/shopCardLoader/ShopCardLoader';
import ShopEditorEntryForm from 'components/shopEditorEntryForm/ShopEditorEntryForm';
import React from 'react';

function ShopEditor ({children,productName,handleProductName, ...props})  {
    // console.log(productName)
    // console.log("handleProductName", handleProductName)
  return (
        <div className="flex" {...props}>
         
         
            <ShopEditorEntryForm handleProductName={handleProductName}/>
            <ShopCardLoader productName={productName}/>
        </div>
  )
}

export default ShopEditor