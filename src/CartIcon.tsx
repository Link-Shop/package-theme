'use client';
import React from 'react';
import styled from 'styled-components';
import { useCart } from '@shopify/hydrogen-react';
import greaterThan from 'lodash/gt';

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
            <svg width={24} height={24} viewBox="0 0 256 256"><rect fill="none" height="256" width="256" /><path d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" /><circle cx="80" cy="204" fill="none" r="20" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" /><circle cx="184" cy="204" fill="none" r="20" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" /><path d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" /></svg>

            {
                greaterThan(totalQuantity, 0) && <Quantity> {totalQuantity} </Quantity>
            }

        </Wrapper>
    )
}

export default CartIcon;