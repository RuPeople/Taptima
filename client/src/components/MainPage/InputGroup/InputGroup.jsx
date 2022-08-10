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
            </Wrapper>
            <NextButton selectedDeliveryFrom={selectedDeliveryFrom} selectedDeliveryTo={selectedDeliveryTo} selectedCurrency={selectedCurrency} />

        </Form>
    );
});

export default InputGroup;