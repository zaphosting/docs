---
id: vserver-windows-ts6
title: "Sätt upp TeamSpeak 6 Server på en Windows Server - Kör din egen röstplattform"
description: "Upptäck hur du installerar och optimerar TeamSpeak 6 Server beta för smidig hosting och prestanda → Läs mer nu"
sidebar_label: Installera Teamspeak 6 Server
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Sommaren 2025 släppte TeamSpeak **Beta-versionen** av **TeamSpeak 6 Server**. Nu kan du testa nästa generation av TeamSpeak på riktigt!

Fundera på att hosta tjänsten själv? Vi guidar dig steg för steg hur du installerar och konfigurerar den, plus allt du behöver ha koll på.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Förutsättningar

Innan du installerar **Teamspeak 6 Server**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara   | Minimum      | ZAP-Hosting Rekommenderar |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU-kärna | 4 vCPU-kärnor             |
| RAM        | 1 GB         | 4 GB                      |
| Diskutrymme| 1 GB         | 25 GB                     |



## Förberedelser

Innan du sätter upp **TeamSpeak 6 Server** behöver du förbereda systemet. För att säkerställa att din server kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet.

Det garanterar att du har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.




## Installation
När alla krav är uppfyllda och förberedelserna klara kan du köra igång med installationen av Teamspeak 6 Server. För att installera TeamSpeak 6 Server, ladda först ner senaste releasen `http://teamspeak-server_win64-v6.0.0-beta6.zip/` från GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Packa sedan upp filen i en valfri mapp. Öppna **PowerShell** och navigera till mappen där du packade upp serverfilerna. Starta servern genom att köra:

```
.\tsserver.exe
```

Vid första uppstart visas ett fönster med licensavtalet som du måste acceptera. Därefter visas Server Query Admin-kontots inloggningsuppgifter och privilegienyckeln. Dessa visas bara en gång, så spara dem säkert.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

När du bekräftat detta kör TeamSpeak 6 Server redan i bakgrunden och är redo att användas.

##### 

## Konfiguration

Du kan även justera fler inställningar för **TeamSpeak 6 Server** via **kommandoradsargument**. Alternativ skickas direkt när du startar servern. En komplett lista på tillgängliga alternativ finns i den officiella [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) dokumentationen. Exempel:

```
./tsserver --default-voice-port 9987
```



## Anslutning

När TeamSpeak 6 Server är igång kan du ansluta med TeamSpeak 6 Client. Använd bara IP-adressen till din server tillsammans med rätt port. Fyll i dessa uppgifter i klienten för att koppla upp dig och börja testa.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Teamspeak 6 Server på din VPS/Dedikerade Server. Vi rekommenderar också att du kollar in följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration:

- [Officiell Webbplats](https://teamspeak.com/en/) - Info och nedladdningar för TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) - Support och diskussioner
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Rapportera buggar och följ öppna ärenden

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂