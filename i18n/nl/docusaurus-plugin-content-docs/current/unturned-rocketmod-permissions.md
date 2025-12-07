---
id: unturned-rocketmod-permissions
title: "Unturned: Server permissies aanpassen"
description: "Leer hoe je server permissies effectief beheert en aanpast voor betere controle en veiligheid → Ontdek het nu"
sidebar_label: Permissies aanpassen
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Voorbereidingen
Om de benodigde config-bestanden door de server te laten aanmaken, moet de server eerst gestart worden.  
Als de server online is, kun je hem daarna weer stoppen.  
Want dan zijn alle benodigde bestanden die wij of de server nodig hadden, aangemaakt.

## Open de Config
De permissies worden opgeslagen in het bestand "Permissions.config.xml".  
Je kunt dit bestand eenvoudig bekijken en aanpassen via onze interface.  
Klik gewoon op het tabblad "Configs" in de interface van je server:

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

De config heet "Rocket Permissions" en kan geopend worden door op het blauwe potloodje te klikken om te bewerken:

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## De Config begrijpen
De config ziet er op het eerste gezicht ingewikkeld en complex uit.  
Wij helpen je het te begrijpen!  
Het bestand is verdeeld in verschillende groepen.  
De groepen worden allemaal weergegeven en opgesomd in de <groups> </groups> sectie.  
Begint met "<groups>" en eindigt met "</groups>":

Begin:

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

Einde:

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

De groepen staan er dus tussenin.  
Bijvoorbeeld, dit hele blok vertegenwoordigt één groep:

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

Waarin alle benodigde parameters aan de groep worden toegewezen.

## Permissies aanpassen
Binnen de groep vind je ook de "Permissions" sectie.  
Zoals je in deze screenshot ziet:

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

Daar kunnen we nu de permissies van de groep aanpassen.  
En ook de wachttijd instellen voordat een commando weer gebruikt kan worden.  
Stel, we willen de groep het recht geven om spelers te bannen.  
Dan kunnen we het volgende invoeren:

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

Dit betekent dat de groep nu spelers in-game kan bannen, en omdat de "cool down" op 0 seconden staat, kan dit continu gebeuren.

Als we de groep ook het recht willen geven om zichzelf te genezen, kan dat zo:

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

De gebruiker kan het commando dan echter maar elke 3600 seconden gebruiken.  
De werkwijze is hetzelfde voor andere rechten.  
Voor sommige permissies zijn wel de bijbehorende plug-ins nodig.

## Gebruikers aan de groep toevoegen
De groepen zijn nu aangemaakt met de gewenste permissies.  
Maar nu moeten er gebruikers aan de groep worden toegewezen.  
Hiervoor heb je de Steam64ID van de gebruikers nodig.  
Die kun je opzoeken via deze link:  
https://steamid.io/

Als je de Steam64ID hebt, kun je die in de config invoeren.  
Dat doe je hier met de Member parameter:

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

Dat ziet er in een voorbeeld zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

Je moet dus altijd een nieuwe regel maken voor elke nieuwe gebruiker die aan de groep moet worden toegevoegd.  
Als je alle gewenste gebruikers hebt toegevoegd, sla je de config op door op de knop "Save" te klikken.  
Start daarna de server en je bent in-game aan de groep toegewezen!

<InlineVoucher />