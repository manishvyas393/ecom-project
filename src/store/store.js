import { compose,legacy_createStore as createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./root-reducer"
//import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import {rootSaga} from "./root-saga"

const sagaMiddleWare=createSagaMiddleware()
const middleWares = [process.env.NODE_ENV === "development" && logger,sagaMiddleWare].filter(Boolean)

const composeEnhancer =
      (process.env.NODE_ENV !== 'production' &&
            window &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;
const persistConfig = {
      key: 'root',
      storage,
      whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers)
sagaMiddleWare.run(rootSaga)
export const persistor = persistStore(store);