import React from "react";
import { render } from "react-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./slices";
import rootSaga from "./sagas";

import App from './App';
import reportWebVitals from './reportWebVitals';


import "./index.css";


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = getDefaultMiddleware();
middleware.push(sagaMiddleware);

const store = configureStore({
  reducer: rootReducer,
  middleware
});

// run the saga
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
