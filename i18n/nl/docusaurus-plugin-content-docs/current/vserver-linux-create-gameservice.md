---
id: vserver-linux-create-gameservice
title: "VPS: Zet je Dedicated Game Server op als een Linux Service"
description: "Ontdek hoe je Linux-services maakt en beheert voor dedicated game servers, zodat ze automatisch starten en makkelijk te onderhouden zijn → Leer het nu"
sidebar_label: Linux Service Instellen
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Services zijn een essentieel onderdeel van Linux en verwijzen naar een proces of applicatie die op de achtergrond draait, hetzij als een vooraf gedefinieerde taak of een gebeurtenisgestuurde taak. Dit biedt allerlei voordelen, zoals het automatisch opstarten van de server bij het opstarten, automatische updates, eenvoudig beheer en toegang tot logs, en nog veel meer! In deze gids gaan we bekijken hoe je een service maakt voor je dedicated game server.

<InlineVoucher />

## Voorbereiding

Begin met het verbinden met je VPS via SSH. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt.

Je zou ook een van onze dedicated game server gidsen in deze sectie moeten volgen om een game server te installeren en op te zetten op je Linux-systeem. In deze gids gebruiken we de [Palworld dedicated game server](vserver-linux-palworld.md) als voorbeeld, maar de instructies zijn aanpasbaar voor al onze gidsen.

## Een Service Maken

Begin met het aanmaken van een nieuw servicebestand voor de dedicated game server die je hebt opgezet. Vervang `[your_game]` door een naam naar keuze. We raden aan de naam van de game te gebruiken om het overzichtelijk te houden, dus wij gebruiken `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Service Instellen

Met de nano editor open, kopieer je de volgende basisinhoud van het bestand. Dit is een template servicebestand dat je kunt hergebruiken. We hebben twee versies: één voor gidsen die SteamCMD gebruiken en één voor gidsen zonder SteamCMD.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="SteamCMD Game" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="Reguliere Game">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Laten we het bestand even ontleden om alles duidelijk te maken.
- `Description`: Dit kan alles zijn, handig om snel te zien wat het doel van de service is.
- `User`: Volgens onze gidsen heb je een aparte `steam` gebruiker aangemaakt voor SteamCMD, of de `gameservers` gebruiker voor niet-SteamCMD games. Zo niet, stel dit dan in op de gebruiker die de service moet draaien.
- `WorkingDirectory`: Dit is het pad naar de hoofdmap die alles bevat wat de service nodig heeft.
- `ExecStartPre` (alleen SteamCMD): Hier staat het SteamCMD installatiecommando dat elke keer draait als de server herstart, zodat hij altijd up-to-date is. Kopieer dit uit de betreffende dedicated game server gids, of vervang de waarden handmatig door die van jouw game.
- `ExecStart`: Dit bepaalt welke taak er precies uitgevoerd wordt door de service. Ook hier kopieer je het pad uit de gids of pas je het handmatig aan naar het startbestand.

:::important Wine Compatibiliteitslaag
Voor games die de **Wine** compatibiliteitslaag nodig hebben om te draaien, moet je de **xvfb-run** en **wine** commando’s toevoegen in de `ExecStart` parameter. Bijvoorbeeld voor V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Zorg er ook voor dat je `ExecStartPre` SteamCMD installatiecommando de `+@sSteamCmdForcePlatformType` parameter bevat als dat nodig is om een platformversie af te dwingen.
:::

Als je alle waarden hebt aangepast aan jouw dedicated game server, sla je het bestand op en sluit je nano af met `CTRL + X`, gevolgd door `Y` om te bevestigen en dan `ENTER`.

Voor ons Palworld voorbeeld ziet het bestand er zo uit:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Service Beheren

Nu je servicebestand klaar is, moet je het inschakelen. Bij het voorbeeld `palworld.service` vervang je `[your_service]` door `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Als je ooit wijzigingen maakt in je servicebestand, vergeet dan niet om daarna `systemctl daemon-reload` uit te voeren zodat de wijzigingen actief worden.
:::

Je kunt de server nu starten met het commando `systemctl start`. Evenzo kun je de server makkelijk stoppen en herstarten met vergelijkbare commando’s.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
Wil je details over de service zien? Gebruik dan `systemctl status`. Voor logs om te debuggen, gebruik je `journalctl -u [your_service].service` om de nieuwste logs te bekijken.
:::

Tot slot, als je wilt dat de service niet automatisch start bij het opstarten, kun je hem uitschakelen.
```
sudo systemctl disable [your_service]
```

## Conclusie

Je hebt nu succesvol een service opgezet voor je dedicated game server. De server start nu automatisch op bij het opstarten van de VPS.

Je hebt ook geleerd wat de inhoud van het servicebestand betekent en hoe je de service beheert met verschillende commando’s.

<InlineVoucher />