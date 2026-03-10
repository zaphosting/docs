---
id: csgo-cstv
title: "CS:GO: CSTV "
description: "Ontdek hoe je live game streams kunt uitzenden met vertraging en automatische opname voor toeschouwers en herbeleef matches wanneer je maar wilt → Leer nu meer"
sidebar_label: CSTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

CSTV geeft je de mogelijkheid om games live uit te zenden met een kleine vertraging. Dit betekent dat outsiders die niet meespelen ook kunnen volgen wat er op de server gebeurt. Deze technologie wordt ook gebruikt bij bekende Counter-Strike-toernooien, zodat kijkers het spektakel kunnen meemaken. Daarnaast kunnen de streams automatisch worden opgeslagen, zodat je ze later nog eens terug kunt kijken.

<InlineVoucher />

## Activeren

De activatie van de CSTV-service gebeurt via het **server.cfg** configuratiebestand. Daar moeten de volgende commands aan toegevoegd worden:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Configuratie

De bovenstaande commands zijn verplicht om de CSTV masterserver te activeren en toegankelijk te maken. Daarnaast zijn er nog andere commands voor geavanceerde instellingen:

|            Command            |                         Beschrijving                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Toeschouwers kunnen cameraman worden        |
| tv_allow_static_shots "0\|1" |    Gebruikt vaste camera-oriëntaties voor shots    |
|     tv_autorecord "0\|1"     | Neemt automatisch alle games op als CSTV-demo’s. Alle games worden automatisch opgenomen, het demo-bestandsformaat is auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Probeert opnieuw te verbinden na een netwerk-timeout |
| tv_chattimelimit "seconds"  | Beperkt kijkers tot chatten elke x seconden |
|       tv_debug "0\|1"        |             Toont CSTV debug info             |
|   tv_delaymapchange "0\|1"   | Vertraagt mapwissel tot de stream klaar is |
|      tv_maxclients "n"       |          Maximaal aantal clients op de CSTV-server          |
|        tv_maxrate "n"        | Max. toegestane bandbreedte voor CSTV-kijkers, 0 = onbeperkt |
|        tv_msg "text"         |           Stuurt een bericht naar alle kijkers           |
|        tv_name "name"        | CSTV-hostnaam. Bepaalt de CSTV-naam zoals die in de serverbrowser en statusbalk verschijnt |
|       tv_nochat "0\|1"       |           Zet CSTV-chat aan/uit           |
|    tv_password "password"    |       Beveiligt de CSTV-stream met een wachtwoord       |
|     tv_record "filename"     |             Start het opnemen van een CSTV-demo             |
|           tv_stop            |                 Stopt de CSTV-stream                 |
|        tv_stoprecord         |            Stopt het opnemen van een CSTV-demo             |
|           tv_title           |           Bepaalt de naam van de CSTV-stream           |

## Verbinding maken

Als de functie op de server is geactiveerd, kun je via het IP-adres en de toegewezen CSTV-poort verbinding maken. Hiervoor heb je de console in het spel nodig. Daar kun je verbinden met het volgende commando:

```
connect SERVERIP:27020
```

Handmatig en automatisch opgenomen demo’s worden opgeslagen in de hoofdmap (/gxxxxx/CS:GO/game/csgo) van de CS:GO-server. Deze kun je downloaden via de FTP-toegang die je krijgt. Als je nog niet weet hoe je via FTP toegang krijgt, vind je hier een handleiding: [Toegang via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Met de demo-player in het spel kun je de gedownloade demo selecteren via **Load** en starten met de **Play** knop.

<InlineVoucher />