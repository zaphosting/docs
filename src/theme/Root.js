import React from 'react';
import { VoucherProvider } from '../utilities/contexts/VoucherContext';

export default function Root({children}) {
    return (
        <VoucherProvider>
            { children }
        </VoucherProvider>
    );
}
