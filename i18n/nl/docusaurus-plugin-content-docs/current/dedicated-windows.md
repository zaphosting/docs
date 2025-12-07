---
id: dedicated-windows
title: "Dedicated Server: Installatie van Windows Server 2025"
description: "Ontdek hoe je Windows Server 2025 succesvol installeert en configureert op je dedicated server voor optimale prestaties → Leer het nu"
sidebar_label: Windows Server 2025
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Hier leggen we je stap voor stap uit hoe je het Windows Server besturingssysteem installeert en configureert op je dedicated server. Volg deze instructies goed om ervoor te zorgen dat je het OS succesvol opzet en optimaal gebruikt.



:::info Windows Server 2025

De setup-stappen en demo in deze gids zijn gebaseerd op het **Windows Server 2025** besturingssysteem. **Oudere OS-versies** kunnen verschillen in **structuur** en **uiterlijk**. De procedure is echter vergelijkbaar.  
:::





## Voorbereiding
Voor de installatie en configuratie van een besturingssysteem is het eerst belangrijk om de juiste ISO van het OS te mounten. Er zijn verschillende manieren om dit te doen:

1. Mounten via de initiële setup
2. Mounten via iLO (Virtual Media)
3. Mounten via iLO (Remote Console)

Als je nog niet bekend bent met het mounten van een ISO-bestand, kun je het beste onze [Initiële setup](dedicated-setup.md) of [Eigen ISO](dedicated-iso.md) handleiding raadplegen.



## Installatie

Zodra het ISO-bestand succesvol is gemount, start de Windows Server installatie automatisch bij de volgende herstart van het systeem. Eerst moet je de taal en het toetsenbordindeling kiezen. Daarna kies je de setup-optie waarbij je **Windows Server installeren** selecteert.

![img](https://screensaver01.zap-hosting.com/index.php/s/gW4cr5WDGYEdBzw/download)

Zodra de installatie gestart is, bereidt het systeem de benodigde componenten voor. Dit kan even duren. Als dit klaar is, kies je de gewenste Windows Server editie. De volgende versies zijn beschikbaar:

- Windows Server 2025 Standard Evaluation
- Windows Server 2025 Standard Evaluation (Desktop Experience)
- Windows Server 2025 Datacenter Evaluation
- Windows Server 2025 Datacenter Evaluation (Desktop Experience)

Heb je een grafische interface en RDP nodig? Kies dan een van de Desktop Experience varianten. Meer info over de verschillen tussen Standard en Datacenter edities vind je op de officiële [Microsoft website](https://learn.microsoft.com/en-us/windows-server/get-started/editions-comparison?pivots=windows-server-2025).

:::warning Windows Server edities en licenties
Zorg dat je de servereditie kiest waarvoor je een geldige licentiesleutel hebt. ZAP-Hosting levert geen Windows Server licentie bij dit product. Na de trialperiode moet je de licentie zelf aanschaffen.
:::

Na het kiezen van de gewenste image bevestig je de meldingen en licentievoorwaarden en geef je aan op welke partitie het OS geïnstalleerd moet worden. Maak hiervoor een nieuwe partitie aan via **Partitie maken**, selecteer daarna de nieuw aangemaakte schijf/partitie en bevestig met Volgende. Start de installatie door te **klikken** op Installeren.

![img](https://screensaver01.zap-hosting.com/index.php/s/2RQcBKiqoJE9MAg/download)

De installatie van Windows Server wordt nu uitgevoerd. Het systeem zal meerdere keren herstarten tijdens het proces. Dit kan even duren.

Stel je inloggegevens in en je bent klaar om in te loggen op je geïnstalleerde OS. Bewaar je inloggegevens goed, want die heb je altijd nodig om in te loggen.

![img](https://screensaver01.zap-hosting.com/index.php/s/FiXwH85pT24DYnJ/download)



## Configuratie

Als het OS is geïnstalleerd, moet je RDP-toegang activeren zodat externe verbindingen toegestaan zijn. Ga hiervoor naar de instellingen van het remote desktop en zet de optie aan.

![img](https://screensaver01.zap-hosting.com/index.php/s/gCCcTzpn69LpgSr/download)



## Afsluiting
Gefeliciteerd, je hebt Windows Server 2025 succesvol geïnstalleerd op je dedicated server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂