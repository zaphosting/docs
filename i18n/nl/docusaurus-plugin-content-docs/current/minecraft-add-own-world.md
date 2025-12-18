---
id: minecraft-add-own-world
title: "Minecraft: Je eigen wereld toevoegen aan de server"
description: "Leer hoe je aangepaste Minecraft-werelden uploadt en configureert op je server voor een persoonlijke game-ervaring → Ontdek het nu"
sidebar_label: Voeg je eigen wereld toe
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Wil je je eigen wereld gebruiken of een wereld die je van internet hebt gedownload op je server? Dan ben je hier aan het juiste adres! Alles wat je nodig hebt is je wereld en een FTP-client. Weet je niet wat een FTP-client is en hoe je die gebruikt? Check dan deze gids: [Toegang via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="Hoe upload je custom MAPS op je Minecraft Server" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

Zodra de verbinding met de server via FTP is gemaakt, kun je beginnen met het instellen van je eigen wereld. Ga hiervoor eerst naar de juiste map waar de huidige wereld staat. Die vind je in deze map: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

De nieuwe wereld moet nu in deze map geüpload worden. Je kunt de oude **world** map verwijderen en vervangen, of de nieuwe wereld onder een andere naam uploaden. In dit voorbeeld uploaden we de wereld met een nieuwe naam:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Nu hoef je alleen nog de nieuw geüploade wereld te configureren in de **server.properties** config. Die vind je in de **game server administratie** onder **Configs**. Daar pas je de waarde van de **level-name=** regel aan:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

Na het herstarten van de server wordt de nieuwe wereld geladen. Veel plezier met je nieuwe wereld! 🙂

<InlineVoucher />

<InlineVoucher />