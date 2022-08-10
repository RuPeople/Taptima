import React from 'react';
import styled from "@emotion/styled";

const Header = styled.span`
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
const CurrencyValue = styled.div`

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #B7B7B7;
  padding: 26px 32px;

  background: #FFFFFF;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);


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
    border-radius: 0 5px 5px 0;
  }
`

const Currency = (currency) => {
    return (
        <div>
            <Header>Курс</Header>
            <div style={{height: 72}}>
                {currency.currency
                    ?
                    <CurrencyValue>{currency.currency.value} руб.</CurrencyValue>
                    :
                    <CurrencyValue>
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="20" viewBox="0 0 67 2" fill="none">
                            <path d="M0 1H67" stroke="#D1D1D1" strokeWidth="1.5"/>
                        </svg>
                    </CurrencyValue>
                }
            </div>
        </div>
    );
};

export default Currency;