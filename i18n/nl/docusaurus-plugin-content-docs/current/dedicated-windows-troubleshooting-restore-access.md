---
id: dedicated-windows-troubleshooting-restore-access
title: "Dedicated Server: Toegang herstellen"
description: "Ontdek hoe je weer toegang krijgt tot je Windows Dedicated Server na een wachtwoord-lockout en minimaliseer downtime → Leer het nu"
sidebar_label: Toegang herstellen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Het kan snel gebeuren... Je probeert in te loggen op je Windows Server, maar je wachtwoord wordt niet meer geaccepteerd of je bent het gewoon vergeten. Plotseling ben je buitengesloten en is toegang tot belangrijke data en applicaties niet meer mogelijk. Deze situatie is natuurlijk frustrerend, maar het is zeker niet het einde. Door de onderstaande stappen te volgen, krijg je weer toegang tot je Windows Dedicated Server en kun je je werk met minimale onderbreking voortzetten.

## Voorbereiding
Toegang resetten via het administrator-account doe je met een Windows ISO-bestand. Dit is hetzelfde ISO-bestand dat oorspronkelijk gebruikt is voor de installatie van het Windows Server besturingssysteem.

Deze stap kan je uitvoeren via de [**Eerste installatie**](dedicated-setup.md) of via **[ISO](dedicated-iso.md)**. Kies of geef het ISO-bestand op dat oorspronkelijk gebruikt is, afhankelijk van de methode die je gebruikt.

Mount de ISO en start het systeem daarna opnieuw op. De Windows installatie-interface zou de volgende keer dat het systeem opstart weer moeten openen. Het resultaat zou er zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)

## Toegang herstellen

Nu is het tijd om de toegang van het administrator-account te resetten. Volg hiervoor opnieuw de eerste stappen van de setup. Je hoeft alleen door te gaan tot het begin van de installatie en dan te kiezen voor **Herstel je computer**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)

Dit opent de geavanceerde opties. Klik op **Probleemoplossing** en daarna op **Opdrachtprompt**. Hiermee opent de command prompt (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

Voer nu de onderstaande commando’s één voor één uit in de command prompt:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

Het toetsenbordindeling van de iLO HTML-console kan verschillen van jouw eigen indeling, waardoor bepaalde symbolen op andere toetsen zitten. Houd hier rekening mee voor het correct uitvoeren van de commando’s.

:::

Na het herstarten van de server, druk je op het inlogscherm op de toetscombinatie **Win+U**. In het geopende command prompt venster typ je het volgende:

```
net user Administrator YourNewPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Je wachtwoord is nu veranderd. Je moet echter de wijzigingen aan de **Utilman-bestanden** ongedaan maken. Start hiervoor je server opnieuw op en volg deze stappen weer. Voer in de command prompt de volgende commando’s opnieuw uit:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```

## Afsluiting

Als je dit proces hebt afgerond, heb je succesvol een nieuw wachtwoord ingesteld voor de administrator-gebruiker. Hiermee kun je nu weer inloggen via de Remote Desktop verbinding. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂