import React, {useContext, useState} from 'react';
import styled from "@emotion/styled";
import {Context} from "../../../index";
import {BASKET_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router";
import {motion} from "framer-motion";
import Button from "../../Button";
import Input from "../../Input";

import {Wrapper, Popover, Card, Inputs, ButtonsWrapper, CountInput, CountInputGroup, EmptySpan} from "./Styles";

const Selected = ({selectedProduct, unselect}) => {

    const navigator = useNavigate()

    const {product} = useContext(Context)

    const ResetForm = () => {
        setSelectedProductCount(1)
        setSelectedProductNetWeight("")
        setSelectedProductGrossWeight("")
        setSelectedProductVolume("")
        setSelectedProductPrice("")
    }

    const AddToBasket = () => {
        const basketProduct = {
            "id": `${selectedProduct.id}`,
            "thumbnail": `${selectedProduct.thumbnail}`,
            "name": `${selectedProduct.name}`,
            "count": `${selectedProductCount}`,
            "netWeight": `${selectedProductNetWeight}`,
            "grossWeight": `${selectedProductGrossWeight}`,
            "volume": `${selectedProductVolume}`,
            "price": `${selectedProductPrice}`
        }
        product.basket.push(basketProduct)
    }

    const [selectedProductCount, setSelectedProductCount] = useState(1)
    const [selectedProductNetWeight, setSelectedProductNetWeight] = useState("")
    const [selectedProductGrossWeight, setSelectedProductGrossWeight] = useState("")
    const [selectedProductVolume, setSelectedProductVolume] = useState("")
    const [selectedProductPrice, setSelectedProductPrice] = useState("")

    const handleProductUnselect = (product) => {
        unselect(product)
    }

    const [isPopoverOpen, setIsPopoverOpen] = useState(true)
    return (
        <>
            {
                selectedProduct
                    ?
                    <Wrapper
                        initial={{translateX: 500, opacity: 0}}
                        animate={{translateX: 0, opacity: 1}}
                        transition={{duration: 0.25}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        exit={{translateX: 500, opacity: 0}}>
                        <>
                            <Card>
                                <img style={{width: 100}}
                                     src={process.env.REACT_APP_API_URL + selectedProduct.thumbnail}/>
                                <span>{selectedProduct.name}</span>
                            </Card>
                            <CountInput>
                                <span>Кол-во:</span>
                                <CountInputGroup>
                                    <button onClick={() => {
                                        if (selectedProductCount >= 2) {
                                            setSelectedProductCount(Number(selectedProductCount - 1))
                                        }
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="2" viewBox="0 0 15 2"
                                             fill="none">
                                            <path d="M0 1L15 1" stroke="#5DAAFF"/>
                                        </svg>
                                    </button>
                                    <input
                                        type={"number"}
                                        value={selectedProductCount}
                                        onChange={e => {
                                            setSelectedProductCount(Number(e.target.value))
                                        }}
                                    />
                                    <button onClick={() => setSelectedProductCount(Number(selectedProductCount + 1))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                             viewBox="0 0 15 15" fill="none">
                                            <path d="M7.5 0V15" stroke="#5DAAFF"/>
                                            <path d="M0 7.5L15 7.5" stroke="#5DAAFF"/>
                                        </svg>
                                    </button>
                                </CountInputGroup>
                            </CountInput>
                            <Inputs>
                                <Input md type={"number"}
                                       placeholder="Общая масса нетто, кг"
                                       value={selectedProductNetWeight}
                                       onChange={e => {
                                           setSelectedProductNetWeight(e.target.value)
                                       }}/>
                                <Input md type={"number"}
                                       placeholder="Общая масса брутто, кг"
                                       value={selectedProductGrossWeight}
                                       onChange={e => {
                                           setSelectedProductGrossWeight(e.target.value)
                                       }}/>
                                <Input md type={"number"}
                                       placeholder="Oбъём одной единицы"
                                       value={selectedProductVolume}
                                       onChange={e => {
                                           setSelectedProductVolume(e.target.value)
                                       }}/>
                                <Input md type={"number"}
                                       placeholder="Стоимость одной единицы"
                                       value={selectedProductPrice}
                                       onChange={e => {
                                           setSelectedProductPrice(e.target.value)
                                       }}/>
                            </Inputs>
                            <ButtonsWrapper>
                                <Button primary lg onClick={() => ResetForm()}>Сбросить</Button>
                                <Button primary lg onClick={() => {
                                    AddToBasket()
                                    ResetForm()
                                    handleProductUnselect(selectedProduct)
                                    navigator(BASKET_ROUTE)
                                }}>Добавить</Button>
                            </ButtonsWrapper>
                        </>
                        {isPopoverOpen
                            ?
                            <Popover>
                                Теперь заполните поля для этого элемента
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22"
                                     fill="none">
                                    <path d="M6 20V-3.57628e-07" stroke="#5DAAFF" strokeWidth="1.5"/>
                                    <path d="M11 15L6 20L1 15" stroke="#5DAAFF" strokeWidth="1.5"/>
                                </svg>
                                <button onClick={() => setIsPopoverOpen(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                         fill="none">
                                        <path d="M1 1L10.5238 10.5238" stroke="#E45858" strokeWidth="1.5"
                                              strokeLinecap="round"/>
                                        <path d="M11 1.47607L1.47619 10.9999" stroke="#E45858" strokeWidth="1.5"
                                              strokeLinecap="round"/>
                                    </svg>
                                </button>
                            </Popover>
                            :
                            <></>}
                    </Wrapper>
                    :
                    <EmptySpan as={motion.div}
                               initial={{translateX: 500, opacity: 0}}
                               animate={{translateX: 0, opacity: 1}}
                               transition={{duration: 0.75}}
                               whileInView={{opacity: 1, x: 0}}
                               viewport={{once: true}}
                               exit={{translateX: 500, opacity: 0}}
                    >Вы не выбрали ни одного элемента</EmptySpan>
            }
        </>
    );
};

export default Selected;