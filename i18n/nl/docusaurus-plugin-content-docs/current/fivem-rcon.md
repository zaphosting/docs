---
id: fivem-rcon
title: "FiveM: RCON"
description: "Ontdek hoe je FiveM gameservers op afstand beheert met RCON voor flexibele servercontrole en monitoring → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat gebruikt wordt om gameservers op afstand te beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Zo kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In FiveM wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen FiveM monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je in de **CFG Editor** sectie van de gameserver administratie in **txAdmin**. Zorg dat de volgende regels toegevoegd of aangepast zijn in de configuratie:

```cfg
ensure rconlog
set rcon_password "jouw-veilige-wachtwoord"
```



## Verbinden via RCON

Om via RCON verbinding te maken met je GameXY server, gebruik je de Windows tool **IceCon**. Deze kun je downloaden via de [GitHub repository](https://github.com/icedream/icecon). Na installatie maak je een nieuwe verbinding aan met de volgende gegevens:

- **Server IP-adres**  
- **Game poort**
- **RCON wachtwoord**

Als de verbinding succesvol is, biedt IceCon een grafische interface om RCON-commando’s naar de FiveM server te sturen. Je kunt standaard RCON-commando’s uitvoeren en realtime feedback van commando’s direct in de tool zien.

IceCon heeft ook handige extra functies zoals:

- Commandogeschiedenis en auto-aanvulling  
- Server log viewer  
- Custom commandoknoppen  
- Connectieprofielen om meerdere servers te beheren



## RCON Commando’s

Eenmaal verbonden via RCON kun je verschillende admin- en diagnosecommando’s uitvoeren op de FiveM server. Welke commando’s beschikbaar zijn hangt af van de game engine, maar meestal kun je acties uitvoeren voor spelersbeheer, statusvragen en servercontrole.

| Commando                  | Beschrijving                                      |
| ------------------------- | ------------------------------------------------ |
| `say <bericht>`           | Stuurt een bericht naar alle spelers in de chat  |
| `start <resource-naam>`   | Start een specifieke server resource              |
| `stop <resource-naam>`    | Stopt een specifieke server resource              |
| `restart <resource-naam>` | Herstart een specifieke server resource           |
| `ensure <resource-naam>`  | Start resource alleen als deze nog niet draait    |
| `refresh`                 | Laadt alle resources opnieuw vanuit de map        |
| `clear`                   | Maakt de serverconsole output leeg                 |
| `crash`                   | Forceert een servercrash (voor debugging)          |
| `quit`                    | Sluit de server netjes af                           |



## Conclusie

RCON is een must-have tool voor het remote beheren van FiveM gameservers. Het geeft snelle en directe toegang tot adminfuncties, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is essentieel om de server stabiel te houden en ongeautoriseerde toegang te voorkomen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂

<InlineVoucher />