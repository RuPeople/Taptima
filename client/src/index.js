import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import productStore from "./products/productStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Context.Provider value={{
        product: new productStore(),
    }}>
        <App />
    </Context.Provider>
);

