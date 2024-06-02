import React, { PropsWithChildren } from 'react';
import { useCart as useHydrogenReact } from '@shopify/hydrogen-react';
import type { CountryCode, LanguageCode } from '@shopify/hydrogen-react/storefront-api-types';
export interface ICartProvider {
    storeDomain: string;
    storefrontToken: string;
    storefrontApiVersion: string;
    countryIsoCode: CountryCode;
    languageIsoCode: LanguageCode;
}
export declare const CartProvider: ({ children, ...shopifyProps }: PropsWithChildren<ICartProvider>) => React.JSX.Element;
export declare const useCart: typeof useHydrogenReact;
