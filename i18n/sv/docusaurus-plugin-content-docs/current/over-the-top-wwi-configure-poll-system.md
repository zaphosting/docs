---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: Konfigurera omröstningssystemet"
description: "Lär dig hur du konfigurerar röstnings- och omröstningsinställningar på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Omröstningssystem
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Omröstningssystemet i **Over the Top WWI** låter spelare rösta om olika åtgärder som att sparka spelare, byta kartor eller ändra gameplay-inställningar. Den här funktionen kan förbättra community-interaktionen och minska behovet av ständig admin-inblandning.

Genom att konfigurera omröstningsinställningarna kan du styra vilka omröstningar som är tillåtna och hur de beter sig under spelets gång.

<InlineVoucher />

## Konfiguration

Omröstningssystemet konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` definierar procentandelen röster som krävs för att en omröstning ska godkännas
- `EnableBanPlayerPoll` tillåter spelare att rösta om att banna andra
- `EnableKickPlayerPoll` tillåter spelare att rösta om att sparka andra
- `EnableChangeMapsPoll` tillåter spelare att rösta om kartbyten
- `EnableMutePlayerPoll` tillåter spelare att rösta om att tysta andra
- `EnableCustomPoll` aktiverar anpassade röstningsalternativ
- `ChangeMapImmediately` avgör om en lyckad kartomröstning ska genomföras direkt

Tillåtna omröstnings-spellägen:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

Dessa inställningar definierar vilka spellägen som kan väljas under omröstningar.

- `1` → Aktiverat
- `0` → Avaktiverat

Du kan stänga av specifika lägen för att begränsa röstningsalternativen och behålla en konsekvent spelupplevelse.

Efter att du ändrat `ServerConfiguration.ini`, spara filen och starta om din server. De uppdaterade omröstningsinställningarna tillämpas automatiskt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat omröstningssystemet på din **Over the Top WWI-server**. Det ger spelarna möjlighet att delta i beslutsfattandet och hjälper till att automatisera serverhanteringen.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />