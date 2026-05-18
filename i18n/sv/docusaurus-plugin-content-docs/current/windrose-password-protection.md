---
id: windrose-password-protection
title: "Windrose: Lösenordsskydd"
description: "Ställ in ett lösenord på din Windrose-spelserver för att skydda åtkomst och hantera inställningar för lösenordsbyte säkert i serverkonfigurationen -> Läs mer nu"
sidebar_label: Lösenordsskydd
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windrose stödjer lösenordsskydd, vilket låter dig begränsa åtkomsten till din dedikerade server med ett anslutningslösenord. I den här guiden lär du dig hur du aktiverar, ändrar eller tar bort lösenordet på din Windrose-server via ZAP-Hostings spelserverhantering.

## Preparation

Innan du börjar, se till att du har tillgång till din Windrose-server i ZAP-Hostings webbgränssnitt och behörighet att redigera serverfiler.

:::info Krävd åtkomst
Du behöver tillgång till din serverdashboard och filhanteringsområdet för att kunna redigera filen `ServerDescription.json`.
:::

## Förstå Windrose lösenordsskydd

Att ställa in ett lösenord hjälper till att förhindra obehöriga spelare från att ansluta till din Windrose-spelserver. Spelare kan fortfarande nå servern via inbjudningskoden, men måste ange rätt lösenord innan de kan ansluta.

Detta är användbart om du vill:
- begränsa åtkomst till vänner, personal eller en privat grupp
- skydda en testserver från offentlig åtkomst
- kontrollera vem som kan ansluta utan att förlita dig på en separat lösenordshanterare eller kontolösenordssystem

:::note Lösenordsbeteende
Windrose använder lösenordet som är konfigurerat i serverfilen själv. Detta är separat från ditt ZAP-Hosting-kontolösenord och är inte kopplat till verktyg som lösenordshanterare, Google-integration för lösenordshanterare eller någon lösenordslista.
:::

## Aktivera lösenordsskydd

För att använda ett lösenord måste du först stoppa servern, redigera konfigurationsfilen och sedan starta servern igen.

### Stoppa servern

Öppna din serverdashboard i ZAP-Hostings webbgränssnitt och stoppa servern helt innan du gör ändringar.

:::caution Stoppa servern innan redigering
Du bör stoppa servern innan du redigerar `ServerDescription.json` för att undvika konfigurationskonflikter eller att filen skrivs över medan servern körs.
:::

### Öppna konfigurationsfilen

I panelens sidomeny, öppna `Files`.

Leta sedan upp och öppna filen `ServerDescription.json` i rotkatalogen i din serverfilslista.

### Redigera lösenordsinställningarna

I `ServerDescription.json`, sätt `IsPasswordProtected` till `true` och definiera ditt önskade lösenord i fältet `Password`.

```json
"IsPasswordProtected": true,
"Password": "YourPasswordHere"
```

Byt ut `YourPasswordHere` mot ditt egna säkra lösenord.

:::tip Välj ett starkt lösenord
Använd ett unikt lösenord som inte återanvänds från ditt kontolösenord eller någon annan tjänst. Detta hjälper till att skydda din Windrose-server från oönskad åtkomst.
:::

### Spara och starta om servern

Efter att du redigerat filen, klicka på `Save Content`.

När filen har sparats, starta servern igen från dashboarden. Din Windrose-server kommer nu att kräva det konfigurerade lösenordet när spelare försöker ansluta.

## Konfigurationsreferens

Följande tabell förklarar de relevanta inställningarna i `ServerDescription.json`:

| Nyckel | Typ | Exempel | Beskrivning |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Boolean | `true` | Aktiverar eller inaktiverar lösenordsskydd |
| `Password` | String | `"YourPasswordHere"` | Definierar anslutningslösenordet som används när lösenordsskydd är aktiverat |

## Ändra befintligt lösenord

Om du vill byta lösenord senare är processen densamma som vid första inställningen.

### Uppdatera lösenordsvärdet

Stoppa servern, öppna `ServerDescription.json` och ändra värdet i fältet `Password` till ditt nya lösenord.

Exempel:

```json
"IsPasswordProtected": true,
"Password": "[your_new_password]"
```

Platshållaren `[your_new_password]` representerar det nya lösenordet du vill att spelare ska använda när de ansluter till servern.

### Spara och starta om igen

Spara filen och starta om servern så att lösenordsändringen träder i kraft.

:::note Lösenordskontroll
Om spelare inte kan ansluta efter lösenordsändringen, be dem kontrollera lösenordsinmatningen noggrant, inklusive stora och små bokstäver om det är tillämpligt.
:::

## Ta bort lösenordsskydd

Om du inte längre vill skydda din Windrose-server med ett lösenord kan du inaktivera funktionen i samma konfigurationsfil.

### Inaktivera inställningen

Stoppa servern och öppna `ServerDescription.json` igen.

Sätt `IsPasswordProtected` till `false`. Värdet i `Password` ignoreras när detta alternativ är inaktiverat.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Spara och starta om servern

Klicka på `Save Content` och starta servern igen. Spelare kan då ansluta utan att behöva ange lösenord.

## Felsökning

Om lösenordsskyddet inte fungerar som förväntat, gå igenom följande punkter.

| Problem | Möjlig orsak | Lösning |
| --- | --- | --- |
| Servern frågar inte efter lösenord | `IsPasswordProtected` är fortfarande satt till `false` | Sätt den till `true`, spara filen och starta om servern |
| Spelare kan inte ansluta med rätt lösenord | Lösenordet angavs felaktigt | Kontrollera det konfigurerade värdet och be spelare kontrollera lösenordsinmatningen noggrant |
| Ändringar tillämpas inte | Servern startades inte om efter redigering | Starta om servern efter att ha sparat `ServerDescription.json` |
| Filändringar försvinner | Filen redigerades medan servern kördes | Stoppa servern först, gör om ändringarna, spara och starta om |

:::danger Dela inte känsliga lösenord offentligt
Dela inte ditt serverlösenord offentligt i communityinlägg, skärmdumpar eller filexporter. Undvik också att använda lösenord från gamla lösenordslistor eller återanvända inloggningsuppgifter från andra tjänster.
:::

## Conclusion

Grattis, du har nu framgångsrikt ställt in lösenordsskydd på din Windrose-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig dagligen för att hjälpa dig! 🙂