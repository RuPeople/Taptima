import React, {useState} from 'react';
import {CATALOG_ROUTE} from "../../utils/consts";
import styled from "@emotion/styled";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

const ButtonsWrapper = styled.div`
  position: relative;
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

  @media(max-width: 576px){
    padding: 15px 20px!important;
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
  cursor: pointer;
  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
  }
  
  @media(max-width: 576px){
    padding: 15px 20px!important;
  }
  
  @media(max-width: 992px){
    padding: 20px 30px;
  }
  @media (min-width: 993px){
    padding: 20px 48px;
    margin-left: 12px;
  }
`

const AddButtonPopover = styled.div`

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  /* or 153% */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;


  color: #5DAAFF;

  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 5px;

  position: absolute;
  white-space: nowrap;
  right: 425px;

  &>svg {
    height: 100%;
    margin-left: 12px;
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 12px;

    & svg {
      margin: auto;
      padding: 4px;
    }
  }
  @media (max-width: 1200px) {
    display: none;
  }
`
const CountButtonPopover = styled.div`

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  /* or 153% */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;


  color: #5DAAFF;

  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 5px;

  position: absolute;
  top: -80px;

  white-space: nowrap;
  &>svg {
    height: 100%;
    margin-left: 12px;
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 12px;

    & svg {
      margin: auto;
      padding: 4px;
    }
  }
  @media (max-width: 1200px) {
    display: none;
  }
`
const ControlButtons = ({setCalculated}) => {
    const [isAddPopoverOpen, setIsAddPopoverOpen] = useState(true)
    const [isCountPopoverOpen, setIsCountPopoverOpen] = useState(true)


    const handleSetCalculated = (value) => {
        setCalculated(value)
    }

    const [isCalculated, setIsCalculated] = useState(false)
    return (
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
            {
                isAddPopoverOpen
                    ?
                    <AddButtonPopover>
                        <button onClick={() => setIsAddPopoverOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 1L10.5238 10.5238" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M11 1.47607L1.47619 10.9999" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                        Через кнопку “Добавить” Вы можете добавлять еще элементы
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11" viewBox="0 0 24 11" fill="none">
                            <path d="M22 5.5L1 5.5" stroke="#5DAAFF" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M16.75 10L22 5.5L16.75 1" stroke="#5DAAFF" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </AddButtonPopover>
                    :
                    <></>
            }
            <CountButton onClick={e => handleSetCalculated(true)}
                         initial={{translateX:1500, opacity: 0}}
                         animate={{translateX:0, opacity: 1}}
                         transition={{duration:0.72}}
                         exit={{translateX:1000, opacity: 0}}>
                Рассчитать
            </CountButton>

            {
                isCountPopoverOpen
                    ?
                    <CountButtonPopover>
                        <button onClick={() => setIsCountPopoverOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 1L10.5238 10.5238" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M11 1.47607L1.47619 10.9999" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                        Узнайте стоимость доставки, нажав на кнопку “Рассчитать”
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                            <path d="M6 20V-3.57628e-07" stroke="#5DAAFF" strokeWidth="1.5"/>
                            <path d="M11 15L6 20L1 15" stroke="#5DAAFF" strokeWidth="1.5"/>
                        </svg>
                    </CountButtonPopover>
                    :
                    <></>
            }
        </ButtonsWrapper>
    );
};

export default ControlButtons;