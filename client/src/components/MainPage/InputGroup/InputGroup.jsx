import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import Dropdown from "./Dropdown/Dropdown";
import Currency from "./Currency";
import NextButton from "./NextButton";
import {motion} from "framer-motion";
import {observer} from "mobx-react-lite";
import {Form, Wrapper, Popover} from './Styles'


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
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                  delay: 2.8,
                  duration: 3,
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22"
                                 fill="none">
                                <path d="M6 2V22" stroke="#5DAAFF" strokeWidth="1.5"/>
                                <path d="M11 7L6 2L1 7" stroke="#5DAAFF" strokeWidth="1.5"/>
                            </svg>
                        </Popover>
                }
            </Wrapper>
            <NextButton selectedDeliveryFrom={selectedDeliveryFrom} selectedDeliveryTo={selectedDeliveryTo}
                        selectedCurrency={selectedCurrency}/>
        </Form>
    );
});

export default InputGroup;