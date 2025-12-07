---
id: minecraft-bungeecord-config
title: "Minecraft: Bungeecord Server Configuratie Instellingen"
description: "Leer hoe je je BungeeCord server netwerkinstellingen optimaliseert en beheert voor betere performance en een soepelere spelerservaring → Ontdek het nu"
sidebar_label: Server Eigenschappen
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Waar heb ik een BungeeCord Configuratie voor nodig?

BungeeCord is het beheer van een bundel servers die verbonden zijn via een proxyserver (de BungeeCord server). Om het netwerk van deze servers aan te passen, moet het bestand *config.yml* worden bewerkt. Op deze pagina leer je precies wat elke instelling betekent en krijg je extra info over de impact op de sub-servers zoals PaperSpigot en Bukkit servers.

<InlineVoucher />

## Instellingen

### forge_support

De waarde kan op false of true worden gezet. Zet je deze op true, dan kunnen spelers met een Forge client (bedoeld voor modpacks) de server betreden. Zet je het op false, dan worden deze verbindingen geweigerd.

### player_limit

Deze waarde geeft aan hoeveel spelers er tegelijkertijd op de server mogen verbinden. In vergelijking met de waarde *max_players* van de listeners is dit de interne, absolute limiet van het totaal aantal spelers.

### permissions

Hier kun je bepaalde permissies toewijzen aan verschillende groepen. Dit zijn **alleen BungeeCord permissies**, niet bijvoorbeeld Spigot/Bukkit permissies.  
Let op de syntax en inspringingen (2 spaties):  
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

Dit getal geeft aan hoe lang de server maximaal geen signalen mag sturen naar spelers voordat de server afsluit en alle verbindingen verbreekt. Standaard staat deze op 30000, wat overeenkomt met een maximale responstijd van 30 seconden.

### log_commands

De waarde kan op false of true worden gezet. Zet je het op true, dan wordt er een bericht naar de console geschreven wanneer een speler een BungeeCord commando uitvoert. Zet je het op false, dan verschijnt dit bericht niet.

### network_compression_threshold

Dit bepaalt de grootte van de pakketten die naar spelers worden gestuurd. Een kleinere waarde dan de standaard *256*, bijvoorbeeld 128, kan de verbinding verbeteren voor spelers die verder weg zitten. Dit zorgt echter ook voor veel hogere CPU-belasting, dus pas dit met voorzichtigheid aan.

### online_mode

De waarde kan op false of true worden gezet. Zet je het op true, dan kunnen alleen spelers die Minecraft hebben gekocht de server betreden. Zet je het op false, dan kunnen ook cracked spelers verbinden, omdat er geen communicatie met de Mojang server plaatsvindt.  
**Belangrijk:** Wil je cracked spelers toelaten, gebruik dan een autorisatie-plugin, anders kunnen anderen zich voordoen als jou en adminrechten krijgen.

### disabled_commands

Hier kun je commando’s opgeven die uitgeschakeld moeten worden en niet uitgevoerd mogen worden op het hele netwerk. Deze beperking geldt voor alle spelers op het netwerk.

### servers

Deze lijst toont alle sub-servers van je netwerk. Staat een server hier niet in, dan wordt deze niet geïntegreerd in je server systeem.  
Let op de syntax en inspringingen (2 spaties):  
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
De **motd** is het bericht dat in je serverlijst verschijnt wanneer je een sub-server pingt via de *forced_hosts* functie:

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

Bij **address** vul je het IP-adres van de sub-server in. Staat **restricted** op true, dan moet de speler de permissie *bungeecord.server.ServerName* hebben om de sub-server te betreden.

### listeners

Hier zitten veel opties die belangrijk zijn voor de verbinding met de BungeeCord server. Je kunt meerdere listeners aanmaken om verbindingen op verschillende IP-adressen en poorten toe te staan. Een listener bestaat uit de volgende configuratiewaarden:  
* query_port - De poort van de listener.  
* motd - Het bericht dat in de serverlijst wordt getoond als de speler direct de BungeeCord server in zijn lijst heeft staan.  
* tab_list - Kies uit *GLOBAL_PING*, *GLOBAL* en *SERVER*. Met GLOBAL_PING zie je alle spelers inclusief hun ping in de tablijst. Met GLOBAL zie je alle spelers over alle servers, maar zonder ping. Met SERVER zie je alleen spelers op dezelfde sub-server. **Belangrijk:** werkt niet in versies 1.8 en ouder.  
* query_enabled - false of true. Staat dit op true, dan wordt er tijdens de DNS procedure een UDP query gecontroleerd die alleen zulke verbindingen toestaat. Staat het op false, dan kunnen ook andere verbindingen via forwarding gemaakt worden.  
* proxy_protocol - false of true. Staat dit op true, dan kun je het HAProxy protocol gebruiken. Staat het op false, dan wordt het geweigerd.  
* forced_hosts - Hiermee kun je directe verbindingen naar sub-servers toestaan. Syntax: `Your.OwnDomain.net: ServerName`  
* ping_passthrough - false of true. Staat dit op true, dan zie je de echte MOTD van de sub-server in plaats van die in de BungeeCord config bij het pingen via *forced_hosts*. Staat het op false, dan wordt de waarde uit *servers* gebruikt.  
* priorities - Hier geef je in aflopende volgorde aan naar welke server spelers eerst moeten verbinden. Een offline of onbereikbare server wordt overgeslagen.  
* bind_local_address - false of true. Staat dit op true, dan probeert het systeem spelers altijd te verbinden met servers die op hetzelfde IP luisteren als de BungeeCord server. Staat het op false, dan kunnen sub-servers verschillende IP-adressen hebben. Alleen relevant bij netwerken met servers op verschillende systemen.  
* host - IP en poort van de host. Staat hier 0.0.0.0, dan worden alle IP-adressen en domeinen die naar de host verwijzen geaccepteerd.  
* max_players - Maximaal aantal spelers voor deze listener.  
* tab_size - Maximaal aantal spelers dat in de tablijst wordt getoond.  
* De waarde kan op false of true worden gezet. Staat dit op true, dan verbindt de speler altijd met de default server (de eerste beschikbare server in *priorities*). Staat het op false, dan komt de speler op de sub-server waar hij de vorige keer online was. **Belangrijk:** Als je dit aanzet, worden verbindingen via *forced_hosts* ook doorgestuurd naar de default server.

### ip_forward

De waarde kan op false of true worden gezet. Staat dit op true, dan kunnen spelers alleen via de BungeeCord server het netwerk bereiken. Staat het op false, dan kunnen spelers ook direct verbinden met een sub-server als ze IP en poort weten.  
**Belangrijk:** Zet je *online_mode* op true, dan moet je deze functie ook aanzetten om een beveiligingslek te dichten.

### prevent_proxy_connections

De waarde kan op false of true worden gezet. Staat dit op true, dan worden de IP-adressen van verbonden spelers doorgestuurd naar de Mojang server. Staat het op false, dan voorkomt de server IP forwarding naar Mojang.  
Deze waarde heeft geen echte invloed op de game-ervaring.

### groups

Hier kun je één of meerdere groepen toewijzen aan individuele spelers. Zij krijgen dan de bijbehorende BungeeCord permissies zoals gedefinieerd in *permissions*.  
Let op de syntax en inspringingen (2 spaties):  
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

Deze waarde bepaalt hoe lang een speler moet wachten voordat hij opnieuw kan proberen te verbinden. Standaard staat deze op 4000, wat overeenkomt met 4 seconden wachttijd.

### stats

Hier plaatst BungeeCord een willekeurig gegenereerde code. Het wordt aangeraden deze niet te wijzigen, want dit helpt BungeeCord te optimaliseren en bugs te fixen. Analysegegevens worden anoniem en versleuteld doorgestuurd naar de ontwikkelaars.

### connection_throttle_limit

Deze waarde bepaalt hoeveel verbindingspogingen een speler mag doen voordat hij moet wachten volgens de *connection_throttle* waarde voordat hij opnieuw kan proberen te verbinden.

<InlineVoucher />