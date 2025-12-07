---
id: dedicated-windows-rescue
title: "Dedicated Server: Red je bestanden met System Rescue"
description: "Ontdek hoe je data herstelt en backups maakt van een niet-opstartbare server met SystemRescue ISO en veilige bestandsoverdracht → Leer het nu"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Je server start niet meer op? Je bent buitengesloten van je systeem of wil eerst een backup maken voordat je iets verandert?  
Door je server te booten met de **SystemRescue ISO** kun je nog steeds bij je schijven, belangrijke bestanden herstellen en lokaal backups maken. Dit werkt zelfs als het originele besturingssysteem niet meer toegankelijk is.

Om de herstelde data veilig over te zetten, kun je gebruikmaken van **SFTP (Secure File Transfer Protocol)**. Hiermee kopieer je bestanden van het rescue-systeem naar je lokale pc of een andere server via een beveiligde en versleutelde verbinding.





## Voorbereiding

Voor de backup gebruik je de **SystemRescue ISO versie 12.01**.  
Ga eerst naar de interface van je dedicated server en navigeer naar de sectie **Initial installation**.

Selecteer de **SystemRescue 12.01** ISO uit de beschikbare opties. Klik daarna op **Boot from ISO** om het opstartproces te starten. Zodra de server vanaf de ISO is opgestart, maak je verbinding via de [iLO interface](dedicated-ilo.md) om verder te gaan.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



Open in de **iLO management interface** de **HTML console** om de remote display van je server te zien. Zodra de console actief is, zie je het bootmenu van de **SystemRescue ISO**. Kies hier voor de optie om te booten met de **default parameters**.

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

In dit voorbeeld heeft de schijf `/dev/sda` drie partities: `/dev/sda1`, `/dev/sda2` en `/dev/sda3`. Zorg dat je de juiste partitie kiest voordat je gaat mounten. De `fdisk -l` output helpt je fouten te voorkomen door duidelijk te laten zien welke schijf welke data bevat. Voorbeeld:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

Als je de juiste partitie hebt gevonden, maak je eerst een directory aan die als mountpunt dient. Dit is de plek waar de partitie toegankelijk wordt gemaakt. Mount daarna de gewenste partitie in deze directory. Het is aan te raden om de mount-operatie in **read-only modus** uit te voeren, zodat je veilig toegang hebt tot de data.

Gebruik deze commando’s om het mountpunt aan te maken en de partitie te koppelen:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Vervang `/dev/sdaX` door de juiste partitie die je met `fdisk -l` hebt gevonden. In dit voorbeeld zou dat `/dev/sda2` zijn.

:::tip Gehibernate Windows-partities

Linux kan Windows-partities die in hibernatie staan of door Fast Boot beïnvloed zijn niet veilig openen. Om dataverlies of corruptie te voorkomen, mount deze partities altijd **in read-only modus**.

:::

## Firewall configureren

SystemRescue zet standaard de firewall aan voor veiligheid. Dit betekent dat alle inkomende verbindingen worden geblokkeerd om het systeem te beschermen tegen ongeautoriseerde toegang.

In dit geval moet je echter een verbinding toestaan vanaf je lokale machine naar de SFTP-server die op SystemRescue draait. Je moet dus de firewall configureren om SFTP-verkeer toe te staan of de firewall tijdelijk uitschakelen.

Als je in een vertrouwd netwerk werkt, is de makkelijkste en snelste oplossing om de firewall-service in SystemRescue te stoppen met dit commando:

```
systemctl stop iptables
```



## Root-wachtwoord instellen

De SFTP-client moet zich authenticeren met een gebruikersnaam en wachtwoord om toegang te krijgen tot de data op de SFTP-server. Hiervoor wordt het root-account gebruikt, zodat de client bij alle bestanden kan die zichtbaar zijn in SystemRescue. Standaard is authenticatie als root niet toegestaan in SystemRescue. Je moet daarom een wachtwoord instellen om de client te laten inloggen. Stel een wachtwoord in met dit commando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Data overzetten

Je bent nu klaar om je data te backuppen. Open hiervoor een FTP-client naar keuze en maak verbinding met je server. Kies als transferprotocol `SFTP`. Vul bij hostname het `IP-adres` van je server in, gebruik poort `21` en log in met gebruikersnaam `root` en het eerder ingestelde `wachtwoord`.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Als je voor het eerst via **SFTP** verbinding maakt met een server, toont WinSCP deze beveiligingsmelding. De waarschuwing verschijnt omdat de **host key** van de server nog niet in je lokale cache staat.

Als je zeker weet dat het IP-adres klopt en je deze verbinding bewust start, is het **veilig om de server te vertrouwen**. Klik gewoon op **"Yes"** om te bevestigen. De sleutel wordt dan toegevoegd aan je cache, zodat je deze melding niet meer krijgt bij volgende verbindingen met deze server.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Nu je verbonden bent, navigeer je naar de eerder aangemaakte **rescue directory**. Hier heb je toegang tot je bestanden en kun je ze downloaden naar je lokale machine. Blader door de mappen, selecteer de data die je wilt backuppen en zet ze veilig over via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusie

Je hebt nu succesvol je belangrijke bestanden gered en geback-upt.  
Je data is veilig en klaar om teruggezet te worden wanneer nodig. Vanaf hier kun je verder met acties zoals het herinstalleren van je server, het repareren van het systeem of het migreren van je data naar een nieuwe omgeving.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂