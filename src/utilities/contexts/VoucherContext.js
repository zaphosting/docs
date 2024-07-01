import { createContext, useEffect, useState } from 'react';

export const VoucherContext = createContext({
    loading: false,
    found: false,
    voucher: null,
});

export const VoucherProvider = props => {
    const [
        loading,
        setLoading,
    ] = useState(false);

    const [
        voucher,
        setVoucher,
    ] = useState({});

    const [
        found,
        setFound,
    ] = useState(null);

    useEffect(() => {
        const voucherRetrieval = async () => {
            setLoading(true);

            const voucherResponse = await (
                await fetch('https://zap-hosting.com/interface/shop/_ajax/json_getDocsCoupon.php', {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                }).finally(() => {
                    setLoading(false);
                })
            ).json();

            if (voucherResponse.message === 'ok' && voucherResponse.result === 'success') {
                setFound(true);
                setVoucher(voucherResponse.data);

                return;
            }

            setFound(false);
            setVoucher({});
        }

        voucherRetrieval();
    }, []);

    return (
        <VoucherContext.Provider value={{
            loading: loading,
            found: found,
            voucher: voucher,
        }}>
            { props.children }
        </VoucherContext.Provider>
    )
}
