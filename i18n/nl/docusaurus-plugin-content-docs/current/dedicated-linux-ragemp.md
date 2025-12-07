---
id: dedicated-linux-ragemp
title: "Dedicated Server: RageMP Dedicated Server Linux Setup"
description: "Ontdek hoe je een RageMP Dedicated Server installeert op je Linux-server voor soepel gamehosting en beheer → Leer het nu"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux Dedicated Server en wil je daar de RageMP Dedicated server service op installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux-server installeert. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je Dedicated Server kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Voorbereiding

Begin met verbinden met je Dedicated Server via SSH. Gebruik onze [SSH Initial Access](dedicated-linux-ssh.md) gids als je hulp nodig hebt.

### Gebruiker aanmaken

We raden sterk aan om een aparte gebruiker aan te maken voor al je dedicated game server services. Op de root gebruiker draaien, zoals bij veel dingen, is om verschillende redenen niet aan te raden. Heb je al een gebruiker klaarstaan? Ga dan door naar de installatie.

Gebruik het volgende commando om een gebruiker genaamd `gameservers` aan te maken, met een optioneel wachtwoord naar keuze.

```
sudo useradd -m gameservers
sudo passwd gameservers # Optioneel wachtwoord
```

Zodra je toegang hebt tot je server en een gebruiker klaarstaat, ga je verder met de installatie.

## Installatie

Log in als `gameservers` en ga naar de root `home/gameservers` directory om alles netjes georganiseerd te houden.
```
sudo -u gameservers -s
cd ~
```

Maak een nieuwe map aan voor je RageMP server en open deze.
```
mkdir RageMP-Server && cd RageMP-Server
```

Download nu de nieuwste release van de RageMP website. Gebruik dit commando om het direct te downloaden.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Dit downloadt het `.zip` bestand naar je huidige locatie, wat je nieuwe `RageMP-Server` map is. Pak het bestand uit met:
```
tar -xvzf linux_x64.tar.gz
```

Je bestanden staan nu in de **ragemp-srv** map, ga er naartoe met `cd ragemp-srv`. Gebruik `ls` om de inhoud te bekijken. De server is nu klaar, ga door naar de volgende sectie om de instellingen te configureren.

## Configuratie

Op dit punt is de setup van je RageMP server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de serverdirectory.

:::tip
Je moet de server mogelijk minstens één keer draaien voordat de configuratiebestanden worden aangemaakt. Dit doe je door het shellbestand te starten: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Sluit af met `CTRL+C`.
:::

Bewerk de belangrijkste configuratieparameters door het **conf.json** bestand te openen.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame directory en start het shellbestand **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Je ziet nu logs verschijnen in je terminal, inclusief netwerklogs, wat betekent dat de server succesvol is gestart. Als alles goed gaat, is je server bereikbaar via direct connect en zichtbaar in de serverlijst. Je kunt ook direct verbinden via: `[jouw_ip_adres]:22005`.

## Conclusie

Gefeliciteerd, je hebt de RageMP server succesvol geïnstalleerd en geconfigureerd op je Dedicated Server! Als volgende stap raden we aan onze [Setup Linux Service](dedicated-linux-create-gameservice.md) gids te bekijken. Daarin lees je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, makkelijk beheer en toegang tot logs, en nog veel meer!

Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!