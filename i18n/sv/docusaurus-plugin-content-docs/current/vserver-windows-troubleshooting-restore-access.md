---
id: vserver-windows-troubleshooting-restore-access
title: "VPS: Återställ åtkomst"
description: "Upptäck hur du återfår åtkomst till din Windows VPS efter lösenordslåsning och minimerar driftstopp → Läs mer nu"
sidebar_label: Återställ åtkomst
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Det kan gå snabbt... Du försöker logga in på din Windows Server, men ditt lösenord accepteras inte längre eller så har du helt enkelt glömt det. Plötsligt är du utelåst och åtkomst till viktig data och applikationer är inte längre möjlig. Den här situationen är såklart frustrerande, men det är långt ifrån slutet. Genom att följa stegen nedan kan du återfå åtkomst till din Windows VPS och fortsätta jobba med minimal störning.



## Förberedelser
Återställning av åtkomst från administratörskontot görs med hjälp av en Windows ISO-fil. Det är alltså samma ISO-fil som användes vid den ursprungliga installationen av Windows Server-operativsystemet. 

Detta steg kan utföras antingen via [**Första installationen**](dedicated-setup.md) eller via **[ISO](dedicated-iso.md)**. Välj eller ange den ISO-fil som användes från början, beroende på vilken metod du använder.

Montera ISO-filen och starta om systemet efteråt. Windows installationsgränssnitt bör öppnas igen nästa gång systemet startas. Resultatet ska se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Återställ åtkomst

Nu är det dags att återställa åtkomsten för administratörskontot. Följ de första stegen i installationen igen, men du behöver bara gå fram till start av installationen och sedan klicka på **Reparera din dator**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Detta öppnar avancerade alternativ. Klicka på **Felsök** och sedan på **Kommandoprompt**. Då öppnas kommandotolken (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

Följande kommandon måste nu köras ett efter ett i kommandotolken:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

Tangentbordslayouten för iLO HTML-konsolen kan skilja sig från din egen, vilket gör att vissa tecken finns på andra tangenter. Tänk på detta för att köra kommandona korrekt. 

:::

Efter serverns omstart, på inloggningsskärmen, tryck på **Win+U**. I kommandotolken skriver du följande:

```
net user Administrator DittNyaLösenord
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Ditt lösenord är nu ändrat. Men du måste återställa ändringarna i **Utilman-filerna**. Starta helt enkelt om servern och följ stegen igen. I kommandotolken kör du följande kommandon:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Avslutning

När du är klar med processen ska du ha lyckats sätta ett nytt lösenord för administratörsanvändaren. Du kan nu logga in igen via Remote Desktop. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂