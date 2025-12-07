---
id: minecraft-addop
title: "Minecraft: OP-rechten toewijzen op je server"
description: "Ontdek hoe je OP-rechten aan spelers toekent en serverpermissies effectief beheert voor betere gamecontrole → Leer het nu"
sidebar_label: OP-Permissions
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## OP-rechten toewijzen

Om OP-rechten aan jezelf of andere spelers toe te kunnen wijzen, moet je eerst de console openen, tenzij er al een andere speler is met voldoende OP-rechten zodat je het direct in de game kunt regelen.

Om de console te openen, moet je eerst de server via het **Dashboard** openen. In de serverinterface vind je aan de linkerkant onder het tabblad "INFORMATIE" de optie "Live Console".

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Je ziet nu een donker venster dat de console van de server weergeeft. Daaronder staat een invoerveld waar je commando’s kunt typen. Om OP-rechten toe te kennen, typ je het commando `op speler` (zonder "/") in het invoerveld en klik je op de groene knop "Commando verzenden" om het commando naar de console te sturen.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

Na een paar seconden verschijnt het commando in de console, gevolgd door de melding "Made player a server operator", wat betekent dat het gelukt is. De speler heeft nu alle OP-rechten en kan bijvoorbeeld de gamemode aanpassen.

:::info
Het toewijzen van OP-rechten kan nu ook direct in de game, dus pas het rechtenniveau aan zoals uitgelegd in de volgende stap als je dat wilt.
:::

## Rechtenniveau

OP-rechten zijn verdeeld in vier niveaus, waarbij niveau 4 standaard is ingesteld. Elk niveau heeft verschillende rechten, zodat je de rechten grofweg kunt verdelen onder spelers. De rechten per niveau zijn als volgt:

| Niveau | Beschrijving | Permissies |
| :-----: |:-------------:| :-----:|
| 1 | Moderator | Wijzigingen binnen het beschermde spawngebied mogen worden gemaakt. |
| 2 | Gamemaster | Commandoblokken plaatsen en bewerken, en diverse cheat-commando’s uitvoeren (bijv. /gamemode). |
| 3 | Admin | Spelers kicken en bannen, plus andere commando’s voor algemene serveradministratie. Ook extra operators aanstellen. |
| 4 | Owner | Geen beperkingen meer. |

:::info
Met een permissie-plugin zoals LuckPerms op je Bukkit/Spigot-server kun je permissies veel specifieker en gedetailleerder instellen. Je kunt ook meerdere groepen aanmaken, wat het beheren van rechten makkelijker maakt.
:::

## Rechtenniveau aanpassen

Om het niveau van een speler aan te passen, moet hij eerst als Operator zijn aangesteld, zoals uitgelegd bij "OP-rechten toekennen". Om het niveau aan te passen, moet je het bestand `ops.json` bewerken via een FTP-verbinding.

Zodra je via FTP verbonden bent met de server, navigeer je naar de juiste map van de server. Klik in FileZilla met de rechtermuisknop op het bestand en kies "Bekijken/Bewerken" in het menu.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Pas nu de waarde van `"level"` aan naar het gewenste niveau voor de speler en sla het bestand op met **CTRL+S**.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

Om de wijzigingen door te voeren, moet je de server herstarten. Dit doe je door in de serverinterface de rode Stop-knop ingedrukt te houden.

<InlineVoucher />