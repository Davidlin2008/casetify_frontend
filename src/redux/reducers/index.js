import { combineReducers } from "redux";
import cartList from "redux/reducers/cartList";
import selectedColor from "redux/reducers/selectedColor";
import selectedDesign from "redux/reducers/selectedDesign";
import addedText from "redux/reducers/addedText";
import totalPrice from "redux/reducers/totalPrice";
import selectedTextColor from "redux/reducers/selectedTextColor";

export default combineReducers({
  cartList,
  selectedColor,
  selectedDesign,
  addedText,
  totalPrice,
  selectedTextColor
});
