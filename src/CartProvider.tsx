'use client';
import React, { PropsWithChildren } from 'react'
import { ShopifyProvider } from '@shopify/hydrogen-react';
import { CartProvider as HydrogenCartProvider, useCart as useHydrogenReact } from '@shopify/hydrogen-react';
import type { CountryCode, LanguageCode } from '@shopify/hydrogen-react/storefront-api-types';
import CartIcon from './CartIcon';

export interface ICartProvider {
    storeDomain: string;
    storefrontToken: string;
    storefrontApiVersion: string;
    countryIsoCode: CountryCode;
    languageIsoCode: LanguageCode;
};

export const CartProvider = ({ 
    children,
    ...shopifyProps
}: PropsWithChildren<ICartProvider>) => {
    return (
        <ShopifyProvider
            {...shopifyProps}
        >
            <HydrogenCartProvider>
                <CartIcon />
                {children}
            </HydrogenCartProvider>
        </ShopifyProvider>
    )
}

export const useCart = useHydrogenReact;