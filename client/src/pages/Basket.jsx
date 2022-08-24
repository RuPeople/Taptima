import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import styled from "@emotion/styled";
import Calculation from "../components/Basket/Calculation";
import EmptyBasket from "../components/Basket/EmptyBasket";
import DesktopBasket from "../components/Basket/Desktop/DesktopBasket/DesktopBasket";
import MobileBasket from "../components/Basket/Mobile/MobileBasket";
import {motion} from "framer-motion";
import ControlButtons from "../components/Basket/ControlButtons";


const Basket = observer(() => {

    const {product} = useContext(Context)

    const [isCalculated, setIsCalculated] = useState(false)

    const HandleSetCalculated = () => {
        setIsCalculated(true)
    }

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
                        <>
                            <ControlButtons setCalculated={HandleSetCalculated}/>
                        </>

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
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;

  @media ${props => props.theme.media.xs} {
    font-size: 20px;
    line-height: 20px;
  }
  @media ${props => props.theme.media.sm} {
    font-size: 24px;
    line-height: 24px;
  }
  
  font-size: 36px;
  line-height: 36px;
`

export default Basket;