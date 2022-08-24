import React, {useContext, useState} from 'react';
import {fetchProducts} from "../../http/productsAPI";
import {Context} from "../../index";
import styled from "@emotion/styled";
import {motion} from "framer-motion";
import Button from "../Button";
import Input from "../Input";


const SearchInput = () => {
    const {product} = useContext(Context)

    const [searchValue, setSearchValue] = useState("")

    const [isPopoverOpen, setIsPopoverOpen] = useState(true)
    return (
        <Wrapper as={motion.div}
                 initial={{translateX: -500, opacity: 0}}
                 animate={{translateX: 0, opacity: 1}}
                 transition={{duration: 0.5}}
                 exit={{translateX: -500, opacity: 0}} key="inputWrapper">
            <Input
                placeholder="Введите название"
                onChange={event => setSearchValue(event.target.value.toString())}
            />
            <Button primary lg
                    onClick={() => fetchProducts(searchValue).then(data => {
                        product.setProducts(data.rows)
                        console.log(product)
                    })}
            >
                Поиск
            </Button>
            {isPopoverOpen &&
                <Popover>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="14" viewBox="0 0 30 14" fill="none">
                            <path d="M2 7L30 7" stroke="#5DAAFF" strokeWidth="1.5"/>
                            <path d="M9 13L2 7L9 1" stroke="#5DAAFF" strokeWidth="1.5"/>
                        </svg>
                    </div>
                    <div>
                        Введите название мебели в строку поиска или выберите мебель из предложенного списка
                    </div>
                    <button onClick={() => setIsPopoverOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 1L10.5238 10.5238" stroke="#E45858" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M11 1.47607L1.47619 10.9999" stroke="#E45858" strokeWidth="1.5"
                                  strokeLinecap="round"/>
                        </svg>
                    </button>
                </Popover>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 0.5fr;
  grid-column-gap: 8px;
  
  width: 40%;
  position: relative;
  
  @media ${props => props.theme.media.xs} {
    padding-bottom: 20px;
    width: 100%
  }
  @media ${props => props.theme.media.sm} {
    padding-bottom: 25px;
    width: 100%
  }
  @media ${props => props.theme.media.md} {
    padding-bottom: 25px;
    width: 100%
  }
  @media ${props => props.theme.media.lg} {
    padding-bottom: 25px;
    width:60%
  }
  @media ${props => props.theme.media.xl} {
    padding-bottom: 36px;
  }
  @media ${props => props.theme.media.xxl} {
    padding-bottom: 36px;
  }
`
const Popover = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  /* or 153% */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;


  color: #5DAAFF;
  
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 5px;
  
  width: 470px;
  
  position: absolute;
  left: 550px;
  
  &>div>svg {
    height: 100%;
    margin-right: 12px;
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
  @media ${props => props.theme.media.xs}{
    display: none;
  }
  @media ${props => props.theme.media.sm}{
    display: none;
  }
  @media ${props => props.theme.media.md}{
    display: none;
  }
  @media ${props => props.theme.media.lg}{
    display: none;
  }
`
export default SearchInput;