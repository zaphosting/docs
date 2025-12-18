---
id: vserver-linux-steamcmd
title: "VPS: SteamCMD Linux Setup"
description: "Ontdek hoe je SteamCMD op Linux instelt om dedicated game servers efficiënt te installeren en je serverbeheer te optimaliseren → Leer nu meer"
sidebar_label: SteamCMD Setup
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
SteamCMD is een onmisbare tool die je nodig hebt om dedicated servers te installeren voor een breed scala aan games zoals Palworld, Enshrouded en meer. In deze gids nemen we je mee door het eerste installatieproces van SteamCMD op je Linux-server. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

<InlineVoucher />

## Voorbereiding

Begin met het verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt bij het verbinden.

## SteamCMD installeren

Zodra je toegang hebt tot je server, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en hiermee kun je makkelijk Steam workshop en dedicated server bestanden downloaden.

Zoals gebruikelijk bij Linux is het slim om eerst je systeem te updaten, voer het volgende uit afhankelijk van je distro:
```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

Nu moet je een paar pakketten installeren. Dit zijn ze in detail:

- Het **software-properties-common** pakket maakt het beheren van je distro en onafhankelijke softwarebronnen makkelijk.
- SteamCMD is een 32-bit tool, dus de **i386** architectuur moet toegevoegd worden zodat de juiste software op je systeem wordt geïnstalleerd om dit te ondersteunen.
- Omdat SteamCMD proprietary is, heb je afhankelijk van je Linux distro ook het **multiverse** of **non-free** pakket nodig, omdat deze meestal niet in de standaard repositories zitten.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & Andere Niet-Debian Distros
sudo apt-add-repository non-free
```

Voer nu de update opdracht opnieuw uit zodat je pakketwijzigingen worden opgepikt en geïnstalleerd:
```
sudo apt update
```

Tot slot kun je SteamCMD installeren met het volgende commando. Er kan een licentieovereenkomst verschijnen die je gewoon kunt accepteren om door te gaan.
```
sudo apt install steamcmd
```

:::tip
Je kunt checken of SteamCMD succesvol is geïnstalleerd door simpelweg `steamcmd` te typen. Zodra het geladen is, zou de command prompt `Steam>` moeten tonen. Typ `quit` om weer af te sluiten.
:::

Nu alles klaarstaat en geïnstalleerd is, kun je door naar de volgende stap: het installeren van de dedicated server via SteamCMD.

## Gebruiker aanmaken

We raden sterk aan om een aparte gebruiker aan te maken voor SteamCMD. Het draaien als root user is, zoals bij de meeste dingen, niet aan te raden om verschillende redenen.

Gebruik het volgende commando om een gebruiker genaamd `steam` aan te maken met een optioneel wachtwoord naar keuze.

```
sudo useradd -m steam
sudo passwd steam # Optioneel wachtwoord
```

Als de gebruiker is aangemaakt, moet je het `.bashrc` bestand aanpassen zodat de gebruiker toegang krijgt tot het `/usr/games` pad waar SteamCMD staat. Dit doe je door een extra path environment variable toe te voegen.

Open het bestand met de nano editor:
```
sudo nano /home/steam/.bashrc
```

Scroll naar het einde van het bestand met de pijltjestoetsen en voeg deze regel toe:
```
export PATH="/usr/games/:$PATH"
```

Sla het bestand op en sluit nano af met `CTRL + X`, daarna `Y` om te bevestigen en tenslotte `ENTER`.

## Conclusie

Je hebt nu succesvol de basis SteamCMD functionaliteit opgezet op je Linux server. Je kunt nu verder met het installeren van Steam content via de `steam` gebruiker.

We raden je aan om ook de andere gidsen in deze sectie te bekijken, waarin het installeren van specifieke games via SteamCMD wordt uitgelegd, die je nu hebt klaargezet.

<InlineVoucher />