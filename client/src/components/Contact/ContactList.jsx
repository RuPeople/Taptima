import React from 'react';
import styled from "@emotion/styled";

const Ul = styled.ul`
  width: 60%;
  padding: 0;
  margin-bottom: 72px;
`
const Li = styled.li`
  display: flex;
  margin-bottom: 32px;
`
const ContactItem = styled.span`
  font-family: ${props => props.theme.fontFamily.primary};
  font-weight: 400;
  font-size: 23px;
  line-height: 23px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #606F7A;
  width: 50%;
  
  & a {
    text-decoration: none;
    color: #606F7A;
    &:hover{
      transform: scale(1.01);
    }
  }
  
`
const ContactList = () => {
    return (
        <Ul>
            <Li>
                <ContactItem>
                    Наша почта:
                </ContactItem>
                <ContactItem>
                    <a href="#">
                        asia@baikalvl.ru
                    </a>
                </ContactItem>
            </Li>
            <Li>
                <ContactItem>
                    Телефон:
                </ContactItem>
                <ContactItem>
                    <a href="#">
                        8 800 201-87-77
                    </a>
                </ContactItem>
            </Li>
        </Ul>
    );
};

export default ContactList;