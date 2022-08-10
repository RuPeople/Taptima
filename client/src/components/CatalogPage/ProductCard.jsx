import React, {useContext, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {motion} from "framer-motion";

const Wrapper = styled.div`
  background: #F8FAFF;
  border: 1px solid #E2E4EA;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 8px;
  
  @media (max-width: 576px) {
    padding: 4px 16px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
  }
  @media (min-width: 769px){
  }
`
const Img = styled.img`


  @media (max-width: 576px) {
    width: 70px;
    height: 50px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    width: 100px;
    height: 75px;
  }
  @media (min-width: 769px){
    width: 120px;
    height: 100px;
  }
`
const ProductName = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;
  margin-right: auto;


  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.2px;
    padding: 0 22px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.2px;
    padding: 24px
  }
  @media (min-width: 769px){
    font-size: 17px;
    line-height: 17px;
    padding: 36px;
  }
`
const SelectButton = styled.button`
  background: #5DAAFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.12);
  border-radius: 3px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FFFFFF;
  border:none;
  cursor: pointer;

  &:hover{
    background: #2876CC!important;
    box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
  }

  @media (max-width: 576px) {
    font-size: 10px;
    line-height: 10px;
    padding: 10px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    padding: 12px 24px;
    margin-right: 14px;
  }
  @media (min-width: 769px){
    font-size: 17px;
    line-height: 17px;
    padding: 36px;
    padding: 14px 30px;
    margin-right: 24px;
  }
`
const Selected = styled.button`
  background: #FFFFFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.04);
  border-radius: 3px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #606F7A;
  
  border:none;

  @media (max-width: 576px) {
    font-size: 10px;
    line-height: 10px;
    padding: 10px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    padding: 12px 24px;
    margin-right: 14px;
  }
  @media (min-width: 769px){
    font-size: 17px;
    line-height: 17px;
    padding: 36px;
    padding: 14px 30px;
    margin-right: 24px;
  }
`

const ProductCard = observer(({catalogProduct, selectProduct}) => {

    const {product} = useContext(Context)

    useEffect(() => {
        product.basket.map(basketProduct => {
            if (basketProduct.id == catalogProduct.id) {
                setSelected(true)
            }
        })
    }, [])

    const handleProductSelect = (product) => {
        selectProduct(product)
        setSelected(true)
    }
    const [isSelected, setSelected] = useState(false)

    return (
        <Wrapper as={motion.div}
                 initial={{translateX:-500, opacity: 0}}
                 animate={{translateX:0, opacity: 1}}
                 transition={{duration:0.75}}
                 whileInView={{ opacity: 1, x:0 }}
                 viewport={{ once: true }}
                 exit={{translateX:-500, opacity: 0}}
        >
            <Img src={process.env.REACT_APP_API_URL + catalogProduct.thumbnail} />
            <ProductName>{catalogProduct.name}</ProductName>

            {isSelected
                ?
                <Selected>
                    Выбрано
                </Selected>
                :
                <SelectButton onClick={() => {
                    handleProductSelect(catalogProduct)

                }}>
                    Выбрать
                </SelectButton>
            }
        </Wrapper>
    );
});

export default ProductCard;