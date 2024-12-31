import { useSelector } from "react-redux";
import ProductModal from "../products/ProductModal";
import { toast } from "react-toastify";

const Cart = () => {
  const favorites = useSelector((state) => state.favourites);
  const totalPrice = favorites.reduce(
    (total, product) => total + product.price,
    0
  );
  return (
    <div className="flex flex-col items-center px-4">
      {/* Order Summary Section */}
      <div className="bg-[#E6C744] h-auto w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-[4rem] rounded-lg flex flex-col">
        {/* Order Summary Title */}
        <p className="text-[30px] md:text-[40px] lg:text-[50px] text-center text-black mt-[10px]">
          Order Summary
        </p>

        {/* Quantity Section */}
        <div className="flex justify-between text-[20px] md:text-[25px] lg:text-[30px] font-semibold mt-[2rem] px-4 md:px-6 lg:px-8">
          <p className="text-black">Quantity</p>
          <p className="text-black">{favorites.length}</p>
        </div>

        {/* Total Section */}
        <div className="flex justify-between text-[20px] md:text-[25px] lg:text-[30px] font-semibold mt-[2rem] px-4 md:px-6 lg:px-8">
          <p className="text-black">Total</p>
          <p className="text-black">Rs: {Math.floor(totalPrice)}</p>
        </div>
      </div>

      {/* Product List Section */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 mt-[3rem]">
        {favorites.map((product) => (
          <ProductModal product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
