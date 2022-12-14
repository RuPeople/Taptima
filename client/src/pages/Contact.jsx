import React from 'react';
import styled from "@emotion/styled";
import Form from "../components/Contact/Form/Form";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";
import {MAIN_ROUTE} from "../utils/consts";
import ContactList from "../components/Contact/ContactList";
import Socials from "../components/Contact/Socials";


const Contact = () => {

    const navigator = useNavigate();

    return (
        <Wrapper>
            <H1>Свяжитесь с нами</H1>
            <Content>
                <Contacts>
                    <H2>Наши данные</H2>
                    <ContactList/>
                    <H2>Мы в соцсетях</H2>
                    <Socials/>
                </Contacts>
                <Form/>
            </Content>
            <BackButton onClick={e => navigator(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path d="M2 8L9 1M2 8L9 15M2 8H32" stroke="#5DAAFF" strokeWidth="2"/>
                </svg>
                Назад
            </BackButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;
  
  padding-bottom: 25px;
  
  @media ${props => props.theme.media.xs}{
    padding-bottom: 20px;
  }
  @media ${props => props.theme.media.xl} {
    padding-bottom: 50px;
  }
  @media ${props => props.theme.media.xxl} {
    padding-bottom: 50px;
  }
  
`
const H1 = styled.h1`
  font-weight: 400;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;

  @media ${props => props.theme.media.xs}{
    font-size: 24px;
    line-height: 24px;
  }
  @media ${props => props.theme.media.sm}{
    font-size: 30px;
    line-height: 30px;
  }
  @media ${props => props.theme.media.md}{
    font-size: 36px;
    line-height: 36px;
  }
  @media ${props => props.theme.media.lg}{
    font-size: 48px;
    line-height: 48px;
  }
  
  font-size: 64px;
  line-height: 64px;
  
`
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const H2 = styled.h2`
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;
  margin-bottom: 48px;
  
  margin-top: 0;
`
const Contacts = styled.div`
  width: 50%;
`
const BackButton = styled.button`
  align-self: end;
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  font-weight: 600;
  font-size: 23px;
  line-height: 23px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #5DAAFF;
  
  & svg {
    margin-right: 20px;
  }
  
  cursor: pointer;
`

export default Contact;