import React, {useContext, useState} from 'react';
import styled from "@emotion/styled";
import {Context} from "../../index";
import {BASKET_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router";
import {motion} from "framer-motion";

const Wrapper = styled.div`

  background: #EFF3F9;

  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 5px;

  display: flex;
  flex-direction: column;

  position: absolute;

  height: 100%;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(140, 140, 140, 0.15);
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb {
    background: #BDCBE0;
    border-radius: 50px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) and  (max-width: 992px) {
    width: 100%;
  }
  @media (min-width: 993px) and  (max-width: 1200px) {
    right: 0;
    width: 38%;
  }
  @media (min-width: 1201px) and  (max-width: 1400px) {
    right: 0;
    width: 48%;
  }
  @media (min-width: 1401px) {
    right: 0;
    width: 48%;
  }
`
const EmptySpan = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 23px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 992px) {
    display: none;
  }
  @media (min-width: 993px) and  (max-width: 1200px) {
    position: absolute;
    display: flex;
    right: 0;
    width: 38%;
  }
  @media (min-width: 1201px) and  (max-width: 1400px) {
    position: absolute;
    display: flex;
    right: 0;
    width: 48%;
  }
  @media (min-width: 1401px) {
    position: absolute;
    display: flex;
    right: 0;
    width: 48%;
  }
  
`
const Card = styled.div`
  background: #F8FAFF;
  border-radius: 3px;
  
  width: 100%;
  
  display: flex; 
  justify-content: start;
  align-items: center;
  & img{
    border-radius: 3px 0px 0px 3px;
    height: 70px;
    object-fit: contain;
    
    width: 140px;
    
    @media (min-width: 1201px) {
      width: 110px;
    }
    
  }
  & span{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;
    letter-spacing: -1px;

    color: #606F7A;
    
    margin-left: 30px;
    
    word-break: break-word;
    
    
  }
  
  margin-bottom: 24px;
`
const CountInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  
  & span {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.2px;

    color: #606F7A;
  }
  
  margin-bottom: 24px;
`
const CountInputGroup = styled.div`
  margin-left: 35px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & button {
    background: #FFFFFF;
    border-radius: 3px 0px 0px 3px;


    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border: none;
  }
  & input{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    /* identical to box height, or 100% */

    letter-spacing: 0.2px;

    color: #606F7A;


    height: 50px;
    width: 50px;
    border:none;
    padding: 0;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`
const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  
  margin-bottom: 35px;

  @media (max-width: 992px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    align-items: stretch;
  }

  
  & input {
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    border:none;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    /* identical to box height, or 100% */

    letter-spacing: 0.2px;

    color: #606F7A;
    
    padding: 20px;
    margin-bottom: 16px;
    
    width: 55%;


    @media (max-width: 576px) {
      padding: 15px;
    }
    @media (min-width: 577px) and (max-width: 768px) {
      padding: 17px;
    }
    @media (min-width: 769px){
      padding: 20px;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    -moz-appearance: textfield;
    
    @media (max-width: 992px) {
      width: auto;
    }
  }
`
const ButtonsWrapper = styled.div`
  display: grid;
  
  column-gap: 10px;
  row-gap: 10px;
  
  @media (max-width: 576px){
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 577px) and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 993px) and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  } 
  @media(min-width: 1201px)  {
    grid-template-columns: repeat(2, 1fr);
  } 
  
`
const FormButton = styled.button`
  background: #5DAAFF;
  border-radius: 5px;
  border:none;
  
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: 0.2px;

  color: #FCFDFF;
  
  cursor: pointer;
  
  padding: 20px 60px;

  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
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
  top: -0;
  width: auto;
  
  & svg {
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
    margin-left: 12px;

    & svg {
      margin: auto;
      padding: 4px;
    }
  }
`
const Selected = ({selectedProduct, unselect }) => {

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
            "count" : `${selectedProductCount}`,
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
                    <Wrapper as={motion.div}
                             initial={{translateX:500, opacity: 0}}
                             animate={{translateX:0, opacity: 1}}
                             transition={{duration:0.25}}
                             whileInView={{ opacity: 1, x:0 }}
                             viewport={{ once: true }}
                             exit={{translateX:500, opacity: 0}}>
                        <>
                            <Card>
                                <img style={{width:100}} src={process.env.REACT_APP_API_URL + selectedProduct.thumbnail} />
                                <span>{selectedProduct.name}</span>
                            </Card>
                            <CountInput>
                                <span>Кол-во:</span>
                                <CountInputGroup>
                                    <button onClick={() => {
                                        if (selectedProductCount>=2) {
                                            setSelectedProductCount(Number(selectedProductCount - 1))
                                        }
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="2" viewBox="0 0 15 2" fill="none">
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
                                    <button onClick={() => setSelectedProductCount(Number(selectedProductCount+1))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                            <path d="M7.5 0V15" stroke="#5DAAFF"/>
                                            <path d="M0 7.5L15 7.5" stroke="#5DAAFF"/>
                                        </svg>
                                    </button>
                                </CountInputGroup>
                            </CountInput>
                            <Inputs>
                                <input
                                    type={"number"}
                                    placeholder="Общая масса нетто, кг"
                                    value={selectedProductNetWeight}
                                    onChange={e => {setSelectedProductNetWeight(e.target.value)}}
                                />
                                <input
                                    type={"number"}
                                    placeholder="Общая масса брутто, кг"
                                    value={selectedProductGrossWeight}
                                    onChange={e => {setSelectedProductGrossWeight(e.target.value)}}
                                />
                                <input
                                    type={"number"}
                                    placeholder="Oбъём одной единицы"
                                    value={selectedProductVolume}
                                    onChange={e => {setSelectedProductVolume(e.target.value)}}
                                />
                                <input
                                    type={"number"}
                                    placeholder="Стоимость одной единицы"
                                    value={selectedProductPrice}
                                    onChange={e => {setSelectedProductPrice(e.target.value)}}
                                />
                            </Inputs>
                            <ButtonsWrapper>
                                <FormButton onClick={() => ResetForm()} >Сбросить</FormButton>
                                <FormButton onClick={() => {
                                    AddToBasket()
                                    ResetForm()
                                    handleProductUnselect(selectedProduct)
                                    navigator(BASKET_ROUTE)
                                }}>Добавить</FormButton>
                            </ButtonsWrapper>
                        </>
                        {isPopoverOpen
                            ?
                            <Popover>
                                Теперь заполните поля для этого элемента
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                                    <path d="M6 20V-3.57628e-07" stroke="#5DAAFF" strokeWidth="1.5"/>
                                    <path d="M11 15L6 20L1 15" stroke="#5DAAFF" strokeWidth="1.5"/>
                                </svg>
                                <button onClick={() => setIsPopoverOpen(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M1 1L10.5238 10.5238" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                                        <path d="M11 1.47607L1.47619 10.9999" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </button>
                            </Popover>
                            :
                            <></>}
                    </Wrapper>
                    :
                    <EmptySpan as={motion.div}
                               initial={{translateX:500, opacity: 0}}
                               animate={{translateX:0, opacity: 1}}
                               transition={{duration:0.75}}
                               whileInView={{ opacity: 1, x:0 }}
                               viewport={{ once: true }}
                               exit={{translateX:500, opacity: 0}}
                    >Вы не выбрали ни одного элемента</EmptySpan>
            }
        </>
    );
};

export default Selected;