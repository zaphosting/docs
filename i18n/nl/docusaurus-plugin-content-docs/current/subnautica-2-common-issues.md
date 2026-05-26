---
id: subnautica-2-common-issues
title: "Subnautica 2: Veelvoorkomende problemen"
description: "Ontdek veelvoorkomende Subnautica 2 gameserver problemen, verbindingsproblemen en prestatieoplossingen om je game online en stabiel te houden -> Leer nu meer"
sidebar_label: "Subnautica 2: Veelvoorkomende problemen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Subnautica 2 serverproblemen kunnen variëren van opstartfouten en crashes tot lag, verbindingsproblemen en slechte prestaties in de game. In deze gids leer je hoe je veelvoorkomende problemen op je Subnautica 2 gameserver herkent en praktische oplossingen toepast om je game weer online en soepel te laten draaien.

:::info Early Access Wijzigingen
Als de Subnautica 2 serversoftware nog actief verandert, kunnen sommige gedragingen, configuratiebestanden of beschikbare functies verschillen tussen versies. Vergelijk bij verschillen altijd met de momenteel geïnstalleerde versie in je ZAP-Hosting webinterface.
:::

<InlineVoucher />

## Problemen en oplossingen

Serverproblemen worden niet altijd veroorzaakt door één fout. Vaak hangt het probleem samen met verouderde bestanden, verkeerde instellingen, onvoldoende resources of tijdelijke netwerkcondities. De onderstaande secties helpen je stap voor stap de meest voorkomende problemen op te lossen.

### Algemene problemen

Algemene problemen beïnvloeden meestal de basisbeschikbaarheid, zichtbaarheid of het opstartgedrag van de server. Dit zijn vaak de eerste controles die je moet uitvoeren voordat je geavanceerdere oorzaken onderzoekt.

<details>
  <summary>Server niet zichtbaar in de game</summary>

Als je Subnautica 2 server niet zichtbaar is, is de server mogelijk niet correct gestart of is het initialisatieproces niet voltooid. Dit kan gebeuren door ongeldige configuratiewaarden, onvolledige installatiebestanden of opstartfouten.

Controleer het volgende:

- Controleer of de server als actief wordt weergegeven in je ZAP-Hosting webinterface
- Bekijk de serverconsole op opstartfouten
- Controleer de logbestanden op ontbrekende bestanden of mislukte initialisatiestappen
- Zorg dat je de juiste zoekfilters gebruikt in de in-game serverbrowser
- Wacht een paar minuten na het opstarten, sommige servers hebben extra tijd nodig voordat ze publiek zichtbaar zijn

Als de server nog steeds niet verschijnt, start hem dan opnieuw en volg de console vanaf het begin van het opstartproces.

</details>

<details>
  <summary>Server start niet op</summary>

Als de server helemaal niet start, ligt de oorzaak meestal bij corrupte bestanden, een onvolledige update of een ongeldige configuratie.

Controleer deze punten:

| Controle | Waarom dit belangrijk is |
| --- | --- |
| Serverconsole-uitvoer | Toont de exacte opstartfout als die er is |
| Recente configuratiewijzigingen | Eén ongeldige waarde kan opstarten verhinderen |
| Recente bestandsuploads of aanpassingen | Handmatig gewijzigde bestanden kunnen incompleet of incompatibel zijn |
| Huidige gameversie | Niet-overeenkomende serverbestanden kunnen directe opstartfout veroorzaken |

Als je recent configuratiebestanden hebt aangepast, herstel dan de laatste wijzigingen en probeer het opnieuw. Als het probleem begon na een update of handmatige wijziging, kan het terugzetten van een backup tijd besparen.

:::tip Gebruik Backups Voor Grote Wijzigingen
Maak altijd een backup voordat je belangrijke bestanden aanpast of de server update, zodat je snel kunt terugrollen bij nieuwe problemen.
:::

</details>

<details>
  <summary>Serverwachtwoord of toegangsinstellingen werken niet zoals verwacht</summary>

Als spelers niet kunnen joinen terwijl de server online lijkt, controleer dan zorgvuldig je toegangsinstellingen. Een verkeerd wachtwoord, verouderde opgeslagen clientgegevens of een mismatch tussen publieke en private serverinstellingen kan toegang blokkeren.

Controleer het volgende:

- Het wachtwoord dat spelers invoeren komt exact overeen met het huidige serverwachtwoord
- De server is opnieuw gestart na het wijzigen van toegangsinstellingen
- Er worden geen oude client-side opgeslagen verbindingsgegevens hergebruikt
- Eventuele private of whitelist-instellingen zijn correct geconfigureerd, indien beschikbaar voor jouw serverversie

Als je twijfelt of het probleem door configuratie komt, vereenvoudig de setup tijdelijk en test met minimale restricties.

</details>

### Crashproblemen

Onverwachte crashes onderbreken het spel en kunnen ook dataverlies veroorzaken als ze herhaaldelijk voorkomen. De meest voorkomende oorzaken zijn verouderde serverbestanden, incompatibele mods of overbelaste resources.

<details>
  <summary>Je server up-to-date houden</summary>

Het draaien van de nieuwste beschikbare Subnautica 2 serverversie is belangrijk voor stabiliteit, compatibiliteit en veiligheid. Oudere versies kunnen bugs bevatten die al zijn opgelost of werken mogelijk niet goed met de huidige gameclient.

Een verouderde server kan leiden tot:

- opstartfouten
- willekeurige crashes
- versie mismatch fouten
- onstabiel gameplaygedrag

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Als je server begon te crashen na een game-update, controleer dan eerst of er een nieuwere serverversie beschikbaar is in je webinterface. Update, herstart de server en test opnieuw.

</details>

<details>
  <summary>Foutieve of incompatibele mods en extra content</summary>

Als Subnautica 2 mods of andere extra server-side content ondersteunt in jouw versie, kunnen deze vaak crashes veroorzaken. Incompatibele of verouderde content kan deels laden, maar later fouten veroorzaken tijdens het spelen.

Typische signalen zijn:

- de server crasht na het opstarten
- de server crasht als een speler joinet
- de server bevriest tijdens het laden van de wereld
- fouten verschijnen na het toevoegen van nieuwe content

Volg dit proces om de oorzaak te isoleren:

1. Stop de server
2. Verwijder of schakel recent toegevoegde content uit
3. Start de server met de kleinste mogelijke setup
4. Test de stabiliteit
5. Schakel content één voor één weer in

Deze methode helpt je precies te vinden welk bestand of pakket het probleem veroorzaakt.

:::caution Versiecompatibiliteit
Gebruik alleen mods, frameworks of extensies die bevestigd compatibel zijn met jouw huidige Subnautica 2 serverversie. Zelfs één verouderd onderdeel kan herhaalde crashes veroorzaken.
:::

</details>

<details>
  <summary>Beschadigde wereld- of savegegevens</summary>

Als de server crasht tijdens het laden van de wereld of kort nadat spelers verbinden, kunnen de savegegevens beschadigd zijn. Dit kan gebeuren na geforceerde afsluitingen, onderbroken schrijfacties of herhaalde crashes.

Mogelijke aanwijzingen zijn:

- de server crasht steeds bij dezelfde laadfase
- een nieuwe wereld start wel goed, maar de bestaande niet
- de console meldt fouten bij het laden van save of wereld

Als je savecorruptie vermoedt, test dan met een backup of een verse wereld als die beschikbaar is. Start een verse wereld zonder problemen, dan ligt het waarschijnlijk aan de bestaande save.

:::danger Risico op dataverlies
Verwijder je bestaande wereldbestanden niet direct. Maak eerst een backup zodat je later herstel kunt proberen indien nodig.
:::

</details>

### Prestatieproblemen

Prestatieproblemen uiten zich vaak als lag, vertraagde acties, traag laden van de wereld of onstabiele gameplay. Deze problemen worden vaak veroorzaakt door configuratiekeuzes, onvoldoende hardware of zware extra content.

<details>
  <summary>Slechte serverconfiguratie</summary>

Verkeerde configuratiewaarden kunnen CPU-, geheugen- of opslagbelasting verhogen en de algehele serverprestaties verlagen. Als je Subnautica 2 server traag of onstabiel aanvoelt, controleer dan je instellingen goed.

Controleer vooral of:

- spelergerelateerde limieten realistisch zijn voor je pakket
- wereldgerelateerde instellingen niet zwaarder zijn dan nodig
- experimentele of niet-standaard instellingen recent zijn aangepast
- de server is herstart na het toepassen van wijzigingen

Je kunt je configuratie meestal beheren in de **Instellingen** sectie of via de beschikbare bestanden in **Configs** in je ZAP-Hosting webinterface.

</details>

<details>
  <summary>Serverpakket voldoet niet aan projectvereisten</summary>

Een server die te klein is voor je project kan haperingen, lange laadtijden en instabiliteit veroorzaken. Dit wordt duidelijker bij meer spelers, extra content of een grote actieve wereld.

ZAP-Hosting geeft aanbevolen configuraties tijdens het bestelproces om je te helpen geschikte resources te kiezen.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Gebruik de volgende tabel als algemene troubleshootingreferentie:

| Symbool | Mogelijke oorzaak | Aanbevolen actie |
| --- | --- | --- |
| Frequente lagpieken | CPU-resources zijn te beperkt | Verminder belasting of upgrade je pakket |
| Trage laadtijden | Opslag- of geheugenknelpunt | Controleer gebruik en overweeg meer resources |
| Crashes bij spelersbelasting | Onvoldoende totale capaciteit | Verlaag belasting of schaal de server op |
| Goede prestaties leeg, slecht bij bezetting | Pakket te klein voor actieve belasting | Upgrade op basis van verwachte spelersactiviteit |

:::note Minimale aanbevelingen
Aanbevolen pakketgroottes zijn slechts een startpunt. Als je Subnautica 2 server een grotere wereld, meer spelers of extra content gebruikt, heb je mogelijk vanaf het begin meer resources nodig.
:::

</details>

<details>
  <summary>Hoge resourcebelasting door mods of extra content</summary>

Zelfs als extra content de server niet laat crashen, kan het toch serieuze prestatieproblemen veroorzaken. Slecht geoptimaliseerde content kan CPU-gebruik verhogen, te veel geheugen verbruiken of herhaalde achtergrondprocessen triggeren.

Een goede testmethode is prestaties vergelijken met en zonder de toegevoegde content. Als de server normaal presteert met minimale setup, voeg dan content geleidelijk weer toe tot het probleem terugkomt.

Deze aanpak is vooral nuttig als:

- lag begon na installatie van nieuwe content
- de server na verloop van tijd onstabiel wordt
- prestatie alleen in bepaalde gebieden of situaties daalt
- gebruik stijgt zonder duidelijke configuratiewijzigingen

</details>

<details>
  <summary>Grote wereld of langlopende save veroorzaakt vertraging</summary>

Naarmate een serverwereld groeit en meer spelers actief zijn, kan de prestatie afnemen. Dit komt vaak voor bij langlopende servers met veel opgeslagen werelddata.

Als je merkt dat de prestaties aanvankelijk goed waren maar later verslechterden, overweeg dan het volgende:

- test of een nieuwere backup beter presteert
- controleer of er te veel spelers tegelijk actief zijn
- verwijder onnodige extra content
- kijk of het probleem zich in slechts één specifieke wereld voordoet

Als een verse testwereld aanzienlijk beter draait, ligt de vertraging waarschijnlijk aan wereldgrootte of savecomplexiteit.

</details>

### Netwerkproblemen

Netwerkproblemen beïnvloeden hoe spelers verbinding maken met en interacteren op je server. Deze problemen uiten zich als hoge ping, rubberbanding, disconnects of volledige onbereikbaarheid.

<details>
  <summary>Pingpieken, lag en netwerkvertraging</summary>

Pingpieken en netwerkvertraging worden vaak veroorzaakt door een combinatie van serverbelasting en routeringscondities. Zelfs als de game online is, kunnen overbelaste hardware of grote geografische afstand een slechte ervaring veroorzaken.

Veelvoorkomende oorzaken zijn:

- serverlocatie is ver van de spelersbasis
- de server heeft hoge CPU- of geheugendruk
- veel spelers zijn tegelijk verbonden
- achtergrondtaken of andere processen gebruiken resources
- tijdelijke routerings- of pakketverliesproblemen tussen spelers en server

Verbeter netwerkkwaliteit door het volgende te controleren:

| Controle | Resultaat |
| --- | --- |
| Kies een locatie dicht bij je spelers | Lagere gemiddelde latency |
| Verminder onnodige serverbelasting | Minder lagpieken tijdens gameplay |
| Houd de server up-to-date | Betere stabiliteit en compatibiliteit |
| Test op verschillende tijden | Helpt tijdelijke routeringsproblemen te identificeren |

Als het probleem slechts één speler treft, ligt het waarschijnlijk aan die speler zijn verbinding. Als alle spelers last hebben, is de oorzaak waarschijnlijk server- of routeringsgerelateerd.

</details>

<details>
  <summary>Spelers disconnecten willekeurig</summary>

Willekeurige disconnects kunnen komen door onstabiele routering, overbelaste serverresources of tijdelijke software-instabiliteit. Als spelers zonder duidelijke reden uit de server worden gegooid, vergelijk dan de timing van disconnects met consoleberichten en prestatiepieken.

Controleer:

- of disconnects optreden tijdens piekbelasting
- of de server kort herstart of bevriest
- of alle spelers tegelijk disconnecten of alleen individuele gebruikers
- of het probleem begon na een recente update of configuratiewijziging

Als alle spelers tegelijk disconnecten, ligt het meestal aan de server of netwerkroute. Als slechts één speler disconnect, is de oorzaak vaak lokaal bij die speler.

</details>

<details>
  <summary>DDoS-aanvallen en andere netwerkbedreigingen</summary>

Gameservers kunnen soms doelwit zijn van kwaadaardig verkeer, zoals Distributed Denial of Service-aanvallen. Deze aanvallen kunnen lag, verbindingsfouten of tijdelijke downtime veroorzaken.

ZAP-Hosting biedt DDoS-bescherming voor gehoste diensten, wat helpt de impact van veelvoorkomende en geavanceerde aanvalspatronen te verminderen. Als je vermoedt dat je Subnautica 2 server wordt aangevallen, neem dan contact op met support en geef zoveel mogelijk details, zoals:

- wanneer het probleem begon
- of alle spelers last hebben
- of de server volledig onbereikbaar wordt
- of het probleem op specifieke tijden terugkeert

:::info Ingebouwde Bescherming
DDoS-mitigatie wordt op infrastructuurniveau afgehandeld. Als je kwaadaardig verkeer vermoedt, hoef je meestal geen serverinstellingen te wijzigen. Verzamel symptomen en neem contact op met support.
:::

</details>

### Gameplay-gerelateerde serverproblemen

Sommige problemen zijn geen directe crashes of netwerkfouten, maar beïnvloeden toch of het spel correct werkt voor spelers.

<details>
  <summary>Versieverschil tussen client en server</summary>

Als spelers niet kunnen joinen na een game-update, draaien de server en gameclient mogelijk verschillende versies. Dit komt vooral voor kort na patches.

Zo los je het op:

1. Controleer of de server is bijgewerkt
2. Herstart de server na de update
3. Zorg dat spelers hun gameclient hebben bijgewerkt
4. Test de verbinding opnieuw

Als slechts sommige spelers kunnen joinen, vergelijk dan eerst hun gameversie met de serverversie.

</details>

<details>
  <summary>Wijzigingen worden niet toegepast na het aanpassen van instellingen</summary>

Als je configuratiewaarden hebt aangepast maar er lijkt niets te veranderen in de game, gebruikt de server mogelijk nog gecachte of ongewijzigde runtimegegevens, of is het bewerkte bestand niet het actieve bestand.

Controleer:

- dat het juiste bestand is aangepast
- dat de waarden succesvol zijn opgeslagen
- dat de server volledig is herstart daarna
- dat de gewijzigde instelling wordt ondersteund door jouw geïnstalleerde versie

Als het exacte configuratiegedrag onduidelijk is voor jouw Subnautica 2 versie, vermijd gokken en test wijzigingen één voor één zodat je duidelijk ziet wat effect heeft.

</details>

## Preventieve maatregelen

Problemen voorkomen is meestal makkelijker dan ze oplossen nadat ze je spelers raken. Een paar regelmatige onderhoudsstappen kunnen de stabiliteit flink verbeteren.

### Aanbevolen onderhoudslijst

Gebruik deze checklist om de kans op toekomstige problemen te verkleinen:

| Taak | Waarom je dit moet doen |
| --- | --- |
| Maak regelmatige backups | Beschermt je wereld en configuratie tegen dataverlies |
| Update de server zorgvuldig | Vermindert bugs en versie mismatch problemen |
| Test wijzigingen één voor één | Maakt troubleshooting makkelijker als iets fout gaat |
| Monitor prestaties na wijzigingen | Helpt stijgend CPU- of geheugengebruik vroeg te signaleren |
| Houd alleen noodzakelijke content geïnstalleerd | Vermindert compatibiliteits- en prestatieproblemen |

### Gebruik regelmatig backups

Regelmatige backups besparen veel tijd en voorkomen permanent dataverlies. Als een configuratiewijziging, update of wereldprobleem problemen veroorzaakt, kun je een bekende werkende staat terugzetten in plaats van alles handmatig opnieuw te bouwen.

Je kunt de beschikbare [backupoplossing](gameserver-backups.md) gebruiken om handmatige of geplande backups voor je gameserver te maken.

:::tip Backup Voor Risicovolle Wijzigingen
Maak een backup voordat je de server update, belangrijke bestanden aanpast of nieuwe mods en content toevoegt. Zo heb je een veilige rollback-optie als er nieuwe problemen ontstaan.
:::

<InlineVoucher />

## Conclusie

Gefeliciteerd, je hebt succesvol veelvoorkomende problemen op je Subnautica 2 gameserver opgelost. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat!