import { useParams } from "react-router";
import ProductModal from "../products/ProductModal";

const Brand = () => {
  const { id } = useParams(); // Get brand ID from route parameters

  return (
    <>
      {/* Brand Title */}
      <h1 className="text-center text-white text-[5rem]">Explore {id}</h1>

      {/* Sorting Dropdown */}
      <select
        name=""
        id=""
        className="text-white bg-gray-800 border border-white rounded-md p-2 ml-[4rem] mt-[2rem]"
      >
        <option value="1">Sort Product</option>
        <option value="2">Price: Low to High</option>
        <option value="3">Price: High to Low</option>
        <option value="4">Rating:Low to High</option>
        <option value="5">Rating: High to Low</option>
      </select>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
        <ProductModal />
        <ProductModal />
        <ProductModal />
        <ProductModal />
        <ProductModal />
      </div>
    </>
  );
};

export default Brand;
