---
id: source-gsltoken
title: Använda game server login tokens
description: "Upptäck hur GSL-tokens säkrar Steam-spelservrar genom att koppla bans till konton, vilket garanterar säkrare och reglerad serverhosting → Lär dig mer nu"
sidebar_label: GSL-Token
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ Vad är en GSL-token?

Gameserver Login Tokens (GSLTs) är en säkerhetsåtgärd som Steam har infört. För att kunna köra spelservrar för vissa Steam-spel (främst Source-spel) måste man generera en token.

<InlineVoucher />

## ❓ Vad är syftet med en GSL-token?

Tidigare gjorde Valve några regeländringar för att hosta en spelserver. Inte alla serveroperatörer följde dessa regler, vilket ledde till att IP-adresser för spelservrar blev bannade.

Men den metoden var inte effektiv eftersom den lätt kunde kringgås med en ny IP-adress och det skapade stora problem för spelserver-leverantörer. Anledningen är att när en IP-adress bannas, drabbas ofta även andra kunder.

Därför har detta system implementerats, som istället bannar token och blockerar det kopplade Steam-kontot från att driva fler spelservrar. 


## ➕ Skapa token

För att skapa en game server login token behöver du vara inloggad på Steam-webbplatsen. Token kan skapas här: [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)



![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)



När du kommer dit kommer du bli ombedd att ange App ID och en memo (valfritt namn som används som anteckning). App ID beror på spelet. Här är de viktigaste App ID:n:

|              Spel               | App ID |
| :------------------------------: | :----: |
| Counter-Strike: Global Offensive |  730   |
|      Counter-Strike: Source      |  240   |
|         Team Fortress 2          |  440   |
|            Garrys Mod            |  4000  |



GSL-token kan ställas in i gränssnittet under inställningarna.

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)


När detta är klart och servern har startats om, kommer servern även att synas i den offentliga serverlistan. 

## ⁉ Vanliga frågor

**Vilka är förutsättningarna för en GSL-token?**

Steam-kontot får inte ha några restriktioner som community-ban. Dessutom måste ett giltigt telefonnummer vara registrerat på Steam-kontot.


**Kan jag använda en GSL-token för flera servrar?**

Varje spelserver behöver en egen token.


**Finns det något som kan göra att min GSL-token blir bannad?**

Speciellt för CS:GO-servrar finns det plugins som inte är tillåtna. En officiell lista har inte publicerats, men det inkluderar plugins som ändrar spelarens inventarier (vapen-skins), ranker eller liknande. 


**Vad händer om min GSL-token blir bannad?**

Om en token bannas, blir även kontot och alla kopplade tokens bannade. Det betyder att spelservern inte längre är offentligt tillgänglig. Kontot kan heller inte användas för att driva fler servrar i framtiden. Däremot kan Steam-kontot fortfarande användas för att spela. Inga ytterligare straff väntas i det avseendet.

<InlineVoucher />