import { TiShoppingCart } from "react-icons/ti";

const Navigation = () => {
  return (
    <nav className="w-full h-[100px]  flex flex-wrap gap-3] justify-between items-center px-10 fixed bg-[#020817] z-50">
      <div>
        <p className="font-extrabold text-[40px] ml-[5rem]">UNITY</p>
      </div>

      <div className="flex gap-10 ml-[300px] items-center">
        <p className="text-[22px] font-medium">HOME</p>
        <p className="text-[22px] font-medium">PRODUCT</p>
        <p className="text-[22px] font-medium">CATEGORY</p>
        <p className="text-[22px] font-medium">BRANDS</p>
      </div>

      <div className="flex gap-10 ml-[8rem] items-center">
        <TiShoppingCart color="white" size={35} />
        <button className="text-black bg-neutral-300 p-[10px] rounded-md  font-medium">
          SignIn
        </button>
        <button className="text-black bg-neutral-300 p-[10px] rounded-md  font-medium">
          SignUp
        </button>
      </div>
    </nav>
  );
};
export default Navigation;
