export const addFavoriteToLocalStorage = (product) => {
  const favorites = getFavoritesFromLocalStorage();
  if (!favorites.some((p) => p.id === product.id)) {
    // if the product already not present in the favourite then push into the array
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

// Remove  product from a localStorage
export const removeFavoriteFromLocalStorage = (productId) => {
  const favorites = getFavoritesFromLocalStorage();
  const updateFavorites = favorites.filter(
    (product) => product.id !== productId
  );

  localStorage.setItem("favorites", JSON.stringify(updateFavorites));
};

// Retrive favorites from a localStorage
export const getFavoritesFromLocalStorage = () => {
  const favoritesJSON = localStorage.getItem("favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};
