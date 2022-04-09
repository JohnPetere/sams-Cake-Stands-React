import React from "react";
import { useNavigate } from "react-router";
import "./EditorFeedBack.styles.css";
import { ReactComponent as Spinner } from "../../styles/svg/customer-spinner.svg";
import { ReactComponent as CheckMark } from "../../styles/svg/custom-checkmark.svg"
function EditorFeedBack({ children, status, writeCompleted, ...props }) {
  const navigator = useNavigate();
 
  return (
    <div className="feedBackView">
      {children}
      {!status ? (
        <div className="loaded">
          <CheckMark className="checkmark"/>
          <p>Uploaded</p>
        </div>
      ) : (
        <div className="loadingView">
          <Spinner className="spinner" />
          <p className="">uploading...</p>
        </div>
      )}
      <button className="button" onClick={() => navigator("/dashboard")}>
        View Stands
      </button>
      <button
        className="button"
        disabled={status}
        onClick={() => writeCompleted(false)}
      >
        Add Stand
      </button>
    </div>
  );
}

export default EditorFeedBack;
