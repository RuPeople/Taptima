import React, {useContext, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {Context} from "../../index";
import basket from "../../pages/Basket";
import {observer} from "mobx-react-lite";

const Row = styled.tr`
  
  
    &>td{
      background: #F8FAFF;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 15px;
      /* identical to box height, or 100% */

      letter-spacing: -1px;

      color: #606F7A;
      
      padding: 24px;
      border-spacing: 0;
      text-align: center;
      vertical-align: middle;

      border-top: 1px solid #E2E4EA;
      border-bottom: 1px solid #E2E4EA;
      border-right: 1px solid #E2E4EA;
      
      &:last-of-type{
        border-radius: 0 5px 5px 0;
      }
      &:nth-of-type(2){
        border-radius: 5px 0 0 5px;
        border-left: 1px solid #E2E4EA;
      }
      &:nth-of-type(1){
        background-color: transparent;
        border:none;
      }
      
    }
  
  
`

const ClearButton = styled.button`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #5DAAFF;
  background: none;
  border:none;
  cursor: pointer;
`

const Totals = observer(() => {

    const {product} = useContext(Context)

    useEffect(() => {
        setTotalCount(Number(product.basket.reduce((total, currentValue) => total = Number(total)  + Number(currentValue.count),0)))
        setTotalNetWeight(Number(product.basket.reduce((total, currentValue) => total = Number(total)  + Number(currentValue.netWeight),0)))
        setTotalGrossWeight(Number(product.basket.reduce((total, currentValue) => total = Number(total)  + Number(currentValue.grossWeight),0)))
        setTotalVolume(Number(product.basket.reduce((total, currentValue) => total = Number(total)  + Number(currentValue.volume),0)))
        setTotalPrice(Number(product.basket.reduce((total, currentValue) => total = Number(total)  + Number(currentValue.price),0)))
    }, [])

    const [totalCount, setTotalCount] = useState(0)
    const [totalNetWeight, setTotalNetWeight] = useState(0)
    const [totalGrossWeight, setTotalGrossWeight] = useState(0)
    const [totalVolume, setTotalVolume] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const ClearInputs = () => {
        product.basket.length =0
    }


    return (
        <Row>
            <td></td>
            <td>Итого:</td>
            <td>{totalCount}</td>
            <td>{totalNetWeight}</td>
            <td>{totalGrossWeight}</td>
            <td>{totalVolume}</td>
            <td>{totalPrice}</td>
            <td><ClearButton onClick={ClearInputs}>Сбросить</ClearButton></td>
        </Row>
    );
});

export default Totals;