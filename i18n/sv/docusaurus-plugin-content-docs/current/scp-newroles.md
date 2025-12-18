---
id: scp-newroles
title: "SCP Secret Laboratory: Server Lägg till nya roller"
description: "Lär dig hur du skapar och anpassar serverroller med specifika behörigheter för effektiv fjärradminhantering → Lär dig mer nu"
sidebar_label: Lägg till nya roller
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Visa konfigurationen
Nya roller läggs in i filen "config_remoteadmin.txt".
Du hittar denna konfigfil genom att klicka på "Configs" i serverns gränssnitt.

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

Här kan du sedan söka upp ovanstående konfig och klicka på "ögat" till höger för att öppna den.

## Kopiera befintliga roller
Om du har konfigurationen öppen kan du söka efter dessa poster i den:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

Det här är exempel på roller som redan är inlagda.
Vi lägger till en ny post under.
För att göra detta kopierar vi blocket från en av rollerna ovan och klistrar in det under den sista rollen.
I vårt exempel kopierade vi rollen "Moderator" och klistrade in den nedanför:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## Lägg till egen roll
Nu kan vi redigera det nyinsatta blocket från den redan existerande rollen och skriva in våra egna önskade värden.
I vårt exempel använde vi namnet "ZAP":

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

När detta är gjort måste vi även lägga till rollen i listan över tillgängliga roller.
Det gör vi lite längre ner i samma konfig.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

Vi lägger alltså in vår roll under "moderator"-rollen.
:::info
OBS: Var noga med mellanslagen före och efter "-"!
:::

## Behörigheter
Längst ner i filen "config_remoteadmin.txt" kan vi justera behörigheterna för respektive roll.
Om vi vill tilldela en behörighet till vår roll skriver vi in rollens namn inom hakparenteserna.
Precis som i det här exemplet:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />