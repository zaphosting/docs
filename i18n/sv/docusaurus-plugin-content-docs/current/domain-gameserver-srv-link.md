---
id: domain-gameserver-srv-link
title: "Domän: Ställ in vidarekoppling till gameserver"
description: "Upptäck hur du vidarekopplar din domän eller subdomän till en gameserver för enkel åtkomst och bättre anslutning → Lär dig mer nu"
sidebar_label: Gameserver-vidarekoppling
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Du kan antingen vidarekoppla hela din domän eller bara en subdomän till din gameserver. Det är smidigt eftersom folk då kan ansluta till din server via en domän istället för att behöva komma ihåg krångliga IP-adresser som bara består av siffror. I den här guiden går vi igenom hur du ställer in en domän för vidarekoppling till din gameserver via DNS-poster.

<InlineVoucher />

:::info
Tänk på att det alltid kan ta upp till 24 timmar innan ändringar i DNS-poster träder i kraft!
:::

## Funktionalitet

För att vidarekoppla IP-adressen skapar du antingen en subdomän som pekar på gameserverns IP, eller så vidarekopplar du hela domänen utan subdomän. Det räcker om gameservern använder spelets standardport. Om servern använder en annan port än standardporten behöver du en extra **SRV-post** för att vidarekoppla subdomänen till gameservern.

:::info
Alla spel stödjer inte vidarekoppling av domän till spelport via SRV-post, så kolla upp i förväg om ditt spel stödjer SRV-poster.
:::

### SRV-tjänst

Tjänstnamnet beror på spelet och börjar alltid med ett **underscore**. Till exempel är tjänstnamnet för en Minecraft-server alltid **_minecraft** och för en FiveM-server **_cfx**.

### SRV-protokoll

Som protokoll anger vi internetprotokollet som används för anslutningen. Här finns **UDP** och **TCP**. Vilket protokoll som används beror också på spelet, och protokollet börjar alltid med ett **underscore** och är antingen **_udp** eller **_tcp**.

## Förberedelser

För att vidarekoppla din domän till en gameserver utan att skapa en subdomän öppnar du först din domän i kontrollpanelen och går sedan till DNS-hanteringen i menyn till vänster.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Där ser du alla befintliga DNS-poster för din domän.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Domänvidarekoppling (Minecraft)

Först måste du ta reda på IP och port för Minecraft-servern du vill vidarekoppla till. Med den info kan du följa stegen nedan.

I vårt exempel använder vi `testserver-domain.de` som domännamn, `123.123.123.123` som server-IP och `25500` som PORT.

### Skapa A-post

För att skapa en ny post klickar du på **Ny post**-knappen.

Då öppnas ett fönster med fyra fält som måste fyllas i:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

**Namn** är huvud- eller subdomänen som vidarekopplingen till IP sker via, detta namn väljer du fritt. **Typ** lämnas på **A** i det här steget. I **Värde** skriver du bara in IP-adressen till Minecraft-servern som du tog reda på tidigare. I vårt exempel ser det ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

När du sparat visas posten så här:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### Skapa SRV-post

Nu måste du skapa en SRV-post, den används för portvidarekoppling vilket behövs om du inte har standardporten.
Klicka därför igen på **Ny post**.

I **Namn** skriver du protokollet och anslutningsdomänen. Domännamnet som skrivs här används senare för att ansluta till servern. Som **Typ** väljer du **SRV** i dropdown-menyn:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

I **Värde** ska tre värden anges: först prioritet som kan lämnas på 0 som standard, sedan porten för gameservern (i vårt exempel `25500`) och sist domännamnet för den nyss skapade **A-posten**.

I vårt exempel ser det ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Felsökning & Resultat

:::important
I slutet av posten måste en punkt skrivas, utan den punkten försöker systemet lägga till domänen automatiskt.
:::

Om du inte följer detta kommer systemet att vidarekoppla `minecraft.testserver-domain.de` till `minecraft.testserver-domain.de.testserver-domain.de` och vidarekopplingen kommer att misslyckas.

## Domänvidarekoppling (FiveM)
Först måste du ta reda på IP och port för FiveM-servern du vill vidarekoppla till. Med den datan kan du följa stegen nedan.

I vårt exempel använder vi `testserver-domain.de` som domännamn, `123.123.123.123` som server-IP och PORT `30300`.

### Skapa A-post
För att skapa en ny post klickar du på **Ny post**.

Då öppnas ett fönster med fyra fält som måste fyllas i:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

**Namn** är huvud- eller subdomänen som vidarekopplingen till IP sker via, detta namn väljer du fritt. **Typ** lämnas på **A** i det här steget. I **Värde** skriver du bara in IP-adressen till FiveM-servern som du tog reda på tidigare. I vårt exempel ser det ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

När du sparat visas posten så här:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### Skapa SRV-post
Nu måste du skapa en SRV-post, den används för portvidarekoppling vilket behövs om du inte har standardporten.
Klicka därför igen på **Ny post**.

I **Namn** skriver du protokollet och anslutningsdomänen. Domännamnet som skrivs här används senare för att ansluta till servern. Som **Typ** väljer du **SRV** i dropdown-menyn:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

I **Värde** ska tre värden anges: först prioritet som kan lämnas på 0 som standard, sedan porten för gameservern (i vårt exempel `30300`) och sist domännamnet för den nyss skapade **A-posten**.

I vårt exempel ser det ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Felsökning & Resultat

:::important
I slutet av posten måste en punkt skrivas, utan den punkten försöker systemet lägga till domänen automatiskt.
:::

Om du inte följer detta kommer systemet att vidarekoppla `fivem.testserver-domain.de` till `fivem.testserver-domain.de.testserver-domain.de` och vidarekopplingen kommer att misslyckas.

<InlineVoucher />