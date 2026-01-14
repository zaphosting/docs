---
id: hytale-whitelist
title: "Hytale: Whitelist Instellen en Beheren"
description: "Ontdek hoe je jouw Hytale-server beveiligt door spelers toegang te geven via whitelist-functies en bescherm je gameplay → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
De whitelist is een beveiligings- en toegangscontrolefunctie waarmee je kunt bepalen wie er op jouw Hytale-server mag joinen. Wanneer ingeschakeld, mogen alleen spelers die expliciet op de whitelist staan verbinding maken. Dit is vooral handig voor private servers, community servers, ontwikkelomgevingen of testfases waarbij de toegang beperkt moet blijven tot vertrouwde spelers.

:::info Early Access Notice

Hytale is uitgebracht op 13 januari 2026 en is momenteel beschikbaar in Early Access. Omdat het spel nog in actieve ontwikkeling is, kunnen serversoftware, configuratiebestanden, modding-ondersteuning en installatieprocessen in de loop van de tijd blijven veranderen.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Whitelist activeren

De whitelist kun je aanzetten via de serverconsole of direct in het spel. Zorg dat je de juiste rechten hebt, zoals operatorrechten, voordat je deze commands uitvoert.

Om de whitelist te activeren, voer je het volgende commando uit:

```
/whitelist enable
```



Zodra de whitelist aanstaat, wordt elke speler die niet op de whitelist staat geweigerd bij het joinen van de server. Om te checken of de whitelist actief is, gebruik je:

```
/whitelist status
```

Dit commando geeft de huidige status van de whitelist weer en bevestigt dat de instelling correct is toegepast.



## Whitelist deactiveren

Wil je dat iedereen weer kan joinen? Dan kun je de whitelist op elk moment uitzetten met:

```
/whitelist disable
```

Na het uitschakelen van de whitelist beperkt de server de toegang niet meer en kan iedereen verbinden.



## Whitelist beheren

Je kunt de whitelist dynamisch beheren terwijl de server draait. Spelers toevoegen of verwijderen kan op elk moment zonder dat je de server hoeft te herstarten, via commands.



### Speler toevoegen aan whitelist

Wil je een specifieke speler toegang geven? Voeg ‘m toe met:

```
/whitelist add <playername>
```

De speler mag direct joinen, mits de whitelist aanstaat.



### Speler verwijderen van whitelist

Wil je een speler de toegang ontzeggen? Verwijder ‘m met:

```
/whitelist remove <playername>
```

Zodra verwijderd, kan die speler niet meer joinen zolang de whitelist actief is.



### Whitelist spelers bekijken

Wil je zien wie er allemaal op de whitelist staan? Gebruik dan:

```
/whitelist list
```

Dit toont een lijst met alle toegestane spelers.



### Whitelist leegmaken

Wil je alle spelers in één keer verwijderen? Maak de whitelist leeg met:

```
/whitelist clear
```

Dit verwijdert alle whitelist-entries, maar zet de whitelist zelf niet uit.



## Whitelist beheren via bestand

Naast commands kun je de whitelist ook direct aanpassen via een configuratiebestand. Dit is handig voor bulkwijzigingen of als je de whitelist alvast wilt voorbereiden voordat de server start. Het bestand heet `whitelist.json` en staat in de servermap.

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