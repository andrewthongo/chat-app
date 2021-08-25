import { applyMiddleware, combineReducers, createStore } from "redux";
import { UsersReducer } from "./reducers/UsersReducer";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
  UsersReducer,
});

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;
