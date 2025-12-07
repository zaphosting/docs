---
id: vserver-windows-ts6
title: "VPS: Teamspeak 6 Server installeren op je Windows VPS"
description: "Ontdek hoe je de TeamSpeak 6 Server beta installeert en optimaliseert voor soepel hosten en top prestaties → Leer het nu"
sidebar_label: Teamspeak 6 Server installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In de zomer van 2025 bracht TeamSpeak de **Beta versie** van de **TeamSpeak 6 Server** uit. Ervaar nu zelf de volgende generatie TeamSpeak!

Wil je deze service zelf hosten? We nemen je stap voor stap mee in het installatie- en configuratieproces, inclusief alles wat je moet weten.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Vereisten

Voordat je de **Teamspeak 6 Server** installeert, check je of je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimaal    | ZAP-Hosting Aanbeveling   |
| ---------- | ----------- | ------------------------- |
| CPU        | 1 vCPU Core | 4 vCPU Cores              |
| RAM        | 1 GB        | 4 GB                      |
| Schijfruimte | 1 GB       | 25 GB                     |



## Voorbereiding

Voordat je de **TeamSpeak 6 Server** installeert, moet je je systeem klaarmaken. Zorg dat je systeem up-to-date is met de nieuwste software en beveiligingsupdates door eerst een systeemupdate uit te voeren.

Zo weet je zeker dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.




## Installatie
Nu aan alle eisen is voldaan en de voorbereidingen zijn getroffen, kun je de Teamspeak 6 Server installeren. Download eerst het nieuwste releasebestand `http://teamspeak-server_win64-v6.0.0-beta6.zip/` van GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Pak het bestand uit in een map naar keuze. Open **PowerShell** en navigeer naar de map waar je de serverbestanden hebt uitgepakt. Start de server met:

```
.\tsserver.exe
```

Bij de eerste start verschijnt een venster met de licentieovereenkomst die je moet accepteren. Daarna worden de Server Query Admin Account gegevens en de privilege key getoond. Deze info verschijnt maar één keer, dus sla ze goed op.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Na bevestiging draait de TeamSpeak 6 Server al op de achtergrond en is klaar voor gebruik.

##### 

## Configuratie

Je kunt extra instellingen voor de **TeamSpeak 6 Server** aanpassen via **command-line arguments**. Deze opties geef je mee bij het starten van de server. Een volledige lijst met opties vind je in de officiële [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) documentatie. Bijvoorbeeld:

```
./tsserver --default-voice-port 9987
```



## Verbinding maken

Als de TeamSpeak 6 Server draait, kun je verbinden met de TeamSpeak 6 Client. Gebruik simpelweg het IP-adres van je server en de juiste poort. Vul deze gegevens in de client in om verbinding te maken en te testen.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusie en meer bronnen

Gefeliciteerd! Je hebt nu succesvol de Teamspeak 6 Server geïnstalleerd en geconfigureerd op je VPS. We raden je ook aan om deze bronnen te checken voor extra hulp en tips tijdens je serverconfiguratie:

- [Officiële Website](https://teamspeak.com/en/) - Info en downloads voor TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) - Support en discussies van gebruikers
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Bugs melden en openstaande issues volgen

Heb je nog vragen die hier niet beantwoord worden? Neem gerust contact op met onze support, we staan dagelijks voor je klaar om je te helpen! 🙂