// import { ShopEditor } from 'components/ShopEditor';
// import ShopEditor from '../../../components/ShopEditor/ShopEditor';
import React,{useState} from 'react';

// import Styles from './styles.module.css'
import ShopEditor from '../../ShopEditor/ShopEditor';
// import ShopEditor from 'components/ShopEditor/ShopEditor';

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')

  function handleProductName(name){
    setProductName(name)
  }
  return (
        <div  className="w-screen">
     
          <ShopEditor productName={productName} handleProductName={handleProductName}/>
          
        </div>
  )
}

export default AddProduct