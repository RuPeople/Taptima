import React, {useContext} from 'react';
import styled from "@emotion/styled";
import {CATALOG_ROUTE} from "../../../utils/consts";
import {useNavigate} from "react-router";
import {Context} from "../../../index";
import Button from "../../Button";


const NextButton = ({selectedDeliveryFrom, selectedDeliveryTo, selectedCurrency}) => {
    const navigator = useNavigate()

    const {product} = useContext(Context)

    const CheckFields = () => {
        if (!selectedDeliveryFrom || !selectedDeliveryTo || !selectedCurrency) {
        } else {
            product.setSelectedDeliveryFrom(selectedDeliveryFrom)
            product.setSelectedDeliveryTo(selectedDeliveryTo)
            product.setSelectedCurrency(selectedCurrency)
            navigator(CATALOG_ROUTE)
        }
    }

    return (
        <Wrapper>
            {
                selectedDeliveryFrom && selectedDeliveryTo && selectedCurrency
                    ?
                    <Popover>
                        Теперь нажмите на кнопку “Далее”
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                            <path d="M6 20V-3.57628e-07" stroke="#5DAAFF" strokeWidth="1.5"/>
                            <path d="M11 15L6 20L1 15" stroke="#5DAAFF" strokeWidth="1.5"/>
                        </svg>
                    </Popover>
                    :
                    <></>
            }
            <Button primary xl onClick={() => {
                CheckFields()
            }}>
                Далее
                <svg style={{marginLeft: 12}} xmlns="http://www.w3.org/2000/svg" width="27" height="11"
                     viewBox="0 0 27 11" fill="none">
                    <path d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10" stroke="white" strokeWidth="1.5"/>
                </svg>
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin-top: auto;
  position: relative;

  @media ${props => props.theme.media.sm} {
    margin-top: 20px;
  }
  @media ${props => props.theme.media.md} {
    margin-left: 12px;
  }
  @media ${props => props.theme.media.lg} {
    margin-left: 12px;
  }
  @media ${props => props.theme.media.xl} {
    margin-left: 12px;
  }
  @media ${props => props.theme.media.xxl} {
    margin-left: 12px;
  }
`
const Popover = styled.div`
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
  top: -80px;
  right: 0;
  width: auto;

  & svg {
    margin-left: 12px;
  }

  @media ${props => props.theme.media.xs} {
    display: none;
  }
  @media ${props => props.theme.media.sm} {
    display: none;
  }
`

export default NextButton;