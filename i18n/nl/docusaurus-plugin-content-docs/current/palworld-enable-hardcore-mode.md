---
id: palworld-enable-hardcore-mode
title: "Palworld: Hardcore Mode Inschakelen"
description: "Leer hoe je hardcore mode in Palworld inschakelt door de juiste serverconfig te bewerken, True of False waarden in te stellen en permadeath-opties veilig toe te passen. -> Leer nu meer"
sidebar_label: Palworld: Hardcore Mode Inschakelen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

*Hardcore mode* in Palworld activeert permanente doodregels voor spelers en optioneel ook voor Pals. In deze gids leer je hoe je hardcore mode handmatig inschakelt op je ZAP-Hosting Palworld-server door het juiste configuratiebestand te bewerken en daarna de server te herstarten.



## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld-gameserver in de ZAP-Hosting webinterface. Je hebt ook toestemming nodig om serverconfiguratiebestanden te bewerken via de **Configs** sectie van je game server beheer.

:::danger Waarschuwing Permanente Gegevensverlies
Wanneer hardcore instellingen zijn ingeschakeld, kunnen karakters permanent verloren gaan bij overlijden. Als je ook Pal-verlies inschakelt, kunnen je Pals ook permanent verloren gaan.
:::

:::tip Maak Eerst een Backup
Voordat je gameplay-instellingen zoals hardcore mode wijzigt, is het aan te raden een backup te maken van je server of opgeslagen data als er een backup-optie beschikbaar is voor jouw dienst.
:::

## Open het Palworld Configuratiebestand

Om hardcore mode in te schakelen, moet je het bestand `PalWorldSettings.ini` bewerken.

In het ZAP-Hosting game server beheer:

1. Open je Palworld-server.
2. Ga naar **Configs**.
3. Open het bestand `PalWorldSettings.ini`.

:::info Juiste Configuratiebestand
De hardcore instellingen staan in `PalWorldSettings.ini`. Als je een ander bestand bewerkt, worden de wijzigingen niet toegepast op je Palworld-server.
:::

## Bewerk de Hardcore Instellingen

Palworld slaat veel gameplay-instellingen op in de configuratie-entry `OptionSettings` in `PalWorldSettings.ini`. Je moet de relevante hardcore waarden daar handmatig instellen.

### Vereiste Configuratiesleutels

De volgende configuratiesleutels regelen het hardcore gedrag:

| Config sleutel | Waarde | Effect |
| --- | --- | --- |
| `bHardcore` | `True` of `False` | Schakelt permanente spelerdood in of uit |
| `bPalLost` | `True` of `False` | Schakelt permanent Pal-verlies bij dood in of uit |
| `bCharacterRecreateInHardcore` | `True` of `False` | Staat toe een nieuw karakter te maken na een hardcore dood |

### Aanbevolen Waarde-overzicht

| Scenario | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Alleen permanente spelerdood | `True` | `False` | `False` of `True` |
| Volledige hardcore met Pal-verlies | `True` | `True` | `False` of `True` |
| Hardcore mode uitgeschakeld | `False` | `False` | `False` |

:::note True en False Waarden
Deze instellingen gebruiken booleaanse waarden, wat betekent dat je exact `True` of `False` moet invoeren zoals ondersteund door het configuratieformaat.
:::

### Voorbeeldconfiguratie

Als de sleutels al aanwezig zijn in je `OptionSettings`, wijzig dan de waarden naar wens. Als ze ontbreken, voeg ze dan toe binnen dezelfde `OptionSettings` regel.

Voorbeeld:

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

Als je `OptionSettings` regel al veel andere instellingen bevat, verwijder die dan niet. Voeg alleen de hardcore-gerelateerde entries toe of pas die aan binnen de bestaande haakjes.

:::caution Bestaande Instellingen Behouden
`PalWorldSettings.ini` bevat vaak veel actieve serverinstellingen in één `OptionSettings` entry. Per ongeluk andere waarden verwijderen kan ongewenste gameplay-opties op je server resetten.
:::

## Sla de Wijzigingen Op en Pas ze Toe

Na het bewerken van het bestand:

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Herstart je Palworld-server via het ZAP-Hosting game server beheer.

Een herstart is nodig zodat de server de bijgewerkte hardcore configuratie kan laden.

## Controleer of Hardcore Mode Actief Is

Na de herstart, join je server en controleer je of de hardcore regels actief zijn.

### Waarop te Controleren

| Instelling | Verwacht gedrag |
| --- | --- |
| `bHardcore=True` | Spelers kunnen niet normaal doorgaan na overlijden |
| `bPalLost=True` | Pals gaan permanent verloren bij overlijden |
| `bCharacterRecreateInHardcore=True` | Er kan een nieuw karakter worden gemaakt na een hardcore dood |

:::info Belangrijke Gedragsnotitie
Het exacte resultaat in het spel hangt af van welke van de drie hardcore instellingen je hebt ingeschakeld. Wil je permanente spelerdood maar dat gebruikers opnieuw kunnen beginnen met een nieuw karakter, schakel dan `bCharacterRecreateInHardcore=True` in.
:::

## Problemen Oplossen

Als hardcore mode niet werkt zoals verwacht, controleer dan de volgende punten.

### Controleer of het Bestand Correct Is Bewerkt

Zorg dat je `PalWorldSettings.ini` hebt bewerkt in het **Configs** gedeelte van je ZAP-Hosting Palworld-server en niet een ander bestand.

### Controleer de Syntax

De hardcore sleutels moeten binnen de `OptionSettings=(...)` entry staan. Verkeerde interpunctie, ontbrekende komma’s of het plaatsen van waarden buiten het juiste gedeelte kan voorkomen dat de server ze leest.

Voorbeeld geldige syntax:

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Herstart de Server Nogmaals

Als de server niet is herstart na het opslaan van het bestand, worden de nieuwe instellingen niet geladen. Voer een volledige herstart uit en test opnieuw.

## Conclusie

Gefeliciteerd, je hebt hardcore mode succesvol ingeschakeld op je Palworld-server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂