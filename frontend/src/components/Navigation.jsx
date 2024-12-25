import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router";
import { useState } from "react";

const Navigation = () => {
  const [categoryDropDown, setCategoryDropDown] = useState(false);
  const [brandDropDown, setBrandDropDown] = useState(false);
  const [navigationDropdown, setNavigationDropdown] = useState(false);
  return (
    <>
      <nav className=" w-full h-[100px] flex  gap-3 justify-between items-center px-10 fixed bg-[#020817] z-50">
        <div>
          <p className="font-extrabold text-[40px] ml-[5rem]">UNITY</p>
        </div>
        <div className="hidden lg:flex gap-10  items-center">
          <div className="flex gap-10 ml-[300px] items-center">
            <Link to={"/"}>
              <p className="text-[22px] font-medium">HOME</p>
            </Link>
            <Link to={"/product"}>
              <p className="text-[22px] font-medium">PRODUCT</p>
            </Link>
            <p
              className="text-[22px] font-medium relative cursor-pointer"
              onClick={() => setCategoryDropDown(!categoryDropDown)}
            >
              CATEGORY
            </p>
            {categoryDropDown && (
              <div
                className={`absolute w-[150px] bg-[#020817] flex flex-col justify-center  broder border-gray-600 border-[1px] text-white z-50  rounded-md${
                  categoryDropDown ? "block" : "hidden"
                } top-[80px] right-[550px]`}
              >
                <div className="hover:bg-gray-500">
                  <p className="font-semibold  text-center mx-auto text-[15px]">
                    Bag
                  </p>
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
              className="text-[22px] font-medium cursor-pointer relative"
              onClick={() => setBrandDropDown(!brandDropDown)}
            >
              BRANDS
            </p>
            {brandDropDown && (
              <div
                className={`absolute w-[150px] bg-[#020817] flex flex-col justify-center ml-[5px] border-gray-600 border-[1px] text-white z-50  rounded-md${
                  categoryDropDown ? "block" : "hidden "
                } top-[80px] right-[410px] px-[5px]`}
              >
                <div className="hover:bg-gray-500">
                  <p className="font-semibold  text-center mx-auto text-[15px]">
                    Bag
                  </p>
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

          <div className="flex gap-10 ml-[8rem] items-center">
            <TiShoppingCart color="white" size={35} />
            <Link to={"/login"}>
              <button className="text-black bg-neutral-300 p-[10px] rounded-md  font-medium">
                SignIn
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="text-black bg-neutral-300 p-[10px] rounded-md  font-medium">
                SignUp
              </button>
            </Link>
          </div>
        </div>

        <div
          className=" relative lg:hidden gap-10"
          onClick={() => setNavigationDropdown(!navigationDropdown)}
        >
          <hr className="w-[20px] h-[10px] font-semibold " />
          <hr className="w-[20px] h-[10px] " />
          <hr className="w-[20px] h-[10px] " />
        </div>

        {navigationDropdown && (
          <div className="absolute w-[300px] right-0 top-[80px] bg-slate-900 rounded-md">
            <div className="flex flex-col gap-5 p-[20px]">
              <Link to={"/"}>
                <p className="text-[20px] font-medium">HOME</p>
              </Link>
              <Link to={"/product"}>
                <p className="text-[20px] font-medium">PRODUCT</p>
              </Link>
              <p
                className="text-[20px] font-medium"
                onClick={() => setCategoryDropDown(!categoryDropDown)}
              >
                CATEGORY
              </p>
              <hr />
              {categoryDropDown && (
                <div className="flex flex-col gap-2">
                  <div className="cursor-pointer">
                    <p className="font-semibold  mx-auto text-[15px]">Bag</p>
                  </div>
                  <div className="cursor-pointer">
                    <p className="font-semibold text-[15px]">Shoe</p>
                  </div>
                  <div className="cursor-pointer">
                    <p className="font-semibold text-[15px]">Thakkali</p>
                  </div>
                </div>
              )}

              <p
                className="text-[20px] font-medium"
                onClick={() => setBrandDropDown(!brandDropDown)}
              >
                BRANDS
              </p>
              {brandDropDown && (
                <div className="flex flex-col gap-2">
                  <div className="cursor-pointer">
                    <p className="font-semibold  mx-auto text-[15px]">Bag</p>
                  </div>
                  <div className="cursor-pointer">
                    <p className="font-semibold text-[15px]">Shoe</p>
                  </div>
                  <div className="cursor-pointer">
                    <p className="font-semibold text-[15px]">Thakkali</p>
                  </div>
                </div>
              )}
              <hr />
            </div>
            <div className="flex flex-col gap-[10px] ml-[20px]">
              <TiShoppingCart color="white" size={35} />
              <button className="text-black bg-neutral-300 p-[10px] rounded-md  font-medium w-[100px]">
                SignIn
              </button>
              <button className="text-black bg-neutral-300 p-[10px] rounded-md  font-medium w-[100px]">
                SignUp
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navigation;
