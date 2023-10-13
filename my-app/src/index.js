import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/reduxStore";
import storeContext from "./storeContext";

export let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <storeContext.Provider value={store}>
        <App />
      </storeContext.Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerender(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
