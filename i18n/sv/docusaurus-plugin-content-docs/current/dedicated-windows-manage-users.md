---
id: dedicated-windows-manage-users
title: "Dedikerad Server: Hantera Användare på Windows Server"
description: "Upptäck hur du hanterar flera Windows-serveranvändare för säker, simultan fjärråtkomst och personliga miljöer → Lär dig mer nu"
sidebar_label: Lägg till & Hantera Användare
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Windows OS har inbyggd användarhantering som gör det enkelt att lägga till och hantera användare. Några fördelar med att använda individuella användare är simultan (upp till 2) fjärrskrivbordsåtkomst med egna inloggningar, individuella skrivbord och filåtkomst samt ett smidigt behörighetssystem. I den här guiden går vi igenom hur du hanterar användare på din Windows-server.

## Förberedelser

Börja med att ansluta till din Windows-server via RDP. Behöver du hjälp med det, kolla in vår guide för [Initial Access (RDP)](dedicated-windows-userdp.md).

:::important Administratörsrättigheter
Se till att du loggar in som **Administrator** eller en användare med administratörsrättigheter på din Windows-server, annars kan du inte hantera användare.
:::

Varje användare du skapar på din Windows-server kan använda sina egna inloggningsuppgifter för att ansluta via Remote Desktop. Varje användare får sitt eget skrivbord, filer och program som är separata från andra och endast kan ses av användare med administratörsrättigheter. Program som installerats för alla användare är tillgängliga globalt.

Med en vanlig Windows Server-licens kan **2** konton vara inloggade och använda servern samtidigt. Om fler än så ansluter kopplas den användare som var inloggad först bort till förmån för den nya. Det finns däremot ingen gräns för hur många användarkonton du kan skapa.

## Så här öppnar du användarhantering

Användarkonton hanteras via Kontrollpanelen. Börja med att öppna Windows startmeny på din server och välj **Kontrollpanelen**. Klicka på **Användarkonton** för att komma till en undermeny.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Välj återigen **Användarkonton** i menyn för att komma till en översiktssida.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

På översiktssidan klickar du på **Hantera ett annat konto** för att komma till sektionen **Hantera konton**, där du kan hantera användare.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Nu är du redo att hantera användare på din Windows-server. Fortsätt med någon av följande sektioner beroende på vad du vill göra.

## Skapa ny användare

För att skapa en ny användare, välj **Lägg till ett användarkonto** i sektionen **Hantera konton**.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

En ruta öppnas där du fyller i användarnamn, lösenord och en ledtråd för lösenordet. Se till att lösenordet är starkt, annars kan du få ett valideringsfel.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

När du är klar klickar du på nästa och din nya användare skapas.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Till sist måste du lägga till den nya användaren i listan för fjärrskrivbordsanslutningar så att servern accepterar RDP-anslutningar från den. Gå till **Kontrollpanelen** och öppna **System och säkerhet**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Klicka på **Tillåt fjärråtkomst** för att öppna en ny meny.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

Tryck på **Välj användare...** längst ner för att visa en lista över användare med fjärrskrivbordsåtkomst.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

I den menyn klickar du på **Lägg till...** för att öppna en ny användarväljare och väljer sedan **Avancerat...**.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

Fönstret expanderar så att du lättare kan hitta användaren. Klicka på **Sök nu** för att få en lista med användare och hitta din nya användare, i exemplet här `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Markera användaren och klicka på **OK** för att stänga alla menyer och bekräfta ändringarna.

Du har nu skapat en ny användare på din Windows-server med fjärrskrivbordsåtkomst. Testa gärna att ansluta till servern via RDP med den nya användarens inloggning för att säkerställa att allt funkar.

## Hantera användare

Du kan enkelt hantera alla användare via sektionen **Hantera konton**. Välj bara den användare du vill hantera.

:::important Administratörsrättigheter
För att kunna hantera användare måste du vara inloggad som huvud-**Administrator** eller en användare med administratörstyp som har alla nödvändiga rättigheter.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

På sidan kan du använda flera funktioner för att hantera användaren, som att ändra användarnamn, lösenord, kontotyp eller ta bort användaren.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)