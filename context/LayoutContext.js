import React, { createContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [category, setCategory] = useState('New')
  return (
    <LayoutContext.Provider value={{ category, setCategory }}>
      {children}
    </LayoutContext.Provider >
  )
}

export default LayoutContext;