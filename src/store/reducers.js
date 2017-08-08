import {combineReducers} from 'redux';
import { HomeReducer as Home } from "../routes/Home/modules/home"

export const makeRootReducer = () => {
	return combineReducers({
		home
	});
}

export default makeRootReducer;