---
id: gameserver-gameswitch
title: 'Spelserver: Game Switch-funktionen via webbgränssnittet'
description: "Upptäck hur du enkelt hanterar och byter spel på din ZAP-Hosting-server för smidig anpassning av spelupplevelsen → Lär dig mer nu"
sidebar_label: Byt spel
services:
  - gameserver
---


import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Med en ZAP-Hosting Spelserver kan du snabbt och enkelt byta server mellan olika spel vi erbjuder via ditt webbgränssnittspanel. I den här guiden lyfter vi fram vår game switch-funktion och visar hur du kan använda den för att hantera och aktivera olika spel på din spelserver.

<YouTube videoId="nmPd4OsEEvc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/egQo23DdptPw4qm/preview" title="Så använder du Game Switch-funktionen på ZAP-Hosting" description="Lär dig bättre när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>


<InlineVoucher />

## Kom åt webbgränssnittet

Börja med att gå till dashboarden för din spelserverprodukt på vår hemsida. Navigera sedan till **Inställningar->Spel** i menyn till vänster.

Nu är du i Game Switch-sektionen där du kan hantera spelinstallationer, aktivera spel och justera slot-priser vid behov.

![](https://screensaver01.zap-hosting.com/index.php/s/NT6d4f7iZa62iPf/preview)

## Hantera spel

I **Spel**-sektionen i ditt webbgränssnitt ser du en lista över installerade spel. Här kan du också se spelversion och olika knappar för att hantera spelinstallationen.

:::info Livstids-spelservrar
Med vår Livstids-spelserverprodukt fungerar prissättningen för game switch annorlunda. För varje spel du vill äga permanent på din livstids-spelserver tillkommer en **engångsavgift** på **30 €** per spel. När du köpt spelet blir det **permanent** tillgängligt på just den livstids-spelservern och kan bytas till när som helst.

Bortsett från prissättningen för livstids-servrar är game switch-processen densamma, men du köper spel istället för att förlita dig på slot-priser.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JJfYoRSi3M26qbc/preview)

### Installera nytt spel

För att installera ett nytt spel på din spelserver, välj rullgardinsmenyn **Tillgängliga spel**, där du kan bläddra bland spel som du kan installera utan extra kostnad.

![](https://screensaver01.zap-hosting.com/index.php/s/iN7rNje3zaBPMgf/preview)

Under denna sektion hittar du även rullgardinsmenyn **Fler spel**. I vårt breda spelutbud kan vissa spel ha olika slot-priser, vilket kan innebära att du inte kan installera det valda spelet utan extra kostnad. För att lösa detta måste du betala en tilläggsavgift för att höja ditt slot-pris. Se avsnittet Ändra slot-pris för mer info.

:::info Minsta slot-antal
Vissa spel i vårt spelutbud kräver ett specifikt minsta antal slots innan du kan installera dem på din spelserver. Håll muspekaren över varningsikonen för att få mer info. Använd uppgradera/nedgradera-funktionen för att anpassa din server efter kraven.

![](https://screensaver01.zap-hosting.com/index.php/s/AfAonXCqmLFDyay/preview)
:::

När du hittat ett spel du vill installera, klicka på den gröna nedladdningsknappen för att starta installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/EjCQK6WYac7Ejfr/preview)

:::caution Byte av host-system
Beroende på spelet kan du behöva byta till ett annat host-system för att fortsätta installationen. Det beror oftast på att spelet körs på ett annat operativsystem (Linux eller Windows) och därför kräver en annan host.

Host-bytet är en **destruktiv** process, vilket betyder att all data på servern **kommer att** raderas. Säkerhetskopiera därför alla filer eller sparningar du vill behålla innan du fortsätter.
:::

Du får en popup som ber dig bekräfta installationen efter att du klickat på nedladdningsknappen. Acceptera för att starta den automatiska installationen. Du kan följa installationsförloppet högst upp på sidan.

När installationen är klar ser du det nya spelet under **Installerade spel**. Du har nu installerat ett nytt spel på din spelserver.

### Aktivera & ta bort spel

Innan du börjar spela måste du aktivera spelet, vilket sätter det som det aktiva spelet som körs på din spelserver.

Det gör du enkelt genom att gå till **Installerade spel** och klicka på den blå aktivera-knappen. Det aktiva spelet visas med en grön bock. När du klickar på aktivera-knappen kommer en bekräftelseprompt upp som du ska acceptera.

![](https://screensaver01.zap-hosting.com/index.php/s/XT8jwyDq6j5zXPn/preview)

Servern aktiverar spelet och startar om under processen. När den är klar är spelet aktivt och du kan börja spela. Du har nu aktiverat ett spel på din spelserver.

### Ta bort & installera om spel

Att ta bort och installera om ett spel är enkelt och görs via **Installerade spel**.

När du hittat spelet du vill hantera, klicka på den orange installera om-knappen för att installera om spelet. Detta är en destruktiv process som raderar all data i spelet, som servrar eller konfigurationsinställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/x8kmeor6S7mXe9g/preview)

Vill du ta bort ett spel helt, klicka på den röda ta bort-knappen bredvid spelet under **Installerade spel** för att radera det från servern.

![](https://screensaver01.zap-hosting.com/index.php/s/fwgGGzjA5mE2qRs/preview)

## Ändra slot-pris

Vissa spel i vårt utbud kan ha olika slot-priser, vilket kan hindra dig från att installera vissa spel. Då måste du höja ditt slot-pris och betala en tilläggsavgift för att göra spelen tillgängliga igen.

Det kan du göra på två sätt: antingen genom att klicka på **Ändra slotpris** högst upp på sidan eller genom att söka efter spel för att se slot-priser för otillgängliga spel.

Vi rekommenderar att du först använder rullgardinsmenyn **Fler spel** för att hitta spel och enkelt se deras slot-priser. När du hittat spelet klickar du på den blå köp-knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/FnrqX4SFQq2MkPL/preview)

Då öppnas prompten för slotprisjustering med förifyllt slotpris för det valda spelet. Här ser du tilläggsavgiften du måste betala samt det nya paketpriset baserat på slotprisjusteringen. Du kan även bläddra bland spelen här igen om du vill.

![](https://screensaver01.zap-hosting.com/index.php/s/EGaZRMzjnF3QPiL/preview)

När du är redo klickar du på nästa-knappen som tar dig till betalningsval för att täcka tilläggsavgiften. Välj betalmetod och klicka på köp nu för att slutföra slotprisändringen.

![](https://screensaver01.zap-hosting.com/index.php/s/83oPQocpmSX58R4/preview)

När det är klart ska det nya slot-priset vara uppdaterat på din spelserver. Du uppmanas att starta om servern för att allt ska slutföras.

Nu kan du gå tillbaka till **Tillgängliga spel** och installera spelet som vanligt. Dessutom har du lyckats ändra slot-priset för din spelserver.

<InlineVoucher />