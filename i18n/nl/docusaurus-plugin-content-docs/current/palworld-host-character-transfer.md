---
id: palworld-host-character-transfer
title: "Palworld: Host Character Transfer"
description: "Learn how to transfer your Palworld host character from a solo or co-op save to a dedicated server using Palworld Save Tools and the correct save files. -> Learn more now"
sidebar_label: Palworld: Host Character Transfer
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Met de Palworld host character transfer kun je het personage van een solo- of co-op host migreren naar een dedicated server save. In deze gids bereid je de benodigde savebestanden voor, gebruik je de ondersteunde migratietool en upload je de bijgewerkte characterdata terug naar je server.

:::danger Experimentele Character Transfer Waarschuwing
Deze procedure wordt als experimenteel beschouwd en wijzigt savegegevens handmatig. Palworld-updates kunnen de structuur van saves veranderen, waardoor tools of migratiestappen mogelijk niet meer correct werken.
:::

## Preparation

Voordat je begint, zorg dat je toegang hebt tot je Palworld gameserver en een lokale Windows-pc waar je de benodigde save migratietool kunt draaien.

### Vereisten

Je hebt het volgende nodig:

| Vereiste | Doel |
| --- | --- |
| Toegang tot je ZAP-Hosting Palworld server | Om de benodigde savebestanden te downloaden en uploaden |
| Een lokale backuplocatie | Om een veilige kopie van je originele savegegevens te bewaren |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | Om de host character migratie uit te voeren |
| Een nieuw aangemaakt serverpersonage | De host character data wordt gemigreerd naar dit dedicated serverpersonage |

:::caution Maak Eerst een Backup
Download en bewaar altijd een volledige backup van je huidige server save voordat je savebestanden wijzigt. Als de transfer mislukt of corrupte characterdata oplevert, heb je de originele bestanden nodig om de server te herstellen.
:::

### Belangrijke Notities over Configuratiebestanden

Deze transfer wordt **niet** uitgevoerd door een Palworld configuratiebestand onder `Configs` te bewerken. Volgens de beschikbare tooldocumentatie en community-instructies wordt de host character transfer gedaan door savebestanden te vervangen.

De relevante bestanden bevinden zich in je server save directory, niet in een gameplay configuratiebestand zoals `PalWorldSettings.ini`.

## Begrijp Welke Bestanden Worden Gebruikt

Voordat je start met de transfer, moet je de betrokken bestanden identificeren.

### Vereiste Savebestanden voor de Transfer

De host character migratie gebruikt de volgende savegegevens:

| Bestand of Map | Locatie | Doel |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Level.sav` | Bevat wereldniveau savegegevens die door de migratietool worden gebruikt |
| `Players/` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Players/` | Bevat player savebestanden, inclusief het nieuwe dedicated serverpersonage |
| `00000001.sav` | Binnen `Players/` van de geüploade solo of co-op save | Vertegenwoordigt meestal het originele hostpersonage in co-op saves |

`[your_savefolder_id]` is de lange mapnaam die door je Palworld wereldsave wordt gebruikt. Deze waarde is voor elke save anders.

### Waar je de Bestanden Vindt in de ZAP Interface

Je kunt de benodigde savebestanden openen via de bestandsbeheerder van je gameserver administratie.

Navigeer naar:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

In deze map vind je minimaal:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`



## Bereid het Dedicated Serverpersonage Voor

Voordat je de host character kunt migreren, moet de dedicated server al een nieuw gegenereerd player savebestand voor jouw account bevatten.

### Maak een Nieuw Personage op de Server

Join je Palworld dedicated server zoals gewoonlijk en maak een nieuw personage aan. Speel vervolgens totdat het personage minimaal level `2` bereikt.

Deze stap is nodig omdat de transfer tool een bestaand dedicated serverpersonage als migratiedoel nodig heeft.

### Forceer of Wacht op een Save

Na het aanmaken van het nieuwe personage moet je ervoor zorgen dat de server de nieuwe playerdata naar de schijf heeft geschreven.

Je kunt:

- wachten op het automatische save-interval, meestal rond de `4` minuten, of
- het commando `save` uitvoeren in de serverconsole

| Commando | Waar uitvoeren | Doel |
| --- | --- | --- |
| `save` | Serverconsole | Forceert de server om de huidige wereld- en playerdata naar de schijf te schrijven |

:::info Vereiste voor Save Commando
Als je het `save` commando gebruikt, voer dit dan uit voordat je de server stopt. Dit zorgt ervoor dat het nieuwe dedicated serverpersonagebestand in de `Players/` map bestaat.
:::

### Stop de Server

Zodra de save voltooid is, stop je de Palworld server via je serveradministratie.

Ga niet verder terwijl de server nog draait, want actieve saveprocessen kunnen de bestanden die je gaat vervangen overschrijven of conflicteren.

## Download de Vereiste Savegegevens

Nu het nieuwe personage op de dedicated server bestaat, kun je de bestanden downloaden die nodig zijn voor de migratie.

### Open de Save Directory

Ga in de ZAP-Hosting bestandsbeheerder naar:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Download de Bestanden

Download de volgende items naar je lokale computer:

| Item | Vereist |
| --- | --- |
| `Level.sav` | Ja |
| `Players/` map | Ja |

Bewaar beide items in dezelfde lokale werkmap zodat de migratietool ze correct kan verwerken.

:::tip Houd Bestanden Samen
Plaats `Level.sav` en de `Players/` map naast elkaar in dezelfde lokale map. Dit komt overeen met de verwachte workflow van Palworld Save Tools.
:::

## Migreer het Hostpersonage

Zodra je de savegegevens hebt gedownload, kun je de daadwerkelijke host character transfer uitvoeren.

### Start Palworld Save Tools

Download en pak [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) uit, open vervolgens `PalworldSaveTools.exe`.

Kies in de applicatie:

```text
Fix Host Save
```



### Selecteer de Juiste Bestanden

In de migratietool:

1. Selecteer je gedownloade `Level.sav`
2. Kies in het linker selectieveld `00000001.sav`
3. Kies in het rechter selectieveld het nieuwe personage dat je op de dedicated server hebt aangemaakt
4. Start de migratie door op `Migrate` te klikken

| Toolveld | Te selecteren waarde |
| --- | --- |
| `Path to Level.sav` | Je gedownloade `Level.sav` |
| Linker character veld | `00000001.sav` |
| Rechter character veld | Je nieuw aangemaakte dedicated serverpersonage |
| Actie | `Migrate` |

### Wat de Migratie Doet

Het migratieproces wijst de originele host character data van de solo of co-op save toe aan de dedicated server character entry die je eerder hebt aangemaakt.

Daarom moet je eerst de server joinen en een verse player save genereren voordat je de tool gebruikt.

:::caution Controleer het Doelpersonage
Zorg dat je het juiste nieuwe serverpersonage aan de rechterkant selecteert. Het kiezen van het verkeerde doel kan de savegegevens van een andere speler overschrijven.
:::

## Upload de Bijgewerkte Savebestanden

Nadat de migratie succesvol is afgerond, moet je de gewijzigde bestanden terug uploaden naar je server.

### Vervang de Bestaande Savegegevens

Ga terug naar dezelfde serverdirectory in de ZAP-Hosting bestandsbeheerder:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Upload en vervang:

- de bijgewerkte `Level.sav`
- de bijgewerkte `Players/` map

Als je bestandsbeheerder vraagt om bestaande bestanden te overschrijven, bevestig dan de vervanging.

### Wijzigingen in Configuratiebestanden

Voor deze specifieke host character transfer is er momenteel geen bewezen noodzaak om een Palworld configuratiebestand zoals `PalWorldSettings.ini` te bewerken.

| Item | Vereist voor host transfer |
| --- | --- |
| `PalWorldSettings.ini` bewerken | Nee |
| Bestanden onder `Configs` bewerken | Geen bewezen noodzaak |
| `Level.sav` vervangen | Ja |
| `Players/` vervangen | Ja |

:::note Geen Extra Config Entries Nodig
Volgens de beschikbare tooldocumentatie en migratie-instructies zijn er geen extra configuratie-instellingen of handmatige `.ini`-wijzigingen nodig voor de transfer zelf.
:::

## Start de Server en Test het Personage

Zodra de bijgewerkte bestanden zijn geüpload, start je je Palworld server opnieuw.

### Join de Server Opnieuw

Verbind met de server met hetzelfde account waarmee je het nieuwe dedicated serverpersonage hebt aangemaakt. Als de migratie gelukt is, laad je nu in met het overgezette hostpersonage in plaats van het tijdelijke nieuwe personage.

### Controleer Belangrijke Characterdata

Controleer na het joinen of de volgende gegevens correct zijn:

- character level
- inventaris
- pals
- basisbezit
- voortgangsdata

Als er iets ontbreekt of niet klopt, stop dan direct de server en herstel je backup voordat je het opnieuw probeert.

:::danger Herstel Backup bij Foute Data
Als je character-, inventaris- of wereldbezitsdata na de migratie kapot lijkt, ga dan niet verder met spelen. Herstel eerst de originele `Level.sav` en `Players/` backup om verdere ongewenste wijzigingen te voorkomen.
:::

## Referentie Overzicht

### Vereiste Paden, Bestanden en Acties

| Type | Waarde |
| --- | --- |
| Save pad | `Pal/Saved/SaveGames/0/[your_savefolder_id]/` |
| Vereist bestand | `Level.sav` |
| Vereiste map | `Players/` |
| Host savebestand meestal geselecteerd | `00000001.sav` |
| Servercommando | `save` |
| Server herstart vereist | Ja |
| Configbestand bewerken vereist | Geen bewezen noodzaak |

## Conclusion

Gefeliciteerd, je hebt je Palworld hostpersonage succesvol overgezet naar een dedicated server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂