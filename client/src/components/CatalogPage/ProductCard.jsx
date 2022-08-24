import React, {useContext, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {motion} from "framer-motion";
import Button from "../Button";


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
        <Wrapper
            initial={{translateX: -500, opacity: 0}}
            animate={{translateX: 0, opacity: 1}}
            transition={{duration: 0.75}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            exit={{translateX: -500, opacity: 0}}
        >
            <Img src={process.env.REACT_APP_API_URL + catalogProduct.thumbnail}/>
            <ProductName>{catalogProduct.name}</ProductName>

            {isSelected
                ?
                <Button disabled light md>
                    Выбрано
                </Button>
                :
                <Button primary md onClick={() => {
                    handleProductSelect(catalogProduct)
                }}>
                    Выбрать
                </Button>
            }
        </Wrapper>
    );
});

const Wrapper = styled(motion.div)`
  background: #F8FAFF;
  border: 1px solid #E2E4EA;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 8px;
  
  @media ${props => props.theme.media.xs} {
    padding: 4px 16px;
  }
  
  padding-right: 30px;
`
const Img = styled.img`
  @media ${props => props.theme.media.xs} {
    width: 70px;
    height: 50px;
  }
  @media ${props => props.theme.media.sm} {
    width: 100px;
    height: 75px;
  }
  @media ${props => props.theme.media.md} {
    width: 120px;
    height: 100px;
  }
  @media ${props => props.theme.media.lg} {
    width: 120px;
    height: 100px;
  }
  @media ${props => props.theme.media.xl} {
    width: 120px;
    height: 100px;
  }
  @media ${props => props.theme.media.xxl} {
    width: 120px;
    height: 100px;
  }
`
const ProductName = styled.span`
  font-weight: 400;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;
  margin-right: auto;

  @media ${props => props.theme.media.xs}{
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.2px;
    padding: 0 22px;
  }
  @media ${props => props.theme.media.sm}{
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.2px;
    padding: 24px
  }
  @media ${props => props.theme.media.md}{
    font-size: 17px;
    line-height: 17px;
    padding: 36px;
  }
  @media ${props => props.theme.media.lg}{
    font-size: 17px;
    line-height: 17px;
    padding: 36px;
  }
  @media ${props => props.theme.media.xl} {
    font-size: 17px;
    line-height: 17px;
    padding: 36px;
  }
  @media ${props => props.theme.media.xxl} {
    font-size: 17px;
    line-height: 17px;
    padding: 36px;
  }
`
export default ProductCard;