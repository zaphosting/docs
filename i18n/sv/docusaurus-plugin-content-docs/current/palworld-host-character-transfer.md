---
id: palworld-host-character-transfer
title: "Palworld: Hostkaraktäröverföring"
description: "Lär dig hur du överför din Palworld hostkaraktär från en solo- eller co-op-save till en dedikerad server med Palworld Save Tools och rätt save-filer. -> Lär dig mer nu"
sidebar_label: Palworld: Hostkaraktäröverföring
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld hostkaraktäröverföring låter dig migrera hostkaraktären från en solo- eller co-op-save till en dedikerad server-save. I den här guiden förbereder du de nödvändiga save-filerna, använder det stödjade migrationsverktyget och laddar upp den uppdaterade karaktärsdatan tillbaka till din server.

:::danger Experimentell Karaktärsöverföring Varning
Denna procedur betraktas som experimentell och modifierar save-data manuellt. Palworld-uppdateringar kan ändra save-strukturer, vilket kan göra att verktyg eller migrationssteg slutar fungera korrekt.
:::

## Preparation

Innan du börjar, se till att du har tillgång till din Palworld-spelserver och en lokal Windows-dator där du kan köra det nödvändiga save-migrationsverktyget.

### Krav

Du behöver följande:

| Krav | Syfte |
| --- | --- |
| Tillgång till din ZAP-Hosting Palworld-server | För att ladda ner och ladda upp de nödvändiga save-filerna |
| En lokal backup-plats | För att behålla en säker kopia av din ursprungliga save-data |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | För att utföra hostkaraktärsmigrationen |
| En nyss skapad serverkaraktär | Hostkaraktärsdatan migreras till denna dedikerade serverkaraktär |

:::caution Skapa Backup Först
Innan du ändrar några save-filer, ladda ner och spara en komplett backup av din nuvarande serversave. Om överföringen misslyckas eller ger korrupt karaktärsdata behöver du originalfilerna för att återställa servern.
:::

### Viktiga Noteringar om Konfigurationsfiler

Denna överföring görs **inte** genom att redigera en Palworld-konfigurationsfil under `Configs`. Enligt den nuvarande dokumentationen och community-riktlinjer utförs hostkaraktärsöverföringen genom att ersätta save-datafiler istället.

De relevanta filerna finns i din servers savedirectory, inte i den vanliga gameplay-konfigurationsfilen som `PalWorldSettings.ini`.

## Förstå Vilka Filer som Används

Innan du startar överföringen bör du identifiera vilka filer som är inblandade.

### Save-filer som Krävs för Överföringen

Hostkaraktärsmigrationen använder följande save-data:

| Fil eller Mapp | Plats | Syfte |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Level.sav` | Innehåller världsnivåns save-data som migrationsverktyget använder |
| `Players/` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Players/` | Innehåller spelarens save-filer, inklusive den nya dedikerade serverkaraktären |
| `00000001.sav` | Inuti `Players/` från den uppladdade solo- eller co-op-saven | Representerar vanligtvis den ursprungliga hostkaraktären i co-op-saves |

`[your_savefolder_id]` är det långa mappnamnet som används av din Palworld-världs save. Detta värde är unikt för varje save.

### Var du Hittar Filerna i ZAP-gränssnittet

Du kan komma åt de nödvändiga save-filerna via din spelserveradministrations filhanterare.

Navigera till:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Inuti denna mapp bör du hitta minst:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Förbered den Dedikerade Serverkaraktären

Innan du kan migrera hostkaraktären måste den dedikerade servern redan innehålla en nygenererad spelar-save för ditt konto.

### Skapa en Ny Karaktär på Servern

Anslut till din Palworld dedikerade server som vanligt och skapa en ny karaktär. Spela sedan tills karaktären når minst nivå `2`.

Detta steg är nödvändigt eftersom överföringsverktyget behöver en befintlig dedikerad serverkaraktärsfil som migrationsmål.

### Tvinga eller Vänta på en Save

Efter att ha skapat den nya karaktären måste du säkerställa att servern har skrivit den nya spelar-datan till disk.

Du kan antingen:

- vänta på det automatiska save-intervallet, som vanligtvis är runt `4` minuter, eller
- köra kommandot `save` i serverkonsolen

| Kommando | Var du kör det | Syfte |
| --- | --- | --- |
| `save` | Serverkonsol | Tvingar servern att skriva aktuell värld och spelar-data till disk |

:::info Save-kommandots Krav
Om du använder kommandot `save`, kör det innan du stoppar servern. Detta hjälper till att säkerställa att den nya dedikerade serverkaraktärsfilen finns i `Players/`-mappen.
:::

### Stoppa Servern

När saven är klar, stoppa Palworld-servern via din serveradministration.

Fortsätt inte medan servern körs, eftersom aktiva save-skrivningar kan skriva över eller krocka med de filer du ska ersätta.

## Ladda Ner Den Nödvändiga Save-Datan

Nu när den nya karaktären finns på den dedikerade servern kan du ladda ner filerna som behövs för migreringen.

### Öppna Save-mappen

I din ZAP-Hostings filhanterare, gå till:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Ladda Ner Filerna

Ladda ner följande till din lokala dator:

| Objekt | Krävs |
| --- | --- |
| `Level.sav` | Ja |
| Mappen `Players/` | Ja |

Spara båda objekten i samma lokala arbetsmapp så att migrationsverktyget kan bearbeta dem korrekt.

:::tip Håll Filerna Tillsammans
Placera `Level.sav` och mappen `Players/` bredvid varandra i samma lokala mapp. Detta matchar arbetsflödet som Palworld Save Tools förväntar sig.
:::

## Migrera Hostkaraktären

När du har laddat ner save-datan kan du utföra själva hostkaraktärsöverföringen.

### Starta Palworld Save Tools

Ladda ner och packa upp [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools), öppna sedan `PalworldSaveTools.exe`.

I programmet väljer du:

```text
Fix Host Save
```

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Välj Rätt Filer

I migrationsverktyget:

1. Välj din nedladdade `Level.sav`
2. I vänstra urvalsfältet, välj `00000001.sav`
3. I högra urvalsfältet, välj den nya karaktär du skapade på den dedikerade servern
4. Starta migreringen genom att klicka på `Migrate`

| Verktygsfält | Värde att välja |
| --- | --- |
| `Path to Level.sav` | Din nedladdade `Level.sav` |
| Vänster karaktärsfält | `00000001.sav` |
| Höger karaktärsfält | Din nyss skapade dedikerade serverkaraktär |
| Åtgärd | `Migrate` |

### Vad Migreringen Gör

Migreringsprocessen tilldelar om den ursprungliga hostkaraktärsdatan från solo- eller co-op-saven till den dedikerade serverkaraktärsposten du skapade tidigare.

Det är därför du först måste ansluta till servern och generera en färsk spelar-save innan du använder verktyget.

:::caution Kontrollera Målkaraktären
Se till att du väljer rätt ny serverkaraktär på högra sidan. Att välja fel mål kan skriva över en annan spelares save-data.
:::

## Ladda Upp de Uppdaterade Save-Filerna

När migreringen är klar måste du ladda upp de modifierade filerna tillbaka till din server.

### Ersätt Befintlig Save-Data

Gå tillbaka till samma serverkatalog i din ZAP-Hostings filhanterare:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Ladda upp och ersätt:

- den uppdaterade `Level.sav`
- den uppdaterade mappen `Players/`

Om din filhanterare frågar om du vill skriva över befintliga filer, bekräfta ersättningen.

### Ändringar i Konfigurationsfiler

För denna specifika hostkaraktärsöverföring finns det för närvarande inget verifierat krav på att redigera en Palworld-konfigurationsfil som `PalWorldSettings.ini`.

| Objekt | Krävs för host-överföring |
| --- | --- |
| Redigera `PalWorldSettings.ini` | Nej |
| Redigera filer under `Configs` | Inget verifierat krav |
| Ersätt `Level.sav` | Ja |
| Ersätt `Players/` | Ja |

:::note Inga Ytterligare Konfigurationsändringar Krävs
Enligt den nuvarande dokumentationen och migrationsinstruktionerna krävs inga extra konfigurationsposter eller manuella `.ini`-ändringar för själva överföringen.
:::

## Starta Servern och Testa Karaktären

När de uppdaterade filerna har laddats upp, starta din Palworld-server igen.

### Anslut till Servern Igen

Anslut till servern med samma konto som skapade den nya dedikerade serverkaraktären. Om migreringen lyckades bör du nu ladda in den överförda hostkaraktären istället för den temporära nya.

### Kontrollera Viktig Karaktärsdata

Efter inloggning, kontrollera att följande data visas korrekt:

- karaktärsnivå
- inventarium
- pals
- basägande
- progressionsdata

Om något saknas eller är fel, stoppa servern omedelbart och återställ din backup innan du försöker igen.

:::danger Återställ Backup om Data är Felaktig
Om din karaktär, inventarium eller världsägar-data verkar trasig efter migreringen, fortsätt inte spela. Återställ den ursprungliga `Level.sav` och `Players/` backupen först för att undvika att spara oönskade ändringar.
:::

## Referenssammanfattning

### Krävd Sökväg, Filer och Åtgärder

| Typ | Värde |
| --- | --- |
| Save-sökväg | `Pal/Saved/SaveGames/0/[your_savefolder_id]/` |
| Krävd fil | `Level.sav` |
| Krävd mapp | `Players/` |
| Vanligt vald host-save-fil | `00000001.sav` |
| Serverkommando | `save` |
| Serveromstart krävs | Ja |
| Konfigurationsfilredigering krävs | Inget verifierat krav |

## Conclusion

Grattis, du har framgångsrikt överfört din Palworld hostkaraktär till en dedikerad server. För ytterligare frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂