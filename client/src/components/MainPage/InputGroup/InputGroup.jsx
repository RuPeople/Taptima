import React, {useContext, useState} from 'react';
import styled from "@emotion/styled";
import {Context} from "../../../index";
import Dropdown from "./Dropdown";
import Currency from "./Currency";
import NextButton from "./NextButton";
import {motion} from "framer-motion";
import {observer} from "mobx-react-lite";

const Form = styled.div`
  display: flex;
  @media(max-width: 768px){
    flex-direction: column;
  }

  margin-top: auto;
`
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1.2fr);
    column-gap: 10px;
    row-gap: 20px;
  }
  @media (min-width: 769px) {
    max-width: 700px;
    grid-template-columns: 1fr 1.2fr 0.8fr 0.8fr;
    row-gap: 20px;
  }
`
const Popover = styled.div`
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

  color: #5DAAFF;
  white-space: nowrap;
  
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 5px;
  
  position: absolute;
  bottom: -80px;
  width: auto;
  
  & svg {
    margin-left: 12px;
  }
`

const InputGroup = observer(() => {
    const {product} = useContext(Context)

    const [selectedDeliveryFrom, setSelectedDeliveryFrom] = useState(null)
    const [selectedDeliveryTo, setSelectedDeliveryTo] = useState(null)
    const [selectedCurrency, setSelectedCurrency] = useState("")


    const DeliveryFromChange = (value) => {
        setSelectedDeliveryFrom(value)
    }
    const DeliveryToChange = (value) => {
        setSelectedDeliveryTo(value)
    }
    const CurrencyChange = (value) => {
        setSelectedCurrency(value)
    }


    return (
        <Form as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                  delay: 2.8,
                  duration:3,
                  type: "spring",
                  stiffness: 400,
                  damping: 40
              }}
        >
            <Wrapper>
                <Dropdown field={product.deliveryFrom} placeholder={"Откуда"} onChange={DeliveryFromChange}/>
                <Dropdown field={product.deliveryTo} placeholder={"Куда"} onChange={DeliveryToChange}/>
                <Dropdown field={product.currency} placeholder={"Валюта"} onChange={CurrencyChange}/>
                <Currency currency={selectedCurrency}/>
                {
                    selectedDeliveryFrom || selectedDeliveryTo || selectedCurrency
                    ?
                        <></>
                        :
                        <Popover>
                            Для начала заполните поля выше
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                                <path d="M6 2V22" stroke="#5DAAFF" strokeWidth="1.5"/>
                                <path d="M11 7L6 2L1 7" stroke="#5DAAFF" strokeWidth="1.5"/>
                            </svg>
                        </Popover>


                }
            </Wrapper>
            <NextButton selectedDeliveryFrom={selectedDeliveryFrom} selectedDeliveryTo={selectedDeliveryTo} selectedCurrency={selectedCurrency} />

        </Form>
    );
});

export default InputGroup;