import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE} from "../../../utils/consts";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import styled from "@emotion/styled";


const MiniCart = observer(() => {
    const {product} = useContext(Context)
    return (
        <>
            {product.basket.length
                ?
                <Cart as={NavLink} to={BASKET_ROUTE}>
                    Добавленная мебель (
                    {product.basket.length}
                    )
                </Cart>
                :
                <></>
            }
        </>
    );
});

const Cart = styled.a`
  margin-right: auto;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;
  
  text-decoration: none;
  
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 12px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    padding: 12px 24px;
  }
  @media (min-width: 769px){
    font-size: 17px;
    line-height: 17px;
    padding: 36px;
    padding: 14px 30px;
  }
`
export default MiniCart;