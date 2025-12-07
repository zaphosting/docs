---
id: cs2-cstv
title: "CS2: CSTV "
description: "Ontdek hoe je live game streams met vertraging en automatische opname voor toeschouwers kunt uitzenden en wedstrijden altijd opnieuw kunt beleven → Leer nu meer"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

CSTV biedt de mogelijkheid om games live uit te zenden met een kleine vertraging. Dit betekent dat buitenstaanders die niet meespelen ook kunnen volgen wat er op de server gebeurt. Deze technologie wordt ook gebruikt in de bekende Counter-Strike-toernooien, zodat toeschouwers het spektakel kunnen bekijken. Daarnaast kunnen de uitzendingen automatisch worden opgeslagen, zodat je ze later opnieuw kunt bekijken.

<InlineVoucher />

## Activeren

De activatie van de CSTV-service gebeurt via het **server.cfg** configuratiebestand. De benodigde commands moeten daar worden toegevoegd:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Configuratie

De bovenstaande commands zijn verplicht om de CSTV masterserver te activeren en toegankelijk te maken. Daarnaast zijn er nog andere commands voor geavanceerde configuratie:

|            Command            |                         Beschrijving                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Toeschouwers kunnen cameraman worden        |
| tv_allow_static_shots "0\|1" |    Gebruikt vaste camera-oriëntaties voor shots    |
|     tv_autorecord "0\|1"     | Neemt automatisch alle games op als CSTV-demo’s. Alle games worden automatisch opgenomen, het demo-bestandsformaat is auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Probeert opnieuw te verbinden na een netwerk-timeout |
| tv_chattimelimit "seconds"  | Beperkt kijkers tot schrijven elke x seconden |
|       tv_debug "0\|1"        |             Toont CSTV debug-informatie             |
|   tv_delaymapchange "0\|1"   | Vertraagt kaartwissel tot de uitzending compleet is |
|      tv_maxclients "n"       |          Maximaal aantal clients op de CSTV-server          |
|        tv_maxrate "n"        | Max. toegestane CSTV kijkers-bandbreedte, 0 == onbeperkt |
|        tv_msg "text"         |           Stuurt een bericht naar alle kijkers           |
|        tv_name "name"        | CSTV-hostnaam. Bepaalt de CSTV-naam zoals die in de serverbrowser en statusbalk verschijnt |
|       tv_nochat "0\|1"       |           Zet CSTV-chat aan/uit           |
|    tv_password "password"    |       Beschermt de CSTV-uitzending met een wachtwoord       |
|     tv_record "filename"     |             Start het opnemen van een CSTV-demo             |
|           tv_stop            |                 Stopt de CSTV-uitzending                 |
|        tv_stoprecord         |            Stopt het opnemen van een CSTV-demo             |
|           tv_title           |           Bepaalt de naam van de CSTV-uitzending           |

## Verbinding maken

Als de functie op de server is geactiveerd, is toegang mogelijk via het IP-adres en de CSTV-poort die aan de server is toegewezen. Om te verbinden heb je de console in het spel nodig. Daar kun je verbinden met het volgende commando:

```
connect SERVERIP:27020
```

Handmatig en automatisch opgenomen demo’s worden opgeslagen in de hoofdmap (/gxxxxx/cs2/game/csgo) van de CS:GO-server. Deze kunnen via de FTP-toegang worden gedownload. Als je nog niet weet hoe je via FTP toegang krijgt, vind je hier instructies: [Toegang via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Met de demo-afspeelfunctie in het spel kun je de gedownloade demo selecteren via **Load** en starten met de **Play**-knop.

<InlineVoucher />