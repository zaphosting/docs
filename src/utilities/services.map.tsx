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
    'vserver': {
        title: translate({
            message: 'VPS',
            id: 'service.vserver.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/vps-hosting/',
            id: 'service.vserver.path',
            description: 'URL path for the VPS product',
        }),
    },
    'dedicated': {
        title: translate({
            message: 'Dedicated Server',
            id: 'service.dedicated.title',
            description: 'Product name for the dedicated server product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/dedicated-server-hosting/',
            id: 'service.dedicated.path',
            description: 'URL path for the dedicated server product',
        }),
    },
    'domain': {
        title: translate({
            message: 'Domain',
            id: 'service.domain.title',
            description: 'Product name for the domain product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/domain-check/',
            id: 'service.domain.path',
            description: 'URL path for the domain product',
        }),
    },
    'webspace': {
        title: translate({
            message: 'Webspace',
            id: 'service.webspace.title',
            description: 'Product name for the webspace product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/webhosting-rent-a-webspace/',
            id: 'service.webspace.path',
            description: 'URL path for the webspace product',
        }),
    },
    'voiceserver': {
        title: translate({
            message: 'Voiceserver',
            id: 'service.voiceserver.title',
            description: 'Product name for the voiceserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/teamspeak-3-server-hosting/',
            id: 'service.voiceserver.path',
            description: 'URL path for the voiceserver product',
        }),
    },
    'voicebot': {
        title: translate({
            message: 'Voicebot',
            id: 'service.voicebot.title',
            description: 'Product name for the voicebot product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/teamspeak-3-server-hosting/',
            id: 'service.voicebot.path',
            description: 'URL path for the voicebot product',
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
