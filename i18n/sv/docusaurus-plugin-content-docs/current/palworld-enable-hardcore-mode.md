---
id: palworld-enable-hardcore-mode
title: "Palworld: Aktivera Hardcore-läge"
description: "Lär dig hur du aktiverar hardcore-läge i Palworld genom att redigera rätt serverkonfiguration, ställa in True eller False värden och säkert använda permadeath-alternativ. -> Läs mer nu"
sidebar_label: Palworld: Aktivera Hardcore-läge
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

*Hardcore-läge* i Palworld aktiverar permanenta dödsregler för spelare och, valfritt, för Pals. I den här guiden lär du dig hur du manuellt aktiverar hardcore-läge på din ZAP-Hosting Palworld-server genom att redigera rätt konfigurationsfil och sedan starta om servern.



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver i ZAP-Hostings webbgränssnitt. Du behöver också behörighet att redigera serverkonfigurationsfiler via **Configs**-sektionen i din spelserveradministration.

:::danger Varning för permanent dataförlust
När hardcore-inställningar aktiveras kan karaktärer förloras permanent vid död. Om du även aktiverar Pal-förlust kan dina Pals också förloras permanent.
:::

:::tip Skapa en backup först
Innan du ändrar spelinställningar som hardcore-läge rekommenderas det att du skapar en backup av din server eller sparade data om en backup-funktion finns tillgänglig för din tjänst.
:::

## Öppna Palworld-konfigurationsfilen

För att aktivera hardcore-läge måste du redigera filen `PalWorldSettings.ini`.

I ZAP-Hostings spelserveradministration:

1. Öppna din Palworld-server.
2. Gå till **Configs**.
3. Öppna filen `PalWorldSettings.ini`.

:::info Rätt konfigurationsfil
Hardcore-inställningarna sparas i `PalWorldSettings.ini`. Om du redigerar en annan fil kommer ändringarna inte att gälla för din Palworld-server.
:::

## Redigera Hardcore-inställningarna

Palworld lagrar många spelinställningar i konfigurationsposten `OptionSettings` i `PalWorldSettings.ini`. Du behöver manuellt ställa in relevanta hardcore-värden där.

### Nödvändiga konfigurationsnycklar

Följande konfigurationsnycklar styr hardcore-beteendet:

| Konfignyckel | Värde | Effekt |
| --- | --- | --- |
| `bHardcore` | `True` eller `False` | Aktiverar eller inaktiverar permanent spelar-död |
| `bPalLost` | `True` eller `False` | Aktiverar eller inaktiverar permanent Pal-förlust vid död |
| `bCharacterRecreateInHardcore` | `True` eller `False` | Tillåter att skapa en ny karaktär efter hardcore-död |

### Rekommenderad värdeöversikt

| Scenario | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Endast permanent spelar-död | `True` | `False` | `False` eller `True` |
| Full hardcore med Pal-förlust | `True` | `True` | `False` eller `True` |
| Inaktivera hardcore-läge | `False` | `False` | `False` |

:::note True och False värden
Dessa inställningar använder booleska värden, vilket betyder att du måste ange antingen `True` eller `False` exakt som stöds av konfigurationsformatet.
:::

### Exempel på konfiguration

Om nycklarna redan finns i din `OptionSettings`, ändra deras värden efter behov. Om de saknas, lägg till dem inom samma `OptionSettings`-rad.

Exempel:

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

Om din `OptionSettings`-rad redan innehåller många andra inställningar, ta inte bort dem. Lägg istället till eller justera endast hardcore-relaterade poster inom de befintliga parenteserna.

:::caution Behåll befintliga inställningar
`PalWorldSettings.ini` innehåller ofta många aktiva serverinställningar i en enda `OptionSettings`-post. Att av misstag ta bort andra värden kan återställa orelaterade spelinställningar på din server.
:::

## Spara och tillämpa ändringarna

Efter att du redigerat filen:

1. Spara ändringarna i `PalWorldSettings.ini`.
2. Starta om din Palworld-server från ZAP-Hostings spelserveradministration.

En omstart krävs för att servern ska kunna läsa in den uppdaterade hardcore-konfigurationen.

## Verifiera att Hardcore-läget är aktivt

Efter omstart, anslut till din server och bekräfta att hardcore-reglerna är aktiva.

### Vad du ska kontrollera

| Inställning | Förväntat beteende |
| --- | --- |
| `bHardcore=True` | Spelare kan inte fortsätta normalt efter död |
| `bPalLost=True` | Pals förloras permanent vid död |
| `bCharacterRecreateInHardcore=True` | En ny karaktär kan skapas efter hardcore-död |

:::info Viktig beteendenotering
Det exakta resultatet i spelet beror på vilka av de tre hardcore-inställningarna du aktiverade. Om du vill ha permanent spelar-död men ändå vill att användare ska kunna börja om med en ny karaktär, aktivera `bCharacterRecreateInHardcore=True`.
:::

## Felsökning

Om hardcore-läget inte fungerar som förväntat, kontrollera följande punkter.

### Bekräfta att filen redigerades korrekt

Se till att du redigerade `PalWorldSettings.ini` i **Configs**-området för din ZAP-Hosting Palworld-server och inte någon annan fil.

### Kontrollera syntaxen

Hardcore-nycklarna måste placeras inom `OptionSettings=(...)`-posten. Felaktig interpunktion, saknade kommatecken eller att placera värdena utanför rätt sektion kan hindra servern från att läsa dem.

Exempel på giltig syntax:

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Starta om servern igen

Om servern inte startades om efter att filen sparades, kommer inte de nya inställningarna att laddas. Gör en fullständig omstart och testa igen.

## Conclusion

Grattis, du har framgångsrikt aktiverat hardcore-läge på din Palworld-server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂