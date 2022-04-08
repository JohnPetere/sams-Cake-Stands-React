import React from 'react';

import Styles from './styles.module.css'

function ProductEditor ({children, ...props})  {
  return (
        <div className={Styles.producteditor}>
           <h2>ProductEditor Component</h2>
           {children}

        </div>
  )
}

export default ProductEditor