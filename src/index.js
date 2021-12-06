import "./main.css"
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { AppProvider } from "./context";
import App from "./App";

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppProvider>
            <App />
        </AppProvider>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

