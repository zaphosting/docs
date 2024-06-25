import { translate } from '@docusaurus/Translate';

interface serviceMap {
    [key: string]: serviceDetails,
}

export interface serviceDetails {
    [title: string]: string,
    [url: string]: string,
}

const servicesMap: serviceMap = {
    'gameserver': {
        title: translate({
            message: 'Cloud-Gameserver',
            id: 'service.gameserver.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/gameserver-hosting/',
            id: 'service.gameserver.path',
            description: 'URL path for the gameserver product',
        }),
    },
    'premium-storage': {
        title: translate({
            message: 'Premium Storage',
            id: 'service.storage.title',
            description: 'Product name for the storage product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/shop/product/premium-storage/',
            id: 'service.storage.path',
            description: 'URL path for the storage product',
        }),
    },
};

export default servicesMap;
