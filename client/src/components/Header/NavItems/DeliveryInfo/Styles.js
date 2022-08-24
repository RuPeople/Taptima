import styled from "@emotion/styled";

export const Info = styled.div`

  font-family: ${props => props.theme.fontFamily.primary};
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: 0.2px;

  color: #606F7A;
  
  padding: 12px 20px;
  display: flex;
  align-items: center;
  
  &:hover{
      background: #FFFFFF;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.04);
      border-radius: 5px;

    font-family: ${props => props.theme.fontFamily.primary};
      font-weight: 500;
      font-size: 17px;
      line-height: 17px;
      /* identical to box height, or 100% */

      text-align: center;
      letter-spacing: 0.2px;

      color: #606F7A;
      
      &>svg path{
        fill: #5DAAFF;
      }
    }
  cursor: pointer;
  
  &>svg{
    & path {
      fill: none;
    }
  }
`
export const Wrapper = styled.div`
  position: relative;
  @media (max-width: 1200px) {
    display: none;
  }
  @media (min-width: 1201px) {
    display: flex;
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
  bottom: -80px;
  width: auto;
  
  & svg {
    margin-right: 12px;
  }
  
  & button {
    background: none;
    border: none;
    align-self: end;
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