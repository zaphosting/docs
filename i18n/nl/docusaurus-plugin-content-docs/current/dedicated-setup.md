---
id: dedicated-setup
title: "Dedicated Server: Eerste setup"
description: "Ontdek hoe je jouw ZAP Dedicated Server makkelijk instelt en toegang krijgt tot verschillende besturingssystemen → Leer het nu"
sidebar_label: Eerste setup
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Ben je nog nieuw in dit gebied en maak je je zorgen dat je zo’n service niet goed kunt opzetten of dat je tegen problemen aanloopt? Geen stress! Deze gids en onze setup-assistent nemen je stap voor stap mee bij de eerste setup van jouw ZAP Dedicated Server.

## Voorbereiding

### iLO activeren
Voor de eerste setup moet je eerst de iLO beheerinterface activeren. Dit kan even duren. Voor meer info en het verdere gebruik van de iLO beheerinterface raden we je aan om de [iLO](dedicated-ilo.md) gids te checken.

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

Zodra iLO geactiveerd is, zie je de status als **Actief**. De iLO sessie is standaard drie uur actief en moet daarna opnieuw geactiveerd worden als je weer toegang wilt. Je kunt nu verder met het kiezen van de ISO.

### ISO kiezen

De volgende stap is het kiezen van een ISO die je wilt mounten voor de eerste setup. Klik hiervoor op het dropdown-menu, selecteer een ISO-bestand en klik op de **Invoegen** knop.

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

We bieden standaard een breed scala aan ISO-bestanden voor de meest gebruikte besturingssystemen zoals Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux en Proxmox. Hieronder vind je een overzicht van alle beschikbare besturingssystemen en hun versies.

| ISO (Besturingssysteem) | Versies                                               |
| ----------------------- | ---------------------------------------------------- |
| Debian                  | 12, 11, 10.9, 9.13                                   |
| Ubuntu                  | 22.04.3, 22.04, 22.02, 18.04                         |
| FreeBSD                 | 13.0, 12.2, 11.4                                     |
| Windows                 | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS                  | 7.9, 8.3                                             |
| ArchLinux               | 2023                                                 |
| Proxmox                 | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1             |

Je kunt ook je eigen ISO toevoegen en mounten. Voor meer info over het mounten van je eigen ISO-bestand, check de **[Eigen ISO](dedicated-iso.md)** gids.

## Installatie

### ISO mounten en opstarten

Als het ISO-bestand succesvol is geselecteerd en ingevoegd, moet het systeem nu één keer herstart worden zodat de wijziging wordt geaccepteerd en het systeem opstart vanaf het ISO-bestand. Klik hiervoor simpelweg op de **Herstart** knop. Het kan even duren voordat de herstart klaar is.

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Besturingssysteem installeren via iLO

De basis voor het installeren van jouw gewenste besturingssysteem is nu gelegd. Het systeem heeft de ISO gemount en de setup gestart. Open nu de **iLO beheerinterface** van je server en klik direct op "Integrated Remote Console: **HTML 5**" om het scherm van je server te openen. Meer info over het bedienen van de console in de iLO beheerinterface vind je in onze [iLO](dedicated-ilo.md) gids.

De installatie van het besturingssysteem gebeurt nu in de HTML-console. We hebben ook handleidingen voor de meest gebruikte besturingssystemen. Voor meer info over de volgende stappen, check de relevante gidsen:

- [Windows installeren](dedicated-windows.md)
- [Debian installeren](dedicated-linux-debian.md)
- [Ubuntu installeren](dedicated-linux-ubuntu.md)
- [FreeBSD installeren](dedicated-freebsd.md)
- [CentOS installeren](dedicated-centos.md)
- [Proxmox installeren](dedicated-proxmox.md)