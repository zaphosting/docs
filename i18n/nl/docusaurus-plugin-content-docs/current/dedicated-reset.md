---
id: dedicated-reset
title: "Dedicated Server: Server Reset (Fabrieksinstellingen)"
description: "Ontdek hoe je je server effectief reset om de prestaties te herstellen of helemaal opnieuw te beginnen met veilige data-verwijdering → Leer het nu"
sidebar_label: Server reset
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Werkt je server niet meer zoals het hoort of wil je gewoon helemaal opnieuw beginnen maar weet je niet hoe? Geen stress, je kunt je server resetten door ‘m opnieuw te installeren. In deze gids leggen we uit hoe je dat doet en waar je op moet letten.





## Voorbereidingen

Voordat je de data op je server reset, moet je weten dat alle bestaande data verloren gaat. Heb je belangrijke bestanden? Dan is dit het moment om eerst een backup te maken voordat je begint met de herinstallatie. Daarna moet je bepalen hoe je precies je systeem wilt resetten. 



## Data resetten

Er zijn twee manieren om je data te resetten, afhankelijk van wat je nodig hebt en je situatie. Hieronder leggen we beide opties in detail uit:

- Data resetten via RAID-configuratie (Snelle methode)
- Data resetten via Wipe ISO (Grondige methode)

Bij het resetten via de RAID-configuratie wordt de bestaande data logisch verwijderd en vervangen door nieuwe data, wat het een snelle en efficiënte oplossing maakt voor het opnieuw installeren van je systeem.

De reset via Wipe ISO daarentegen voert meerdere verwijderingsrondes uit, waardoor alle data permanent en onherroepelijk wordt verwijderd. Deze methode is ideaal voor een complete systeemwipe als je grondige data-verwijdering nodig hebt.



### Snelle methode

Net als bij het configureren van de RAID, moet je tijdens het opstarten met de `F8`-toets de RAID-configuratie openen. Ga naar de menu-optie **Delete Logical Drive** in de RAID-configuratie. Hier zie je de huidige RAID-configuratie en de harde schijven. Druk op `F8` om de bestaande RAID te verwijderen. Bevestig dit met de `F3`-toets.

Ga daarna terug naar de RAID-configuratie en open de menu-optie **Create Logical Drive**. Selecteer nu de harde schijven en de gewenste RAID-configuratie (Raid 0/1) en maak de RAID aan door te bevestigen met de `Enter`-toets.

Ben je niet bekend met het configureren van RAID op jouw systeem? Dan raden we je aan ook even onze algemene [Configure RAID](dedicated-raid.md) gids te checken. 



### Grondige methode

De benodigde Wipe ISO moet gemount en uitgevoerd worden om het resetproces daadwerkelijk te starten. ISO-bestanden kun je mounten via iLO of via de remote console. Weet je nog niet precies hoe? Check dan even de [Eigen ISO](http://localhost:3000/guides/docs/dedicated-iso) gids.

Mount de volgende Wipe ISO op je server en herstart ‘m:


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

Na het herstarten wordt de Wipe ISO automatisch gedetecteerd en geladen. Maak verbinding met je dedicated server via een remote console (HTML5, .NET, Java Web Start) naar keuze.

Je ziet dan hoe de server automatisch het proces uitvoert en hoe ver het formatteren is. Je server overschrijft alle bestaande volumes, waardoor alle data effectief wordt verwijderd. Afhankelijk van de grootte van je SSD kan dit proces tussen de 45 minuten en 2 uur duren.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
Dit proces is onomkeerbaar en dus definitief. Er zijn geen extra backups die je later kunt terugzetten.
We raden sterk af dit proces uit te voeren tenzij je 100% zeker bent dat je al je data wilt verwijderen.
:::



## Conclusie

Gefeliciteerd, je hebt de data op je dedicated server succesvol verwijderd. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂