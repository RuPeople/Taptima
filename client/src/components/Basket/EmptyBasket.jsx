import React from 'react';
import {NavLink} from "react-router-dom";
import {CATALOG_ROUTE} from "../../utils/consts";
import styled from "@emotion/styled";
import {motion} from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  height: 100%;
  width: 100%;
  
  & svg {
    margin-bottom: 20px;
  }
  
  & span{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    /* or 150% */

    text-align: center;
    letter-spacing: 0.2px;

    color: #606F7A;
    
    margin-bottom: 24px;
  }
  
  & a{
    background: #5DAAFF;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.15));

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    text-align: center;
    letter-spacing: 0.2px;

    color: #FCFDFF;

    padding: 20px 40px;
    
    text-decoration: none;
    
    &:hover{
      background: #2876CC!important;
      box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
    }
    
  }
`

const BackToCatalog = styled(motion(NavLink))`
  background: #5DAAFF;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.15));

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: 0.2px;

  color: #FCFDFF;

  padding: 20px 40px;

  text-decoration: none;

  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
  }
  
`


const EmptyBasket = () => {
    return (
        <Wrapper>
            <motion.svg xmlns="http://www.w3.org/2000/svg" width="269" height="161"
                 animate={{translateX: [-1000, 25, 0], skewX: [30,-3,0]}}
                 transition={{type:"spring"}}
                 exit={{translateX:-1000}}>
                <g transform="translate(21.76 -0)">
                    <path d="M 112.472 86.758 L 0 86.758 L 0 13.013 L 4.22 0.741 C 5.61 0.248 7.074 -0.002 8.548 0 L 99.481 0 C 106.654 0 112.471 5.827 112.471 13.013 L 112.471 86.758 Z" fill="#DBEAFF"></path>
                    <path d="M 112.471 13.013 L 112.471 86.758 L 121.131 86.758 L 121.131 0.741 C 116.097 2.534 112.471 7.356 112.471 13.013 Z" fill="#C3DDFF"></path>
                    <path d="M 38.86 30.366 C 38.862 32.759 36.923 34.701 34.53 34.704 C 33.381 34.703 32.279 34.245 31.467 33.432 C 30.655 32.618 30.199 31.515 30.2 30.366 C 30.199 29.216 30.654 28.114 31.466 27.3 C 32.278 26.486 33.38 26.029 34.53 26.028 C 35.68 26.029 36.782 26.486 37.594 27.3 C 38.406 28.114 38.861 29.216 38.86 30.366 Z" fill="#C3DDFF"></path>
                    <path d="M 77.83 30.366 C 77.831 31.515 77.375 32.618 76.563 33.432 C 75.751 34.245 74.649 34.703 73.5 34.704 C 71.107 34.701 69.168 32.759 69.17 30.366 C 69.169 29.217 69.625 28.114 70.437 27.3 C 71.249 26.487 72.351 26.029 73.5 26.028 C 74.65 26.029 75.752 26.486 76.564 27.3 C 77.376 28.114 77.831 29.216 77.83 30.366 Z" fill="#C3DDFF"></path>
                </g>
                <g transform="translate(17.32 -0)">
                    <path d="M 233.824 86.758 L 121.106 86.758 L 121.106 13.013 L 125.571 0.741 C 126.962 0.249 128.426 -0.002 129.901 0 L 220.832 0 C 228.007 0 233.824 5.827 233.824 13.013 Z" fill="#DBEAFF"></path>
                    <path d="M 0 13.013 L 0 86.758 L 8.66 86.758 L 8.66 0.741 C3.627 2.534 0 7.356 0 13.013 Z" fill="#C3DDFF"></path>
                    <path d="M 160.213 30.366 C 160.215 32.759 158.276 34.701 155.883 34.704 C 154.734 34.703 153.632 34.245 152.82 33.432 C 152.008 32.618 151.553 31.515 151.554 30.366 C 151.552 29.217 152.008 28.114 152.82 27.3 C 153.632 26.486 154.734 26.029 155.883 26.028 C 157.033 26.029 158.135 26.486 158.947 27.3 C 159.759 28.114 160.214 29.216 160.213 30.366 Z" fill="#C3DDFF"></path>
                    <path d="M 199.183 30.366 C 199.184 31.516 198.729 32.618 197.917 33.432 C 197.105 34.246 196.003 34.703 194.853 34.704 C 192.46 34.701 190.521 32.759 190.523 30.366 C 190.522 29.217 190.978 28.114 191.79 27.3 C 192.602 26.487 193.704 26.029 194.853 26.028 C 196.003 26.029 197.105 26.486 197.917 27.3 C 198.729 28.113 199.185 29.216 199.183 30.366 Z" fill="#C3DDFF"></path>
                </g>
                <g transform="translate(0 39.041)">
                    <path d="M 248.051 99.77 L 250.363 115.996 C 250.775 118.879 248.54 121.46 245.634 121.46 C 243.721 121.459 241.993 120.318 241.242 118.559 L 233.203 99.772 L 238.891 95.489 Z" fill="rgb(236,189,131)"></path>
                    <path d="M 248.051 99.77 L 233.204 99.77 L 229.492 91.094 L 246.814 91.094 Z" fill="rgb(226,169,117)"></path>
                    <path d="M 264.134 0 L 258.37 0 C 254.182 0.003 250.596 3.001 249.85 7.122 L 242.484 47.715 L 25.979 47.715 L 18.612 7.122 C 17.867 3.001 14.281 0.002 10.093 0 L 9.053 0 L 5.565 4.749 L 13.027 79.555 C 13.451 84.01 17.185 87.41 21.648 87.41 L 252.36 87.41 L 261.059 82.416 L 268.442 4.751 C 268.684 2.203 266.685 0.001 264.133 0.001 Z" fill="rgb(195,221,255)"></path>
                    <path d="M 20.412 99.77 L 18.099 115.996 C 17.751 118.372 19.221 120.637 21.532 121.286 C 23.844 121.936 26.279 120.768 27.219 118.559 L 35.257 99.772 L 28.677 95.908 Z" fill="rgb(236,189,131)"></path>
                    <path d="M 261.021 82.419 L 24.762 82.419 C 20.297 82.419 16.565 79.019 16.142 74.566 L 9.052 0 L 4.33 0 C 3.109 0.001 1.945 0.517 1.125 1.421 C 0.304 2.325 -0.097 3.534 0.02 4.749 L 7.482 83.243 C 7.901 87.692 11.634 91.092 16.103 91.095 L 252.362 91.095 C 256.827 91.095 260.559 87.695 260.983 83.243 L 261.061 82.416 C 261.048 82.416 261.036 82.42 261.022 82.42 Z" fill="rgb(164,204,255)"></path>
                    <path d="M 20.412 99.77 L 35.258 99.77 L 38.971 91.094 L 21.649 91.094 Z" fill="rgb(226,169,117)"></path>
                </g>
                <g transform="translate(25.979 69.404)">
                    <path d="M 8.661 0.001 L 99.593 0.001 C 104.375 0.001 108.253 3.886 108.253 8.677 L 108.253 21.692 C 108.253 26.483 104.375 30.367 99.593 30.367 L 8.662 30.367 C 3.877 30.367 -0 26.483 -0 21.692 L -0 8.676 C -0 3.885 3.877 0 8.662 0 Z" fill="rgb(195,221,255)"></path>
                    <path d="M 8.661 8.676 L 8.661 0.001 C 3.879 0.001 -0 3.886 -0 8.677 L -0 21.692 C -0 26.483 3.88 30.367 8.662 30.367 L 99.593 30.367 C 104.375 30.367 108.253 26.483 108.253 21.692 L 21.652 21.692 C 14.477 21.692 8.662 15.864 8.662 8.677 Z" fill="rgb(164,204,255)"></path>
                </g>
                <g transform="translate(134.231 69.404)">
                    <path d="M 8.66 0.001 L 99.591 0.001 C 104.376 0.001 108.251 3.886 108.251 8.677 L 108.251 21.692 C 108.251 26.483 104.374 30.367 99.591 30.367 L 8.66 30.367 C 3.878 30.367 0 26.483 0 21.692 L 0 8.676 C 0 3.885 3.878 0 8.66 0 Z" fill="rgb(195,221,255)"></path>
                    <path d="M 8.66 8.676 L 8.66 0.001 C 3.878 0.001 0 3.886 0 8.677 L 0 21.692 C 0 26.483 3.878 30.367 8.66 30.367 L 99.591 30.367 C 104.374 30.367 108.251 26.483 108.251 21.692 L 21.65 21.692 C 14.477 21.692 8.66 15.864 8.66 8.677 Z" fill="rgb(164,204,255)"></path>
                </g>
            </motion.svg>
            <motion.span
                animate={{translateX: [-1000, 25, 0], skewX: [30,-3,0]}}
                transition={{type:"spring"}}
                exit={{translateX:-1000}}>Вы не добавили ни одного элемента.</motion.span>
            <BackToCatalog to={CATALOG_ROUTE}
                     animate={{translateX: [-1000,  0]}}
                     transition={{duration: 1}}
                     exit={{translateX:-1000}}>Добавить</BackToCatalog>
        </Wrapper>
    );
};

export default EmptyBasket;