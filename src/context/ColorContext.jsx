import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [defaultColor, setDefaultColor] = useState('#ffff88'); // Amarillo post-it por defecto

  return (
    <ColorContext.Provider value={{ defaultColor, setDefaultColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);