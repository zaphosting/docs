---
id: dedicated-linux-fivem
title: "Dedikerad Server: FiveM Dedikerad Server Linux Setup (GS/TS3 Interface)"
description: "Upptäck hur du sätter upp och kör din egen FiveM Dedikerad Server med txAdmin för smidig multiplayer → Lär dig mer nu"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduktion
Har du en dedikerad server och vill installera och driva din egen FiveM Dedikerad Server med txAdmin? Då har du kommit rätt! Här går vi igenom alla nödvändiga steg för installation och konfiguration samt vad du behöver tänka på.

:::warning  Operativsystem valt och installerat
Vi förutsätter att du redan har valt och installerat ett operativsystem på din dedikerade server. Om du inte har gjort detta än, måste du först följa stegen i guiden [Initial setup](dedicated-setup.md) för dedikerade servrar.
:::



## Förberedelser

För att kunna sätta upp en FiveM-server krävs vissa förberedelser som måste göras innan själva installationen av FiveM Dedikerad Server kan påbörjas.


### Sätt upp databas

För vårt GS/TS3 interface-alternativ tillhandahåller vi redan egna databaser inkluderade. Men om du föredrar att sätta upp din egen databasserver och databas rekommenderar vi att du kollar in guiden [Install database](dedicated-linux-databases.md).

:::warning
Om du använder din egen databas måste du byta ut de fördefinierade databasuppgifterna mot dina egna under txAdmin-setupen.
:::



### Installera GS/TS3 interface
Med det användarvänliga GS/TS3 interfacet kan du installera din FiveM Dedikerade Server med bara några klick. Ingen förkunskap krävs för denna installation. Allt från installation av nödvändiga paket, serverfiler och själva installationen är helt automatiserad, vilket sparar dig tid och krångel.

:::warning
GS/TS3 interface-funktionen kan användas med följande operativsystem:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Vi jobbar redan på att göra fler och nyare operativsystem och versioner tillgängliga inom kort.
:::

Om du inte är bekant med GS/TS3 interfacet än, rekommenderar vi att du kollar in vår guide [GS/TS3 Interface](dedicated-linux-gs-interface.md).

När du har installerat GS/TS3 interfacet, öppna den nyskapade spelserverservicen. Väl där måste spelet väljas. Gå till sidan **Games**, klicka på tillgängliga spel, sök efter txAdmin och klicka på install-knappen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Skapa FiveM Server license key

Varje FiveM-server behöver en egen licensnyckel som hanteras via nya [Cfx.re Portal](http://portal.cfx.re/). Licensnyckeln kopplas till ditt Cfx.re-konto. Logga in på webbplatsen, gå till kategorin **Server** och klicka på knappen **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguration

Nu kan du börja konfigurera FiveM-servern och txAdmin. Öppna dashboarden för din spelserver. Du hittar länk och inloggningsuppgifter till txAdmin-instansen i txAdmin-sektionen. Öppna den och logga in.

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### txAdmin setup

Under txAdmin-setupen installeras och konfigureras din FiveM-server i fem steg. Följ instruktionerna i txAdmin-gränssnittet och börja med att ange ett **servernamn**. Välj sedan önskad **servertyp**. Exemplet visar installation av en FiveM-server med förinstallerat QBCore.

Välj alternativet **Popular Recipes** i steget **Deployment Type** och sedan **QBCore Framework Template**. Bekräfta önskad **Data Directory** och starta **Recipe Deployer** för att slutföra installationen.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Brandväggskonfiguration

När du installerar FiveM-servern via GS/TS3 interfacet sätts all nödvändig portforwarding upp **automatiskt** i brandväggen. Skulle det uppstå problem kan du även ställa in portforwardingen manuellt via SSH med följande kommando:

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Slutsats

Du har nu framgångsrikt installerat och konfigurerat en FiveM Dedikerad Server på din dedikerade server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂



