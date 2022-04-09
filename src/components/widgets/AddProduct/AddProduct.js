// import { ShopEditor } from 'components/ShopEditor';
// import ShopEditor from '../../../components/ShopEditor/ShopEditor';



import { EditorFeedBack } from 'components/EditorFeedBack';
import { ProductEditor } from 'components/ProductEditor';
// import { ShopEditor } from 'components/ShopEditor';
// import{useAddNewProduct} from '../../../hooks/useAddNewProduct'
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import React,{useState} from 'react';
import ProductPreview from '../../../styles/img/white-cat.jpg'
// import Styles from './styles.module.css'

// import ShopEditor from 'components/ShopEditor/ShopEditor';

function AddProduct ({children, ...props})  {
  const defaults={
    title:"Big Cow",
    desc:"I love big cows",
    radius:"12.34",
    price:"12.34"
    
  }
  const [isWriting, setIsWriting] = useState(false);
  const [productName, setProductName] = useState(defaults.title);
  const [productPrice, setProductPrice] = useState(defaults.price);
  const [productDesc, setProductDesc] = useState(defaults.desc);
  const [productRadius, setProductRadius] = useState(defaults.radius);
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [loading, productLoader] = useAddNewProduct();
  // useAddNewProduct();
  // const [loading, productLoader] = useAddNewProduct();
  console.log(loading);
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
    // HOW
    const productData = {
      productName, 
      productDesc,
      productPrice,
      productRadius

    }
    // console.log(productData)
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductDesc(defaults.desc);
    setProductRadius(defaults.radius);
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.title);

    // productLoader(productData, productImage)
  }

  console.log("Add Product Component,",productImage)
  if(isWriting){
    // console.log("isWriting: ", isWriting);
    return       <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
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