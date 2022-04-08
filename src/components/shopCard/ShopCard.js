
import React from 'react'
import './ShopCard.styles.css'
export default function ShopCard(shopItem) {
  // const cakeStands = {
   
  //     "awdwad":{
  //       "key": "key1",
  //       "title":"Cake Stand Cat",
  //       "sku": "sku1",
  //       "image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Cat_img.jpg",
  //       "price":"12.22",
  //       "radius":"22",
  //       "description": "No CakeStand only cats here Ya bass tarts"
  
  //     },
  //     "awdwad2":{
  //       "key": "key2",
  //       "title":"cakeStand Kitty",
  //       "sku": "sku2",
  //       "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yVwaBg7hGQy1-GQg5J6v54BFKyocy51zbXYCW7pIyzDwqFz_AbmlLH7friFJS7IgG7w&usqp=CAU",
  //       "price":"12.33",
  //       "radius":"23",
  //       "description": "WHY IS THERE PICTURES CATS"
  //     },
  //     "awdwad3":{
  //       "key": "key3",  
  //       "title":"notCakeStand Kitty",
  //       "sku": "sku3",
  //       "image":"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",
  //       "price":"12.77",
  //       "radius":"25",
  //       "description": "I LOVE CATS"
        
    
  //   },
  //   "awdwas3":{
  //     "key": "key3",  
  //     "title":"notCakeStand Kitty",
  //     "sku": "sku3",
  //     "image":"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",
  //     "price":"12.77",
  //     "radius":"25",
  //     "description": "I LOVE CATS"
      
  
  //   },
  //   "awdrtad":{
  //     "key": "key1",
  //     "title":"Cake Stand Cat",
  //     "sku": "sku1",
  //     "image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Cat_img.jpg",
  //     "price":"12.22",
  //     "radius":"22",
  //     "description": "No CakeStand only cats here Ya bass tarts "

  //   }
   
  // }
  let renderedItems;

       if(shopItem == null){
         renderedItems = (
          <div  id="shop-item-card" className="my-3 px-3 w-1/2 overflow-hidden md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-isabelline">
              <img id="cakeStandImgID" className=" w-fill h-48 object-contain mx-auto  " src="https://upload.wikimedia.org/wikipedia/commons/4/44/Cat_img.jpg" alt/>
              <div className="px-6 py-4">
                  <div id="title" className="font-bold text-xl mb-2 text-darkPurple ">title</div>
                  <p id="price" className=" text-cadet text-3xl font-bold   "> $12.34</p>
                  <p id="review" className="text-base text-darkPurple overflow-hidden h-10 hover:overflow-visible">
              
                  cake stand description goes here
                  </p>
                  <p id="radius" className="text-base text-cadet">
                    Radius: 12 in
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
       }
       else{
        renderedItems = Object.values(shopItem).map(cakeStand=>{

          const element = (
            <div  id="shop-item-card" className="my-3 px-3 w-1/2 overflow-hidden md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-isabelline">
                <img id="cakeStandImgID" className=" w-fill h-48 object-contain mx-auto  " src={cakeStand.image} alt={cakeStand.key}/>
                <div className="px-6 py-4">
                    <div id="title" className="font-bold text-xl mb-2 text-darkPurple ">{cakeStand.title}</div>
                    <p id="price" className=" text-cadet text-3xl font-bold   "> ${cakeStand.price}</p>
                    <p id="review" className="text-base text-darkPurple overflow-hidden h-10 hover:overflow-visible">
                
                    {cakeStand.description}
                    </p>
                    <p id="radius" className="text-base text-cadet">
                      Radius: {cakeStand.radius}
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
       }
    
 
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