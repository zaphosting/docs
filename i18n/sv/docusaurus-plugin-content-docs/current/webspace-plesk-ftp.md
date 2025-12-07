---
id: webspace-plesk-ftp
title: "Webspace: Ställ in FTP-access för webspace"
description: "Lär dig hur du hanterar flera FTP-accesser för samarbeten på webprojekt och kontrollerar mappbehörigheter effektivt → Läs mer nu"
sidebar_label: FTP-access
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

FTP står för *file transfer protocol* och behövs för att ladda upp filer från datorn till webspace.
Varje kund får automatiskt FTP-access till den beställda webspacen.

Här förklarar vi hur du sätter upp fler FTP-accesser. Det är grymt om ni är flera som jobbar på ett projekt och varje person ska ha sin egen FTP-access.

De här personerna kan då använda den skapade FTP-accessen bara till de mappar som ägaren av webspacen har valt.

<InlineVoucher />

## Ställ in FTP-access

I Plesk Dashboard öppnar du funktionen "**FTP-access**"

:::info
På den här huvudsidan ser du också IP-adressen, som du kommer behöva för testet senare.
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

Här ser du nu den FTP-access som automatiskt skapats av systemet när webspacen beställdes.
För att skapa ett nytt konto klickar du på knappen "**Lägg till FTP-konto**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

Sen fyller du i önskad info. När allt är ifyllt bekräftar du med "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
Under "**Basmapp**" kan du välja vilken mapp FTP-accessen ska ha tillgång till. Om FTP-accessen ska kunna se och ändra allt behöver du inte ändra nåt här.
:::

## Testa FTP-access

För att testa FTP-accessen behöver du ett program som klarar det. Vi använder *Filezilla Client* som exempel.
Under "**Server**" skriver du in serverns IP som visas på huvudsidan.
Under "**användarnamn**" och "**lösenord**" fyller du i de uppgifter du skapade för FTP-accessen.
Standardporten är "**21**".

## Användarkonto finns redan

Det här meddelandet dyker upp om FTP-kontots namn redan används av någon annan i systemet.
Den beställda webspacen ligger på ett system med flera kunder, och om någon redan använder det namnet kan ingen annan göra det.
Då måste du välja ett annat kontonamn.

<InlineVoucher />