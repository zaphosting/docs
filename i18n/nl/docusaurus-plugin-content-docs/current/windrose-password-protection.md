---
id: windrose-password-protection
title: "Windrose: Wachtwoordbeveiliging"
description: "Stel een wachtwoord in op je Windrose gameserver om de toegang te beschermen en beheer wachtwoordwijzigingen veilig in de serverconfiguratie -> Leer nu meer"
sidebar_label: Wachtwoordbeveiliging
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windrose ondersteunt wachtwoordbeveiliging, waarmee je de toegang tot je dedicated server kunt beperken met een join-wachtwoord. In deze handleiding leer je hoe je het wachtwoord op je Windrose-server inschakelt, wijzigt of verwijdert via het ZAP-Hosting gameserverbeheer.

## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Windrose-server in de ZAP-Hosting webinterface en dat je toestemming hebt om serverbestanden te bewerken.

:::info Vereiste Toegang
Je hebt toegang nodig tot je serverdashboard en het bestandsbeheer om het bestand `ServerDescription.json` te kunnen bewerken.
:::

## Begrijpen van Windrose Wachtwoordbeveiliging

Het instellen van een wachtwoord voorkomt dat onbevoegde spelers je Windrose gameserver kunnen betreden. Spelers kunnen de server nog steeds bereiken via de uitnodigingscode, maar moeten het juiste wachtwoord invoeren voordat ze kunnen verbinden.

Dit is handig als je:
- de toegang wilt beperken tot vrienden, staf of een privégroep
- een testserver wilt beschermen tegen publieke toegang
- wilt bepalen wie kan joinen zonder afhankelijk te zijn van een aparte wachtwoordmanager of accountwachtwoord

:::note Wachtwoordgedrag
Windrose gebruikt het wachtwoord dat in het serverbestand zelf is geconfigureerd. Dit staat los van je ZAP-Hosting accountwachtwoord en heeft geen relatie met tools zoals een wachtwoordmanager, Google-integratie van wachtwoordmanagers of wachtwoordenlijsten.
:::

## Wachtwoordbeveiliging Inschakelen

Om een wachtwoord toe te passen, moet je eerst de server stoppen, het configuratiebestand bewerken en daarna de server weer starten.

### Stop de Server

Open je serverdashboard in de ZAP-Hosting webinterface en stop de server volledig voordat je wijzigingen aanbrengt.

:::caution Stop de Server Voor het Bewerken
Stop de server voordat je `ServerDescription.json` bewerkt om configuratieconflicten of overschrijven van het bestand tijdens het draaien van de server te voorkomen.
:::

### Open het Configuratiebestand

Open in het panelenmenu `Bestanden`.

Zoek vervolgens het bestand `ServerDescription.json` in de hoofdmap van je serverbestanden en open het.

### Bewerk de Wachtwoordinstellingen

Stel in `ServerDescription.json` de waarde van `IsPasswordProtected` in op `true` en definieer je gewenste wachtwoord in het veld `Password`.

```json
"IsPasswordProtected": true,
"Password": "YourPasswordHere"
```

Vervang `YourPasswordHere` door je eigen veilige wachtwoord.

:::tip Kies een Sterk Wachtwoord
Gebruik een uniek wachtwoord dat niet hetzelfde is als je accountwachtwoord of dat van andere diensten. Dit helpt je Windrose-server te beschermen tegen ongewenste toegang.
:::

### Opslaan en Server Herstarten

Klik na het bewerken op `Inhoud Opslaan`.

Start daarna je server opnieuw via het dashboard. Je Windrose-server vraagt nu om het ingestelde wachtwoord wanneer spelers proberen te joinen.

## Configuratie Referentie

De volgende tabel legt de relevante instellingen in `ServerDescription.json` uit:

| Sleutel | Type | Voorbeeld | Beschrijving |
| --- | --- | --- | --- |
| `IsPasswordProtected` | Boolean | `true` | Schakelt wachtwoordbeveiliging in of uit |
| `Password` | String | `"YourPasswordHere"` | Bepaalt het join-wachtwoord dat wordt gebruikt als wachtwoordbeveiliging aanstaat |

## Het Bestaande Wachtwoord Wijzigen

Wil je later het wachtwoord wijzigen, dan is het proces hetzelfde als bij de eerste setup.

### Wijzig de Wachtwoordwaarde

Stop de server, open `ServerDescription.json` en pas de waarde in het veld `Password` aan naar je nieuwe wachtwoord.

Voorbeeld:

```json
"IsPasswordProtected": true,
"Password": "[your_new_password]"
```

De placeholder `[your_new_password]` staat voor het nieuwe wachtwoord dat spelers moeten invoeren om te joinen.

### Opnieuw Opslaan en Herstarten

Sla het bestand op en start de server opnieuw zodat de wijziging actief wordt.

:::note Wachtwoordcontrole
Als spelers niet kunnen joinen na een wachtwoordwijziging, vraag ze dan het wachtwoord zorgvuldig te controleren, inclusief hoofd- en kleine letters indien van toepassing.
:::

## Wachtwoordbeveiliging Uitschakelen

Wil je je Windrose-server niet langer met een wachtwoord beveiligen, dan kun je deze functie uitschakelen in hetzelfde configuratiebestand.

### Schakel de Instelling Uit

Stop de server en open opnieuw `ServerDescription.json`.

Zet `IsPasswordProtected` op `false`. De waarde van `Password` wordt genegeerd als deze optie uitstaat.

```json
"IsPasswordProtected": false,
"Password": ""
```

### Opslaan en Server Herstarten

Klik op `Inhoud Opslaan` en start de server opnieuw. Spelers kunnen dan joinen zonder wachtwoord.

## Problemen Oplossen

Als de wachtwoordbeveiliging niet werkt zoals verwacht, controleer dan de volgende punten.

| Probleem | Mogelijke Oorzaak | Oplossing |
| --- | --- | --- |
| Server vraagt niet om een wachtwoord | `IsPasswordProtected` staat nog op `false` | Zet deze op `true`, sla het bestand op en herstart de server |
| Spelers kunnen niet joinen met het juiste wachtwoord | Wachtwoord is verkeerd ingevoerd | Controleer de ingestelde waarde en vraag spelers het wachtwoord nauwkeurig in te voeren |
| Wijzigingen worden niet toegepast | Server is niet herstart na bewerken | Herstart de server na het opslaan van `ServerDescription.json` |
| Bestandswijzigingen gaan verloren | Bestand is bewerkt terwijl de server draaide | Stop eerst de server, breng de wijzigingen opnieuw aan, sla op en herstart |

:::danger Deel Geen Gevoelige Wachtwoorden Openbaar
Deel je serverwachtwoord niet openbaar in communityposts, screenshots of bestandsexports. Gebruik ook geen wachtwoorden uit oude lijsten of hergebruik geen inloggegevens van andere diensten.
:::

## Conclusie

Gefeliciteerd, je hebt de wachtwoordbeveiliging op je Windrose-server succesvol ingesteld. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂