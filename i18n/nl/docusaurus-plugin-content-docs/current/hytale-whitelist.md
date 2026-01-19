---
id: hytale-whitelist
title: "Hytale: Whitelist Instellen en Beheren"
description: "Ontdek hoe je je Hytale-server beveiligt door spelers toegang te geven via whitelist-functies en bescherm je gameplay → Leer nu meer"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
De whitelist is een beveiligings- en toegangscontrolefunctie waarmee je kunt bepalen wie er op jouw Hytale-server mag joinen. Als deze aanstaat, mogen alleen spelers die expliciet op de whitelist staan verbinding maken. Dit is vooral handig voor private servers, community servers, ontwikkelomgevingen of testfases waar je de toegang wilt beperken tot alleen vertrouwde spelers.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel nog in actieve ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Whitelist activeren

Je kunt de whitelist inschakelen via de serverconsole of direct in het spel. Zorg dat je de juiste rechten hebt, zoals operatorrechten, voordat je deze commands uitvoert.

Om de whitelist te activeren, gebruik je het volgende commando:

```
/whitelist enable
```



Zodra de whitelist aanstaat, wordt elke speler die niet op de whitelist staat geweigerd bij het joinen van de server. Om te checken of de whitelist actief is, gebruik je:

```
/whitelist status
```

Dit commando geeft de huidige status van de whitelist weer en bevestigt dat de instelling correct is toegepast.



## Whitelist deactiveren

Wil je dat iedereen weer kan joinen? Dan kun je de whitelist op elk moment uitschakelen met:

```
/whitelist disable
```

Na het uitschakelen beperkt de server de toegang niet meer op basis van de whitelist en kan iedereen verbinden.



## Whitelist beheren

Je kunt de whitelist dynamisch aanpassen terwijl de server draait. Spelers toevoegen of verwijderen kan op elk moment zonder dat je de server hoeft te herstarten.



### Speler toevoegen aan whitelist

Wil je een specifieke speler toegang geven? Voeg hem of haar toe met:

```
/whitelist add <spelernaam>
```

De speler mag direct joinen, mits de whitelist aanstaat.



### Speler verwijderen van whitelist

Wil je een speler de toegang ontzeggen? Verwijder hem of haar met:

```
/whitelist remove <spelernaam>
```

Zodra verwijderd, kan die speler niet meer joinen zolang de whitelist actief is.



### Whitelist spelers bekijken

Wil je zien wie er allemaal op de whitelist staan? Gebruik dan:

```
/whitelist list
```

Dit toont een complete lijst van alle toegestane spelers.



### Whitelist leegmaken

Wil je alle spelers in één keer verwijderen? Maak de whitelist dan helemaal leeg met:

```
/whitelist clear
```

Dit verwijdert alle whitelist-entries, maar zet de whitelist zelf niet uit.



## Whitelist beheren via bestand

Naast commands kun je de whitelist ook direct via een configuratiebestand beheren. Dit is handig voor bulk-aanpassingen of als je de whitelist alvast wilt voorbereiden voordat je de server start. Het bestand heet `whitelist.json` en staat in de servermap.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Conclusie

Gefeliciteerd, je hebt de whitelist voor je Hytale-server succesvol ingesteld. Je server is nu alleen toegankelijk voor goedgekeurde spelers, wat je helpt om controle, privacy en een veiligere multiplayer-omgeving te behouden.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂