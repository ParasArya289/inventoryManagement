import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { dataReducer, initData } from "../Reducer/dataReducer";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    lowStockItem: false,
    sort: "name",
  });

  const [dataState, dispatchData] = useReducer(dataReducer, initData);

  useEffect(() => {
    dispatchData({ type: "GET_INVENTORY_COUNT" });
    dispatchData({ type: "GET_DEPARTMENTS" });
  }, []);

  return (
    <dataContext.Provider
      value={{ filters, setFilters, dataState, dispatchData }}
    >
      {children}
    </dataContext.Provider>
  );
};
export const useData = () => useContext(dataContext);
