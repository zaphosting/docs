---
id: 7d2d-crossplay
title: "7 Days to Die: Crossplay inschakelen voor console- en pc-spelers"
description: "Leer hoe je jouw 7 Days to Die-server configureert om crossplay tussen pc- en console-spelers te ondersteunen → Lees nu meer"
sidebar_label: Crossplay inschakelen
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Met de nieuwere versies van **7 Days to Die** kunnen spelers van **pc en ondersteunde consoleplatforms** samen op dezelfde server spelen dankzij crossplay. Zo kan je community samen gamen, ongeacht welk platform ze gebruiken.

Om crossplay mogelijk te maken, moeten er een paar instellingen op de server worden aangepast. Deze zorgen ervoor dat de server compatibel is met console-verbindingen en correct geregistreerd wordt via Epic Online Services.

<InlineVoucher />



## Configuratie

De crossplay-configuratie vind je in het bestand `serverconfig-zap.xml`. Om dit bestand te bewerken, open je je **gameserver administratie** en ga je naar **Configs**. Zoek en open het configuratiebestand `serverconfig-zap.xml`.

Zorg dat de volgende instellingen in het bestand correct staan:

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

Deze parameters zijn essentieel voor crossplay-compatibiliteit. De `ServerMaxPlayerCount` mag niet hoger zijn dan **8 spelers**, omdat console crossplay momenteel maximaal acht deelnemers ondersteunt. De optie `ServerAllowCrossplay` moet aanstaan zodat console-spelers kunnen joinen.

Daarnaast moet `EACEnabled` ingeschakeld blijven, want crossplay maakt gebruik van **Epic Online Services en Easy Anti-Cheat** voor authenticatie en matchmaking. De waarde van `IgnoreEOSSanctions` moet op `false` blijven staan zodat EOS-beperkingen correct worden gehandhaafd tijdens cross-platform sessies.

Na het aanpassen van de instellingen, sla je het bestand op en **herstart je server** zodat de nieuwe instellingen actief worden.



## Belangrijke opmerkingen

Crossplay werkt alleen als alle spelers een compatibele gameversie draaien. Servers met niet-ondersteunde mods of sterk aangepaste configuraties kunnen voorkomen dat console-spelers kunnen verbinden. Als console-spelers de server niet kunnen vinden of joinen, controleer dan of de crossplay-instellingen kloppen en of de server draait op de laatste ondersteunde versie.



## Conclusie

Gefeliciteerd! Je hebt je **7 Days to Die-server succesvol geconfigureerd voor crossplay**, waardoor pc- en console-spelers samen in dezelfde wereld kunnen spelen. Met de juiste serverinstellingen kan je community nu platformonafhankelijk samen gamen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />