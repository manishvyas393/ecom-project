import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/category.reducers";
import { userReducer } from "./user/userReducer";
export const rootReducer = combineReducers({
      user: userReducer,
      categories: categoriesReducer,
      cart:cartReducer
})