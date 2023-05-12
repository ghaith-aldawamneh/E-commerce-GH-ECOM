import React, { Fragment, useState, useContext } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { LayoutContext } from "../index";

const LoginSignup = (props) => {
  const { data, dispatch } = useContext(LayoutContext);

  const [login, setLogin] = useState(true);
  const [loginValue, setLoginValue] = useState("Create an account");

  const loginSignupModalToggle = () =>
    data.loginSignupModal
      ? dispatch({ type: "loginSignupModalToggle", payload: false })
      : dispatch({ type: "loginSignupModalToggle", payload: true });

  const changeLoginSignup = () => {
    if (login) {
      setLogin(false);
      setLoginValue("Login");
    } else {
      setLogin(true);
      setLoginValue("Create an account");
    }
  };
/**
  className={`${data.loginSignupModal?"":"hidden"}`}






const [login, setLogin]=useState(true)
const [login, setLoginvalue]=useState('create an account')
const changeLoginSignup=()=>{
if(login){setLogin(false)}
setLoginvalue("Login")
}
  <div className={`${data.login?"":"hidden"}  `} </div>
  
  
  div(fixed z-40 flex flex-col w-1/2 text-base text-black bg-white shadow-lg)
  {login ? }
  >div(flex items-start justify-end  m-4 md:m-2 )+svg(w-6 h-6 text-gray-800) path 
   div(p-6 text-center text-lg m-3)
   div(mx-2 my-1 border-2 border-gray-600)
   div(my-1 mt-4 mx-2)
   div(mx-2 my-1 border-2 border-gray-600)
   div(mx-2 mt-4 flex justify-between)
   div(mx-2 mt-4 p-2 bg-black text-white)
   div((mx-2 mt-2)
   div((mx-2 border-2 border-black bg-white p-2 text-black)

   div (fixed w-11)
   div(fixed inset-0 my-8 flex justify-center items-start)
   <div w-1/2 border-black border-1 space-y-4 bg-white 

   <div () 
   

   login & signup component
   const[data,setData]=useState({name,cpassword, error,loading,success})
   
   const alert =(msg)
   const forSubmit=async ()=>
   
   const alert = (msg, type)=>(<div className=
    className=`text-sm text-${type}-500`
    >{msg}</div>);
   
   []= useState(name email pass 
    cpass error success loading )

   const formSubmit = async ()=>{
setData({...data, loading:true})
if(data.c)
export const signReq=async ()=>{try{axios.post()returnres.data}}
async()=>{set({...data,loading:true})
if(data.pass!==data.cpass){loading:false
error:{pass:"",cpass:""}
try{let resData=await signReq}
}
loading->pass!== -> res=await signupRe
if(res.error){
...data,loading;false,pass:"",error:
else if (res.success)
...data,loading;false,pass:"",error:false success:res.succ

}

in the api we put const error = 
json.res({error})
}
try{}
   }
<Fragment>text-2xl text-center mb-6
<form space-y-4
{data.success? alert(data.success,green):""}
<div flex

<input onChange={(e)=>setData({error:{},success:false,name:e.target.value})}
value={data.name}
type="text"
className={`${data.error.name?"border-red-500"
:""} focus:outline-none border` 
}
label htmlFor="name" span text-sm ml-1

div text-center text-2xl
Form space


/>

 */
  return (
    <Fragment>
      {/* Black Overlay  */}
      
      <div
        onClick={(e) => loginSignupModalToggle()}
        className={` ${
          data.loginSignupModal ? "" : "hidden"
        } fixed flex  top-0 z-40 w-full h-screen bg-black opacity-50 cursor-pointer shadow-lg`}
      ></div>
      {/* Signup Login Component Render */}
      <section
        className={` ${
          data.loginSignupModal ? "" : "hidden"
        } fixed z-40 inset-0 my-8 md:my-20 flex items-start justify-center `}
      >
        <div className="w-11/12 md:w-3/5 lg:w-2/4  space-y-4 bg-white p-6 md:px-12 md:py-6">
          {login ? <Login /> : <Signup />}
          <div className="flex items-center space-x-2">
            <span className="border-b border-gray-500 w-full" />
            <span className="font-medium">or</span>
            <span className="border-b border-gray-500 w-full" />
          </div>
          <div
            onClick={(e) => changeLoginSignup()}
            style={{ color: "#303031", border: "1px solid #303031" }}
            className="px-4 py-2 font-medium text-center cursor-pointer"
          >
            {loginValue}
          </div>
          {/*  Modal Close Button */}
          <div className="absolute top-0 right-0 mx-4">
            <svg
              onClick={(e) => {
                loginSignupModalToggle();
                dispatch({ type: "loginSignupError", payload: false });
              }}
              className="w-6 h-6 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginSignup;
