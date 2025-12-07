---
id: fivem-editlocalfiles
title: "FiveM: Locales-bestanden (Taalvariabelen)"
description: "Leer hoe je de taalvariabelen van je resource aanpast en extra talen toevoegt voor een persoonlijke ervaring → Ontdek het nu"
sidebar_label: Locales-bestanden (Taal)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Wil je de taalvariabelen van een resource aanpassen of extra talen toevoegen die er nog niet zijn? De locale-bestanden geven je de mogelijkheid om de taalvariabelen van jouw gewenste resource te wijzigen. 

<InlineVoucher />



## Vind de Locales-bestanden

De locale-bestanden moet je bewerken via een FTP-client. Ben je nieuw met FTP? Dan raden we je aan eerst de [FTP-toegang](gameserver-ftpaccess.md) gids te lezen. Zodra je verbonden bent, navigeer je naar de ESX resource map van de resource die je wilt aanpassen. Open de locales-map in de resource directory. 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

In de locales-map vind je alle taalbestanden die voor deze resource beschikbaar zijn. Vanaf hier kun je een bestaand bestand aanpassen of een bestaand bestand kopiëren onder een nieuwe naam voor een nieuwe taal, die je vervolgens kunt bewerken. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Locales-bestand Bewerken

Je kunt nu de inhoud van de individuele taalvariabelen in het geopende locale-bestand aanpassen. De inhoud van de taalvariabelen staat achter het gelijkteken tussen aanhalingstekens. Pas de inhoud aan naar wens en sla de wijzigingen op als laatste stap. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Stel de Locale (Taal) in

De gebruikte taal kun je instellen via het configuratiebestand `config.lua` in de resource directory. Pas hiervoor de waarde van `Config.Locale = GetConvar('esx:locale', 'en')` aan. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Conclusie

Gefeliciteerd! Als je alle stappen hebt gevolgd, heb je succesvol het locale-bestand van je resource aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />