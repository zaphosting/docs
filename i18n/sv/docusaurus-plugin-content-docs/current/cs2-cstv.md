---
id: cs2-cstv
title: "CS2: CSTV "
description: "Upptäck hur du sänder live-spel med fördröjning och automatisk inspelning för åskådare och återupplev matcher när som helst → Lär dig mer nu"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

CSTV ger dig möjligheten att sända spel live med en liten fördröjning. Det betyder att personer som inte är med i spelet också kan följa vad som händer på servern. Den här tekniken används även i de välkända Counter-Strike-turneringarna så att åskådarna kan följa spektaklet. Dessutom kan sändningarna sparas automatiskt så att du kan titta på dem i efterhand.

<InlineVoucher />

## Aktivering

Aktiveringen av CSTV-tjänsten görs via **server.cfg**-konfigurationsfilen. De nödvändiga kommandona måste läggas till där:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Konfiguration

Ovanstående kommandon är obligatoriska för att CSTV master-servern ska aktiveras och vara tillgänglig. Men det finns fler kommandon för avancerad konfiguration nedan:

|            Kommando            |                         Beskrivning                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Åskådare kan ta över som kameraman        |
| tv_allow_static_shots "0\|1" |    Använder fasta kameravinklar för inspelning    |
|     tv_autorecord "0\|1"     | Spelar automatiskt in alla matcher som CSTV-demos. Alla matcher spelas in automatiskt, demo-filen får formatet auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Försöker ansluta igen efter nätverks-timeout |
| tv_chattimelimit "sekunder"  | Begränsar åskådare att skriva bara var x sekund |
|       tv_debug "0\|1"        |             Visar CSTV debug-information             |
|   tv_delaymapchange "0\|1"   | Fördröjer kartbyte tills överföringen är klar |
|      tv_maxclients "n"       |          Max antal klienter på CSTV-servern          |
|        tv_maxrate "n"        | Max tillåten bandbredd för CSTV-åskådare, 0 == obegränsat |
|        tv_msg "text"         |           Skickar ett meddelande till alla åskådare           |
|        tv_name "namn"        | CSTV-hostnamn. Definierar CSTV-namnet som visas i serverlistan och statusfältet |
|       tv_nochat "0\|1"       |           Aktivera/avaktivera CSTV-chatten           |
|    tv_password "lösenord"    |       Skyddar CSTV-sändningen med lösenord       |
|     tv_record "filnamn"      |             Startar inspelning av en CSTV-demo             |
|           tv_stop            |                 Stoppar CSTV-sändningen                 |
|        tv_stoprecord         |            Stoppar inspelning av en CSTV-demo             |
|           tv_title           |           Definierar namnet på CSTV-sändningen           |

## Anslutning

Om funktionen är aktiverad på servern går det att ansluta via IP-adressen och den CSTV-port som är tilldelad servern. För att ansluta behöver du konsolen i spelet. Där kan du ansluta med följande kommando:

```
connect SERVERIP:27020
```

Manuellt och automatiskt inspelade demos sparas i huvudmappen /gxxxxx/cs2/game/csgo) på CS:GO-servern. Dessa kan laddas ner via FTP-accessen som tillhandahålls. Om du inte vet hur du ansluter via FTP än, hittar du instruktioner här: [Access via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Med demo-uppspelningen i spelet kan du välja den nedladdade demon via **Load** och starta den med **Play**-knappen.

<InlineVoucher />