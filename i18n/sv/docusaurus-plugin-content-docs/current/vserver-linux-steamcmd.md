---
id: vserver-linux-steamcmd
title: "VPS: SteamCMD Linux-Setup"
description: "Upptäck hur du sätter upp SteamCMD på Linux för att smidigt installera dedikerade spelservrar och optimera din serverhantering → Lär dig mer nu"
sidebar_label: Setup SteamCMD
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
SteamCMD är ett måste för att installera dedikerade servrar för en mängd olika spel, inklusive Palworld, Enshrouded och fler. I den här guiden går vi igenom hur du sätter upp SteamCMD på din Linux-server för första gången. Vi använder Ubuntu i exemplen, men processen är väldigt lik för andra distributioner.

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det.

## Installera SteamCMD

När du är inne på servern behöver du installera **SteamCMD** för att kunna ladda ner de dedikerade serverfilerna som behövs. SteamCMD är **kommandoradsverktyget (CLI)** för Steam-klienten och låter dig enkelt ladda ner Steam Workshop-innehåll och dedikerade serverfiler.

Som vanligt på Linux är det bäst att först uppdatera systemet med rätt kommando för din distro:
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

Nu behöver du installera några paket. De är följande:

- Paketet **software-properties-common** gör det enkelt att hantera din distro och oberoende mjukvarukällor.
- SteamCMD är ett 32-bitarsverktyg, så du måste lägga till **i386**-arkitekturen för att rätt mjukvara ska installeras och stödjas.
- Eftersom SteamCMD är proprietärt behöver du även lägga till antingen **multiverse** eller **non-free** beroende på din Linux-distro, då dessa vanligtvis inte finns i standard-repot.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & andra icke-Debian distros
sudo apt-add-repository non-free
```

Kör sedan uppdateringskommandot igen för att läsa in och installera dina paketändringar:
```
sudo apt update
```

Till sist installerar du SteamCMD med:
```
sudo apt install steamcmd
```
En licensavtalsruta kan dyka upp, acceptera den bara för att fortsätta.

:::tip
Du kan kolla att SteamCMD är korrekt installerat genom att köra `steamcmd`. När det laddat ska prompten visa `Steam>`. Skriv `quit` för att avsluta.
:::

När allt är klart kan du gå vidare till nästa steg där du installerar den dedikerade servern via SteamCMD.

## Skapa användare

Vi rekommenderar starkt att du skapar en separat användare för att köra SteamCMD. Att köra som root är inte att rekommendera av flera anledningar.

Skapa en användare som heter `steam` med valfritt lösenord:
```
sudo useradd -m steam
sudo passwd steam # Valfritt lösenord
```

När användaren är skapad behöver du justera `.bashrc`-filen för att ge åtkomst till `/usr/games` där SteamCMD ligger. Det gör du genom att lägga till en extra path-variabel.

Öppna filen med nano:
```
sudo nano /home/steam/.bashrc
```

Scrolla längst ner och lägg till följande rad:
```
export PATH="/usr/games/:$PATH"
```

Spara och avsluta nano med `CTRL + X`, tryck `Y` för att bekräfta och sen `ENTER`.

## Avslutning

Nu har du satt upp den grundläggande SteamCMD-funktionaliteten på din Linux-server. Du kan nu fortsätta med att installera Steam-innehåll via `steam`-användaren.

Kolla gärna in våra andra guider i den här sektionen som visar hur du installerar specifika spel med SteamCMD, som du nu har på plats.

<InlineVoucher />