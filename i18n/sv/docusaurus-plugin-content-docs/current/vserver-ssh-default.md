---
id: vserver-ssh-default
title: "VPS: Hantera standard SSH-nycklar i profilen"
description: "Upptäck hur du automatiserar SSH-nyckelinställningar för snabbare serveråtkomst och smidigare produktinstallationer med ZAP-Hosting → Lär dig mer nu"
sidebar_label: Standard SSH-nycklar
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
En av våra senaste nyheter i ZAP-Hostings webbgränssnitt är möjligheten att lägga till standard SSH-nycklar till ditt ZAP-Hosting-konto via vår hemsida. Den grymma fördelen med detta är att SSH-nycklarna som du ställer in på din profilsida automatiskt används som standard vid första produktuppsättning eller OS-återinstallation. Det sparar dig tid eftersom du slipper ställa in SSH-nycklarna manuellt.

<InlineVoucher />

## Krav
För att använda den här funktionen måste du ha en genererad SSH-nyckel. Har du redan en SSH-nyckel kan du gå vidare till nästa avsnitt.

För att generera en SSH-nyckel rekommenderar vi att du går till **Information->Access & Security** i ditt vServers webbgränssnitt.

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

Här hittar du en grön knapp med texten **Generate SSH Key**. När du klickar på den laddas din SSH Private Key automatiskt ner till din dator. Det är den nyckeln du använder för att ansluta till din server när SSH är konfigurerat.

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

Spara nu den Public Key som visas i prompten, eftersom det är den du behöver skicka in när du skapar SSH-nyckeln i din profil.

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

Gå vidare till nästa avsnitt när du är redo.

## Hantera SSH-nycklar i profilen
Att hantera dina standard SSH-nycklar i ditt konto är enkelt. Gå till din **[ZAP-Hosting profilsida](https://zap-hosting.com/en/customer/home/profile/)** och scrolla ner till avsnittet **Standard SSH Keys**.

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### Lägg till ny nyckel
För att lägga till en nyckel, klicka först på den gröna plus-ikonen för att öppna skapandeprompten. Välj först ett passande namn för din SSH-nyckel.

Klistra sedan in din SSH Public Key i det andra fältet. Din SSH-nyckel ska vara i OpenSSH-format, börja med `ssh-rsa` och sluta med en suffix. När du är klar, klicka på den gröna **Save**-knappen för att lägga till nyckeln.

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
Se till att du skickar in din **SSH Public Key** och inte SSH Private Key. SSH Private Key används vid inloggning för att autentisera med din Public Key.
:::

Du har nu lagt till en standard SSH-nyckel till ditt ZAP-Hosting-konto.

### Redigera eller ta bort en nyckel
För att redigera en nyckel, klicka på den blå ögon-ikonen som öppnar en prompt. Här kan du se de aktuella uppgifterna och redigera och spara direkt som du vill.

För att ta bort en nyckel klickar du på den röda papperskorgen som tar bort just den nyckeln.

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />