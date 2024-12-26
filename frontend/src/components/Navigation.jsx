import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";
const Navigation = () => {
  const [categoryDropDown, setCategoryDropDown] = useState(false);
  const [brandDropDown, setBrandDropDown] = useState(false);
  const [navigationDropdown, setNavigationDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="w-full h-[100px] flex items-center justify-between px-6 lg:px-10 fixed bg-[#020817] z-50">
        <div>
          <p className="font-extrabold text-[30px] lg:text-[40px] ml-4 lg:ml-[5rem]">
            UNITY
          </p>
        </div>

        <div className="hidden lg:flex gap-6 lg:gap-10 items-center">
          <div className="flex flex-wrap gap-6 lg:gap-10 items-center">
            <Link to={"/"}>
              <p className="text-[18px] lg:text-[22px] font-medium">HOME</p>
            </Link>
            <Link to={"/allproducts"}>
              <p className="text-[18px] lg:text-[22px] font-medium">PRODUCT</p>
            </Link>
            <p
              className="text-[18px] lg:text-[22px] font-medium relative cursor-pointer"
              onClick={() => setCategoryDropDown(!categoryDropDown)}
            >
              CATEGORY
            </p>
            {categoryDropDown && (
              <div
                className={`absolute w-[150px] bg-[#020817] flex flex-col justify-center border border-gray-600 text-white z-50 rounded-md ${
                  userInfo
                    ? "top-[80px] right-[300px]"
                    : "top-[80px] right-[450px]"
                }  mr-[10px]}`}
              >
                <div className="hover:bg-gray-500">
                  <p className="font-semibold text-center text-[15px]">Bag</p>
                </div>
                <div className="hover:bg-gray-500">
                  <p className="font-semibold text-center text-[15px]">Shoe</p>
                </div>
                <div className="hover:bg-gray-500">
                  <p className="font-semibold text-center text-[15px]">
                    Thakkali
                  </p>
                </div>
              </div>
            )}

            <p
              className="text-[18px] lg:text-[22px] font-medium cursor-pointer relative"
              onClick={() => setBrandDropDown(!brandDropDown)}
            >
              BRANDS
            </p>
            {brandDropDown && (
              <div
                className={`absolute w-[150px] bg-[#020817] flex flex-col justify-center border border-gray-600 text-white z-50 rounded-md ${
                  userInfo
                    ? "top-[80px] right-[150px]"
                    : "top-[80px] right-[300px]"
                } px-[5px]`}
              >
                <div className="hover:bg-gray-500">
                  <p className="font-semibold text-center text-[15px]">Bag</p>
                </div>
                <div className="hover:bg-gray-500">
                  <p className="font-semibold text-center text-[15px]">Shoe</p>
                </div>
                <div className="hover:bg-gray-500">
                  <p className="font-semibold text-center text-[15px]">
                    Thakkali
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-6 lg:gap-10 items-center">
            <Link to={"/cart"}>
              <TiShoppingCart color="white" size={25} lg:size={35} />
            </Link>
            {userInfo ? (
              // Render something when userInfo is true
              <div>
                <div
                  className="rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center"
                  onClick={() => setProfileDropdown(!profileDropdown)}
                >
                  <img
                    src="src/assets/images/defaultpic.png"
                    className="w-full h-full rounded-full object-cover cursor-pointer"
                    alt="Profile Picture"
                  />
                </div>

                {profileDropdown && (
                  <div className="absolute w-[150px] bg-[#020817] flex flex-col justify-center border border-gray-600 text-white z-50 rounded-md top-[80px] right-[30px] px-[5px]">
                    <div className="hover:bg-gray-500">
                      <p className="font-semibold text-center text-[15px]">
                        username
                      </p>
                    </div>
                    <div className="hover:bg-gray-500">
                      <p
                        className="font-semibold text-center text-[15px]"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-black bg-neutral-300 px-4 py-2 rounded-md font-medium">
                    SignIn
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="text-black bg-neutral-300 px-4 py-2 rounded-md font-medium">
                    SignUp
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setNavigationDropdown(!navigationDropdown)}
        >
          <hr className="w-6 h-1 bg-white" />
          <hr className="w-6 h-1 bg-white" />
          <hr className="w-6 h-1 bg-white" />
        </div>

        {navigationDropdown && (
          <div className="absolute w-[300px] right-0 top-[100px] bg-[#020817] rounded-md p-4 border border-white-1px">
            <div className="flex flex-col gap-4">
              <Link to={"/"}>
                <p className="text-[18px] font-medium">HOME</p>
              </Link>
              <Link to={"/allproducts"}>
                <p className="text-[18px] font-medium">PRODUCT</p>
              </Link>
              <p
                className="text-[18px] font-medium cursor-pointer"
                onClick={() => setCategoryDropDown(!categoryDropDown)}
              >
                CATEGORY
              </p>
              <hr />
              {categoryDropDown && (
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="font-semibold text-[15px]">Bag</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[15px]">Shoe</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[15px]">Thakkali</p>
                  </div>
                </div>
              )}
              <p
                className="text-[18px] font-medium cursor-pointer"
                onClick={() => setBrandDropDown(!brandDropDown)}
              >
                BRANDS
              </p>
              <hr />
              {brandDropDown && (
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="font-semibold text-[15px]">Bag</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[15px]">Shoe</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[15px]">Thakkali</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col items-start gap-4">
                <Link to={"/cart"}>
                  <TiShoppingCart color="white" size={25} />
                </Link>
                {userInfo ? (
                  // Render something when userInfo is true
                  <div>
                    <div
                      className="rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center"
                      onClick={() => setProfileDropdown(!profileDropdown)}
                    >
                      <img
                        src="src/assets/images/defaultpic.png"
                        className="w-full h-full rounded-full object-cover cursor-pointer"
                        alt="Profile Picture"
                      />
                    </div>

                    {profileDropdown && (
                      <div className="absolute w-[150px] h-auto bg-[#020817] flex flex-col justify-center border border-gray-600 text-white z-50 rounded-md bottom-[10px] left-[70px] right-[150px] px-[5px]">
                        <div className="hover:bg-gray-500">
                          <p className="font-semibold text-center text-[15px]">
                            Profile
                          </p>
                        </div>
                        <div className="hover:bg-gray-500">
                          <p
                            className="font-semibold text-center text-[15px]"
                            onClick={() => dispatch(logout())}
                          >
                            Logout
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link to="/login">
                      <button className="text-black bg-neutral-300 px-4 py-2 rounded-md font-medium">
                        SignIn
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="text-black bg-neutral-300 px-4 py-2 rounded-md font-medium">
                        SignUp
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      r
    </>
  );
};
export default Navigation;
