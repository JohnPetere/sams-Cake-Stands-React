import ShopCardLoader from 'components/shopCardLoader/ShopCardLoader';
import ShopEditorEntryForm from 'components/shopEditorEntryForm/ShopEditorEntryForm';
import React from 'react';

// import Styles from './styles.module.css'

function ProductEditor ({children, ...props})  {
  return (
        <div id="shop-item" className="flex">
           
           <ShopEditorEntryForm/>
          <ShopCardLoader/>
        </div>
  )
}

export default ProductEditor