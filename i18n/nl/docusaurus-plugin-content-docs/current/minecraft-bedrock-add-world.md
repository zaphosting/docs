---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock: Eigen Wereld Importeren"
description: "Ontdek hoe je je eigen Minecraft Bedrock-werelden importeert en deelt op je server voor naadloze multiplayer fun → Leer het nu"
sidebar_label: Eigen Wereld Importeren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Minecraft Bedrock Edition laat je je eigen werelden maken en gebruiken op je server. In deze gids laten we je zien hoe je een eigen wereld importeert in je Minecraft: Bedrock Server om ‘m te delen met je vrienden.

<InlineVoucher />

## Voorbereiding

Om een wereld te importeren in je Minecraft Bedrock Server, moet je via FTP verbinden. Als je hier niet bekend mee bent, raden we je aan om even te kijken naar de [FTP toegang](gameserver-ftpaccess.md) gids.

Zorg dat je de wereld die je wilt importeren al op je computer hebt opgeslagen. De wereld moet in een map staan met de bijbehorende bestanden.
Als je een wereld uit Minecraft: Bedrock singleplayer wilt uploaden, vind je die op de volgende locatie:
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Installatie

### Server Stoppen

Voordat je begint met importeren, moet je je Minecraft Bedrock Server stoppen. Zo voorkom je dat er data verloren gaat en verloopt de import soepel.

### Wereld Uploaden

Ga via FTP naar de map waar de werelden van je server staan. Dit is meestal:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Hier zie je de mappen van alle werelden die nu op je server staan. Elke wereld heeft een unieke naam.

Upload de map van de wereld die je wilt importeren naar deze map. Zorg dat je de mapnaam niet verandert, want anders herkent Minecraft de wereld niet.

Open daarna het bestand `server.properties` in de hoofdmap van je server en verander de waarde van `level-name` naar de mapnaam van jouw wereld:

```
level-name=Bedrock level
```
:::tip
Wil je weer terug naar je standaardwereld? Verander de waarde dan gewoon terug naar `Bedrock level` en start de server opnieuw op!
:::

### Server Starten

Als je de wereld succesvol hebt geüpload, start je de server weer op. De geïmporteerde wereld zou nu automatisch moeten laden.

### Controleer de Wijzigingen

Verbind met je server en check of de geïmporteerde wereld correct is geladen. Je kunt nu in de nieuwe wereld spelen. Werkt iets niet zoals verwacht? Controleer dan nogmaals de stappen en zorg dat de wereldmappen correct zijn genoemd en geplaatst.

## Conclusie

Een wereld importeren in je Minecraft Bedrock Server is een simpel proces waarmee je je eigen creaties met anderen kunt delen. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />