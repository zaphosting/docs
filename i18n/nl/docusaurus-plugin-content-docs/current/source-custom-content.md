---
id: source-custom-content
title: Custom content en mods installeren op game servers
description: "Ontdek hoe custom content gameplay verbetert in source games zoals Counter-Strike en Garry's Mod met maps, skins en sounds → Leer er nu meer over"
sidebar_label: Custom Content
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wat is custom content?

Sommige source games zoals Counter-Strike of Garry's Mod zijn bekend geworden door hun enorme variatie. Dit werd allemaal mogelijk gemaakt door de ondersteuning van plugins en **custom content**. Door de jaren heen zijn er allerlei gamemodes ontwikkeld, zoals Zombie Mod, Verstoppertje, Minigames, Jailbreak en nog veel meer.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

Dergelijke servers gebruiken vaak maps, player skins en sounds die door de community zijn gemaakt. Om ervoor te zorgen dat spelers de custom content van de server kunnen gebruiken of zien, moet de content eerst vanaf de server worden gedownload. Hiervoor zijn twee opties:

- FastDL
- Steam Workshop

Afhankelijk van het gebruik is de ene optie handiger dan de andere. Hieronder een overzicht van de verschillen tussen FastDL en Workshop:

|  Custom Content  | FastDL | Steam Workshop |
| :--------------: | :----: | :------------: |
|       Maps       |   ✓    |       ✓        |
| Materials/Models |   ✓    |       ✗        |
|      Sounds      |   ✓    |       ✗        |



## Custom content instellen



### FastDL

Hier leggen we uit hoe je een FastDL-server opzet met een van onze [Webspace Producten](https://zap-hosting.com/en/shop/product/webspace/). Je kunt ook elke andere optie gebruiken die een publiek toegankelijke webserver biedt. Om te beginnen open je het webspace product en ga je naar de administratie:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



Daarna open je de bestandsbeheerder en maak je de volgende mappen aan:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



Vervolgens moet de webspace geautoriseerd worden zodat het downloaden van content in de game goed werkt:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
De permissies moeten voor alle mappen worden ingesteld!
:::

Nu kan de custom content geüpload worden. De bestanden moeten zowel op de game server als op de FastDL (webspace) beschikbaar zijn. Op de game server worden de bestanden uitgepakt geüpload, op de FastDL-server upload je ze gecomprimeerd als bzip2. Hiervoor raden we het programma 7Zip aan.

Tot slot moet je de FastDL-server nog opgeven in de game server. Dit doe je via de **server.cfg**. Voeg hiervoor de volgende commands toe aan de config:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Vervang de URL door jouw ZAP webspace URL.
```

Na een herstart en verbinding met de server zou de content automatisch gedownload moeten worden. Dit kun je ook checken in de console van de game:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

Hier leggen we uit hoe je de Steam Workshop instelt. Open eerst de Steam Workshop pagina. Selecteer hiervoor het juiste spel in Steam en open daar de workshop. We nemen [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections) als voorbeeld. Klik daar op het menu-item Browse en kies Collection:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

Klik met de rechtermuisknop op Collection en maak een collectie aan voor je game server:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

De collectie is nu succesvol aangemaakt, maar standaard nog leeg. Open daarom opnieuw de workshop van het spel en selecteer de items die je wilt toevoegen:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

Als je klaar bent met verzamelen, ga je terug naar de collectie, klik je met rechts en kies je Copy Page URL. Je hebt de ID van de collectie nodig, die in de URL staat, bijvoorbeeld:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Deze ID voeg je vervolgens toe bij Steam Workshop in jouw game server administratie:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />