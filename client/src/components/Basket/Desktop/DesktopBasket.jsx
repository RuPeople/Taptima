import React, {useContext} from 'react';
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

const DesktopBasket = ({isCalculated}) => {
    const {product} = useContext(Context)
    return (
        <Table>
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