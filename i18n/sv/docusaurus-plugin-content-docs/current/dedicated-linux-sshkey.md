---
id: dedicated-linux-sshkey
title: "Dedikerad Server: Generera och använda SSH-nycklar för Linux-servrar"
description: "Upptäck hur du säkert genererar och hanterar SSH-nycklar för din Linux-server för att öka anslutningssäkerheten → Lär dig mer nu"
sidebar_label: SSH-nyckel
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Generera SSH-nyckel

För en mycket säkrare anslutning än en vanlig SSH-lösenordsanslutning rekommenderas användning av SSH-nycklar. Öppna fliken "**Access & Security**" i Linux-serverns kontrollpanel. 

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

Under "**Access & Security**" kan du nu generera en nyckel med knappen "**Generate SSH Key**". 
När du klickar på den öppnas en popup och en slumpmässigt genererad nyckel laddas ner direkt till din dator.
För att nyckeln ska läggas till på servern måste du klicka på knappen "**Add Key**". 

:::info
För Linux VPS:er läggs nyckeln till direkt. För Linux Root-servrar måste servern startas om för att ändringarna ska träda i kraft.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Om du behöver fler nycklar kan du trycka på "**Generate Key**" i samma fönster.
Med "**Key name**" kan du ge nyckeln ett namn som visas i ZAP-Hosting-panelen. Det rekommenderas för bättre översikt.

När alla önskade nycklar är genererade och tillagda visas de under "**Access & Security**".

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Om du har en egen publik nyckel som du genererat externt och inte via vår panel kan du lägga till den genom att klicka på "**+**"-ikonen. 

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Ett tomt fält öppnas där du kan klistra in din publika nyckel. Nyckeln läggs till på servern genom att trycka på "**Add Key**" och visas sedan i vår panel.

## OpenSSH till PuTTY Privat Nyckel med PuTTYGen

SSH-nycklarna som skapas via vår panel är i OpenSSH-format. För att använda dem med PuTTY måste de först konverteras till PuTTY:s privata nyckelformat. Du kan använda programmet "**PuTTYGen**" som automatiskt installeras med PuTTY.

PuTTYGen finns i PuTTY:s rotmapp. Som standard ligger PuTTY-mappen i exemplet på "**C:>Program Files>PuTTY**".

Starta PuTTYGen och klicka sedan på "**File**" -> "**Load private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Nu måste filen som genererats av ZAP-Hosting öppnas. Navigera till standardmappen där dina nedladdningar sparas.

:::info
**Viktigt:** Se till att filtret är inställt på "**ALL Files**" som på bilden, eftersom .pri-filen som systemet skapat annars inte syns.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

När filen är inläst kan du ange kommentarer och lösenord för nycklarna i de olika fälten. För att sätta lösenord måste du skriva in det önskade lösenordet både i "**Key passphrase**" och "**Confirm passphrase**".
*Obs:* Du kan också lämna fälten tomma och skapa nyckeln utan lösenord, men det är lite mindre säkert och rekommenderas inte. När allt är ifyllt kan du spara en PuTTY-kompatibel nyckel med knappen "**Save private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

Ge .ppk-filen ett namn och spara den så att du hittar den igen senare.


## SSH-nyckelanslutning

För att använda nyckeln vid anslutningar måste den först kopplas in i PuTTY. Klicka på "**SSH**" - "**Auth**" - "**Browse...**".

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

Hitta nyckeln du just skapade med PuTTYGen och tryck på "**Open**".

För att slippa göra detta varje gång rekommenderas att spara inställningen i sessionen. Klicka på "**Session**" - "**Default Settings**" - "**Save**", som på skärmbilden.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Nu kan du logga in på servern med PuTTY. Den "**Key comment**" du angav i PuTTYGen syns då där.

## Inaktivera inloggning med lösenord

SSH-nycklarna skapades för att öka säkerheten. Om inloggning med SSH-lösenord fortfarande är möjlig har serverns säkerhet inte förbättrats. Därför måste SSH-inloggning med lösenord nu inaktiveras. Det skiljer sig mellan Linux VPS och Linux root-servrar hur detta görs. När inloggningen är korrekt inaktiverad kan endast användare med den SSH-nyckel du skapat ansluta.

### Linux VPS

Du kan enkelt stänga av lösenordsinloggning i fliken Access & Security.
Tryck på knappen **Deactivate Password Login** bredvid Generate SSH Key-knappen. 
När den är avstängd går det inte längre att nå servern via lösenordsinloggning. 

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

Statusen för "**SSH login via password**" ändras då till "**Inactive**".

