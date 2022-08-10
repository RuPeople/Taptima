import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import SmallInputGroup from "./SmallInputGroup";
import {useLocation} from "react-router";
import styled from "@emotion/styled";

const Info = styled.div`
  font-family: 'Roboto';
  font-style: normal;
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

      font-family: 'Roboto';
      font-style: normal;
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
const Wrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
  @media (min-width: 1201px) {
    display: flex;
  }
`

const DeliveryInfo = observer(() => {
    const {product} = useContext(Context)
    const [isOpen, setIsOpen] = useState(false)

    const IsOpenChange = (value) => {
        setIsOpen(false)
    }

    const location = useLocation()

    return (
        <>
            {location.pathname !== "/"
                ?
                <Wrapper>
                    {isOpen
                        ?
                        <SmallInputGroup infoSave={IsOpenChange}/>
                        :
                        <Info onClick={e => setIsOpen(true)}>
                            {product.selectedDeliveryFrom
                                ?
                                <>
                                    {product.selectedDeliveryFrom.name}
                                    <svg style={{marginLeft: 7, marginRight: 7}} xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                                        <path d="M1 4.26923H16M16 4.26923L13 1.5M16 4.26923L13 7.5" stroke="#606F7A" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </>
                                :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
                                        <path d="M0 1L50 1" stroke="#D1D1D1" strokeWidth="1.5"/>
                                    </svg>
                                    <svg style={{marginLeft: 7, marginRight: 7}} xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                                        <path d="M1 4.26923H16M16 4.26923L13 1.5M16 4.26923L13 7.5" stroke="#606F7A" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </>
                            }
                            {product.selectedDeliveryTo
                                ?
                                <>{product.selectedDeliveryTo.name}, </>
                                :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
                                        <path d="M0 1L50 1" stroke="#D1D1D1" strokeWidth="1.5"/>
                                    </svg>
                                    ,
                                </>
                            }
                            {product.selectedCurrency
                                ?
                                <>{product.selectedCurrency.name}</>
                                :
                                <svg style={{marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="50" height="2" viewBox="0 0 50 2" fill="none">
                                    <path d="M0 1L50 1" stroke="#D1D1D1" strokeWidth="1.5"/>
                                </svg>
                            }
                                <svg style={{marginLeft: 10}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.275 14.5375L1.74467 14.0072L1.60725 14.1446L1.55386 14.3315L2.275 14.5375ZM14.8125 2L15.3428 1.46967L14.8125 0.93934L14.2822 1.46967L14.8125 2ZM18 5.1875L18.5303 5.71783L19.0607 5.1875L18.5303 4.65717L18 5.1875ZM5.4625 17.725L5.66854 18.4461L5.85541 18.3928L5.99283 18.2553L5.4625 17.725ZM1 19L0.278857 18.794C0.20403 19.0559 0.277071 19.3377 0.46967 19.5303C0.662268 19.7229 0.944145 19.796 1.20604 19.7211L1 19ZM2.80533 15.0678L15.3428 2.53033L14.2822 1.46967L1.74467 14.0072L2.80533 15.0678ZM14.2822 2.53033L17.4697 5.71783L18.5303 4.65717L15.3428 1.46967L14.2822 2.53033ZM17.4697 4.65717L4.93217 17.1947L5.99283 18.2553L18.5303 5.71783L17.4697 4.65717ZM5.25646 17.0039L0.793959 18.2789L1.20604 19.7211L5.66854 18.4461L5.25646 17.0039ZM1.72114 19.206L2.99614 14.7435L1.55386 14.3315L0.278857 18.794L1.72114 19.206Z" fill="#5DAAFF"/>
                                </svg>
                        </Info>
                    }
                </Wrapper>
                :<></>
            }
        </>
    );
});



export default DeliveryInfo;