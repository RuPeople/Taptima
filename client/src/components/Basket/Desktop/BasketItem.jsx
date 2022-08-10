import React, {useContext, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

import redact from "../../../static/redact.svg"
import {motion} from "framer-motion";

const Row = styled.tr`
  &:first-of-type{
    &>td{
      &:first-of-type{
        border-radius: 5px 0 0 0!important;
        & img{
          border-radius: 5px 0 0 0!important;
        }
      }
      &:last-of-type{
        border-radius: 0 5px 0 0!important;
      }
    }
  }
  &:nth-last-of-type(2){
    
    &:after{
      content: "";
    }
    
    &>td{
      border-bottom: 1px solid #E2E4EA;
      &:first-of-type{
        border-radius: 0 0 0 5px!important;
        & img{
          border-radius: 0 0 0 5px!important;
        }
      }
      &:last-of-type{
        border-radius: 0 0 5px 0!important;
      }
    }
  }
  &:last-of-type{
    &>td{
      border-bottom: 1px solid #E2E4EA;
      &:first-of-type{
        border-radius: 0 0 0 5px!important;
        & img{
          border-radius: 0 0 0 5px!important;
        }
      }
      &:last-of-type{
        border-radius: 0 0 5px 0!important;
      }
    }
  }
  
  background: #F8FAFF;
  border-radius: 5px 5px 5px 5px;
  &>td{
      @media (min-width: 993px) and  (max-width: 1200px) {
        padding: 18px;
      }
      @media (min-width: 1201px) and  (max-width: 1400px) {
        padding: 18px;
      }
      @media (min-width: 1401px) {
        padding: 24px;
      }
      
      background: #F8FAFF;
      border-top: 1px solid #E2E4EA;


      &:first-of-type{
        border-left: 1px solid #E2E4EA;
        width: 0;
        padding: 0;
      }
      
      border-right: 1px solid #E2E4EA;
      
      &:last-of-type{
        width: 0;
        padding: 0;
      }

      border-spacing: 0;
      text-align: center;
      vertical-align: middle;

      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: -1px;

      color: #606F7A;

      &>img{
        @media (min-width: 993px) and  (max-width: 1200px) {
          width: 100px;
          height: 80px;
        }
        @media (min-width: 1201px) and  (max-width: 1400px) {
          width: 110px;
          height: 90px;
        }
        @media (min-width: 1401px) {
          width: 120px;
          height: 100px;
        }
      }
      &>input{
        border:none;

        text-align: center;

        background: none;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        letter-spacing: -1px;

        color: #606F7A;
      }
      &>button{
        padding: 0;
        border:none;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
      }
    }
`

const Cell = styled.td`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
  &:hover{
    &::after{
      content: url("${redact}");
      align-content: center;
      place-content: center;
      position: absolute;
    }    
  }
`

const Input = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`



const BasketItem = observer(({basketProduct}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const {product} = useContext(Context)

    const [count, setCount] = useState(basketProduct.count)
    const [netWeight, setNetWeight] = useState(basketProduct.netWeight)
    const [grossWeight, setGrossWeight] = useState(basketProduct.grossWeight)
    const [volume, setVolume] = useState(basketProduct.volume)
    const [price, setPrice] = useState(basketProduct.price)

    return (
        <Row as={motion.tr}
             initial={{translateX:-1000, opacity: 0}}
             animate={{translateX:0, opacity: 1}}
             transition={{duration:0.7}}
             exit={{translateX:-1000, opacity: 0}}
        >
                <td><img src={process.env.REACT_APP_API_URL + basketProduct.thumbnail}/></td>
                <td style={{textAlign: "start"}}>{basketProduct.name}</td>
                <Cell>
                    <Input style={{width: count.length + `ch`}}
                           type="number"
                           value={count}
                           onChange={e => {
                               setCount(e.target.value)
                               const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                               basketRows.count = e.target.value;
                           }}/>
                </Cell>
                <Cell>
                    <Input style={{width: netWeight.length + `ch`}}
                           type="number"
                           value={netWeight}
                           onChange={e => {
                               setNetWeight(e.target.value)
                               const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                               basketRows.netWeight = e.target.value;
                           }}/>
                </Cell>
                <Cell>
                    <Input style={{width: grossWeight.length + `ch`}}
                           type="number"
                           value={grossWeight}
                           onChange={e => {
                               setGrossWeight(e.target.value)
                               const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                               basketRows.grossWeight = e.target.value;
                           }}/>
                </Cell>
                <Cell>
                    <Input style={{width: volume.length + `ch`}}
                           type="number"
                           value={volume}
                           onChange={e => {
                               setVolume(e.target.value)
                               const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                               basketRows.volume = e.target.value;
                           }}/>
                </Cell>
                <Cell>
                    <Input style={{width: price.length + `ch`}}
                           type="number"
                           value={price}
                           onChange={e => {
                               setPrice(e.target.value)
                               const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                               basketRows.price = e.target.value;
                           }}/>
                </Cell>
                <td>
                    <button onClick={
                        e => {
                            product.setBasket(product.basket.filter(proxy => proxy.id !== basketProduct.id))
                        }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M31.1057 9.85449L9.8737 31.0489" stroke="#FF5D5D" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M9.87598 9.3374L31.108 30.5318" stroke="#FF5D5D" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </td>
            </Row>
    );
});

export default BasketItem;