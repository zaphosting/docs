---
id: dedicated-linux-steamcmd
title: "Dedicated Server: SteamCMD Linux Setup"
description: "Ontdek hoe je SteamCMD op Linux-servers instelt om dedicated game servers efficiënt te installeren → Leer het nu"
sidebar_label: SteamCMD Setup
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

SteamCMD is een must-have tool voor het installeren van dedicated servers voor een heleboel games zoals Palworld, Enshrouded en meer. In deze guide nemen we je mee door de eerste setup van SteamCMD op je Linux-server. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar op andere distros.

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Check onze [SSH Initial Access](vserver-linux-ssh.md) guide als je hulp nodig hebt.

## SteamCMD installeren

Zodra je op je server zit, moet je **SteamCMD** installeren om de benodigde dedicated server bestanden te kunnen downloaden. SteamCMD is de **command-line (CLI)** versie van de Steam client en hiermee download je makkelijk Steam workshop en dedicated server files.

Zoals altijd bij Linux is het slim om eerst je systeem te updaten, afhankelijk van je distro:

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

Daarna installeer je een paar pakketten. Dit is waarom:

- Het **software-properties-common** pakket maakt het beheren van je distro en externe softwarebronnen makkelijk.
- SteamCMD is een 32-bit tool, dus je moet de **i386** architectuur toevoegen zodat de juiste software geïnstalleerd wordt.
- Omdat SteamCMD proprietary is, heb je ook het **multiverse** of **non-free** pakket nodig, afhankelijk van je Linux distro, want die zitten meestal niet in de standaard repo.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & andere niet-Debian distros
sudo apt-add-repository non-free
```

Run daarna weer de update om de nieuwe pakketten te laden:

```
sudo apt update
```

Nu kun je SteamCMD installeren. Er kan een licentie prompt komen, die accepteer je gewoon.

```
sudo apt install steamcmd
```

:::tip
Check of SteamCMD goed geïnstalleerd is door `steamcmd` te runnen. Als het geladen is, zie je `Steam>` in de prompt. Typ `quit` om weer te stoppen.
:::

Alles staat nu klaar, je kunt door naar de volgende stap: het installeren van je dedicated server via SteamCMD.

## Nieuwe gebruiker aanmaken

We raden sterk aan om een aparte gebruiker voor SteamCMD te maken. Op root draaien is meestal geen goed idee om verschillende redenen.

Maak een gebruiker aan met de naam `steam` en eventueel een wachtwoord:

```
sudo useradd -m steam
sudo passwd steam # Optioneel wachtwoord
```

Pas daarna het `.bashrc` bestand aan om toegang te geven tot de `/usr/games` map waar SteamCMD staat. Dit doe je door een extra pad toe te voegen.

Open het bestand met nano:

```
sudo nano /home/steam/.bashrc
```

Scroll naar beneden en voeg deze regel toe:

```
export PATH="/usr/games/:$PATH"
```

Sla op en sluit nano met `CTRL + X`, dan `Y` en `ENTER`.

## Afsluiting

Je hebt nu de basis SteamCMD setup op je Linux-server klaarstaan. Je kunt nu verder met het installeren van Steam content via de `steam` gebruiker.

Check zeker ook de andere guides in deze sectie, waarin we uitleggen hoe je specifieke games installeert met SteamCMD, die je nu hebt klaargezet.