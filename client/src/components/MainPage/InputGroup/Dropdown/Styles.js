import styled from "@emotion/styled";
import {motion} from "framer-motion";
import borderDivider from '../../../../static/divider.svg'

export const DropdownInput = styled.div`
    position: relative;
  &:first-of-type{
    & > div > button {
      border-radius: 5px 0 0 5px;
    }
  }
  
`
export const DropdownHeader = styled.span`
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
  
  margin-bottom: 16px;
`
export const DropdownButton = styled.button`
  font-family: ${props => props.theme.fontFamily.primary};
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
  
  @media ${props => props.theme.media.xs}{
    padding: 15px;
    border-radius: 5px!important;
    &:after {
      position: absolute;
      right: 0;
      content: none!important;
    };
    
  }
  @media ${props => props.theme.media.sm}{
    padding: 24px 28px;
    border-radius: 5px!important;
    &:after {
      position: absolute;
      right: 0;
      content: none!important;
    };
  }
  padding: 26px 32px;
  border-radius: 0;
  :after{
    position: absolute;
    right: 0;
    content: url('${borderDivider}');
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

  padding: 26px 32px;
  @media ${props => props.theme.media.xs}{
    padding: 15px;
  }
  @media ${props => props.theme.media.sm}{
    padding: 24px 28px;
  }
  
`