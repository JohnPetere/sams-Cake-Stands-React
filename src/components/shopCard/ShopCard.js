
import React from 'react'
import './ShopCard.styles.css'
export default function ShopCard(products, ...props) {

    console.log("shop Card Cake Stands: ",products)
  let renderedItems;
        renderedItems = Object.values(products.cakeStands).map(cakeStand=>{

          const element = (
            <div  id="shop-item-card" className="my-3 px-3 w-1/2 overflow-hidden md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-isabelline">
                <img id="cakeStandImgID" className=" w-fill h-48 object-contain mx-auto  " src={cakeStand.imageUrl} alt={cakeStand.key}/>
                <div className="px-6 py-4">
                    <div id="title" className="font-bold text-xl mb-2 text-darkPurple ">{cakeStand.productName}</div>
                    <p id="price" className=" text-cadet text-3xl font-bold   "> ${cakeStand.productPrice}</p>
                    <p id="review" className="text-base text-darkPurple overflow-hidden h-10 hover:overflow-visible">
                
                    {cakeStand.productDesc}
                    </p>
                    <p id="radius" className="text-base text-cadet">
                      Radius: {cakeStand.productRadius}
                    </p>
                    <button id="buy-button" className="bg-aeroBlue  text-darkPurple font-bold py-3 px-10 mt-3 rounded-full">
                    Buy 
                    </button>
                </div>
                <div className="inline-flex my-2 mx-0" >
                    <button id="edit-button" className="bg-isabelline hover:bg-gray-100  text-cadet font-bold py-2 px-4 rounded-l">
                    Edit
                    </button>
                    <button id="delete-button" function="deleteThis" className="delete-button bg-isabelline hover:bg-gray-100 text-fieryRose font-bold py-2 px-4 rounded-r">
                    Delete
                    </button>
                </div>
            </div>
        </div>
  
          );
            return element;
        });
       
    
 
 return renderedItems

}
/**
 * 
  <div id="shop-items" className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-2 xl:-mx-1 w-full">
            <div  id="shop-item-card" className=" mt-10  m-4 my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3  md:my-3 md:px-3 sm:w-full md:w-full lg:my-2 lg:px-2 lg:w-auto xl:my-1 xl:px-1 xl:w-auto">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img id="cakeStandImgID" className="w-full object-contain aspect-square" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="placeholder"/>
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