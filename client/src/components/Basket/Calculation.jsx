import React from 'react';
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {CONTACT_ROUTE} from "../../utils/consts";
import {motion} from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: end;
  
  padding-bottom: 50px;
  
  @media (max-width: 992px){
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


      @media (max-width: 576px) {
        font-size: 17px;
        line-height: 17px;
      }
      @media(max-width: 992px) {
        &:first-of-type {
          text-align: start;          
        }
      }
    }
    & > h1 {
      width: 50%;
      text-align: end;

      font-family: 'Open Sans';
      font-style: normal;
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
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 23px;
  /* identical to box height, or 100% */

  letter-spacing: 0.2px;

  color: #606F7A;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;


  
  @media (max-width: 576px){
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 8px;
  }
  
`

const SaveCalculation = styled(motion.button)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #5DAAFF;
  background: none;
  border: 1.5px solid #5DAAFF;
  border-radius: 5px;
  padding: 20px 36px;


  &:hover{
    background: #5DAAFF;
    border-radius: 5px;
    color: #FFFFFF;
    &>svg>path{
      stroke: #FFFFFF;
    }
  }
  
`
const ContactButton = styled(motion(NavLink))`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  display: flex;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FCFDFF;
  
  background: #5DAAFF;
  border-radius: 5px;
  padding: 20px 36px;
  text-decoration: none;
  
  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
  }
  @media (min-width: 577px) {
    margin-left: 12px;
  }
`


const Calculation = () => {
    return (
        <Wrapper>
            <Ul>
                <motion.li
                    initial={{translateX:1000, opacity: 0}}
                    animate={{translateX:0, opacity: 1}}
                    transition={{duration:0.5}}
                    exit={{translateX:1000, opacity: 0}}>
                    <Span>Стоимость доставки:</Span>
                    <Span>50 000 руб.</Span>
                </motion.li>
                <motion.li
                    initial={{translateX:1000, opacity: 0}}
                    animate={{translateX:0, opacity: 1}}
                    transition={{duration:0.55}}
                    exit={{translateX:1000, opacity: 0}}>
                    <Span>Таможенные платежи:</Span>
                    <Span>5 000 руб.</Span>
                </motion.li>
                <motion.li
                    initial={{translateX:1000, opacity: 0}}
                    animate={{translateX:0, opacity: 1}}
                    transition={{duration:0.6}}
                    exit={{translateX:1000, opacity: 0}}>
                    <h1>Итого:</h1>
                    <h1>55 000 руб.</h1>
                </motion.li>
            </Ul>

            <ButtonsWrapper>
                <SaveCalculation
                    initial={{translateX:1000, opacity: 0}}
                    animate={{translateX:0, opacity: 1}}
                    transition={{duration:0.7}}
                    exit={{translateX:1000, opacity: 0}}>
                    Сохранить рассчёт
                    <svg style={{marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                        <path d="M1 5.23529H16M16 5.23529L12.3636 1M16 5.23529L12.3636 9" stroke="#5DAAFF" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </SaveCalculation>
                <ContactButton to={CONTACT_ROUTE}
                               initial={{translateX:1000, opacity: 0}}
                               animate={{translateX:0, opacity: 1}}
                               transition={{duration:0.75}}
                               exit={{translateX:1000, opacity: 0}}>Связаться по доставке</ContactButton>
            </ButtonsWrapper>
        </Wrapper>
    );
};

export default Calculation;