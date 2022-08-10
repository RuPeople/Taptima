import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";
import styled from "@emotion/styled";

import {AnimatePresence} from "framer-motion";
import Menu from "./components/Menu";


const App = observer(() => {

    const {product} = useContext(Context)

    return (
            <BrowserRouter>
                <Header/>
                {
                    product.offcanvasState
                        ?
                        <Menu/>
                        :
                        <AppRouter/>
                }
            </BrowserRouter>
    );
});

export default App;
