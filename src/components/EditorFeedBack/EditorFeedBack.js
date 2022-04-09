import React from "react";
import { useNavigate } from "react-router";
import './EditorFeedBack.styles.css'
// import Link from "react-dom";
function EditorFeedBack({ children, status, writeCompleted, ...props }) {
  const navigator = useNavigate();
  console.log("isWriting",writeCompleted );
  return (
    <div className="feedBackView">
      <h2>EditorFeedBack Componenst is success</h2>
      {children}
      {!status ? (
        <p>
         
         Product has been uploaded
        
        </p>
      ) : (
        <p>PRODUCT LOADING</p>
      )}
      <button onClick={()=>navigator('/dashboard')} >View all Navigator</button>
      <button disabled={status} onClick={()=> writeCompleted(false)} >Add Another</button>
    </div>
  );

}

export default EditorFeedBack;
