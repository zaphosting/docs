---
id: dedicated-linux-speedtest-cli
title: "Dedikerad Server: Installera Speedtest-Cli på Linux"
description: "Upptäck hur du installerar och använder Speedtest-Cli för pålitliga nätverkstester och automation med flera protokoll → Läs mer nu"
sidebar_label: Installera Speedtest-Cli
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Speedtest-Cli är både ett gratis kommandoradsverktyg och ett mjukvarubibliotek (libSpeedtest-Cli) för dataöverföring via URL:er. Det stödjer en mängd olika protokoll—inklusive HTTP(S), FTP, SMTP, LDAP, MQTT och fler—och används ofta för att ladda ner filer, testa API:er och automatisera nätverksoperationer.

Fundera på att hosta den här tjänsten själv? Vi guidar dig steg för steg hur du installerar och konfigurerar den, plus allt du behöver ha koll på.



## Förberedelser

Innan du installerar **Speedtest-Cli** behöver du förbereda ditt system. Det innebär att uppdatera operativsystemet till senaste versionen. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera Systemet
För att se till att ditt system kör den senaste mjukvaran och säkerhetsfixarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att du har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.



## Installation

Nu när förberedelserna är klara kan du installera Speedtest-Cli. Kör detta kommando:

```console
sudo apt install speedtest-cli
```



## Konfiguration

speedtest-cli använder inte en traditionell konfigurationsfil, men kan anpassas via kommandoradsalternativ och miljövariabler. Det gör att du kan skräddarsy det för konsekvent och automatiserad användning:

- `--server <ID>`: Välj en specifik server via dess ID för mer konsekventa och jämförbara testresultat.  
- `--bytes`: Visa hastigheter i byte per sekund istället för bitar.  
- `--simple`: Visa bara ping, nedladdning och uppladdning i ett kompakt format.  
- `--json` eller `--csv`: Perfekt för automation och loggning, då resultaten sparas i maskinläsbart format.  
- Proxy-stöd: Ställ in miljövariabler som `http_proxy` eller `https_proxy` för att köra speedtest-cli bakom en proxy.  

För att slippa skriva samma alternativ varje gång kan du skapa en shell-alias eller ett litet wrapper-script. Då kör du speedtest-cli snabbt med samma inställningar och får enhetligt output.



## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Speedtest-Cli på din Dedikerade Server. Vi rekommenderar också att du kollar in följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Officiell webbplats

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂