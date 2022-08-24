import styled from "@emotion/styled";
import {motion} from "framer-motion";

export const Wrapper = styled(motion.div)`

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
  
  @media ${props => props.theme.media.xs}{
    width: 100%;
  }
  @media ${props => props.theme.media.sm}{
    width: 100%;
  }
  @media ${props => props.theme.media.md}{
    width: 100%;
  }
  @media ${props => props.theme.media.lg}{
    right: 0;
    width: 38%;
  }
  @media ${props => props.theme.media.xl} {
    right: 0;
    width: 48%;
  }
  @media ${props => props.theme.media.xxl} {
    right: 0;
    width: 48%;
  }
`
export const EmptySpan = styled(motion.div)`
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
    position: absolute;
    display: flex;
    right: 0;
    width: 38%;
  }
  @media ${props => props.theme.media.xl} {
    position: absolute;
    display: flex;
    right: 0;
    width: 48%;
  }
  @media ${props => props.theme.media.xxl} {
    position: absolute;
    display: flex;
    right: 0;
    width: 48%;
  }
  
`
export const Card = styled.div`
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
export const CountInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  
  & span {
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
export const CountInputGroup = styled.div`
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
export const Inputs = styled.div`
  width: 100%;
  display: grid;
  @media ${props => props.theme.media.xs} {
    grid-row-gap: 10px;    
  }
  grid-row-gap: 15px;    
  margin-bottom: 35px;
`
export const ButtonsWrapper = styled.div`
  display: grid;
  
  column-gap: 10px;
  row-gap: 10px;
  
  @media ${props => props.theme.media.xs} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${props => props.theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.media.md} {
    grid-template-columns: repeat(1, 1fr);
  } 
  @media ${props => props.theme.media.lg} {
    grid-template-columns: repeat(2, 1fr);
  } 
  @media ${props => props.theme.media.xl} {
    grid-template-columns: repeat(2, 1fr);
  } 
  @media ${props => props.theme.media.xxl} {
    grid-template-columns: repeat(2, 1fr);
  } 
  
`
export const Popover = styled.div`
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