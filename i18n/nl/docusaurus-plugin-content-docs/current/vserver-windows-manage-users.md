---
id: vserver-windows-manage-users
title: "VPS: Gebruikers beheren op Windows Server"
description: "Ontdek hoe je meerdere gebruikersaccounts beheert op Windows Server voor veilige, gelijktijdige remote toegang en gepersonaliseerde desktops → Leer het nu"
sidebar_label: Gebruikers toevoegen & beheren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windows OS heeft ingebouwde gebruikersbeheerfuncties waarmee je eenvoudig extra gebruikers kunt beheren. Enkele voordelen van individuele gebruikers zijn gelijktijdige (tot 2) remote desktop toegang met eigen inloggegevens, een persoonlijke desktop en bestandsbeheer, plus een makkelijk permissiesysteem. In deze gids leggen we uit hoe je gebruikers beheert op jouw Windows server.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je Windows server via RDP. Hulp nodig? Check dan onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) gids.

:::important Administratieve Rechten
Zorg dat je inlogt met de **Administrator** gebruiker of een gebruiker met administratieve rechten, anders kun je geen gebruikers beheren.
:::

Elke gebruiker die je aanmaakt op je Windows server kan met zijn eigen inloggegevens via Remote Desktop verbinden. Elke gebruiker heeft een eigen desktop, bestanden en programma’s die onafhankelijk zijn van anderen en alleen zichtbaar voor gebruikers met adminrechten. Programma’s die voor alle gebruikers zijn geïnstalleerd, zijn voor iedereen toegankelijk.

Met een standaard Windows Server-licentie kunnen **2** accounts tegelijk inloggen en de server gebruiken. Als er meer gebruikers proberen in te loggen, wordt de eerste gebruiker afgemeld ten gunste van de nieuwe verbinding. Er is geen limiet aan het aantal gebruikersaccounts dat je kunt aanmaken.

## Toegang tot Gebruikersbeheer

Gebruikersaccounts beheer je via het Configuratiescherm. Open het startmenu op je Windows server en kies **Configuratiescherm**. Selecteer daarna **Gebruikersaccounts** om naar een submenu te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Kies opnieuw **Gebruikersaccounts** in het menu om naar het overzicht te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

Klik op **Een ander account beheren** om naar de sectie **Accounts beheren** te gaan, waar je gebruikers beheert.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Je bent nu klaar om gebruikers op je Windows server te beheren. Ga verder met de sectie die past bij wat je wilt doen.

## Nieuwe gebruiker aanmaken

Om een nieuwe gebruiker aan te maken, klik je op **Een gebruikersaccount toevoegen** in de sectie **Accounts beheren**.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

Er verschijnt een scherm waarin je een gebruikersnaam, wachtwoord en een wachtwoordhint invult. Zorg dat je wachtwoord sterk is, anders krijg je een foutmelding.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Klik op volgende en je nieuwe gebruiker wordt aangemaakt.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Voeg de nieuwe gebruiker daarna toe aan de lijst met Remote Desktop-gebruikers zodat de server RDP-verbindingen van deze gebruiker accepteert. Ga naar **Configuratiescherm** en open **Systeem en beveiliging**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Klik op **Externe toegang toestaan** om een nieuw menu te openen.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

Klik onderaan op **Gebruikers selecteren...** om een lijst te zien van gebruikers met remote desktop toegang.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

Klik op **Toevoegen...** om een nieuw venster te openen en kies daar **Geavanceerd...**.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

Klik op **Nu zoeken** om een lijst met gebruikers te krijgen en zoek je nieuwe gebruiker, in dit voorbeeld `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Selecteer de gebruiker en klik op **OK** om alle vensters te sluiten en de wijzigingen te bevestigen.

Je hebt nu succesvol een nieuwe gebruiker aangemaakt met toegang tot Remote Desktop. Test de verbinding via RDP met de inloggegevens van de nieuwe gebruiker om te checken of alles werkt.

## Gebruikers beheren

Je beheert gebruikers eenvoudig via de sectie **Accounts beheren**. Selecteer een gebruiker die je wilt aanpassen.

:::important Administratieve Rechten
Om gebruikers te beheren moet je ingelogd zijn met het hoofdaccount **Administrator** of een gebruiker met adminrechten die alle benodigde privileges heeft.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

Op de pagina kun je verschillende acties uitvoeren zoals gebruikersnaam, wachtwoord en accounttype aanpassen of de gebruiker verwijderen.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />