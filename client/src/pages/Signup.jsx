import { Button, Label, TextInput } from "flowbite-react";
import { Form, Link } from "react-router-dom";

const Signup = () => {
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
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value=" Your Username" />
              <TextInput placeholder="Username" type="text" id="username" />
            </div>
            <div className="">
              <Label value=" Your email" />
              <TextInput placeholder="email" type="email" id="email" />
            </div>
            <div className="">
              <Label value=" Your Password" />
              <TextInput placeholder="passWord" type="password" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
