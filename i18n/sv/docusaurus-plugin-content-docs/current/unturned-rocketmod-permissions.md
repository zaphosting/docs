---
id: unturned-rocketmod-permissions
title: "Unturned: Justera serverbehörigheter"
description: "Lär dig hur du hanterar och anpassar serverbehörigheter effektivt för bättre kontroll och säkerhet → Läs mer nu"
sidebar_label: Justera behörigheter
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Förberedelser
För att de nödvändiga konfigurationsfilerna ska skapas av servern måste den först startas.
Om servern är online kan du stoppa den igen.
Alla filer som vi eller servern behövde har då skapats.

## Öppna konfigurationen
Behörigheterna sparas i filen "Permissions.config.xml".
Du kan enkelt visa och redigera den här filen via vårt gränssnitt.
Klicka bara på fliken "Configs" i din servers gränssnitt:

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

Konfigurationen heter "Rocket Permissions" och öppnas genom att klicka på den blå pennan för redigering:

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## Förstå konfigurationen
Konfigurationen ser komplicerad och avancerad ut vid första anblick.
Vi hjälper dig att förstå den!
Filen är uppdelad i olika grupper.
Grupperna visas och listas i <groups> </groups>-kategorin.
Den börjar med "<groups>" och slutar med "</groups>":

Början:

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

Slutet:

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

Grupperna visas däremellan.
Till exempel representerar hela blocket en grupp:

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

Där alla nödvändiga parametrar tilldelas gruppen.

## Justera behörigheterna
Inom gruppen hittar du även kategorin "Permissions".
Som du ser i den här skärmdumpen:

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

Här kan vi nu justera gruppens behörigheter.
Samt ange väntetiden innan kommandot kan användas igen.
Anta att vi vill ge gruppen rätt att banna användare.
Då kan vi skriva in följande:

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

Det betyder att gruppen nu kan banna spelare, och eftersom "cool down" är satt till 0 sekunder kan det göras utan paus.

Vill vi dessutom ge gruppen rätt att läka sig själv kan det anges så här:

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

Men användaren kan bara använda kommandot var 3600:e sekund.
Samma procedur gäller för andra rättigheter.
Vissa behörigheter kräver dock motsvarande plugins.

## Lägg till användare i gruppen
Grupperna är nu skapade med önskade behörigheter.
Men nu måste användare tilldelas gruppen.
För detta behövs användarens Steam64ID.
Du kan ta reda på det genom att klicka på följande länk:
https://steamid.io/

När du har Steam64ID kan du lägga in det i konfigurationen.
Det görs här med parametern Member:

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

I ett exempel skulle det se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

Det är alltså alltid nödvändigt att skapa en ny rad för varje ny användare som ska tilldelas gruppen.
När du har lagt till alla önskade användare kan du spara konfigurationen genom att klicka på "Save".
Starta sedan servern så är du tilldelad gruppen i spelet!

<InlineVoucher />