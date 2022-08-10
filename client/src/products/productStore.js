import {makeAutoObservable} from "mobx";

export default class productStore{
    constructor() {
        this._products = []

        this._deliveryFrom = [
            {
                "id": "1",
                "name": "Пекин"
            },
            {
                "id": "2",
                "name": "Губажоу"
            }
        ]
        this._deliveryTo = [
            {
                "id": "1",
                "name": "Москва"
            },
            {
                "id": "2",
                "name": "Санкт-Петербург"
            }
        ]
        this._currency = [
            {
                "id": "1",
                "name": "USD",
                "value": "64,54"
            },
            {
                "id": "2",
                "name": "CYN",
                "value": "32,99"
            },
            {
                "id": "3",
                "name": "RUB",
                "value": "99,99"
            }
        ]

        this._selectedDeliveryFrom=""
        this._selectedDeliveryTo=""
        this._selectedCurrency=""


        this._deliveryInfo = []

        this._basket = []

        this._offcanvasState = false

        makeAutoObservable(this)
    }


    setProducts(products){
        this._products = products
    }
    get products(){
        return this._products
    }

    setDeliveryFrom(deliveryFrom){
        this._deliveryFrom = deliveryFrom
    }
    get deliveryFrom(){
        return this._deliveryFrom
    }

    setDeliveryTo(deliveryTo){
        this._deliveryTo = deliveryTo
    }
    get deliveryTo(){
        return this._deliveryTo
    }

    setCurrency(currency){
        this._currency = currency
    }
    get currency(){
        return this._currency
    }

    setBasket(basket){
        this._basket = basket
    }
    get basket(){
        return this._basket
    }

    setSelectedDeliveryFrom(deliveryFrom){
        this._selectedDeliveryFrom = deliveryFrom
    }
    get selectedDeliveryFrom(){
        return this._selectedDeliveryFrom
    }
    setSelectedDeliveryTo(deliveryTo){
        this._selectedDeliveryTo = deliveryTo
    }
    get selectedDeliveryTo(){
        return this._selectedDeliveryTo
    }
    setSelectedCurrency(currency){
        this._selectedCurrency = currency
    }
    get selectedCurrency(){
        return this._selectedCurrency
    }


    setOffcanvasState(offcanvasState){
        this._offcanvasState = offcanvasState
    }
    get offcanvasState(){
        return this._offcanvasState
    }



}