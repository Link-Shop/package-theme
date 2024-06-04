import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCart } from '@shopify/hydrogen-react';
import isNumber from 'lodash/isNumber';
import isUndefined from 'lodash/isUndefined';
import gt from 'lodash/gt';
import AnimatedNumber from 'react-animated-numbers';

const Wrapper = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: fixed;
    width: 100%;
    z-index: 20;
`;

const Flyout = styled.div`
    width: 80%;
    min-height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
`;

const FlyoutCloseWrapper = styled.div`
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
    padding-top: 7px;
`;

const ProductList = styled.div`
    margin-top: 21px;
`;

const cartVariants = {
    open: { x: 0 },
    closed: { x: '100%' }
};

interface IFlyoutCart {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ProductCard = styled.div`
    display: flex;
    gap: 20px;
`;

const ProductTitle = styled.h1`
    font-size: 12px;
`;

const EmptyCartMessage = styled.h3``;

const ProductImage = styled.img``;

const ProductContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

const ProductQtySelector = styled.div`
    max-width: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 6px 4.436px 5.103px 5px;
    border-radius: 2.212px;
    border: 0.147px solid #FFF;
    background: linear-gradient(102deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.08) 96.55%);
`;

const Quantity = styled.div`
    font-size: 12px;
`;

const CheckoutWrapper = styled.div`
    align-items: flex-end;
    display: flex;
    width: 100%;
    margin-top: auto;
`;

const FlyoutCart = ({
    isOpen,
    setIsOpen
}: IFlyoutCart) => {
    const { lines, linesUpdate, linesRemove, linesAdd, checkoutUrl } = useCart();
    console.log('@--> lines', lines);
    return (
        <Wrapper
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={cartVariants}
            transition={{
                type: 'tween',
                duration: 0.3
            }}
        >
            <Flyout>
                <FlyoutCloseWrapper>
                    <svg onClick={() => setIsOpen(false)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.40001 15C1.737 14.6022 1.39782 14.263 1.00001 13.6C-0.591217 10.948 6.60001 8.00001 6.60001 8.00001C6.60001 8.00001 -0.591216 5.05206 1.00001 2.40001C1.58883 1.41865 2.99785 1.59785 3.8071 2.4071L8.00001 6.60001C8.00001 6.60001 10.948 -0.591216 13.6 1.00001C14.263 1.39782 14.6022 1.737 15 2.40001C16.5912 5.05206 9.40001 8.00001 9.40001 8.00001C9.40001 8.00001 16.5912 10.948 15 13.6C14.4112 14.5814 13.0022 14.4022 12.1929 13.5929L8.00001 9.40001C8.00001 9.40001 5.05206 16.5912 2.40001 15Z" fill="#E8EAED" />
                    </svg>
                </FlyoutCloseWrapper>

                {
                    !lines?.length ? <EmptyCartMessage> Sorry, you're cart is empty </EmptyCartMessage> : (
                        <ProductList>
                            {
                                lines?.map((line) => (
                                    <ProductCard>
                                        <ProductImage width={54} height={64} src={line?.merchandise?.image?.url} />

                                        <ProductContent>
                                            <ProductTitle>
                                                {line?.merchandise?.title}
                                            </ProductTitle>

                                            <ProductQtySelector>
                                                <svg
                                                    onClick={() => {
                                                        if (!isNumber(line?.quantity) || isUndefined(line?.id)) {
                                                            return;
                                                        }

                                                        if (gt(line?.quantity, 1)) {
                                                            linesUpdate([
                                                                {
                                                                    id: line?.id,
                                                                    quantity: line?.quantity - 1
                                                                }
                                                            ]);
                                                            return;
                                                        }

                                                        linesRemove([line?.id]);

                                                    }}
                                                    width="20" height="20" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="0.628204" width="5.89744" height="5.89744" rx="1.03205" fill="#CC8BFF" />
                                                    <g clip-path="url(#clip0_26_33)">
                                                        <path d="M1.91663 3.57693H3.98073" stroke="white" stroke-width="0.294872" stroke-linecap="round" stroke-linejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_26_33">
                                                            <rect width="3.53846" height="3.53846" fill="white" transform="translate(1.17944 1.80768)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                                <Quantity>
                                                    <AnimatedNumber 
                                                        animateToNumber={line?.quantity || 1}
                                                    />
                                                </Quantity>

                                                <svg
                                                    onClick={() => {
                                                        if (!isUndefined(line?.quantity) && !isUndefined(line?.id)) {
                                                            linesUpdate([
                                                                {
                                                                    id: line?.id,
                                                                    quantity: line?.quantity + 1
                                                                }
                                                            ])
                                                        }
                                                    }}
                                                    width="20" height="20" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.666626" y="0.628204" width="5.89744" height="5.89744" rx="1.03205" fill="#CC8BFF" />
                                                    <path d="M3.6153 2.54486V4.60896" stroke="white" stroke-width="0.294872" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.58325 3.57693H4.64735" stroke="white" stroke-width="0.294872" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </ProductQtySelector>
                                        </ProductContent>
                                    </ProductCard>
                                ))
                            }
                        </ProductList>
                    )
                }

                <CheckoutWrapper>
                    <a href={checkoutUrl} >
                        Checkout
                    </a>
                </CheckoutWrapper>                
            </Flyout>
        </Wrapper>
    )
}

export default FlyoutCart;