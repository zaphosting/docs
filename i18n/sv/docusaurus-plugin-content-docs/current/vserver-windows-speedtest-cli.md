---
id: vserver-windows-speedtest-cli
title: "Installera Speedtest CLI på en Windows Server - Håll koll på ditt nätverk"
description: "Upptäck hur du effektivt hanterar källkod och samarbetar med Speedtest CLI för smidig versionshantering i modern utveckling → Läs mer nu"
sidebar_label: Installera Speedtest CLI
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Speedtest CLI är ett distribuerat versionshanteringssystem designat för effektiv källkodshantering. Det låter utvecklare spåra ändringar, jobba på olika grenar samtidigt och samarbeta sömlöst i projekt. Tack vare sin flexibilitet och prestanda har Speedtest CLI blivit standardverktyget för versionshantering i modern mjukvaruutveckling.

Fundera på att hosta den här tjänsten själv? Vi guidar dig steg för steg hur du installerar och konfigurerar den, plus allt du behöver ha koll på.

<InlineVoucher />



## Förberedelser

Innan du installerar **Speedtest CLI** behöver du förbereda ditt system. Det innebär att uppdatera operativsystemet till senaste versionen. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att vara säker på att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Det garanterar att du har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.



## Installation

Nu när förberedelserna är klara kan du installera Speedtest CLI-appen. Ladda ner Speedtest CLI för Windows (x64) här: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Kör sedan installationsfilen och följ instruktionerna.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Konfiguration

speedtest-cli använder inte en traditionell konfigurationsfil men kan anpassas via kommandoradsalternativ och miljövariabler. Det gör att du kan skräddarsy den för konsekvent och automatiserad användning:

- `--server <ID>`: Välj en specifik server via dess ID för mer konsekventa och jämförbara testresultat.  
- `--bytes`: Visa hastigheter i byte per sekund istället för bitar.  
- `--simple`: Visa bara ping, nedladdning och uppladdning i ett kompakt format.  
- `--json` eller `--csv`: Perfekt för automation och loggning, då resultaten sparas i maskinläsbart format.  
- Proxy-stöd: Ställ in miljövariabler som `http_proxy` eller `https_proxy` för att köra speedtest-cli bakom en proxy.  

Om du kör samma alternativ ofta är det smidigt att skapa en shell-alias eller ett litet wrapper-script. Då kan du snabbt köra speedtest-cli med enhetligt output.



## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Speedtest CLI på din vServer. Vi rekommenderar också att du kollar in följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Officiell hemsida

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂



<InlineVoucher />