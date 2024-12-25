import { FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const ProductModal = () => {
  return (
    <div className="border border-white w-[300px] h-auto rounded-lg p-[10px]">
      <img
        src="src/assets/images/sectionsImages/Rectangle 49.png"
        className=""
        alt=""
      />
      <div className="flex justify-around items-center mt-[10px]">
        <div className="text-white text-[30px] w-[60%] font-semibold">
          Cooling Glasses
        </div>
        <div className="flex gap-3 items-center">
          <FiShoppingBag color="white" size={25} />
          <p className="text-[20px]">15</p>
        </div>
      </div>

      <div className="flex gap-1 ml-3 mt-3">
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
      </div>

      <div className="flex justify-between items-center mt-[10px] p-[10px]">
        <p className="text-[18px] font-medium">Accessories</p>
        <p className="text-[18px] font-medium">Company Nmae</p>
      </div>

      <div className="flex justify-between items-center mt-[5px] p-[10px] ">
        <p className="line-through text-[20px] font-semibold">Rs: 1500</p>
        <p className="text-[25px] font-semibold">Rs: 999</p>
      </div>

      <button className="w-[80%]  h-[40px] mx-auto bg-white rounded-lg ml-[30px] mt-[10px]">
        Add to cart
      </button>
    </div>
  );
};
export default ProductModal;
