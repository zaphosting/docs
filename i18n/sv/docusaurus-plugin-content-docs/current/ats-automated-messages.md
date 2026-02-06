---
id: ats-automated-messages
title: "American Truck Simulator: Automatiska Servermeddelanden - Håll dina spelare uppdaterade med nyheter, sociala länkar och mer!"
description: "Ställ in automatiska servermeddelanden med schemalagda uppgifter för att visa återkommande meddelanden"
sidebar_label: Automatiska Servermeddelanden
services:
- gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Automatiska servermeddelanden är ett enkelt men grymt sätt att kommunicera viktig info direkt till spelarna i spelet. Du kan använda dem för att visa serverregler, annonsera events, dela tips eller påminnelser med jämna mellanrum utan att admins behöver göra något manuellt.

Med **Schemalagda Uppgifter** kan servermeddelanden skickas automatiskt till **American Truck Simulator**-chatten genom att köra fördefinierade kommandon på ett återkommande schema.

<InlineVoucher />



## Så funkar automatiska meddelanden

Automatiska meddelanden skapas genom att schemalägga en uppgift som kör ett serverkommando vid en bestämd tid eller intervall. Kommandot kan användas för att skicka ett chattmeddelande, broadcast eller servernotis.

När det är konfigurerat körs uppgiften automatiskt i bakgrunden och visar meddelandet för alla anslutna spelare. Det garanterar jämn kommunikation utan att personal behöver vara online.



## Skapa ett automatiskt meddelande

För att skapa automatiska servermeddelanden, öppna din spelserverpanel och gå till sektionen **Schemalagda Uppgifter**. Skapa en ny schemalagd uppgift och välj att köra ett **kommando**. I kommandofältet skriver du in meddelandekommandot som din spelserver stödjer.

```
<message command> <your message text>
```

Byt ut kommandot mot det spelkommando eller kommando från en extension som du vill använda för att trigga meddelanden och `<your message text>` mot det meddelande du vill att spelarna ska se.

Sen kan du bestämma hur ofta meddelandet ska skickas, t.ex. var femte minut, varje timme eller vid specifika tider på dagen. För detaljerade instruktioner om schemalagda uppgifter, kolla in guiden [Schemalagda uppgifter](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Anpassa meddelandeintervaller

Schemalagda uppgifter ger full kontroll över när och hur ofta meddelanden visas. Vanliga användningsområden är:

- Visa serverregler var femte minut
- Annonsera kommande events vid fasta tider
- Skicka gameplay-tips till nya eller återvändande spelare
- Påminna om Discord eller webbplatslänkar

Intervallen kan ändras när som helst utan att starta om servern, vilket ger flexibilitet när din server växer.



## Viktiga grejer att tänka på

Funktionen för automatiska servermeddelanden beror på vad spelet och dess kommandon klarar av. Medan grundläggande schemalagda meddelanden kan fixas med standardkommandon, kan det vara begränsat när det gäller formatering, villkor eller avancerad anpassning.

Om spelet stödjer plugins, mods eller extensions som ger mer flexibilitet och anpassningsmöjligheter kan det vara värt att använda dem. Såna lösningar kan erbjuda mer avancerade funktioner än standardkommandon och passar bättre för komplexa eller skräddarsydda serverupplägg.



## Sammanfattning

Automatiska servermeddelanden är ett pålitligt sätt att hålla spelarna informerade och engagerade utan manuellt jobb. Genom att använda schemalagda uppgifter för att köra meddelandekommandon kan serveradmins säkerställa jämn kommunikation på hela servern.

När det väl är uppe och rullar körs meddelandena självständigt och kan enkelt återanvändas genom att bara justera spelets meddelandekommando och text.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här varje dag för att hjälpa dig! 🙂

<InlineVoucher />