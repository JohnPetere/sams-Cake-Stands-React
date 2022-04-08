import React from 'react'

export default function ShopEditor() {
  return (
    <div className="flex flex-wrap  overflow-hidden sm:-mx-0 md:-mx-0 lg:-mx-2 xl:-mx-1">
    
    <form action="" id="cakeStandAddEditForm" className="
      p-5
      mx-10
      mt-10 
      sm:mx-0
      md:mx-10
      sm:p-0;
      
      text-cadet
        bg-white bg-clip-padding
        border border-solid border-cadet ">
        
      <div className="mx-10 mb-3 md:w-22 w-23 md:mx-0  ">
        <img src="static/svg/branding/cake-logo.svg" id="cakeStandImg" className="w-full h-full" alt=""/> 
        <label for="cakeStandImgInput" className="form-label inline-block mb-2 text-cadet">Select Cake Stand Image</label>
        <input required name="cakeStandImgInput" id="cakeStandImgInput"  accept=".jpg, .png, .jpeg, .webp" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" />
      </div>
      <div className="flex flex-wrap -mx-3 mb-0">
        <div className="w-full md:w-full px-3 mb-2 md:mb-0">
          <label className="block uppercase tracking-wide text-fieryRose text-xs font-bold mb-2" for="grid-first-name">
          Product Title
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="productTitle" type="text" placeholder="large Cake Stand" required />
          
        </div>
      
      </div>
      <div className="flex flex-wrap -mx-3 mb-0">
        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
          <label className="block uppercase tracking-wide text-fieryRose text-xs font-bold mb-2" for="grid-first-name">
          Price
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
          id="standPrice" type="number" placeholder="12.34" required/>
          
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-fieryRose text-xs font-bold mb-2" for="grid-last-name" >
          Radius
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-cadet border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="standRadius" type="number" placeholder="12.34" required/>
        </div>
      </div>
      <div className="inline-flex my-2 mx-0" >
        <button id="buy-button" type="submit" className="bg-aeroBlue  text-darkPurple font-bold py-3 px-10 mt-3 rounded-full">
          Add/Save
      
        </button>
     
        <button id="delete-button" className="caret-cadet  text-darkPurple font-bold py-3 px-10 mt-3 rounded-full">
         Cancel
        </button>
        
      </div>
    </form>
</div>
  )
}
