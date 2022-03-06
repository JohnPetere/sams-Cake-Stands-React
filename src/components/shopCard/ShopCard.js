
import React from 'react'

export default function ShopCard() {
  const cakeStands = {
   
      "awdwad":{
        "key": "key1",
        "title":"Cake Stand Cat",
        "sku": "sku1",
        "image":"fakePath1",
        "price":"12.22",
        "radius":"22"
  
      },
      "awdwad2":{
        "key": "key2",
        "title":"cakeStand1",
        "sku": "sku2",
        "image":"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",
        "price":"12.33",
        "radius":"23"
  
      },
      "awdwad3":{
        "key": "key3",  
        "title":"ss",
        "sku": "sku3",
        "image":"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",
        "price":"12.77",
        "radius":"25"
  
    
    }
   
  }
    

       
       let renderedItems = Object.values(cakeStands).map(cakeStand=>{
         const imgLinkTest = ".."
        const element = (
          <div  id="shop-item-card" className=" mt-10  m-4 my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3  md:my-3 md:px-3 sm:w-full md:w-full lg:my-2 lg:px-2 lg:w-auto xl:my-1 xl:px-1 xl:w-auto">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img id="cakeStandImgID" className="w-full object-contain aspect-square" src={cakeStand.image} alt={cakeStand.key}/>
              <div className="px-6 py-4">
                  <div id="title" className="font-bold text-xl mb-2 text-darkPurple ">{cakeStand.title}</div>
                  <p id="price" className=" text-cadet text-3xl font-bold   "> ${cakeStand.price}</p>
                  <p id="review" className="text-base text-darkPurple">
                  This is another Filler tag that was not filled
                  </p>
                  <p id="radius" className="text-base text-cadet">
                    Radius: {cakeStand.radius}
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

        );
          return element;
      });
      // console.log(renderedItems)
     
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