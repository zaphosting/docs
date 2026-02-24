---
id: dedicated-linux-git
title: "Sätt upp Git på en Linux-server – Aktivera versionshantering för dina projekt"
description: "Upptäck hur du installerar och konfigurerar Git för effektiv versionshantering och smidig samarbete i dina projekt → Läs mer nu"
sidebar_label: Installera Git
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Git är ett distribuerat versionshanteringssystem designat för effektiv hantering av källkod. Det låter utvecklare spåra ändringar, jobba på olika grenar samtidigt och samarbeta sömlöst i projekt. Tack vare sin flexibilitet och prestanda har Git blivit standardverktyget för versionshantering i modern mjukvaruutveckling.

Fundera på att hosta den här tjänsten själv? Vi guidar dig steg för steg hur du sätter upp och konfigurerar Git, plus allt du behöver ha koll på.



## Förberedelser

Innan du sätter upp **Git** behöver du förbereda ditt system. Det innebär att uppdatera operativsystemet till senaste versionen. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att se till att ditt system kör den senaste mjukvaran och säkerhetsfixarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.



## Installation

Nu när förberedelserna är klara kan du installera Git. Kör det här kommandot:

```console
sudo apt install git-all -y
```

När installationen är klar bör du kontrollera att Git fungerar som det ska genom att öppna terminalen eller kommandoprompten. Skriv `git --version` och tryck Enter.

Om installationen lyckades visar Git den installerade versionen. Får du ett felmeddelande eller inget svar betyder det oftast att Git inte installerades korrekt eller att kommandot inte finns i systemets sökväg.

```
git --version
git version 2.51.2
```



## Konfiguration

Ställ in ditt Git-användarnamn och e-post med kommandona nedan, byt ut exemplen mot dina egna uppgifter. Dessa kopplas till varje commit du gör.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Git på din VPS/Dedikerade Server. Vi rekommenderar också att du kollar in följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration:

- [git-scm.com](https://git-scm.com/) – Officiell webbplats
- [git-scm.com/doc](https://git-scm.com/doc) Git-dokumentation

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂