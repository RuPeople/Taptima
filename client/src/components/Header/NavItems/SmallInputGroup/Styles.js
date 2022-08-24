import styled from "@emotion/styled";
import smallDivider from "../../../../static/smallDivider.svg";
import {motion} from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  &>:first-of-type{
    & > button {
      border-radius: 5px 0 0 5px ;
    }
  }
  &>:last-of-type{
    & > button {
      border-radius: 0  5px 5px  0 ;
      &:after{
        content:none;
      }
    }
  }
`
export const DropdownInput = styled.div`
    position: relative;
  
  
`
export const DropdownButton = styled.button`
  font-family: ${props => props.theme.fontFamily.primary};
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: 0.2px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #606F7A;

  width: 100%;
  
  border: none;

  background: #FFFFFF;

  cursor: pointer;


  padding: 10px;
  border-radius: 5px;
  @media (max-width: 576px) {
    padding: 8px;
    font-size: 12px;
    & svg {
      display: none;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 12px 20px;
    border-radius: 5px;
  }
  @media (min-width: 769px){
    padding: 12px 20px;
    border-radius: 0;
  }
  :after{
    position: absolute;
    right: 0;
    content: url('${smallDivider}');
  }
  

`
export const DropdownMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  z-index: 10;
`
export const DropdownItem = styled.button`
  font-family: ${props => props.theme.fontFamily.primary};
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
    padding: 8px;
    font-size: 12px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 12px 20px;
  }
  @media (min-width: 769px){
    padding: 18px 20px;
    border-radius: 0;
  }
`