---
id: vserver-rescue
title: "VPS: Red je bestanden met System Rescue"
description: "Ontdek hoe je data herstelt en backups maakt van een niet-opstartbare server met SystemRescue ISO → Leer het nu"
sidebar_label: System Rescue (Backup)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Je server start niet meer op? Je bent buitengesloten van je systeem of wil eerst een backup maken voordat je iets verandert?  
Door je server te booten met de **SystemRescue ISO** kun je alsnog bij je schijven, belangrijke bestanden terugzetten en lokaal backups maken. Dit werkt zelfs als het originele OS niet meer toegankelijk is.

Om de herstelde data veilig over te zetten, kun je **SFTP (Secure File Transfer Protocol)** gebruiken. Hiermee kopieer je bestanden van het rescue-systeem naar je eigen pc of een andere server via een beveiligde en versleutelde verbinding.

<InlineVoucher />

## Voorbereiding

Voor de backup gebruik je de **SystemRescue ISO versie 12.01**.  
Ga eerst naar de interface van je VPS en navigeer naar de sectie **ISOs**.

Selecteer de ISO uit de beschikbare opties. Klik daarna op **Bootvolgorde aanpassen** en vervolgens op de **Herstart** knop om het bootproces te starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)

Als de server is opgestart vanaf de ISO, maak dan verbinding via de [VNC-console](vserver-vnc.md) om verder te gaan. Zodra de console actief is, zie je het bootmenu van de **SystemRescue** ISO. Kies hier voor de optie om te booten met de **standaard parameters**.

Zo start SystemRescue met de aanbevolen standaardconfiguratie, wat zorgt voor een stabiele en gebruiksklare omgeving voor systeemonderhoud of data-backups.

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)

## De schijf(en) mounten

Voordat je een schijf mount, is het handig om een overzicht te krijgen van de beschikbare opslagapparaten en hun partities. Dat doe je met dit commando:

```
fdisk -l
```

Dit toont alle gedetecteerde schijven met hun partitiedetails. De output bevat:

- Aangesloten opslagapparaten (bijv. `/dev/sda`, `/dev/sdb`),
- De grootte van elke schijf,
- Partitietypes,
- Beschikbare partities (bijv. `/dev/sda1`, `/dev/sda2`, …),
- Het bestandssysteemtype (indien herkend).

In dit voorbeeld heeft de schijf `/dev/sda` drie partities: `/dev/sda1`, `/dev/sda2` en `/dev/sda3`. Zorg dat je de juiste partitie kiest voordat je gaat mounten. De output van `fdisk -l` helpt je fouten te voorkomen door duidelijk te laten zien welke data op welke schijf staat. Bijvoorbeeld:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Als je de juiste partitie hebt gevonden, maak je eerst een map aan die als mountpunt dient. Dit is de plek waar je partitie toegankelijk wordt. Mount daarna de gewenste partitie in deze map. Het is aan te raden om de partitie in **read-only modus** te mounten, zodat je veilig bij de data kunt.

Gebruik deze commando’s om het mountpunt te maken en de partitie te koppelen:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Vervang `/dev/sdaX` door de juiste partitie die je met `fdisk -l` hebt gevonden. In dit voorbeeld zou dat `/dev/sda2` zijn.

## Firewall instellen

SystemRescue zet standaard de firewall aan voor veiligheid. Dit blokkeert alle inkomende verbindingen om ongeautoriseerde toegang te voorkomen.

In dit geval wil je echter een verbinding toestaan vanaf je eigen pc naar de SFTP-server op SystemRescue. Je moet dus de firewall zo instellen dat SFTP-verkeer mag, of de firewall tijdelijk uitzetten.

Werk je in een vertrouwd netwerk? Dan is de snelste optie om de firewall tijdelijk uit te schakelen met dit commando:

```
systemctl stop iptables
```

## Root-wachtwoord instellen

De SFTP-client moet inloggen met een gebruikersnaam en wachtwoord om toegang te krijgen tot de data op de SFTP-server. Hiervoor gebruiken we het root-account, zodat je bij alle bestanden kunt. Standaard is root-login in SystemRescue uitgeschakeld. Je moet dus eerst een wachtwoord instellen om in te kunnen loggen.

Stel een wachtwoord in met dit commando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## Data overzetten

Je bent nu klaar om je data te backuppen. Open een FTP-client naar keuze en maak verbinding met je server. Kies als protocol `SFTP`. Vul bij hostname het `IP-adres` van je server in, gebruik poort `21` en log in met gebruikersnaam `root` en het wachtwoord dat je net hebt ingesteld.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Als je voor het eerst via **SFTP** verbinding maakt, toont WinSCP deze beveiligingsmelding. Die verschijnt omdat de **host key** van de server nog niet in je lokale cache staat.

Als je zeker weet dat het IP klopt en je deze verbinding bewust maakt, is het **veilig om de server te vertrouwen**. Klik gewoon op **"Yes"** om te bevestigen. De sleutel wordt dan opgeslagen en je krijgt deze melding niet meer bij volgende verbindingen.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Als je verbonden bent, navigeer je naar de **rescue map** die je eerder hebt aangemaakt. Daar heb je toegang tot je bestanden en kun je ze downloaden naar je eigen pc. Blader door de mappen, selecteer wat je wilt backuppen en zet het veilig over via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Afsluiting

Je hebt nu succesvol je belangrijke bestanden gered en gebackupt.  
Je data is veilig en klaar om teruggezet te worden wanneer nodig. Vanaf hier kun je verder met bijvoorbeeld het herinstalleren van je server, het repareren van het systeem of het migreren van je data naar een nieuwe omgeving.

Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />