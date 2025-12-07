---
id: dedicated-linux-rescue
title: "Dedicated Server: Red je bestanden met System Rescue"
description: "Ontdek hoe je data herstelt en backups maakt van een server die niet meer opstart met SystemRescue ISO en veilige bestandsoverdracht → Leer het nu"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Je server start niet meer op? Je bent buitengesloten van je systeem of wil eerst een backup maken voordat je iets verandert?  
Door je server te booten met de **SystemRescue ISO** kun je alsnog bij je schijven, belangrijke bestanden terugzetten en lokaal backups maken. Dit werkt zelfs als het originele besturingssysteem niet meer toegankelijk is.

Om de herstelde data veilig over te zetten, kun je gebruikmaken van **SFTP (Secure File Transfer Protocol)**. Hiermee kopieer je bestanden van het rescue-systeem naar je lokale pc of een andere server via een beveiligde en versleutelde verbinding.





## Voorbereiding

Voor de backup gebruik je de **SystemRescue ISO versie 12.01**.  
Ga eerst naar de interface van je dedicated server en navigeer naar de sectie **Initial installation**.

Selecteer de **SystemRescue 12.01** ISO uit de beschikbare opties. Klik daarna op **Boot from ISO** om het bootproces te starten. Zodra de server vanaf de ISO is opgestart, maak je verbinding via de [iLO interface](dedicated-ilo.md) om verder te gaan.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



In de **iLO management interface** open je de **HTML console** om het remote scherm van je server te zien. Zodra de console actief is, zie je het bootmenu van de **SystemRescue ISO**. Kies hier voor de optie om te booten met de **default parameters**.

Dit zorgt ervoor dat SystemRescue start met de aanbevolen standaardconfiguratie, wat een stabiele en gebruiksklare omgeving biedt voor systeemonderhoud of data-backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## De schijf(en) mounten

Voordat je een schijf mount, is het handig om een overzicht te krijgen van de beschikbare opslagapparaten en hun partities. Dat doe je met het volgende commando:

```
fdisk -l
```

Dit commando toont alle gedetecteerde schijven met hun partitiedetails. De output bevat:

- Aangesloten opslagapparaten (bijv. `/dev/sda`, `/dev/sdb`),
- De grootte van elke schijf,
- Partitietypes,
- Beschikbare partities (bijv. `/dev/sda1`, `/dev/sda2`, …),
- Het bestandssysteemtype (indien gedetecteerd).

In dit voorbeeld heeft de schijf `/dev/sda` drie partities: `/dev/sda1`, `/dev/sda2` en `/dev/sda3`. Zorg dat je de juiste partitie kiest voordat je gaat mounten. De output van `fdisk -l` helpt je fouten te voorkomen door duidelijk te laten zien welke schijf welke data bevat. Voorbeeld:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Als je de juiste partitie hebt gevonden, maak je eerst een directory aan die als mountpunt gaat dienen. Dit is de plek waar de partitie toegankelijk wordt. Mount daarna de gewenste partitie in deze directory. Het is aan te raden om de mount in **read-only modus** te doen, zodat je veilig bij de data kunt.

Gebruik deze commando’s om het mountpunt te maken en de partitie te koppelen:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Vervang `/dev/sdaX` door de juiste partitie die je met `fdisk -l` hebt gevonden. In dit voorbeeld zou dat `/dev/sda2` zijn.

## Firewall configureren

SystemRescue zet standaard de firewall aan voor veiligheid. Dit betekent dat alle inkomende verbindingen worden geblokkeerd om het systeem te beschermen tegen ongewenste toegang.

In dit geval moet je echter een verbinding toestaan vanaf je lokale machine naar de SFTP-server die op SystemRescue draait. Je kunt de firewall hiervoor configureren om SFTP-verkeer toe te staan, of de firewall tijdelijk uitzetten.

Werk je in een vertrouwd netwerk, dan is de snelste oplossing om de firewallservice in SystemRescue tijdelijk te stoppen met dit commando:

```
systemctl stop iptables
```



## Root-wachtwoord instellen

De SFTP-client moet zich authenticeren met een gebruikersnaam en wachtwoord om toegang te krijgen tot de data op de SFTP-server. Hiervoor gebruiken we het root-account, zodat de client bij alle bestanden kan die zichtbaar zijn in SystemRescue. Standaard is authenticatie als root niet toegestaan in SystemRescue. Je moet daarom eerst een wachtwoord instellen om in te loggen. Doe dat met dit commando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Data overzetten

Je bent nu klaar om je data te backuppen. Open hiervoor een FTP-client naar keuze en maak verbinding met je server. Kies als overdrachtsprotocol `SFTP`. Vul bij hostname het `IP-adres` van je server in, gebruik poort `21` en log in met gebruikersnaam `root` en het wachtwoord dat je net hebt ingesteld.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Als je voor het eerst via **SFTP** verbinding maakt met een server, toont WinSCP deze beveiligingsmelding. De waarschuwing verschijnt omdat de **host key** van de server nog niet in je lokale cache staat.

Als je zeker weet dat het IP-adres klopt en je deze verbinding bewust start, **is het veilig om de server te vertrouwen**. Klik gewoon op **"Yes"** om te bevestigen. De sleutel wordt dan opgeslagen in je cache, zodat je deze melding niet meer krijgt bij volgende verbindingen met deze server.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Nu je verbonden bent, navigeer je naar de **rescue directory** die je eerder hebt aangemaakt. Hier heb je toegang tot je bestanden en kun je ze downloaden naar je lokale machine. Blader door de mappen, selecteer de data die je wilt backuppen en zet ze veilig over via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusie

Je hebt nu succesvol je belangrijke bestanden gered en gebackupt.  
Je data is veilig en klaar om teruggezet te worden wanneer nodig. Vanaf hier kun je verder met acties zoals het herinstalleren van je server, het repareren van het systeem of het migreren van je data naar een nieuwe omgeving.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂