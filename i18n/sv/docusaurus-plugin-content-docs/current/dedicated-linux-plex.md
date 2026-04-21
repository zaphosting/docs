---
id: dedicated-linux-plex
title: "Installera Plex på en Linux-server - Streama ditt personliga mediebibliotek"
description: "Upptäck hur du smidigt hanterar och streamar ditt personliga mediebibliotek med Plex för enkel åtkomst på alla enheter → Läs mer nu"
sidebar_label: Installera Plex
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Plex är en plattform för att hantera och streama media som filmer, TV-serier, musik och bilder från en central plats. Med Plex Media Server kan du organisera bibliotek, automatiskt berika dem med metadata och streama till olika enheter både i ditt lokala nätverk och över internet. Det gör Plex till en flexibel lösning för att enkelt och smidigt komma åt dina personliga mediesamlingar.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Fundera på att hosta tjänsten själv? Vi guidar dig steg för steg genom installation och konfiguration, plus allt du behöver ha koll på.



## Installera Plex med One Click Apps Installer

Du kan installera **Plex** direkt via vår **One Click Apps Installer** i VPS-webbgränssnittet. Efter att ha slutfört den initiala app-installationen, öppna appkatalogen, sök efter **Plex** och starta deployment med dina valda projekt-, miljö- och domäninställningar. Det ger dig ett snabbt och användarvänligt sätt att köra och hantera **Plex** utan manuell kommandoradskonfiguration, samtidigt som du får fördelarna med integrerad webbaserad hantering, stöd för egna domäner och SSL där det finns tillgängligt.

## Förutsättningar

Innan du installerar **Plex**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara  | Minimum      | ZAP-Hosting Rekommendation |
| --------- | ------------ | -------------------------- |
| CPU       | 4 vCPU-kärnor| 8 vCPU-kärnor              |
| RAM       | 4 GB         | 8 GB                       |
| Diskutrymme | 25 GB      | 25 GB                      |

Mjukvaran kräver att alla nödvändiga beroenden är installerade och att den körs på ett stöds operativsystem. Säkerställ att din server uppfyller följande innan du fortsätter med installationen:

**Beroenden:** Inga

**Operativsystem:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Se till att alla beroenden är installerade och att rätt OS-version används för att undvika kompatibilitetsproblem vid installation av Plex.



## Installation

Den officiella Plex Media-webbplatsen erbjuder den senaste Linux-versionen av Plex Media Server för nedladdning. Använd 64-bitarsvarianten för att garantera kompatibilitet med alla moderna Linux-distributioner. Kör följande kommando för att ladda ner `.deb`-filen:

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Efter nedladdning kan installationsprogrammet köras för att sätta upp Plex Media Server. När installationen är klar hanteras konfigurationen via webbläsargränssnittet, där du kan skapa bibliotek och hantera din mediesamling. Kör följande kommando för att starta installationen:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

För att konfigurera Plex Media Server, på samma maskin där du installerade servern, öppna en webbläsare och gå till `http://127.0.0.1:32400/web`. Här kommer du bli ombedd att logga in med ett befintligt Plex-konto eller skapa ett nytt om du inte redan har ett.

Denna inloggning krävs för att koppla servern till ditt personliga konto, vilket möjliggör funktioner som fjärråtkomst, användarhantering och synkronisering mellan enheter. Efter lyckad autentisering är du inne i din egen Plex Media-instans. Där kan du skapa bibliotek för filmer, TV-serier, musik eller bilder, automatiskt hämta metadata och dela innehåll med andra användare i ditt lokala nätverk eller över internet.

Efter installationen kan du även nå din Plex Media Server externt genom att öppna webbläsargränssnittet via `http://<ip-adress>:32400`. Byt ut `<ip-adress>` mot din servers publika IP.

Port 32400 är standardporten för Plex webbåtkomst och kan behöva tillåtas i din brandvägg eller router om du vill ansluta över internet.

När du når adressen kommer du att omdirigeras till Plex inloggningssida där du kan hantera dina bibliotek och inställningar. För säker extern åtkomst rekommenderas att aktivera Remote Access i Plex-inställningarna, vilket garanterar en krypterad anslutning och dirigerar trafiken via Plex-tjänsten.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Slutsats och fler resurser

Grattis! Du har nu framgångsrikt installerat och konfigurerat Plex på din VPS/Dedikerade Server. Vi rekommenderar även att du kollar in följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration:

- [Plex.com](https://Plex.com/) - Officiell webbplats
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex Hjälpcenter (Dokumentation)

Har du specifika frågor som inte täcks här? För fler frågor eller support, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂