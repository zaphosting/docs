---
id: valheim-savegame
title: "Valheim: Hantera savegames på servrar"
description: "Upptäck hur du smidigt hanterar, laddar ner och återställer dina Valheim-savegames med Savegame-Manager → Lär dig mer nu"
sidebar_label: Hantera Savegames
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Ladda ner Savegames

:::info
Obs: Innan du laddar ner savegame måste du stoppa servern för att spara det aktiva savegamet. Efter att servern är stoppad kommer savegamet att visas efter att du laddat om sidan en gång.
:::

För att ladda ner ditt savegame kan du använda `Savegame-Manager` i webbgränssnittet:

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

Här kan du enkelt ladda ner ditt savegame genom att klicka på den gröna "Download"-knappen:

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
Obs, du behöver ladda ner både `.db` **och** `.fwl` filer.
:::

Klart! Du kan nu använda backupen för andra ändamål eller ladda upp den igen senare.

## Ladda upp & Aktivera Savegame

För att ladda upp dina egna savegames öppnar vi först vår savegame manager.

Här kan vi nu ladda upp vårt savegame via drag & drop, det ska se ut så här efteråt:

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
Observera att ditt savegame bör ha samma namn som när det skapades av spelet.
:::

I vårt fall heter backupfilerna `380622.fwl` och `380622.db`.

Nu skriver vi in namnet på backupen ovan under `Savegame (worlds)`:

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

Under `ZAP Backups` letar vi upp vårt savegame:

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

Nu behöver vi bara trycka på den gula "Restore"-knappen på båda filerna och bekräfta, då laddas vårt savegame in.

När detta är klart dyker ett meddelande upp nere till höger:

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

Nu kan servern startas, det uppladdade savegamet kommer vara aktivt på servern.



## Autosaves

Tyvärr stödjer Valheim inte autosaves just nu, för att spara ditt spel måste servern stoppas. Restart-planeraren i webbgränssnittet kan användas för att automatiskt starta om din server vid specifika tider:

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

Här kan vi enkelt lägga till en tid för daglig eller veckovis omstart:

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

När vi sparat omstarten kan vi även lägga till flera dagliga eller veckovisa omstarter.

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

Klart! Din server kommer nu starta om vid de angivna tiderna, och savegamet sparas under dessa omstarter.

<InlineVoucher />