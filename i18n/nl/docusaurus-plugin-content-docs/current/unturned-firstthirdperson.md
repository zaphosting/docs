---
id: unturned-firstthirdperson
title: "Unturned: Stel 1e/3e persoon perspectief in voor je server"
description: "Ontdek hoe je het spelersperspectief op je Unturned server kunt aanpassen tussen eerste, derde persoon of beide voor een betere game-ervaring → Leer het nu"
sidebar_label: 1e/3e Persoon
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 1e / 3e persoon perspectief

Unturned biedt de mogelijkheid om het perspectief op de server te veranderen. Je kunt kiezen tussen het eerste- en derde persoon perspectief. Standaard speel je het spel in de eerste persoon. Sinds versie 3.9.9.0 is dit echter ook aan te passen. Hieronder leggen we uit hoe je dit voor jouw server kunt instellen.



## Configuratie

De aanpassing doe je in de **Commands.dat** config. Deze vind je in het **Webinterface onder Configs**. Afhankelijk van welk perspectief je wilt instellen, moet je het volgende commando toevoegen aan de config:

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)



### 1e persoon perspectief (standaard):

Deze optie staat standaard al aan, ook al is het commando nog niet toegevoegd aan de config. Voor de volledigheid kun je het commando zonder problemen alsnog toevoegen. Het commando voor deze optie ziet er zo uit:

```
perspective first
```



### 3e persoon perspectief:

Wil je in plaats van de 1e persoon het 3e persoon perspectief gebruiken? Dat kan ook. Het commando hiervoor ziet er zo uit:

```
perspective third
```



### Beide perspectieven:

Je kunt ook beide perspectieven tegelijk gebruiken. In dat geval pas je alleen de waarde van het commando aan. Het commando voor deze optie ziet er zo uit:

```
perspective both
```



De volgende keer dat je je server opstart, is de gewenste optie actief!

<InlineVoucher />