import { inventoryData } from "../data";

export const initData = {
  inventoryData,
  totalStocks: 0,
  totalDelivered: 0,
  lowStockItems: 0,
  departments: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "GET_INVENTORY_COUNT": {
      const inventory = state?.inventoryData?.reduce(
        (acc, { stock, delivered }) => ({
          totalStocks: (acc.totalStocks += +stock),
          totalDelivered: (acc.totalDelivered += +delivered),
          lowStockItems:
            stock <= 10 ? (acc.lowStockItems += +stock) : acc.lowStockItems,
        }),
        {
          totalStocks: 0,
          totalDelivered: 0,
          lowStockItems: 0,
        }
      );
      return {
        ...state,
        ...inventory,
      };
    }
    case "GET_DEPARTMENTS": {
      return {
        ...state,
        departments: [
          ...new Set(state?.inventoryData?.map(({ department }) => department)),
        ],
      };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        inventoryData: [...state.inventoryData, action.payload],
      };
    }
    case "INIT_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
};
