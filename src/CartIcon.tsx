'use client';
import React from 'react';
import styled from 'styled-components';
import { useCart } from '@shopify/hydrogen-react';

const Wrapper = styled.div`
    position: fixed;
    top: 2%;
    right: 3%;
    background: linear-gradient(180deg, #001AFF 0%, #003BAF 100%);
    min-width: 35px;
    min-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
`;

const Quantity = styled.div`
    position: absolute;
    bottom: -20%;
    right: 0;
    background-color: red;
    font-size: 7.2px;
    min-width: 14px;
    min-height: 14px;
    border-radius: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CartIcon = () => {
    const { totalQuantity } = useCart();
    return (
        <Wrapper>
            {
                totalQuantity && <Quantity>
                    {totalQuantity}
                </Quantity>
            }
        </Wrapper>
    )
}

export default CartIcon;