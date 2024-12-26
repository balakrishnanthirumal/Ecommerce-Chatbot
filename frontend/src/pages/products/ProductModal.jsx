import { FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from "../../redux/favouriteSlice";

import {
  addFavoriteToLocalStorage,
  getFavoritesFromLocalStorage,
  removeFavoriteFromLocalStorage,
} from "../../redux/localStorage";
import { toast } from "react-toastify";

const ProductModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favourites) || [];
  const isFavorite = favorites.some((p) => p._id === product._id);
  const userInfo = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
    dispatch(setFavorites(favoritesFromLocalStorage));
  }, []);
  console.log(userInfo);
  const toggleFavorites = () => {
    if (userInfo) {
      if (isFavorite) {
        dispatch(removeFromFavorites(product));

        removeFavoriteFromLocalStorage(product._id);
        toast.success("Product removed from cart");
      } else {
        dispatch(addToFavorites(product));

        addFavoriteToLocalStorage(product);
        toast.success("Product added to cart");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="border border-white w-[300px] h-auto rounded-lg p-[10px] mx-auto">
      <Link to={"/product/1"}>
        <img
          src="src/assets/images/sectionsImages/Rectangle 49.png"
          className="w-full h-auto object-cover rounded-md"
          alt=""
        />
      </Link>
      <div className="flex justify-between items-center mt-[10px]">
        <div className="text-white text-[30px] flex-1 font-semibold">
          Cooling Glasses
        </div>
        <div className="flex gap-2 items-center">
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
      {location.pathname !== "/cart" && (
        <button
          className="w-[80%]  h-[40px] mx-auto bg-white rounded-lg ml-[30px] mt-[10px]"
          onClick={toggleFavorites}
        >
          {isFavorite ? "Remove from Cart" : "Add to cart"}
        </button>
      )}
    </div>
  );
};
export default ProductModal;
