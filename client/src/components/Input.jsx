import React from 'react';
import styled from "@emotion/styled";

const Input = ({type, placeholder, value, onChange}) => {
    return (
        <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    );
};

const StyledInput = styled.input`
  border-radius: 3px;
  border: none;

  color: ${props => props.theme.color.dark};

  @media ${props => props.theme.media.xs} {
    padding: 10px;
    font-size: 10px;
  };
  @media ${props => props.theme.media.sm} {
    padding: 15px;
    font-size: 15px;
  };
  @media ${props => props.theme.media.md} {
    padding: 17px;
    font-size: 15px;
  };
  @media ${props => props.theme.media.lg} {
    padding: 17px;
    font-size: 15px;
  };
  @media ${props => props.theme.media.xl} {
    padding: 20px;
    font-size: 15px;
  };
  @media ${props => props.theme.media.xxl} {
    padding: 20px;
    font-size: 15px;
  };

  &::placeholder {
    color: rgba(${props => props.theme.color.dark}, 10%);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  -moz-appearance: textfield;
`

export default Input;