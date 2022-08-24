import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {fetchProducts} from "../http/productsAPI";
import {observer} from "mobx-react-lite";
import styled from "@emotion/styled";
import BlockHeader from "../components/CatalogPage/BlockHeader";
import SearchInput from "../components/CatalogPage/SearchInput";
import ProductCard from "../components/CatalogPage/ProductCard";
import Selected from "../components/CatalogPage/Selected/Selected";



const Catalog = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchProducts(null).then(data=> {
            product.setProducts(data.rows)
        })
    }, [])

    const [selectedProduct, setSelectedProduct] = useState(0)

    const SelectProduct = (product) => {
        setSelectedProduct(product)
    }
    const UnselectProduct = () => {
        setSelectedProduct(null)
    }

    return (
        <Wrapper>
            <CatalogHeader>
                <BlockHeader text={"Выберите мебель, которую нужно перевезти"} />
                <BlockHeader text={"Затем заполните следующие поля выбранного элемента:"} />
            </CatalogHeader>
            <SearchInput/>
            <MainWrapper>
                <ProductList>
                    {product.products.length
                        ?
                        <>
                            {product.products.map(product => (
                                <ProductCard key={product.id} catalogProduct={product} selectProduct={SelectProduct} unselectProduct={selectedProduct} />
                            ))}
                        </>
                        :
                        <EmptySpan>Товаров не найдено :( </EmptySpan>
                    }
                </ProductList>
                <Selected selectedProduct={selectedProduct} unselect={UnselectProduct} />
            </MainWrapper>
        </Wrapper>
    );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 25px;

  @media ${props => props.theme.media.xxl} {
    padding-bottom: 50px;
  }
`
const CatalogHeader = styled.div`
  flex-direction: row;

  display: block;
  @media ${props => props.theme.media.xs}{
    display: none;
  }
  @media ${props => props.theme.media.sm}{
    display: none;
  }
`
const MainWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`
const ProductList = styled.div`
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

  width: 100%;
  
  @media ${props => props.theme.media.lg}{
    width: 58%;
  }
  @media ${props => props.theme.media.xl} {
    width: 48%;
  }
  @media ${props => props.theme.media.xxl} {
    width: 48%;
  }
`
const EmptySpan = styled.span`
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
`

export default Catalog;