import { createContext, useContext, useState } from "react";

const IndexesContext = createContext();

export function IndexesProvider({ children }) {
  const [indexes, setIndexes] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  return (
    <IndexesContext.Provider
      value={{ indexes, setIndexes, pageNumber, setPageNumber }}
    >
      {children}
    </IndexesContext.Provider>
  );
}

export function useIndexes() {
  const context = useContext(IndexesContext);
  if (!context) throw new Error("IndexesContext not found");
  return context;
}
