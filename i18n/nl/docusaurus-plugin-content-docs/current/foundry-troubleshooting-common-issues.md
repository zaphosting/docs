---
id: foundry-troubleshooting-common-issues
title: "Foundry: Veelvoorkomende problemen"
description: "Ontdek hoe je veelvoorkomende problemen met je Foundry game server oplost voor een soepele game-ervaring → Leer het nu"
sidebar_label: Veelvoorkomende problemen
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introductie

Je eigen Foundry game server opzetten en draaien is supertof en kan veel plezier opleveren. Het is een toffe manier om een custom game-omgeving en community te bouwen, maar het betekent ook dat jij verantwoordelijk bent als er iets misgaat. Crashes, lag en configuratiefouten zijn problemen waar elke server-eigenaar vroeg of laat mee te maken krijgt.

Om ervoor te zorgen dat je minder tijd kwijt bent aan fixen en meer tijd hebt om te gamen, zetten we hier de meest voorkomende issues op een rijtje met oplossingen die je snel en effectief helpen.

<InlineVoucher />

## Problemen en oplossingen

De oorzaak van serverproblemen kan verschillen en is vaak niet meteen duidelijk. Leer stap voor stap hoe je typische issues aanpakt en houd je server soepel draaiende.

### Algemeen
Algemene problemen kunnen van alles zijn wat niet in een specifieke categorie past. Vaak gaat het om basisinstellingen, missende bestanden of simpele misconfiguraties. Meestal los je dit snel op met een paar checks en aanpassingen.

<details>
  <summary>Server niet zichtbaar</summary>

Als je server niet zichtbaar is, kan dat komen doordat de initialisatie niet goed is afgerond. Bijvoorbeeld door een foutieve configuratie of corrupte bestanden. Meestal vind je meer info in de serverconsole of logbestanden. Check ook of er geen verkeerde filterinstellingen in de serverlijst staan die ervoor zorgen dat je server niet getoond wordt.

</details>

### Crashes

Niets verpest een sessie sneller dan een onverwachte crash. Crashes kunnen komen door foutieve serversoftware, kapotte of incompatibele extensies (zoals plugins, mods, resources of frameworks), systeemoverbelasting of misconfiguraties.

<details>
  <summary>Houd je server up-to-date</summary>

Je game server draaien op de nieuwste versie is essentieel voor stabiliteit, veiligheid en compatibiliteit. Game-updates, framework-wijzigingen of aanpassingen aan tools van derden kunnen serieuze problemen veroorzaken als je server verouderd is.

Een verouderde server kan crashes krijgen, onverwacht gedrag vertonen of zelfs helemaal niet meer starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/JXLHyHeMJqErHLJ/preview)

</details>

<details>
  <summary>Foutieve/problematische extensies (Frameworks, Plugins, Mods, Resources)</summary>

Crashes worden vaak veroorzaakt door foutieve of verouderde extensies. Of het nu een framework, plugin, mod of resource is, problemen ontstaan als een extensie niet compatibel is met de nieuwste gameversie of bugs bevat.

Dit kan leiden tot onverwachte crashes, vastlopers of fouten, vooral als meerdere problematische extensies samenkomen. Denk je dat een extensie de boosdoener is? Zet ‘m dan tijdelijk uit en kijk of je server stabiel blijft. Zo vind je snel welke extensie problemen geeft.

Zorg dat alle extensies die je gebruikt up-to-date zijn, actief onderhouden worden en getest zijn op compatibiliteit met jouw gameversie om crashes en downtime te voorkomen.

Om de oorzaak van crashes te isoleren, is het vaak handig om extra content tijdelijk uit te schakelen. Begin met een minimale setup en check of het probleem blijft. Verdwijnt het, voeg dan extensies, mods of resources één voor één weer toe en test na elke stap. Zo vind je precies wat de boosdoener is. Deze aanpak werkt efficiënt en voorkomt dat je op aannames afgaat.

</details>

### Performance

Een soepele server is key voor een goede game-ervaring. Problemen zoals lag, vertragingen of plotselinge crashes ontstaan vaak door een suboptimale serverconfig, hardware die niet voldoet aan de eisen, of overbelasting door extensies.

Typische oorzaken zijn slechte configuratie, missende resources of niet-geoptimaliseerde plugins en mods. Check en pas deze punten aan om de meeste performance-problemen te fixen en je game stabiel en responsief te houden.

<details>
  <summary>Slechte serverconfiguratie</summary>

Foute of slecht ingestelde serverinstellingen kunnen zorgen voor hogere resourcebelasting en performanceproblemen zoals lag of haperingen. Zorg dat je configuratiewaarden overeenkomen met de aanbevolen instellingen voor jouw game en servergrootte. Pas ze aan waar nodig om je server zo efficiënt mogelijk te laten draaien.

Je kunt je configuratie aanpassen via de **Instellingen** sectie of direct in de configuratiebestanden onder **Configs** in je webinterface.

</details>

<details>
  <summary>Niet voldoen aan de game-eisen</summary>

Voor een soepele en betrouwbare server is het belangrijk dat je configuratie aansluit bij de eisen van je project. Die eisen verschillen per game, het gebruik van extensies zoals mods, plugins of resources, en het aantal spelers.

ZAP-Hosting geeft tijdens het bestelproces een aanbevolen minimumconfiguratie. Die is gebaseerd op typische gebruiksscenario’s en helpt je om veelvoorkomende performanceproblemen zoals lag, crashes of lange laadtijden te voorkomen.

![img](https://screensaver01.zap-hosting.com/index.php/s/87ADJdwNAXxXxdk/preview)

Volg deze aanbevelingen of schaal op waar nodig om optimale stabiliteit en de beste ervaring voor jou en je spelers te garanderen. Dit is een minimumadvies.

Afhankelijk van de omvang van je project en extra content kunnen de benodigde resources vanaf het begin al hoger zijn of in de loop van de tijd toenemen. In dat geval is upgraden van je game server pakket een makkelijke manier om performance en stabiliteit te waarborgen.

</details>

<details>
  <summary>Niet-geoptimaliseerde extensies (Frameworks, Plugins, Mods, Resources)</summary>

Niet alle extensies zijn gebouwd met performance in gedachten. Of het nu een framework, plugin, mod of resource is, een slechte implementatie kan flinke performanceproblemen veroorzaken. Vaak werkt de functionaliteit wel, maar is de uitvoering inefficiënt, te complex of zorgt het voor onnodige belasting van serverresources.

Dit kan leiden tot hoge CPU-belasting, geheugenlekken, lag of zelfs crashes, vooral als meerdere niet-geoptimaliseerde componenten samenwerken. Zorg dat extensies actief onderhouden worden, goed gedocumenteerd zijn en getest op performance. Check bij twijfel de communityfeedback of monitor je server om problematische onderdelen te vinden.

Om de oorzaak van performanceproblemen te isoleren, is het handig om extra content tijdelijk uit te schakelen. Begin met een minimale setup en kijk of het probleem blijft. Verdwijnt het, voeg dan extensies, mods of resources één voor één weer toe en test na elke stap. Zo vind je precies wat de boosdoener is, of het nu een conflict, geheugenlek of te hoge resourcebelasting is.

Deze methode werkt efficiënt en zorgt dat je troubleshooting op feiten gebaseerd is, niet op aannames.

</details>

### Netwerk
Netwerkproblemen kunnen zorgen voor lag, vertragingen of disconnects. De oorzaken verschillen, maar meestal zijn ze met de juiste instellingen en beveiliging op te lossen.

<details>
  <summary>Ping spikes, lag en netwerkvertraging</summary>

Ping spikes, lag en netwerkvertraging ontstaan vaak door beperkte serverresources, zoals te weinig CPU, RAM of bandbreedte.

Ze kunnen ook optreden als de server overbelast is door veel spelers of zware scripts en plugins. Netwerkproblemen zoals slechte routing, externe overbelasting of een server die ver weg staat van de spelers kunnen de latency verder verhogen.

Daarnaast kunnen achtergrondprocessen, instabiele internetverbindingen, packet loss en verouderde of foutief geconfigureerde serversoftware ook zorgen voor merkbare performanceproblemen tijdens het gamen.

Heb je last van lag of hoge ping? Check eerst of je server voldoet aan of beter is dan de aanbevolen specs voor jouw game en project. Kies ook een serverlocatie dicht bij je spelers om latency te verminderen.

Denk je dat routingproblemen of externe netwerkissues de oorzaak zijn? Neem dan contact op met onze support. Zij helpen je de situatie analyseren en de beste oplossing vinden.

</details>

<details>
  <summary>DDoS en andere netwerkdreigingen</summary>

Game servers kunnen soms doelwit zijn van kwaadaardige netwerkactiviteiten, vooral Distributed Denial of Service (DDoS) aanvallen. Die overstromen de server met verkeer, wat lag, disconnects of zelfs downtime veroorzaakt. Soms proberen aanvallers netwerkzwaktes te misbruiken of serverstabiliteit te verstoren met herhaalde connectiepogingen of vreemde datapatronen.

Hoewel de meeste van deze dreigingen buiten jouw controle liggen, biedt ZAP-Hosting ingebouwde bescherming en mitigatiesystemen om je server te beschermen tegen veelvoorkomende en geavanceerde aanvallen. Denk je dat je server aangevallen wordt en dat dit problemen veroorzaakt? Neem dan contact op met onze support voor hulp en advies.

</details>

## Preventieve maatregelen

Regelmatige backups besparen je veel stress en zorgen. Maak regelmatig backups zodat je bij problemen altijd een oudere werkende versie hebt. Wij bieden een [backup oplossing](gameserver-backups.md) voor onze Foundry game servers, waarmee je handmatig of automatisch backups kunt maken.

<Button label="Ga naar ZAP-Storage" link="https://zap-hosting.com/en/customer/home/storage/" block/>

## Conclusie

Met deze stappen los je de meeste problemen op. Staat jouw issue hier? Dan wijst de bijbehorende oplossing je meestal al de juiste kant op om weer aan de slag te kunnen.

Lukt het niet? Neem dan vooral contact op met onze support, die dagelijks voor je klaarstaat om je verder te helpen! 🙂

<InlineVoucher />