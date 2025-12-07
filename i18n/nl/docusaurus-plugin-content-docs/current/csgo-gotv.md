---
id: csgo-gotv
title: "CSGO: Info over GOTV"
description: "Ontdek hoe GOTV live game-uitzendingen en replay-opnames mogelijk maakt voor een betere kijkervaring in CS:GO en vergelijkbare games → Leer er nu meer over"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Gearchiveerde Gids
Dit document is gearchiveerd. Documenten worden gearchiveerd als ze niet meer relevant, onjuist of verouderd zijn. Het is om de volgende reden gearchiveerd:

Reden: CS:GO wordt niet meer actief aangeboden en wordt niet meer ontwikkeld. CS2 is de opvolger van CS:GO. We raden aan om over te stappen naar CS2.
::::



## Wat is GOTV?


GOTV maakt het mogelijk om games live uit te zenden met een kleine vertraging. Dit betekent dat mensen die niet meespelen toch kunnen volgen wat er op de server gebeurt. Deze technologie wordt ook gebruikt bij bekende Counter-Strike-toernooien, zodat kijkers het spektakel kunnen meemaken. Daarnaast kunnen de uitzendingen automatisch worden opgeslagen, zodat je ze later terug kunt kijken.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## Hoe gebruik je GOTV?

Als de functie op de server is geactiveerd, kun je via het IP-adres en de bijbehorende GOTV-poort verbinding maken met de server. Hiervoor heb je de console in het spel nodig. Daar kun je dan verbinden met het volgende commando:

```
connect SERVERIP:27020
```


Handmatig en automatisch opgenomen demo’s worden opgeslagen in de hoofdmap (gxxxxx/csgo/csgo/) van de CS:GO-server. Deze kun je downloaden via de FTP-toegang die je hebt gekregen. Als je nog niet weet hoe je via FTP toegang krijgt, vind je hier een uitleg: [Toegang via FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



Met de demo-afspeelfunctie in het spel kun je de gedownloade demo selecteren via **Load** en starten met de **Play**-knop.



## Installatie van de GOTV Master Server

Om de GOTV master server te activeren, moeten de volgende commando’s toegevoegd worden in **server.cfg**:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



De bovenstaande commando’s zijn verplicht om de GOTV master server te activeren en toegankelijk te maken. Daarnaast zijn er nog extra commando’s voor geavanceerde instellingen:

|            Commando            |                         Beschrijving                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Kijkers kunnen cameraman worden        |
| tv_allow_static_shots "0\|1" |    Gebruikt vaste camera-oriëntaties voor shots    |
|     tv_autorecord "0\|1"     | Neemt automatisch alle games op als GOTV-demo’s. Alle games worden automatisch opgenomen, het demo-bestandsformaat is auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Probeert opnieuw te verbinden na een netwerk-timeout |
| tv_chattimelimit "seconden"  | Beperkt kijkers tot schrijven om de x seconden |
|       tv_debug "0\|1"        |             Toont GOTV debug-informatie             |
|   tv_delaymapchange "0\|1"   | Vertraagt kaartwissel tot de uitzending klaar is |
|      tv_maxclients "n"       |          Maximaal aantal clients op de GOTV-server           |
|        tv_maxrate "n"        | Max. toegestane bandbreedte voor GOTV-kijkers, 0 = onbeperkt |
|        tv_msg "tekst"        |           Stuurt een bericht naar alle kijkers           |
|        tv_name "naam"        | GOTV-hostnaam. Bepaalt de naam zoals die in de serverbrowser en statusbalk verschijnt |
|       tv_nochat "0\|1"       |           Zet GOTV-chat aan/uit           |
|    tv_password "wachtwoord"  |       Beveiligt de GOTV-uitzending met een wachtwoord        |
|     tv_record "bestandsnaam" |             Start met opnemen van een GOTV-demo             |
|           tv_stop            |                 Stopt de GOTV-uitzending                  |
|        tv_stoprecord         |            Stopt het opnemen van een GOTV-demo              |
|           tv_title           |           Bepaalt de naam van de GOTV-uitzending           |

<InlineVoucher />