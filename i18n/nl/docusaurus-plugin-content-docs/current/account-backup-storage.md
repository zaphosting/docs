---
id: account-backup-storage
title: "Backupopslag: Backups opslaan, herstellen en downloaden"
description: "Ontdek hoe je je backups veilig opslaat en beheert met schaalbare opslagopties voor eenvoudige herstel en toegang → Leer nu meer"
sidebar_label: Backupopslag
---

## Introductie

De Backupopslag biedt een centrale plek om backups van je diensten op te slaan. Hiermee kun je backupbestanden veilig bewaren, ze direct terugzetten naar je diensten of downloaden voor lokaal gebruik.

Elk account krijgt 10 GB gratis Backupopslag. Heb je meer ruimte nodig? Dan kun je de opslag uitbreiden tot 200 GB tegen een kleine meerprijs.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Functionaliteit van de backupopslag

Backups maak je direct via de webinterface van de betreffende dienst. Zodra een backup is aangemaakt, wordt deze automatisch opgeslagen in de Backupopslag. De opgeslagen backups kun je op twee manieren gebruiken:

- Direct terugzetten naar de bijbehorende dienst via de backupfunctie
- Downloaden vanuit de Backupopslag voor lokaal gebruik



## Toegang tot backupbestanden

Backupbestanden zijn direct na het aanmaken beschikbaar in de Backupopslag. Naast het terugzetten via de dienstinterface, kun je de bestanden ook benaderen via een FTP-verbinding.



## Verbinden met Backupopslag via FTP

Om toegang te krijgen tot de Backupopslag via FTP, installeer je een FTP-client zoals FileZilla voor jouw besturingssysteem en open je de applicatie na installatie. Zodra je FileZilla opent, zie je de volgende interface:

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

Om verbinding te maken, vul je de FTP-gegevens in de velden bovenin FileZilla in. De benodigde gegevens vind je in de webinterface op de Backupopslag-pagina. Open de Backupopslag-sectie en klik op het icoon bovenin de menubalk.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Op de Backupopslag-pagina zie je de FTP-toegangsgegevens in het gemarkeerde gedeelte hieronder. Vul in FileZilla het volgende in:

- **Server**: IP-adres
- **Gebruikersnaam**: FTP-gebruikersnaam
- **Wachtwoord**: FTP-wachtwoord

De poort hoef je niet in te vullen als deze op **21** staat. Klik op **Verbinden** om de verbinding te maken. Na een succesvolle verbinding zie je de backups die door jouw diensten zijn aangemaakt in de bijbehorende mappen.

Vul in FileZilla het IP-adres in bij **Server**, de gebruiker bij **Gebruikersnaam** en het wachtwoord bij **Wachtwoord**. De poort hoef je niet in te vullen als deze *21* is. Klik daarna op **Verbinden**. 
Als de verbinding lukt, vind je de backups van je diensten in de juiste mappen.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Backupmeldingen en logs

In het menu onder **Berichten** vind je een logboek van alle backup-gerelateerde acties. Hier zie je welke backup-events zijn uitgevoerd, voor welke dienst of pakket en op welk tijdstip.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)
