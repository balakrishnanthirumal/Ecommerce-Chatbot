import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Getting user information from the Redux global state
  const userInfo = useSelector((state) => state.auth.userInfo);

  // Local state for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Effect to redirect the user to the homepage if they are already logged in
  useEffect(() => {
    if (userInfo) {
      navigate("/"); // Redirect to the home page
    }
  }, [navigate, userInfo]); // Dependencies to trigger the effect when these change

  // Function to handle the form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Dispatch Redux action to set credentials
    dispatch(
      setCredentials({
        email,
        password,
      })
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start lg:space-x-10 p-5 lg:p-10">
      {/* Form Section */}
      <div className="w-full lg:w-[500px] max-w-md">
        <h1 className="text-white font-semibold text-2xl lg:text-3xl text-center lg:text-left">
          LOGIN
        </h1>

        {/* Login Form */}
        <form className="mt-8" onSubmit={submitHandler}>
          <label htmlFor="email" className="text-white font-semibold text-sm">
            Email
          </label>
          <input
            value={email}
            type="email"
            className="w-full h-10 lg:h-12 rounded-md mt-2 p-3 text-black"
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Enter your email"
          />

          <label
            htmlFor="password"
            className="text-white font-semibold text-sm mt-6 block"
          >
            Password
          </label>
          <input
            value={password}
            type="password"
            className="w-full h-10 lg:h-12 rounded-md mt-2 p-3 text-black"
            onChange={(e) => setPassword(e.target.value)} // Update password state
            placeholder="Enter your password"
          />

          {/* Submit Button */}
          <button className="p-[10px] bg-pink-700 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-800 transition">
            Submit
          </button>
        </form>

        {/* Navigation to Signup Page */}
        <p className="text-white text-sm text-center lg:text-left mt-4">
          New Customer?{" "}
          <Link className="text-pink-700 hover:text-pink-500" to={"/signup"}>
            SignUp
          </Link>
        </p>
      </div>

      {/* Illustration Section for Large Screens */}
      <div className="hidden lg:block lg:w-[700px] lg:h-[700px]">
        <img
          src="src/assets/images/signup.png"
          className="w-full h-full object-cover rounded-lg"
          alt="Login Illustration"
        />
      </div>
    </div>
  );
};

export default LoginPage;
