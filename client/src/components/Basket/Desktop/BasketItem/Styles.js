import styled from "@emotion/styled";
import {motion} from "framer-motion";
import redact from "../../../../static/redact.svg";

export const Row = styled(motion.tr)`
  &:first-of-type{
    &>td{
      &:first-of-type{
        border-radius: 5px 0 0 0!important;
        & img{
          border-radius: 5px 0 0 0!important;
        }
      }
      &:last-of-type{
        border-radius: 0 5px 0 0!important;
      }
    }
  }
  &:nth-last-of-type(2){
    
    &:after{
      content: "";
    }
    
    &>td{
      border-bottom: 1px solid #E2E4EA;
      &:first-of-type{
        border-radius: 0 0 0 5px!important;
        & img{
          border-radius: 0 0 0 5px!important;
        }
      }
      &:last-of-type{
        border-radius: 0 0 5px 0!important;
      }
    }
  }
  &:last-of-type{
    &>td{
      border-bottom: 1px solid #E2E4EA;
      &:first-of-type{
        border-radius: 0 0 0 5px!important;
        & img{
          border-radius: 0 0 0 5px!important;
        }
      }
      &:last-of-type{
        border-radius: 0 0 5px 0!important;
      }
    }
  }
  
  background: #F8FAFF;
  border-radius: 5px 5px 5px 5px;
  &>td{
      @media (min-width: 993px) and  (max-width: 1200px) {
        padding: 18px;
      }
      @media (min-width: 1201px) and  (max-width: 1400px) {
        padding: 18px;
      }
      @media (min-width: 1401px) {
        padding: 24px;
      }
      
      background: #F8FAFF;
      border-top: 1px solid #E2E4EA;


      &:first-of-type{
        border-left: 1px solid #E2E4EA;
        width: 0;
        padding: 0;
      }
      
      border-right: 1px solid #E2E4EA;
      
      &:last-of-type{
        width: 0;
        padding: 0;
      }

      border-spacing: 0;
      text-align: center;
      vertical-align: middle;

      font-weight: 400;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: -1px;

      color: #606F7A;

      &>img{
        @media (min-width: 993px) and  (max-width: 1200px) {
          width: 100px;
          height: 80px;
        }
        @media (min-width: 1201px) and  (max-width: 1400px) {
          width: 110px;
          height: 90px;
        }
        @media (min-width: 1401px) {
          width: 120px;
          height: 100px;
        }
      }
      &>input{
        border:none;

        text-align: center;

        background: none;

        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        letter-spacing: -1px;

        color: #606F7A;
      }
      &>button{
        padding: 0;
        border:none;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
      }
    }
`
export const Cell = styled.td`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
  &:hover{
    &::after{
      content: url("${redact}");
      align-content: center;
      place-content: center;
      position: absolute;
    }    
  }
`
export const Input = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`