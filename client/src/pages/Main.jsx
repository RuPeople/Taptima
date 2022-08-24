import React from 'react';
import styled from "@emotion/styled";
import {observer} from "mobx-react-lite";
import InputGroup from "../components/MainPage/InputGroup/InputGroup";
import Background from "../components/MainPage/Background";
import {motion} from "framer-motion";


const Main = observer(() => {
    return (
        <Wrapper>
                <Background
                    key="background"
                    exit={{opacity:0}}
                />
                <H1 as={motion.h1}
                    key="h1"
                    exit={{opacity:0}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 2.5,
                        duration:3,
                        type: "spring",
                        stiffness: 400,
                        damping: 40
                    }}
                >
                    Рассчитайте
                    <Breaker/> стоимость доставки из Китая</H1>
                <motion.div
                    key="content"
                    exit={{opacity:0}}
                    style={{zIndex:2}}>
                    <InputGroup/>
                </motion.div>
        </Wrapper>
    );
});

const H1 = styled.h1`
  @media ${props => props.theme.media.xs}{
    font-size: 31px;
    font-weight: 300;
  }
  
  z-index: 2;
  
  width: 100%;
  margin-bottom: 48px;
  margin-top: 0;
  
  font-weight: 400;
  font-size: 48px;
  line-height: 64px;
  /* or 133% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media ${props => props.theme.media.xs}{
    height: 100%;
  }
  height: 70vh;
  
`
const Breaker = styled.br`
  display: none;
  @media ${props => props.theme.media.xl} {
    display: block;
  }
  @media ${props => props.theme.media.xxl} {
    display: block;
  }
`
export default Main;