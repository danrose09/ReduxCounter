import React, { Fragment } from "react";
import "./styles.css";
import Buttons from "./components/Buttons";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div className="App">Hello</div>
        <Buttons />
      </Provider>
    </Fragment>
  );
}
