---
id: domain-gameserver-srv-link
title: "Domän: Ställ in spelserver-vidarebefordran"
description: "Upptäck hur du vidarebefordrar din domän eller subdomän till en spelserver för enkel åtkomst och bättre anslutning → Lär dig mer nu"
sidebar_label: Spelserver-vidarebefordran
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Du kan antingen vidarebefordra hela din domän eller bara en subdomän till din spelserver. Det är smart eftersom folk då kan ansluta till din spelserver via en domän istället för att behöva komma ihåg krångliga IP-adresser som bara består av siffror. I den här guiden går vi igenom hur du ställer in en domän för att vidarebefordra till din spelserver via DNS-poster.

:::info
Tänk på att det alltid kan ta upp till 24 timmar innan ändringar i DNS-poster träder i kraft!
:::

## Funktionalitet

För att vidarebefordra IP-adressen skapar du antingen en subdomän som pekar på spelserverns IP, eller så vidarebefordrar du hela domänen utan subdomän. Det räcker om spelservern använder spelets standardport. Om spelservern använder en annan port än spelets standardport behöver du en extra **SRV-post** för att vidarebefordra subdomänen till spelservern.

:::info
Alla spel stödjer inte vidarebefordran av domän till spelport via SRV-post, så kolla upp i förväg om ditt spel stödjer SRV-poster.
:::

### SRV-tjänst

Tjänstenamnet beror på spelet och börjar alltid med ett **underscore**. Till exempel är tjänstenamnet för en Minecraft-spelserver alltid **_minecraft** och för en FiveM-spelserver **_cfx**.

### SRV-protokoll

Som protokoll anger vi internetprotokollet som används för anslutningen. Här finns **UDP** och **TCP**. Vilket protokoll som används beror också på spelet, och protokollet börjar alltid med ett **underscore** och är antingen **_udp** eller **_tcp**.

## Förberedelse

För att vidarebefordra din domän till en spelserver utan att skapa en subdomän, öppna först din domän i kontrollpanelen och gå sedan till DNS-hanteringen i menyn till vänster.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Där ser du alla befintliga DNS-poster för din domän.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Domän-vidarebefordran (Minecraft)

Först måste du ta reda på IP och port för Minecraft-servern du vill vidarebefordra till. Med den info kan du följa stegen nedan.

I vårt exempel använder vi `testserver-domain.de` som domännamn, `123.123.123.123` som server-IP och `25500` som PORT.

### Skapa A-post

För att skapa en ny post, klicka på **Ny post**-knappen.

Ett fönster öppnas med fyra fält som måste fyllas i:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

**Namn** är huvud- eller subdomänen som vidarebefordras till IP-adressen, detta namn kan du välja fritt. **Typ** lämnas på **A** i det här steget. I **Värde** skriver du bara in IP-adressen till Minecraft-servern som du tog reda på tidigare. I vårt exempel ser det ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

När du sparat visas posten så här:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### Skapa SRV-post

Nu måste du skapa en SRV-post, den används för portvidarebefordran vilket behövs om du inte har standardporten.
Klicka igen på **Ny post**-knappen.

I **Namn** skriver du protokollet och anslutningsdomänen. Domännamnet som skrivs här används senare för att ansluta till servern. Som **Typ** väljer du **SRV** i dropdown-menyn:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

I **Värde** ska tre värden anges: först prioritet som kan vara 0 som standard, sedan porten för spelservern (i vårt exempel `25500`) och sist domännamnet för den nyss skapade **A-posten**.

I vårt exempel ser det ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Felsökning & Resultat

:::important
I slutet av posten måste en punkt skrivas, utan den punkten försöker systemet lägga till domänen automatiskt.
:::

Om du inte följer detta kommer systemet att vidarebefordra `minecraft.testserver-domain.de` till `minecraft.testserver-domain.de.testserver-domain.de` och vidarebefordran kommer att misslyckas.

## Domän-vidarebefordran (FiveM)

Först måste du ta reda på IP och port för FiveM-servern du vill vidarebefordra till. Med den info kan du följa stegen nedan.

I vårt exempel använder vi `testserver-domain.de` som domännamn, `123.123.123.123` som server-IP och PORT `30300`.

### Skapa A-post

För att skapa en ny post, klicka på **Ny post**-knappen.

Ett fönster öppnas med fyra fält som måste fyllas i:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

**Namn** är huvud- eller subdomänen som vidarebefordras till IP-adressen, detta namn kan du välja fritt. **Typ** lämnas på **A** i det här steget. I **Värde** skriver du bara in IP-adressen till FiveM-servern som du tog reda på tidigare. I vårt exempel ser det ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

När du sparat visas posten så här:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### Skapa SRV-post

Nu måste du skapa en SRV-post, den används för portvidarebefordran vilket behövs om du inte har standardporten.
Klicka igen på **Ny post**-knappen.

I **Namn** skriver du protokollet och anslutningsdomänen. Domännamnet som skrivs här används senare för att ansluta till servern. Som **Typ** väljer du **SRV** i dropdown-menyn:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

I **Värde** ska tre värden anges: först prioritet som kan vara 0 som standard, sedan porten för spelservern (i vårt exempel `30300`) och sist domännamnet för den nyss skapade **A-posten**.

I vårt exempel ser det ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Felsökning & Resultat

:::important
I slutet av posten måste en punkt skrivas, utan den punkten försöker systemet lägga till domänen automatiskt.
:::

Om du inte följer detta kommer systemet att vidarebefordra `fivem.testserver-domain.de` till `fivem.testserver-domain.de.testserver-domain.de` och vidarebefordran kommer att misslyckas.

<InlineVoucher />