import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "typeface-dancing-script";
import { ReactComponent as Logo } from "../../styles/svg/branding/cake-logo.svg";

import { auth } from "./../../libs/firebase";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./LoginPage.styles.css";
export default function LoginPage(props) {
  let navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let onHandleSignIn = function (e) {
    e.preventDefault();
    console.log("email," + email);
    console.log("passsword, " + password);
 

    signInWithEmailAndPassword(auth, email, password)
      .then((UserCrediential) => {
        

        toast.success("Logged in Successs!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigator('./dashboard')
      })
      .catch((error) => {
        if (
          error.toString() ===
          "FirebaseError: Firebase: Error (auth/invalid-email)."
        )
          toast.error("Your email is invalid", {
            position: toast.POSITION.TOP_CENTER,
          });
         else if (
          error.toString() ===
          "FirebaseError: Firebase: Error (auth/wrong-password)."
        ) {
          toast.error("Your Password is invalid", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
       else if (
          error.toString() ===
          "FirebaseError: Firebase: Access to this account has been temporarily disabled due to"+
          " many failed login attempts. You can immediately restore it by resetting your password or"+
          " you can try again later. (auth/too-many-requests)."
        ) {
          toast.error(
            "Account has been LOCKED, please contact server administraitor",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        } else {
          console.log(error);
          toast.error("Something Else didn't go write, see console log", {
            position: toast.POSITION.TOP_CENTER,
          });
        }

      });
  };

  return (
    <>
      <div className="flex justify-center flex-row items-center w-full h-screen bg-backgroundGreg ">
      <ToastContainer />
        <div className=" w-5/6 h-7/8 flex   justify-center align-baseline rounded-3xl  ">
          <div className="  w-1/2 h-auto shadow-inner ">
            <img
              className="w-full h-full rounded-l-lg"
              src="https://cdn.pixabay.com/photo/2021/05/18/07/56/cakes-6262577_960_720.jpg"
              alt="Supposed to be fancy cakes"
            ></img>
          </div>
          <form
            onSubmit={onHandleSignIn}
            className="item w-1/2 h-auto flex flex-col rounded-none rounded-r-lg shadow-inner"
          >
            <h2
              className=" text-6xl font-extrabold font-dancingScript
          text-fieryRose mr-6
          
           hover:text-darkPurple my-10"
            >
              Sam's cake Stand
            </h2>
            <Logo className="w-16 h-16" />
            <div className="login-form">
              <label className="form-label" for="grid-first-name">
                Email
              </label>
              <input
                className="form-text"
                id="productTitle"
                type="text"
                placeholder="enter Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-form">
              <label className="form-label" for="grid-first-name">
                Password
              </label>
              <input
                className="form-text"
                id="productTitle"
                type="password"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={console.log("PRESSED")}
              id="buy-button"
              type="submit"
              className=" bg-aeroBlue  text-darkPurple hover:text-fieryRose font-bold py-5 px-40 mt-3 rounded-full hover:bg-white "
            >
              Login
            </button>
            <a href="#forgetPassword" className="text-cadet text-sm mt-5">
              Forget Password?
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
