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

            try {
                const voucherResponse = await fetch('https://zap-hosting.com/interface/shop/_ajax/json_getDocsCoupon.php', {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                });

                if (!voucherResponse.ok) {
                    throw new Error(`HTTP error! Status: ${voucherResponse.status}`);
                }

                const voucherData = await voucherResponse.json();

                if (voucherData.message !== 'ok' || voucherData.result !== 'success') {
                    throw new Error(`Successful response code with application level error: ${voucherData.message}`);
                }

                setFound(true);
                setVoucher(voucherData.data);
            } catch (error) {
                console.error("Not displaying a voucher for this reason:", error); // Log the error for debugging
                setFound(false);
                setVoucher({});
            } finally {
                setLoading(false);
            }
        };

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
