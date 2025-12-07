---
id: dedicated-windows-manage-users
title: "Dedicated Server: Gebruikers beheren op Windows Server"
description: "Ontdek hoe je meerdere Windows-servergebruikers beheert voor veilige, gelijktijdige remote toegang en gepersonaliseerde omgevingen → Leer het nu"
sidebar_label: Gebruikers toevoegen & beheren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windows OS heeft ingebouwde gebruikersbeheerfuncties waarmee je eenvoudig extra gebruikers kunt beheren. Enkele voordelen van individuele gebruikers zijn gelijktijdige (tot 2) Remote Desktop-toegang met eigen inloggegevens, een persoonlijke desktop en bestandsbeheer, plus een makkelijk permissiesysteem. In deze gids leggen we uit hoe je gebruikers beheert op jouw Windows-server.

## Voorbereiding

Begin met verbinden met je Windows-server via RDP. Hulp nodig? Check dan onze [Initial Access (RDP)](dedicated-windows-userdp.md) gids.

:::important Administratieve rechten
Zorg dat je inlogt met de **Administrator** gebruiker of een gebruiker met administratieve rechten, anders kun je geen gebruikers beheren.
:::

Elke gebruiker die je aanmaakt op je Windows-server kan met zijn eigen inloggegevens via Remote Desktop verbinden. Elke gebruiker heeft een eigen desktop, bestanden en programma’s die onafhankelijk zijn van anderen en alleen zichtbaar voor gebruikers met adminrechten. Programma’s die voor alle gebruikers zijn geïnstalleerd, zijn voor iedereen toegankelijk.

Met een standaard Windows Server-licentie kunnen **2** accounts gelijktijdig inloggen en de server gebruiken. Als er meer dan 2 gebruikers verbinden, wordt de eerste gebruiker automatisch uitgelogd ten gunste van de nieuwe verbinding. Er is geen limiet aan het aantal gebruikersaccounts dat je kunt aanmaken.

## Gebruikersbeheer openen

Gebruikersaccounts beheer je via het Configuratiescherm. Open het startmenu op je Windows-server en kies **Configuratiescherm**. Selecteer vervolgens **Gebruikersaccounts** om naar een submenu te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Kies opnieuw **Gebruikersaccounts** in het menu om naar het overzicht te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

Klik op **Een ander account beheren** om naar de sectie **Accounts beheren** te gaan, waar je gebruikers kunt beheren.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Je bent nu klaar om gebruikers op je Windows-server te beheren. Ga verder met de sectie die past bij wat je wilt doen.

## Nieuwe gebruiker aanmaken

Klik op **Een gebruikersaccount toevoegen** in de sectie **Accounts beheren** om een nieuwe gebruiker aan te maken.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

Er verschijnt een scherm waarin je een gebruikersnaam, wachtwoord en een wachtwoordhint moet invullen. Zorg dat je een sterk wachtwoord kiest, anders krijg je een foutmelding.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Klik op Volgende en je nieuwe gebruiker wordt aangemaakt.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Voeg de nieuwe gebruiker daarna toe aan de lijst met Remote Desktop-gebruikers zodat deze verbinding mag maken. Ga naar **Configuratiescherm** en open **Systeem en beveiliging**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Klik op **Externe toegang toestaan** om een nieuw menu te openen.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

Klik onderaan op **Gebruikers selecteren...** om een lijst te zien van gebruikers met Remote Desktop-toegang.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

Klik op **Toevoegen...** om een nieuwe gebruiker toe te voegen en kies daarna **Geavanceerd...**.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

Klik op **Nu zoeken** om een lijst met gebruikers te krijgen en selecteer je nieuwe gebruiker, in dit voorbeeld `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Bevestig met **OK** en sluit alle menu’s.

Je hebt nu succesvol een nieuwe gebruiker aangemaakt met Remote Desktop-toegang. Test de verbinding via RDP met de nieuwe inloggegevens om te checken of alles werkt.

## Gebruikers beheren

Beheer gebruikers eenvoudig via de sectie **Accounts beheren**. Selecteer een gebruiker die je wilt aanpassen.

:::important Administratieve rechten
Je moet ingelogd zijn met het hoofdaccount **Administrator** of een gebruiker met adminrechten om gebruikers te kunnen beheren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

Op deze pagina kun je de gebruikersnaam, het wachtwoord, het accounttype aanpassen of de gebruiker verwijderen.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)