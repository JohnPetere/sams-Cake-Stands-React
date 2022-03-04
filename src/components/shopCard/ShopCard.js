import React from 'react'
const cakeStands = {
    "shop-items":{
      "awdwad":{
        "key": "key1",
        "sku": "sku1",
        "image":"fakePath1",
        "price":"12.34",
        "radius":"22"
  
      },
      "awdwad2":{
        "key": "key2",
        "sku": "sku2",
        "image":"fakePath2",
        "price":"12.34",
        "radius":"23"
  
      },
      "awdwad3":{
        "key": "key3",
        "sku": "sku3",
        "image":"fakePath3",
        "price":"12.34",
        "radius":"25"
  
      }
    }
   
  }
  const addCakeStands = function(){
    const cakeStandTemplate = document.querySelector("#shop-item-card").cloneNode(true)
    cakeStandTemplate.classList.remove('hidden');
    const shopItemslist = document.querySelector('#shop-items');

    const cards = cakeStands.values.map(cakeStand=>{

       
        console.log(cakeStand.title)
        let cakeStandHtml = cakeStandTemplate.cloneNode(true);

        let title = document.createElement('p')
        title.textContent = cakeStand.title
        const titleTag= cakeStandHtml.querySelector('#title')
        titleTag.appendChild(title)
        
        let price = document.createElement('p')
        price.textContent ="$"+cakeStand.price+ ".00"
        const priceTag= cakeStandHtml.querySelector('#price')
        priceTag.appendChild(price)
        // cakeStandHtml.append(cakeStandHtml)
        // shopItemslist.appendChild(cakeStandHtml.cloneNode(true)) // THIs works to add..

        let radius = document.createElement('p')
        radius.textContent = "Radius: " + cakeStand.radius +" in"
        const radiusTag= cakeStandHtml.querySelector('#radius')
        radiusTag.appendChild(radius)
        // cakeStandHtml.append(cakeStandHtml)
        
        const cakeStandImage = cakeStandHtml.querySelector('#cakeStandImgID')
        cakeStandImage.src = cakeStand.urlPath;
        shopItemslist.appendChild(cakeStandHtml.cloneNode(true))
    });
   
    
}
    // addCakeStands();
  console.log(cakeStands)
export default function ShopCard() {
  return (
      <>
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
      
      </>
  )
}
