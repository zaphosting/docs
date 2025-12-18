---
id: redm-prohibited-resources
title: "RedM: 'Resource bevat verboden logica?'"
description: "Leer hoe je je server beschermt tegen kwaadaardige RedM-resources en zorg voor een veilige, vloeiende gameplay → Ontdek het nu"
sidebar_label: Resource bevat verboden logica
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

De makers van RedM-resources hebben de afgelopen jaren flink geïnvesteerd in het beschermen van hun broncode met technieken zoals obfuscatie, IP-locking, remote code loading en meer. Helaas zorgen deze maatregelen vaak voor problemen, waar velen al van weten. Sommige van deze tools vertragen niet alleen de performance flink, maar brengen ook serieuze security-risico’s met zich mee.

Cfx.re is daarom begonnen met het blokkeren van kwaadaardige resources die code bevatten die servers en andere resources probeert te infecteren. Deze resources proberen soms hun code te “verspreiden” naar andere resources om zo derden toegang te geven tot scripts en databases. Het is belangrijk om te weten dat deze resources eigenlijk te vergelijken zijn met virussen en dus een serieuze bedreiging vormen.

<InlineVoucher />



## Wat betekent dit?

Ons systeem checkt alle resources vóór het opstarten om bovenstaande security-redenen en schakelt alle resources uit die als gevaarlijk worden herkend. Deze stap is echt noodzakelijk, dus helaas is er geen ruimte voor uitzonderingen. Veiligheid gaat voor alles!

Als één van jouw geüploade resources hier last van heeft, zie je in de serverconsole extra info hierover. Zo’n melding kan er bijvoorbeeld zo uitzien:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Wat nu?

Als eerste en belangrijkste stap raden we aan om alle kwaadaardige resources direct te verwijderen. Installeer daarnaast alleen resources die je van betrouwbare bronnen hebt gehaald. Een goede plek om te beginnen is bijvoorbeeld de officiële website of het [RedM Forum](https://forum.cfx.re/c/development/releases/7). Daar vind je een brede selectie aan resources.

Ben je developer of heb je contact met een developer? Check dan zeker het **RedM Asset Escrow systeem**, ontwikkeld door Cfx.re samen met **Tebex**. Meer info vind je in de officiële [Cfx.re Forum post](https://forum.cfx.re/t/introducing-redm-asset-escrow/5303450).



## Verboden resources

Er is helaas geen officiële lijst met resources die deze melding kunnen veroorzaken. In principe moet je resources vermijden die andere obfuscatie-methodes gebruiken of niet gebaseerd zijn op het RedM Asset Escrow systeem.



## Conclusie
Wil je een veilige en stabiele serveromgeving? Gebruik dan alleen vertrouwde resources en verwijder verdachte resources meteen. Door deze richtlijnen te volgen en het RedM Asset Escrow systeem te gebruiken, help je de veiligheid en compliance binnen het RedM-ecosysteem te waarborgen. Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />