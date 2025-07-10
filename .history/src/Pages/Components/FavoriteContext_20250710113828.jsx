// src/Context/FavoriteContext.jsx
import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <FavoriteContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}
