import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      setCredentials({
        email,
        password,
      })
    );
  };
  return (
    <div className="flex justify-between">
      <div className=" h-[500px] ml-[30px] w-[500px] pt-[10px]">
        <div className=" text-white font-semibold text-[30px] ml-[50px] mt-[100px]">
          LOGIN
        </div>

        <form className="ml-[50px] mt-[50px]" onSubmit={submitHandler}>
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
            className="w-[500px] h-[40px] rounded-md mt-[10px]"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-pink-700 px-[20px] py-[10px] mt-[20px] rounded-lg">
            Submit
          </button>
        </form>

        <p className="text-white ml-[50px] mt-[20px]">
          New Customer?{" "}
          <Link className="text-pink-700 cursor-pointer" to={"/signup"}>
            SignUp
          </Link>
        </p>
      </div>

      <img
        src="src/assets/images/signup.png"
        className="hidden lg:block h-[900px] w-[700px] object-cover"
        alt=""
      />
    </div>
  );
};

export default LoginPage;
