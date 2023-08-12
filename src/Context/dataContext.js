import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initData } from "../Reducer/dataReducer";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, initData);

  useEffect(() => {
    dispatchData({ type: "GET_INVENTORY_COUNT" });
    dispatchData({ type: "GET_DEPARTMENTS" });
  }, []);

  return (
    <dataContext.Provider value={{ dataState, dispatchData }}>
      {children}
    </dataContext.Provider>
  );
};
export const useData = () => useContext(dataContext);
