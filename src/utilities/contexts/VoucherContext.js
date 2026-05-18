import { createContext, useEffect, useState } from 'react';

const VOUCHERS = {
    default: {
        code: 'docs-50',
        value: '50',
        type: '%',
    },
    dedicated: {
        code: '',
        value: '0',
        type: '%',
    },
    'dedicated-service-openclaw': {
        code: '',
        value: '0',
        type: '%',
    },
    domain: {
        code: 'docs-10',
        value: '10',
        type: '%',
    },
};

/**
 * Returns a single voucher for the given services (legacy).
 */
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

/**
 * Returns the voucher for a single service key.
 * Falls back to default if no specific mapping exists.
 */
export function getVoucherForService(vouchers, serviceKey) {
    if (vouchers && typeof vouchers === 'object') {
        if (vouchers[serviceKey]) {
            return vouchers[serviceKey];
        }
        if (vouchers.default) {
            return vouchers.default;
        }
    }
    return VOUCHERS.default;
}

/**
 * Groups services by their voucher code.
 * Returns an array of { voucher, services[] } objects.
 * Filters out services with 0% discount.
 */
export function groupServicesByVoucher(vouchers, serviceKeys = []) {
    const groups = {};

    for (const key of serviceKeys) {
        const voucher = getVoucherForService(vouchers, key);
        if (!voucher || voucher.value === '0' || !voucher.code) {
            continue;
        }
        const groupKey = voucher.code;
        if (!groups[groupKey]) {
            groups[groupKey] = { voucher, serviceKeys: [] };
        }
        groups[groupKey].serviceKeys.push(key);
    }

    // Sort by discount value descending (highest first)
    return Object.values(groups).sort((a, b) =>
        parseInt(b.voucher.value) - parseInt(a.voucher.value)
    );
}

export const VoucherContext = createContext({
    loading: false,
    found: false,
    vouchers: {},
    getVoucherForServices: getVoucherForServices,
    getVoucherForService: getVoucherForService,
    groupServicesByVoucher: groupServicesByVoucher,
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
            getVoucherForService: (serviceKey) => getVoucherForService(vouchers, serviceKey),
            groupServicesByVoucher: (serviceKeys) => groupServicesByVoucher(vouchers, serviceKeys),
        }}>
            { props.children }
        </VoucherContext.Provider>
    )
}
