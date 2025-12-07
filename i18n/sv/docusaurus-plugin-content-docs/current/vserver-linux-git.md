---
id: vserver-linux-git
title: "vServer: Installera Git på Linux"
description: "Upptäck hur du installerar och konfigurerar Git för effektiv versionshantering och smidig samarbete i dina utvecklingsprojekt → Lär dig mer nu"
sidebar_label: Installera Git
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Git är ett distribuerat versionshanteringssystem designat för effektiv hantering av källkod. Det låter utvecklare spåra ändringar, jobba på olika grenar samtidigt och samarbeta sömlöst i projekt. Tack vare sin flexibilitet och prestanda har Git blivit standardverktyget för versionshantering i modern mjukvaruutveckling.

Fundera på att hosta den här tjänsten själv? Vi guidar dig genom varje steg för hur du installerar och konfigurerar det, plus allt du behöver ha koll på.

<InlineVoucher />



## Förberedelser

Innan du installerar **Git** behöver du förbereda ditt system. Det innebär att uppdatera operativsystemet till senaste versionen. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att se till att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta garanterar att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.



## Installation

Nu när förberedelserna är klara kan du installera Git. Kör följande kommando:

```console
sudo apt install git-all -y
```



När installationen är klar bör du kontrollera att Git fungerar som det ska genom att öppna en terminal eller kommandoprompt. Skriv kommandot `git --version` och tryck Enter.

Om installationen lyckades kommer Git visa den installerade versionen. Får du ett felmeddelande eller inget svar betyder det oftast att Git inte installerades korrekt eller att kommandot inte finns i systemets sökväg.

```
git --version
git version 2.51.2
```



## Konfiguration

Ställ in ditt Git-användarnamn och e-post med kommandona nedan, byt ut exemplen mot dina egna uppgifter. Dessa uppgifter kopplas till varje commit du gör.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Git på din vServer. Vi rekommenderar också att du kollar in följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration:

- [git-scm.com](https://git-scm.com/) - Officiell webbplats
- [git-scm.com/doc](https://git-scm.com/doc) Git-dokumentation

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂



<InlineVoucher />