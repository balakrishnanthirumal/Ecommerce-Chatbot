import { useState } from "react";
import image1 from "../../assets/images/sectionsImages/Rectangle 21.png";
import image2 from "../../assets/images/sectionsImages/Rectangle 22.png";

const ProductPage = () => {
  const [mainImage, setMainImage] = useState(image1);

  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-wrap">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 text-left">
          <img
            src={mainImage}
            alt="White Shirt"
            className="mb-4 rounded-lg object-cover h-[450px] w-[450px]"
          />
          <div className="flex space-x-4">
            <img
              src={image1}
              alt="Thumbnail 1"
              className="w-24 h-24 rounded-md border-2 border-gray-300 cursor-pointer"
              onClick={() => setMainImage(image1)}
            />
            <img
              src={image2}
              alt="Thumbnail 2"
              className="w-24 h-24 rounded-md border-2 border-gray-300 cursor-pointer"
              onClick={() => setMainImage(image2)}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2">
          <h1 className="font-extrabold text-3xl mb-4 text-white">
            White Shirt
          </h1>
          <div className="mb-4 text-2xl font-extrabold text-white">★★★★★</div>
          <h1 className="text-green-600 text-2xl font-extrabold mb-4">$500</h1>
          <p className="text-white mb-4">
            Best shirt for outdoor activities and more.
          </p>
          <h4 className="text-lg font-bold text-white mb-4">Product Details</h4>
          <div className="flex justify-between">
            <ul className="text-left">
              <li>
                <p className="text-gray-500 text-sm">Brand</p>
                <p className="font-bold text-white">Amazon</p>
              </li>
              <li>
                <p className="text-gray-500 text-sm">Stock</p>
                <p className="font-bold text-white">15 pieces</p>
              </li>
            </ul>
            <ul className="text-left">
              <li>
                <p className="text-gray-500 text-sm">Category</p>
                <p className="font-bold text-white">Fashion</p>
              </li>
            </ul>
          </div>
          <hr className="my-4" />
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <i className="bi bi-truck text-lg"></i>
              <span className="text-white">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="bi bi-shield-check text-lg"></i>
              <span className="text-white">2 Year Warranty</span>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-8">
            <i className="bi bi-arrow-counterclockwise text-lg"></i>
            <span className="text-white">30-Day Returns</span>
          </div>
          <hr className="my-4" />
          <button className="btn btn-dark bg-black text-white py-2 px-8 w-full md:w-auto rounded-md">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-wrap mt-16">
        {/* Reviews Section (Left Side) */}
        <div className="w-full md:w-1/2">
          <h1 className="font-extrabold text-xl mb-4 text-white">Reviews</h1>
          <p className="text-white font-bold mb-2">Log in to write a review</p>
          <p className="text-gray-500">No reviews</p>
        </div>
        {/* Similar Items Section */}
        <div className="w-full md:w-1/2">
          <h1 className="font-extrabold text-xl mb-4 text-white">
            Similar Items
          </h1>
          {/* First Card */}
          <div className="max-w-sm bg-white rounded-lg border border-gray-300 shadow-sm mb-4 flex">
            <img
              src={image1}
              alt="Classic Cotton Crewneck T-Shirt"
              className="w-1/3 rounded-l-md object-cover"
            />
            <div className="p-4 w-2/3">
              <h5 className="font-bold text-sm mb-1 text-black">
                Classic Cotton Crewneck T-Shirt
              </h5>
              <p className="text-xs text-red-600">Fashion | Nov 15, 2024</p>
              <p className="text-yellow-500 font-semibold text-sm">★★★★☆</p>
              <p className="text-gray-900 font-bold">$100.00</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="max-w-sm bg-white rounded-lg border border-gray-300 shadow-sm mb-4 flex">
            <img
              src={image2}
              alt="White Shirt"
              className="w-1/3 rounded-l-md object-cover"
            />
            <div className="p-4 w-2/3">
              <h5 className="font-bold text-sm mb-1 text-black">White Shirt</h5>
              <p className="text-xs text-red-600">Fashion | Nov 17, 2024</p>
              <p className="text-gray-400 font-semibold text-sm">☆☆☆☆☆</p>
              <p className="text-gray-900 font-bold">$500.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
