---
id: hytale-profiler-spark
title: "Hytale: Spark Profiler – Vind Performance Bottlenecks"
description: "Gebruik de Spark mod om prestatieproblemen te diagnosticeren en lag oorzaken op je Hytale server te identificeren → Leer nu meer"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introductie

Prestatieproblemen zoals lage TPS (ticks per seconde), lag spikes of haperingen kunnen de game-ervaring op je Hytale server flink verpesten. De oorzaak van deze problemen handmatig vinden is lastig zonder gedetailleerde diagnostiek.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

De **Spark** profiler mod geeft server-eigenaren een krachtig hulpmiddel om de serverprestaties te analyseren. Zodra geïnstalleerd kan Spark data verzamelen over CPU-gebruik, tick-tijden, server health metrics en meer, en gedetailleerde rapporten genereren die precies laten zien waar de performance bottlenecks zitten. Dit maakt het een onmisbare tool voor troubleshooting en optimalisatie, vooral bij grotere of drukke Hytale werelden.

<InlineVoucher />

## Wat Spark doet

Spark biedt meerdere profiling mogelijkheden:

- **Performance profiling** – registreert serveractiviteit en identificeert trage ticks of hoog CPU-gebruik  
- **Server health metrics** – toont tickduur, TPS, CPU- en geheugengebruik  
- **Interactieve rapporten** – genereert een web-based rapport dat je in je browser kunt bekijken  
- **Lichtgewicht en gebruiksvriendelijk** – ontworpen om minimale impact te hebben terwijl het nuttige data verzamelt  

## Spark installeren

Spark wordt verspreid via CurseForge en geïnstalleerd als mod. Je kunt mods installeren via onze Mods Installer of via FTP. Meer info vind je in onze [Mods installeren](http://localhost:3000/guides/docs/hytale-mods) gids. Na installatie herstart je de Hytale server.

<Button label="Download Spark" link="https://www.curseforge.com/hytale/mods/spark" block />

## De profiler starten

Na het installeren van Spark en het opstarten van je server, open je de **Live Console** tab in je game server dashboard of gebruik je de in-game chat als je de juiste permissies hebt. Om te beginnen met het verzamelen van prestatiegegevens, start je de profiler met het volgende commando:

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

Zodra gestart, begint Spark met het opnemen van gedetailleerde serveractiviteit zoals tickduur, CPU-gebruik en thread uitvoering. De profiler moet draaien terwijl de server het probleem ervaart dat je wilt analyseren, bijvoorbeeld tijdens piekuren of lag spikes. Meestal is 30 tot 60 seconden genoeg om bruikbare data te verzamelen.

Terwijl de profiler draait, kun je live resultaten bekijken met:

```
/spark profiler open
```

Dit commando genereert een weblink in de console of chat output. Open deze link in je browser om een live overzicht te zien van de profiling data, inclusief tick grafieken en workload verdeling.

Als er genoeg data is verzameld, stop je de profiler met:

```
/spark profiler stop
```

Na het stoppen genereert Spark een eindrapport link. Dit rapport bevat de volledige dataset van de sessie en kan in een browser geopend of gedeeld worden voor verdere analyse.

Wil je de huidige profiling sessie annuleren en opnieuw beginnen, dan reset je de profiler met:

```
/spark profiler cancel
/spark profiler start
```

Dit wist de bestaande data en start direct een nieuwe profiling run.

## Profiler resultaten analyseren

Het Spark profiler rapport geeft een gedetailleerd overzicht van hoe server resources worden gebruikt. Een van de belangrijkste onderdelen is de tick timeline, die laat zien hoe lang individuele ticks duren. Consistent lange ticks wijzen vaak op zware workloads die direct invloed hebben op TPS en gameplay smoothness.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

De profiler toont ook **hotspots**, waarmee je ziet welke functies of systemen het meeste van de resources gebruiken. Deze inzichten maken het makkelijker om te bepalen of performance issues veroorzaakt worden door specifieke mods, spelersgedrag, wereldmechanieken of serverconfiguratie.

Spark rapporten zijn makkelijk te delen. Als je hulp zoekt bij support teams of andere admins, kun je de profiler link delen zodat zij direct de data kunnen bekijken en gerichte tips kunnen geven.

## Conclusie

De Spark profiler mod voor Hytale is een superhandige tool om prestatieproblemen te diagnosticeren en de echte oorzaak van server lag te vinden. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />