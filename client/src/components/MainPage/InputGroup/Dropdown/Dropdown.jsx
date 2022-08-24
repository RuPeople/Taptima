import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {DropdownInput, DropdownButton, DropdownHeader, DropdownItem, DropdownMenu} from "./Styles";


const Dropdown = ({field, placeholder, onChange}) => {

    const [isOpen, setOpen] = useState(false);
    const [fieldValue, setFieldValue] = useState(null)

    const handleFieldChange = (point) => {
        setFieldValue(point.name)
        onChange(point)
        setOpen(!isOpen)
    }

    return (
        <AnimatePresence>
            <DropdownInput>
                <DropdownHeader>{placeholder}</DropdownHeader>
                <div>
                    <DropdownButton onClick={() => setOpen(!isOpen)}>
                        {fieldValue
                            ?
                            <>{fieldValue}</>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="20" viewBox="0 0 52 2"
                                 fill="none">
                                <path d="M0 1H67" stroke="#D1D1D1" strokeWidth="1.5"/>
                            </svg>
                        }
                        {isOpen
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <motion.path
                                    initial={{rotate: 0}}
                                    animate={{rotate: 180}}
                                    exit={{rotate: 0}}
                                    transition={{duration: 0.2}} d="M15 13L10 7L5 13" stroke="#606F7A" strokeWidth="1.4"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            :
                            <motion.svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    initial={{rotate: 0}}
                                    animate={{rotate: -180}}
                                    exit={{rotate: 0}}
                                    transition={{duration: 0.2}}
                                    d="M5 7L10 13L15 7" stroke="#606F7A" strokeWidth="1.4" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </motion.svg>
                        }
                    </DropdownButton>
                    {isOpen &&
                        (<DropdownMenu
                            initial={{height: 0, opacity: 0}}
                            animate={{height: "100%", opacity: 1}}
                            transition={{duration: 0.2}}
                            exit={{opacity: 0}}>
                            {
                                field.map(point => (
                                        <DropdownItem
                                            onClick={() => handleFieldChange(point)}
                                            key={point.id}
                                        >
                                            {point.name}
                                        </DropdownItem>
                                    )
                                )
                            }
                        </DropdownMenu>)
                    }
                </div>
            </DropdownInput>
        </AnimatePresence>
    );
};

export default Dropdown;