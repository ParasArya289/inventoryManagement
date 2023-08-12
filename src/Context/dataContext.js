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
  const [dataState, dispatchData] = useReducer(dataReducer, initData);
  const [filters, setFilters] = useState({
    category: "all",
    lowStockItem: false,
    sort: "name",
  });

  useEffect(() => {
    dispatchData({ type: "GET_INVENTORY_COUNT" });
    dispatchData({ type: "GET_DEPARTMENTS" });
  }, []);

  return (
    <dataContext.Provider
      value={{ dataState, dispatchData, filters, setFilters }}
    >
      {children}
    </dataContext.Provider>
  );
};
export const useData = () => useContext(dataContext);
