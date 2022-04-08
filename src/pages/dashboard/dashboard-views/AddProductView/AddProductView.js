
import ShopCardLoader from 'components/shopCardLoader/shopCard/ShopCardLoader';
import ShopEditor from 'components/shopEditor/ShopEditor';
import React, {useState} from 'react'

function AddProductView(props) {
  const [productName, setProductName] = useState('productName')
  console.log("ADD PRODUCT", )
  return (
    <>
      < ShopEditor productName={productName}/>
      <ShopCardLoader/>
     
    </>
    
  )
}
export default AddProductView;