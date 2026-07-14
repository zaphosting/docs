---
id: palworld-troubleshooting
title: "Palworld: Problemen oplossen"
description: "Los veelvoorkomende Palworld-serverproblemen op, Palworld Steam-updateproblemen en Steam-connectiviteitsfouten op je game-server. -> Leer nu meer"
sidebar_label: Palworld: Problemen oplossen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld dedicated servers kunnen om verschillende redenen falen, zoals mislukte Steam-updates, versieconflicten, mod-conflicten en tijdelijke Steam-connectiviteitsproblemen. In deze gids leer je hoe je veelvoorkomende Palworld-serverproblemen bij ZAP-Hosting herkent en de juiste oplossing toepast, inclusief wanneer je configuratiebestanden moet aanpassen, bestanden moet verifiëren of je server moet herstarten.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je begint met het oplossen van problemen, zorg dat je toegang hebt tot de Palworld game-server administratie en console in de ZAP-Hosting webinterface.

Je hebt ook het volgende nodig:

| Vereiste | Waarom het nodig is |
| --- | --- |
| Toegang tot je ZAP-Hosting game-serverpaneel | Nodig om de server te stoppen, starten, herinstalleren en configuratiebestanden te bewerken |
| Toegang tot de serverconsole | Handig om te controleren of de server reageert |
| Een recente backup | Aanbevolen voordat je bestanden wijzigt of mods verwijdert |
| Directe server IP en poort | Nodig omdat de in-game Recent Servers lijst mogelijk niet betrouwbaar werkt |

:::caution Maak eerst een backup
Als je mods wilt verwijderen, bestanden opnieuw wilt installeren of delen van je Palworld-serverconfiguratie wilt resetten, maak dan eerst een backup om dataverlies te voorkomen.
:::

## Toegang tot de Palworld Configuratiebestanden

Sommige stappen voor probleemoplossing vereisen handmatige aanpassingen in Palworld configuratiebestanden. Bij ZAP-Hosting kun je deze bestanden openen via je game-server administratie onder `Configs`.

Voor Palworld dedicated servers staan de belangrijkste serverinstellingen meestal in het volgende bestand:

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Als je server op een ander platform draait, kan de exacte mapnaam verschillen, maar bij gehoste Linux-gebaseerde Palworld-servers is het pad `LinuxServer` de standaardlocatie.

### Open het Configuratiebestand in de ZAP Interface

Volg deze stappen om het bestand te openen:

1. Open je Palworld-server in de ZAP-Hosting webinterface.
2. Ga naar de sectie `Configs`.
3. Open `PalWorldSettings.ini`.
4. Bekijk de regel `OptionSettings=(...)`, die de meeste gameplay- en verbindingsinstellingen bevat.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Hoofdconfiguratiebestand
De meeste Palworld serveropties staan in `PalWorldSettings.ini`, meestal binnen de sectie `OptionSettings=(...)`. Als je gameplay-instellingen, wachtwoorden, spelerslimieten of netwerkgerelateerde waarden wilt aanpassen, is dit normaal gesproken het bestand dat je bewerkt.
:::

### Opslaan en Herstarten na Bewerken

Na het wijzigen van configuratiewaarden:

1. Sla het bestand op in de sectie `Configs`.
2. Herstart de Palworld-server via de ZAP-Hosting interface.

Palworld past configuratiewijzigingen niet betrouwbaar live toe, dus een herstart is vereist na het bewerken van `PalWorldSettings.ini`.

## Problemen met Mislukte Steam Update Jobs Oplossen

Een bekend updateprobleem kan de volgende melding geven:

```text
Error! app '2394010' state is 0x6 after update job
```

Dit betekent meestal dat de Palworld Steam-serverbestanden niet correct zijn bijgewerkt.

### Aanbevolen Oplossing

Volg deze stappen:

1. Stop je Palworld-server.
2. Open het serverbeheer in de ZAP-Hosting interface.
3. Gebruik de herinstallatie- of bestandsverificatiefunctie.
4. Kies de optie om de integriteit te verifiëren zodat de serverbestanden gecontroleerd en indien nodig opnieuw gedownload worden.
5. Start de server opnieuw.

:::tip Verifieer integriteit bij corrupte bestanden
Een bestandsverificatie is meestal de veiligste eerste stap omdat het ontbrekende of beschadigde Palworld game-serverbestanden repareert zonder dat je handmatig iets hoeft te uploaden.
:::

### Moet je een Configuratiebestand Aanpassen?

Normaal gesproken is er geen handmatige aanpassing van configuratiebestanden nodig voor deze specifieke fout. Het probleem ligt meestal bij beschadigde of incomplete gamebestanden, niet bij een verkeerde instelling in `PalWorldSettings.ini`.

## "Connection Timed Out" Fout Oplossen

Als je de foutmelding `Connection timed out` krijgt bij het verbinden met je Palworld game-server, kunnen er verschillende oorzaken zijn.

## Controleer of de Server Echt Draait

Controleer eerst of de server correct is gestart.

### Gebruik de Console

Open de serverconsole in de ZAP-Hosting interface en kijk of er normale opstartactiviteit is. Als de console beschikbaar is, probeer dan een simpele opdracht zoals:

```text
info
```

Als de server normaal reageert, draait hij waarschijnlijk. Als er geen nuttige reactie is of het proces steeds stopt, kan de server crashen tijdens het opstarten.

### Controleer het Resourcegebruik

Als je CPU-gebruik tijdens het opstarten ongewoon laag blijft en de server niet reageert in de console, kan dit betekenen dat het Palworld-serverproces is gecrasht of niet goed is geïnitialiseerd.

| Symbool | Waarschijnlijke oorzaak | Aanbevolen actie |
| --- | --- | --- |
| Geen console-reactie | Crash bij opstarten of vastgelopen proces | Herstart de server en controleer recente wijzigingen |
| Zeer laag CPU-gebruik tijdens opstarten | Server initialiseert niet correct | Controleer mods, recente updates en logs |
| Server start wel, maar spelers krijgen time-outs | Verbindingsmethode of versieprobleem | Gebruik direct IP en controleer versies |

## Verbind via Direct IP in plaats van Recent Servers

Een veelvoorkomend Palworld-probleem is dat verbinden via de in-game tab `Recent Servers` kan mislukken, zelfs als de server online is.

Gebruik in plaats daarvan een directe verbinding:

1. Kopieer je server IP en poort uit de ZAP-Hosting interface.
2. Verbind in Palworld direct met dat adres.
3. Vertrouw niet op de `Recent Servers` lijst voor testen.

:::note Directe verbinding is betrouwbaarder
Als de Palworld Steam-serverbrowser of recente serverlijst inconsistent werkt, is een directe IP-verbinding de beste manier om te controleren of je server bereikbaar is.
:::

## Controleer op Mod- of UE4SS-problemen

Als Palworld recent een update kreeg en je server mods of `UE4SS` gebruikt, kan de server stoppen met werken totdat die aanpassingen zijn bijgewerkt.

### Wat te Controleren

Bekijk of je recent hebt geïnstalleerd:

- gameplay mods
- aangepaste serverwijzigingen
- `UE4SS`
- andere third-party bestanden die in de Palworld game-server ingrijpen

Als het probleem direct na een Palworld Steam-update begon, zijn deze bestanden waarschijnlijk de oorzaak.

### Aanbevolen Oplossing

1. Stop de server.
2. Maak een backup.
3. Verwijder of schakel recent toegevoegde mods of `UE4SS` uit.
4. Start de server opnieuw.
5. Test de verbinding met direct IP.

:::caution Mod-compatibiliteit na updates
Palworld-updates kunnen mods zonder waarschuwing breken. Als je server voor een update werkte en daarna niet meer, test dan altijd eerst zonder mods voordat je andere instellingen wijzigt.
:::

### Zijn Configuratie-aanpassingen Nodig?

Meestal niet. Mod-gerelateerde verbindingsproblemen worden meestal veroorzaakt door incompatibele bestanden, niet door waarden in `PalWorldSettings.ini`.

## Steam Connectiviteitsfouten Oplossen

Je kunt de volgende opstartmelding zien:

```text
Connecting anonymously to Steam Public...Retrying
```

Dit heeft meestal te maken met tijdelijke Steam-connectiviteitsproblemen, niet met een kapotte Palworld-configuratie.

### Wat Dit Betekent

De Palworld dedicated server is afhankelijk van Steam-services voor delen van het opstart- en updateproces. Als Steam storingen, zware belasting of gepland onderhoud heeft, kan de server tijdelijk niet verbinden.

Dit komt vooral voor tijdens drukke periodes of routine Steam-onderhoud, vaak op dinsdag.

### Aanbevolen Oplossing

Probeer het volgende:

1. Wacht `5` tot `10` minuten.
2. Herstart de server.
3. Test opnieuw.

Als het probleem zich voordoet tijdens een bredere Steam-storing, moet je wachten tot Steam weer stabiel is.

### Overweging Automatische Updates

Als je server herhaaldelijk update-gerelateerde opstartproblemen krijgt tijdens Steam-storingen, kun je overwegen automatische updates uit te schakelen in je serverinstellingen totdat Steam weer stabiel is.

:::tip Vermijd updatevensters tijdens Steam-onderhoud
Vermijd indien mogelijk een Palworld Steam-update tijdens bekende Steam-onderhoudsperiodes. Dit vermindert mislukte opstartpogingen en onnodige probleemoplossing.
:::

### Zijn Configuratie-aanpassingen Nodig?

Nee. Dit probleem wordt normaal niet opgelost via `PalWorldSettings.ini` of een ander handmatig configuratiebestand.

## "Incompatible Version of the Game" Fout Oplossen

Als Palworld aangeeft dat de match een incompatibele gameversie draait, komen je clientversie en serverversie niet overeen.

## Update de Serverversie

Begin met het herstarten van de server via de ZAP-Hosting interface. Vaak wordt dan de nieuwste Palworld game-serverupdate toegepast.

Als de versie nog steeds niet overeenkomt, volg dan je normale serverupdateproces. Als je een speciale updatehandleiding nodig hebt, volg dan de relevante Palworld update-documentatie in ZAP-Docs als die beschikbaar is.

### Controleer de Clientversie

Zorg dat je lokale Palworld-game-installatie ook volledig is bijgewerkt via Steam.

| Component | Wat te controleren |
| --- | --- |
| Palworld server | Herstart en bijgewerkt via ZAP-Hosting |
| Lokale Palworld game | Bijgewerkt in Steam |
| Mods | Bijgewerkt of verwijderd als incompatibel |

:::info Versieconflicten beïnvloeden beide kanten
Deze fout betekent niet altijd dat de server verouderd is. Je lokale Palworld-client kan ook de oudere versie zijn, dus controleer altijd beide voordat je diepere wijzigingen maakt.
:::

### Zijn Configuratie-aanpassingen Nodig?

Normaal zijn er geen configuratiebestandswijzigingen nodig bij een versieconflict.

## `steamclient.so` Opstartmeldingen Begrijpen

Tijdens het opstarten kun je meldingen zien zoals:

```text
steamclient.so: cannot open shared object file: No such file or directory
```

In veel Palworld-hostingomgevingen verschijnen deze Steam-gerelateerde meldingen zelfs als de server normaal start.

### Wat je moet doen

Als de server blijft starten en bereikbaar wordt, kun je deze melding meestal negeren.

### Wanneer het een probleem wordt

Onderzoek dit alleen verder als de server helemaal niet start en deze melding samen met andere fatale fouten verschijnt.

:::note Niet elke Steam-foutmelding is kritiek
Opstartlogs bevatten vaak niet-fatale waarschuwingen. Focus op of de server volledig opstart en verbindingen accepteert, niet alleen op een enkele waarschuwing in de console.
:::

## Problemen met Wereld- en Gildeverbindingen Oplossen

Soms ervaren spelers verbindingsproblemen die te maken hebben met wereld- of gildegegevens in plaats van met het serverproces zelf.

Een voorbeeld is wanneer een gilde-lid vertrekt terwijl andere gildegerelateerde spelerdata nog aan offline spelers gekoppeld is. Dit kan soms join-problemen veroorzaken.

### Mogelijke Oplossingen

Probeer het volgende in deze volgorde:

1. Vraag de getroffen speler om opnieuw lid te worden van het gilde als dat kan.
2. Herstart de Palworld-server.
3. Als het probleem blijft, herstel dan een backup of onderzoek de save-data zorgvuldig.

:::danger Wijzigingen in save-data kunnen riskant zijn
Als je vermoedt dat de wereld of save corrupt is, vermijd dan willekeurige handmatige aanpassingen zonder een recente backup. Onjuiste wijzigingen kunnen je Palworld-wereld permanent beschadigen.
:::

## Configuratie Waarden om te Controleren

Hoewel de meeste problemen in deze gids niet direct door verkeerde instellingen worden veroorzaakt, zijn er een paar waarden in `PalWorldSettings.ini` die je kunt controleren als spelers niet kunnen joinen zoals verwacht.

Deze waarden staan meestal in de sectie `OptionSettings=(...)`.

| Config key | Doel | Wat te controleren |
| --- | --- | --- |
| `ServerName` | Publieke servernaam | Controleer of deze correct is ingesteld |
| `ServerDescription` | Serverbeschrijving | Optioneel, maar handig voor herkenning |
| `AdminPassword` | Admin login wachtwoord | Zorg dat dit klopt als je admin-commando’s gebruikt |
| `ServerPassword` | Join-wachtwoord | Verwijder of corrigeer als spelers niet kunnen authenticeren |
| `PublicPort` | Game connectiepoort | Controleer of deze overeenkomt met de poort van je dienst |
| `PublicIP` | Geadverteerd publiek IP | Laat meestal ongewijzigd tenzij specifiek nodig |
| `bIsMultiplay` | Multiplayer modus | Moet aan blijven voor normale dedicated server |
| `bIsDedicated` | Dedicated server modus | Moet aan blijven voor gehoste dedicated servers |

### Voorbeeldstructuur

De exacte inhoud kan verschillen, maar de relevante instellingen staan meestal in een regel zoals deze:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

Vervang placeholders zoals `[your_admin_password]` en `[your_server_password]` door je eigen waarden.

:::caution Verander geen onbekende waarden zomaar
Palworld slaat veel instellingen op in één `OptionSettings` regel. Als je per ongeluk komma’s, aanhalingstekens of haakjes verwijdert, kan de server de configuratie niet correct lezen.
:::

## Configuratie Wijzigingen Veilig Toepassen

Als je `PalWorldSettings.ini` moet bewerken, volg dan dit proces:

1. Stop de server om conflicten tijdens het bewerken te voorkomen.
2. Open `Configs` in de ZAP-Hosting interface.
3. Bewerk `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4. Sla je wijzigingen op.
5. Start of herstart de server.
6. Test de server met een directe IP-verbinding.

### Geen extra commando’s nodig

Voor standaard Palworld-configuratiewijzigingen is normaal geen extra console-commando nodig na het opslaan. Een herstart is de belangrijkste laatste stap.

## Snelle Referentie

| Probleem | Config-bestand aanpassen nodig | Herstart nodig | Extra actie |
| --- | --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | Nee | Ja | Verifieer integriteit of herinstalleer bestanden |
| `Connection timed out` | Meestal nee | Vaak ja | Gebruik direct IP, controleer mods, test console |
| `Connecting anonymously to Steam Public...Retrying` | Nee | Ja | Wacht op herstel Steam |
| `Incompatible version of the game` | Nee | Ja | Update server en client |
| `steamclient.so` waarschuwing | Nee | Nee, als server normaal start | Meestal veilig te negeren |
| Join-problemen na gildewijzigingen | Nee | Ja | Herjoin gilde of herstel backup indien nodig |

## Conclusie

Gefeliciteerd, je hebt succesvol veelvoorkomende Palworld-serverproblemen opgelost. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂