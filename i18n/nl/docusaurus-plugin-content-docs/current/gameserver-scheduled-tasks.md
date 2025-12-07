---
id: gameserver-scheduled-tasks
title: "Gameserver: Geplande Taken (Cron)"
description: "Ontdek hoe je serverprocessen automatiseert met geplande taken voor backups, servicebeheer en commando's → Leer het nu"
sidebar_label: Geplande taken
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Maak geplande taken aan die automatisch op vooraf bepaalde tijden worden uitgevoerd. Zo kun je verschillende processen op je server automatiseren. Je kunt aangeven of de taak één keer of herhaaldelijk uitgevoerd moet worden. 



## Soorten taken

Met geplande taken kun je verschillende soorten taken uitvoeren. De volgende taaktypes worden momenteel ondersteund: 

- Service starten
- Service stoppen
- Service herstarten
- Server herstarten (alleen als deze online is)
- Backup maken
- Commando uitvoeren

De vooraf ingestelde types maken het mogelijk om je server op een uitgebreide, geautomatiseerde manier te beheren. Vooral het type **Commando uitvoeren** geeft je de vrijheid om veel meer specifieke en aangepaste taken te maken. 

:::warning Limieten op taken
Sommige geplande taken hebben limieten, wat betekent dat ze niet oneindig vaak uitgevoerd kunnen worden en een cooldown/limiet hebben.
 :::

## Taken aanmaken

Ga in je gameserverbeheer naar Geplande taken onder Instellingen. Om een nieuwe geplande taak aan te maken, klik je op de groene knop met het plus-symbool rechtsboven in de lijst met geplande taken. Er opent een nieuw pop-upvenster waarin je je taak kunt configureren. 

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Taken beheren

In de configuratie van een taak kun je bepalen welk type taak je wilt aanmaken. Geef een naam op (optioneel) en selecteer een van de aangeboden taaktypes. Dit voorbeeld laat zien hoe je een geplande taak maakt om de service regelmatig te herstarten. 

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Selecteer bij herhalingstype de optie `herhalen`. In het veld Cron-expressie geef je nu de intervallen op waarop de taak uitgevoerd moet worden. In dit geval wordt de service elke drie uur herstart. 

:::tip Cron generator

Ben je niet bekend met de structuur of syntax van Cron? Gebruik dan gewoon de [**Crontab Guru**](https://crontab.guru/). Dit is een simpele tool waarmee je met een paar klikken cron-expressies kunt maken en kopiëren. 

:::

Om de taak aan te maken, kies je van wanneer tot wanneer de geplande taak actief moet zijn en klik je op opslaan.

## Taken verwijderen

Wil je bestaande taken verwijderen? Verwijder taken uit de lijst door op de rode prullenbakknop rechts te klikken. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Conclusie

Nu weet je hoe je geplande taken aanmaakt, beheert en verwijdert. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />