//  import { setPersistence } from 'firebase/auth';
import React, {useCallback} from 'react'
 import {useDropzone} from 'react-dropzone'
//  import {ProductImageDropBoxStyles} from './styles';

function ProductImageDropBox  ({setProductImage, ...props}){

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0] ; 
    console.log(file)        
    setProductImage({previewImage:URL.createObjectURL(file)})
  }, [setProductImage])
  
  const {
    getRootProps,
    getInputProps,
  
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: 'image/jpeg,image/jpg,image/png', maxFiles:1, onDrop });



 
      
   function workingThing(){
     console.log("look")
   }

     return( 
      
        <div {...getRootProps({isFocused, isDragAccept, isDragReject})}>
          <input {...getInputProps()} onChange={workingThing} />
          <p>Drag Img here. Dragging only working</p>
        </div>
       
       
      
     )
 }
 
 export default ProductImageDropBox 