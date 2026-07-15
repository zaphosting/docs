---
id: palworld-upload-existing-save
title: "Palworld: Upload Bestaande Save"
description: "Leer hoe je een bestaande Palworld save uploadt, de bestandsdata correct uploadt en je server configureert om de juiste wereldmap te laden. -> Leer nu meer"
sidebar_label: Palworld: Upload Bestaande Save
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld slaat dedicated server werelddata op in een specifieke save-map en vereist een bijpassende configuratie-instelling om deze correct te laden. In deze gids leer je hoe je een bestaande save uploadt naar je ZAP-Hosting Palworld server en de server configureert zodat deze met de juiste werelddata start.

:::danger Niet-ondersteunde Save Bronnen
Je kunt Xbox console of PS5 cloud saves niet direct overzetten naar een dedicated Palworld server. Alleen saves van een PC-installatie of een bestaande dedicated server kunnen met deze methode gemigreerd worden.
:::



## Voorbereiding

Zorg voordat je begint dat je het volgende hebt:

| Vereiste | Details |
| --- | --- |
| Bestaande Palworld save | Een save-map van een PC-installatie of een andere dedicated server |
| Toegang tot je ZAP-Hosting game server | Je hebt toegang nodig tot de webinterface, inclusief de bestandsbeheerder en de sectie `Configs` |
| Server gestopt | De Palworld server moet gestopt zijn voordat je save data vervangt |
| Naam van de save-map | Je hebt de exacte mapnaam van je geüploade save nodig, bijvoorbeeld `[your_savefolder_id]` |

:::info Toegang tot Configuratiebestanden
Bij ZAP-Hosting kun je de relevante Palworld configuratiebestanden openen via je game server beheer onder `Configs`. Je hoeft het bestand niet direct via de bestandsbeheerder te bewerken tenzij je het pad handmatig wilt controleren.
:::

## Begrijp de Vereiste Save-Structuur

Voordat je iets uploadt, is het belangrijk te begrijpen welke map Palworld daadwerkelijk laadt.

De server save-locatie is:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

In deze map zie je meestal bestanden en mappen zoals:

```text
Level.sav
LevelMeta.sav
Players/
```

Bij sommige oudere of gemigreerde saves kan je ook zien:

```text
WorldOption.sav
```

:::caution Verwijder Verouderde WorldOption.sav
Als `WorldOption.sav` aanwezig is in de geüploade save-map, verwijder dit bestand dan voordat je de server start. Dit bestand veroorzaakt bekende problemen met nieuwere Palworld server setups en mag niet gebruikt worden voor gemigreerde saves tenzij expliciet vereist door een bevestigde actuele setup.
:::

## Vind het Juiste Configuratiebestand

Om de server jouw geüploade wereld te laten laden, moet je `GameUserSettings.ini` bewerken.

In het ZAP-Hosting game server beheer:

1. Open je Palworld server.
2. Ga naar `Configs`.
3. Open `GameUserSettings.ini`.

Afhankelijk van de serveromgeving is het onderliggende bestandspad meestal een van de volgende:

| Mogelijk pad | Opmerkingen |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Veelvoorkomend bij Linux-gebaseerde Palworld server deployments |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Kan voorkomen bij Windows-gebaseerde deployments |

:::note Verschillen in Pad
Palworld serverinstallaties gebruiken afhankelijk van het platform van de provider `LinuxServer` of `WindowsServer` in het config-pad. Als je het bestand via `Configs` bewerkt, wordt het juiste bestand daar al getoond, dus zorg alleen dat je `GameUserSettings.ini` aanpast.
:::

## Upload een Save van een Andere Dedicated Server

Als je save al van een andere hostingprovider komt, kun je deze direct migreren.

### Maak een Back-up van de Bestaande Save

Zoek bij je vorige provider de bestaande save-map en download deze van:

```text
Pal/Saved/SaveGames/0/
```

Kopieer de volledige map met de willekeurige alfanumerieke naam, bijvoorbeeld:

```text
[your_savefolder_id]
```

### Stop de ZAP-Hosting Server

Stop je Palworld server in de ZAP-Hosting webinterface voordat je de nieuwe save uploadt.

:::caution Voorkom Save-conflicten
Vervang geen savebestanden terwijl de server draait. Dit kan leiden tot incomplete uploads, overschreven data of een corrupte save.
:::

### Vervang de Standaard Save-map

Open de bestandsbeheerder van je game server en navigeer naar:

```text
Pal/Saved/SaveGames/0/
```

Verwijder de standaard save-map die automatisch door de server is aangemaakt en upload vervolgens je bestaande save-map naar dezelfde locatie.

Na het uploaden ziet de structuur er zo uit:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Stel de Juiste Save-map in GameUserSettings.ini in

Open nu `GameUserSettings.ini` via `Configs` en zoek de `DedicatedServerName` instelling.

Zet deze op de exacte naam van je geüploade save-map:

```ini
DedicatedServerName=[your_savefolder_id]
```

| Configuratie-instelling | Vereiste waarde |
| --- | --- |
| `DedicatedServerName` | De exacte mapnaam binnen `Pal/Saved/SaveGames/0/` |

:::tip Exacte Overeenkomst Vereist
`DedicatedServerName` moet exact overeenkomen met de naam van de geüploade map, inclusief hoofdletters en cijfers. Als de waarde niet klopt, kan de server een andere wereld starten of lijken te laden zonder voortgang op de kaart.
:::

### Start de Server

Na het opslaan van de configuratie start je je Palworld server opnieuw.

Normaal is geen extra console-commando nodig na het uploaden. Een volledige serverherstart is voldoende om de nieuwe save te laden.

## Upload een Save van een Steam Co-op Wereld

Als je je wereld eerder lokaal via Steam co-op hostte, kun je die save ook uploaden naar je dedicated server.

### Vind de Lokale Steam Save

Op je Windows-pc druk je op `Windows` + `R` en open je:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

Open in deze locatie de map met je SteamID64. Zoek vervolgens de wereldmap die je wilt uploaden:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Upload de Save naar de Server

Als je de juiste save-map hebt gevonden:

1. Stop je Palworld server.
2. Open de bestandsbeheerder.
3. Navigeer naar `Pal/Saved/SaveGames/0/`.
4. Verwijder de standaard save-map.
5. Upload je bestaande save-map.
6. Open `GameUserSettings.ini` onder `Configs`.
7. Stel in:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Sla het bestand op en start de server opnieuw.

:::caution Beperking Hostpersonage
Bij het migreren van een lokale Steam co-op wereld wordt het hostpersonage niet automatisch overgezet zoals verbonden spelersdata. Dit betekent dat de originele host mogelijk extra stappen met derde partij save-conversie of karakteroverdracht moet doen als karaktercontinuïteit vereist is.
:::

## Upload een Save van PC Game Pass

PC Game Pass saves gebruiken een ander formaat en zijn niet direct geschikt voor een dedicated Palworld server.

### Vind de Game Pass Save

De lokale Game Pass save data staat meestal in:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Converteer de Save Eerst

Om een PC Game Pass save op een dedicated server te gebruiken, moet je deze eerst converteren naar een Steam-compatibel formaat met een tool van derden.

Een veelgebruikte optie is [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Derde Partij Tool Disclaimer
Tools voor save-conversie van derden zijn niet ontwikkeld of onderhouden door ZAP-Hosting. Hun functionaliteit kan in de loop van de tijd veranderen en compatibiliteit is niet gegarandeerd. Maak altijd een back-up van je originele save voordat je een conversietool gebruikt.
:::

Na conversie wordt de geëxporteerde save meestal geplaatst in een map zoals:

```text
XGP_converted_saves
```

### Upload de Geconverteerde Save

Na de conversie:

1. Stop je server.
2. Open de bestandsbeheerder.
3. Ga naar `Pal/Saved/SaveGames/0/`.
4. Verwijder de standaard save-map.
5. Upload de geconverteerde save-map.
6. Open `GameUserSettings.ini` in `Configs`.
7. Stel de juiste mapnaam in:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Sla het bestand op en start de server.

## Vereiste Configuratie-aanpassingen

De belangrijkste handmatige stap in dit proces is het correct bewerken van `GameUserSettings.ini`.

### Overzicht Configuratie-instelling

| Bestand | Locatie in ZAP interface | Te wijzigen instelling | Voorbeeldwaarde |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Voorbeeldconfiguratie

Als je geüploade save-map `84B5E2264EC387DEDB43179D666031A1` heet, ziet de instelling er zo uit:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

Voeg geen extra aanhalingstekens toe, tenzij deze al in de syntax van je huidige configuratiesjabloon staan.

## Controleer de Upload

Na het starten van de server, join de server en controleer of je werelddata correct is geladen.

Controleer het volgende:

| Controlepunt | Verwacht resultaat |
| --- | --- |
| Wereld laadt | De bestaande kaart en structuren zijn aanwezig |
| Spelersdata | Eerder overgezette spelersdata is beschikbaar waar van toepassing |
| Save-map komt overeen | `DedicatedServerName` komt exact overeen met de geüploade map |
| Verouderd bestand verwijderd | `WorldOption.sav` is niet meer aanwezig als het problemen veroorzaakte |

## Problemen Oplossen

Als de upload niet werkt zoals verwacht, controleer dan deze veelvoorkomende oorzaken.

### Server Start een Nieuwe Wereld

Als de server een nieuwe wereld aanmaakt in plaats van je geüploade save te laden, is de meest voorkomende oorzaak een onjuiste `DedicatedServerName` waarde.

Controleer dat:

- de geüploade map in `Pal/Saved/SaveGames/0/` staat
- de mapnaam exact is gekopieerd
- `DedicatedServerName=[your_savefolder_id]` exact overeenkomt met die map

### Kaartdata Ontbreekt

Als de server start maar je wereldvoortgang of kaartdata ontbreekt, controleer dan opnieuw de exacte mapnaam.

Dit probleem wordt vaak veroorzaakt door een mismatch tussen:

- de naam van de geüploade save-map
- de waarde van `DedicatedServerName` in `GameUserSettings.ini`

### Upload Lijkt Correct maar Fout Blijft

Als de mapstructuur klopt maar de save toch niet laadt:

- controleer of de save van een ondersteunde bron komt
- verwijder `WorldOption.sav` als die bestaat
- zorg dat de server volledig gestopt was voordat je bestanden verving
- herstart de server na het opslaan van de configuratiewijzigingen

:::tip Beste Praktijk bij Bestandsupload
Als je een grote save uploadt, wacht dan tot de overdracht volledig is afgerond voordat je de server start. Te vroeg starten kan de save incompleet maken en voorkomen dat de wereld goed laadt.
:::

## Conclusie

Gefeliciteerd, je hebt succesvol een bestaande Palworld save geüpload naar je ZAP-Hosting server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂