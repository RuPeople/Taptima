import React, {useContext, useState} from 'react';
import BasketItem from "./BasketItem";
import Totals from "../Totals";
import {Context} from "../../../index";
import styled from "@emotion/styled";
import {motion} from "framer-motion";

const Table = styled.table`
  position: relative;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 5px;

  border-spacing: 0;
  
  margin-bottom: 40px;

  @media (max-width: 992px) {
    display: none;
  }
  
  &>thead{
    &>tr{
      &>th{
        &:last-of-type{
          border-radius: 0 5px 5px 0;
        }
        &:first-of-type{
          border-radius: 5px 0 0 5px;
          white-space: nowrap;
        }
        
        background: #FFFFFF;
        border: 1px solid #E2E4EA;
        
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;

        letter-spacing: -1px;

        color: #606F7A;


        @media (min-width: 993px) and  (max-width: 1200px) {
          padding: 28px 18px;
        }
        @media (min-width: 1201px) and  (max-width: 1400px) {
          padding: 28px 18px;
        }
        @media (min-width: 1401px) {
          padding: 34px 24px;
        }
      }
    }
  }
  &>tbody{
    &:before{
      height: 1em;
      display: table-row;
      content: "";
      background-color: transparent;
    }
  }
`
const Col = styled.col`
`

const Popover = styled.div`
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
  
  top:-80px;
  
  &>div>svg {
    height: 100%;
    margin-right: 12px;
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
  
  @media(max-width: 1200px){
    right: 0;
  }
  @media(min-width: 1201px){
    left: 40%;
  }
  
`

const DesktopBasket = ({isCalculated}) => {
    const {product} = useContext(Context)
    const [isPopoverOpen, setIsPopoverOpen] = useState(true)
    return (
        <Table>
            {
                isPopoverOpen
                    ?
                    <Popover>
                        <button onClick={() => setIsPopoverOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M1 1L10.5238 10.5238" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M11 1.47607L1.47619 10.9999" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                        <div>
                            Чтобы отредактировать  введенные ланные, просто нажмите на поле
                        </div>
                    </Popover>
                    :
                    <></>
            }
            <colgroup>
                <col span="2"></col>
                <Col span="7"></Col>
            </colgroup>
            <thead>
                <tr>
                    <td colSpan="2"></td>
                    <motion.th
                        initial={{translateY:-100, opacity: 0}}
                        animate={{translateY:0, opacity: 1}}
                        transition={{duration:0.5}}
                        exit={{translateY:-100, opacity: 0}}>
                        Кол-во</motion.th>
                    <motion.th
                        initial={{translateY:-100, opacity: 0}}
                        animate={{translateY:0, opacity: 1}}
                        transition={{duration:0.54}}
                        exit={{translateY:-100, opacity: 0}}>Общая масса нетто, кг</motion.th>
                    <motion.th
                        initial={{translateY:-100, opacity: 0}}
                        animate={{translateY:0, opacity: 1}}
                        transition={{duration:0.58}}
                        exit={{translateY:-100, opacity: 0}}>Общая масса брутто, кг</motion.th>
                    <motion.th
                        initial={{translateY:-100, opacity: 0}}
                        animate={{translateY:0, opacity: 1}}
                        transition={{duration:0.62}}
                        exit={{translateY:-100, opacity: 0}}>Общий объем, м3</motion.th>
                    <motion.th
                        initial={{translateY:-100, opacity: 0}}
                        animate={{translateY:0, opacity: 1}}
                        transition={{duration:0.66}}
                        exit={{translateY:-100, opacity: 0}}>Стоимость единицы</motion.th>
                    <motion.th
                        initial={{translateY:-100, opacity: 0}}
                        animate={{translateY:0, opacity: 1}}
                        transition={{duration:0.7}}
                        exit={{translateY:-100, opacity: 0}}>Удалить</motion.th>
                </tr>
            </thead>
            <tbody>
                {product.basket.map(basketProduct =>
                    <BasketItem key={basketProduct.id} basketProduct={basketProduct} />
                )}
                {isCalculated && <Totals/>}
            </tbody>
        </Table>
    );
};

export default DesktopBasket;