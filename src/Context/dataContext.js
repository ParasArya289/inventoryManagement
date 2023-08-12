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
    const retrievedState = localStorage.getItem("state");
    if (retrievedState) {
      const parse = JSON.parse(retrievedState);
      dispatchData({ type: "INIT_DATA", payload: parse });
    }
  }, []);

  useEffect(() => {
    if (dataState !== initData) {
      const stringify = JSON.stringify(dataState);
      localStorage.setItem("state", stringify);
    }
  }, [dataState]);


  useEffect(() => {
    dispatchData({ type: "GET_INVENTORY_COUNT" });
    dispatchData({ type: "GET_DEPARTMENTS" });
  }, [dataState.inventoryData]);

  return (
    <dataContext.Provider
      value={{ filters, setFilters, dataState, dispatchData }}
    >
      {children}
    </dataContext.Provider>
  );
};
export const useData = () => useContext(dataContext);
