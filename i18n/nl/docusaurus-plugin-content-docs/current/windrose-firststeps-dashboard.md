---
id: windrose-firststeps-dashboard
title: "Windrose: Dashboard Overzicht"
description: "Ontdek het ZAP-Hosting Windrose dashboard en leer hoe je je gameserver hosting beheert, prestaties monitort en belangrijke bedieningsfuncties efficiënt gebruikt -> Leer nu meer"
sidebar_label: Dashboard
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Het **Windrose** dashboard is het centrale punt voor het beheren van je game server in de ZAP-Hosting webinterface. In deze gids krijg je een gestructureerd overzicht van de beschikbare dashboardsecties en leer je hoe je de belangrijkste beheer-, monitoring- en hostingtools efficiënt gebruikt.

<InlineVoucher />

## Productbeheer

In het gebied **Productbeheer** vind je de belangrijkste pagina’s voor het aansturen en monitoren van je **Windrose** server. Deze pagina’s helpen je de huidige serverstatus te beheren, technische gebeurtenissen te bekijken en snel toegang te krijgen tot essentiële service-informatie.

### Dashboard

Het **Dashboard** is de hoofdoverzichtspagina van je **Windrose** server. Hier vind je meestal in één oogopslag de belangrijkste servicegegevens, zoals de huidige serverstatus, locatie, verbindingsadres en resourcegebruik.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

Afhankelijk van de huidige serverconfiguratie en game-integratie kan het dashboard ook extra informatie tonen, zoals de actieve map, servernaam, gebruikt geheugen of het gebruik van spelersslots. Hier kun je ook direct je service starten, stoppen of herstarten.

Het dashboard is vooral handig omdat het serverbeheer en monitoring op één plek combineert. Zo kun je snel controleren of je service online is en direct reageren als er aanpassingen nodig zijn.

### Statistieken

Onder **Statistieken** kun je de historische gebruiksgegevens van je server bekijken. Dit helpt je beter te begrijpen hoe je **Windrose** hostingdienst in de loop van de tijd presteert.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

De beschikbare grafieken bevatten meestal waarden zoals CPU-gebruik, geheugengebruik en slotbezetting. Je kunt vaak wisselen tussen verschillende tijdsperioden om kortdurende pieken of langetermijntrends te analyseren.

| Metriek | Doel |
| --- | --- |
| CPU-gebruik | Helpt je de verwerkingsbelasting en mogelijke prestatieknelpunten te identificeren |
| Geheugengebruik | Toont hoeveel RAM je server gebruikt |
| Slotbezetting | Geeft aan hoeveel beschikbare spelersslots actief worden gebruikt |

:::tip Prestatie-analyse
Als je lag, crashes of trage reactietijden opmerkt, is de statistiekpagina een van de beste plekken om te beginnen met het oplossen van problemen. Het kan je helpen bepalen of het probleem gerelateerd is aan resourcegebruik of alleen op een specifiek moment optrad.
:::

### DDoS Manager

De **DDoS Manager** stelt je in staat om informatie te bekijken over gedetecteerde en afgewende DDoS-aanvallen op je service. Dit kan nuttig zijn als je ongebruikelijke verkeerspatronen wilt begrijpen of storingen door kwaadaardig verkeer wilt onderzoeken.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

Afhankelijk van je geboekte opties en de beschikbare bescherming op je gekozen locatie, kun je mogelijk ook actieve aanvalsinformatie en verkeersdetails in realtime bekijken.

:::info Beschikbaarheid DDoS Manager
De DDoS Manager is alleen beschikbaar als je service een dedicated IP-adres bevat of de extra optie **DDoS Manager Overview** heeft. Als dit niet in je huidige pakket zit, moet je je service eerst upgraden.
:::

### Logbestanden

Als je **Windrose** server fouten toont of zich onverwacht gedraagt, is de sectie **Logbestanden** een van de belangrijkste plekken om te controleren. Logbestanden bevatten technische output van de server en kunnen waarschuwingen, opstartberichten en foutdetails bevatten.

Deze bestanden zijn vooral nuttig als je de oorzaak van crashes, mislukte opstarts of configuratieproblemen wilt achterhalen.

:::caution Beperkingen bij logcontrole
Als de logoutput onduidelijk is of je niet helpt het probleem te identificeren, neem dan contact op met de support via de officiële [supportpagina](https://zap-hosting.com/en/customer/support/). Voeg een duidelijke omschrijving van het probleem en relevante logberichten toe om het oplossen te versnellen.
:::

### Gebeurtenislog

De **Gebeurtenislog** geeft je een overzicht van acties en gebeurtenissen gerelateerd aan je service. Dit kan serverstarts, stops, crashes, installaties, updates en back-up activiteiten omvatten.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

Deze sectie is vooral handig als je wilt controleren wanneer een wijziging heeft plaatsgevonden of of een geautomatiseerde taak succesvol is uitgevoerd.

### Live Console

De **Live Console** toont realtime serveroutput terwijl je **Windrose** server draait. Hiermee kun je monitoren wat er op dat moment op de server gebeurt en direct problemen detecteren.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Als de serversoftware dit ondersteunt, kun je ook direct commando’s via de live console versturen. Dit is handig voor beheertaken die uitgevoerd moeten worden zonder de service te herstarten.

| Functie | Beschrijving |
| --- | --- |
| Realtime output | Toont actuele servergebeurtenissen en berichten |
| Foutzichtbaarheid | Helpt je problemen direct te herkennen |
| Commando-invoer | Laat je ondersteunde servercommando’s direct versturen |

### Serviceonderbrekingen

Als je server tijdelijk niet beschikbaar was en er geen duidelijke oorzaak in de gebeurtenislog of logbestanden staat, kan het probleem te maken hebben met het onderliggende hostsysteem in plaats van je individuele service.

In de sectie **Serviceonderbrekingen** kun je de onderbrekingsgeschiedenis bekijken die verband houdt met de hostomgeving van je gameserver. Voor bredere platformstatusinformatie kun je ook de officiële [statuspagina](https://status.zap-hosting.com/) raadplegen.

## Instellingen

Het gebied **Instellingen** bevat de belangrijkste configuratiepagina’s voor je **Windrose** server. Hier kun je het gedrag van de service aanpassen, geïnstalleerde games wijzigen waar ondersteund, updates beheren en automatiseringsfuncties configureren.

### Instellingen

De pagina **Instellingen** biedt een vereenvoudigd overzicht van veelvoorkomende serveropties. Dit is vooral handig als je nieuw bent in game server hosting en wijzigingen wilt aanbrengen zonder direct configuratiebestanden te bewerken.

Als beschikbaar voor **Windrose**, kunnen deze opties gameplay-gerelateerde instellingen of andere veelvoorkomende serviceparameters bevatten. De exacte opties kunnen variëren afhankelijk van de huidige game-integratie.

### Configs

De sectie **Configs** stelt je in staat om configuratiebestanden direct via de webinterface te bewerken. Dit geeft je meer precieze controle dan de vereenvoudigde instellingenpagina en is doorgaans beter geschikt voor gevorderde gebruikers.

:::caution Overschreven waarden
Sommige waarden kunnen worden beheerd via de vereenvoudigde **Instellingen** pagina. Als je merkt dat bepaalde handmatige wijzigingen in de config-editor worden overschreven, controleer dan of dezelfde optie daar nog steeds wordt aangestuurd.
:::

### Games

Onder **Games** kun je wisselen naar een andere beschikbare game of gamevariant als je service dit ondersteunt. Games met dezelfde slotprijs kunnen meestal direct worden geselecteerd, terwijl andere games mogelijk eerst een pakketaanpassing vereisen.

Als je meer wilt weten over het wijzigen van de geïnstalleerde game op je service, raadpleeg dan de gids [Game Change](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versies

De pagina **Versies** stelt je in staat om de geïnstalleerde serverversie voor je **Windrose** service te beheren, als versiebeheer wordt ondersteund. Je kunt meestal updaten naar de nieuwste beschikbare versie en automatische updates inschakelen.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Automatische updates helpen je hostingomgeving up-to-date te houden, maar je moet compatibiliteit na grote versie-updates altijd controleren.

### Geplande Taken

Met **Geplande Taken** kun je terugkerende acties voor je server automatiseren. Dit is handig als je handmatig beheer wilt verminderen en je service consistent wilt laten draaien.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Veelvoorkomende geautomatiseerde acties zijn onder andere:

| Taaktype | Voorbeeldgebruik |
| --- | --- |
| Service starten | Server automatisch starten op een specifiek tijdstip |
| Service stoppen | Server afsluiten tijdens onderhoudsvensters |
| Service herstarten | Routine-herstarts voor stabiliteit uitvoeren |
| Backup maken | Regelmatig backups maken zonder handmatige actie |
| Aangepaste commando’s | Ondersteunde commando’s automatisch uitvoeren |

### Herstartplanner

De **Herstartplanner** is speciaal ontworpen voor het plannen van automatische serverherstarts. Dit is handig als je je **Windrose** server regelmatig wilt herstarten, bijvoorbeeld tijdens uren met weinig activiteit.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-instellingen

Met **DNS-instellingen** kun je een gebruiksvriendelijker adres aan je service toewijzen. Dit maakt je server makkelijker te onthouden en te delen met andere spelers.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

Afhankelijk van je setup en geboekte opties kun je mogelijk een ZAP-provided subdomein of je eigen domein gebruiken.

## Tools

De sectie **Tools** bevat extra servicebeheerfuncties die ondersteuning bieden voor bestandsbeheer, databasebeheer en backupafhandeling.

### FTP Browser

In de **FTP Browser** vind je de verbindingsgegevens die nodig zijn om toegang te krijgen tot je serverbestanden. FTP-toegang is handig als je bestanden direct wilt uploaden, downloaden of bewerken.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

Voor eenvoudiger bestandsbeheer wordt het aanbevolen een externe FTP-client te gebruiken, zoals [FileZilla](https://filezilla-project.org/) of [WinSCP](https://winscp.net/). Als je hulp nodig hebt bij het verbinden, bekijk dan de gids [Toegang via FTP](gameserver-ftpaccess.md).

### Databases

Onder **Databases** kun je de databases aanmaken en beheren die bij je gameserverproduct horen, indien vereist door je setup. Dit is nuttig voor services, mods of tools die gestructureerde dataopslag nodig hebben.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

Je kunt meestal de toegangsgegevens bekijken, nieuwe databases aanmaken en bestaande backups importeren vanuit deze sectie.

### Backups

De sectie **Backups** stelt je in staat backups te maken en te beheren voor je server en, waar ondersteund, de bijbehorende databasegegevens.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Regelmatige backups worden sterk aanbevolen omdat ze je in staat stellen je service te herstellen na configuratiefouten, bestandsbeschadiging of onverwachte problemen.

:::tip Backup Best Practice
Maak een handmatige backup voordat je grote wijzigingen doorvoert, zoals het bewerken van configuratiebestanden, wisselen van versies of het veranderen van de geïnstalleerde game. Zo heb je een veilig herstelpunt als er iets misgaat.
:::

## Verdere Links

De sectie **Verdere Links** biedt extra bronnen gerelateerd aan je service en het algemene gebruik van het ZAP-Hosting platform.

### Veelgestelde Vragen

Het gebied **Veelgestelde Vragen** bevat antwoorden op veelvoorkomende onderwerpen gerelateerd aan je service. Dit kan je helpen typische problemen sneller op te lossen zonder support te hoeven contacteren.

### ZAP-Hosting Documentatie

De **ZAP-Hosting Documentatie** geeft je toegang tot een brede kennisbank over serverbeheer, hostingconfiguratie, probleemoplossing en aanverwante onderwerpen. Als je op zoek bent naar meer geavanceerde gidsen naast dit **Windrose** dashboard overzicht, is dit de beste plek om verder te lezen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nieuws

De sectie **Nieuws** bevat aankondigingen die relevant zijn voor je service. Dit kan technische meldingen, onderhoudsinformatie, functiewijzigingen en andere belangrijke updates omvatten.

Door deze sectie regelmatig te checken blijf je op de hoogte van veranderingen die je **Windrose** server hostingomgeving kunnen beïnvloeden.

<InlineVoucher />

## Conclusie

Je hebt nu een compleet overzicht van de belangrijkste gebieden van het **Windrose** dashboard in het ZAP-Hosting paneel, van servermonitoring en logs tot instellingen, tools en automatiseringsfuncties. Deze kennis helpt je om je hostingdienst efficiënter te navigeren en je server met meer vertrouwen te beheren.

Gefeliciteerd, je hebt met succes geleerd hoe je het Windrose dashboard gebruikt. Voor verdere vragen of hulp kun je altijd contact opnemen met onze supportafdeling, die dagelijks voor je klaarstaat! 🙂