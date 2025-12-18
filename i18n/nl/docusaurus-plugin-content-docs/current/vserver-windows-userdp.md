---
id: vserver-windows-userdp
title: "VPS: Toegang tot Windows Server via Remote Desktop (RDP)"
description: "Ontdek hoe je veilig op afstand verbinding maakt met je Windows-server via RDP en eenvoudig toegang beheert → Leer het nu"
sidebar_label: Eerste Toegang (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windows OS gebruikt het Remote Desktop (RDP) protocol om eenvoudig op afstand verbinding te maken met andere Windows-systemen. In deze gids nemen we je mee door het simpele verbindingsproces via RDP naar jouw Windows-server.

<InlineVoucher />

## Voorbereiden van Verbindingsgegevens

Ongeacht welke applicatie je gebruikt om toegang te krijgen tot de Windows-server, moet je altijd inloggegevens invoeren om verbinding te maken met de server.

Begin door naar het webinterfacepaneel van je server te gaan en navigeer naar de **Toegang & Beveiliging** sectie. Op deze pagina vind je alle benodigde info, vooral het **IP-adres** van je server en de gebruikersinloggegevens. Je gebruikersgegevens bestaan uit het **Gebruikersnaam** veld, dat `Administrator` moet zijn, en het **Wachtwoord** veld.

Als je server nieuw is, kun je hier je initiële, willekeurig gegenereerde wachtwoord vinden via een prompt. Anders is het wachtwoord om veiligheidsredenen verborgen, maar als je het wachtwoord vergeet, kun je op dezelfde pagina eenvoudig een nieuw wachtwoord aanmaken of instellen.

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

Nu je je verbindingsgegevens klaar hebt, ga je door naar de volgende sectie om een geschikte applicatie te kiezen om verbinding te maken.

## Verbinden via Windows

Sinds het ontstaan van RDP heeft Windows OS de **Remote Desktop Connection** applicatie standaard geïnstalleerd als kernsysteemapplicatie. Je opent deze simpel door ernaar te zoeken in de Windows zoekbalk of door op de Windows-toets/icon te drukken en via het startmenu te zoeken.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Vul in het nieuwe venster bij **Computer** het IP-adres van je server in en klik op **Verbinden**. Je ziet nu een native Windows inlogprompt verschijnen, waar je de **Gebruikersnaam** `Administrator` invult en het **Wachtwoord** van je Windows-server.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Klik nu op **OK** en je zou nu op afstand verbonden moeten zijn met je Windows-server. Mocht je problemen ondervinden, controleer dan of je de juiste inloggegevens hebt ingevuld.

:::info
Het kan zijn dat je bij de eerste verbinding een certificaatfout ziet verschijnen. Dit is normaal en kan veilig genegeerd worden.
:::

Je bent nu succesvol verbonden met je Windows Server.

## Andere Remote Desktop (RDP) Apps

### Desktop Apps

De volgende programma’s zijn goede alternatieven die geschikt zijn om via het Remote Desktop protocol (RDP) verbinding te maken met je Windows-server. We raden aan om de ingebouwde applicatie te gebruiken als je vanaf Windows werkt (zoals in de vorige stap), omdat dit minder gedoe geeft en goed werkt.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Apps voor Mobiele Apparaten

Tegenwoordig biedt Microsoft een officiële Remote Desktop (RDP) app aan voor de twee grootste mobiele besturingssystemen. We raden aan deze te gebruiken op mobiel, omdat ze veel handige functies hebben.

De app vind je hier, afhankelijk van het platform: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) en [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />