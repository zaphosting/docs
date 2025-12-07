---
id: dedicated-linux-git
title: "Dedikerad Server: Installera Git på Linux"
description: "Upptäck hur du sätter upp och konfigurerar Git för effektiv versionshantering och smidig samarbete i dina projekt → Lär dig mer nu"
sidebar_label: Installera Git
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Git är ett distribuerat versionshanteringssystem designat för effektiv hantering av källkod. Det låter utvecklare spåra ändringar, jobba på olika grenar samtidigt och samarbeta sömlöst i projekt. Tack vare sin flexibilitet och prestanda har Git blivit standardverktyget för versionshantering i modern mjukvaruutveckling.

Fundera på att hosta den här tjänsten själv? Vi guidar dig steg för steg hur du sätter upp och konfigurerar den, plus allt du behöver ha koll på.



## Förberedelser

Innan du sätter upp **Git** behöver du förbereda ditt system. Det innebär att uppdatera operativsystemet till senaste versionen. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att vara säker på att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.



## Installation

Nu när förberedelserna är klara kan du fortsätta med installationen av Git. Kör följande kommando:

```console
sudo apt install git-all -y
```

När installationen är klar bör du verifiera att Git fungerar som det ska genom att öppna en terminal eller kommandoprompt. Skriv kommandot `git --version` och tryck Enter.

Om installationen lyckades kommer Git att visa den installerade versionsnumret. Får du ett felmeddelande eller inget svar betyder det oftast att Git inte installerades korrekt eller att kommandot inte finns i systemets sökväg.

```
git --version
git version 2.51.2
```



## Konfiguration

Ställ in ditt Git-användarnamn och e-post med kommandona nedan, byt ut exempelvärdena mot dina egna uppgifter. Dessa uppgifter kopplas till varje commit du gör.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Git på din Dedikerade Server. Vi rekommenderar också att du kollar in följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration:

- [git-scm.com](https://git-scm.com/) - Officiell webbplats
- [git-scm.com/doc](https://git-scm.com/doc) Git-dokumentation

Har du specifika frågor som inte täcks här? För fler frågor eller support, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂