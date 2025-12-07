---
id: csgo-gotv
title: "CSGO: Info om GOTV"
description: "Upptäck hur GOTV möjliggör livesändningar och replay-inspelningar för en grymmare åskådarupplevelse i CS:GO och liknande spel → Läs mer nu"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Arkiverad Guide
Det här dokumentet är arkiverat. Dokument arkiveras när de inte längre är relevanta, felaktiga eller uppdaterade. Det har arkiverats av följande anledning:

Anledning: CS:GO erbjuds inte längre aktivt och utvecklas inte längre. CS2 är uppföljaren till CS:GO. Vi rekommenderar att du byter till CS2.
::::



## Vad är GOTV?


GOTV ger dig möjligheten att sända matcher live med en liten fördröjning. Det betyder att folk som inte spelar kan följa vad som händer på servern. Den här tekniken används även i de stora Counter-Strike-turneringarna så att fansen kan kolla på matcherna. Dessutom kan sändningarna sparas automatiskt så att du kan kolla på dem i efterhand.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## Hur använder man GOTV?

Om funktionen är aktiverad på servern kan du ansluta via serverns IP-adress och den GOTV-port som är kopplad till den. För att koppla upp dig behöver du konsolen i spelet. Där kan du ansluta med följande kommando:

```
connect SERVERIP:27020
```


Manuellt och automatiskt inspelade demos sparas i huvudmappen (gxxxxx/csgo/csgo/) på CS:GO-servern. Dessa kan laddas ner via FTP-accessen som du får. Om du inte vet hur man ansluter via FTP än, hittar du instruktioner här: [Access via FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



När du spelar upp demo i spelet kan du välja den nedladdade demon via **Load** och starta den med **Play**-knappen.



## Installation av GOTV Master Server

För att aktivera GOTV master server måste du lägga till följande kommandon i **server.cfg**. De är:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



De här kommandona är obligatoriska för att GOTV master server ska aktiveras och vara åtkomlig. Men det finns fler kommandon för avancerad konfiguration:

|            Kommando            |                         Beskrivning                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Åskådare kan ta över som kameraman        |
| tv_allow_static_shots "0\|1" |    Använder fasta kameravinklar för inspelning    |
|     tv_autorecord "0\|1"     | Spelar automatiskt in alla matcher som GOTV-demos. Alla matcher spelas in automatiskt, demo-filen får formatet auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Försöker ansluta igen efter nätverks-timeout |
| tv_chattimelimit "sekunder"  | Begränsar tittare att skriva bara var x sekund |
|       tv_debug "0\|1"        |             Visar GOTV debug-info             |
|   tv_delaymapchange "0\|1"   | Fördröjer kartbyte tills överföringen är klar |
|      tv_maxclients "n"       |          Max antal klienter på GOTV-servern           |
|        tv_maxrate "n"        | Max tillåten bandbredd för GOTV-tittare, 0 == obegränsat |
|        tv_msg "text"         |           Skickar meddelande till alla tittare           |
|        tv_name "namn"        | GOTV-hostnamn. Definierar GOTV-namnet som visas i serverlistan och statusfältet |
|       tv_nochat "0\|1"       |           Aktivera/avaktivera GOTV-chatten           |
|    tv_password "lösenord"    |       Skyddar GOTV-sändningen med lösenord        |
|     tv_record "filnamn"      |             Startar inspelning av GOTV-demo             |
|           tv_stop            |                 Stoppar GOTV-sändningen                  |
|        tv_stoprecord         |            Stoppar inspelning av GOTV-demo              |
|           tv_title           |           Definierar namnet på GOTV-sändningen           |

<InlineVoucher />