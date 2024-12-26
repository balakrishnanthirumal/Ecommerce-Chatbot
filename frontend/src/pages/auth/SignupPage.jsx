import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
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
      toast.error("Password Mismatched");
    }
  };
  return (
    <div className="flex justify-between">
      <div className=" h-[500px] ml-[30px] w-[500px] pt-[10px] mt-[100px]">
        <div className=" text-white font-semibold text-[30px] ml-[50px]">
          SIGNUP
        </div>

        <form className="ml-[50px] mt-[50px]" onSubmit={submitHandler}>
          <label
            htmlFor="username"
            className="text-white font-semibold block text-[15px]"
          >
            Username
          </label>
          <input
            value={username}
            type="text"
            className="w-[500px] h-[40px] rounded-md mt-[10px] mb-[10px]"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label
            htmlFor="email"
            className="text-white font-semibold block text-[15px]"
          >
            Email
          </label>
          <input
            value={email}
            type="email"
            className="w-[500px] h-[40px] rounded-md mt-[10px]"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="password"
            className="text-white font-semibold block text-[15px] mt-[20px]"
          >
            Password
          </label>
          <input
            value={password}
            type="password"
            className="w-[500px] h-[40px] rounded-md mt-[10px] mb-[10px]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="confirmpassword"
            className="text-white font-semibold block text-[15px]"
          >
            Confirm Password
          </label>
          <input
            value={confirmPassword}
            type="password"
            className="w-[500px] h-[40px] rounded-md mt-[10px]"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-pink-700 px-[20px] py-[10px] mt-[20px] rounded-lg"
          >
            Submit
          </button>
        </form>

        <p className="text-white ml-[50px] mt-[20px]">
          Already have an account?{" "}
          <Link className="text-pink-700 cursor-pointer" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
      <img
        src="src/assets/images/login.png"
        className="hidden lg:block h-[900px] w-[700px] object-cover "
        alt=""
      />{" "}
    </div>
  );
};
export default SignupPage;
