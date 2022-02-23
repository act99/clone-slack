import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./modules/loginReducer";
import workSpaceReducer from "./modules/workSpaceReducer";
import dmReducer from "./modules/dmReducer";
import bookmarkReducer from "./modules/bookmarkReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import chatReducer from "./modules/chatReducer";
export const history = createBrowserHistory();
const rootReducer = combineReducers({
  router: connectRouter(history),
  loginReducer: loginReducer,
  workSpaceReducer: workSpaceReducer,
  dmReducer: dmReducer,
  chatReducer: chatReducer,
  bookmarkReducer: bookmarkReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk.withExtraArgument({ history: history })];
const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
// const enhancer = composeEnhancers(applyMiddleware(...middlewares));
// let store = (initialStore) => createStore(rootReducer, enhancer);
// const store = createStore(rootReducer, enhancer);
const configureStore = () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
export default configureStore;
