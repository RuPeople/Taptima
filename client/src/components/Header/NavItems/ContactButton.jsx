import React from 'react';
import {CONTACT_ROUTE} from "../../../utils/consts";
import {NavLink} from "react-router-dom";
import styled from "@emotion/styled";

import {motion} from "framer-motion";
import Button from "../../Button";

const ContactButton = () => {
    return (
        <ContactUs initial={{opacity: 0, x: "+100%"}}
                   animate={{opacity: 1, x: 0}}
                   transition={{
                       delay: 2,
                       type: "spring",
                       stiffness: 400,
                       damping: 40
                   }}>
            <Button as={NavLink} to={CONTACT_ROUTE} sm="true" light={"true"}>Связаться</Button>
        </ContactUs>
    );
};

const ContactUs = styled(motion.div)`
  overflow: hidden;
`

export default ContactButton;