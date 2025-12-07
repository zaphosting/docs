---
id: cs16-becomeadmin
title: "CS 1.6: Bli admin på din egen server"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och bättre in-game hantering → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge administratörsrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Konfiguration
Att lägga till en admin görs via **users.ini**-konfigurationen. För att kunna bli admin och hitta dessa filer måste du först installera **AMXmodX** och **Metamod**. Om du inte gjort det än, är följande guide värd att kolla in: [Installera Plugins](cs16-plugins.md)

För att redigera **users.ini**-filen behöver du ansluta till servern via FTP. Där navigerar du till mappen ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``. Nästa steg är att öppna config-filen med en texteditor och ändra den.

<InlineVoucher />

```
...
; Examples of admin accounts:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "My Name" "my_password" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

I config-filen måste raden ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` justeras. Tidigare gjordes autentiseringen bara via namn och lösenord. Numera sker den endast via SteamID64. Du hittar din SteamID64 genom att öppna din Steam-profil och högerklicka var som helst på den. Klicka sedan på **Kopiera Steam-URL**.

Efter det klistrar du in URL:en på någon av följande sajter:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

Där får du allmän kontoinformation samt Steam ID. Här behöver vi bara SteamID64. Steam ID:t ska sedan läggas in i klientposten under **SteamID**. Resultatet ser ut så här:

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

Raden innehåller följande info:

1. namn/SteamID - spelarens unika ID.
2. lösenord - inget behövs vid Steam-autentisering
3. behörighetsnivå
4. anslutningsflaggor - flaggorna styr hur AMX Mod X försöker auktorisera en ansluten admin.

I det här fallet behövs inget lösenord eftersom autentiseringen sker via Steam. Därför sätter vi ``ce`` istället för ``en``. Nedan hittar du en översikt över alla behörighetsnivåer och anslutningsflaggor:



**Behörighetsnivå**

| Behörighetsnivå | Beskrivning                                                  |
| --------------- | ------------------------------------------------------------ |
| a               | immunitet (kan inte kickas/banas/slayas/slapas eller påverkas av andra kommandon) |
| b               | reservation (kan ansluta på reserverade platser)             |
| c               | amx_kick kommando                                            |
| d               | amx_ban och amx_unban kommandon                              |
| e               | amx_slay och amx_slap kommandon                              |
| f               | amx_map kommando                                            |
| g               | amx_cvar kommando (inte alla cvars är tillgängliga)          |
| h               | amx_cfg kommando                                            |
| i               | amx_chat och andra chattkommandon                            |
| j               | amx_vote och andra röstningskommandon                        |
| k               | åtkomst till sv_password cvar (via amx_cvar kommando)        |
| l               | åtkomst till amx_rcon kommando och rcon_password cvar (via amx_cvar kommando) |
| m               | anpassad nivå A (för extra plugins)                          |
| n               | anpassad nivå B (för extra plugins)                          |
| o               | anpassad nivå C (för extra plugins)                          |
| p               | anpassad nivå D (för extra plugins)                          |
| q               | anpassad nivå E (för extra plugins)                          |
| r               | anpassad nivå F (för extra plugins)                          |
| s               | anpassad nivå G (för extra plugins)                          |
| t               | anpassad nivå H (för extra plugins)                          |
| u               | menyåtkomst                                                  |
| z               | användare (ingen admin)                                      |



**Anslutningsflaggor** 

| Flagg | Beskrivning                                        |
| ----- | -------------------------------------------------- |
| a     | koppla från spelaren vid ogiltigt lösenord         |
| b     | clan-tag                                           |
| c     | detta är steamid/wonid                             |
| d     | detta är ip                                       |
| e     | lösenord kontrolleras inte (endast namn/ip/steamid behövs) |


## Slutsats

Grattis, du har nu konfigurerat administratörsrättigheterna! Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />