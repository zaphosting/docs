---
id: vserver-linux-ragemp
title: "VPS: RageMP Dedicated Server Linux Setup"
description: "Ontdek hoe je een RageMP Dedicated server installeert op je Linux VPS voor naadloos multiplayer gamen → Leer het nu"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Heb je een Linux VPS en wil je de RageMP Dedicated server service erop installeren? Dan ben je hier aan het juiste adres. In deze gids leggen we stap voor stap uit hoe je deze service op je Linux server installeert. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

:::tip
Wist je dat je onze **ZAP GS/TS3 Interface** direct op je VPS kunt installeren? Hiermee zet je game server services op met directe integratie in je ZAP-Hosting dashboard, in slechts een paar klikken! Lees meer over de [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

### Gebruiker aanmaken

We raden sterk aan om een aparte gebruiker aan te maken voor al je dedicated game server services. Op de root user draaien, zoals bij veel dingen, is om verschillende redenen niet aan te raden. Heb je al een gebruiker klaarstaan? Ga dan door naar de installatie.

Gebruik het volgende commando om een gebruiker genaamd `gameservers` aan te maken met een optioneel wachtwoord naar keuze.

```
sudo useradd -m gameservers
sudo passwd gameservers # Optioneel wachtwoord
```

Zodra je toegang hebt tot je server en een gebruiker klaarstaat, ga je verder met de installatie.

## Installatie

Log eerst in als `gameservers` en ga naar de root `home/gameservers` directory om alles netjes te houden.
```
sudo -u gameservers -s
cd ~
```

Maak een nieuwe map aan voor je RageMP server en open deze om alles georganiseerd te houden.
```
mkdir RageMP-Server && cd RageMP-Server
```

Download nu de nieuwste release van de RageMP website. Gebruik het volgende commando om het direct te downloaden.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Dit downloadt het `.zip` bestand naar je huidige locatie, wat je nieuwe `RageMP-Server` map is. Pak het bestand uit met het volgende commando.
```
tar -xvzf linux_x64.tar.gz
```

Je bestanden staan nu in de **ragemp-srv** map, ga er naartoe met `cd ragemp-srv`. Gebruik `ls` om de inhoud te bekijken. De server is nu klaar, ga door naar de volgende sectie om de instellingen te configureren.

## Configuratie

Op dit punt heb je de setup van je RageMP server afgerond. Je kunt verdere serverconfiguratie doen via een configuratiebestand in de serverdirectory.

:::tip
Je moet de server mogelijk minstens één keer draaien voordat de configuratiebestanden worden aangemaakt. Dit doe je door het shellbestand te starten: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Stop de server daarna met `CTRL+C`.
:::

Je kunt de belangrijkste configuratieparameters aanpassen door het **conf.json** bestand te openen.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Server starten & verbinden

Tijd om je server te starten. Ga naar de hoofdgame directory en start het shellbestand **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Je ziet nu logs verschijnen in je command prompt, inclusief netwerklogs, wat betekent dat de server succesvol is opgestart. Als alles goed gaat, is je server bereikbaar via direct connect en zichtbaar in de serverlijst. Je kunt ook direct verbinden via: `[jouw_ip_adres]:22005`.

## Conclusie

Gefeliciteerd, je hebt de RageMP server succesvol geïnstalleerd en geconfigureerd op je VPS! Als volgende stap raden we je aan onze [Setup Linux Service](vserver-linux-create-gameservice.md) gids te bekijken. Hierin leer je hoe je je nieuwe dedicated game server als service instelt. Dit biedt voordelen zoals automatisch starten bij boot, automatische updates, eenvoudige beheer- en logtoegang, en nog veel meer!

Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />