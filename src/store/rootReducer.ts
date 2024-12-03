import { combineReducers } from "redux";
import AuthSlice from "@/store/services/Auth/AuthSlice";

const RootReducer = combineReducers({ AuthSlice });

export default RootReducer;
