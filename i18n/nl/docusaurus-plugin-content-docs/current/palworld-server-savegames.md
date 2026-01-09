---
id: palworld-server-savegames
title: "Palworld: Je Palworld Savegames Beheren"
description: "Ontdek hoe je je Palworld Gamesaves veilig beheert en back-upt voor een soepele game-ervaring → Leer het nu"
sidebar_label: Savegames Beheren
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

In deze gids laten we zien hoe je je Palworld Gamesaves beheert op je game server, inclusief het back-uppen van je lokale en server savegames en het uploaden ervan naar je server.

## Voorbereiding

Om toegang te krijgen tot je serverbestanden heb je een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

Je moet verbinding maken met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in het webinterface van je game server. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids voor extra hulp bij het verbinden met je server.

## Savegame Back-up

### Lokale Savegame

Lokale savegames zijn die je hebt gemaakt tijdens het hosten van een multiplayer game lokaal op je apparaat. Deze vind je in je Windows AppData, specifiek op de volgende locatie:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Je kunt deze map makkelijk openen door tegelijk `CTRL` + `R` te drukken en in het run-venster het volgende pad in te voeren: `%localappdata%/Pal/Saved/SaveGames/`. Druk op **OK** en je wordt direct naar de map gebracht.

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

Op deze plek zie je een map met je SteamID als naam. Open deze map en je ziet al je lokale savegames op één plek.

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### Savegame Toegang via FTP

Een back-up maken van je savegame op de server is simpel. Zodra je verbonden bent met je game server via een FTP-client, ga je naar de volgende map:
```
../palworld/Pal/Saved/SaveGames/0
```

Hier zie je een map met een reeks willekeurige tekens, dat is je savegame. Klik met de rechtermuisknop op de map en kies **Download** om deze lokaal op je apparaat op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### Automatische Back-up

We bieden ook de optie om je savegame (en configuratiebestand) automatisch te back-uppen via ons webinterface. Ga naar het **Tools->Backups** gedeelte van je game server webinterface. Hier kun je verschillende opties instellen om automatische back-ups te plannen. Je krijgt 10GB gratis back-up opslagruimte waar je back-ups worden opgeslagen. Voor meer info over back-ups, check onze speciale [Backups](gameserver-backups.md) gids.

## Savegame Uploaden

Net als bij back-uppen is het uploaden van je savegame makkelijk. Zorg eerst dat je verbonden bent met je game server via een FTP-client. Ga dan naar de volgende map:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Sleep je savegame map simpelweg in deze map via je FTP-client en het wordt naar je server geüpload.

:::tip
Het kan handig zijn om de naam van de savegame map die je hebt geüpload te kopiëren, want die heb je nodig om hem te activeren in de volgende stap.
:::

## Savegame Activeren

Om een specifieke savegame te gebruiken, moet je een configuratiebestand aanpassen. Ga naar de volgende map en zoek het bestand **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # Voor Windows
../Pal/Saved/Config/LinuxServer/ # Voor Linux
```

Open dit bestand en zoek de parameter `DedicatedServerName`.

Pas deze regel aan door de naam van de savegame map in te vullen die je wilt activeren op je server.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Sla het bestand op en herstart je server zodat de wijziging actief wordt. Je hebt nu succesvol een savegame toegevoegd aan je game server.

## Savegame is Verdwenen

In zeldzame gevallen kan het zijn dat de server bij het opstarten een nieuwe savegame aanmaakt in plaats van een bestaande te laden.

Check eerst je savefiles via je FTP-client op deze locatie:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

Je zou hier zowel de oude savegame als een nieuwe, aangemaakte savegame moeten zien. Om dit op te lossen, pas je het configuratiebestand aan zoals beschreven in de sectie Savegame Activeren, met de juiste naam van de savegame map.

De savegame is weer actief zodra je het bestand hebt opgeslagen en je server opnieuw hebt gestart.

:::info
We raden sterk aan om Automatische Back-ups te activeren zoals beschreven in de vorige sectie, omdat Palworld nog in Early Access is en savegames verloren kunnen gaan of corrupt raken tijdens updates.
:::

<InlineVoucher />