---
id: gameserver-scheduled-tasks
title: "Gameserver: Schemalagda uppgifter (Cron)"
description: "Upptäck hur du automatiserar serverprocesser med schemalagda uppgifter för backup, tjänstehantering och kommandon → Lär dig mer nu"
sidebar_label: Schemalagda uppgifter
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Skapa schemalagda uppgifter som automatiskt körs vid bestämda tider. Det låter dig automatisera olika processer på din server. Du kan ange om uppgiften bara ska köras en gång eller upprepade gånger. 



## Uppgiftstyper

De schemalagda uppgifterna låter dig köra olika typer av uppgifter. Följande uppgiftstyper stöds just nu: 

- Starta tjänst
- Stoppa tjänst
- Starta om tjänst
- Starta om server (endast om den är online)
- Skapa backup
- Kör kommando

De fördefinierade typerna låter dig hantera din server på ett mycket automatiserat sätt. Speciellt typen **Kör kommando** ger dig möjlighet att skapa många fler specifika och anpassade uppgifter. 

:::warning Begränsningar i frekvens
Vissa schemalagda uppgifter har begränsningar i hur ofta de kan köras, vilket betyder att de inte kan utföras oändligt många gånger utan har en cooldown/gräns.
 :::

## Skapa uppgifter

Gå till Schemalagda uppgifter i din gameserver-administration under Inställningar. För att skapa en ny schemalagd uppgift klickar du på den gröna knappen med plustecknet till höger om listan med schemalagda uppgifter. Ett nytt popup-fönster öppnas där du kan konfigurera din uppgift. 

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Hantera uppgifter

I konfigurationen av en uppgift kan du definiera vilken typ av uppgift du vill skapa. Ange ett namn (valfritt) och välj en av de tillgängliga uppgiftstyperna. Detta exempel visar hur du skapar en schemalagd uppgift för att regelbundet starta om tjänsten. 

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Välj alternativet `upprepad` för repetitionssätt. I fältet för Cron-uttryck måste du nu ange intervallen då uppgiften ska köras. I detta fall startas tjänsten om var tredje timme. 

:::tip Cron-generator

Är du inte bekant med strukturen eller syntaxen för Cron? Använd helt enkelt [**Crontab Guru**](https://crontab.guru/). Det är en enkel app som låter dig bygga och kopiera cron-uttryck med några klick. 

:::

För att slutföra skapandet, välj från när till när den schemalagda uppgiften ska köras och klicka sedan på spara.

## Ta bort uppgifter

Vill du ta bort befintliga uppgifter? Radera uppgifter i listan genom att klicka på den röda papperskorgen till höger. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Sammanfattning

Nu vet du hur du skapar, hanterar och tar bort schemalagda uppgifter. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />