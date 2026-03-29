---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI: Konfigurera Spawn-inställningar"
description: "Lär dig hur du konfigurerar spawn-beteendet på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Spawn-inställningar
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Spawn-inställningarna i **Over the Top WWI** styr hur och när spelare återvänder till slagfältet. Dessa inställningar påverkar direkt tempot, rättvisan och matchens övergripande flöde.

Genom att justera spawn-timers, grace-perioder och respawn-beteende kan du skapa snabbare gameplay eller mer taktiska och straffande stridsscenarion.

<InlineVoucher />

## Konfiguration

Spawn-inställningarna konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i din **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` definierar hur länge spelare kan spawna utan straff eller begränsningar i början
- `AttackerRespawnTime` sätter respawn-fördröjningen för det attackerande laget
- `DefenderRespawnTime` sätter respawn-fördröjningen för det försvarande laget

- `WaveSpawning` aktiverar eller inaktiverar våg-baserad spawn

- `WaveLegnth` definierar hur länge en spawn-våg varar
- `WaveBuildUpTime` styr hur lång tid det tar för en våg att byggas upp helt

Genom att justera dessa värden kan du kontrollera om spelare spawnar individuellt eller i koordinerade vågor, och hur snabbt de kan återvända till slagfältet.

Efter att du ändrat `ServerConfiguration.ini`, spara filen och starta om din server. Det nya spawn-beteendet appliceras automatiskt.

## Slutsats

Grattis! Du har nu framgångsrikt konfigurerat spawn-inställningarna på din **Over the Top WWI-server**. Dessa justeringar låter dig finjustera spelets tempo och förbättra den övergripande spelupplevelsen.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />