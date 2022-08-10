import React from 'react';
import styled from "@emotion/styled";
import {observer} from "mobx-react-lite";
import ContactButton from "./NavItems/ContactButton";

import Burger from "./NavItems/Burger";
import NavBrand from "./NavBrand/NavBrand";
import NavItems from "./NavItems.jsx";

const Wrapper = styled.header`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  z-index: 3;
  width: 100%;
  
  @media (max-width: 576px) {
    padding: 20px 0;
  }
  @media (min-width: 577px) and (max-width: 1200px) {
    padding: 25px 0;
  }
  @media (min-width: 1201px) {
    padding: 50px 0;
  }
`
const WideContactButton = styled.div`
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) {
    display: block;
  }
`



const Header = observer(() => {
    return (
        <Wrapper>
            <NavBrand/>

            <NavItems/>

            <WideContactButton>
                <ContactButton/>
            </WideContactButton>

            <Burger/>

        </Wrapper>
    );
});

export default Header;