import React from 'react';
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {CONTACT_ROUTE} from "../../utils/consts";
import {motion} from "framer-motion";
import Button from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: end;
  
  padding-bottom: 50px;
  @media ${props => props.theme.media.xs} {
    width: 100%;
  }
  @media ${props => props.theme.media.sm} {
    width: 100%;
  }
  @media ${props => props.theme.media.md} {
    width: 100%;
  }
  @media ${props => props.theme.media.lg} {
    width: 100%;
  }
`

const Ul = styled.ul`
  padding: 0;
  margin-bottom: 0;
  
  @media( min-width: 993px) {
    margin: 50px 0;
    
  }

  & > li {
    display: flex;
    width: 100%;
    list-style-type: none;
    margin-bottom: 20px;

    & > span {
      width: 50%;
      text-align: end;

      @media ${props => props.theme.media.xs} {
        font-size: 17px;
        line-height: 17px;
        text-align: start;
      }
      @media ${props => props.theme.media.sm} {
        &:first-of-type {
          text-align: start;          
        }
      }
      @media ${props => props.theme.media.md} {
        &:first-of-type {
          text-align: start;          
        }
      }
    }
    & > h1 {
      width: 50%;
      text-align: end;

      font-weight: 600;
      font-size: 23px;
      line-height: 23px;
      /* identical to box height, or 100% */

      letter-spacing: 0.2px;

      color: #606F7A;

      @media (max-width: 576px) {
        font-size: 23px;
        line-height: 23px;
      }
      @media(max-width: 992px) {
        &:first-of-type {
          text-align: start;
        }
      }
    }
  }

`

const Span = styled.span`
  font-weight: 400;
  font-size: 23px;
  line-height: 23px;

  letter-spacing: 0.2px;

  color: #606F7A;
`

const ButtonsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  flex-direction: row;
  justify-content: end;
    
  @media (max-width: 576px){
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 8px;
  }
`

const Calculation = () => {
    return (
        <Wrapper>
            <Ul>
                <motion.li
                    initial={{translateX: 1000, opacity: 0}}
                    animate={{translateX: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                    exit={{translateX: 1000, opacity: 0}}>
                    <Span>Стоимость доставки:</Span>
                    <Span>50 000 руб.</Span>
                </motion.li>
                <motion.li
                    initial={{translateX: 1000, opacity: 0}}
                    animate={{translateX: 0, opacity: 1}}
                    transition={{duration: 0.55}}
                    exit={{translateX: 1000, opacity: 0}}>
                    <Span>Таможенные платежи:</Span>
                    <Span>5 000 руб.</Span>
                </motion.li>
                <motion.li
                    initial={{translateX: 1000, opacity: 0}}
                    animate={{translateX: 0, opacity: 1}}
                    transition={{duration: 0.6}}
                    exit={{translateX: 1000, opacity: 0}}>
                    <h1>Итого:</h1>
                    <h1>55 000 руб.</h1>
                </motion.li>
            </Ul>

            <ButtonsWrapper
                initial={{translateX: 1000, opacity: 0}}
                animate={{translateX: 0, opacity: 1}}
                transition={{duration: 0.7}}
                exit={{translateX: 1000, opacity: 0}}>
                <Button md secondary>
                    Сохранить рассчёт
                    <svg style={{marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="17" height="10"
                         viewBox="0 0 17 10" fill="none">
                        <path d="M1 5.23529H16M16 5.23529L12.3636 1M16 5.23529L12.3636 9" stroke="#5DAAFF"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>
                <Button md as={NavLink} to={CONTACT_ROUTE} primary>
                    Связаться по доставке
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    );
};

export default Calculation;