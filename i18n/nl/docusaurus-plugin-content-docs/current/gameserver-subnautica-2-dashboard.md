---
id: gameserver-subnautica-2-dashboard
title: "Gameserver - Subnautica 2 - Dashboard"
description: "Ontdek hoe je jouw Subnautica 2-server beheert met het ZAP-Hosting dashboard, de hostingprestaties monitort en toegang krijgt tot belangrijke zap webbeheerfuncties -> Leer het nu"
sidebar_label: Gameserver - Subnautica 2 - Dashboard
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Je bent geïnteresseerd in een **Subnautica 2** server of hebt er al één, maar mist nog een duidelijk overzicht van het beheer en het vinden van alle benodigde opties? Vooral in het begin kan dat best lastig zijn. Geen zorgen, deze gids geeft je een gedetailleerde introductie in het beheer van jouw service zodat je het beste overzicht krijgt.

Na het doorlopen van deze gids kun je jouw server eenvoudig en efficiënt beheren en vind je alle benodigde opties en functies snel en makkelijk terug. Je krijgt hier een gestructureerd overzicht dat je stap voor stap helpt vertrouwd te raken met het serverbeheer en je kennis gericht uit te breiden. Zo zorg je ervoor dat jouw **Subnautica 2** server optimaal is afgestemd op jouw wensen en haal je het maximale uit de beschikbare opties in het **ZAP-Hosting** paneel.

<InlineVoucher />

## Productbeheer

In het onderdeel **Productbeheer** vind je alle benodigde pagina’s om jouw server te beheren. De opties voor het beheren van je server worden hieronder gedetailleerd opgesomd.

### Dashboard

Het **Dashboard** van je server is het hart van het beheer. Hier worden alle basis- en essentiële informatie over jouw service overzichtelijk weergegeven. Dit omvat bijvoorbeeld informatie over de locatie, status, IP: Poort, gebruikt geheugen, lopend spel, servernaam, map en het aantal beschikbare slots. Daarnaast wordt ook het gebruik van CPU, geheugen en RAM getoond.

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

In het dashboard kun je ook je service starten, stoppen of herstarten om volledige controle te hebben over de werking. Verder heb je toegang tot de live console om realtime informatie over de serverstatus te krijgen en indien nodig direct in te grijpen.

### Statistieken

Onder **Statistieken** krijg je een uitgebreid overzicht van de belasting van je server. Je vindt hier informatie over verschillende aspecten zoals de belasting van de beschikbare slots, de CPU en het geheugen. Je kunt deze data bekijken voor verschillende tijdsperioden, bijvoorbeeld voor de laatste **60 minuten, 24 uur, 3 dagen, 7 dagen** of **30 dagen**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Dankzij deze informatie krijg je goed inzicht in het gebruik van je server. Daarnaast zijn deze statistieken vaak nuttig om mogelijke prestatieproblemen te identificeren en de oorzaken te achterhalen. Zo kun je bijvoorbeeld terugzien wanneer de belasting is toegenomen en of dit verband houdt met bepaalde gebeurtenissen of wijzigingen. Dit is vooral belangrijk bij plotselinge problemen, omdat je zo gerichte stappen kunt ondernemen om problemen op te lossen en systematisch mogelijke oorzaken te analyseren.

### DDoS Manager

Bekijk eerdere DDoS-aanvallen om bedreigingen en patronen beter in te schatten. Schakel meldingen in voor lopende DDoS-aanvallen op je server zodat je snel kunt reageren wanneer er een incident plaatsvindt.

Afhankelijk van de serverlocatie en de beschikbare DDoS-bescherming kun je ook actieve aanvallen realtime monitoren. Dit omvat gedetailleerde verkeersinzichten, waarbij zowel legitiem verkeer als de hoeveelheid verkeer die door de mitigatiesystemen wordt geblokkeerd, wordt getoond. Dit niveau van transparantie helpt je te begrijpen hoe de bescherming werkt en stelt je in staat potentiële risico’s vroegtijdig te herkennen.

:::info Toegang tot DDoS Manager Ontbreekt
Het gebruik van de DDoS Manager vereist ofwel een dedicated IP-adres of de extra optie `DDoS Manager Overview`. Als deze onderdelen niet in je huidige pakket zitten, kun je ze altijd toevoegen door je service te upgraden.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::caution Vereiste voor DDoS Manager
Het gebruik van de DDoS Manager is alleen mogelijk als je een eigen IP-adres hebt of de optie `DDoS Manager Overview` als extra optie hebt geboekt. Ontbreken deze onderdelen in je huidige pakket, dan kun je ze altijd toevoegen door te upgraden.
:::

### Logbestanden

Er doet zich een technisch probleem voor en je weet niet waar het door komt? Een eerste mogelijke oplossing is het controleren van de **Logbestanden**. Deze bestanden bevatten veel informatie over de server, zoals actuele gebeurtenissen, aanwijzingen of foutmeldingen.

Foutmeldingen kunnen vooral helpen om de oorzaak van een probleem te achterhalen en beter te begrijpen. Vaak kunnen problemen worden opgespoord en opgelost door gericht naar de logbestanden te kijken.

:::caution Hulp Nodig bij Logbestanden
Helpen de gevonden gegevens niet of begrijp je ze niet? Maak dan een **[Ticket](https://zap-hosting.com/en/customer/support/)** aan en leg je probleem uit. De support is dagelijks beschikbaar en kan je verder helpen met de analyse.
:::

### Gebeurtenislog

De **Gebeurtenislog** geeft je een compleet overzicht van alle activiteiten rondom het serverbeheer. Hier kun je op elk moment zien wanneer een server is gestart, gestopt of gecrasht, en wanneer updates, backups of nieuwe installaties zijn uitgevoerd.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live Console

De **Live Console** biedt je een realtime overzicht van alle actuele gebeurtenissen op je server. Hier zie je informatie over de activiteiten van spelers, mogelijke foutmeldingen en systeemberichten. Dit overzicht geeft je een compleet beeld van wat er op je server gebeurt en helpt je problemen vroegtijdig te signaleren.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Naast het monitoren van gebeurtenissen kun je ook direct commando’s naar de server sturen via de **Live Console**. Dit is handig om instellingen aan te passen, bepaalde acties uit te voeren of snel te reageren op problemen.

### Serviceonderbrekingen

Was je server tijdelijk offline en weet je niet waarom? Heeft een blik in de gebeurtenislog en logbestanden ook geen duidelijkheid gegeven? Mogelijk ligt de oorzaak niet direct bij jouw server, maar bij het host-systeem waarop je server draait.

Als het monitoringsysteem een algemene storing detecteert, worden technici automatisch geïnformeerd en pakken zij het probleem zo snel mogelijk aan.

In dit onderdeel vind je een overzicht van de onderbrekingsgeschiedenis van het host-systeem waarop jouw game server draait. Meer informatie en de actuele status vind je op de [statuspagina](https://status.zap-hosting.com/).

## Instellingen

In het onderdeel **Instellingen** vind je alle pagina’s die nodig zijn om je server te configureren. De beschikbare opties voor het instellen van je server worden hieronder gedetailleerd opgesomd.

### Instellingen

Onder **Instellingen** vind je een overzicht van de meest gebruikte configuratie-opties voor je server. Deze worden ook kort toegelicht. Het gebruik van de instellingenpagina wordt vooral aangeraden voor beginners in serverbeheer.

Ben je al wat ervaren en wil je nauwkeurigere aanpassingen doen, dan is het gebruik van de Config Editor aan te raden. Meer informatie hierover vind je in de categorie **Configs**.

### Configs

De config-bestandseditor stelt je in staat om de configuratiebestanden direct via de website te bewerken, op de klassieke manier zonder vereenvoudigde weergave. Hiermee kun je de instellingen van je server aanpassen en afstemmen op je persoonlijke voorkeuren.

Met de editor heb je directe toegang tot alle beschikbare opties en kun je deze precies instellen. Dit is vooral handig voor gevorderde gebruikers die volledige controle willen over hun serverinstellingen en precies weten welke wijzigingen ze willen doorvoeren.

:::caution Configwaarden Kunnen Overschreven Worden
Merk je dat sommige wijzigingen deels worden overschreven? Houd er rekening mee dat bepaalde opties worden overgenomen van de instellingenpagina. Wil je deze direct in de config aanpassen, dan moet je eerst de betreffende opties op de instellingenpagina uitschakelen.
:::

### Games

Onder **Games** kun je altijd de game-variant van je bestaande game wijzigen of een andere game installeren. Games met dezelfde slotprijs kun je direct selecteren onder **Beschikbare Games**. Voor alle andere games moet eerst de slotprijs worden aangepast. Meer informatie hierover vind je in de [Game Change](gameserver-gameswitch.md) gids.

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versies

Onder **Versies** kun je de huidige versie van je game server bekijken en beheren. Hier kun je op elk moment updaten naar de nieuwste versie of automatische updates inschakelen zodat je server altijd up-to-date blijft.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Daarnaast kun je ook e-mailmeldingen voor automatische updates inschakelen, zodat je altijd op de hoogte blijft van updates.

### Geplande Taken

Maak geplande taken aan die automatisch op bepaalde tijden worden uitgevoerd om processen op je server te automatiseren. Je kunt instellen of een taak één keer moet draaien of herhaald moet worden. Ondersteunde taaktypes zijn onder andere het starten, stoppen of herstarten van services, het herstarten van de server als deze online is, het maken van backups of het uitvoeren van aangepaste commando’s.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Herstartplanner

Wil je serverherstarts op vaste tijden plannen? Met de Herstartplanner kun je automatische herstarts van je game server inplannen. Hiermee stel je herstarts in op specifieke tijden of met regelmatige tussenpozen.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-instellingen

Met de ZAP DNS-instellingen maak je makkelijk te onthouden adressen voor je service aan. Je kunt een subdomein gebruiken van een van de beschikbare domeinen, of een DNS-record aanmaken op je eigen domein zodat je een adres hebt dat beter bij je project past.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

In het onderdeel **Tools** van je navigatiepaneel vind je verschillende subitems die je helpen bij het beheren van je server. Dit zijn onder andere **FTP Browser**, **Databases** en **Backups**. Hieronder krijg je een gedetailleerde introductie van deze verschillende onderdelen.

### FTP-Browser

Met de **FTP Browser** krijg je alle benodigde informatie om verbinding te maken met de FTP-toegang. De FTP-toegang geeft je directe toegang tot de bestanden van je game server. Voor optimaal gebruik wordt aangeraden een extern FTP-programma te gebruiken zoals [FileZilla](https://filezilla-project.org/) of [WinSCP](https://winscp.net/eng/index.php). Ben je niet bekend met FTP, dan kan de [Toegang via FTP](gameserver-ftpaccess.md) gids je helpen.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla is een van de eenvoudigste en bekendste FTP-clients. Na installatie start je het programma en voer je je inloggegevens in de bovenbalk in, zoals getoond in je paneel. Met een klik op verbinden ben je direct ingelogd op de server en kun je bestanden beheren.

**WinSCP:** WinSCP is vooral bedoeld voor SCP en SFTP, maar kan ook standaard FTP-verbindingen aan. Het programma is iets uitgebreider dan FileZilla en daardoor vaak beter geschikt voor gevorderde gebruikers.

### Databases

Naast game server producten zijn er ook 10 inbegrepen databases beschikbaar. Deze databases zijn bijvoorbeeld nodig wanneer data in een database opgeslagen moet worden. Onder **Databases** kun je een database aanmaken en de inloggegevens bekijken. Je kunt ook de backup-optie activeren en bestaande databasebackups importeren.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

Onder **Backups** kun je zowel handmatige als automatische backups maken van je server en de bijbehorende database. Dit maakt het makkelijker om je data te herstellen bij problemen of dataverlies.

In de instellingen kun je aangeven of backups automatisch gemaakt moeten worden en of dit dagelijks of wekelijks moet gebeuren. Daarnaast kun je bepalen of de oudste backups verwijderd mogen worden als dat nodig is, bijvoorbeeld wanneer de beschikbare opslagruimte beperkt raakt.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Standaard is er 10 GB opslagruimte op de opslagserver beschikbaar voor backups van game server producten. Heb je meer opslagruimte nodig, dan kan dit tegen betaling worden uitgebreid. Zo zorg je ervoor dat je altijd genoeg ruimte hebt voor je backups en ook oudere backups kunt bewaren.

## Verdere Links

In het onderdeel **Verdere Links** vind je extra links die relevant zijn voor jouw product.

### Veelgestelde Vragen

De sectie **Veelgestelde Vragen** geeft een overzicht van de meest gestelde vragen door klanten. Hier vind je handige antwoorden en uitgebreide informatie over diverse onderwerpen om je snel en efficiënt te helpen.

### ZAP-Hosting Documentatie

Er is uitgebreide documentatie beschikbaar voor de producten die dient als kennisbank voor de meest gestelde vragen en problemen. Hier vind je diverse handleidingen en hulp over verschillende onderwerpen die je ondersteunen bij het gebruik en beheer van je product.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nieuws

De sectie **Nieuws** geeft je een compleet overzicht van alle aankondigingen en nieuws rondom jouw service. Hier vind je belangrijke informatie over diverse zaken zoals:

- Wijzigingen aan de service, bijvoorbeeld door updates of nieuwe functies
- Aankondigingen over mogelijke onderhoudswerkzaamheden of technische problemen
- Speciale aanbiedingen en acties die je exclusieve voordelen of kortingen geven
- Andere relevante informatie die belangrijk kan zijn voor het gebruik van je service

Door regelmatig de **Nieuws** te checken blijf je op de hoogte en kun je je service aanpassen om het maximale uit je server te halen.

<InlineVoucher />

## Conclusie

Je hebt nu een compleet overzicht van de belangrijkste onderdelen van het **Subnautica 2** dashboard en weet waar je de centrale beheer-, configuratie-, tools- en informatiepagina’s in het **ZAP-Hosting** paneel kunt vinden.

Gefeliciteerd, je hebt succesvol geleerd hoe je het Subnautica 2 dashboard gebruikt. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat!