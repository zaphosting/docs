---
id: redm-locale
title: "RedM: Taal / locatie (vlag) wijzigen"
description: "Ontdek hoe je de talen en vlaggen van je RedM-server aanpast voor een betere spelerservaring en lokalisatie → Leer het nu"
sidebar_label: Taal / locatie (vlag)
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RedM-servers kunnen in verschillende talen worden weergegeven. Dit geldt zowel voor de weergave van de vlag van de server in de serverbrowser als voor de taal die actief wordt gebruikt op de server. De taal kan indien nodig worden aangepast. Zo kun je zelf de taal en landenvlag voor jouw server kiezen.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHgoDfcsN4XX8Jb/preview)

<InlineVoucher />

## Configuratie

De configuratie van de vlag en taal van de server gebeurt via de Locales-optie. De locale-configuratie wordt gedaan via de serverconfig. Dit wordt bepaald door de waarde van het **sets locale** commando. Standaard wordt Engels als taal en Antarctica als locatie (vlag) weergegeven.

### Open het serverconfiguratiebestand

Het serverconfiguratiebestand `server.cfg` is te vinden in de txAdmin interface onder `CFG Editor`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/kHeJyeXiKDfSY2c/preview)



### Zoek de locale/taalcode voor jouw taal

De definitie van de taal/weergave gebeurt via de locales (taalcodes/landcodes) gebaseerd op de ISO 639-1/ISO 3166-1 standaarden. We hebben hieronder een kleine lijst met de meest relevante landen/talen samengevat. De volledige lijst is natuurlijk veel groter:

| Land           | Taal       | Locale |
| -------------- | ---------- | ------ |
| Duitsland      | Duits      | de-DE  |
| VS             | Engels     | en-US  |
| Canada         | Engels     | en-CA  |
| Australië      | Engels     | en-AU  |
| Verenigd Koninkrijk | Engels | en-GB  |
| Finland        | Fins       | fi-FI  |
| Frankrijk      | Frans      | fr-FR  |
| Nederland      | Nederlands | nl-NL  |
| Portugal       | Portugees  | pt-PT  |
| Brazilië       | Portugees  | pt-BR  |
| Spanje         | Spaans     | es-ES  |
| Singapore      | Engels     | en-SG  |

:::caution 
De weergave van de servervlag wordt over het algemeen ondersteund voor alle beschikbare landen. Echter, niet alle resources bevatten alle talen. Zorg er dus voor dat jouw land/taal vooraf wordt ondersteund!
:::



### Pas de inhoud van het serverconfiguratiebestand aan

Zodra het configuratiebestand geopend is en je de locale/taalcode hebt bepaald, kan de configuratie worden aangepast. Controleer eerst of het **sets locale** commando al bestaat. Zo niet, dan ziet de invoer er als volgt uit:

```
# Een geldige locale identifier voor de primaire taal van je server.
# Bijvoorbeeld "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# vervang root-AQ op de BOVENSTAANDE regel alsjeblieft door een echte taal! :)
```

De waarde van het **sets locale** commando staat standaard op **root-AQ**. Dit moet je nu aanpassen. Bijvoorbeeld, als je de VS als vlag en Engels als taal wilt gebruiken, dan gebruik je **en-US** als waarde. Sla de wijziging op.


## Conclusie

De laatste stap is om de server te herstarten zodat de wijziging wordt doorgevoerd. Daarna kun je de serverlijst in je RedM-client vernieuwen en zou je de aanpassing moeten zien. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />