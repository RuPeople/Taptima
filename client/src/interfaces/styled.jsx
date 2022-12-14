import React from 'react';
import {css, Global} from "@emotion/react";

const Styled = () => {
    return (
        <Global styles={css`
                #root {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    margin-left: auto;
                    margin-right: auto;
                    height: 100%;
                    
                    @media (max-width: 576px) {
                        max-width: 100%;
                        padding: 0 20px;
                    }
                    @media (min-width: 577px) and (max-width: 768px) {
                        max-width: 720px;
                        padding: 0 25px;
                    }
                    @media (min-width: 769px) and  (max-width: 992px) {
                        max-width: 960px;
                        padding: 0 25px;
                    }
                    @media (min-width: 993px) and  (max-width: 1200px) {
                        max-width: 1140px;
                        padding:    0 25px;
                    }
                    @media (min-width: 1201px) and  (max-width: 1400px) {
                        max-width: 1320px;
                        padding: 0 50px;
                    }
                    @media (min-width: 1401px) {
                        max-width: 1320px;
                        padding: 0 50px;
                    }
                }
                
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none; // Yeah, yeah everybody write about it
                }

                input[type='number'],
                input[type="number"]:hover,
                input[type="number"]:focus {
                    appearance: none;
                    -moz-appearance: textfield;
                }
                
                html, body, #app, #app>div {
                    height: 100%
                }
                
                * {
                  font-family: 'Open Sans';
                }
                

            `}/>
    );
};

export default Styled;