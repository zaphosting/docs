---
id: palworld-change-server-name
title: "Palworld: Ändra Servernamn"
description: "Lär dig hur du ändrar ditt Palworld-servernamn och uppdaterar namnet som visas i serverlistan genom att manuellt redigera rätt konfigurationsfil. -> Läs mer nu"
sidebar_label: Palworld: Ändra Servernamn
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld använder en konfigurationsfil för att definiera servernamnet som visas i spelets serverlista. I den här guiden lär du dig hur du manuellt ändrar det visade servernamnet i ZAP-Hostings webbgränssnitt och tillämpar ändringen korrekt.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att redigera dess konfigurationsfiler.

:::info Manuell Konfiguration Krävs
Den här ändringen görs genom att manuellt redigera Palworlds serverkonfiguration. Den relevanta filen nås via din spelserveradministration under `Configs`.
:::

## Öppna Palworlds Konfigurationsfil

För att ändra servernamnet behöver du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings webbgränssnitt:

1. Öppna din **Palworld**-spelserver.
2. Gå till **Configs** i serveradministrationen.
3. Öppna filen `PalWorldSettings.ini`.

:::note Plats för Konfigurationsfil
På dedikerade Palworld-servrar lagras relevanta inställningar vanligtvis i `PalWorldSettings.ini`. I ZAP-Hostings gränssnitt bör du redigera denna fil via `Configs`-sektionen istället för att ändra filvägar manuellt.
:::

## Redigera Servernamnet

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings`. Serverlistans namn styrs av posten `ServerName`.

Du kan också valfritt ange en serverbeskrivning med `ServerDescription`.

### Exempel på Konfiguration

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Din Palworld-serverbeskrivning")
```

Om din fil redan innehåller en längre `OptionSettings=(...)`-rad behöver du bara ändra de befintliga värdena för `ServerName` och eventuellt `ServerDescription`.

### Värden Du Behöver Ändra

| Konfigurationsnyckel | Beskrivning | Exempelvärde |
| --- | --- | --- |
| `ServerName` | Namnet som visas i Palworlds serverlista | `"zaphosting"` |
| `ServerDescription` | Valfri beskrivning som visas tillsammans med servern | `"Offentlig survival-server"` |

:::caution Behåll Befintliga Inställningar Intakta
`OptionSettings` innehåller ofta många andra serverinställningar i en enda rad. Ändra endast värdena för `ServerName` och `ServerDescription` om du inte avsiktligt vill modifiera andra alternativ.
:::

## Spara Ändringarna

Efter att du redigerat värdena:

1. Spara filen `PalWorldSettings.ini` i **Configs**-sektionen.
2. Kontrollera att citattecken och kommatecken fortfarande är korrekt formaterade.

### Exempel på en Befintlig Rad

Om din fil innehåller en rad liknande exemplet nedan, uppdatera endast den relevanta texten:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Public survival server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Starta Om Servern

Efter att ha sparat konfigurationen behöver du starta om din Palworld-server så att det nya namnet laddas.

### Tillämpa Den Nya Konfigurationen

Använd omstarts-funktionen i din ZAP-Hosting spelserveradministration.

| Åtgärd | Krävs |
| --- | --- |
| Spara `PalWorldSettings.ini` | Ja |
| Starta om servern | Ja |
| Kör ytterligare konsolkommandon | Nej |

:::tip Fördröjning i Uppdatering av Serverlistan
Efter omstarten kan det uppdaterade servernamnet dröja innan det visas för alla spelare i serverlistan. Vänta några minuter och uppdatera listan vid behov.
:::

## Verifiera Det Nya Servernamnet

När servern har startat om:

1. Öppna Palworld.
2. Gå till multiplayer-serverlistan.
3. Sök efter det namn du angav i `ServerName`.

Om det gamla namnet fortfarande visas, öppna `PalWorldSettings.ini` igen och kontrollera att:
- värdet för `ServerName` ändrades korrekt
- filen sparades utan problem
- servern startades om helt efter ändringen

## Conclusion

Grattis, du har nu ändrat ditt Palworld-servernamn. Vid ytterligare frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig dagligen för att hjälpa dig! 🙂