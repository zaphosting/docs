---
id: fivem-prohibited-resources
title: "FiveM: 'Resource bevat verboden logica?'"
description: "Ontdek hoe je jouw FiveM-server beschermt tegen kwaadaardige resources en zorgt voor veilige, high-performance gameplay → Leer nu meer"
sidebar_label: Resource bevat verboden logica
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

De ontwikkelaars van FiveM-resources hebben de afgelopen jaren flink geïnvesteerd in het beschermen van hun broncode met technieken zoals obfuscatie, IP-locking, remote code loading en andere methodes. Helaas zorgen deze maatregelen vaak voor problemen, waar velen al van op de hoogte zijn. Sommige van deze tools vertragen niet alleen de prestaties van de code flink, maar brengen ook tal van beveiligingsrisico’s met zich mee.

Cfx.re is daarom begonnen met het blokkeren van kwaadaardige resources die code bevatten die bedoeld is om servers en andere resources te infecteren. Deze resources proberen soms hun code te “verspreiden” naar andere resources om derden toegang te geven tot scripts en databases. Het is belangrijk om te weten dat deze resources eigenlijk te vergelijken zijn met virussen en dus een serieuze bedreiging vormen.

<InlineVoucher />



## Betekenis

Ons systeem checkt alle resources vóór het opstartproces om bovengenoemde beveiligingsredenen en schakelt alle resources uit die als gevaarlijk worden herkend. Deze stap is absoluut noodzakelijk, daarom is er helaas geen ruimte voor uitzonderingen. Veiligheid gaat voor alles!

Als een van jouw geüploade resources wordt geblokkeerd, geeft de serverconsole extra info hierover. De inhoud van deze melding kan er bijvoorbeeld zo uitzien:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Hoe verder?

Als eerste en belangrijkste stap raden we aan om alle kwaadaardige resources direct te verwijderen. Daarnaast moet je alleen resources installeren die afkomstig zijn van betrouwbare bronnen. Een goede plek om te beginnen is bijvoorbeeld de officiële website of het [Forum](https://forum.cfx.re/c/development/releases/7) van FiveM. Daar vind je een brede selectie aan resources.

Als ontwikkelaar of als je contact hebt met een ontwikkelaar, raden we aan om gebruik te maken van het **FiveM Asset Escrow-systeem**, dat door Cfx.re is ontwikkeld in samenwerking met **Tebex**. Meer details vind je in de officiële [Cfx.re Forum post](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151).



## Verboden Resources

Er is helaas geen officiële lijst met resources die deze melding kunnen veroorzaken. In principe moet je resources vermijden die andere obfuscatiemethoden gebruiken of niet gebaseerd zijn op het FiveM Asset Escrow-systeem.



## Conclusie
Om een veilige en stabiele serveromgeving te behouden, is het essentieel om alleen vertrouwde resources te gebruiken en direct alle gemarkeerde resources te verwijderen. Door deze richtlijnen te volgen en het FiveM Asset Escrow-systeem te gebruiken, help je de veiligheid en compliance binnen het FiveM-ecosysteem te waarborgen. Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />