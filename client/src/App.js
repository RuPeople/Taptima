import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";
import Menu from "./components/Menu";
import {ThemeProvider} from "@emotion/react";
import Styled from "./interfaces/styled";


const theme = {
    color: {
        primary: '#5DAAFF',
        secondary: 'none',
        light: '#FFFFFF',
        dark: '#606F7A',
    },
    border: {
        primary: 'none',
        secondary: '2px solid #5DAAFF',
        light: 'none'
    },
    fontFamily: {
        primary: 'Roboto',
        secondary: 'Open Sans'
    },
    media: {
        xs: "(max-width: 575px)",
        sm: "(min-width: 576px) and (max-width: 767px)",
        md: "(min-width: 768px) and (max-width: 991px)",
        lg: "(min-width: 992px) and (max-width: 1199px)",
        xl: "(min-width: 1200px) and (max-width: 1399px)",
        xxl: "(min-width: 1400px)"
    }
}

const App = observer(() => {

    const {product} = useContext(Context)

    return (
        <ThemeProvider theme={theme}>
            <Styled/>
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
        </ThemeProvider>
    );
});

export default App;
