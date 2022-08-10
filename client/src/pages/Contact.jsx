import React from 'react';
import styled from "@emotion/styled";

const H1 = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 64px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;
`
const H2 = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: #606F7A;
`
const ContactItem = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 23px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #606F7A;
`

const Contact = () => {
    return (
        <section>
            <H1>Свяжитесь с нами</H1>
            <div>
                <H2>Наши данные</H2>
                <ul>
                    <li>
                        <ContactItem>
                            Наша почта:
                        </ContactItem>
                        <ContactItem>
                            asia@baikalvl.ru
                        </ContactItem>
                    </li>
                    <li>
                        <ContactItem>
                            Телефон:
                        </ContactItem>
                        <ContactItem>
                            8 800 201-87-77
                        </ContactItem>
                    </li>
                </ul>
                <H2>Мы в соцсетях</H2>
                <a>Instagram</a>
                <a>Whatsapp</a>
                <a>Facebook</a>
                <a>WeChat</a>
            </div>
        </section>
    );
};

export default Contact;