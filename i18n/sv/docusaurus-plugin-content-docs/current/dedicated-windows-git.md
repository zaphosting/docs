---
id: dedicated-windows-git
title: "Installera Git på en Windows Server – Aktivera versionshantering för dina projekt"
description: "Upptäck hur du sätter upp och konfigurerar Git för effektiv versionshantering och smidig samarbete i dina projekt → Läs mer nu"
sidebar_label: Installera Git
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Git är ett distribuerat versionshanteringssystem designat för effektiv hantering av källkod. Det låter utvecklare spåra ändringar, arbeta på olika grenar samtidigt och samarbeta sömlöst i projekt. Tack vare sin flexibilitet och prestanda har Git blivit standardverktyget för versionshantering inom modern mjukvaruutveckling.

Fundera på att hosta den här tjänsten själv? Vi guidar dig steg för steg hur du sätter upp och konfigurerar den, samt allt du behöver ha koll på.



## Installera Git med One Click Apps Installer

Du kan installera **Git** direkt via vår **One Click Apps Installer** i VPS-webbgränssnittet. Efter att ha slutfört den initiala app-installationen, öppna appkatalogen, sök efter **Git** och starta distributionen med dina valda projekt-, miljö- och domäninställningar. Det ger dig ett snabbt och användarvänligt sätt att deploya och hantera **Git** utan manuell kommandoradskonfiguration, samtidigt som du får fördelarna av integrerad webbaserad hantering, stöd för egna domäner och SSL-certifikat där det finns tillgängligt.

## Förberedelser

Innan du sätter upp **Git** behöver du förbereda ditt system. Det inkluderar att uppdatera operativsystemet till senaste versionen. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsförbättringarna bör du alltid börja med att uppdatera systemet. Det garanterar att du har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.



## Installation

Nu när förberedelserna är klara kan du fortsätta med installationen av Git. Ladda ner Git för Windows (x64) här: https://git-scm.com/downloads/win 

Kör sedan installationsfilen och följ stegen som visas.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

När installationen är klar bör du verifiera att Git fungerar korrekt genom att öppna en terminal eller kommandoprompt. Skriv kommandot `git --version` och tryck Enter.

Om installationen lyckades kommer Git att visa den installerade versionsnumret. Får du ett felmeddelande eller inget svar betyder det oftast att Git inte installerades korrekt eller att kommandot inte finns i systemets sökväg.

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)



## Konfiguration

Ställ in ditt Git-användarnamn och e-post med kommandona nedan, byt ut exempelvärdena mot dina egna uppgifter. Dessa uppgifter kopplas till varje commit du gör.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Avslutning och fler resurser

Grattis! Du har nu framgångsrikt installerat och konfigurerat Git på din vServer. Vi rekommenderar också att du kollar in följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration:

- [git-scm.com](https://git-scm.com/) – Officiell webbplats
- [git-scm.com/doc](https://git-scm.com/doc) Git-dokumentation

Har du specifika frågor som inte täcks här? För fler frågor eller support, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂