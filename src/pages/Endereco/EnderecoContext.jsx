import React, { createContext, useState, useContext, Children } from "react";

const EnderecoContext = createContext();

export const useEndereco = () => useContext(EnderecoContext);

export const EnderecoProvider = ({ children }) => {
  const [endereco, setEndereco] = useState(null);

  return (
    <EnderecoContext.Provider value={{ endereco, setEndereco }}>
      {children}
    </EnderecoContext.Provider>
  );
};
