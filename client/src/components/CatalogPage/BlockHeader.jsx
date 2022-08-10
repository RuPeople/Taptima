import React from 'react';
import styled from "@emotion/styled";
import {motion} from "framer-motion";

const H1 = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  /* or 133% */
  color: #606F7A;
  width: 48%;
  margin-top: 0;
  display: inline-block;
  @media (max-width: 992px) {
    display: none;
  }
  @media (min-width: 993px) and  (max-width: 1200px) {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;  
    
  }
  @media (min-width: 1401px) {
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
  }
`

const BlockHeader = ({text}) => {
    return (
        <H1 as={motion.h1}
            initial={{translateY:10, opacity: 0}}
            animate={{translateY:0, opacity: 1}}
            transition={{duration:0.5}}
            exit={{translateY:10, opacity: 0}}
        >
            {text}
        </H1>
    );
};

export default BlockHeader;