import ShopEditorEntryForm from 'components/shopEditorEntryForm/ShopEditorEntryForm';
import React from 'react';

import Styles from './styles.module.css'

function ProductEditor ({children, ...props})  {
  return (
        <div className={Styles.producteditor}>
           
           <ShopEditorEntryForm/>
        </div>
  )
}

export default ProductEditor