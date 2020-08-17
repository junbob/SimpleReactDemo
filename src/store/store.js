import { combineReducers, createStore } from "redux";

import TodoReducer from "./reducers/todo";
import TodoReducer2 from "./reducers/todo2";

const rootReducer = combineReducers({
  todo: TodoReducer,
  todo2: TodoReducer2,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import ReduxThunk from "redux-thunk";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose;

// const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

// const store = createStore(rootReducer, enhancer);
