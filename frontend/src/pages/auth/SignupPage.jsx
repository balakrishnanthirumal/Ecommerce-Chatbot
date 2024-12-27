import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SignupPage = () => {
  // State variables to store form data
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo); // Fetching current user info from Redux
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to homepage if user is already logged in
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Check if passwords match before dispatching action
    if (password === confirmPassword) {
      dispatch(
        setCredentials({
          username,
          email,
          password,
          confirmPassword,
        })
      );
    } else {
      // Display error notification if passwords mismatch
      toast.error("Password Mismatched");
    }
  };

  return (
    <div className="flex justify-between">
      {/* Form Section */}
      <div className="h-[500px] ml-[30px] w-[500px] pt-[10px] mt-[100px]">
        <div className="text-white font-semibold text-[30px] ml-[50px]">
          SIGNUP
        </div>

        <form className="ml-[50px] mt-[50px]" onSubmit={submitHandler}>
          {/* Username Input */}
          <label
            htmlFor="username"
            className="text-white font-semibold block text-[15px]"
          >
            Username
          </label>
          <input
            value={username}
            type="text"
            className="w-[90%] h-[40px] rounded-md mt-[10px] mb-[10px]"
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Email Input */}
          <label
            htmlFor="email"
            className="text-white font-semibold block text-[15px]"
          >
            Email
          </label>
          <input
            value={email}
            type="email"
            className="w-[90%] h-[40px] rounded-md mt-[10px]"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <label
            htmlFor="password"
            className="text-white font-semibold block text-[15px] mt-[20px]"
          >
            Password
          </label>
          <input
            value={password}
            type="password"
            className="w-[90%] h-[40px] rounded-md mt-[10px] mb-[10px]"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirm Password Input */}
          <label
            htmlFor="confirmpassword"
            className="text-white font-semibold block text-[15px]"
          >
            Confirm Password
          </label>
          <input
            value={confirmPassword}
            type="password"
            className="w-[90%] h-[40px] rounded-md mt-[10px]"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-pink-700 px-[20px] py-[10px] mt-[20px] rounded-lg"
          >
            Submit
          </button>
        </form>

        {/* Link to Login Page */}
        <p className="text-white ml-[50px] mt-[20px]">
          Already have an account?{" "}
          <Link className="text-pink-700 cursor-pointer" to={"/login"}>
            Login
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <img
        src="src/assets/images/login.png"
        className="hidden lg:block h-[900px] w-[700px] object-cover"
        alt="Signup Illustration"
      />
    </div>
  );
};

export default SignupPage;
