import React from 'react';
import styled from "@emotion/styled";
import DeliveryInfo from "./NavItems/DeliveryInfo/DeliveryInfo";
import MiniCart from "./NavItems/MiniCart";

const NavItems = () => {
    return (
        <Wrapper>
            <DeliveryInfo/>
            <MiniCart/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-right: auto;
  display: flex;
  margin-left: 20px;
  @media (min-width: 1201px) and  (max-width: 1400px) {
    margin-left: 50px;
  }
  @media (min-width: 1401px) {
    margin-left: 50px;
  }
`

export default NavItems;