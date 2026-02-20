import { translate } from '@docusaurus/Translate';

interface serviceMap {
    [key: string]: serviceDetails,
}

export interface serviceDetails {
    [title: string]: string,
    [url: string]: string,
}

const priceFrom = translate({
    message: 'from',
    id: 'service.price.from',
    description: 'Price prefix before amount, e.g. "from 3.90€"',
});

const servicesMap: serviceMap = {
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
        price: `${priceFrom} 7.90€`,
    },
    'vserver-service-openclaw': {
        title: translate({
            message: 'VPS for OpenClaw',
            id: 'service.vserver-service-openclaw.title',
            description: 'Product name for the OpenClaw product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/vps-for-openclaw/',
            id: 'service.vserver-service-openclaw.path',
            description: 'URL path for the VPS product',
        }),
        price: `${priceFrom} 7.90€`,
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
        price: `${priceFrom} 58.90€`,
    },
    'dedicated-service-openclaw': {
        title: translate({
            message: 'Dedicated Server for OpenClaw',
            id: 'service.dedicated-service-openclaw.title',
            description: 'Product name for the OpenClaw product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/vps-for-openclaw/',
            id: 'service.dedicated.path',
            description: 'URL path for the dedicated server product',
        }),
        price: `${priceFrom} 58.90€`,
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
        price: `${priceFrom} 7.90€`,
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
        price: `${priceFrom} 3.90€`,
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
        price: `${priceFrom} 1.90€`,
    },
    'voicebot': {
        title: translate({
            message: 'Voicebot',
            id: 'service.voicebot.title',
            description: 'Product name for the voicebot product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/teamspeak-3-mymusicbot-hosting/',
            id: 'service.voicebot.path',
            description: 'URL path for the voicebot product',
        }),
        price: `${priceFrom} 4.49€`,
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
        price: `${priceFrom} 2.90€`,
    },
    'fivem-upvotes': {
        title: translate({
            message: 'FiveM Upvotes',
            id: 'service.fivemupvotes.title',
            description: 'Product name for the storage product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/shop/product/fivem-upvotes/',
            id: 'service.fivemupvotes.path',
            description: 'URL path for the storage product',
        }),
        price: `${priceFrom} 4.58€`,
    },
    'fivem-upvotes-burst': {
        title: translate({
            message: 'FiveM Upvotes BURST',
            id: 'service.fivemupvotesburst.title',
            description: 'Product name for the storage product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/shop/product/fivem-upvotes-burst/',
            id: 'service.fivemupvotes.path',
            description: 'URL path for the storage product',
        }),
        price: `${priceFrom} 10.71€`,
    },
    'discord-bot': {
        title: translate({
            message: 'Discord Bot',
            id: 'service.fivemupvotes.title',
            description: 'Product name for the storage product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/shop/product/cloud-gameserver/discord-bot/',
            id: 'service.fivemupvotes.path',
            description: 'URL path for the storage product',
        }),
        price: `${priceFrom} 3.00€`,
    },
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
        price: `${priceFrom} 2.76€`,
    },
        'gameserver-7d2d': {
        title: translate({
            message: '7 Days to Die Gameserver',
            id: 'service.gameserver-7d2d.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/7-days-to-die-server-hosting/',
            id: 'service.gameserver-7d2d.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.50€`,
    },
    'gameserver-abioticfactor': {
        title: translate({
            message: 'Abiotic Factor Gameserver',
            id: 'service.gameserver-abioticfactor.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/abiotic-factor-server-hosting/',
            id: 'service.gameserver-abioticfactor.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.38€`,
    },
    'gameserver-afterinfection': {
        title: translate({
            message: 'Afterinfection Gameserver',
            id: 'service.gameserver-afterinfection.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/afterinfection-server-hosting/',
            id: 'service.gameserver-afterinfection.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 8.85€`,
    },
    'gameserver-amongus': {
        title: translate({
            message: 'Among Us Gameserver',
            id: 'service.gameserver-amongus.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/among-us-server-hosting/',
            id: 'service.gameserver-amongus.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 8.90€`,
    },
    'gameserver-animalia-survival': {
        title: translate({
            message: 'Animalia Survival Gameserver',
            id: 'service.gameserver-animalia-survival.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/animalia-survival-server-hosting/',
            id: 'service.gameserver-animalia-survival.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.90€`,
    },
    'gameserver-argo': {
        title: translate({
            message: 'Argo Gameserver',
            id: 'service.gameserver-argo.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/argo-server-hosting/',
            id: 'service.gameserver-argo.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-ark': {
        title: translate({
            message: 'ARK: Survival Evolved Gameserver',
            id: 'service.gameserver-ark.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/ark-survival-evolved-server-hosting/',
            id: 'service.gameserver-ark.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-arma3': {
        title: translate({
            message: 'Arma 3 Gameserver',
            id: 'service.gameserver-arma3.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/arma-3-server-hosting/',
            id: 'service.gameserver-arma3.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-arma-reforger': {
        title: translate({
            message: 'Arma Reforger Gameserver',
            id: 'service.gameserver-arma-reforger.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/arma-reforger-server-hosting/',
            id: 'service.gameserver-arma-reforger.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-assettocorsa': {
        title: translate({
            message: 'Assetto Corsa Gameserver',
            id: 'service.gameserver-assettocorsa.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/assetto-corsa-server-hosting/',
            id: 'service.gameserver-assettocorsa.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.68€`,
    },
    'gameserver-assetto-competizione': {
        title: translate({
            message: 'Assetto Corsa Competizione Gameserver',
            id: 'service.gameserver-assetto-competizione.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/assetto-corsa-competizione-server-hosting/',
            id: 'service.gameserver-assetto-competizione.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.20€`,
    },
    'gameserver-astrocolony': {
        title: translate({
            message: 'Astro Colony Gameserver',
            id: 'service.gameserver-astrocolony.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/astro-colony-server-hosting/',
            id: 'service.gameserver-astrocolony.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.40€`,
    },
    'gameserver-astroneer': {
        title: translate({
            message: 'ASTRONEER Gameserver',
            id: 'service.gameserver-astroneer.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/astroneer-server-hosting/',
            id: 'service.gameserver-astroneer.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-avorion': {
        title: translate({
            message: 'Avorion Gameserver',
            id: 'service.gameserver-avorion.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/avorion-server-hosting/',
            id: 'service.gameserver-avorion.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-ats': {
        title: translate({
            message: 'American Truck Simulator Gameserver',
            id: 'service.gameserver-ats.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/american-truck-simulator-server-hosting/',
            id: 'service.gameserver-ats.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-bananashooter': {
        title: translate({
            message: 'Banana Shooter Gameserver',
            id: 'service.gameserver-bananashooter.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/banana-shooter-server-hosting/',
            id: 'service.gameserver-bananashooter.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-barotrauma': {
        title: translate({
            message: 'Barotrauma Gameserver',
            id: 'service.gameserver-barotrauma.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/barotrauma-server-hosting/',
            id: 'service.gameserver-barotrauma.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-battalion1944': {
        title: translate({
            message: 'Battalion 1944 Gameserver',
            id: 'service.gameserver-battalion1944.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/battalion-1944-server-hosting/',
            id: 'service.gameserver-battalion1944.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-battlegrounds3': {
        title: translate({
            message: 'Battle Grounds III Gameserver',
            id: 'service.gameserver-battlegrounds3.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/battle-grounds-iii-server-hosting/',
            id: 'service.gameserver-battlegrounds3.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.00€`,
    },
    'gameserver-beammp': {
        title: translate({
            message: 'BeamMP Gameserver',
            id: 'service.gameserver-beammp.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/beammp-server-hosting/',
            id: 'service.gameserver-beammp.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.52€`,
    },
    'gameserver-bob': {
        title: translate({
            message: 'Beasts of Bermuda Gameserver',
            id: 'service.gameserver-bob.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/beasts-of-bermuda-server-hosting/',
            id: 'service.gameserver-bob.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 9.80€`,
    },
    'gameserver-beyondthewire': {
        title: translate({
            message: 'Beyond the Wire Gameserver',
            id: 'service.gameserver-beyondthewire.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/beyond-the-wire-server-hosting/',
            id: 'service.gameserver-beyondthewire.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.08€`,
    },
    'gameserver-brokeprotocol': {
        title: translate({
            message: 'Broke Protocol Gameserver',
            id: 'service.gameserver-brokeprotocol.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/broke-protocol-server-hosting/',
            id: 'service.gameserver-brokeprotocol.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 0.00€`,
    },
    'gameserver-citadel-forgedwithfire': {
        title: translate({
            message: 'Citadel: Forged With Fire Gameserver',
            id: 'service.gameserver-citadel-forgedwithfire.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/citadel-forged-with-fire-server-hosting/',
            id: 'service.gameserver-citadel-forgedwithfire.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 9.66€`,
    },
    'gameserver-colonysurvival': {
        title: translate({
            message: 'Colony Survival Gameserver',
            id: 'service.gameserver-colonysurvival.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/colony-survival-server-hosting/',
            id: 'service.gameserver-colonysurvival.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.54€`,
    },
    'gameserver-conan': {
        title: translate({
            message: 'Conan Exiles Gameserver',
            id: 'service.gameserver-conan.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/conan-exiles-server-hosting/',
            id: 'service.gameserver-conan.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 13.80€`,
    },
    'gameserver-contagion': {
        title: translate({
            message: 'Contagion Gameserver',
            id: 'service.gameserver-contagion.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/contagion-server-hosting/',
            id: 'service.gameserver-contagion.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.52€`,
    },
    'gameserver-corekeeper': {
        title: translate({
            message: 'Core Keeper Gameserver',
            id: 'service.gameserver-corekeeper.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/core-keeper-server-hosting/',
            id: 'service.gameserver-corekeeper.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.52€`,
    },
    'gameserver-craftopia': {
        title: translate({
            message: 'Craftopia Gameserver',
            id: 'service.gameserver-craftopia.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/craftopia-server-hosting/',
            id: 'service.gameserver-craftopia.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-cryofall': {
        title: translate({
            message: 'Cryofall Gameserver',
            id: 'service.gameserver-cryofall.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/cryofall-server-hosting/',
            id: 'service.gameserver-cryofall.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-cs16': {
        title: translate({
            message: 'Counter-Strike 1.6 Gameserver',
            id: 'service.gameserver-cs16.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/counter-strike-1-6-server-hosting/',
            id: 'service.gameserver-cs16.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.00€`,
    },
    'gameserver-cs2': {
        title: translate({
            message: 'Counter-Strike 2 Gameserver',
            id: 'service.gameserver-cs2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/counter-strike-2-server-hosting/',
            id: 'service.gameserver-cs2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.00€`,
    },
    'gameserver-css': {
        title: translate({
            message: 'Counter-Strike: Source Gameserver',
            id: 'service.gameserver-css.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/css-server-hosting/',
            id: 'service.gameserver-css.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.00€`,
    },
    'gameserver-dayofinfamy': {
        title: translate({
            message: 'Day of Infamy Gameserver',
            id: 'service.gameserver-dayofinfamy.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/day-of-infamy-server-hosting/',
            id: 'service.gameserver-dayofinfamy.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 0.00€`,
    },
    'gameserver-dayz': {
        title: translate({
            message: 'DayZ Gameserver',
            id: 'service.gameserver-dayz.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/dayz-standalone-server-hosting/',
            id: 'service.gameserver-dayz.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 11.80€`,
    },
    'gameserver-ddracenetwork': {
        title: translate({
            message: 'DDraceNetwork Gameserver',
            id: 'service.gameserver-ddracenetwork.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/ddracenetwork-server-hosting/',
            id: 'service.gameserver-ddracenetwork.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.88€`,
    },
    'gameserver-deadlock': {
        title: translate({
            message: 'Deadlock Gameserver',
            id: 'service.gameserver-deadlock.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/deadlock-server-hosting/',
            id: 'service.gameserver-deadlock.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 12.00€`,
    },
    'gameserver-deadpoly': {
        title: translate({
            message: 'DeadPoly Gameserver',
            id: 'service.gameserver-deadpoly.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/deadpoly-server-hosting/',
            id: 'service.gameserver-deadpoly.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-dods': {
        title: translate({
            message: 'Day of Defeat: Source Gameserver',
            id: 'service.gameserver-dods.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/day-of-defeat-source-server-hosting/',
            id: 'service.gameserver-dods.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 0.00€`,
    },
    'gameserver-dst': {
        title: translate({
            message: 'Don\'t Starve Together Gameserver',
            id: 'service.gameserver-dst.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/don-t-starve-together-server-hosting/',
            id: 'service.gameserver-dst.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.92€`,
    },
    'gameserver-echoes-of-elysium': {
        title: translate({
            message: 'Echoes of Elysium Gameserver',
            id: 'service.gameserver-echoes-of-elysium.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/echoes-of-elysium-server-hosting/',
            id: 'service.gameserver-echoes-of-elysium.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.76€`,
    },
    'gameserver-eco': {
        title: translate({
            message: 'ECO Gameserver',
            id: 'service.gameserver-eco.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/eco-global-survival-server-hosting/',
            id: 'service.gameserver-eco.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-empyrion': {
        title: translate({
            message: 'Empyrion Gameserver',
            id: 'service.gameserver-empyrion.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/empyrion-server-hosting/',
            id: 'service.gameserver-empyrion.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-enshrouded': {
        title: translate({
            message: 'Enshrouded Gameserver',
            id: 'service.gameserver-enshrouded.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/enshrouded-server-hosting/',
            id: 'service.gameserver-enshrouded.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.16€`,
    },
    'gameserver-ets2': {
        title: translate({
            message: 'Euro Truck Simulator 2 Gameserver',
            id: 'service.gameserver-ets2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/euro-truck-simulator-2-server-hosting/',
            id: 'service.gameserver-ets2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-factorio': {
        title: translate({
            message: 'Factorio Gameserver',
            id: 'service.gameserver-factorio.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/factorio-server-hosting/',
            id: 'service.gameserver-factorio.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.50€`,
    },
    'gameserver-fivem': {
        title: translate({
            message: 'FiveM Gameserver',
            id: 'service.gameserver-fivem.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/fivem-server-hosting/',
            id: 'service.gameserver-fivem.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-foundry': {
        title: translate({
            message: 'Foundry Gameserver',
            id: 'service.gameserver-foundry.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/foundry-server-hosting/',
            id: 'service.gameserver-foundry.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-gmod': {
        title: translate({
            message: 'Garry\'s Mod Gameserver',
            id: 'service.gameserver-gmod.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/garrys-mod-server-hosting/',
            id: 'service.gameserver-gmod.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-groundbranch': {
        title: translate({
            message: 'Ground Branch Gameserver',
            id: 'service.gameserver-groundbranch.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/ground-branch-server-hosting/',
            id: 'service.gameserver-groundbranch.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-hl1': {
        title: translate({
            message: 'Half-Life 1 Gameserver',
            id: 'service.gameserver-hl1.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/half-life-1-server-hosting/',
            id: 'service.gameserver-hl1.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-hl2': {
        title: translate({
            message: 'Half-Life 2 Gameserver',
            id: 'service.gameserver-hl2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/half-life-2-server-hosting/',
            id: 'service.gameserver-hl2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-holdfast': {
        title: translate({
            message: 'Holdfast: Nations At War Gameserver',
            id: 'service.gameserver-holdfast.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/holdfast-nations-at-war-server-hosting/',
            id: 'service.gameserver-holdfast.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.60€`,
    },
    'gameserver-humanitz': {
        title: translate({
            message: 'HumanitZ Gameserver',
            id: 'service.gameserver-humanitz.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/humanitz-server-hosting/',
            id: 'service.gameserver-humanitz.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 1.98€`,
    },
    'gameserver-hurtworld': {
        title: translate({
            message: 'Hurtworld Gameserver',
            id: 'service.gameserver-hurtworld.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/hurtworld-server-hosting/',
            id: 'service.gameserver-hurtworld.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.00€`,
    },
    'gameserver-hytale': {
        title: translate({
            message: 'Hytale Gameserver',
            id: 'service.gameserver-hytale.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/hytale-server-hosting/',
            id: 'service.gameserver-hytale.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.92€`,
    },
    'gameserver-icarus': {
        title: translate({
            message: 'Icarus Gameserver',
            id: 'service.gameserver-icarus.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/icarus-server-hosting/',
            id: 'service.gameserver-icarus.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-insurgency': {
        title: translate({
            message: 'Insurgency: Sandstorm Gameserver',
            id: 'service.gameserver-insurgency.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/insurgency-sandstorm-server-hosting/',
            id: 'service.gameserver-insurgency.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 8.28€`,
    },
    'gameserver-ironarmada': {
        title: translate({
            message: 'Iron Armada Gameserver',
            id: 'service.gameserver-ironarmada.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/iron-armada-server-hosting/',
            id: 'service.gameserver-ironarmada.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.90€`,
    },
    'gameserver-jol': {
        title: translate({
            message: 'Journey of Life Gameserver',
            id: 'service.gameserver-jol.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/journey-of-life-server-hosting/',
            id: 'service.gameserver-jol.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-killingfloor2': {
        title: translate({
            message: 'Killing Floor 2 Gameserver',
            id: 'service.gameserver-killingfloor2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/killing-floor-2-server-hosting/',
            id: 'service.gameserver-killingfloor2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-lastoasis': {
        title: translate({
            message: 'Last Oasis Gameserver',
            id: 'service.gameserver-lastoasis.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/last-oasis-server-hosting/',
            id: 'service.gameserver-lastoasis.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.52€`,
    },
    'gameserver-leap': {
        title: translate({
            message: 'Leap Gameserver',
            id: 'service.gameserver-leap.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/leap-server-hosting/',
            id: 'service.gameserver-leap.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-l4d2': {
        title: translate({
            message: 'Left 4 Dead 2 Gameserver',
            id: 'service.gameserver-l4d2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/left-4-dead-2-server-hosting/',
            id: 'service.gameserver-l4d2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.00€`,
    },
    'gameserver-longvinter': {
        title: translate({
            message: 'Longvinter Gameserver',
            id: 'service.gameserver-longvinter.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/longvinter-server-hosting/',
            id: 'service.gameserver-longvinter.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.90€`,
    },
    'gameserver-minecraft': {
        title: translate({
            message: 'Minecraft Gameserver',
            id: 'service.gameserver-minecraft.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/minecraft-server-hosting/',
            id: 'service.gameserver-minecraft.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.76€`,
    },
    'gameserver-minetest': {
        title: translate({
            message: 'Minetest Gameserver',
            id: 'service.gameserver-minetest.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/minetest-server-hosting/',
            id: 'service.gameserver-minetest.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.90€`,
    },
    'gameserver-miscreated': {
        title: translate({
            message: 'Miscreated Gameserver',
            id: 'service.gameserver-miscreated.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/miscreated-server-hosting/',
            id: 'service.gameserver-miscreated.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 15.80€`,
    },
    'gameserver-motortown': {
        title: translate({
            message: 'Motor Town: Behind The Wheel Gameserver',
            id: 'service.gameserver-motortown.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/motor-town-behind-the-wheel-server-hosting/',
            id: 'service.gameserver-motortown.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 11.00€`,
    },
    'gameserver-mountandblade': {
        title: translate({
            message: 'Mount & Blade Gameserver',
            id: 'service.gameserver-mountandblade.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/mount-and-blade-server-hosting/',
            id: 'service.gameserver-mountandblade.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.20€`,
    },
    'gameserver-mta': {
        title: translate({
            message: 'Multi Theft Auto Gameserver',
            id: 'service.gameserver-mta.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/mta-server-hosting/',
            id: 'service.gameserver-mta.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.00€`,
    },
    'gameserver-moe': {
        title: translate({
            message: 'Myth of Empires Gameserver',
            id: 'service.gameserver-moe.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/myth-of-empires-server-hosting/',
            id: 'service.gameserver-moe.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-necesse': {
        title: translate({
            message: 'Necesse Gameserver',
            id: 'service.gameserver-necesse.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/necesse-server-hosting/',
            id: 'service.gameserver-necesse.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.90€`,
    },
    'gameserver-nstp': {
        title: translate({
            message: 'Never Split the Party Gameserver',
            id: 'service.gameserver-nstp.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/never-split-the-party-server-hosting/',
            id: 'service.gameserver-nstp.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.96€`,
    },
    'gameserver-nienix': {
        title: translate({
            message: 'Nienix Gameserver',
            id: 'service.gameserver-nienix.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/nienix-server-hosting/',
            id: 'service.gameserver-nienix.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.94€`,
    },
    'gameserver-nightingale': {
        title: translate({
            message: 'Nightingale Gameserver',
            id: 'service.gameserver-nightingale.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/nightingale-server-hosting/',
            id: 'service.gameserver-nightingale.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.94€`,
    },
    'gameserver-nmrih': {
        title: translate({
            message: 'No More Room In Hell Gameserver',
            id: 'service.gameserver-nmrih.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/no-more-room-in-hell-server-hosting/',
            id: 'service.gameserver-nmrih.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.56€`,
    },
    'gameserver-noonesurvived': {
        title: translate({
            message: 'No One Survived Gameserver',
            id: 'service.gameserver-noonesurvived.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/no-one-survived-server-hosting/',
            id: 'service.gameserver-noonesurvived.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-ohol': {
        title: translate({
            message: 'One Hour One Life Gameserver',
            id: 'service.gameserver-ohol.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/one-hour-one-life-server-hosting/',
            id: 'service.gameserver-ohol.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.80€`,
    },
    'gameserver-openmp': {
        title: translate({
            message: 'Open.mp Gameserver',
            id: 'service.gameserver-openmp.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/open-mp-server-hosting/',
            id: 'service.gameserver-openmp.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.00€`,
    },
    'gameserver-openttd': {
        title: translate({
            message: 'OpenTTD Gameserver',
            id: 'service.gameserver-openttd.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/openttd-server-hosting/',
            id: 'service.gameserver-openttd.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.90€`,
    },
    'gameserver-ohd': {
        title: translate({
            message: 'Operation: Harsh Doorstop Gameserver',
            id: 'service.gameserver-ohd.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/operation-harsh-doorstop-server-hosting/',
            id: 'service.gameserver-ohd.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.32€`,
    },
    'gameserver-ootow': {
        title: translate({
            message: 'Outlaws of the Old West Gameserver',
            id: 'service.gameserver-ootow.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/outlaws-of-the-old-west-server-hosting/',
            id: 'service.gameserver-ootow.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 11.04€`,
    },
    'gameserver-palworld': {
        title: translate({
            message: 'Palworld Gameserver',
            id: 'service.gameserver-palworld.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/palworld-server-hosting/',
            id: 'service.gameserver-palworld.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.14€`,
    },
    'gameserver-pathoftitans': {
        title: translate({
            message: 'Path of Titans Gameserver',
            id: 'service.gameserver-pathoftitans.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/path-of-titans-server-hosting/',
            id: 'service.gameserver-pathoftitans.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 0.00€`,
    },
    'gameserver-pixark': {
        title: translate({
            message: 'PixARK Gameserver',
            id: 'service.gameserver-pixark.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/pixark-server-hosting/',
            id: 'service.gameserver-pixark.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-portalknights': {
        title: translate({
            message: 'Portal Knights Gameserver',
            id: 'service.gameserver-portalknights.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/portal-knights-server-hosting/',
            id: 'service.gameserver-portalknights.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.60€`,
    },
    'gameserver-projectzomboid': {
        title: translate({
            message: 'Project Zomboid Gameserver',
            id: 'service.gameserver-projectzomboid.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/project-zomboid-server-hosting/',
            id: 'service.gameserver-projectzomboid.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-redm': {
        title: translate({
            message: 'RedM Gameserver',
            id: 'service.gameserver-redm.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/redm-server-hosting/',
            id: 'service.gameserver-redm.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-reignofkings': {
        title: translate({
            message: 'Reign of Kings Gameserver',
            id: 'service.gameserver-reignofkings.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/reign-of-kings-server-hosting/',
            id: 'service.gameserver-reignofkings.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-renown': {
        title: translate({
            message: 'Renown Gameserver',
            id: 'service.gameserver-renown.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/renown-server-hosting/',
            id: 'service.gameserver-renown.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 11.90€`,
    },
    'gameserver-rimworldtogether': {
        title: translate({
            message: 'RimWorld Together Gameserver',
            id: 'service.gameserver-rimworldtogether.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/rimworld-together-server-hosting/',
            id: 'service.gameserver-rimworldtogether.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 1.98€`,
    },
    'gameserver-risingstorm2': {
        title: translate({
            message: 'Rising Storm 2 Gameserver',
            id: 'service.gameserver-risingstorm2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/rising-storm-2-server-hosting/',
            id: 'service.gameserver-risingstorm2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 8.28€`,
    },
    'gameserver-risingworld': {
        title: translate({
            message: 'Rising World Gameserver',
            id: 'service.gameserver-risingworld.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/rising-world-server-hosting/',
            id: 'service.gameserver-risingworld.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-riskofrain2': {
        title: translate({
            message: 'Risk of Rain 2 Gameserver',
            id: 'service.gameserver-riskofrain2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/risk-of-rain-2-server-hosting/',
            id: 'service.gameserver-riskofrain2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.96€`,
    },
    'gameserver-rust': {
        title: translate({
            message: 'Rust Gameserver',
            id: 'service.gameserver-rust.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/rust-server-hosting/',
            id: 'service.gameserver-rust.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 8.64€`,
    },
    'gameserver-sanctuaryisland': {
        title: translate({
            message: 'Sanctuary Island Gameserver',
            id: 'service.gameserver-sanctuaryisland.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/sanctuary-island-server-hosting/',
            id: 'service.gameserver-sanctuaryisland.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.90€`,
    },
    'gameserver-satisfactory': {
        title: translate({
            message: 'Satisfactory Gameserver',
            id: 'service.gameserver-satisfactory.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/satisfactory-server-hosting/',
            id: 'service.gameserver-satisfactory.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.60€`,
    },
    'gameserver-scp5k': {
        title: translate({
            message: 'SCP: 5K Gameserver',
            id: 'service.gameserver-scp5k.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/scp-5k-server-hosting/',
            id: 'service.gameserver-scp5k.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.90€`,
    },
    'gameserver-scp-containmentbreach': {
        title: translate({
            message: 'SCP: Containment Breach Gameserver',
            id: 'service.gameserver-scp-containmentbreach.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/scp-containment-breach-server-hosting/',
            id: 'service.gameserver-scp-containmentbreach.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.90€`,
    },
    'gameserver-scp-escapetogether': {
        title: translate({
            message: 'SCP: Escape Together Gameserver',
            id: 'service.gameserver-scp-escapetogether.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/scp-escape-together-server-hosting/',
            id: 'service.gameserver-scp-escapetogether.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.76€`,
    },
    'gameserver-scp': {
        title: translate({
            message: 'SCP: Secret Laboratory Gameserver',
            id: 'service.gameserver-scp.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/scp-secret-laboratory-server-hosting/',
            id: 'service.gameserver-scp.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.76€`,
    },
    'gameserver-scum': {
        title: translate({
            message: 'SCUM Gameserver',
            id: 'service.gameserver-scum.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/scum-server-hosting/',
            id: 'service.gameserver-scum.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 17.80€`,
    },
    'gameserver-skyrim-together-reborn': {
        title: translate({
            message: 'Skyrim Together Reborn Gameserver',
            id: 'service.gameserver-skyrim-together-reborn.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/skyrim-together-reborn-server-hosting/',
            id: 'service.gameserver-skyrim-together-reborn.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.16€`,
    },
    'gameserver-soldat': {
        title: translate({
            message: 'Soldat Gameserver',
            id: 'service.gameserver-soldat.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/soldat-server-hosting/',
            id: 'service.gameserver-soldat.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.00€`,
    },
    'gameserver-sonsoftheforest': {
        title: translate({
            message: 'Sons of the Forest Gameserver',
            id: 'service.gameserver-sonsoftheforest.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/sons-of-the-forest-server-hosting/',
            id: 'service.gameserver-sonsoftheforest.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.12€`,
    },
    'gameserver-soulmask': {
        title: translate({
            message: 'Soulmask Gameserver',
            id: 'service.gameserver-soulmask.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/soulmask-server-hosting/',
            id: 'service.gameserver-soulmask.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 10.90€`,
    },
    'gameserver-spaceengineers': {
        title: translate({
            message: 'Space Engineers Gameserver',
            id: 'service.gameserver-spaceengineers.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/space-engineers-server-hosting/',
            id: 'service.gameserver-spaceengineers.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.90€`,
    },
    'gameserver-squad': {
        title: translate({
            message: 'Squad Gameserver',
            id: 'service.gameserver-squad.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/squad-server-hosting/',
            id: 'service.gameserver-squad.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-starbound': {
        title: translate({
            message: 'Starbound Gameserver',
            id: 'service.gameserver-starbound.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/starbound-server-hosting/',
            id: 'service.gameserver-starbound.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-starmade': {
        title: translate({
            message: 'Starmade Gameserver',
            id: 'service.gameserver-starmade.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/starmade-server-hosting/',
            id: 'service.gameserver-starmade.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.90€`,
    },
    'gameserver-starrupture': {
        title: translate({
            message: 'StarRupture Gameserver',
            id: 'service.gameserver-starrupture.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/starrupture-server-hosting/',
            id: 'service.gameserver-starrupture.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.76€`,
    },
    'gameserver-staxel': {
        title: translate({
            message: 'Staxel Gameserver',
            id: 'service.gameserver-staxel.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/staxel-server-hosting/',
            id: 'service.gameserver-staxel.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.16€`,
    },
    'gameserver-stormworks': {
        title: translate({
            message: 'Stormworks Gameserver',
            id: 'service.gameserver-stormworks.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/stormworks-server-hosting/',
            id: 'service.gameserver-stormworks.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.76€`,
    },
    'gameserver-subsistence': {
        title: translate({
            message: 'Subsistence Gameserver',
            id: 'service.gameserver-subsistence.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/subsistence-server-hosting/',
            id: 'service.gameserver-subsistence.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.52€`,
    },
    'gameserver-sunkenland': {
        title: translate({
            message: 'Sunkenland Gameserver',
            id: 'service.gameserver-sunkenland.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/sunkenland-server-hosting/',
            id: 'service.gameserver-sunkenland.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.97€`,
    },
    'gameserver-tf2': {
        title: translate({
            message: 'Team Fortress 2 Gameserver',
            id: 'service.gameserver-tf2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/team-fortress-2-server-hosting/',
            id: 'service.gameserver-tf2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.50€`,
    },
    'gameserver-teeworlds': {
        title: translate({
            message: 'Teeworlds Gameserver',
            id: 'service.gameserver-teeworlds.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/teeworlds-server-hosting/',
            id: 'service.gameserver-teeworlds.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.60€`,
    },
    'gameserver-terraria': {
        title: translate({
            message: 'Terraria Gameserver',
            id: 'service.gameserver-terraria.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/terraria-server-hosting/',
            id: 'service.gameserver-terraria.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 5.52€`,
    },
    'gameserver-terratech-worlds': {
        title: translate({
            message: 'Terratech Worlds Gameserver',
            id: 'service.gameserver-terratech-worlds.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/terratech-worlds-server-hosting/',
            id: 'service.gameserver-terratech-worlds.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 3.96€`,
    },
    'gameserver-thebus': {
        title: translate({
            message: 'The Bus Gameserver',
            id: 'service.gameserver-thebus.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/the-bus-server-hosting/',
            id: 'service.gameserver-thebus.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.97€`,
    },
    'gameserver-thefront': {
        title: translate({
            message: 'The Front Gameserver',
            id: 'service.gameserver-thefront.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/the-front-server-hosting/',
            id: 'service.gameserver-thefront.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-theisle': {
        title: translate({
            message: 'The Isle Gameserver',
            id: 'service.gameserver-theisle.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/the-isle-server-hosting/',
            id: 'service.gameserver-theisle.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-lotr-rtm': {
        title: translate({
            message: 'The Lord of the Rings: RTM Gameserver',
            id: 'service.gameserver-lotr-rtm.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/lotr-return-to-moria-server-hosting/',
            id: 'service.gameserver-lotr-rtm.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 8.80€`,
    },
    'gameserver-unturned': {
        title: translate({
            message: 'Unturned Gameserver',
            id: 'service.gameserver-unturned.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/unturned-3-server-hosting/',
            id: 'service.gameserver-unturned.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-vrising': {
        title: translate({
            message: 'V Rising Gameserver',
            id: 'service.gameserver-vrising.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/v-rising-server-hosting/',
            id: 'service.gameserver-vrising.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 6.90€`,
    },
    'gameserver-valheim': {
        title: translate({
            message: 'Valheim Gameserver',
            id: 'service.gameserver-valheim.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/valheim-server-hosting/',
            id: 'service.gameserver-valheim.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-vein': {
        title: translate({
            message: 'Vein Gameserver',
            id: 'service.gameserver-vein.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/vein-server-hosting/',
            id: 'service.gameserver-vein.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 7.90€`,
    },
    'gameserver-veloren': {
        title: translate({
            message: 'Veloren Gameserver',
            id: 'service.gameserver-veloren.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/veloren-server-hosting/',
            id: 'service.gameserver-veloren.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 2.76€`,
    },
    'gameserver-vintagestory': {
        title: translate({
            message: 'Vintage Story Gameserver',
            id: 'service.gameserver-vintagestory.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/vintage-story-server-hosting/',
            id: 'service.gameserver-vintagestory.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 0.00€`,
    },
    'gameserver-voyagers-of-nera': {
        title: translate({
            message: 'Voyagers of Nera Gameserver',
            id: 'service.gameserver-voyagers-of-nera.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/voyagers-of-nera-server-hosting/',
            id: 'service.gameserver-voyagers-of-nera.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.14€`,
    },
    'gameserver-wreckfest': {
        title: translate({
            message: 'Wreckfest Gameserver',
            id: 'service.gameserver-wreckfest.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/wreckfest-server-hosting/',
            id: 'service.gameserver-wreckfest.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.90€`,
    },
    'gameserver-wreckfest2': {
        title: translate({
            message: 'Wreckfest 2 Gameserver',
            id: 'service.gameserver-wreckfest2.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/wreckfest-2-server-hosting/',
            id: 'service.gameserver-wreckfest2.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.90€`,
    },
    'gameserver-wurmunlimited': {
        title: translate({
            message: 'Wurm Unlimited Gameserver',
            id: 'service.gameserver-wurmunlimited.title',
            description: 'Product name for the gameserver product',
        }),
        url: translate({
            message: '{marketingSite}/{language}/wurm-unlimited-server-hosting/',
            id: 'service.gameserver-wurmunlimited.path',
            description: 'URL path for the gameserver product',
        }),
        price: `${priceFrom} 4.90€`,
    },
};

export default servicesMap;
