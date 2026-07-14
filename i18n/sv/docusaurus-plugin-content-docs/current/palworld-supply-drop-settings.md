---
id: palworld-supply-drop-settings
title: "Palworld: Inställningar för Supply Drop"
description: "Lär dig hur du ändrar frekvensen för supply drops i Palworld på din Palworld-spelserver genom att manuellt redigera inställningen SupplyDropSpan. -> Läs mer nu"
sidebar_label: Palworld: Inställningar för Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld har supply drops som dyker upp med jämna mellanrum och kan innehålla användbara resurser. I den här guiden lär du dig hur du manuellt ändrar frekvensen för supply drops på din ZAP-Hosting Palworld-spelserver genom att redigera rätt konfigurationsfil och tillämpa ändringarna korrekt.

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver via ZAP-Hostings webbgränssnitt och att servern är tillgänglig i din spelserveradministration.

:::info Manuell Konfiguration Krävs
Denna inställning görs genom att manuellt redigera Palworld-serverns konfiguration. Du behöver öppna konfigurationsfilen via **Configs**-sektionen i din spelserveradministration.
:::

## Locate the Configuration File

För att ändra intervallet för supply drops måste du redigera filen `PalWorldSettings.ini`.

I din ZAP-Hosting spelserveradministration:

1. Öppna din Palworld-server.
2. Gå till **Configs**.
3. Öppna filen `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Plats för Konfigurationsfilen
På ZAP-Hosting hanteras de relevanta Palworld-inställningarna för gameplay vanligtvis via filen `PalWorldSettings.ini` i **Configs**-området i din serveradministration. Om ditt gränssnitt ser lite annorlunda ut, använd listan över tillgängliga konfigurationsfiler och leta specifikt efter `PalWorldSettings.ini`.
:::

## Edit the Supply Drop Setting

Inställningen som styr frekvensen för supply drops heter `SupplyDropSpan`.

Detta värde definierar intervallet mellan supply drops i **minuter**.

### Find the Correct Section

I `PalWorldSettings.ini` lagras Palworld-serverinställningar vanligtvis i raden `OptionSettings`. Du behöver hitta den befintliga inställningsblocket och kontrollera om `SupplyDropSpan` redan finns.

Om den redan finns, ändra dess värde.

Om den inte finns, lägg till den inuti `OptionSettings=(...)`-sektionen tillsammans med de andra kommatecken-separerade inställningarna.

### Configuration Entry

Använd följande format:

```ini
SupplyDropSpan=[your_value]
```

Byt ut `[your_value]` mot det antal minuter du vill använda.

### Example Values

| Inställning | Betydelse |
| --- | --- |
| `SupplyDropSpan=180` | Standardintervall på 3 timmar |
| `SupplyDropSpan=60` | Supply drops var 1 timme |
| `SupplyDropSpan=360` | Supply drops var 6:e timme |
| `SupplyDropSpan=30` | Mycket frekventa supply drops |

Här är ett exempel på hur inställningen kan se ut i hela `OptionSettings`-blocket:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Behåll Befintlig Syntax Oförändrad
Ta inte bort kommatecken, parenteser eller andra befintliga värden i `OptionSettings`-raden. Ett formateringsfel här kan göra att servern inte kan läsa in konfigurationen korrekt.
:::

## Save and Apply the Changes

Efter att du har redigerat värdet:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-server från ZAP-Hostings spelserveradministration.

En omstart krävs eftersom Palworld inte tillämpar denna gameplay-inställning live medan servern körs.

### Är ett Ytterligare Kommando Nödvändigt?

Inget extra kommando i spelet eller konsolen krävs normalt för denna ändring. Omstart av servern är det som krävs för att ladda det uppdaterade värdet för `SupplyDropSpan`.

| Åtgärd | Krävs |
| --- | --- |
| Redigera `PalWorldSettings.ini` | Ja |
| Lägg till eller ändra `SupplyDropSpan` | Ja |
| Kör extra konsolkommando | Nej |
| Starta om servern efter sparande | Ja |

## Verify the Setting

När servern har startat om ska det nya intervallet för supply drops vara aktivt.

Eftersom denna inställning styr tidsbaserade världshändelser kan du behöva vänta på nästa spawn-cykel innan du kan bekräfta ändringen fullt ut i spelet. Om du sätter ett kortare intervall som `60` eller `30` blir verifieringen enklare.

:::tip Testa Ändringar Snabbare
Om du vill bekräfta att inställningen fungerar utan att vänta flera timmar, sätt tillfälligt `SupplyDropSpan=30`. Efter testet kan du ändra tillbaka till ditt föredragna långsiktiga värde.
:::

## Troubleshooting

### Inställningen Tillämpas Inte

Om frekvensen för supply drops inte verkar ändras, kontrollera följande:

- Se till att `SupplyDropSpan` är skrivet exakt som ovan
- Bekräfta att värdet finns inom `OptionSettings=(...)`-sektionen
- Kontrollera att inga kommatecken saknas eller att parenteser är brutna
- Starta om servern efter att du sparat filen

### Servern Har Konfigurationsfel

Om servern inte startar efter att du redigerat filen, återställ den tidigare konfigurationen och granska syntaxen noggrant.

:::danger Felaktig INI-Formatering
Palworld lagrar många gameplay-inställningar i en enda `OptionSettings`-rad. Redan ett felplacerat tecken kan förstöra konfigurationen. Granska alltid dina ändringar noggrant innan du sparar.
:::

## Conclusion

Grattis, du har nu ändrat inställningarna för supply drops i Palworld. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!