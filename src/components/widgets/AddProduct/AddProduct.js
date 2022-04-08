// import { ShopEditor } from 'components/ShopEditor';
// import ShopEditor from '../../../components/ShopEditor/ShopEditor';



import { ProductEditor } from 'components/ProductEditor';
// import { ShopEditor } from 'components/ShopEditor';
import React,{useState} from 'react';

// import Styles from './styles.module.css'

// import ShopEditor from 'components/ShopEditor/ShopEditor';

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name');
  const [productPrice, setProductPrice] = useState('12.34');
  const [productDesc, setProductDesc] = useState('Lorem Ipsum Cats are awesome');
  const [productRadius, setProductRadius] = useState('5in');
  function handleProductName(name){
    setProductName(name)
  }
  function handleProductPrice(price){
    setProductPrice(price)
  }
  function handleProductDesc(desc){
    setProductDesc(desc)
  }
  function handleProductRadius(radius){
    setProductRadius(radius)
  }
  return (
        <div  className="w-screen">
     
          <ProductEditor
           productName={productName} handleProductName={handleProductName}
            productPrice={productPrice} handleProductPrice={handleProductPrice}
            productDesc={productDesc} handleProductDesc={handleProductDesc}
            productRadius={productRadius} handleProductRadius={handleProductRadius}

          />
          
        </div>
  )
}

export default AddProduct