import { createContext, useEffect, useState } from 'react';

const VOUCHERS = {
    default: {
        code: 'docs-50',
        value: '50',
        type: '%',
    },
    dedicated: {
        code: 'docs-10',
        value: '10',
        type: '%',
    },
    domain: {
        code: 'docs-10',
        value: '10',
        type: '%',
    },
};

export function getVoucherForServices(vouchers, services = []) {
    if (vouchers && vouchers.code && !vouchers.default) {
        return vouchers;
    }

    if (vouchers && typeof vouchers === 'object') {
        if (Array.isArray(services) && services.length > 0) {
            for (const service of services) {
                if (vouchers[service]) {
                    return vouchers[service];
                }
            }
        }
        
        if (vouchers.default) {
            return vouchers.default;
        }
    }

    return VOUCHERS.default;
}

export const VoucherContext = createContext({
    loading: false,
    found: false,
    vouchers: {},
    getVoucherForServices: getVoucherForServices,
});

export const VoucherProvider = props => {
    const [
        loading,
        setLoading,
    ] = useState(true);

    const [
        vouchers,
        setVouchers,
    ] = useState({});

    const [
        found,
        setFound,
    ] = useState(null);

    useEffect(() => {
        setVouchers(VOUCHERS);
        setFound(true);
        setLoading(false);
    }, []);

    return (
        <VoucherContext.Provider value={{
            loading: loading,
            found: found,
            vouchers: vouchers,
            getVoucherForServices: (services) => getVoucherForServices(vouchers, services),
        }}>
            { props.children }
        </VoucherContext.Provider>
    )
}
