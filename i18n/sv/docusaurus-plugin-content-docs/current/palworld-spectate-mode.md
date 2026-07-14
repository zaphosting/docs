---
id: palworld-spectate-mode
title: "Palworld: Spectate Mode"
description: "Learn how to use spectate mode in Palworld, set the required admin password, and enter spectate mode on your server. -> Learn more now"
sidebar_label: Palworld: Spectate Mode
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Spectate mode i Palworld låter dig observera spelare på din server utan att aktivt delta. I den här guiden lär du dig hur du förbereder adminåtkomst, var du kan kontrollera den nödvändiga konfigurationen i ZAP-Hostings gränssnitt och hur du går in och ut ur spectate mode i spelet.

## Preparation

Innan du kan använda spectate mode behöver du administratörsbehörighet på din Palworld-server. Detta kräver att ett giltigt `AdminPassword` är inställt i din serverkonfiguration.

Om du inte har konfigurerat detta ännu, se till att först gå igenom dina Palworld-serverinställningar och adminuppsättning.

:::info Adminåtkomst krävs
Spectate mode är endast tillgängligt för administratörer. Om du inte loggar in som admin först kommer spectate-kommandot inte att fungera.
:::

## Kontrollera nödvändig serverkonfiguration

Även om spectate mode i sig inte kräver någon särskild inställning för att aktiveras, måste din server ha ett adminlösenord konfigurerat så att du kan autentisera dig som administratör.

### Öppna konfigurationsfilen i ZAP-gränssnittet

I ditt ZAP-Hosting spelserverwebbgränssnitt, öppna sektionen **Configs**. Den relevanta Palworld-konfigurationen finns i filen:

`PalWorldSettings.ini`

Beroende på servermall och spelversion innehåller denna fil huvudserveralternativen inklusive adminlösenordsinställningen.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Verifiera adminlösenordet

Inuti `PalWorldSettings.ini`, leta upp sektionen `OptionSettings` och kontrollera att värdet för `AdminPassword` är inställt.

Ett typiskt exempel ser ut så här:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[your_admin_password]")
```

Om din fil redan innehåller många alternativ i en enda `OptionSettings=(...)`-rad behöver du bara säkerställa att `AdminPassword`-posten finns och innehåller ditt valda lösenord.

:::caution Behåll befintlig syntax
Ta inte bort andra befintliga värden från `OptionSettings`-raden. Palworld lagrar ofta flera inställningar i samma post, så du bör endast lägga till eller redigera `AdminPassword`-värdet med försiktighet.
:::

### Konfigurationsreferens

| Fil | Plats i ZAP-gränssnittet | Nödvändig nyckel | Syfte |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Gör att du kan autentisera dig som admin och använda spectate mode |

## Spara ändringar och starta om servern

Om du ändrade `AdminPassword` i `PalWorldSettings.ini`, spara filen och starta om din Palworld-server från ZAP-Hostings webbgränssnitt.

En omstart krävs för att den uppdaterade konfigurationen ska laddas av servern.

:::note Omstart krävs
Om du inte gjorde några ändringar i konfigurationsfilen och adminlösenordet redan var korrekt inställt behövs ingen extra omstart för att spectate mode ska fungera.
:::

## Logga in som administratör

När servern är online, anslut till din Palworld-server i spelet som vanligt. För att använda spectate mode måste du autentisera dig med det adminlösenord som konfigurerades tidigare.

Det exakta admininloggningskommandot kan variera beroende på aktuell Palworld-implementation och gränssnittsbeteende. Om din server kräver manuell adminautentisering efter anslutning, använd det konfigurerade adminlösenordet i det inbyggda adminkommandot eller admininloggningsprompten som stöds av din nuvarande serverversion.

:::info Om adminautentisering
Nuvarande tredjepartsreferenser bekräftar konsekvent att spectate mode kräver adminrättigheter och att `AdminPassword` måste vara konfigurerat. Om din serverversion använder ett specifikt admininloggningskommando bör du följa det kommandoformat som stöds av din installerade Palworld-version.
:::

## Gå in i spectate mode

När du är inloggad som administratör kan du aktivera spectate mode på något av följande sätt.

### Använd tangentbordsgenvägen

Tryck på tangenten `\` för att gå in i spectate mode.

### Använd kommandot

Alternativt kan du använda följande kommando i spelet:

```text
/togglespectate
```

Detta kommando växlar spectate mode på eller av för din nuvarande karaktärssession, förutsatt att du är autentiserad som admin.

### Kommandoreferens för spectate mode

| Åtgärd | Metod | Krav |
| --- | --- | --- |
| Gå in i spectate mode | Tryck `\` | Adminrättigheter |
| Växla spectate mode | `/togglespectate` | Adminrättigheter |
| Gå ut ur spectate mode | Tryck `Esc` | Aktivt spectate mode |

:::tip När du ska använda spectate mode
Spectate mode är användbart om du vill övervaka spelare, undersöka rapporter eller observera aktivitet på din server utan att störa spelet.
:::

## Gå ut ur spectate mode

För att lämna spectate mode och återgå till normalt spel, tryck på `Esc`.

Vid behov kan du också använda `/togglespectate` igen för att stänga av läget, beroende på hur din server beter sig.

## Felsökning

Om spectate mode inte fungerar, kontrollera följande punkter.

### Bekräfta att adminlösenordet är inställt

Öppna `PalWorldSettings.ini` igen via **Configs** och kontrollera att `AdminPassword` finns och inte är tomt.

### Starta om efter konfigurationsändring

Om du nyligen redigerat konfigurationsfilen, starta om servern innan du testar igen.

### Säkerställ att du är autentiserad som admin

Att ha ett `AdminPassword` konfigurerat räcker inte alltid i sig. Du måste också bli igenkänd av servern som en aktiv administratör under din session.

### Kontrollera din tangentbordsinmatning

På vissa tangentbordslayouter kan tangenten `\` sitta på en annan plats. Om genvägen inte fungerar, använd istället `/togglespectate`.

:::caution Versionsskillnader
Palworld är fortfarande under utveckling med förändringar i gameplay och serverfunktioner. Om spectate mode eller adminbeteende skiljer sig på din server, kontrollera att servern är uppdaterad och om den aktuella spelversionen har ändrat relaterade kommandon eller behörigheter.
:::

## Conclusion

Grattis, du har nu framgångsrikt använt spectate mode på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂