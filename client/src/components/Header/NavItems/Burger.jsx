import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import styled from "@emotion/styled";

const Button = styled.button`
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: none;
  border:none;
  padding: 10px;
  
  @media (min-width: 769px){
    display: none;
  }
  
`

const Burger = observer(() => {

    const {product} = useContext(Context)

    const [isOpen, setOpen] = useState(true)

    useEffect(() => {
        setOpen(product.offcanvasState)
    },[])

    return (
        <>
            {isOpen
                ?
                <Button onClick={e => {
                    setOpen(false)
                    product.setOffcanvasState(false)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 4L15.5385 16" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M16 4L4.46154 16" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </Button>
                :
                <Button onClick={e => {
                    setOpen(true)
                    product.setOffcanvasState(true)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                        <path d="M1 1H21" stroke="#A4A4A4" strokeLinecap="round"/>
                        <path d="M1 7H21" stroke="#A4A4A4" strokeLinecap="round"/>
                        <path d="M1 13H21" stroke="#A4A4A4" strokeLinecap="round"/>
                    </svg>
                </Button>
            }
            
        </>
    );
});

export default Burger;