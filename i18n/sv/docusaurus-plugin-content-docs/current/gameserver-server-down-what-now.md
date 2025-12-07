---
id: gameserver-server-down-what-now
title: 'Gameserver: Server nere – Vad gör jag nu?'
description: "Lär dig hur du felsöker game server-krascher genom att analysera loggfiler för att hitta fel och effektiva lösningar → Läs mer nu"
sidebar_label: Serverkrasch – Vad göra?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Om din gameserver är nere kan det bero på många saker. **Det viktiga är att du inte försöker starta om den direkt, utan först kollar i loggfilen. Där finns oftast **felmeddelanden** som berättar exakt varför servern kraschade. **Om du startar om servern direkt så skrivs loggen över och den gamla försvinner. Då kan du tyvärr inte se några fel längre.**

<InlineVoucher />

## Kolla loggfilen

Loggfilen hittar du enkelt via menyn till vänster.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Sen kan du öppna den med det gröna ögat. **Det viktiga är att du alltid öppnar den senaste loggen.
Du känner igen den på datumet eller namnet.

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

När du öppnat den måste du leta efter felmeddelanden (**Fel brukar innehålla ord som "Error", "Cant find", "Couldnt load"**)

I skärmdumpen nedan ser du ett exempel från en FivemServer med en felaktig serverlicensnyckel.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

Då kan du t.ex. googla på felet och se om det är känt. Oftast hittar man snabbt orsaken till felet.

Om du inte hittar något om felet kan du gå till Live Chat och skicka in felet som text eller skärmdump.

## Loggfil utan innehåll

Tyvärr kan det också hända att loggfilen är tom. Då har den inte kunnat skapas eftersom servern gick ner direkt eller raderades vid en omstart. Då kan du bara försöka starta om servern och hoppas att felet dyker upp igen eller att servern startar som vanligt.

## Ingen lösning i live chat

Om du inte hittade någon lösning på Google eller i live chat finns det två alternativ. Det första är att öppna ett supportärende och låta servern vara som den är, så kan supporten kolla närmare på problemet.

Det andra är att återställa en backup eller installera om servern.

### Variant 1 – Återställ en backup

För att återställa en backup går du bara till Backups i menyn till vänster och importerar den senaste backupen med den gröna pilen. Efter det bör servern fungera som vanligt igen.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Variant 2 – Installera om servern

Ominstallationen startar du under "Inställningar" i menyn till vänster. Då återställs hela servern till första dagen (du kan även välja att återställa alla inställningar "**Återställ alla alternativ**")

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Ominstallation utan resultat

Tyvärr är detta värsta scenariot. Då går det tyvärr bara att få servern kollad via chat eller supportärende, eftersom det då är ett allvarligare problem. Vi gör allt vi kan för att lösa det så snabbt som möjligt så att du kan använda din tjänst som vanligt igen.

<InlineVoucher />