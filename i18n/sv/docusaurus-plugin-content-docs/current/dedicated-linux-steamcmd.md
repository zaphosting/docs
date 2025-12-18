---
id: dedicated-linux-steamcmd
title: "Dedikerad Server: SteamCMD Linux-Setup"
description: "Lär dig hur du sätter upp SteamCMD på Linux-servrar för att smidigt installera dedikerade spelservrar → Läs mer nu"
sidebar_label: Setup SteamCMD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

SteamCMD är ett måste för att installera dedikerade servrar för en massa olika spel som Palworld, Enshrouded och fler. I den här guiden går vi igenom hur du sätter upp SteamCMD på din Linux-server för första gången. Vi använder Ubuntu i exemplen, men det funkar ungefär likadant på andra distributioner.

## Förberedelser

Börja med att koppla upp dig mot din dedikerade server via SSH. Behöver du hjälp med det? Kolla in vår [SSH Initial Access](vserver-linux-ssh.md)-guide.

## Installera SteamCMD

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de dedikerade serverfilerna du behöver. SteamCMD är Steam-klientens **kommandoradsverktyg (CLI)** och gör det enkelt att ladda ner Steam Workshop-innehåll och dedikerade serverfiler.

Som vanligt på Linux är det smart att börja med att uppdatera systemet, kör det som passar din distro:

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

Nu behöver du installera några paket. Här är vad de gör:

- Paketet **software-properties-common** gör det enklare att hantera din distro och externa mjukvarukällor.
- SteamCMD är ett 32-bitarsverktyg, så du måste lägga till **i386**-arkitekturen för att rätt mjukvara ska installeras.
- Eftersom SteamCMD är proprietärt behöver du också antingen **multiverse** eller **non-free** beroende på din Linux-distro, då dessa ofta inte finns i standard-repos.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & andra icke-Debian distros
sudo apt-add-repository non-free
```

Kör sedan uppdateringen igen så att ändringarna läses in och paketen blir tillgängliga:

```
sudo apt update
```

Till sist installerar du SteamCMD med:

```
sudo apt install steamcmd
```

Du kan få upp en licensavtalsruta som du bara accepterar för att fortsätta.

:::tip
Du kan kolla att SteamCMD är installerat korrekt genom att köra `steamcmd`. När det laddat klart ska prompten visa `Steam>`. Skriv `quit` för att avsluta.
:::

Nu när allt är på plats kan du gå vidare till nästa steg: att installera din dedikerade server med SteamCMD.

## Skapa användare

Vi rekommenderar starkt att du skapar en separat användare för SteamCMD. Att köra som root är aldrig en bra idé av flera anledningar.

Skapa en användare som heter `steam` med valfritt lösenord:

```
sudo useradd -m steam
sudo passwd steam # Valfritt lösenord
```

När användaren är skapad behöver du justera `.bashrc`-filen för att ge tillgång till `/usr/games` där SteamCMD ligger. Det gör du genom att lägga till en extra path-variabel.

Öppna filen med nano:

```
sudo nano /home/steam/.bashrc
```

Scrolla längst ner och lägg till den här raden:

```
export PATH="/usr/games/:$PATH"
```

Spara och avsluta nano med `CTRL + X`, tryck `Y` för att bekräfta och sen `ENTER`.

## Avslutning

Nu har du satt upp grunden för SteamCMD på din Linux-server. Nästa steg är att installera spelservrar via `steam`-användaren.

Kolla gärna in våra andra guider i den här sektionen som visar hur du installerar specifika spel med SteamCMD, som du nu har på plats.