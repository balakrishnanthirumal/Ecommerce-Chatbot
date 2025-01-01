import { FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

// Import Redux actions for managing favorites
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from "../../redux/favouriteSlice";

// Import helper functions for local storage interaction
import {
  addFavoriteToLocalStorage,
  getFavoritesFromLocalStorage,
  removeFavoriteFromLocalStorage,
} from "../../redux/localStorage";

import { toast } from "react-toastify";

const ProductModal = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favourites) || []; // Get favorite products from Redux store
  const isFavorite = favorites.some((p) => p.id === product?.id); // Check if the product is already a favorite
  console.log(isFavorite);
  const userInfo = useSelector((state) => state.auth.userInfo); // Get user information from Redux store

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
    dispatch(setFavorites(favoritesFromLocalStorage)); // Dispatch action to update Redux store
  }, []);

  const toggleFavorites = () => {
    if (userInfo) {
      // If user is logged in
      if (isFavorite) {
        // Remove from favorites if already present
        dispatch(removeFromFavorites(product));
        removeFavoriteFromLocalStorage(product.id); // Update local storage
        toast.success("Product removed from cart"); // Show success message
      } else {
        // Add to favorites
        dispatch(addToFavorites(product));
        addFavoriteToLocalStorage(product); // Update local storage
        toast.success("Product added to cart"); // Show success message
      }
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  return (
    <div className="border border-white w-[300px] h-auto rounded-lg p-[10px] mx-auto">
      {/* Product image link */}
      <Link to={"/product/1"}>
        <img
          src={product?.image}
          className="w-full h-auto object-cover rounded-md"
          alt=""
        />
      </Link>

      {/* Product title and price */}
      <div className="flex justify-between items-center mt-[10px]">
        <div className="text-white text-[30px] flex-1 font-semibold">
          {product?.name}
        </div>
        <div className="flex gap-2 items-center">
          <FiShoppingBag color="white" size={25} />
          <p className="text-[20px]">15</p>
        </div>
      </div>

      {/* Product rating */}
      <div className="flex gap-1 ml-3 mt-3">
        {Array.from({ length: Math.floor(product?.ratings) }).map(
          (_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          )
        )}
        <span className="text-white">{product.review_count}</span>
      </div>

      {/* Product details */}
      <div className="flex justify-between items-center mt-[10px] p-[10px]">
        <p className="text-[18px] font-medium"></p>
        <p className="text-[18px] font-medium">{product.company_name}</p>
      </div>

      {/* Product pricing */}
      <div className="flex justify-between items-center mt-[5px] p-[10px] ">
        <p className="line-through text-[20px] font-semibold">Rs: 1500</p>
        <p className="text-[25px] font-semibold">
          Rs: {Math.floor(product?.price)}
        </p>
      </div>

      {/* Add to Cart/Remove from Cart button */}

      <button
        className="w-[80%]  h-[40px] mx-auto bg-white rounded-lg ml-[30px] mt-[10px]"
        onClick={toggleFavorites}
      >
        {isFavorite ? "Remove from Cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductModal;
