import { applyMiddleware, combineReducers, createStore } from "redux";
import { UsersReducer } from "./reducers/UsersReducer";
import { ConversationReducer } from "./reducers/ConversationReducer";
import { MessagesReducer } from "./reducers/MessagesReducer";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
  ConversationReducer,
  UsersReducer,
  MessagesReducer,
});

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);

export default store;
