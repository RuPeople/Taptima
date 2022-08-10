import React, {useContext, useState} from 'react';
import {fetchProducts} from "../../http/productsAPI";
import {Context} from "../../index";
import styled from "@emotion/styled";
import {AnimatePresence, motion} from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  
  @media (max-width: 576px) {
    padding-bottom: 20px;
  }
  @media (min-width: 577px) and (max-width: 1200px) {
    padding-bottom: 25px;
  }
  @media (min-width: 1201px) {
    padding-bottom: 36px;
  }
`
const Input = styled.input`
  background: #FFFFFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  border:transparent;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: start;
  letter-spacing: 0.2px;

  color: #B7B7B7;
  
  width: 400px;

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
  @media (min-width: 769px) {
    width: 400px;
    padding: 20px;
  }
`
const Button = styled.button`
  background: #5DAAFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  border:transparent;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FFFFFF;
  padding: 20px 30px;
  margin-left: 8px;
  
  cursor: pointer;
  
  height: 100%;
  
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


const SearchInput = () => {
    const {product} = useContext(Context)

    const [searchValue, setSearchValue] = useState("")

    return (
            <Wrapper key="inputWrapper">
                <Input as={motion.input}
                       initial={{translateX:-500, opacity: 0}}
                       animate={{translateX:0, opacity: 1}}
                       transition={{duration:0.5}}
                       exit={{translateX:-500, opacity: 0}}

                       type="text"
                       placeholder="Введите название"
                       onChange={event => setSearchValue(event.target.value.toString())}
                />
                <Button as={motion.button}
                        initial={{translateX:-500, opacity: 0}}
                        animate={{translateX:0, opacity: 1}}
                        transition={{duration:0.35}}
                        exit={{translateX:-500, opacity: 0}}

                        onClick={() => fetchProducts(searchValue).then(data=> {
                            product.setProducts(data.rows)
                            console.log(product)
                        })}
                >
                    Поиск
                </Button>
            </Wrapper>
    );
};

export default SearchInput;