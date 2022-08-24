import React from 'react';
import styled from "@emotion/styled";
import {observer} from "mobx-react-lite";
import ContactButton from "./NavItems/ContactButton";

import Burger from "./NavItems/Burger";
import NavBrand from "./NavBrand/NavBrand";
import NavItems from "./NavItems.jsx";



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

const Wrapper = styled.header`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  z-index: 3;
  width: 100%;
  
  @media ${props => props.theme.media.xs} {
    padding: 20px 0;
  }
  @media ${props => props.theme.media.sm}{
    padding: 25px 0;
  }
  @media ${props => props.theme.media.md}{
    padding: 25px 0;
  }
  @media ${props => props.theme.media.lg}{
    padding: 25px 0;
  }
  @media ${props => props.theme.media.xl}{
    padding: 25px 0;
  }
  @media ${props => props.theme.media.xxl}{
    padding: 25px 0;
  }
`
const WideContactButton = styled.div`
  overflow: hidden;
  @media ${props => props.theme.media.xs} {
    display: none;
  }
  @media ${props => props.theme.media.sm}{
    display: none;
  }
  display: block;
`

export default Header;