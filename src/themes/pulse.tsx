import type { Theme } from '../types';

export const pulse: Theme = {
    typography: {
        h1: {
            fontSize: '66px',
            fontWeight: 800,
        },
        h2: {
            fontSize: '42px',
            fontWeight: 700
        },
        h3: {
            fontSize: '35px',
            fontWeight: 700
        },
        h4: {
            fontSize: '24px',
            fontWeight: 700
        },
        h5: {
            fontSize: '18px',
            fontWeight: 400
        },
        h6: {
            fontSize: '17px',
        },
        p: {
            fontSize: '16px',
        }
    },
    colors: {
        background: '#F2ECDD',
        primary: '#F2ECDD',
        secondary: '#251E19',
        tertiary: '#E1EDED',
        text: 'black',
        success: 'green',
        error: 'red'
    }
};

