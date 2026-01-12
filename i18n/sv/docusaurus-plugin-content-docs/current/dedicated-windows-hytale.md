---
id: dedicated-windows-hytale
title: "Dedikerad Server: Hytale Dedikerad Server Setup"
description: "Upptäck hur du sätter upp en Hytale Dedikerad server på din Windows Dedikerade Server för smidig spelhantering → Läs mer nu"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Har du en Dedikerad Server och vill köra din egen Hytale-server på den? I den här guiden går vi igenom steg för steg hur du installerar och kör Hytale dedikerade server på ett Windows-system.

## Förberedelser

För att köra en Hytale-server måste ditt system uppfylla några grundläggande krav. Servern körs på Java 25 och kräver minst 4 GB RAM. Både x64 och arm64-arkitekturer stöds. Den faktiska resursanvändningen beror på antal spelare, renderingsavstånd och världens aktivitet, så extra resurser kan behövas för större servrar.

Innan du fortsätter, se till att Java 25 är installerat på ditt Windows-system. Du kan kontrollera installationen genom att öppna en kommandoprompt och köra:

```
java --version
```

Om Java inte är installerat än, följ vår dedikerade Installera Java-guide för Windows-servrar. Den förklarar hur du installerar och konfigurerar Java korrekt i din miljö.



## Installation

Börja med att skapa en dedikerad mapp för Hytale-servern. Det håller alla serverfiler organiserade på ett ställe. Till exempel:

```
C:\Hytale
```

Servern kräver två huvudkomponenter: själva serverapplikationen och spelassets. Dessa filer hämtas via Hytales kommandorads-downloader, som är gjord för serverdistributioner och enklare uppdateringar.

CLI-downloadern ger ett strukturerat sätt att ladda ner och uppdatera Hytale-serverfilerna. Efter att ha laddat ner arkivet, packa upp det i en temporär mapp. Inuti arkivet hittar du en QUICKSTART.md-fil som beskriver grundläggande användning av verktyget.

Kör downloadern från kommandoraden och följ instruktionerna för att ladda ner senaste serverversionen. När processen är klar, kopiera de nedladdade serverfilerna och assets-arkivet till din servermapp. Efter detta steg ska mappen innehålla serverns JAR-fil och ett assets-arkiv som Assets.zip.

| **Kommando**                                   | **Beskrivning**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Ladda ner senaste releasen            |
| `./hytale-downloader -print-version`          | Visa spelversion utan nedladdning     |
| `./hytale-downloader -version`                | Visa hytale-downloader version         |
| `./hytale-downloader -check-update`           | Kolla efter uppdateringar för downloader |
| `./hytale-downloader -download-path game.zip` | Ladda ner till specifik fil            |
| `./hytale-downloader -patchline pre-release`  | Ladda ner från pre-release-kanal       |
| `./hytale-downloader -skip-update-check`      | Hoppa över automatisk uppdateringskontroll |



## Konfiguration

### Starta servern

Servern startas genom att köra JAR-filen och ange sökvägen till assets-arkivet. Anpassa sökvägen om dina assets ligger på en annan plats. Öppna kommandoprompten i servermappen och kör:

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### Autentisering

Vid första uppstart måste servern autentiseras innan spelare kan ansluta. Detta görs direkt via serverkonsolen med en enhetsbaserad inloggningsprocess. Följ instruktionerna som visas i konsolen för att slutföra autentiseringen.

```
/auth login device
```

Utdata ser ut så här:

```
> /auth login device
===================================================================
ENHETSAUTORISERING
===================================================================
Besök: https://accounts.hytale.com/device
Ange kod: ABCD-1234
Eller besök: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Väntar på auktorisering (går ut om 900 sekunder)...

[Användaren slutför auktorisering i webbläsaren]

> Autentisering lyckades! Läget: OAUTH_DEVICE
```

När autentiseringen är klar kan din server ta emot spelarkopplingar.



### Brandväggskonfiguration

Som standard lyssnar servern på UDP-port 5520 och binder till alla tillgängliga nätverksgränssnitt. Du kan ändra adress och port vid behov. Servern kommunicerar över UDP med QUIC-protokollet. Se till att din brandvägg tillåter inkommande UDP-trafik på vald port, antingen via Iptables eller UFW. Kör följande kommando i PowerShell för att enkelt lägga till denna brandväggsregel:

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## Prestandanoter

Renderingsavstånd är en av de viktigaste faktorerna som påverkar minnesanvändningen. Högre värden ökar RAM-användningen eftersom mer världdata måste vara aktiv samtidigt.

För de flesta setup är ett max renderingsavstånd på 12 chunks (384 block) en bra balans mellan serverprestanda och spelupplevelse.

Som jämförelse använder Minecraft-servrar standard 10 chunks (160 block). Hytales standard på 384 block motsvarar ungefär 24 Minecraft-chunks, vilket förklarar de högre minneskraven. Detta värde bör justeras efter förväntat antal spelare och tillgängliga resurser.



## Slutsats

Grattis, du har nu en fungerande Hytale-server igång på ditt system. Härifrån kan du bygga vidare genom att installera mods, justera världens inställningar och finjustera prestanda för att passa din spelarskara. Vi rekommenderar att du regelbundet övervakar resursanvändningen för att säkerställa stabil drift när servern växer.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂