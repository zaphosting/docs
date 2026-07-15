---
id: palworld-reset-world
title: "Palworld: Återställ Värld"
description: "Lär dig hur du återställer din Palworld-spelservervärld genom att ta bort den nuvarande sparade datan och starta en ny Palworld-världskarta på samma server. -> Läs mer nu"
sidebar_label: Palworld: Återställ Värld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld sparar din aktiva värld i serverns sparade data istället för i en konfigurerbar världinställning. I den här guiden lär du dig hur du återställer din Palworld-spelservervärld på ZAP-Hosting genom att ta bort den befintliga sparmappen så att servern genererar en ny värld vid nästa start.

:::danger Permanent Data Radering
Att återställa din Palworld-värld raderar permanent den nuvarande världen, inklusive spelarprogression, byggnader, Pals och annan sparad data som finns i den världen.
:::



## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserveradministration och att servern är offline innan du tar bort några sparfiler.

:::tip Skapa en Backup Först
Om du kan behöva den nuvarande världen igen senare, skapa en backup innan du fortsätter. Om det finns tillgängligt för din produkt kan du använda serverns backupfunktioner eller manuellt ladda ner sparmappen innan du tar bort den.
:::

## Förstå Hur Palworld Världsåterställning Fungerar

En återställning av Palworld-världen kräver normalt inte att du ändrar något spelvärde i en konfigurationsfil. Istället lagras den aktiva världen i serverns sparmapp.

Baserat på den nuvarande offentligt tillgängliga strukturen för Palworld dedikerade servrar, finns världssparningen vanligtvis i följande sökväg:

```text
Pal/Saved/SaveGames/0/
```

Inuti denna katalog hittar du vanligtvis en mapp med ett långt slumpmässigt hexadecimalt namn, till exempel:

```text
84B5E2264EC387DEDB43179D666031A1
```

Den mappen innehåller den aktuella världssparningen. När du tar bort den och startar servern igen skapar Palworld automatiskt en ny värld.

:::note Ingen Konfigurationsvärde Krävs
För en standard återställning av världen krävs normalt ingen extra konfigurationspost, konsolkommando eller startparameter. Återställningen görs genom att ta bort den befintliga sparade datan.
:::

## Stoppa Servern

Innan du tar bort världsfilerna, stoppa din Palworld-server från ZAP-Hostings spelserveradministration.

Att ta bort sparad data medan servern körs kan orsaka filkorruption eller ofullständig borttagning av världsdatan.

:::caution Servern Måste Vara Offline
Se till att servern är helt stoppad innan du fortsätter. Om servern fortfarande körs kan den återskapa eller låsa filer medan du redigerar dem.
:::

## Öppna Sparmappen

I din ZAP-Hosting Palworld-serveradministration, öppna filhanteringsområdet och navigera till följande sökväg:

```text
Pal/Saved/SaveGames/0/
```

Beroende på din produktlayout kan du nå detta via filhanteraren eller en liknande filåtkomstsektion i webbgränssnittet.



### Sökvägsreferens

| Objekt | Värde |
| --- | --- |
| Bas-sparväg | `Pal/Saved/SaveGames/0/` |
| Världsmappens namn | Slumpmässig hexadecimalt mappnamn |
| Exempel på mapp | `84B5E2264EC387DEDB43179D666031A1` |
| Åtgärd som krävs | Ta bort världsmappen |

## Ta Bort Den Nuvarande Världssparningen

Inuti `Pal/Saved/SaveGames/0/`, hitta mappen med det slumpmässiga hexadecimala namnet. Ta bort den mappen helt.

### Vad Du Behöver Ta Bort

| Mapp-typ | Krävd åtgärd |
| --- | --- |
| Nuvarande världssparningsmapp i `Pal/Saved/SaveGames/0/` | Ta bort den |
| `PalworldSettings.ini` eller andra konfigurationsfiler | Redigera inte för denna återställning om du inte också vill ändra serverinställningar |

Om det bara finns en hexadecimalt mapp i `Pal/Saved/SaveGames/0/` är det vanligtvis den aktiva världssparningen. Om det finns flera mappar och du är osäker på vilken som används, gissa inte. Kontrollera i så fall dina nuvarande serverfiler noggrant eller kontakta support innan du tar bort något.

:::info Förtydligande om Konfigurationssektionen
Även om många Palworld-inställningar kan hanteras via **Configs**-området, görs en världsåterställning normalt inte genom att redigera en konfigurationsfil. Den nödvändiga åtgärden är att ta bort världssparningsmappen från serverfilerna.
:::

## Starta Servern Igen

Efter att sparmappen har tagits bort, starta din Palworld-server igen.

Vid uppstart bör servern automatiskt generera en ny värld eftersom ingen tidigare världssparning finns i den förväntade sparplatsen.

### Ytterligare Kommandon eller Ändringar

| Uppgift | Krävs |
| --- | --- |
| Redigera en konfigurationsfil | Nej |
| Köra ett kommando i spelet | Nej |
| Köra ett konsolkommando | Nej |
| Starta om eller starta servern efter borttagning | Ja |

:::tip Första Uppstarten Kan Ta Längre Tid
Den första uppstarten efter att världssparningen tagits bort kan ta lite längre tid än vanligt eftersom Palworld behöver generera en ny värld.
:::

## Verifiera Återställningen

När servern är online igen, anslut till den och bekräfta att en ny värld har skapats.

Du kan vanligtvis verifiera detta genom att kontrollera följande:

- en ny spawn-position
- inga tidigare spelarbyggda strukturer
- ingen tidigare progression
- en nygenererad sparmapp i `Pal/Saved/SaveGames/0/`

Om den gamla världen fortfarande visas, stoppa servern igen och kontrollera att rätt hexadecimala sparmapp togs bort.

## Conclusion

Grattis, du har framgångsrikt återställt din Palworld-värld och startat en ny sparning på din befintliga server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig!