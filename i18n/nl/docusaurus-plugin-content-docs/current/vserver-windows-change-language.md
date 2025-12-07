---
id: vserver-windows-change-language
title: "VPS: Talen beheren op Windows Server"
description: "Ontdek hoe je de taalinstellingen van je Windows-server aanpast voor een lokale ervaring en betere gebruiksvriendelijkheid → Leer het nu"
sidebar_label: Talen Toevoegen & Beheren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windows OS is beschikbaar in heel veel talen, zodat je makkelijk je eigen taal kunt gebruiken. In deze gids leggen we uit hoe je de taal van je Windows-server kunt aanpassen.

:::info
Tijdens de eerste serverconfiguratie kun je kiezen tussen een Engelse of Duitse serverversie, aangegeven met de **(EN)** en **(DE)** tags bij het selecteren van de OS-versie.
:::

<InlineVoucher />

## Taalpakketten Toevoegen

Taalpakketten zijn een handige functie in Windows waarmee je eenvoudig gelokaliseerde taalpakketten op je server kunt beheren.

Begin met verbinden met je Windows-server via RDP. Heb je hulp nodig? Check dan onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) gids.

Als je verbonden bent, zoek dan naar **Taal** via de Windows zoekbalk of door op de Windows-toets/icoon te drukken en de zoekbalk in het startmenu te gebruiken.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

Op deze pagina vind je het taalgedeelte en klik je op de knop **Een taal toevoegen**.

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

Gebruik het menu om de taal te zoeken die je wilt installeren en selecteer deze door op **Volgende** te klikken. Zorg er op de volgende pagina voor dat alle opties zijn aangevinkt, inclusief de optie **Instellen als Windows-weergavetaal** als je deze meteen wilt activeren.

:::important
Om de taal van het Windows OS zelf te veranderen, moet de geselecteerde taal de **Weergavetaal** functionaliteit ondersteunen.
:::

:::tip
Zie je geen talen met het veld **Weergavetaal**? Installeer dan eerst alle openstaande Windows-updates via **Update & Beveiliging** in de Instellingen. Dit lost deze [bug](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience) op.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows begint nu met het downloaden van het geselecteerde taalpakket. Heb even geduld, dit kan even duren.

Na het downloaden, als je tijdens het downloaden niet de optie **Instellen als Windows-weergavetaal** hebt aangevinkt, ga dan terug naar de taalpagina en selecteer het daar in het dropdownmenu.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Herstart je server als laatste stap en de nieuwe taal wordt gebruikt. Je hebt nu succesvol taalpakketten beheerd op je Windows-server.

## Server OS Opnieuw Installeren

Als je problemen hebt met het veranderen van taalpakketten of je server is nog splinternieuw, kun je er ook voor kiezen om je Windows-server opnieuw te installeren in het Engels of Duits via de beschikbare OS-versies.

:::warning
Het opnieuw installeren van het OS is een destructief proces en **verwijdert** alle data op de server. Zorg dat je belangrijke data eerst back-upt voordat je hiermee doorgaat.
:::

Dit doe je via het webinterfacepaneel van je server, onder de **Instellingen** sectie.

Op deze pagina kun je kiezen tussen **Windows (EN)** en **Windows (DE)** voor de gewenste taal en de server opnieuw installeren.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

Zodra je de herinstallatie gestart hebt, heb even geduld want het kan tot 30 minuten duren voordat het proces helemaal klaar is.

<InlineVoucher />