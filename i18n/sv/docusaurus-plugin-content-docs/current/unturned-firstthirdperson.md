---
id: unturned-firstthirdperson
title: "Unturned: Ställ in 1:a/3:e person på servern"
description: "Upptäck hur du anpassar din Unturned-server med spelarperspektiv i första, tredje person eller båda för en grym spelupplevelse → Lär dig mer nu"
sidebar_label: 1:a/3:e Person
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 1:a / 3:e personsperspektiv

Unturned ger dig möjligheten att ändra perspektivet på servern. Du kan välja mellan första och tredje personsperspektiv. Spelet spelas som standard i första person. Men sedan version 3.9.9.0 går det även att ändra detta. Här nedan förklarar vi hur du fixar det för din server. 



## Konfiguration

Ändringen görs i **Commands.dat**-konfigurationen. Den hittar du i **Webinterface under Configs**. Beroende på vilket perspektiv du vill ha, måste följande kommando läggas till i config-filen:

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### Första person (standard): 

Det här alternativet är redan aktivt som standard, även om kommandot inte lagts till i config än. Men för att vara komplett kan du ändå lägga till det utan problem. Kommandot ser ut så här:

```
perspective first
```



### Tredje person:

Vill du köra tredje person istället för första person går det också att ställa in. Kommandot för det ser ut så här:

```
perspective third
```



### Båda perspektiven:

Du kan också köra båda perspektiven samtidigt. Då ändrar du bara värdet i kommandot. Så här ser det ut:

```
perspective both
```



Nästa gång du startar servern är det valda perspektivet aktiverat!

<InlineVoucher />