---
id: palworld-server-modding
title: "Palworld: Installera Mods för Palworld"
description: "Upptäck hur du förbättrar din Palworld-upplevelse med mods för servrar och klienter på ett säkert och effektivt sätt → Läs mer nu"
sidebar_label: Installera Mods
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Sedan Palworld släpptes har nya spännande mods börjat dyka upp online för att förbättra spelupplevelsen och göra spelet ännu roligare. I den här guiden går vi igenom hur du lägger till spelmodifikationer (mods) på din Palworld-server och/eller spelklient.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="Hur du installerar mods på din Palworld-server!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

### Viktig information

Just nu kan du se och ladda ner tillgängliga mods via tredjepartsmoddingssajter. Vi rekommenderar att använda sajter som [Nexus Mods](https://www.nexusmods.com/palworld/) eller [Curseforge](https://www.curseforge.com/palworld/) som är välrenommerade inom modding-communityt. Du kan inte ladda ner mods via Steam Workshop för tillfället.

:::note
ZAP-Hosting ansvarar inte för eventuella modifieringar/skador på dina serverfiler eller världar vid installation av mods. Vi rekommenderar starkt att du gör backup innan du fortsätter. Läs mer om backup i vår dedikerade [Hantera Savegames](palworld-server-savegames.md)-guide som går in på detaljer.
:::

:::info
Vi stödjer för närvarande endast PAK-mods (.PAK-filer). Du kan inte använda mods som kräver en körbar fil av säkerhetsskäl.
:::



### Server- & Klientsidiga Mods

När du väljer mods måste du först avgöra om de är serversidiga eller klientsidiga. Det enklaste sättet är att kolla beskrivningen på moddens webbplats eller kontakta modskaparen direkt.

Serversidiga skript installeras direkt på servern och kräver inga åtgärder från spelarna. Klientsidiga mods kräver däremot att varje användare som vill ansluta laddar ner och installerar modden lokalt i sina spelmappar.

:::info
Du måste verifiera att modden du vill använda är kompatibel med den aktuella spelversionen av Palworld.
:::



## Steg 1: Förbered PAK-filen

Genom att besöka moddingssajter, som de vi tipsade om i introduktionen, kan du bläddra bland och ladda ner ett brett utbud av olika mods.

:::info
Påminnelse: Vi stödjer för närvarande endast PAK-mods (.PAK-filer) av säkerhetsskäl.
:::

Gå till den mod du vill använda och ladda ner den lokalt till din enhet. Om det behövs, packa upp filerna med ett verktyg som [7zip](https://www.7-zip.org/) för att extrahera **.pak**-filen.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Steg 2: Ladda upp via FTP

När du har PAK-filerna redo att laddas upp, gå till **Verktyg->FTP-Browser** i din spelservers webbgränssnitt.

Du behöver en FTP-klient för att ansluta till din server. Använd gärna vår dedikerade [Åtkomst via FTP](gameserver-ftpaccess.md)-guide om du inte har en FTP-klient installerad eller behöver hjälp med FTP-anslutning.

I webbgränssnittet kan du använda knappen **Direktanslutning**. Detta öppnar FTP-programmet du valt och loggar in automatiskt.

Alternativt kan du använda de inloggningsuppgifter som visas på FTP-Browser-sidan för att manuellt ansluta via din FTP-klient.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Nu måste du ladda upp PAK-filerna för modden du förberedde tidigare. Du måste ladda upp dem till följande mapp:
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # För Windows-version
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # För Linux-version
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

Och det var allt för serversidan! Nu är det dags att fixa klientsidan.



## Steg 3: Installera mods på klientsidan

Nu när alla mods är installerade på servern måste vi se till att alla klienter som vill ansluta gör samma sak. De måste upprepa denna process. För tillfället finns inget sätt för klienten att automatiskt hämta och ladda ner mods vid anslutning.

Börja med att öppna Steam, högerklicka på Palworld, välj Hantera och sedan Bläddra lokala filer.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

En mapp öppnas med din Palworld-installation på din lokala enhet.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Navigera sedan till följande mapp:
```
../Palworld/Pal/Content/Paks/
```

Flytta moddens **.pak**-filer till denna mapp. Upprepa för alla mods du vill lägga till.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Steg 4: Starta Palworld & anslut till servern

Nu kan du ansluta till din Palworld-server och njuta av spelet med en massa nya mods. Använd vår dedikerade [Anslut till server](palworld-connect.md)-guide om du behöver hjälp med att ansluta.

När du är inne i spelet bör du kunna se skillnaderna som mods har skapat.

Till exempel använder vi Minecraft blocks-modden på vår testserver:

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Du har nu installerat mods på din Palworld-server. Om du stöter på problem med modding, kolla in felsökningsavsnittet nedan.



## Felsökning

I detta felsökningsavsnitt listar vi några vanliga orsaker till problem samt steg du kan följa för att hitta och lösa problemet. Tänk på att modding fortfarande är i ett tidigt skede och inte officiellt, så buggar kan förekomma.

#### Säkerställ kompatibel modversion

Se till att de mods du installerat är kompatibla med den aktuella spelversionen av Palworld. Om inte kan du få felmeddelanden och vissa funktioner i modsen kanske inte fungerar. Kontakta modskaparen för att be om en uppdatering om modden är föråldrad.

#### Starta om servern

Glöm inte att starta om servern efter ändringar eller om du inte ser några mods. Vi rekommenderar att du kontaktar modskaparen vid eventuella fel eller buggar med specifika mods.

#### Sök i loggar efter fel

Ett första steg är att kolla i **Information->Loggfiler** i ditt spelservers webbgränssnitt. Där finns loggar med info om servern, aktuella händelser, tips eller felmeddelanden.

Felmeddelanden kan hjälpa dig att identifiera och förstå orsaken till problem. Ofta kan svårigheter lösas genom att granska loggfilerna noggrant.

:::info
Behöver du mer hjälp? Inga problem, gå med i vår [Discord Community](https://discord.com/invite/zaphosting) eller skapa ett inlägg på vårt [r/zaphosting Subreddit](https://www.reddit.com/r/zaphosting/) där vi och communityn kan hjälpa dig.

Behöver du officiell support? Skapa gärna ett [supportärende](https://zap-hosting.com/en/customer/support/) på vår webbplats med så mycket info som möjligt så återkommer vi så snabbt vi kan! :)
:::


<InlineVoucher />