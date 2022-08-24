import React from 'react';
import styled from "@emotion/styled";
import {motion} from "framer-motion";

const H1 = styled(motion.h1)`
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  /* or 133% */
  color: #606F7A;
  width: 48%;
  margin-top: 0;
  
  @media ${props => props.theme.media.xs}{
    display: none;
  }
  @media ${props => props.theme.media.sm}{
    display: none;
  }
  @media ${props => props.theme.media.md}{
    display: none;
  }
  @media ${props => props.theme.media.lg}{
    display: none;
  }
  @media ${props => props.theme.media.xl} {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    display: inline-block;
  }
  @media ${props => props.theme.media.xxl} {
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    display: inline-block;
  }
`

const BlockHeader = ({text}) => {
    return (
        <H1
            initial={{translateY: 10, opacity: 0}}
            animate={{translateY: 0, opacity: 1}}
            transition={{duration: 0.5}}
            exit={{translateY: 10, opacity: 0}}
        >
            {text}
        </H1>
    );
};

export default BlockHeader;