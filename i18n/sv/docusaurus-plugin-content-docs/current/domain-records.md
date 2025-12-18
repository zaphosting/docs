---
id: domain-records
title: "Domän: Inställningar för domänposter"
description: "Lär dig hur du konfigurerar och förstår olika DNS-posttyper för att optimera din domänhantering → Läs mer nu"
sidebar_label: Domänposter
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Domäner kan enkelt konfigureras genom att använda en mängd olika DNS-posttyper som utför olika funktioner. I den här guiden går vi igenom alla olika posttyper och förklarar hur de fungerar.

<InlineVoucher />

## Konfiguration

Du kan konfigurera domänposterna i din domänadministration under DNS-administration. Klicka på den gröna knappen **Ny post** för att göra detta. Ett popup-fönster öppnas där du kan konfigurera och skapa nya poster som du vill.

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
Vi använder domänen **zap-hosting.com** för att illustrera de olika typerna av DNS-poster. Använd din egen domän i ditt fall.
:::

:::warning
Se till att när du konfigurerar en DNS-post att en punkt placeras i slutet av posten för att definiera att domännamnet är komplett och för att undvika missförstånd vid tilldelning i DNS-systemet.
:::

## Typer av DNS-poster

Det finns olika typer av DNS-poster som har olika betydelser och syften. Betydelsen och skillnaderna förklaras nedan.

### A-poster

En A-post används för att skapa en vidarebefordran av en "**subdomän**" eller "**huvuddomän**" till en "**IPv4-adress**".

| Namn (Exempel)   | Typ | Värde (Exempel) | TTL  | Prioritet |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | A    | IPv4-adress     | 1440 | 0        |



### AAAA-poster

En AAAA-post används för att skapa en vidarebefordran av en "**subdomän**" eller "**huvuddomän**" till en "**IPv6-adress**".

| Namn (Exempel)   | Typ  | Värde (Exempel) | TTL  | Prioritet |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | AAAA | IPv6-adress     | 1440 | 0        |


### CNAME-poster

En CNAME-post används för att skapa en vidarebefordran av en "**subdomän**" till en "**subdomän**" eller "**huvuddomän**".

| Namn (Exempel) | Typ   | Värde (Exempel)  | TTL  | Prioritet |
| -------------- | ----- | ---------------- | ---- | -------- |
| zap-test.      | CNAME | zap-hosting.com. | 1440 | 0        |



### MX-poster

En MX-post används för att skapa en omdirigering av en "**subdomän**" eller "**huvuddomän**" till en "**domän**" eller "**A-post**". Denna MX-post används för att specificera en eller flera mailservrar. Prioriteten anger vilken mailserver som ska användas i första hand om det finns flera MX-poster. Prioriteten måste vara ett heltal mellan 0 och 65535, ju lägre värde desto högre prioritet.

| Namn (Exempel)   | Typ   | Värde (Exempel)  | TTL  | Prioritet |
| ---------------- | ----- | ---------------- | ---- | -------- |
| zap-hosting.com. | CNAME | mailserverxy.com | 1440 | 0        |



### PTR-poster

En PTR-post används för att skapa en vidarebefordran av en "**IPv4-adress**" eller "**IPv6-adress**" till en "**subdomän**" eller "**huvuddomän**". Denna PTR-post är motsatsen till A- eller AAAA-posten.

| Namn (Exempel)          | Typ  | Värde (Exempel)  | TTL  | Prioritet |
| ----------------------- | -----| ---------------- | ---- | -------- |
| 1.0.0.127.in-addr.arpa. | PTR  | zap-hosting.com. | 1440 | 0        |



### RP-poster

En RP-post används för att ge information om ägaren av domänen. Vanligtvis anges en e-postadress där "**@**" ersätts med en "**punkt**".

| Namn (Exempel) | Typ | Värde (Exempel)       | TTL  | Prioritet |
| -------------- | ----| --------------------- | ---- | -------- |
| rp.            | RP  | info.zap-hosting.com. | 1440 | 0        |

### SRV-poster

En SRV-post används för att skapa en vidarebefordran av en "**subdomän**" eller "**huvuddomän**" till en "**A-post**".  
SRV-poster används för applikationer där ingen standardport används och därför krävs portforwarding.  
Prioriteten definierar vilken av tjänsterna som ska användas i första hand om flera SRV-poster används för samma tjänster.  
Prioriteten måste vara ett heltal, ju lägre värde desto högre prioritet.

| Namn (Exempel)   | Typ | Värde (Exempel)          | TTL  | Prioritet |
| ---------------- | ----| ------------------------ | ---- | -------- |
| zap-hosting.com. | SRV | 0 2006 zap-hosting.com.  | 1440 | 0        |

### TXT-poster

En TXT-post används för att lägga till valfri text. På vissa system används innehållet för att koda administrativ data. Denna TXT-post används för att skapa SPF-, DMARC- och DKIM-poster.

| Namn (Exempel)   | Typ | Värde (Exempel) | TTL  | Prioritet |
| ---------------- | ----| --------------- | ---- | -------- |
| zap-hosting.com. | TXT | v=spf1 -all     | 1440 | 0        |



## Slutsats

Grattis, du har nu skapat och konfigurerat dina DNS-poster! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />