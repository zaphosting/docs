---
id: palworld-set-a-password
title: "Palworld: Ställ in ett lösenord"
description: "Lär dig hur du ställer in ett lösenord för din Palworld-server genom att manuellt redigera Palworlds konfigurationsfil och tillämpa lösenordsändringen korrekt. -> Läs mer nu"
sidebar_label: Palworld: Ställ in ett lösenord
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld låter dig skydda din server med ett lösenord så att endast auktoriserade spelare kan ansluta. I den här guiden lär du dig hur du manuellt ställer in eller ändrar serverns lösenord i din ZAP-Hosting spelserverkonfiguration och tillämpar lösenordet korrekt.



## Preparation

Innan du börjar, se till att:

- din Palworld-spelserver är online i ZAP-Hostings webbgränssnitt
- du har tillgång till spelserverns administration
- du vet vilket lösenord du vill använda för serveråtkomst

:::info Manuell konfiguration krävs
För Palworld kan lösenordet konfigureras manuellt via serverns konfigurationsfiler. I ZAP-Hostings gränssnitt når du dessa filer via din spelserveradministration under `Configs`.
:::

## Öppna Palworlds konfigurationsfil

För att ställa in ett lösenord för din Palworld-server behöver du redigera filen `PalWorldSettings.ini`.

### Hitta filen i ZAP-Hostings gränssnitt

1. Logga in i ZAP-Hostings webbgränssnitt.
2. Öppna din **Palworld** spelserveradministration.
3. Navigera till **Configs**.
4. Öppna filen `PalWorldSettings.ini`.

Den här filen innehåller de viktigaste serverinställningarna för Palworld, inklusive posten som styr om ett lösenord krävs för att ansluta.

:::note Syftet med konfigurationsfilen
Filen `PalWorldSettings.ini` lagrar serveralternativ i en enda konfigurationsrad, vanligtvis inuti sektionen `OptionSettings=(...)`. Du behöver redigera värdet för `ServerPassword` där.
:::

## Redigera serverns lösenord

När du har öppnat `PalWorldSettings.ini`, leta upp posten `ServerPassword`.

### Obligatorisk konfigurationspost

Använd följande värde:

```ini
ServerPassword="[your_password]"
```

Byt ut `[your_password]` mot det lösenord du vill att spelare ska ange när de ansluter till din server.

Om lösenordet för närvarande är inaktiverat kan värdet se ut så här:

```ini
ServerPassword=""
```

Ett tomt värde betyder att inget anslutningslösenord är inställt.

### Exempel på konfiguration

I Palworld är inställningen vanligtvis en del av `OptionSettings=(...)`-blocket. Det kan se ut ungefär så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Behåll befintligt format intakt
Ändra endast värdet inuti `ServerPassword="..."`. Ta inte bort kommatecken, citationstecken, parenteser eller andra poster i `OptionSettings=(...)`-raden, eftersom detta kan förhindra att servern laddar konfigurationen korrekt.
:::

## Konfigurationsreferens

Följande tabell visar den relevanta inställningen för denna lösenordsändring:

| Inställning | Exempelvärde | Syfte |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | Kräver att spelare anger ett lösenord innan de ansluter till servern |

### Lösenordsrekommendationer

När du väljer lösenord, tänk på följande:

| Rekommendation | Förklaring |
| --- | --- |
| Använd ett unikt lösenord | Undvik att återanvända lösenord från andra tjänster |
| Undvik väldigt enkla ord | Enkla lösenord är lättare att gissa |
| Dela det endast med betrodda spelare | Alla med lösenordet kan försöka ansluta |
| Spara det säkert | En lösenordshanterare kan hjälpa dig hålla koll på det säkert |

:::tip Välj ett starkt lösenord
Om du planerar att köra en privat Palworld-server för vänner eller en begränsad community, använd ett starkt lösenord istället för ett enkelt ord eller servernamn. Det minskar oönskade anslutningsförsök.
:::

## Spara ändringarna och starta om servern

Efter att du redigerat lösenordet, spara filen i `Configs`-sektionen.

### Tillämpa det nya lösenordet

För att ändringen ska träda i kraft:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-spelserver.

En omstart krävs eftersom Palworld läser serverinställningarna från konfigurationsfilen vid uppstart. Utan omstart kan det nya lösenordet inte tillämpas.

:::info Omstart krävs
Efter att ha ändrat `ServerPassword` måste du starta om servern manuellt från ZAP-Hostings spelserveradministration så att den nya inställningen laddas.
:::

## Verifiera lösenordet

När omstarten är klar, testa konfigurationen genom att ansluta till servern från Palworld-spelet.

### Vad du ska kontrollera

När du ansluter, bekräfta att:

- servern nu kräver ett lösenord innan anslutning
- det konfigurerade lösenordet fungerar korrekt
- spelare utan lösenord inte kan komma åt servern

Om servern inte frågar efter lösenord, öppna `PalWorldSettings.ini` igen och kontrollera att:

- `ServerPassword` finns i `OptionSettings=(...)`-sektionen
- värdet inte är tomt
- filen sparades korrekt
- servern startades om efter ändringen

:::note Lösenordets synlighet
Lösenordet sparas i klartext i konfigurationsfilen. Se till att endast dela åtkomst till din serveradministration med betrodda användare.
:::

## Conclusion

Grattis, du har nu framgångsrikt ställt in ett lösenord för din Palworld-server. För fler frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂