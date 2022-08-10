import React, {useContext} from 'react';
import styled from "@emotion/styled";
import {CATALOG_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router";
import {Context} from "../../../index";


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin-top: auto;

  @media (min-width: 769px) {
    margin-left: 12px;
  }
`
const Button = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FFFFFF;

  border:none;
  
  background: #5DAAFF;
  box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
  border-radius: 3px;

  height: auto;

  padding: 26px 32px;
  margin-top: auto;
  cursor: pointer;
  
  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
  }
  &>svg{
    margin-left: 12px;
  }


  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    display: flex; justify-content: center;
    content: "Выбрать мебель";
  }
  
`

const NextButton = ({selectedDeliveryFrom, selectedDeliveryTo, selectedCurrency}) => {
    const navigator = useNavigate()

    const {product} = useContext(Context)

    const CheckFields = () => {
        if (!selectedDeliveryFrom || !selectedDeliveryTo || !selectedCurrency) {
            alert("Сначала заполните все поля")
        }
        else {
            product.setSelectedDeliveryFrom(selectedDeliveryFrom)
            product.setSelectedDeliveryTo(selectedDeliveryTo)
            product.setSelectedCurrency(selectedCurrency)
            navigator(CATALOG_ROUTE)
        }
    }

    return (
        <Wrapper>
            <Button onClick={() => {CheckFields()}}>
                Далее
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="11" viewBox="0 0 27 11" fill="none">
                    <path d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10" stroke="white" strokeWidth="1.5"/>
                </svg>
            </Button>
        </Wrapper>
    );
};

export default NextButton;