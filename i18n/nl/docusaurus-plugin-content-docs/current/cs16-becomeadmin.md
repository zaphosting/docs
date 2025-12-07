---
id: cs16-becomeadmin
title: "CS 1.6: Word admin op je eigen server"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en betere in-game beheer → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide admin-mogelijkheden met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in het spel gebruiken. Hieronder leggen we alle stappen uit die je moet nemen om administratorrechten aan je server toe te wijzen.  
<InlineVoucher />

## Configuratie
Een admin toevoegen doe je via de **users.ini** config. Om admin te kunnen worden en deze bestanden te vinden, moet je eerst **AMXmodX** en **Metamod** installeren. Heb je dat nog niet gedaan? Check dan deze guide: [Plugins installeren](cs16-plugins.md)

Om het **users.ini** configbestand te bewerken, moet je via FTP verbinding maken met je server. Navigeer dan naar de map ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``. Open vervolgens het configbestand met een teksteditor en pas het aan.

<InlineVoucher />

```
...
; Voorbeelden van admin accounts:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "Mijn Naam" "mijn_wachtwoord" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

In de config moet de regel ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` aangepast worden. Vroeger gebeurde authenticatie alleen via naam en wachtwoord, tegenwoordig alleen via SteamID64. Je vindt je SteamID64 door je Steam-profiel te openen en er met rechts op te klikken. Kies dan **Steam-URL kopiëren**.

Plak de URL daarna op een van deze sites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

Je krijgt dan algemene accountinfo plus de Steam ID. We hebben alleen de SteamID64 nodig. Die voeg je toe in de client entry onder **SteamID**. Het resultaat ziet er zo uit:

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

De regel bevat de volgende info:

1. naam/SteamID - Unieke ID van de speler.
2. wachtwoord - niet nodig bij Steam-authenticatie
3. permissieniveau
4. connectievlaggen - deze bepalen hoe AMX Mod X een admin probeert te autoriseren.

Omdat het via Steam gaat, is geen wachtwoord nodig. Daarom gebruiken we ``ce`` in plaats van ``en``. Hieronder een overzicht van alle autorisatieniveaus en connectievlaggen:



**Autorisatieniveau**

| Autorisatieniveau | Beschrijving                                                  |
| ----------------- | ------------------------------------------------------------- |
| a                 | immuniteit (kan niet gekickt/geban/slayed/slaped worden en wordt niet beïnvloed door andere commando’s) |
| b                 | reservering (kan joinen op gereserveerde slots)              |
| c                 | amx_kick commando                                            |
| d                 | amx_ban en amx_unban commando’s                              |
| e                 | amx_slay en amx_slap commando’s                              |
| f                 | amx_map commando                                            |
| g                 | amx_cvar commando (niet alle cvars beschikbaar)              |
| h                 | amx_cfg commando                                            |
| i                 | amx_chat en andere chatcommando’s                            |
| j                 | amx_vote en andere stemcommando’s                            |
| k                 | toegang tot sv_password cvar (via amx_cvar commando)          |
| l                 | toegang tot amx_rcon commando en rcon_password cvar (via amx_cvar commando) |
| m                 | custom level A (voor extra plugins)                          |
| n                 | custom level B (voor extra plugins)                          |
| o                 | custom level C (voor extra plugins)                          |
| p                 | custom level D (voor extra plugins)                          |
| q                 | custom level E (voor extra plugins)                          |
| r                 | custom level F (voor extra plugins)                          |
| s                 | custom level G (voor extra plugins)                          |
| t                 | custom level H (voor extra plugins)                          |
| u                 | menu toegang                                                |
| z                 | gebruiker (geen admin)                                      |



**Connectievlaggen** 

| Vlag | Beschrijving                                        |
| -----| -------------------------------------------------- |
| a    | speler disconnecten bij ongeldig wachtwoord        |
| b    | clan tag                                           |
| c    | dit is steamid/wonid                               |
| d    | dit is ip                                          |
| e    | wachtwoord niet gecontroleerd (alleen naam/ip/steamid nodig) |


## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />