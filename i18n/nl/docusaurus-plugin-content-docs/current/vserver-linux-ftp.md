---
id: vserver-linux-ftp
title: "VPS: FTP-service niet beschikbaar (GS/TS3 Interface)"
description: "Leer hoe je FTP-toegang op je VPS kunt herstellen wanneer game- of Teamspeak-servers niet bereikbaar zijn → Ontdek het nu"
sidebar_label: FTP-service niet beschikbaar
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Gameserver- en Teamspeak 3-diensten die via de GS/TS3 interface worden aangemaakt, zijn volledig beheerde services. FTP-toegang wordt geregeld via de interface en de onderliggende infrastructuur. Als FTP-toegang niet mogelijk is, ligt de oorzaak meestal bij de status van de service, interne configuratie of infrastructuurproblemen, en niet aan de instellingen van je lokale FTP-client.



:::warning FTP-service via de GS/TS3 interface
Deze handleiding geldt alleen voor de FTP-service die automatisch wordt geïnstalleerd en beheerd wanneer je de GS/TS3 interface gebruikt. Als de GS/TS3 interface niet geïnstalleerd is, wordt er standaard geen FTP-server op het systeem gezet. In dat geval is FTP-toegang niet beschikbaar, tenzij je zelf handmatig een FTP-service installeert.
:::

<InlineVoucher />



## Check de ProFTPD status via SSH

Verbind met je server via SSH of de console en check de status van de FTP-service met dit commando:

```
service proftpd status
```

De output laat zien of de ProFTPD-service draait. Als de service als actief of running wordt weergegeven, is de FTP-service beschikbaar en zou die verbindingen moeten accepteren. In dat geval ligt het probleem meestal niet aan de FTP-daemon zelf, maar aan toeganggegevens, firewallregels of de clientconfiguratie.

Als de status als inactive, dead of stopped wordt weergegeven, draait de FTP-service niet. Zolang de service gestopt is, kunnen er geen FTP-verbindingen worden gemaakt.

## FTP-service herstarten

Als de ProFTPD-service niet draait, kun je ‘m handmatig starten met:

```
service proftpd restart
```

Check na het starten of herstarten altijd opnieuw de status om te bevestigen dat ProFTPD goed draait. Als de service na de herstart als actief wordt weergegeven, zou FTP-toegang weer moeten werken.



## Veelvoorkomende oorzaken van FTP-problemen

FTP-problemen ontstaan vaak doordat de FTP-service niet draait of gestopt is na een reboot of update. Configuratiefouten kunnen ook voorkomen dat ProFTPD succesvol start. Soms gebruikt een andere service al poort 21, waardoor de FTP-service niet kan binden aan de benodigde poort. Tijdelijke systeem- of serviceproblemen kunnen er ook voor zorgen dat de FTP-service onverwacht stopt.

Als ProFTPD niet gestart kan worden of meteen weer stopt na het starten, is verder onderzoek nodig. In zo’n geval is het slim om de systeemlogs te checken of contact op te nemen met onze support.



## Conclusie



FTP-toegang voor GS/TS3 gameserver-services wordt exclusief beheerd via de GS/TS3 interface. Als de standaardchecks het probleem niet oplossen, is het tijd om support in te schakelen. Hoe completer en nauwkeuriger je info aanlevert, hoe sneller we je kunnen helpen. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂



<InlineVoucher />