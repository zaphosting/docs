---
id: dedicated-linux-openmp
title: "Dedicated Server: Open.mp Dedicated Server Linux Setup"
description: "Ontdek hoe je de open.mp Dedicated Server op je Linux-server installeert voor soepel gamehosting en beheer → Leer het nu"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je daarop de open.mp Dedicated Server service installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert. We gebruiken Ubuntu als voorbeeld, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je Dedicated Server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

### Gebruiker aanmaken

We raden sterk aan om een aparte gebruiker aan te maken voor al je dedicated game server services. Op de root user draaien, zoals bij veel dingen, is om verschillende redenen niet aan te raden. Heb je al een gebruiker klaarstaan? Ga dan door naar de installatie.

Gebruik het volgende commando om een gebruiker genaamd `gameservers` aan te maken, met een optioneel wachtwoord naar keuze.

```
sudo useradd -m gameservers
sudo passwd gameservers # Optioneel wachtwoord
```

Zodra je toegang hebt tot je server en een gebruiker klaarstaat, ga je verder met de installatie.

## Installatie

Log in als `gameservers` en ga naar de root `home/gameservers` directory om alles netjes te houden.
```
sudo -u gameservers -s
cd ~
```

Maak een nieuwe map aan voor je open.mp server en ga erin:
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Download nu de nieuwste release van de [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases). Klik met rechts op de **linux-x86** versie en kopieer de link. Gebruik het volgende commando om de nieuwste Linux release te downloaden, vervang `[link]` door de gekopieerde link.
```
wget [link]
```

Dit downloadt het `.zip` bestand naar je huidige map, die nu je `OpenMP-Server` folder is. Pak het bestand uit met:
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Je bestanden staan nu in de **Server** map, ga daar naartoe met `cd Server`. Met `ls` kun je altijd de inhoud bekijken. De server is klaar, ga door naar de volgende sectie om de instellingen te configureren.

## Configuratie

Je setup is nu klaar. Je kunt de server verder configureren via een config-bestand in de server directory.

Bewerk de belangrijkste instellingen door het **config.json** bestand te openen:
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Check onze Open.mp [Server Configuratie](openmp-configuration.md) gids voor alle opties en wat ze doen.

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofd game directory en run het **omp-server** shell script:
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Je ziet nu logs verschijnen in je terminal, inclusief netwerklogs, wat betekent dat de server succesvol is gestart. Als alles goed gaat, is je server bereikbaar via direct connect en zichtbaar in de serverlijst. Je kunt ook direct verbinden via: `[jouw_ip_adres]:7777`.

## Conclusie

Gefeliciteerd, je hebt de open.mp server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin leer je hoe je je nieuwe dedicated game server als service opzet. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, ze staan elke dag voor je klaar!