---
id: vserver-linux-sshkey
title: "VPS: Generera och använd SSH-nycklar för Linux-servrar"
description: "Upptäck hur du säkert genererar och hanterar SSH-nycklar för din Linux-server för att förbättra anslutningssäkerheten och kontrollen → Läs mer nu"
sidebar_label: SSH-nyckel
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Generera SSH-nyckel

För en mycket säkrare anslutning än en vanlig SSH-lösenordsanslutning rekommenderas användning av SSH-nycklar. Öppna därför fliken "**Access & Security**" i Linux-serverns kontrollpanel.

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

Under "**Access & Security**" kan du nu generera en nyckel med knappen "**Generate SSH Key**". 
När du klickar på den öppnas en popup och en slumpmässigt genererad nyckel laddas ner direkt till din dator.
För att nyckeln ska läggas till på servern måste du klicka på knappen "**Add Key**". 

:::info
För Linux VPS:er läggs nyckeln till direkt. För Linux Root-servrar måste servern startas om för att ändringarna ska träda i kraft.
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

Om du behöver fler nycklar kan du trycka på "**Generate Key**" i samma fönster.
Med "**Key name**" kan du ge nyckeln ett namn som visas i ZAP-Hosting-panelen. Det rekommenderas för bättre översikt.

När alla önskade nycklar är genererade och tillagda visas de under "**Access & Security**".

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

Om du har en egen publik nyckel som du genererat externt och inte via vår panel kan du lägga till den genom att klicka på "**+**"-ikonen.

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

Ett tomt fält öppnas där du kan klistra in din publika nyckel. Nyckeln läggs till på servern genom att trycka på "**Add Key**" och visas sedan i vår panel.

## OpenSSH till PuTTY Privat Nyckel med PuTTYGen

SSH-nycklarna som skapas via vår panel är i OpenSSH-format. För att kunna använda dem med PuTTY måste de först konverteras till PuTTY:s privata nyckelformat. Det gör du med programmet "**PuTTYGen**" som installeras automatiskt med PuTTY.

PuTTYGen finns i PuTTY:s rotmapp. Som standard hittar du PuTTY-mappen i exemplet på "**C:>Program Files>PuTTY**".

Starta PuTTYGen och klicka sedan på "**File**" -> "**Load private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

Nu måste filen som genererats av ZAP-Hosting öppnas. Gå till standardmappen där dina nedladdningar sparas.

:::info
**Viktigt:** Se till att filtret är inställt på "**ALL Files**" som på bilden, eftersom .pri-filen som systemet skapat annars inte syns.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

När filen är inläst kan du ange kommentarer och lösenord för nycklarna i de olika fälten. För att sätta lösenord måste du skriva samma lösenord i både "**Key passphrase**" och "**Confirm passphrase**".
*Obs:* Du kan också lämna fälten tomma och skapa nyckeln utan lösenord, men det är lite mindre säkert och rekommenderas inte. När allt är klart kan du spara en PuTTY-kompatibel nyckel med knappen "**Save private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

Ge .ppk-filen ett namn och spara den så att du hittar den igen.

## SSH-nyckelanslutning

För att använda nyckeln i anslutningar måste den först kopplas in i PuTTY. Klicka på "**SSH**" - "**Auth**" - "**Browse...**".

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

Hitta nyckeln du just skapade med PuTTYGen och klicka på "**Open**".

För att slippa göra detta varje gång rekommenderas att spara inställningen i sessionen. Klicka på "**Session**" - "**Default Settings**" - "**Save**" som på skärmbilden.

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

Nu kan du logga in på servern med PuTTY. Den "**Key comment**" du skrev in i PuTTYGen visas då.

## Inaktivera inloggning med lösenord

SSH-nycklar skapades för att öka säkerheten. Om inloggning med SSH-lösenord fortfarande är möjlig har serverns säkerhet inte förbättrats. Därför måste SSH-inloggning med lösenord nu stängas av. Det skiljer sig mellan Linux VPS och Linux root-servrar hur detta görs. När inloggningen är korrekt avstängd kan endast användare med din SSH-nyckel ansluta.

### Linux VPS

Du kan enkelt stänga av lösenordsinloggning i fliken Access & Security.
Tryck på knappen **Deactivate Password Login** bredvid Generate SSH Key-knappen.
När den är avstängd går det inte längre att nå servern via lösenordsinloggning.

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

Statusen för "**SSH login via password**" ändras då till "**Inactive**".

## Slutsats

Grattis, du har nu installerat och konfigurerat din SSH-nyckel! Har du fler frågor eller problem är du varmt välkommen att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />