// import { ShopEditor } from 'components/ShopEditor';
// import ShopEditor from '../../../components/ShopEditor/ShopEditor';



import { ProductEditor } from 'components/ProductEditor';
// import { ShopEditor } from 'components/ShopEditor';
import React,{useState} from 'react';
import ProductPreview from '../../../styles/img/white-cat.jpg'
// import Styles from './styles.module.css'

// import ShopEditor from 'components/ShopEditor/ShopEditor';

function AddProduct ({children, ...props})  {
  const[isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState('Product Name');
  const [productPrice, setProductPrice] = useState('12.34');
  const [productDesc, setProductDesc] = useState('Lorem Ipsum Cats are awesome');
  const [productRadius, setProductRadius] = useState('5in');
  const [productImage, setProductImage] = useState(ProductPreview)
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
  function handleSubmit(e){
    e.preventDefault();
    const productData ={
      productName, 
      productPrice,
      productDesc,
      productRadius,
      
    }
    console.log("handleSUBmitPRESSEd", productData )
    setIsWriting(true)
  }
  console.log("Add Product Component,",productImage)
  if(isWriting){
      return  <h1>Editor Feedback component</h1>
  }
  else{
    return (
      <div  className="w-screen">
   
        <ProductEditor
         productName={productName} handleProductName={handleProductName}
          productPrice={productPrice} handleProductPrice={handleProductPrice}
          productDesc={productDesc} handleProductDesc={handleProductDesc}
          productRadius={productRadius} handleProductRadius={handleProductRadius}
          productImage={productImage} setProductImage={setProductImage}
          handleSubmit={handleSubmit}

        />
        
      </div>
)
  }
  
}

export default AddProduct