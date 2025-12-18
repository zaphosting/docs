---
id: fivem-locale
title: "FiveM: Taal / locatie (vlag) wijzigen"
description: "Ontdek hoe je de taal en vlag van je FiveM-server aanpast voor een persoonlijke spelerservaring → Leer het nu"
sidebar_label: Taal / locatie (vlag)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

FiveM-servers kunnen in verschillende talen worden weergegeven. Dit geldt zowel voor de weergave van de servervlag in de serverbrowser als voor de taal die actief op de server wordt gebruikt. De taal kan indien gewenst worden aangepast. Zo kun je zelf de taal en landenvlag voor je server kiezen.

![](https://screensaver01.zap-hosting.com/index.php/s/FJZc7pJmppG28mX/preview)

<InlineVoucher />

## Configuratie

De configuratie van de vlag en taal van de server gebeurt via de Locales-optie. De locale-configuratie wordt gedaan via de serverconfig. Dit wordt bepaald door de waarde van het **sets locale** commando. Standaard wordt Engels en Antarctica als locatie (vlag) weergegeven.

### Open het serverconfiguratiebestand

Het serverconfiguratiebestand `server.cfg` is te vinden in de txAdmin interface onder `CFG Editor`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/qDsN5ggCjaaJLS5/preview)



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
De weergave van de servervlag wordt over het algemeen door alle beschikbare landen ondersteund. Niet alle resources bevatten echter alle talen. Zorg er dus voor dat jouw land/taal vooraf wordt ondersteund!
:::



### Pas de inhoud van het serverconfiguratiebestand aan

Als het configuratiebestand geopend is en je hebt de locale/taalcode gevonden, kan de configuratie worden aangepast. Controleer eerst of het **sets locale** commando al bestaat. Zo niet, dan ziet de invoer er zo uit:

```
# Een geldige locale identifier voor de primaire taal van je server.
# Bijvoorbeeld "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# vervang root-AQ op de BOVENSTAANDE regel alsjeblieft door een echte taal! :)
```

De waarde van het **sets locale** commando staat standaard op **root-AQ**. Dit moet je nu aanpassen. Bijvoorbeeld, als je de VS als vlag wilt gebruiken en Engels als taal, gebruik je in dit geval **en-US** als waarde. Sla de wijziging op.


## Conclusie

De laatste stap is om de server te herstarten zodat de wijziging wordt doorgevoerd. Daarna kun je de serverlijst in je FiveM-client verversen en zou je de aanpassing moeten zien. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />