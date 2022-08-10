import React from 'react';
import styled from "@emotion/styled";
import DeliveryInfo from "./NavItems/DeliveryInfo";
import MiniCart from "./NavItems/MiniCart";

const Wrapper = styled.div`
  margin-right: auto;
  display: flex;
  @media (max-width: 576px) {
    margin-left: 20px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    margin-left: 20px;
  }
  @media (min-width: 769px) and  (max-width: 992px) {
    margin-left: 20px;
  }
  @media (min-width: 993px) and  (max-width: 1200px) {
    margin-left: 20px;
  }
  @media (min-width: 1201px) and  (max-width: 1400px) {
    margin-left: 50px;
  }
  @media (min-width: 1401px) {
    margin-left: 50px;
  }
`

const NavItems = () => {
    return (
        <Wrapper>
            <DeliveryInfo/>
            <MiniCart/>
        </Wrapper>
    );
};

export default NavItems;