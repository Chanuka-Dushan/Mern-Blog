/* eslint-disable react/no-unescaped-entities */
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import {  Link,useNavigate } from "react-router-dom";

const Signup = () => {

  const [formData,setformData]=useState({});
  const [errorMesssage,seterrorMessage]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setformData({...formData,[e.target.id]:e.target.value.trim()})
    
  };
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
     return seterrorMessage("Please fill all fields");
      
    }
    try{
      setLoading(true);
      seterrorMessage(null);
      const res=await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      });
      const data=await res.json();
      if(data.success===false){
        return seterrorMessage(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
   
    }catch(err){
      seterrorMessage(err.message)
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5">
        {/*left */}
        <div className="flex-1">
          <Link to="/" className="  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Dushan's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">This Is a Demo of my Project.You can signu using email & password or with google</p>
        </div>
        {/*Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value=" Your Username" />
              <TextInput placeholder="Username" type="text" id="username" onChange={handleChange} />
            </div>
            <div className="">
              <Label value=" Your email" />
              <TextInput placeholder="email" type="email" id="email" onChange={handleChange}/>
            </div>
            <div className="">
              <Label value=" Your Password" />
              <TextInput placeholder="passWord" type="password" id="password" onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>{
              loading?(
                <>
                <Spinner size="sm" />
                <span className="pl-2">Loading...</span></>
              ):'Sign Up'
              }</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">Sign In</Link>
          </div>
          {errorMesssage && (
            <Alert className="mt-5 " color='failure'>
              {errorMesssage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
