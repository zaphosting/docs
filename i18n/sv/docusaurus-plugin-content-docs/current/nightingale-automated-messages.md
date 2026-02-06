---
id: nightingale-automated-messages
title: "Nightingale: Automatiska Servermeddelanden – Håll dina spelare uppdaterade om nyheter, sociala länkar och mer!"
description: "Ställ in automatiska servermeddelanden med schemalagda uppgifter för att visa återkommande annonseringar"
sidebar_label: Automatiska Servermeddelanden
services:
- gameserver-nightingale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Automatiska servermeddelanden är ett enkelt men effektivt sätt att kommunicera viktig info direkt till spelarna i spelet. De kan användas för att visa serverregler, annonsera events, dela tips eller påminnelser med jämna mellanrum utan att admins behöver göra något manuellt.

Med hjälp av **Schemalagda Uppgifter** kan servermeddelanden skickas automatiskt i **Nightingale**-chatten genom att köra fördefinierade kommandon på ett återkommande schema.

<InlineVoucher />



## Så funkar automatiska meddelanden

Automatiska meddelanden skapas genom att schemalägga en uppgift som kör ett serverkommando vid en bestämd tid eller intervall. Kommandot kan användas för att skicka ett chattmeddelande, broadcast eller servernotis.

När det är konfigurerat körs uppgiften automatiskt i bakgrunden och visar meddelandet för alla anslutna spelare. Det garanterar konsekvent kommunikation utan att personal behöver vara online.



## Skapa ett automatiskt meddelande

För att skapa automatiska servermeddelanden, öppna din spelserverpanel och gå till sektionen **Schemalagda Uppgifter**. Skapa en ny schemalagd uppgift och välj att köra ett **kommando**. I kommandofältet skriver du in meddelandekommandot som din spelserver stödjer.

```
<message command> <your message text>
```

Byt ut kommandot mot det spelkommando eller kommando från en extension som du vill använda för att trigga meddelanden och `<your message text>` mot det meddelande du vill att spelarna ska se.

Du kan sedan bestämma hur ofta meddelandet ska skickas, t.ex. var några minuter, varje timme eller vid specifika tider på dagen. För detaljerade instruktioner om schemalagda uppgifter, kolla in guiden [Schemalagda uppgifter](gameserver-scheduled-tasks.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Anpassa meddelandeintervaller

Schemalagda uppgifter ger full kontroll över när och hur ofta meddelanden visas. Vanliga användningsområden är:

- Visa serverregler var några minuter
- Annonsera kommande events vid fasta tider
- Skicka gameplay-tips till nya eller återvändande spelare
- Påminna om Discord eller webbplatslänkar

Intervallen kan ändras när som helst utan att starta om servern, vilket ger flexibilitet när din server växer.



## Viktiga notiser

Funktionen för automatiska servermeddelanden beror på spelets möjligheter och tillgängliga kommandon. Medan grundläggande schemalagda meddelanden kan göras med standardserverkommandon, kan detta vara begränsat när det gäller formatering, villkor eller avancerad anpassning.

Om spelet stödjer plugins, mods eller extensions som ger mer flexibilitet och anpassningsmöjligheter kan det vara värt att använda dem. Såna lösningar kan erbjuda mer avancerade funktioner än standardkommandon och passar bättre för komplexa eller skräddarsydda serveruppsättningar.



## Sammanfattning

Automatiska servermeddelanden är ett pålitligt sätt att hålla spelarna informerade och engagerade utan manuellt jobb. Genom att använda schemalagda uppgifter för att köra meddelandekommandon kan serveradmins säkerställa konsekvent kommunikation på hela servern.

När det väl är upprättat körs meddelandena självständigt och kan enkelt återanvändas genom att bara justera det spel-specifika kommandot och texten.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />