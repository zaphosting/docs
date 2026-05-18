---
id: arma-reforger-mods
title: "Arma Reforger: Installera Mods via Workshop"
description: "Lär dig hur du installerar och aktiverar Arma Reforger Workshop-mods på din server → Läs mer nu"
sidebar_label: Installera Mods
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Mods spelar en viktig roll för att utöka spelupplevelsen i **Arma Reforger**. Genom **Arma Reforger Workshop** publicerar spelare och skapare egna uppdrag, gameplay-ändringar, kartor och extra innehåll som kan användas på servrar.

Att installera mods låter serverägare anpassa gameplay, introducera nya mekaniker eller erbjuda unika uppdrag för sin community. När mods är installerade laddas de automatiskt ner av spelare som ansluter till servern.

<InlineVoucher />

## Hitta Mods

Först behöver du **Workshop ID** för modden du vill installera. Öppna **Arma Reforger Workshop** och navigera till den mod du vill ha. Varje workshop-post har en unik identifierare som servern använder för att automatiskt ladda ner modden.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## Konfiguration

För att installera workshop-mods på din server, öppna ditt **gameserver kontrollpanel** och gå till **Inställningar**. Hitta konfigurationsfältet som heter **Workshop-Mods**. I det här fältet skriver du in **Workshop ID** för modden du vill installera. Exempel på konfiguration med en mod:

```
1234567890
```
Vill du installera flera mods, skriv in varje Workshop ID och separera dem med ett **kommatecken**. Exempel på konfiguration med flera mods:

```
1234567890,9876543210,1357924680
```
När du har lagt in önskade mod-ID:n, **spara inställningarna** och starta om servern. Under uppstart laddar servern automatiskt ner de listade mods från Arma Reforger Workshop och aktiverar dem.

## Avslutning

Grattis! Du har nu installerat **Arma Reforger Workshop-mods** på din server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />