import { combineReducers } from "redux";
import FavQtyReducer from "./FavQtyReducer";
import qtyTotalReducer from "./qtyTotalReducer";
import LoginReducer from "./LoginReducer";
import UseId from "./UseId"
const reducer = combineReducers({
  FavQtyReducer,
  qtyTotalReducer,
  LoginReducer,
  UseId,
});

export default reducer;