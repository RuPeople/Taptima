import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {motion} from "framer-motion";
import styled from "@emotion/styled";
import smallDivider from "../../../static/smallDivider.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  &>:first-of-type{
    & > button {
      border-radius: 5px 0 0 5px ;
    }
  }
  &>:last-of-type{
    & > button {
      border-radius: 0  5px 5px  0 ;
      &:after{
        content:none;
      }
    }
  }
`
const DropdownInput = styled.div`
    position: relative;
  
  
`
const DropdownButton = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: 0.2px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #606F7A;

  width: 100%;
  
  border: none;

  background: #FFFFFF;

  cursor: pointer;


  padding: 10px;
  border-radius: 5px;
  @media (max-width: 576px) {
    padding: 8px;
    font-size: 12px;
    & svg {
      display: none;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 12px 20px;
    border-radius: 5px;
  }
  @media (min-width: 769px){
    padding: 12px 20px;
    border-radius: 0;
  }
  :after{
    position: absolute;
    right: 0;
    content: url('${smallDivider}');
  }
  

`
const DropdownMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  z-index: 10;
`
const DropdownItem = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #606F7A;

  width: 100%;

  border: none;

  background: #FFFFFF;
  
  cursor: pointer;
  &:hover {
    background: #F8FAFF;
  }
  @media (max-width: 576px) {
    padding: 8px;
    font-size: 12px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 12px 20px;
  }
  @media (min-width: 769px){
    padding: 18px 20px;
    border-radius: 0;
  }
`
const SaveButton = styled.button`font-family: 'Roboto';
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FFFFFF;

  border:none;

  background: #5DAAFF;
  box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
  border-radius: 3px;

  height: auto;

  padding: 15px 20px;
  
  margin-left: 8px;
  
  cursor: pointer;

  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
  }
  &>svg{
    margin-left: 12px;
  }
  

`

const SmallInputGroup = observer(({infoSave}) => {
    const {product} = useContext(Context)
    const [isFromOpen, setIsFromOpen] = useState(false)
    const [isToOpen, setIsToOpen] = useState(false)
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)


    const HandleInfoSave = (value) => {
        infoSave(value)
    }

    return (
        <Wrapper>
            <DropdownInput>
                    <DropdownButton onClick={e => setIsFromOpen(!isFromOpen)}>
                        {product.selectedDeliveryFrom
                            ?
                            <>
                                {product.selectedDeliveryFrom.name}
                            </>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
                                <path d="M0 1L50 1" stroke="#D1D1D1" strokeWidth="1.5"/>
                            </svg>
                        }

                        {isFromOpen
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <motion.path
                                    initial={{rotate:0}}
                                    animate={{rotate:180}}
                                    exit={{rotate:0}}
                                    transition={{duration:0.2}} d="M15 13L10 7L5 13" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            :
                            <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    initial={{rotate:0}}
                                    animate={{rotate:-180}}
                                    exit={{rotate:0}}
                                    transition={{duration:0.2}}
                                    d="M5 7L10 13L15 7" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                        }
                    </DropdownButton>
                    {isFromOpen &&
                        (<DropdownMenu
                            initial={{height:0, opacity:0}}
                            animate={{height:"100%", opacity:1}}
                            transition={{duration:0.2}}
                            exit={{opacity:0}}>
                            {
                                product.deliveryFrom.map(point => (
                                        <DropdownItem
                                            onClick={() => {
                                                product.setSelectedDeliveryFrom(point)
                                                setIsFromOpen(!isFromOpen)
                                            }}
                                            key={point.id}

                                        >
                                            {point.name}
                                        </DropdownItem>
                                    )
                                )
                            }
                        </DropdownMenu>)
                    }
            </DropdownInput>
            <DropdownInput>
                    <DropdownButton onClick={e => setIsToOpen(!isToOpen)}>

                        {product.selectedDeliveryTo
                            ?
                            <>
                                {product.selectedDeliveryTo.name}
                            </>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
                                <path d="M0 1L50 1" stroke="#D1D1D1" strokeWidth="1.5"/>
                            </svg>
                        }
                        {isToOpen
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <motion.path
                                    initial={{rotate:0}}
                                    animate={{rotate:180}}
                                    exit={{rotate:0}}
                                    transition={{duration:0.2}} d="M15 13L10 7L5 13" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            :
                            <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    initial={{rotate:0}}
                                    animate={{rotate:-180}}
                                    exit={{rotate:0}}
                                    transition={{duration:0.2}}
                                    d="M5 7L10 13L15 7" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                        }
                    </DropdownButton>
                    {isToOpen &&
                        (<DropdownMenu
                            initial={{height:0, opacity:0}}
                            animate={{height:"100%", opacity:1}}
                            transition={{duration:0.2}}
                            exit={{opacity:0}}>
                            {
                                product.deliveryTo.map(point => (
                                        <DropdownItem
                                            onClick={() => {
                                                product.setSelectedDeliveryTo(point)
                                                setIsToOpen(!isToOpen)
                                            }}
                                            key={point.id}
                                        >
                                            {point.name}
                                        </DropdownItem>
                                    )
                                )
                            }
                        </DropdownMenu>)
                    }
            </DropdownInput>
            <DropdownInput>
                    <DropdownButton onClick={e => setIsCurrencyOpen(!isCurrencyOpen)}>
                        {product.selectedCurrency
                            ?
                            <>
                                {product.selectedCurrency.name}
                            </>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
                                <path d="M0 1L50 1" stroke="#D1D1D1" strokeWidth="1.5"/>
                            </svg>
                        }
                        {isCurrencyOpen
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <motion.path
                                    initial={{rotate:0}}
                                    animate={{rotate:180}}
                                    exit={{rotate:0}}
                                    transition={{duration:0.2}} d="M15 13L10 7L5 13" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            :
                            <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    initial={{rotate:0}}
                                    animate={{rotate:-180}}
                                    exit={{rotate:0}}
                                    transition={{duration:0.2}}
                                    d="M5 7L10 13L15 7" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>
                        }
                    </DropdownButton>
                    {isCurrencyOpen &&
                        (<DropdownMenu
                            initial={{height:0, opacity:0}}
                            animate={{height:"100%", opacity:1}}
                            transition={{duration:0.2}}
                            exit={{opacity:0}}>
                            {
                                product.currency.map(currency => (
                                        <DropdownItem
                                            onClick={() => {
                                                product.setSelectedCurrency(currency)
                                                setIsCurrencyOpen(!isCurrencyOpen)
                                            }}
                                            key={currency.id}
                                        >
                                            {currency.name}
                                        </DropdownItem>
                                    )
                                )
                            }
                        </DropdownMenu>)
                    }
            </DropdownInput>
            <SaveButton onClick={e => HandleInfoSave(false)} >Сохранить</SaveButton>
        </Wrapper>
    );
});

export default SmallInputGroup;