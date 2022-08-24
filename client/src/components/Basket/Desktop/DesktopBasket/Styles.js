import styled from "@emotion/styled";

export const Table = styled.table`
  position: relative;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 5px;

  border-spacing: 0;
  
  margin-bottom: 40px;

  @media (max-width: 992px) {
    display: none;
  }
  
  &>thead{
    &>tr{
      &>th{
        &:last-of-type{
          border-radius: 0 5px 5px 0;
        }
        &:first-of-type{
          border-radius: 5px 0 0 5px;
          white-space: nowrap;
        }
        
        background: #FFFFFF;
        border: 1px solid #E2E4EA;

        font-weight: 600;
        font-size: 14px;
        line-height: 14px;

        letter-spacing: -1px;

        color: #606F7A;


        @media (min-width: 993px) and  (max-width: 1200px) {
          padding: 28px 18px;
        }
        @media (min-width: 1201px) and  (max-width: 1400px) {
          padding: 28px 18px;
        }
        @media (min-width: 1401px) {
          padding: 34px 24px;
        }
      }
    }
  }
  &>tbody{
    &:before{
      height: 1em;
      display: table-row;
      content: "";
      background-color: transparent;
    }
  }
`
export const Col = styled.col`
`
export const Popover = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 23px;
  /* or 153% */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;


  color: #5DAAFF;
  
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 5px;
  
  position: absolute;
  
  top:-80px;
  
  &>div>svg {
    height: 100%;
    margin-right: 12px;
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
    margin-right: 12px;
    
    & svg {
      margin: auto;
      padding: 4px;
    }
  }
  
  @media(max-width: 1200px){
    right: 0;
  }
  @media(min-width: 1201px){
    left: 40%;
  }
`