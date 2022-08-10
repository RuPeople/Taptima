import React from 'react';
import styled from "@emotion/styled";
import ContactButton from "./Header/NavItems/ContactButton";
import {AnimatePresence, motion} from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 576px) {
    padding-bottom: 20px;
  }
  @media (min-width: 577px) and (max-width: 1200px) {
    padding-bottom: 25px;
  }
  @media (min-width: 1201px) {
    padding-bottom: 50px;
  }
`

const ContactsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & span{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 23px;
    line-height: 23px;
    /* identical to box height, or 100% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -1px;

    color: #606F7A;
  }
  & div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
  }
  
  & span{
    margin-bottom: 24px;
  }
  
  & a{
    margin: 0 7px;
  }
  
`
const A = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 28px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -1px;

  color: #606F7A;
  text-decoration: none ;
  margin-bottom: 24px;
`


const Menu = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Wrapper as={motion.div}
                     initial={{translateX:1000 }}
                     animate={{translateX:0 }}
                     transition={{duration:0.2}}
                     exit={{translateX:1000}}

            >
                <ContactsWrapper>
                    <A as={motion.a}
                       initial={{translateX:1000 }}
                       animate={{translateX:0 }}
                       transition={{duration:0.4}}
                       href="#">asia@baikalvl.ru</A>
                    <A as={motion.a}
                       initial={{translateX:1000 }}
                       animate={{translateX:0 }}
                       transition={{duration:0.45}}
                       href="#">8 800 201-87-77</A>
                    <ContactButton/>
                </ContactsWrapper>
                <SocialsWrapper>
                    <motion.span
                        initial={{translateX:1000 }}
                        animate={{translateX:0 }}
                        transition={{duration:0.44}}>Мы в соц. сетях:</motion.span>
                    <div>
                        <motion.a
                            initial={{translateX:1000 }}
                            animate={{translateX:0 }}
                            transition={{duration:0.46}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <g clipPath="url(#clip0_120_99)">
                                    <path d="M3.12586 3.40269C-0.803304 7.48394 0.000862657 11.8194 0.000862657 24.9902C0.000862657 35.9277 -1.90747 46.8923 8.08003 49.4735C11.1988 50.2756 38.8321 50.2756 41.9467 49.4693C46.105 48.3964 49.4883 45.0235 49.9508 39.1423C50.0154 38.3214 50.0154 11.6735 49.9488 10.836C49.4571 4.57144 45.6008 0.961022 40.5196 0.229772C39.355 0.0610219 39.1217 0.0110219 33.1467 0.00060527C11.9529 0.0110219 7.30711 -0.932728 3.12586 3.40269V3.40269Z" fill="url(#paint0_linear_120_99)"/>
                                    <path d="M24.9963 6.53955C17.4318 6.53955 10.2484 5.86663 7.50468 12.9083C6.37134 15.8166 6.53593 19.5937 6.53593 25.002C6.53593 29.7479 6.38384 34.2083 7.50468 37.0937C10.2422 44.1395 17.4838 43.4645 24.9922 43.4645C32.2359 43.4645 39.7047 44.2187 42.4818 37.0937C43.6172 34.1562 43.4505 30.4354 43.4505 25.002C43.4505 17.7895 43.8484 13.1333 40.3505 9.63746C36.8088 6.0958 32.0193 6.53955 24.988 6.53955H24.9963ZM23.3422 9.86663C39.1213 9.84163 41.1297 8.08746 40.0213 32.4562C39.6276 41.075 33.0651 40.1291 24.9984 40.1291C10.2901 40.1291 9.86718 39.7083 9.86718 24.9937C9.86718 10.1083 11.0338 9.87496 23.3422 9.86246V9.86663ZM34.8505 12.9312C33.6276 12.9312 32.6359 13.9229 32.6359 15.1458C32.6359 16.3687 33.6276 17.3604 34.8505 17.3604C36.0734 17.3604 37.0651 16.3687 37.0651 15.1458C37.0651 13.9229 36.0734 12.9312 34.8505 12.9312V12.9312ZM24.9963 15.5208C19.7609 15.5208 15.5172 19.7666 15.5172 25.002C15.5172 30.2375 19.7609 34.4812 24.9963 34.4812C30.2318 34.4812 34.4734 30.2375 34.4734 25.002C34.4734 19.7666 30.2318 15.5208 24.9963 15.5208V15.5208ZM24.9963 18.8479C33.1318 18.8479 33.1422 31.1562 24.9963 31.1562C16.863 31.1562 16.8505 18.8479 24.9963 18.8479Z" fill="white"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_120_99" x1="3.22174" y1="46.807" x2="49.6914" y2="6.58806" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FFDD55"/>
                                        <stop offset="0.5" stopColor="#FF543E"/>
                                        <stop offset="1" stopColor="#C837AB"/>
                                    </linearGradient>
                                    <clipPath id="clip0_120_99">
                                        <rect width="50" height="50" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </motion.a>
                        <motion.a
                            initial={{translateX:1000 }}
                            animate={{translateX:0 }}
                            transition={{duration:0.48}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <g clipPath="url(#clip0_120_93)">
                                    <rect x="0.390625" width="50" height="50" rx="8" fill="#7AD06D"/>
                                    <path d="M24.5085 5.97906C14.4501 6.45798 6.51254 14.8347 6.54306 24.9046C6.55235 27.9716 7.29278 30.8665 8.59894 33.4243L6.59352 43.1589C6.48504 43.6854 6.95995 44.1465 7.48306 44.0226L17.0218 41.7627C19.4724 42.9834 22.225 43.6885 25.1382 43.733C35.4189 43.89 43.9912 35.7269 44.3116 25.45C44.6551 14.4339 35.5632 5.45258 24.5085 5.97906ZM35.8903 35.3044C33.0968 38.0979 29.3826 39.6363 25.432 39.6363C23.1188 39.6363 20.9042 39.1173 18.8494 38.0938L17.521 37.4321L11.6728 38.8177L12.9038 32.8418L12.2494 31.5603C11.1827 29.4712 10.6418 27.2122 10.6418 24.8461C10.6418 20.8954 12.1802 17.1814 14.9737 14.3878C17.7423 11.6192 21.517 10.0558 25.4323 10.0558C29.3829 10.0559 33.0969 11.5943 35.8904 14.3877C38.6838 17.1812 40.2223 20.8953 40.2224 24.8458C40.2223 28.7612 38.6588 32.536 35.8903 35.3044Z" fill="white"/>
                                    <path d="M34.5993 28.9425L30.9405 27.892C30.4594 27.7539 29.9414 27.8903 29.5909 28.2475L28.6962 29.1591C28.3189 29.5434 27.7465 29.6669 27.2471 29.4649C25.5163 28.7645 21.8755 25.5273 20.9457 23.9081C20.6774 23.441 20.7218 22.857 21.0511 22.4309L21.8323 21.4203C22.1383 21.0243 22.2029 20.4926 22.0005 20.0349L20.4612 16.5533C20.0925 15.7194 19.0269 15.4767 18.3307 16.0655C17.3095 16.9291 16.0979 18.2416 15.9506 19.6956C15.691 22.2591 16.7904 25.4906 20.9478 29.3708C25.7507 33.8536 29.5969 34.4458 32.1011 33.8392C33.5214 33.4952 34.6565 32.1159 35.3729 30.9867C35.8613 30.2167 35.4757 29.1942 34.5993 28.9425Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_120_93">
                                        <rect width="50" height="50" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </motion.a>
                        <motion.a
                            initial={{translateX:1000 }}
                            animate={{translateX:0 }}
                            transition={{duration:0.5}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <g clipPath="url(#clip0_120_89)">
                                    <rect width="50" height="50" rx="7" fill="white"/>
                                    <path d="M43.2629 0H6.73858C3.01758 0 0.000976562 3.01648 0.000976562 6.7376V43.2622C0.000976562 46.9833 3.01745 49.9998 6.73858 49.9998H24.7522L24.7829 32.1325H20.141C19.5378 32.1325 19.0481 31.6448 19.0458 31.0415L19.0235 25.2822C19.0212 24.6756 19.5123 24.1827 20.1189 24.1827H24.7523V18.6177C24.7523 12.1596 28.6965 8.64311 34.4576 8.64311H39.185C39.7898 8.64311 40.2803 9.13346 40.2803 9.73842V14.5947C40.2803 15.1994 39.7902 15.6897 39.1856 15.69L36.2844 15.6914C33.1514 15.6914 32.5447 17.1802 32.5447 19.3651V24.1828H39.4291C40.0851 24.1828 40.594 24.7556 40.5167 25.4071L39.8341 31.1664C39.7688 31.7175 39.3014 32.1328 38.7465 32.1328H32.5754L32.5447 50H43.2631C46.9841 50 50.0006 46.9835 50.0006 43.2625V6.7376C50.0005 3.01648 46.984 0 43.2629 0Z" fill="#475993"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_120_89">
                                        <rect width="50" height="50" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </motion.a>
                        <motion.a
                            initial={{translateX:1000 }}
                            animate={{translateX:0 }}
                            transition={{duration:0.52}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <g clipPath="url(#clip0_120_103)">
                                    <rect width="50" height="50" rx="8" fill="url(#paint0_linear_120_103)"/>
                                    <path d="M23.7634 22.1966C25.7675 20.4861 28.4239 19.5441 31.2431 19.5441C31.723 19.5441 32.099 19.1043 31.9386 18.6519C30.478 14.5334 25.9965 11.5349 20.6941 11.5349C14.2064 11.5349 8.94727 16.0237 8.94727 21.5607C8.94727 24.1403 10.0892 26.492 11.9647 28.2685C12.3841 28.6658 12.5978 29.2454 12.4724 29.8094C12.1862 31.0977 13.5721 32.1089 14.7116 31.443L15.2073 31.1533C15.6669 30.8846 16.2212 30.845 16.7303 31.0008C17.9686 31.3798 19.3031 31.5865 20.6942 31.5865C20.8955 31.5865 21.0318 31.384 20.9713 31.192C20.7245 30.4078 20.5967 29.5896 20.5967 28.7535C20.5966 26.2681 21.7213 23.9396 23.7634 22.1966ZM24.8216 16.2135C25.6521 16.2135 26.3254 16.8869 26.3254 17.7173C26.3254 18.5478 25.652 19.2211 24.8216 19.2211C23.991 19.2211 23.3178 18.5478 23.3178 17.7173C23.3178 16.8869 23.991 16.2135 24.8216 16.2135ZM16.2997 19.2213C15.4691 19.2213 14.7959 18.548 14.7959 17.7175C14.7959 16.8871 15.4692 16.2137 16.2997 16.2137C17.1302 16.2137 17.8035 16.8871 17.8035 17.7175C17.8035 18.548 17.1303 19.2213 16.2997 19.2213Z" fill="white"/>
                                    <path d="M31.2431 20.3813C25.8255 20.3813 21.4338 24.1296 21.4338 28.7534C21.4338 33.3772 25.8255 37.1255 31.2431 37.1255C32.4048 37.1255 33.5191 36.9529 34.5532 36.6364C34.9783 36.5063 35.4412 36.5393 35.825 36.7637L36.239 37.0056C37.1904 37.5616 38.3478 36.7173 38.1087 35.6415C38.004 35.1706 38.1824 34.6866 38.5327 34.3548C40.0989 32.8713 41.0524 30.9075 41.0524 28.7534C41.0524 24.1296 36.6606 20.3813 31.2431 20.3813ZM27.7965 24.2883C28.4901 24.2883 29.0523 24.8505 29.0523 25.544C29.0523 26.2376 28.4901 26.7998 27.7965 26.7998C27.103 26.7998 26.5408 26.2376 26.5408 25.544C26.5408 24.8505 27.1031 24.2883 27.7965 24.2883ZM34.9129 26.7999C34.2193 26.7999 33.6571 26.2377 33.6571 25.5441C33.6571 24.8506 34.2193 24.2884 34.9129 24.2884C35.6064 24.2884 36.1686 24.8506 36.1686 25.5441C36.1686 26.2377 35.6064 26.7999 34.9129 26.7999Z" fill="white"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_120_103" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#03DC6B"/>
                                        <stop offset="1" stopColor="#06C462"/>
                                    </linearGradient>
                                    <clipPath id="clip0_120_103">
                                        <rect width="50" height="50" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </motion.a>
                    </div>
                </SocialsWrapper>
            </Wrapper>
        </AnimatePresence>
    );
};

export default Menu;