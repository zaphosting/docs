---
id: palworld-update-your-server
title: "Palworld: Update Je Server"
description: "Leer hoe je je Palworld-server bijwerkt, een versie-update activeert en de nieuwste Palworld-gamebuild controleert bij ZAP-Hosting -> Leer nu meer"
sidebar_label: Palworld: Update Je Server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld-serverupdates zijn nodig om je server compatibel te houden met de nieuwste Palworld-gameversie en clientupdate. In deze gids leer je hoe je je Palworld-server bijwerkt bij ZAP-Hosting, waar je de relevante instellingen controleert en wat je doet als de update niet correct wordt toegepast.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Voordat je begint, zorg dat je toegang hebt tot je Palworld-gameserver in de ZAP-Hosting webinterface en toestemming hebt om de server indien nodig te herstarten of opnieuw te installeren.

:::info Vereiste Toegang Tot Server
Je hebt toegang nodig tot de game server administratie, inclusief de **Configs**, **Console** en stroombediening in het ZAP-Hosting paneel.
:::

:::note Over Configuratiebestanden
Voor Palworld-updates is er normaal gesproken geen gameplay-configuratiebestand dat je moet aanpassen om een nieuwe gameversie te installeren. Het updateproces wordt meestal door de serverinstallatie zelf afgehandeld. Controleer toch je serverinstellingen in het paneel als je het updategedrag handmatig beheert.
:::

## Hoe Palworld Serverupdates Werken bij ZAP-Hosting

Palworld dedicated servers op hostingplatforms updaten meestal wanneer de serverinstallatie bij het opstarten controleert op een nieuwere build. Volgens de beschikbare referentie-informatie voeren ZAP-Hosting-servers deze controle doorgaans automatisch uit bij het starten of herstarten van de server.

Als je server al is ingesteld voor automatische updates, hoef je meestal alleen maar te herstarten na een nieuwe Palworld-release. Als automatische updates zijn uitgeschakeld in je service-instellingen, moet je de server handmatig herstarten na elke patch zodat de updatecontrole kan plaatsvinden.

:::caution Beschikbaarheid Automatische Updates
De exacte benaming en beschikbaarheid van automatische update-opties kunnen verschillen afhankelijk van de huidige ZAP-Hosting game server interface en productconfiguratie. Als je geen update-gerelateerde schakelaar ziet in je serverinstellingen, betekent dit niet dat deze permanent ontbreekt; de optie kan per productversie verschillen of automatisch op de achtergrond worden afgehandeld.
:::

## Controleer de Relevante Serverinstellingen

Open eerst je Palworld-server in de ZAP-Hosting webinterface en bekijk de beschikbare instellingen met betrekking tot updates en opstartgedrag.

### Open Je Serveradministratie

1. Log in op de ZAP-Hosting webinterface.
2. Open je **Palworld** gameserver.
3. Bekijk de beschikbare secties zoals **Configs**, **Console** en de stroombediening van de server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Controleer of een Configuratiebestand Moet Worden Aangepast

Voor het Palworld-updateproces zelf is er geen bevestigde Palworld-configuratiebestandvermelding die de gameversie handmatig wijzigt in standaard servergebruik. De relevante Palworld gameplay-configuratiebestanden onder **Configs** worden meestal gebruikt voor serverinstellingen zoals gameplayregels, niet voor het downloaden van een nieuwe serverbuild.

Het meest gebruikte Palworld-instellingenbestand is:

| Bestand | Typisch doel | Waar te vinden |
| --- | --- | --- |
| `PalWorldSettings.ini` | Gameplay- en servergedragsinstellingen | Game server administratie onder **Configs** |

:::note Geen Handmatige Versie-invoer
Er is geen geverifieerde `PalWorldSettings.ini` sleutel om een specifieke Palworld serverversie-update af te dwingen in een standaard ZAP-Hosting setup. Als je alleen de server software wilt updaten, is het aanpassen van `PalWorldSettings.ini` normaal gesproken niet nodig.
:::

## Update de Server

Zodra je je servertoegang hebt bevestigd en de instellingen hebt gecontroleerd, kun je het updateproces starten.

### Herstart de Server om een Updatecontrole te Activeren

De belangrijkste methode is de server herstarten. Bij veel gehoste Palworld-servers triggert het opstarten een controle op beschikbare game-updates.

1. Stop of herstart je Palworld-server via de ZAP-Hosting webinterface.
2. Wacht tot de server volledig is afgesloten.
3. Start de server opnieuw.
4. Geef enkele minuten de tijd voor het opstart- en updateproces.

Als de automatische updatefunctie van ZAP-Hosting actief is voor jouw service, zou deze herstart de server moeten laten downloaden en toepassen van de nieuwste beschikbare Palworld-update.

### Als Automatische Updates Uitgeschakeld Zijn

Als je service is ingesteld om niet automatisch te updaten, moet je de server handmatig herstarten na elke Palworld-patch of versie-update.

Gebruik hetzelfde proces:

1. Stop de server.
2. Start de server opnieuw.
3. Wacht tot de server volledig is opgestart.

:::tip Beste Praktijk Na Een Palworld Release
Herstart je server na een nieuwe Palworld-release of patch tijdens een periode met weinig activiteit. Dit voorkomt verbindingsproblemen voor spelers door een mismatch tussen client- en serverversie.
:::

## Controleer of de Update Is Toegepast

Na het opnieuw starten van de server moet je bevestigen dat de nieuwe versie actief is.

### Controleer de Console-uitvoer

Open de **Console** in je game server administratie en bekijk het opstartlogboek. Let op aanwijzingen dat de server normaal is opgestart en geen update- of bestandsvalidatiefouten heeft gehad.

Omdat exacte logregels kunnen verschillen per serverbuild, focus je op of de server succesvol start en verbindingen accepteert van clients met de nieuwste Palworld-gameversie.

### Gebruik het `info` Commando

Als je serverconsole dit ondersteunt, voer dan het volgende commando uit:

```text
info
```

Dit commando kan worden gebruikt om serverinformatie na het opstarten te controleren.

| Commando | Doel |
| --- | --- |
| `info` | Toont serverinformatie ter verificatie na de update |

:::note Beschikbaarheid Commando
Console-commando-ondersteuning kan verschillen afhankelijk van de huidige Palworld dedicated server implementatie en hoe de host console-toegang aanbiedt. Als `info` geen bruikbare output geeft in jouw omgeving, gebruik dan het opstartlogboek en een verbindingscontrole vanuit een bijgewerkte gameclient.
:::

## Problemen Oplossen bij een Mislukte Update

Als de herstart de server niet bijwerkt, kun je de herstelopties in het ZAP-Hosting paneel gebruiken.

### Herinstalleer of Verifieer de Serverbestanden

Als de server na een herstart nog steeds een oude versie lijkt te draaien:

1. Stop de server volledig.
2. Open de herinstallatie- of hersteloptie in je ZAP-Hosting game server administratie.
3. Gebruik indien beschikbaar een **Integriteit verifiëren** of vergelijkbare bestandscontrole-optie.
4. Start de server opnieuw nadat het proces is voltooid.

Dit proces controleert of downloadt de Palworld-serverbestanden opnieuw en kan onvolledige of mislukte updates oplossen.

:::caution Voorzichtigheid met Opslagdata
Voordat je herinstallatiefuncties gebruikt, zorg dat je begrijpt of de gekozen optie alleen gamebestanden of ook werelddata beïnvloedt. Als het paneel dit niet duidelijk maakt, maak dan eerst een backup of neem contact op met support voordat je doorgaat.
:::

### Controleer of Client- en Serverversie Overeenkomen

Soms is de server correct bijgewerkt, maar kunnen spelers nog steeds niet joinen omdat hun lokale gameclient een andere versie heeft.

Controleer het volgende:

| Controle | Waarom belangrijk |
| --- | --- |
| Server herstart na patch | Opstarten triggert vaak de update |
| Laatste clientupdate geïnstalleerd | Spelers moeten dezelfde gameversie hebben |
| Geen opstartfouten in console | Fouten kunnen update verhinderen |
| Bestandsverificatie voltooid | Beschadigde bestanden blokkeren updates |

## Wat Je Moet Aanpassen in Configs

Omdat deze gids specifiek een handmatig proces behandelt en de taak verwijst naar **Configs**, is het belangrijk om de scope te verduidelijken:

- De Palworld-configuratiebestanden onder **Configs** worden gebruikt voor serverinstellingen.
- Er is geen geverifieerde Palworld-configuratievermelding in `PalWorldSettings.ini` die handmatig een server software update downloadt of toepast.
- Voor een normale versie-update hoef je meestal geen waarde in het configuratiebestand te wijzigen.
- De vereiste actie is meestal een **serverherstart**, gevolgd door een **bestandsverificatie of herinstallatie** alleen als de update faalt.

Als ZAP-Hosting later een speciale update-schakelaar of opstartparameter in het paneel aanbiedt, gebruik dan de exacte benaming uit jouw interface in plaats van niet-ondersteunde configuratie-invoeren toe te voegen.

:::danger Voeg Geen Ongecontroleerde Config Sleutels Toe
Plak geen willekeurige update-commando’s, SteamCMD-parameters of niet-gedocumenteerde sleutels in `PalWorldSettings.ini` of andere bestanden onder **Configs** tenzij deze expliciet zijn gedocumenteerd voor jouw huidige ZAP-Hosting Palworld-service. Niet-ondersteunde invoeren updaten de server niet betrouwbaar en kunnen configuratieproblemen veroorzaken.
:::

## Na de Update

Zodra de update succesvol is toegepast:

1. Zorg dat de server normaal draait.
2. Controleer de console op fouten.
3. Test het joinen van de server met een bijgewerkte Palworld-client.
4. Voer `info` uit in de console als dit wordt ondersteund.

Je server is nu klaar voor spelers met de nieuwste versie-update.

## Conclusion

Congratulations, you have successfully updated your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂