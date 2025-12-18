---
id: minecraft-worlds
title: "Minecraft: Hantera världssparningar"
description: "Upptäck hur du hanterar, konverterar och säkerhetskopierar Minecraft-världar över plattformar för att hålla ditt spelprogress säkert och smidigt → Lär dig mer nu"
sidebar_label: Hantera Världar
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I grunden sparar Minecraft spelet som **världar**, där varje värld är en egen fristående sparfil. I den här guiden går vi igenom hur du hanterar världar på din Minecraft-spelserver, inklusive att konvertera världar mellan plattformar, regenerera världar, säkerhetskopiera dina lokala och servervärldar samt ladda upp världar till din server.

<InlineVoucher />

## Förberedelser

För att kunna hantera dina världar måste du börja med att ansluta till din Minecraft-spelserver via FTP. Om du inte är bekant med hur man använder FTP, kolla in vår guide [Access via FTP](gameserver-ftpaccess.md).

## Jämförelse av plattforms-skillnader

En viktig skillnad mellan vanilla-servrar och serverplattformar är att vanilla-servrar kombinerar den normala världen, Nether och End-dimensionerna som en enda sparfil.

I kontrast delar alternativa serverplattformar som Spigot, PaperMC och Bukkit upp varje dimension som separata världssparningar. Du kan se tabellen nedan som jämför hur en exempelvärld kallad **zapdocs** hanteras av båda typerna av serverplattformar.

| Världs-dimension | Vanilla Server (Kombinerad) | Serverplattformar (Individuella) |
| ---------------- | --------------------------- | -------------------------------- |
| Normal/Overworld | zapdocs                     | zapdocs                          |
| Nether           | zapdocs                     | zapdocs_nether                   |
| The End          | zapdocs                     | zapdocs_the_end                  |

## Konvertera världar

När du byter mellan en vanilla-server och en serverplattform kan du vilja behålla din världssparning. På grund av skillnaderna ovan måste du justera filstrukturen för att antingen extrahera eller slå ihop individuella världar för Nether och End beroende på vad du gör.

:::info
Detta krävs endast om du byter mellan vanilla och serverplattformar och vill behålla och flytta en befintlig värld. Om du bara flyttar mellan vanilla-servrar eller mellan serverplattformar behöver du inte konvertera något.
:::

:::note
Se till att stänga av servern innan du fortsätter för att undvika konflikter eller rollback.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Konvertera från Vanilla" default>

För att konvertera en värld från vanilla till serverplattformformat måste du extrahera vissa mappar för att skapa nya individuella världar för varje dimension. Det förväntas såklart att du flyttar alla världar till en ny server som kör en serverplattform som Spigot, PaperMC eller Bukkit.

Anslut till din server via FTP och följ sökvägen `../vanilla/[din_värld]` för att komma åt världssparningen du vill konvertera. Leta upp mapparna **DIM1** och **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

Mappen **DIM1** används för End-data medan **DIM-1** används för Nether-data.

Du måste flytta varje mapp till sin egen nya världsmapp enligt följande:
- För Nether, skapa en ny mapp `[din_värld]_nether` i root-mappen. Flytta **DIM-1**-mappen till denna nya separata världsmapp.
- På samma sätt för End, skapa en ny mapp `[din_värld]_the_end` i root-mappen. Flytta **DIM1**-mappen till denna nya separata världsmapp.

:::info
Du kan behöva skriva över `DIM`-mapparna, men det är normalt eftersom serverplattformar som standard genererar alla dimensioner direkt.
:::

I detta exempel heter världen `world`, så nya mappar `world_nether` och `world_the_end` skapades i root-mappen, med rätt `DIM`-mapp flyttad dit.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

De tre individuella världarna är nu redo att användas på serverplattformar.

</TabItem>

<TabItem value="converting-to-vanilla" label="Konvertera till Vanilla">

För att konvertera en värld från serverplattform till vanilla-format är processen i princip densamma men baklänges. Du måste extrahera data från de individuella världarna för Nether och End för att slå ihop dem till ett enda världssparformat. Det förväntas att du flyttar den sammanslagna världen till en ny server som kör vanilla-server.

Anslut till din server via FTP och gå till root-mappen. Leta upp de tre individuella världsmapparna som ska heta `[din_värld]`, `[din_värld]_nether` och `[din_värld]_the_end` där `[din_värld]` ersätts med världens namn.

Öppna mappen `[din_värld]_nether` och flytta `DIM-1`-mappen till huvudmappen `[din_värld]`. I detta exempel heter världen som tidigare `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Gör samma sak för mappen `[din_värld]_the_end` och flytta `DIM1` till huvudmappen `[din_värld]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

Den sammanslagna världen är nu redo att användas på en vanilla-server.

</TabItem>
</Tabs>

## Generera världar

Att generera världar är enkelt och du kan välja att antingen skapa en helt ny värld eller regenerera den nuvarande världen som en fräsch kopia. Minecraft använder ett **seed**-system där varje värld har ett unikt seed, vilket betyder att du med bara seed kan regenerera en exakt startkopia av en värld.

<Tabs>
<TabItem value="generating-new" label="Generera ny värld" default>

För att generera en ny värld, stäng helt enkelt av servern och anslut via FTP. Öppna även konfigurationsfilen `server.properties`, antingen via **Configs**-sektionen i serverns webbpanel eller via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

För att generera en ny värld kan du antingen:
- Via FTP hitta världen som heter samma som `level-name`-parametern i konfigfilen och radera den.
- Ändra `level-name`-parametern i konfigfilen till något annat och spara.

Om du vill behålla den gamla sparningen rekommenderar vi alternativ 2 eftersom världen då finns kvar på servern men är "inaktiv".

Starta nu servern igen och servern kommer märka att världen med `level-name` saknas och generera en ny värld med ett nytt seed.

</TabItem>

<TabItem value="regenerating-current" label="Regenerera nuvarande värld">

För att regenerera den nuvarande världen måste du först ta reda på seed. Detta kan göras via **Console**-sektionen i serverns webbpanel eller direkt i spelet, men tänk på att du behöver OP (operator) för att göra det i spelet.

Kör kommandot `/seed` i konsolen eller i spelet, vilket visar seed-värdet för den aktuella världen. Notera detta seed.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Med seedet känt måste du ändra `level-seed`-parametern i `server.properties`-filen. Detta gör du antingen via **Configs** i webbpanelen eller via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Se till att stänga av servern innan så att filen sparas korrekt.
:::

Ändra `level-seed` till seed-värdet och spara filen. Anslut sedan till servern via FTP.

För att regenerera världen kan du antingen:
- Via FTP hitta världen som heter samma som `level-name` i konfigfilen och radera den.
- Ändra `level-name` i konfigfilen till något annat och spara.

Om du vill behålla den gamla sparningen rekommenderar vi alternativ 2 så att världen finns kvar men är "inaktiv".

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Starta nu servern igen och den kommer märka att världen med `level-name` saknas och regenerera den nuvarande världen med det seed som angavs i `level-seed`.

</TabItem>
</Tabs>

## Säkerhetskopiera världssparningar

### Lokala sparningar

Lokala världssparningar är de du skapat när du spelat singleplayer. Dessa finns i din Windows AppData, specifikt i följande sökväg:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Du kan enkelt komma åt denna sökväg direkt genom att trycka `CTRL` + `R` samtidigt och skriva in följande sökväg i kör-dialogen: `%appdata%/.minecraft/saves/`. Tryck bara på **OK** så öppnas mappen.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

I denna mapp ser du alla lokala världssparningar samlade.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Åtkomst till sparningar via FTP

Att säkerhetskopiera din världssparning från servern är enkelt. När du anslutit till din spelserver via en FTP-klient, gå till root-mappen för den serverplattform du använder. Världssparningar finns direkt där, med standardvärldens namn som `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Automatisk säkerhetskopiering

Vi erbjuder också en funktion för att automatiskt säkerhetskopiera din världssparning (och konfigurationsfil) direkt via vår webbpanel. Gå till din spelservers webbpanel och öppna **Verktyg->Backups**. Här kan du ställa in olika alternativ för schemalagda automatiska säkerhetskopior för din server. Vi ger dig 10 GB gratis backup-lagring där dina säkerhetskopior sparas. För mer info om backups, kolla in vår dedikerade guide [Backups](gameserver-backups.md).

## Ladda upp världssparning

Precis som med säkerhetskopiering är det enkelt att ladda upp din världssparning. Se först till att du är ansluten till din spelserver via FTP. När du är redo, gå till root-mappen för den serverplattform du använder.

:::info Vanilla & Serverplattform-världar
Kom ihåg att vanilla-server och serverplattformar sparar världar i lite olika format.

Om du flyttar en sparning från vanilla till en serverplattform som PaperMC, eller tvärtom, kolla in avsnittet om konvertering av världar i guiden.
:::

Dra och släpp helt enkelt dina världssparningar i root-mappen via din FTP-klient så laddas de upp till servern.

:::tip
Det kan vara smart att kopiera namnet på världsmappen du laddat upp eftersom du behöver det för att aktivera den i nästa steg.
:::

## Aktivera världssparning

För att använda en specifik världssparning måste du redigera konfigurationsfilen `server.properties`, specifikt parametern `level-name`.

Det kan du göra antingen via **Configs** i serverns webbpanel eller via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

I filen, hitta parametern `level-name` och ändra den så att den matchar mappnamnet på din världssparning. Om du använder en serverplattform, använd huvudmappens namn och inte `_nether` eller `_the_end`-mapparna.





## Slutsats

Nu vet du hur du hanterar dina Minecraft-världar med självförtroende. Från att konvertera sparningar mellan vanilla och serverplattformar, till att generera nya världar, regenerera gamla med seeds, göra pålitliga säkerhetskopior, ladda upp egna världar och aktivera dem på din server. Med denna kunskap är du redo att smidigt hantera dina världar och hålla dina äventyr säkra och organiserade.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />