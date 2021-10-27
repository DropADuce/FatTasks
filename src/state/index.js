import {combineReducers, createStore} from "redux";
import {cardsReducer} from "./reducers/cardsReducer";

const rootReducer = combineReducers({cards: cardsReducer})

export const store = createStore(rootReducer)