import React, {useContext, useState} from 'react';
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import {AnimatePresence, motion} from "framer-motion";

import borderDivider from '../../../static/divider.svg'

const DropdownInput = styled.div`
    position: relative;
  &:first-of-type{
    & > div > button {
      border-radius: 5px 0 0 5px;
    }
  }
  
`
const DropdownHeader = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #606F7A;
  
  margin-bottom: 16px;
`
const DropdownButton = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #606F7A;

  padding: 26px 32px;
  width: 100%;
  
  border: none;

  background: #FFFFFF;

  cursor: pointer;

  
  border-radius: 5px;
  @media (max-width: 576px) {
    padding: 15px;
    border-radius: 5px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 24px 28px;
    border-radius: 5px;
  }
  @media (min-width: 769px){
    padding: 26px 32px;
    border-radius: 0;
    :after{
      position: absolute;
      right: 0;
      content: url('${borderDivider}');
    }
  }
  

`
const DropdownMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  z-index: 10;
`
const DropdownItem = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #606F7A;

  width: 100%;

  border: none;

  background: #FFFFFF;
  
  cursor: pointer;
  &:hover {
    background: #F8FAFF;
  }
  @media (max-width: 576px) {
    padding: 15px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 24px 28px;
  }
  @media (min-width: 769px){
    padding: 26px 32px;
  }
`




const Dropdown = ({field, placeholder, onChange}) => {

    const [isOpen, setOpen] = useState(false);
    const [fieldValue, setFieldValue] = useState(null)

    const handleFieldChange = (point) => {
        setFieldValue(point.name)
        onChange(point)
        setOpen(!isOpen)
    }

    return (
        <AnimatePresence>
        <DropdownInput>
            <DropdownHeader>{placeholder}</DropdownHeader>
            <div>
                <DropdownButton onClick={() => setOpen(!isOpen)}>
                    {fieldValue
                        ?
                        <>{fieldValue}</>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="20" viewBox="0 0 52 2" fill="none">
                            <path d="M0 1H67" stroke="#D1D1D1" strokeWidth="1.5"/>
                        </svg>
                    }
                    {isOpen
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <motion.path
                                initial={{rotate:0}}
                                animate={{rotate:180}}
                                exit={{rotate:0}}
                                transition={{duration:0.2}} d="M15 13L10 7L5 13" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        :
                        <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                initial={{rotate:0}}
                                animate={{rotate:-180}}
                                exit={{rotate:0}}
                                transition={{duration:0.2}}
                                d="M5 7L10 13L15 7" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                    }
                </DropdownButton>
                    {isOpen &&
                            (<DropdownMenu
                                initial={{height:0, opacity:0}}
                                animate={{height:"100%", opacity:1}}
                                transition={{duration:0.2}}
                                exit={{opacity:0}}>
                                    {
                                        field.map(point => (
                                                <DropdownItem
                                                    onClick={() => handleFieldChange(point)}
                                                    key={point.id}
                                                >
                                                    {point.name}
                                                </DropdownItem>
                                            )
                                        )
                                    }
                            </DropdownMenu>)
                    }
            </div>
        </DropdownInput>
        </AnimatePresence>
    );
};

export default Dropdown;