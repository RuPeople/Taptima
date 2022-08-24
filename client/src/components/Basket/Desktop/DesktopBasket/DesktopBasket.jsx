import React, {useContext, useState} from 'react';
import BasketItem from "../BasketItem/BasketItem";
import Totals from "../../Totals";
import {Context} from "../../../../index";
import styled from "@emotion/styled";
import {motion} from "framer-motion";

import {Table, Popover, Col} from "./Styles";

const DesktopBasket = ({isCalculated}) => {
    const {product} = useContext(Context)
    const [isPopoverOpen, setIsPopoverOpen] = useState(true)
    return (
        <Table>
            {
                isPopoverOpen
                    ?
                    <Popover>
                        <button onClick={() => setIsPopoverOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                 fill="none">
                                <path d="M1 1L10.5238 10.5238" stroke="#E45858" strokeWidth="1.5"
                                      strokeLinecap="round"/>
                                <path d="M11 1.47607L1.47619 10.9999" stroke="#E45858" strokeWidth="1.5"
                                      strokeLinecap="round"/>
                            </svg>
                        </button>
                        <div>
                            Чтобы отредактировать введенные ланные, просто нажмите на поле
                        </div>
                    </Popover>
                    :
                    <></>
            }
            <colgroup>
                <col span="2"></col>
                <Col span="7"></Col>
            </colgroup>
            <thead>
            <tr>
                <td colSpan="2"></td>
                <motion.th
                    initial={{translateY: -100, opacity: 0}}
                    animate={{translateY: 0, opacity: 1}}
                    transition={{duration: 0.5}}
                    exit={{translateY: -100, opacity: 0}}>
                    Кол-во
                </motion.th>
                <motion.th
                    initial={{translateY: -100, opacity: 0}}
                    animate={{translateY: 0, opacity: 1}}
                    transition={{duration: 0.54}}
                    exit={{translateY: -100, opacity: 0}}>Общая масса нетто, кг
                </motion.th>
                <motion.th
                    initial={{translateY: -100, opacity: 0}}
                    animate={{translateY: 0, opacity: 1}}
                    transition={{duration: 0.58}}
                    exit={{translateY: -100, opacity: 0}}>Общая масса брутто, кг
                </motion.th>
                <motion.th
                    initial={{translateY: -100, opacity: 0}}
                    animate={{translateY: 0, opacity: 1}}
                    transition={{duration: 0.62}}
                    exit={{translateY: -100, opacity: 0}}>Общий объем, м3
                </motion.th>
                <motion.th
                    initial={{translateY: -100, opacity: 0}}
                    animate={{translateY: 0, opacity: 1}}
                    transition={{duration: 0.66}}
                    exit={{translateY: -100, opacity: 0}}>Стоимость единицы
                </motion.th>
                <motion.th
                    initial={{translateY: -100, opacity: 0}}
                    animate={{translateY: 0, opacity: 1}}
                    transition={{duration: 0.7}}
                    exit={{translateY: -100, opacity: 0}}>Удалить
                </motion.th>
            </tr>
            </thead>
            <tbody>
            {product.basket.map(basketProduct =>
                <BasketItem key={basketProduct.id} basketProduct={basketProduct}/>
            )}
            {isCalculated && <Totals/>}
            </tbody>
        </Table>
    );
};

export default DesktopBasket;