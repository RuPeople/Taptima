import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 993px) {
    display: none;
  }
  
  padding-bottom: 100px;
`
export const BasketItem = styled.div`
  display: flex;
  background: #FFFFFF;
  flex-direction: column;
  margin-bottom: 10px;
  
  padding: 20px;
`
export const Head = styled.div`
  display: flex;
  & img{
    @media (max-width: 576px) {
      width: 30%;
    }
    @media (min-width: 577px) and (max-width: 768px) {
      width: 20%;
    }
    @media (min-width: 769px) and  (max-width: 992px) {
      width: 20%;
    }
  }
  & span{
    width: 100%;

    font-weight: 400;
    /* or 150% */

    display: flex;
    justify-content: start;
    align-items: center;
    
    letter-spacing: 0.2px;

    color: #606F7A;
    @media (max-width: 576px) {
      font-size: 12px;
      line-height: 18px;
      margin-left: 20px;
    }
    @media (min-width: 577px) and (max-width: 768px) {
      font-size: 17px;
      line-height: 20px;
      margin-left: 30px;
    }
    @media (min-width: 769px) and  (max-width: 992px) {
      font-size: 24px;
      line-height: 28px;
      margin-left: 40px;
    }
  }
  
  & div {
    display: flex;
    & button{
      background: none;
      border:none;
      cursor: pointer;
    }    
  }
`
export const Ul = styled.ul`
  padding: 0;
  margin-bottom: 0;
  & li{
    display: flex;
    padding-bottom: 12px;
    
    &:last-of-type{
      padding-bottom: 0;
    }
    
    & span{
      width: 50%;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      /* identical to box height, or 100% */

      letter-spacing: 0.2px;

      color: #606F7A;
      
      @media (min-width: 577px) and (max-width: 768px){
        font-size: 14px;
        line-height: 14px;
      }
      @media (min-width: 769px) and (max-width: 992px){
        font-size: 14px;
        line-height: 14px;
      }
      
      &:last-of-type{
        text-align: end;
      }
    }
  }
`