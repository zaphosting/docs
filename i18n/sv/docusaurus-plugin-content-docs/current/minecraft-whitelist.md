---
id: minecraft-whitelist
title: "Minecraft: Aktivera och redigera whitelist på servern"
description: "Lär dig hur du skyddar din Minecraft-server genom att hantera spelartillgång med whitelist-funktioner och säkra ditt spel → Läs mer nu"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
**Minecraft Whitelist** är ett sätt att skydda din server genom att bara tillåta utvalda spelare på listan att ansluta till din server. Som standard erbjuder inte Minecraft något serverlösenord som andra spel gör.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Så aktiverar du WHITELIST på din Minecraft-server" description="Lär dig bättre när du ser det i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Aktivera whitelist



### Aktivering (Konfig)

För att aktivera whitelist måste värdet för kommandot i **server.properties**-filen sättas till **true**. En omstart av servern krävs för att ändringen ska träda i kraft.

```
white-list=true
```



### Aktivering (Chat)

Alternativt kan whitelist också aktiveras i spelet eller via live-konsolen:

```
/whitelist on			(Aktivera whitelist)
/whitelist off			(Avaktivera whitelist)
```



För att aktivera whitelist via spelet krävs operatörsrättigheter! Annars kan det göras via live-konsolen (gränssnittet). Tänk på att kommandona där ska köras utan **/**-symbolen.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Hantera whitelist



### Lägg till / ta bort spelare



**Chat**

Du kan lägga till eller ta bort spelare från whitelist med följande kommandon:

```
/whitelist add SpelarNamn
/whitelist remove SpelarNamn
```



**white-list.json**

Om spelarens UUID är känd kan spelaren också läggas till manuellt via **white-list.json**-filen. Denna kan nås och ändras via FTP. Här hittar du instruktioner för FTP-anslutning: [Access via FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spelare1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spelare2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spelare3"
  }
]
```



### Uppdatera listan

Om du lägger till spelare manuellt behöver du ladda om whitelist i spelet. Det går också att göra med ett kommando för att slippa starta om servern:

```
 /whitelist reload
```



### Visa listan

Vill du slippa öppna whitelist-filen via FTP varje gång kan du visa alla spelare på whitelist med följande kommando:

```
/whitelist list
```


<InlineVoucher />