import React from 'react';
import styled from "@emotion/styled";


const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  background: ${props => (props.primary && props.theme.color.primary || props.secondary && props.theme.color.secondary || props.light && props.theme.color.light)};
  color: ${props => (props.primary && props.theme.color.light || props.secondary && props.theme.color.primary || props.light && props.theme.color.dark)};
  border: ${props => (props.primary && props.theme.border.primary || props.secondary && props.theme.border.secondary || props.light && props.theme.border.light)};

  border: ${props => (props.primary && props.theme.border.primary || props.secondary && props.theme.border.secondary || props.light && props.theme.border.light)};

  &:hover {
    background: ${props => (props.primary && '#2876CC' || props.secondary && props.theme.color.primary || props.light && props.theme.color.primary)};
    color: ${props => (props.primary && props.theme.color.light || props.secondary && props.theme.color.light || props.light && props.theme.color.light)};
  }

  pointer-events: ${props => props.disabled && 'none'};

  width: ${props => (props.wide ? '100%' : 'auto')};
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  border-radius: 3px;
  cursor: pointer;

  font-weight: 600;

  ${props => (props.xl && `
      font-size: 15px;
      @media ${props.theme.media.xs} {padding: 15px; }; 
      @media ${props.theme.media.sm} {padding: 24px 28px;}; 
      @media ${props.theme.media.md} {padding: 26px 32px;}; 
      @media ${props.theme.media.lg} {padding: 26px 32px;}; 
      @media ${props.theme.media.xl} {padding: 26px 32px;}; 
      @media ${props.theme.media.xxl} {padding: 26px 32px;};             
          ` ||
          props.lg && `
      font-size: 15px;
      @media ${props.theme.media.xs} {padding: 10px; font-size: 10px;}; 
      @media ${props.theme.media.sm} {padding: 12px 24px; font-size: 14px;}; 
      @media ${props.theme.media.md} {padding: 20px 30px; font-size: 17px;}; 
      @media ${props.theme.media.lg} {padding: 20px 40px; font-size: 17px;}; 
      @media ${props.theme.media.xl} {padding: 20px 40px; font-size: 17px;}; 
      @media ${props.theme.media.xxl} {padding: 20px 40px; font-size: 17px;}; 
          ` ||
          props.md && `
      @media ${props.theme.media.xs} {padding: 10px; font-size: 10px;}; 
      @media ${props.theme.media.sm} {padding: 14px 30px; font-size: 14px;}; 
      @media ${props.theme.media.md} {padding: 14px 30px; font-size: 17px;}; 
      @media ${props.theme.media.lg} {padding: 14px 30px; font-size: 17px;}; 
      @media ${props.theme.media.xl} {padding: 14px 30px; font-size: 17px;}; 
      @media ${props.theme.media.xxl} {padding: 14px 30px; font-size: 17px;};             
          ` ||
          props.sm && `
      @media ${props.theme.media.xs} {padding: 10px; font-size: 10px}; 
      @media ${props.theme.media.sm} {padding: 12px 20px; font-size: 14px}; 
      @media ${props.theme.media.md} {padding: 12px 20px; font-size: 15px}; 
      @media ${props.theme.media.lg} {padding: 12px 20px; font-size: 15px}; 
      @media ${props.theme.media.xl} {padding: 12px 20px; font-size: 15px}; 
      @media ${props.theme.media.xxl} {padding: 12px 20px; font-size: 15px};             
          `
  )};
`

export default Button;