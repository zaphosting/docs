---
id: dedicated-linux-joplin
title: "Dedikerad Server: Installera Joplin på Linux"
description: "Upptäck hur du organiserar och synkar krypterade Markdown-anteckningar över enheter med Joplin för säker och flexibel anteckningshantering → Lär dig mer nu"
sidebar_label: Installera Joplin
services:
- dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Joplin är en open-source app för anteckningar och att-göra-listor som låter dig organisera Markdown-baserade anteckningar i sökbara anteckningsböcker och synka dem över flera enheter. Den erbjuder end-to-end-kryptering, en web clipper och plattformsoberoende synkronisering. Perfekt för dig som värdesätter integritet, flexibilitet och full kontroll över dina data!

![img](https://screensaver01.zap-hosting.com/index.php/s/qfo8k2RXWPFqi3g/preview)

Fundera på att hosta tjänsten själv? Vi guidar dig steg för steg genom installation och konfiguration, plus allt du behöver ha koll på.

:::danger Linux med Desktop-variant krävs
Den här applikationen kan endast installeras och användas på ett Linux-system med grafiskt gränssnitt; i detta exempel används Ubuntu Desktop 25.04 som referens.

:::





## Förutsättningar

Innan du installerar **Joplin**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara | Minimum | ZAP-Hosting Rekommendation |
| ---------- | ------------ | -------------------------- |
| CPU | 1 vCPU-kärna | 4 vCPU-kärnor |
| RAM | 2 GB | 4 GB |
| Diskutrymme | 250 MB | 250 MB |

Mjukvaran kräver att alla nödvändiga beroenden är installerade och att den körs på ett stödt operativsystem. Säkerställ att din server uppfyller följande krav innan du fortsätter med installationen:

**Beroenden:** `Libfuse2`

**Operativsystem:** Linux med Desktop-stöd

Se till att alla beroenden är installerade och att rätt operativsystemsversion används för att undvika kompatibilitetsproblem under installationen av Joplin.



## Förberedelser

Innan du sätter upp **Joplin** behöver du förbereda ditt system. Det innebär att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du fortsätta med installationen av beroenden.

#### Libfuse2
Joplin kräver att Libfuse2 är installerat först. Kör detta kommando: 
```
sudo apt install -y libfuse2
```




## Installation
Nu när alla krav är uppfyllda och förberedelserna klara kan du installera Joplin. Kör följande kommando:

```
wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash
```

Joplin laddas ner och installeras med den officiella installationsscriptet. Låt processen köra klart, sen kan du starta appen direkt.



![img](https://screensaver01.zap-hosting.com/index.php/s/Af9xjkqz7TSr4sZ/preview)



## Konfiguration

Efter installationen bör du konfigurera grundinställningarna för att anpassa appen efter ditt arbetsflöde. Konfigurationen hittar du i *Inställningar*-menyn.

**Synkronisering**
Joplin stödjer flera synkroniseringsmål som Nextcloud, Dropbox, OneDrive eller WebDAV. Välj din favoritleverantör under “Synkronisering” och fyll i dina inloggningsuppgifter. Då håller du dina anteckningar uppdaterade på alla enheter.

**Kryptering**
För att säkra dina synkade anteckningar, aktivera end-to-end-kryptering under “Kryptering”. En nyckel genereras som måste sättas upp på alla enheter som ska komma åt dina anteckningar.

**Editor & Utseende**
Joplin använder Markdown för anteckningar. Under “Editor” kan du ställa in om förhandsgranskning ska visas automatiskt samt justera typsnitt och storlek.

**Plugins & Tillägg**
Den inbyggda plugin-hanteraren låter dig installera extra funktioner, som diagramstöd, kalenderintegration eller avancerad tagghantering.

**Web Clipper**
Vill du kan du aktivera “Joplin Web Clipper” som webbläsartillägg för att spara hela webbsidor eller valda delar direkt som anteckningar.

Med dessa grundinställningar är Joplin redo att användas i allt från uppgiftshantering och projektdokumentation till personliga kunskapsbaser.



![img](https://screensaver01.zap-hosting.com/index.php/s/FyjyeF3EcRFe2qf/preview)




## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Joplin på din Dedikerade Server. Vi rekommenderar även att du kikar på följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration:

- [Joplinapp.org](https://joplin.org/) - Officiell webbplats
- [Joplinapp.org/help/](https://joplinapp.org/help/) - Joplins hjälpcenrum

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂