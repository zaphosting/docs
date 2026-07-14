---
id: palworld-max-guild-bases
title: "Palworld: Max Guild Bases"
description: "Learn how to change the max guild bases setting in Palworld by editing the BaseCampMaxNumInGuild value on your server. -> Learn more now"
sidebar_label: Palworld: Max Guild Bases
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld laat je bepalen hoeveel bases elke guild maximaal mag plaatsen op je server. In deze gids leer je hoe je handmatig het juiste configuratiebestand in de ZAP-Hosting webinterface aanpast, de `BaseCampMaxNumInGuild` instelling wijzigt en de wijziging toepast door je server te herstarten.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zorg ervoor dat je toegang hebt tot je Palworld gameserver in de ZAP-Hosting webinterface voordat je begint.

:::info Vereiste Toegang
Je hebt toegang nodig tot de serveradministratie van je Palworld server en de sectie `Configs` om configuratiebestanden te kunnen bewerken.
:::

## Locate the configuration file

Om de max guild bases instelling te wijzigen, moet je het bestand `PalWorldSettings.ini` aanpassen.

Open in de ZAP-Hosting webinterface de serveradministratie van je Palworld server en navigeer naar:

`Configs` → `PalWorldSettings.ini`

Dit bestand bevat de belangrijkste gameplay configuratiewaarden voor je Palworld server, inclusief guild- en baselimieten.

## Edit the max guild bases value

Zoek in `PalWorldSettings.ini` de sectie `OptionSettings`. De instelling die je moet aanpassen is:

`BaseCampMaxNumInGuild=[your_value]`

Vervang `[your_value]` door het aantal bases dat je per guild wilt toestaan.

### Example configuration

Wil je bijvoorbeeld maximaal `6` bases per guild toestaan, dan ziet de regel er zo uit:

```ini
BaseCampMaxNumInGuild=6
```

Als de instelling al bestaat, wijzig dan alleen de waarde. Als deze ontbreekt, voeg hem dan toe binnen de bestaande `OptionSettings` parameterlijst in het bestand.

:::note Standaard en vanilla maximum
De huidige referentie geeft aan dat de standaardwaarde `4` is en het normale vanilla maximum `10`. Waarden boven `10` worden meestal niet ondersteund op een ongewijzigde Palworld server.
:::

### Value reference

| Config key | Beschrijving | Standaardwaarde | Vanilla maximum |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Maximaal aantal bases per guild toegestaan | `4` | `10` |

:::caution Gebruik geldige waarden
Stel `BaseCampMaxNumInGuild` alleen in op een redelijk ondersteunde waarde. Waarden boven `10` vereisen meestal server-side modding en werken mogelijk niet correct op een standaard Palworld server.
:::

## Save the configuration

Sla na het aanpassen van de waarde het bestand `PalWorldSettings.ini` op in de ZAP-Hosting configuratie-editor.

De nieuwe max guild instelling is nu opgeslagen, maar wordt pas actief na een herstart van de server.

## Restart the server

Herstart je Palworld server via de serveradministratie-interface zodra het bestand is opgeslagen.

Een herstart is nodig omdat Palworld het configuratiebestand `PalWorldSettings.ini` alleen tijdens het opstarten inleest. Zonder herstart wordt de nieuwe guild base limiet meestal niet toegepast.

### What you need to do afterward

Normaal zijn er geen extra console-commando’s nodig na het aanpassen van `BaseCampMaxNumInGuild`. Na de herstart is de nieuwe waarde automatisch actief.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra commando’s uitvoeren | Nee |

:::tip Test de nieuwe limiet
Sluit na de herstart aan op de server en test met een guild het plaatsen van bases om te controleren of de nieuwe limiet correct is toegepast.
:::

## Troubleshooting

Als de max guild bases instelling niet lijkt te veranderen, controleer dan het volgende.

### Verify the config entry

Controleer of `BaseCampMaxNumInGuild` correct is geschreven en een numerieke waarde heeft, bijvoorbeeld:

```ini
BaseCampMaxNumInGuild=8
```

Een typefout in de sleutelnaam of een ongeldige waarde kan voorkomen dat de instelling werkt.

### Confirm the file was saved

Controleer of je wijzigingen zijn opgeslagen in `Configs` → `PalWorldSettings.ini` voordat je de server herstart.

### Restart the server fully

Een volledige herstart van de server is vereist na het wijzigen van deze instelling. Alleen opslaan zonder herstart zorgt ervoor dat de oude waarde nog actief blijft.

### Stay within the vanilla limit

Als je een waarde boven `10` instelt, kan de server deze negeren of onverwacht gedrag vertonen tenzij je compatibele mods gebruikt. Bij een standaard server houd je de waarde op `10` of lager.

## Conclusion

Gefeliciteerd, je hebt succesvol het maximale aantal guild bases op je Palworld server aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂