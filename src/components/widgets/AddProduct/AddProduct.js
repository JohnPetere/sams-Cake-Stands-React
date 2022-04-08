import ShopEditor from 'components/shopEditor/ShopEditor';
import React from 'react';

import {AddProductStyles} from './styles'

function AddProduct ({children, ...props})  {
  return (
        <AddProductStyles  {...props}>
         <ShopEditor/>

        </AddProductStyles>
  )
}

export default AddProduct