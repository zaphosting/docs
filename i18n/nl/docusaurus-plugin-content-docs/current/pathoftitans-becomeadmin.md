---
id: pathoftitans-becomeadmin
title: Word admin
description: "Ontdek hoe je administratorrechten toewijst en beheert voor volledige servercontrole op je game server → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten maakt eenvoudige en uitgebreide administratie mogelijk met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in het spel gebruiken. Hieronder vind je alle stappen die je moet volgen om administratorrechten voor je server toe te wijzen.  
<InlineVoucher />

## Voorbereiding

De configuratie van adminrechten gebeurt via de configuratiebestanden van je server. Ga hiervoor in je game server dashboard naar **Configs** en open het Game.ini configuratiebestand.



## Configuratie

Onder de sectie [/Script/PathOfTitans.IGameSession] moet het Alderon Games ID (AGID) van de admin worden ingevuld. De invoer hiervoor is `ServerAdmins=` gevolgd door het AGID. Wil je meerdere admins toevoegen, dan moet je voor elke admin een nieuwe regel aanmaken. Stel dat je adminrechten wilt toewijzen aan in totaal drie spelers, dan ziet de configuratie er als volgt uit:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1e admin
ServerAdmins=XXX-XXX-XXX # 2e admin
ServerAdmins=XXX-XXX-XXX # 3e admin
```

Klik op Opslaan en start daarna de server opnieuw op. De adminrechten zijn nu succesvol ingesteld. Zodra je adminrechten hebt, kun je via chatcommands andere spelers tot admin benoemen of hun adminstatus intrekken. Deze functies zijn beschikbaar zolang je server actief is. Meer info over de commands vind je in de officiële [GitHub Wiki](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).


## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />