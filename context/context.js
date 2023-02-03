import React from 'react';

export const FavoriteContext = React.createContext();

function FavoriteContextProvider({children}) {
  const [favoriteMovies, setFavoriteMovies] = React.useState([]);

  const values = {
    favoriteMovies,
    setFavoriteMovies,
  };

  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
