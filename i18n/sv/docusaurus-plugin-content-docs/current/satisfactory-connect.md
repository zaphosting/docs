---
id: satisfactory-connect
title: "Satisfactory: Anslut till Servern"
description: "Upptäck hur du ansluter och hanterar din Satisfactory-server effektivt för en smidig spelupplevelse → Lär dig mer nu"
sidebar_label: Anslut till Servern
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="Hur du skapar en Satisfactory-server hos ZAP och laddar upp din egen save-game" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

:::info
Om du redan använder ett QWERTY-tangentbord, behöver du inte göra dessa steg, tryck bara CTRL + SHIFT + L och öppna konsolen med ~
:::

För att ansluta till din Satisfactory-server måste du öppna spelets konsol, det finns två sätt att göra det på.

<InlineVoucher />

## Öppna Konsolen

### Byta tangentbordslayout
Du kan enkelt byta tangentbordslayout på några sekunder.
Starta ditt Satisfactory-spel tills du är i huvudmenyn.
Tryck nu `CTRL + Shift` så ska din tangentbordslayout ändras till `EN`.
Du kan enkelt kolla om det funkade genom att växla till skrivbordet och se om det står `EN` nere till höger i aktivitetsfältet.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Om bytet lyckades kan du gå tillbaka till spelet, tryck nu `CTRL + SHIFT + L`
Tryck sedan på `^` på tangentbordet, konsolen ska öppnas.

### Ändra tangenten som öppnar konsolen
Tryck `Windows-tangenten + R` eller sök i startmenyn efter `Kör`
Klistra in den här sökvägen:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

och tryck enter.

Öppna nu filen Input.ini med en valfri textredigerare (t.ex. Anteckningar)

:::info
Om filen inte finns än, skapa den bara.
:::

Lägg till den här texten i filen:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Spara och starta om spelet – nu kan du öppna konsolen med `F6`

## Anslut till din Satisfactory Gameserver
Kopiera IP-adressen från din serverpanel:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Öppna konsolen i spelet, som beskrivet tidigare

Skriv nu `open IP-adress-till-din-server` i konsolen.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

och tryck enter.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Du ansluter nu till din Satisfactory-server!

## HUB:en
HUB:en är redan placerad i världen, du kan förstöra den om du vill genom att trycka `F` och placera om den på en annan plats.
Du hittar HUB:en enkelt genom att följa markeringen.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
Servern sparar ditt framsteg var 5:e minut, du kan se sparfilerna i savegame-managern i din serverpanel.
Den behåller alltid de senaste 6 sparningarna (30 minuter) av framsteg.

<InlineVoucher />