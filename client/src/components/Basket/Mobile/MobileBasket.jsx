import React, {useContext} from 'react';
import styled from "@emotion/styled";
import {Context} from "../../../index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 993px) {
    display: none;
  }
  
  padding-bottom: 100px;
`
const BasketItem = styled.div`
  display: flex;
  background: #FFFFFF;
  flex-direction: column;
  margin-bottom: 10px;
  
  padding: 20px;
`
const Head = styled.div`
  display: flex;
  & img{
    @media (max-width: 576px) {
      width: 30%;
    }
    @media (min-width: 577px) and (max-width: 768px) {
      width: 20%;
    }
    @media (min-width: 769px) and  (max-width: 992px) {
      width: 20%;
    }
  }
  & span{
    width: 100%;
    
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    /* or 150% */

    display: flex;
    justify-content: start;
    align-items: center;
    
    letter-spacing: 0.2px;

    color: #606F7A;
    @media (max-width: 576px) {
      font-size: 12px;
      line-height: 18px;
      margin-left: 20px;
    }
    @media (min-width: 577px) and (max-width: 768px) {
      font-size: 17px;
      line-height: 20px;
      margin-left: 30px;
    }
    @media (min-width: 769px) and  (max-width: 992px) {
      font-size: 24px;
      line-height: 28px;
      margin-left: 40px;
    }
  }
  
  & div {
    display: flex;
    & button{
      background: none;
      border:none;
      cursor: pointer;
    }    
  }
`
const Ul = styled.ul`
  padding: 0;
  margin-bottom: 0;
  & li{
    display: flex;
    padding-bottom: 12px;
    
    &:last-of-type{
      padding-bottom: 0;
    }
    
    & span{
      width: 50%;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      /* identical to box height, or 100% */

      letter-spacing: 0.2px;

      color: #606F7A;
      
      @media (min-width: 577px) and (max-width: 768px){
        font-size: 14px;
        line-height: 14px;
      }
      @media (min-width: 769px) and (max-width: 992px){
        font-size: 14px;
        line-height: 14px;
      }
      
      &:last-of-type{
        text-align: end;
      }
    }
  }
`
const MobileBasket = () => {

    const {product} = useContext(Context)

    return (
        <Wrapper>
            {product.basket.map(basketProduct =>
                <BasketItem key={basketProduct.id}>
                    <Head>
                        <img src={process.env.REACT_APP_API_URL + basketProduct.thumbnail}/>
                        <span>{basketProduct.name}</span>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#5DAAFF"/>
                                    <path d="M16.4365 6C16.3349 6.00081 16.2378 6.04182 16.1664 6.11406L6.65665 15.6245C6.60381 15.679 6.5683 15.7479 6.5546 15.8226L6.00826 18.5364C5.99516 18.5986 5.99767 18.663 6.01556 18.7239C6.03345 18.7849 6.06615 18.8404 6.11076 18.8856C6.15537 18.9308 6.21048 18.9643 6.27117 18.983C6.33186 19.0017 6.39624 19.005 6.45854 18.9928L9.17817 18.4464C9.25284 18.4327 9.32177 18.3972 9.37628 18.3443L18.886 8.8339C18.9221 8.79817 18.9508 8.75563 18.9704 8.70873C18.9899 8.66184 19 8.61153 19 8.56072C19 8.50991 18.9899 8.4596 18.9704 8.41271C18.9508 8.36581 18.9221 8.32326 18.886 8.28753L16.7127 6.11406C16.6582 6.06121 16.5893 6.0257 16.5146 6.012C16.489 6.00536 16.4629 6.00128 16.4365 6ZM16.4425 6.93061L18.0694 8.55771L8.91395 17.7079L6.87872 18.1221L7.28097 16.0928L16.4425 6.93061Z" fill="#5DAAFF"/>
                                </svg>
                            </button>
                            <button onClick={
                                e => {
                                    product.setBasket(product.basket.filter(proxy => proxy.id !== basketProduct.id))
                                }
                            }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#5DAAFF"/>
                                    <path d="M19 8.70992H17.874V17.5768C17.8732 17.954 17.7088 18.3155 17.4168 18.5823C17.1249 18.849 16.7292 18.9992 16.3163 19H8.67706C8.26388 18.9992 7.86783 18.8491 7.57536 18.5825C7.28288 18.3158 7.11775 17.9543 7.11599 17.5768V8.70992H6V8.16067H10.5669V6.84065C10.5674 6.7291 10.592 6.61872 10.6394 6.51593C10.6869 6.41313 10.7561 6.31995 10.8432 6.24177C10.9304 6.1636 11.0336 6.10199 11.1469 6.0605C11.2603 6.01902 11.3815 5.99848 11.5036 6.00009H13.5296C13.7734 6.00089 14.0069 6.0897 14.1792 6.24717C14.3516 6.40463 14.4488 6.61797 14.4497 6.84065V8.16067H19V8.70992Z" fill="#5DAAFF"/>
                                    <path d="M7.72363 17.5767C7.72451 17.8088 7.82603 18.0311 8.00595 18.1949C8.18587 18.3587 8.42952 18.4507 8.68352 18.4507H16.3228C16.5768 18.4507 16.8204 18.3587 17.0003 18.1949C17.1803 18.0311 17.2818 17.8088 17.2826 17.5767V8.70984H7.72363V17.5767ZM14.6322 10.039H15.2333V17.1216H14.6322V10.039ZM12.2009 10.039H12.7987V17.1216H12.2009V10.039ZM9.7663 10.039H10.3675V17.1216H9.7663V10.039Z" fill="white"/>
                                    <path d="M13.8285 6.84068C13.8285 6.7602 13.7935 6.68302 13.7312 6.62611C13.6689 6.5692 13.5845 6.53723 13.4964 6.53723H11.5035C11.4154 6.53723 11.331 6.5692 11.2687 6.62611C11.2064 6.68302 11.1714 6.7602 11.1714 6.84068V8.1607H13.8285V6.84068Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </Head>
                    <Ul>
                        <li>
                            <span>Кол-во:</span>
                            <span>{basketProduct.count}</span>
                        </li>
                        <li>
                            <span>Общая масса нетто, кг:</span>
                            <span>{basketProduct.netWeight}</span>
                        </li>
                        <li>
                            <span>Общая масса брутто, кг:</span>
                            <span>{basketProduct.grossWeight}</span>
                        </li>
                        <li>
                            <span>Общий объем, м3:</span>
                            <span>{basketProduct.volume}</span>
                        </li>
                        <li>
                            <span>Стоимость единицы:</span>
                            <span>{basketProduct.price}</span>
                        </li>
                    </Ul>
                </BasketItem>
            )}
        </Wrapper>
    );
};

export default MobileBasket;