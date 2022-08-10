import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {CATALOG_ROUTE} from "../utils/consts";
import styled from "@emotion/styled";
import Calculation from "../components/Basket/Calculation";
import EmptyBasket from "../components/Basket/EmptyBasket";
import DesktopBasket from "../components/Basket/Desktop/DesktopBasket";
import MobileBasket from "../components/Basket/Mobile/MobileBasket";
import {motion} from "framer-motion";

const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  
  padding-bottom: 50px;
`
const H1 = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;

  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 20px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
  @media (min-width: 769px){
    font-size: 36px;
    line-height: 36px;
  }
`
const ButtonsWrapper = styled.div`
  @media(max-width: 992px){
    width: calc(100% - 40px);
    display: grid;
    position: fixed;
    left: 0;
    bottom: 20px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    padding: 0 20px;
  }
  @media (min-width: 993px){
    display: flex;
    justify-content: end;
    align-self: end;
  }
`
const AddButton = styled(motion(NavLink))`
  background: #5DAAFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
  border-radius: 3px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FFFFFF;
  text-decoration: none;
  
  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
  }

  @media(max-width: 992px){
    padding: 20px 30px;
  }
  @media (min-width: 993px){
    padding: 20px 48px;
  }
`
const CountButton = styled(motion.button)`
  background: #5DAAFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
  border-radius: 3px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FFFFFF;
  text-decoration: none;

  border: none;
  /*
  margin-left: 12px;*/
  cursor: pointer;
  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
  }
  @media(max-width: 992px){
    padding: 20px 30px;
  }
  @media (min-width: 993px){
    padding: 20px 48px;
    margin-left: 12px;
  }
`

const Basket = observer(() => {

    const {product} = useContext(Context)

    const [isCalculated, setIsCalculated] = useState(false)

    return (
        <>
            {product.basket.length
                ?
                <Wrapper>
                    <H1 as={motion.h1}
                        initial={{translateY:10, opacity: 0}}
                        animate={{translateY:0, opacity: 1}}
                        transition={{duration:0.5}}
                        exit={{translateY:10, opacity: 0}}
                    >
                        Добавленная мебель ({product.basket.length})
                    </H1>

                    <MobileBasket/>
                    <DesktopBasket isCalculated={isCalculated} />

                    {isCalculated ?
                        <></>
                        :
                        <ButtonsWrapper>
                            <AddButton to={CATALOG_ROUTE}
                                       initial={{translateX:1000, opacity: 0}}
                                       animate={{translateX:0, opacity: 1}}
                                       transition={{duration:0.7}}
                                       exit={{translateX:1000, opacity: 0}}>
                                Добавить
                                <svg style={{marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0V13" stroke="white" strokeWidth="1.5"/>
                                    <path d="M0 6.5L13 6.5" stroke="white" strokeWidth="1.5"/>
                                </svg>
                            </AddButton>
                            <CountButton onClick={e => setIsCalculated(true)}
                                         initial={{translateX:1500, opacity: 0}}
                                         animate={{translateX:0, opacity: 1}}
                                         transition={{duration:0.72}}
                                         exit={{translateX:1000, opacity: 0}}>Рассчитать</CountButton>
                        </ButtonsWrapper>
                    }

                    {isCalculated
                        ?
                        <Calculation/>
                        :
                        <></>
                    }
                </Wrapper>
                :
                <EmptyBasket/>
            }
        </>
    );
});

export default Basket;