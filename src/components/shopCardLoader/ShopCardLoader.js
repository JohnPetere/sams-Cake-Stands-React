
import React from 'react'
import './ShopCardLoader.styles.css'

export default function ShopCardLoader({children,
     productName,
     productPrice,
     productDesc,
     productRadius,
     productImage,
      ...props}) {
// This is a comment
        const element = (
          <div  id="shop-item-card" className=" px-3 w-1/3  my-10  " {...props}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-isabelline">
              {/* <img id="propsImgID" className=" w-fill h-48 object-contain mx-auto  " src={productImage} alt={props.key}/>
               */}
            
                   <img src={productImage.previewImage} className=" w-fill h-48 object-contain mx-auto" alt=" cake Stand shop item" />
               
              <div className="px-6 py-4">
                  <div id="title" className="font-bold text-xl mb-2 text-darkPurple" max="5">{productName}</div>
                  <p id="price" className=" text-cadet text-3xl font-bold   "> ${productPrice}</p>
                  <p id="review" className="text-base text-darkPurple overflow-hidden h-10 hover:overflow-visible">
              
                  {productDesc}
                  </p>
                  <p id="radius" className="text-base text-cadet">
                    Radius: {productRadius} in.
                  </p>
                  <button id="buy-button" className="bg-aeroBlue  text-darkPurple font-bold py-3 px-10 mt-3 rounded-full">
                  Buy 
                  </button>
              </div>
           
          </div>
      </div>

        );

 return element

}
/**
 * 
  <div id="shop-items" className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-2 xl:-mx-1 w-full">
            <div  id="shop-item-card" className=" mt-10  m-4 my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3  md:my-3 md:px-3 sm:w-full md:w-full lg:my-2 lg:px-2 lg:w-auto xl:my-1 xl:px-1 xl:w-auto">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img id="propsImgID" className="w-full object-contain aspect-square" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="placeholder"/>
                    <div className="px-6 py-4">
                        <div id="title" className="font-bold text-xl mb-2 text-darkPurple "></div>
                        <p id="price" className=" text-cadet text-3xl font-bold   ">
                        </p>
                        <p id="review" className="text-base text-darkPurple">
                        This is another Filler tag that was not filled
                        </p>
                        <p id="radius" className="text-base text-cadet">
                        </p>
                        <button id="buy-button" className="bg-aeroBlue  text-darkPurple font-bold py-3 px-10 mt-3 rounded-full">
                        Buy
                        </button>
                    </div>
                    <div className="inline-flex my-2 mx-0" >
                        <button id="edit-button" className="bg-white hover:bg-gray-100  text-cadet font-bold py-2 px-4 rounded-l">
                        Edit
                        </button>
                        <button id="delete-button" function="deleteThis" className="delete-button bg-white hover:bg-gray-100 text-fieryRose font-bold py-2 px-4 rounded-r">
                        Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
      
 */