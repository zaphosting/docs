---
id: fivem-change-servericon
title: "FiveM: Serverlijst-icoon wijzigen"
description: "Ontdek hoe je jouw FiveM-server kunt personaliseren met een uniek 96x96 PNG-icoon om de identiteit van je server te versterken → Leer het nu"
sidebar_label: Servericoon wijzigen
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Wil je je server personaliseren en je eigen custom icoon instellen voor je server? Dat kan super makkelijk! In deze gids leer je hoe je een afbeelding voorbereidt en instelt als jouw nieuwe custom servericoon.

<InlineVoucher />

## Voorbereiding
Om een custom servericoon in te stellen voor je FiveM-server, moet je eerst een afbeelding klaarmaken die 96x96 pixels groot is en in PNG-formaat (`.png` bestandsextensie) is. We raden aan om een beeldbewerkingsprogramma zoals GIMP te gebruiken, of gewoon een online tool om je bestaande afbeelding te resizen en te converteren. Zodra je een afbeelding hebt die aan deze eisen voldoet, ben je klaar om ‘m te uploaden en in je serverconfig te zetten.

## Installatie

### Bestanden uploaden

De volgende stap is om je klaargemaakte afbeelding te uploaden naar je FiveM gameserver via FTP. Als je niet bekend bent met FTP, check dan zeker even onze [FTP toegang](gameserver-ftpaccess.md) gids.

Als je bent ingelogd via FTP, navigeer dan naar `gXXXXXX/fivem/JOUW_FRAMEWORK/` en upload je servericoon daar. In dit voorbeeld gebruiken we de CFX standaard template. Upload het bestand naar jouw eigen framework map. Zorg dat je onthoudt hoe het bestand heet.

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### Activeren

Om ervoor te zorgen dat het icoon geladen wordt bij het opstarten van de server, moet je het nu instellen in het `server.cfg` bestand van je server, onder de parameter `load_server_icon`. Bijvoorbeeld, als je icoon `zaphosting96x96` heet, ziet de regel er zo uit:

```
# Servericoon laden (96x96 PNG bestand)
load_server_icon zaphosting96x96.png
```

:::info
Let erop dat de bestandsnaam in de command exact overeenkomt met de naam van het bestand dat je hebt geüpload. Hoofdlettergevoeligheid telt mee!
:::

## Conclusie

Als je alle stappen hebt gevolgd, zou je nieuwe servericoon zichtbaar moeten zijn zodra je de server opnieuw opstart. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />