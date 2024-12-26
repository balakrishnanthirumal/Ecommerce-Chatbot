import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/authSlice";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    if (password === confirmPassword) {
      dispatch(setCredentials({ username, email, password }));
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-5 lg:justify-between lg:p-10 bg-gray-900 min-h-screen">
      {/* Form Section */}
      <div className="lg:w-1/2 w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          SIGNUP
        </h2>
        <form onSubmit={submitHandler}>
          {[
            { label: "Username", type: "text", name: "username" },
            { label: "Email", type: "email", name: "email" },
            { label: "Password", type: "password", name: "password" },
            {
              label: "Confirm Password",
              type: "password",
              name: "confirmPassword",
            },
          ].map((field, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={field.name}
                className="text-white font-semibold block mb-2"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md text-gray-900"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="p-[10px] bg-pink-700 text-white py-2 rounded-md hover:bg-pink-600 transition"
          >
            Submit
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-700 hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="src/assets/images/login.png"
          alt="Signup Illustration"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SignupPage;
