import React from 'react';
import {CONTACT_ROUTE} from "../../../utils/consts";
import {NavLink} from "react-router-dom";
import styled from "@emotion/styled";

import {motion} from "framer-motion";

const ContactUs = styled.div`
  
  overflow: hidden;
  
  &>a{
    width: auto;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.2px;

    color: #606F7A;

    padding: 14px 22px;

    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(46, 80, 87, 0.12);
    border-radius: 3px;
    border: none;

    cursor: pointer;
    text-decoration: none;

    transition: 0.25s ease-in-out;

    &:hover{
      color: #FFFFFF;
      background: #5DAAFF;
      box-shadow: 0px 4px 40px rgba(46, 80, 87, 0.12);
      border-radius: 3px;
      transition: 0.25s ease-in-out;
    }
  }
`

const ContactButton = () => {
    return (
            <ContactUs as={motion.div}
                       initial={{opacity: 0, x: "+100%" }}
                       animate={{opacity: 1, x: 0 }}
                       transition={{
                           delay: 2,
                           type: "spring",
                           stiffness: 400,
                           damping: 40
                       }}>
                <NavLink to={CONTACT_ROUTE}>
                    Связаться
                </NavLink>
            </ContactUs>
    );
};

export default ContactButton;