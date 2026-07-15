---
id: palworld-change-server-type
title: "Palworld: Byt Servertyp"
description: "Lär dig hur du byter servertyp för din Palworld-server mellan Linux och Windows, uppdaterar rätt konfigurationsväg och tillämpar ändringen korrekt för mod-kompatibilitet. -> Läs mer nu"
sidebar_label: "Byt Servertyp"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld-servrar kan köras med olika servertyper, vanligtvis Linux eller Windows, beroende på din hostingsetup och modkrav. I den här guiden lär du dig hur du byter servertyp i ZAP-Hostings gränssnitt, identifierar rätt konfigurationsfilsväg efteråt och tillämpar ändringen korrekt.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt och behörighet att stoppa och starta om servern.

:::info Viktig information om servertypändringar
Att byta servertyp från Linux till Windows, eller från Windows till Linux, kan påverka filvägar, mod-kompatibilitet och befintliga konfigurationsplatser. Windows-servertyp krävs ofta för vissa UE4SS-baserade moduppsättningar.
:::

:::caution Kontrollera om ominstallation krävs
Beroende på hur Palworld-produkten är distribuerad på din tjänst kan byte av servertyp kräva ominstallation eller omdistribution av mjukvaran. Om exakt alternativ inte finns tillgängligt i ditt nuvarande gränssnitt, kontakta support innan du fortsätter.
:::

## Förstå vad som ändras när du byter servertyp

Att byta servertyp innebär vanligtvis inte att ändra ett värde i Palworlds spelkonfiguration. Istället är huvudändringen den underliggande servermiljön, vilket också ändrar platsen för de aktiva konfigurationsfilerna.

För Palworld är huvudkonfigurationsfilen vanligtvis:

- `PalWorldSettings.ini`

Mappen som innehåller denna fil beror på vald servertyp.

| Servertyp | Konfigurationsmapp | Huvudkonfigurationsfil |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Varför detta är viktigt
Om du redigerar Linux-konfigurationsfilen men din server körs som Windows-servertyp, kan dina ändringar inte tillämpas eftersom servern läser från Windows-specifik sökväg istället.
:::

## Stoppa servern

Innan du byter servertyp bör du stoppa servern för att undvika filkonflikter och ofullständiga ändringar.

1. Logga in i ZAP-Hostings webbgränssnitt för spelservern.
2. Öppna din Palworld-serveradministration.
3. Stoppa servern via serverkontrollalternativen.

:::tip Rekommenderat innan redigering
Det är en bra idé att skapa en backup innan du byter servertyp, särskilt om du redan använder mods eller har redigerat konfigurationsfiler manuellt.
:::

## Byt servertyp i ZAP-Hostings gränssnitt

Servertypbytet hanteras vanligtvis via produkt- eller mjukvaruinställningarna i ZAP-Hostings gränssnitt, inte genom att redigera en rad i `PalWorldSettings.ini`.

1. I din Palworld-serveradministration, leta efter servermjukvaru- eller spelinställningar.
2. Hitta alternativet som styr installerad servertyp eller mjukvaruversion.
3. Byt inställningen från `Linux` till `Windows`, eller från `Windows` till `Linux`, beroende på din målsetup.
4. Spara ändringen.



:::info Om du inte hittar servertyp-alternativet
Den exakta benämningen och platsen för denna inställning kan variera beroende på aktuell ZAP-Hosting-gränssnitt eller produktgeneration. Om ingen servertypväljare syns kan bytet kräva ominstallation eller supporthjälp.
:::

## Redigera rätt konfigurationsfil

Efter att ha bytt servertyp måste du kontrollera att du redigerar den aktiva konfigurationsfilen i rätt mapp.

### Öppna konfigurationssektionen

I ZAP-Hostings spelserveradministration:

1. Öppna din Palworld-server.
2. Gå till `Configs`.
3. Navigera till mappen som matchar din valda servertyp.

Använd en av följande sökvägar:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Öppna sedan:

- `PalWorldSettings.ini`

### Verifiera eller återapplicera dina inställningar

Om du tidigare redigerat inställningar med den andra servertypen kan dessa ändringar bara finnas i den gamla mappen. Du bör jämföra båda versionerna av `PalWorldSettings.ini` och återapplicera nödvändiga värden i den nu aktiva filen.

| Vad att kontrollera | Varför det är viktigt |
| --- | --- |
| Befintliga anpassade inställningar | De kan bara finnas i den tidigare servertypens mapp |
| Mod-relaterade inställningar | Windows-servertyp används ofta för UE4SS-modstöd |
| Spelvärdesinställningar | Servern läser bara filen från den aktiva OS-specifika sökvägen |

:::caution Anta inte att båda filerna är synkroniserade
Linux- och Windows-konfigurationsmapparna är separata. Att byta servertyp garanterar inte automatiskt att dina anpassade inställningar kopieras mellan båda platserna.
:::

## Kontrollera konfigurationsposter

Servertypen styrs normalt inte av en rad i `PalWorldSettings.ini`. Men efter byte bör du ändå bekräfta att din aktiva konfigurationsfil innehåller de inställningar du förväntar dig.

En typisk `PalWorldSettings.ini`-struktur ser ut ungefär så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Byt ut platshållare som:

- `[your_server_name]` mot ditt faktiska servernamn
- `[your_admin_password]` mot ditt adminlösenord
- `[your_server_password]` mot ditt anslutningslösenord om det används
- `[your_server_ip]` mot din publika server-IP om det krävs i din setup

:::note Ingen speciell kommando krävs i filen
Det finns ingen känd post i `PalWorldSettings.ini` som byter underliggande servertyp från Linux till Windows eller tvärtom. Denna ändring hanteras av den installerade servermiljön i hostinggränssnittet.
:::

## Tillämpa ändringen

När du har bytt servertyp och bekräftat rätt konfigurationsfil måste du tillämpa den nya setupen.

### Starta om servern

Starta servern igen från ZAP-Hostings webbgränssnitt efter att du sparat dina ändringar.

I många fall räcker en vanlig omstart om servermjukvarutypen redan har bytts framgångsrikt.

### Installera om om gränssnittet kräver det

Vissa distributioner kan kräva ominstallation eller ominstallationssteg efter byte av mjukvarutyp. Om ditt gränssnitt visar ett sådant alternativ, följ det noggrant och verifiera efteråt att:

- rätt servertyp är aktiv
- rätt konfigurationsväg används
- dina `PalWorldSettings.ini`-värden fortfarande finns kvar

:::danger Ominstallation kan skriva över filer
Om ominstallation krävs kan anpassade filer eller mods tas bort om de inte säkerhetskopierats först. Kontrollera alltid dina sparfiler, mods och konfigurationsfiler innan du bekräftar ominstallation.
:::

## Verifiera att den nya servertypen är aktiv

Efter att servern startat igen, bekräfta att bytet lyckades.

### Bekräfta via konfigurationsvägen

Öppna `Configs` igen och kontrollera om den aktiva filvägen nu matchar din valda servertyp:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Bekräfta mod-kompatibilitet

Om du bytte till Windows specifikt för UE4SS-modding, verifiera att dina modfiler och relaterade inställningar nu matchar Windows-servermiljön.

### Granska serverbeteendet

Kontrollera att servern startar normalt och att dina förväntade inställningar laddas korrekt.

| Kontrollpunkt | Förväntat resultat |
| --- | --- |
| Servern startar utan problem | Ingen startfel efter typbyte |
| Korrekt konfigurationsväg | Matchar Linux eller Windows servertyp |
| Anpassade inställningar laddas | Servern använder din redigerade `PalWorldSettings.ini` |
| Mod-stöd | Windows-baserade modkrav kan nu användas om tillämpligt |

## Felsökning

### Servertyp-alternativet syns inte

Om du inte hittar en inställning för att byta servertyp kan det betyda att alternativet inte exponeras direkt i din nuvarande produktgränssnitt. Kontakta i så fall ZAP-Hosting support och fråga om din Palworld-tjänst kan växlas mellan Linux och Windows servertyp.

### Mina inställningar tillämpades inte efter bytet

Detta händer oftast när fel konfigurationsväg redigerades. Kontrollera om du uppdaterade:

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

eller

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

beroende på vilken servertyp som är aktiv.

### Mods fungerar fortfarande inte

Att byta till Windows-servertyp ensam kan vara otillräckligt för fullständig modsetup. Vissa mods kräver ytterligare filer, loaders eller manuella installationssteg utöver servertypbytet.

## Conclusion

Grattis, du har framgångsrikt bytt servertyp för din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂