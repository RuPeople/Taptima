import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";
import {Row, Cell, Input} from "./Styles";

const BasketItem = observer(({basketProduct}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const {product} = useContext(Context)

    const [count, setCount] = useState(basketProduct.count)
    const [netWeight, setNetWeight] = useState(basketProduct.netWeight)
    const [grossWeight, setGrossWeight] = useState(basketProduct.grossWeight)
    const [volume, setVolume] = useState(basketProduct.volume)
    const [price, setPrice] = useState(basketProduct.price)

    return (
        <Row
            initial={{translateX: -1000, opacity: 0}}
            animate={{translateX: 0, opacity: 1}}
            transition={{duration: 0.7}}
            exit={{translateX: -1000, opacity: 0}}
        >
            <td><img src={process.env.REACT_APP_API_URL + basketProduct.thumbnail}/></td>
            <td style={{textAlign: "start"}}>{basketProduct.name}</td>
            <Cell>
                <Input style={{width: count.length + `ch`}}
                       type="number"
                       value={count}
                       onChange={e => {
                           setCount(e.target.value)
                           const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                           basketRows.count = e.target.value;
                       }}/>
            </Cell>
            <Cell>
                <Input style={{width: netWeight.length + `ch`}}
                       type="number"
                       value={netWeight}
                       onChange={e => {
                           setNetWeight(e.target.value)
                           const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                           basketRows.netWeight = e.target.value;
                       }}/>
            </Cell>
            <Cell>
                <Input style={{width: grossWeight.length + `ch`}}
                       type="number"
                       value={grossWeight}
                       onChange={e => {
                           setGrossWeight(e.target.value)
                           const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                           basketRows.grossWeight = e.target.value;
                       }}/>
            </Cell>
            <Cell>
                <Input style={{width: volume.length + `ch`}}
                       type="number"
                       value={volume}
                       onChange={e => {
                           setVolume(e.target.value)
                           const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                           basketRows.volume = e.target.value;
                       }}/>
            </Cell>
            <Cell>
                <Input style={{width: price.length + `ch`}}
                       type="number"
                       value={price}
                       onChange={e => {
                           setPrice(e.target.value)
                           const basketRows = product.basket.find((row) => row.id === basketProduct.id)
                           basketRows.price = e.target.value;
                       }}/>
            </Cell>
            <td>
                <button onClick={
                    e => {
                        product.setBasket(product.basket.filter(proxy => proxy.id !== basketProduct.id))
                    }
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M31.1057 9.85449L9.8737 31.0489" stroke="#FF5D5D" strokeWidth="2"
                              strokeLinecap="round"/>
                        <path d="M9.87598 9.3374L31.108 30.5318" stroke="#FF5D5D" strokeWidth="2"
                              strokeLinecap="round"/>
                    </svg>
                </button>
            </td>
        </Row>
    );
});

export default BasketItem;