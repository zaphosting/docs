---
id: minecraft-add-own-world
title: "Minecraft: Lägg till din egen värld på servern"
description: "Lär dig hur du laddar upp och konfigurerar egna Minecraft-världar på din server för en personlig spelupplevelse → Läs mer nu"
sidebar_label: Lägg till din egen värld
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Vill du använda din egen värld eller en värld du laddat ner från internet på din server? Då har du kommit rätt! Allt du behöver är din värld och en FTP-klient. Om du inte vet vad en FTP-klient är eller hur du använder den, kolla in den här guiden: [Åtkomst via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="Så laddar du upp egna MAPS på din Minecraft-server" description="Känns det lättare att förstå när du ser det i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

När du har kopplat upp dig mot servern via FTP kan du börja lägga in din egen värld. Först måste du navigera till rätt mapp där den nuvarande världen ligger. Den finns i följande katalog: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

Den nya världen måste nu laddas upp till den här mappen. Du kan antingen ta bort och ersätta den gamla **world**-mappen eller ladda upp den nya världen under ett annat namn. I det här exemplet laddar vi upp världen med ett nytt namn:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Nu behöver den nyuppladdade världen bara konfigureras i **server.properties**-filen. Du hittar den under **game server administration** under **Configs**. Där måste du ändra värdet för kommandot **level-name=**:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

Efter att du startat om servern ska den nya världen vara aktiv. Njut av din nya värld! 🙂

<InlineVoucher />

<InlineVoucher />