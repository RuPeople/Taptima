import React, {useContext, useState} from 'react';
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";
import {motion} from "framer-motion";
import Button from "../../../Button";

import {Wrapper, DropdownInput, DropdownMenu, DropdownItem, DropdownButton} from "./Styles";


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
                                initial={{rotate: 0}}
                                animate={{rotate: 180}}
                                exit={{rotate: 0}}
                                transition={{duration: 0.2}} d="M15 13L10 7L5 13" stroke="#606F7A" strokeWidth="1.4"
                                strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        :
                        <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                initial={{rotate: 0}}
                                animate={{rotate: -180}}
                                exit={{rotate: 0}}
                                transition={{duration: 0.2}}
                                d="M5 7L10 13L15 7" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </motion.svg>
                    }
                </DropdownButton>
                {isFromOpen &&
                    (<DropdownMenu
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "100%", opacity: 1}}
                        transition={{duration: 0.2}}
                        exit={{opacity: 0}}>
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
                                initial={{rotate: 0}}
                                animate={{rotate: 180}}
                                exit={{rotate: 0}}
                                transition={{duration: 0.2}} d="M15 13L10 7L5 13" stroke="#606F7A" strokeWidth="1.4"
                                strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        :
                        <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                initial={{rotate: 0}}
                                animate={{rotate: -180}}
                                exit={{rotate: 0}}
                                transition={{duration: 0.2}}
                                d="M5 7L10 13L15 7" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </motion.svg>
                    }
                </DropdownButton>
                {isToOpen &&
                    (<DropdownMenu
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "100%", opacity: 1}}
                        transition={{duration: 0.2}}
                        exit={{opacity: 0}}>
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
                                initial={{rotate: 0}}
                                animate={{rotate: 180}}
                                exit={{rotate: 0}}
                                transition={{duration: 0.2}} d="M15 13L10 7L5 13" stroke="#606F7A" strokeWidth="1.4"
                                strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        :
                        <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                initial={{rotate: 0}}
                                animate={{rotate: -180}}
                                exit={{rotate: 0}}
                                transition={{duration: 0.2}}
                                d="M5 7L10 13L15 7" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </motion.svg>
                    }
                </DropdownButton>
                {isCurrencyOpen &&
                    (<DropdownMenu
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "100%", opacity: 1}}
                        transition={{duration: 0.2}}
                        exit={{opacity: 0}}>
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
            <Button primary sm onClick={e => HandleInfoSave(false)}>Сохранить</Button>
        </Wrapper>
    );
});

export default SmallInputGroup;