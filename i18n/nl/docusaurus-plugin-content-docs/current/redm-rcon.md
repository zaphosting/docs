---
id: redm-rcon
title: "RedM: RCON"
description: "Ontdek hoe je RedM gameservers veilig en efficiënt op afstand beheert zonder in-game te zijn → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat gebruikt wordt om gameservers op afstand te beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

Bij RedM wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen RedM monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het eerst ingeschakeld en ingesteld worden. Dit doe je in de **CFG Editor** sectie van de gameserver administratie in **txAdmin**. Zorg dat de volgende regels toegevoegd of aangepast zijn in de configuratie:

```cfg
ensure rconlog
set rcon_password "jouw-veilige-wachtwoord"
```



## Verbinden via RCON

Om via RCON verbinding te maken met je GameXY server, gebruik je de Windows tool **IceCon**. Deze kun je downloaden via de [GitHub repository](https://github.com/icedream/icecon). Na installatie op je pc maak je een nieuwe verbinding aan met de volgende gegevens:

- **Server IP-adres**  
- **Game poort**
- **RCON wachtwoord**

Als de verbinding succesvol is, biedt IceCon een grafische interface om RCON-commando’s naar de RedM server te sturen. Je kunt standaard RCON-commando’s uitvoeren en realtime feedback van de server direct in de tool zien.

IceCon heeft ook extra features zoals:

- Commandogeschiedenis en auto-aanvulling  
- Server log viewer  
- Custom commandoknoppen  
- Connectieprofielen voor het beheren van meerdere servers



## RCON Commando’s

Eenmaal verbonden via RCON kun je allerlei admin- en diagnosecommando’s uitvoeren op de RedM server. Welke commando’s beschikbaar zijn hangt af van de game engine, maar meestal kun je acties doen voor spelersbeheer, statusopvragen en servercontrole.

| Commando                  | Beschrijving                                      |
| ------------------------- | ------------------------------------------------ |
| `say <bericht>`           | Stuurt een bericht naar alle spelers in de chat  |
| `start <resource-naam>`   | Start een specifieke server resource              |
| `stop <resource-naam>`    | Stopt een specifieke server resource              |
| `restart <resource-naam>` | Herstart een specifieke server resource           |
| `ensure <resource-naam>`  | Start resource alleen als deze nog niet draait    |
| `refresh`                 | Laadt alle resources opnieuw vanuit de map        |
| `clear`                   | Maakt de serverconsole output leeg                 |
| `crash`                   | Forceert een servercrash (voor debugdoeleinden)   |
| `quit`                    | Sluit de server netjes af                           |



## Conclusie

RCON is een must-have tool voor het remote beheren van RedM gameservers. Het geeft snelle en directe toegang tot adminfuncties, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is essentieel om serverstabiliteit te waarborgen en ongeautoriseerde toegang te voorkomen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂

<InlineVoucher />