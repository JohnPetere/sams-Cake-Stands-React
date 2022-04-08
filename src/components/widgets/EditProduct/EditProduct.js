import React from 'react';

import Styles from './styles.module.css'

function EditProduct ({children, ...props})  {
  return (
        <div className={Styles.editproduct}>
           <h2>EditProduct Component</h2>
           {children}

        </div>
  )
}

export default EditProduct