---
id: palworld-upload-existing-save
title: "Palworld: Bestaande Save Uploaden"
description: "Leer hoe je een bestaande Palworld save uploadt, een serverwereld migreert en het vereiste configuratiebestand correct bijwerkt op je ZAP-Hosting game server. -> Leer nu meer"
sidebar_label: Palworld: Bestaande Save Uploaden
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld slaat dedicated server werelddata op in een specifieke save-map en koppelt die map via de serverconfiguratie. In deze gids leer je hoe je een bestaande save uploadt naar je ZAP-Hosting Palworld server en de benodigde instelling aanpast zodat de server de juiste wereld laadt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Zorg ervoor dat je de bestaande Palworld save-map beschikbaar hebt op je lokale apparaat voordat je begint.

:::danger Niet-ondersteunde Save Bronnen
Xbox-console en PS5 cloud saves kunnen niet direct worden overgezet naar een Palworld dedicated server. Je kunt alleen saves migreren van een PC-installatie of van een andere bestaande dedicated server.
:::

:::info Vereiste Toegang
Je hebt toegang nodig tot de webinterface van je ZAP-Hosting game server, inclusief de bestandsbeheerder en de sectie `Configs`.
:::

Als je hulp nodig hebt bij het openen van je serverbestanden, gebruik dan de relevante bestandsbeheer gids in de ZAP-Hosting documentatie als die beschikbaar is voor jouw product.

## Begrijp de Vereiste Save-Structuur

Voordat je iets uploadt, moet je bevestigen dat je save de juiste structuur heeft.

Op een Palworld dedicated server wordt de actieve wereldsave opgeslagen in:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

De mapnaam `[your_save_folder_id]` is meestal een lange reeks letters en cijfers, bijvoorbeeld:

```text
84B5E2264EC387DEDB43179D666031A1
```

Een geldige save-map bevat normaal gesproken bestanden en mappen zoals de volgende:

| Item | Doel |
| --- | --- |
| `Level.sav` | Hoofd wereld save data |
| `LevelMeta.sav` | Wereld metadata |
| `Players/` | Player save data |
| `WorldOption.sav` | Verouderd wereldoptiebestand dat mogelijk verwijderd moet worden |

:::caution Verwijder Verouderde WorldOption.sav
Als je geüploade save-map `WorldOption.sav` bevat, verwijder dit bestand dan voordat je de server start. Dit bestand veroorzaakt bekende problemen op huidige dedicated server setups en mag niet gebruikt worden voor gemigreerde saves tenzij specifiek vereist door een nieuwere officiële Palworld update.
:::

## Vind het Configuratiebestand in de ZAP Interface

Nadat de save-map is geüpload, moet je de server naar die map laten verwijzen door de Palworld-configuratie aan te passen.

Open in de ZAP-Hosting game server administratie de sectie `Configs` en zoek naar:

```text
GameUserSettings.ini
```

Afhankelijk van de serveromgeving wordt dit bestand meestal opgeslagen in een van de volgende paden:

| Mogelijk pad | Opmerkingen |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Veelvoorkomend pad op Linux-gebaseerde Palworld servers |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Oudere of alternatieve locatie op Windows-gebaseerde setups |

:::note LinuxServer vs WindowsServer Pad
Palworld dedicated servers worden meestal ingezet met het `LinuxServer` config pad. Als je `WindowsServer` niet ziet, controleer dan `LinuxServer`. In de ZAP interface is de makkelijkste methode om `Configs` te openen en direct `GameUserSettings.ini` te selecteren.
:::

## Upload de Bestaande Save

Het uploadproces hangt af van waar je save vandaan komt, maar de doelmap op de ZAP server is altijd hetzelfde.

### Stop de Server Eerst

Stop je Palworld server in de ZAP-Hosting webinterface voordat je de standaardwereld vervangt.

:::caution Voorkom Save-corruptie
Upload of vervang geen wereldbestanden terwijl de server draait. Het stoppen van de server voorkomt incomplete schrijfacties en corrupte save data.
:::

### Verwijder de Standaard Save-map

Open de bestandsbeheerder en navigeer naar:

```text
Pal/Saved/SaveGames/0/
```

In deze map vind je meestal een standaard gegenereerde save-map. Verwijder deze standaardmap voordat je je eigen save uploadt.

### Upload Je Bestaande Save-map

Upload je bestaande save-map naar:

```text
Pal/Saved/SaveGames/0/
```

Na het uploaden zou de structuur er zo uit moeten zien:

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [your_save_folder_id]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

Als `WorldOption.sav` aanwezig is, verwijder dit bestand dan na het uploaden.

:::tip Kopieer de Mapnaam Exact
Je hebt de exacte naam van de geüploade map nodig voor de volgende stap. Kopieer `[your_save_folder_id]` precies zoals die in de bestandsbeheerder staat, inclusief alle letters en cijfers.
:::

## Bewerk GameUserSettings.ini

Nadat het uploaden van de save voltooid is, moet je de serverconfiguratie bijwerken zodat Palworld de juiste wereld laadt.

Open `GameUserSettings.ini` in de sectie `Configs` en zoek de invoer `DedicatedServerName`.

Stel deze in op de exacte naam van de geüploade save-map:

```ini
DedicatedServerName=[your_save_folder_id]
```

Voorbeeld:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Vereiste Configuratie-invoer

Gebruik de volgende referentie bij het bewerken van het bestand:

| Configbestand | Sleutel | Vereiste waarde |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Exacte naam van de geüploade save-map |

### Wat Deze Instelling Doet

`DedicatedServerName` vertelt de Palworld dedicated server welke map binnen `Pal/Saved/SaveGames/0/` geladen moet worden als actieve wereld.

Als deze waarde niet exact overeenkomt met de naam van de geüploade map, kan de server een nieuwe wereld aanmaken of verkeerd laden.

:::danger Exacte Overeenkomst Vereist
Als je ontbrekende voortgang op de map ziet, een lege wereld of een nieuw gegenereerde save na het opstarten, is de meest voorkomende oorzaak dat `DedicatedServerName` niet exact overeenkomt met de naam van de geüploade map.
:::

## Bron-specifieke Save Locaties

Als je niet zeker weet waar je originele save vandaan komt, gebruik dan het juiste bronpad hieronder.

### Van Een Andere Dedicated Server Provider

Maak bij je vorige provider een back-up van de save-map uit:

```text
Pal/Saved/SaveGames/0/
```

Kopieer de volledige wereldmap met de originele naam en upload die map vervolgens naar je ZAP-Hosting server zoals hierboven beschreven.

### Van Een Steam Co-op Save

Voor lokale Steam saves op Windows, open het volgende pad:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_save_folder_id]
```

De map `[your_steamid64]` is je Steam 64-bit ID, en `[your_save_folder_id]` is de wereldmap die je wilt migreren.

:::caution Beperking Host Character
Bij het migreren van een lokale Steam co-op wereld naar een dedicated server wordt het originele hostpersonage niet automatisch overgezet zoals de verbonden spelerdata. Mogelijk zijn extra tools van derden nodig voor saveconversie of karakteroverdracht als je het hostpersonage wilt behouden.
:::

### Van PC Game Pass

Voor PC Game Pass installaties wordt de lokale save data meestal opgeslagen onder:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Game Pass saves worden niet opgeslagen in hetzelfde formaat als Steam of dedicated server saves. In de praktijk heb je meestal een tool van derden nodig om de save te converteren naar een Steam-compatibel of dedicated-server-compatibel formaat voordat je deze uploadt.

:::info Game Pass Conversie Vereist
Een directe upload van ruwe PC Game Pass save data is meestal niet voldoende. Je moet de save eerst converteren en daarna de geconverteerde wereldmap uploaden naar `Pal/Saved/SaveGames/0/` en `DedicatedServerName` correct instellen.
:::

## Start de Server

Zodra de save-map is geüpload en `GameUserSettings.ini` is bijgewerkt, start je de server opnieuw via de ZAP-Hosting webinterface.

Normaal zijn er geen extra console-commando’s nodig voor dit migratieproces.

Controleer na het opstarten of:

- de juiste wereld wordt geladen
- gebouwen en mapvoortgang aanwezig zijn
- spelerdata beschikbaar is zoals verwacht

## Problemen Oplossen

Als de geüploade save niet correct laadt, controleer dan de volgende punten.

### De Server Heeft Een Nieuwe Wereld Aangemaakt

Controleer of de volgende waarde in `GameUserSettings.ini` exact overeenkomt met de naam van de geüploade map:

```ini
DedicatedServerName=[your_save_folder_id]
```

Controleer ook of de geüploade save zich direct bevindt in:

```text
Pal/Saved/SaveGames/0/[your_save_folder_id]/
```

### De Map- of Wereldvoortgang Ontbreekt

Dit betekent meestal een van de volgende dingen:

| Mogelijke oorzaak | Oplossing |
| --- | --- |
| Verkeerde `DedicatedServerName` waarde | Voer de exacte naam van de geüploade map opnieuw in |
| Save-map geüpload naar verkeerde map | Verplaats deze naar `Pal/Saved/SaveGames/0/` |
| Onvolledige upload | Upload de volledige map opnieuw en controleer of alle bestanden aanwezig zijn |

### WorldOption.sav Veroorzaakt Problemen

Als je save `WorldOption.sav` bevat, verwijder dit bestand en start de server opnieuw.

Dit bestand is gekoppeld aan oudere save-handling en kan conflicteren met gemigreerde dedicated server werelden.

## Conclusie

Gefeliciteerd, je hebt succesvol een bestaande Palworld save geüpload naar je ZAP-Hosting server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂