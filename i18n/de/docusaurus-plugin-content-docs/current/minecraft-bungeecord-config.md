---
id: minecraft-bungeecord-config
title: "Minecraft: Bungeecord Server Server Config Einstellungen"
description: "Verstehe, wie du dein BungeeCord Server Netzwerk optimal einstellst und verwaltest für bessere Performance und Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Server Properties
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wofür brauche ich eine BungeeCord Konfiguration?

BungeeCord ist die Verwaltung eines Bündels von Servern, die über den Proxy-Server (BungeeCord Server) verbunden sind. Um das Netzwerk dieser Server anzupassen, muss die Datei *config.yml* bearbeitet werden. Auf dieser Seite lernst du die genaue Bedeutung jeder Einstellung kennen und bekommst zusätzliche Infos über die Auswirkungen auf die Sub-Server wie PaperSpigot und Bukkit Server.

<InlineVoucher />

## Einstellungen

### forge_support

Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, können Spieler mit einem Forge-Client (für Modpacks gedacht) auf den Server joinen. Wenn du ihn auf false setzt, werden diese Verbindungen abgelehnt.

### player_limit

Dieser Wert gibt an, wie viele Spieler gleichzeitig auf den Server connecten dürfen. Im Vergleich zum Wert *max_players* aus den Listeners ist dieser Wert die interne, absolute Bestimmung der Gesamtspielerzahl.

### permissions

Hier können bestimmten Gruppen bestimmte Berechtigungen zugewiesen werden. Das sind **nur BungeeCord-Berechtigungen** und keine z.B. Spigot/Bukkit-Berechtigungen.
Die Syntax und Einrückungen (jeweils 2 Leerzeichen) sind wichtig:
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

Diese Zahl gibt an, wie lange der Server maximal keine Signale an die Spieler senden darf, bevor er herunterfährt und alle Verbindungen trennt. Standardmäßig ist dieser Wert auf 30000 gesetzt, was einer maximalen Antwortzeit von 30 Sekunden entspricht.

### log_commands

Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, wird eine Nachricht in die Konsole geschrieben, wenn ein Spieler einen BungeeCord-Befehl ausführt. Wenn du ihn auf false setzt, wird diese Nachricht nicht angezeigt.

### network_compression_threshold

Hier wird die Größe der Pakete festgelegt, die an die Spieler gesendet werden. Ein kleinerer Wert als der Standard *256*, z.B. 128, kann die Verbindung zu weiter entfernten Nutzern verbessern. Allerdings führt das auch zu deutlich höherer CPU-Auslastung, daher sollte diese Einstellung mit Vorsicht geändert werden.

### online_mode

Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, können nur Spieler auf den Server, die Minecraft gekauft haben. Wenn du ihn auf false setzt, können auch Cracked-Spieler auf den Server, da keine Kommunikation mit dem Mojang-Server erfolgt.
**Wichtig:** Wenn Cracked-Spieler auf deinem Server spielen sollen, solltest du ein Authentifizierungs-Plugin nutzen, sonst können sich andere als dich ausgeben und Admin-Rechte erlangen.

### disabled_commands

Hier kannst du Befehle auflisten, die im gesamten Netzwerk deaktiviert und nicht ausführbar sein sollen. Diese Einschränkung gilt für alle Spieler im Netzwerk.

### servers

Diese Liste zeigt alle Sub-Server deines Netzwerks. Wenn ein Server hier fehlt, wird er nicht in dein Server-System eingebunden.
Die Syntax und Einrückungen (jeweils 2 Leerzeichen) sind wichtig:
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
Das **motd** ist die Nachricht, die in deiner Serverliste erscheint, wenn du einen Sub-Server per *forced_hosts* Funktion anpingst:

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

Unter **address** trägst du die entsprechende IP des Sub-Servers ein. Ist der Wert **restricted** auf true gesetzt, muss der Spieler die Berechtigung *bungeecord.server.ServerName* besitzen, um den Sub-Server zu betreten.

### listeners

Hinter dieser Variable verbergen sich viele Optionen, die für die Verbindung zum BungeeCord Server wichtig sind. Es können mehrere Listener erstellt werden, um Verbindungen zu verschiedenen IP-Adressen und Ports zu erlauben. Ein Listener besteht aus folgenden Konfigurationswerten:
* query_port - Definiert den Port des Listeners.
* motd - Hier definierst du die Nachricht, die in der Serverliste angezeigt wird, wenn der Spieler direkt den BungeeCord Server in seiner Liste hat.
* tab_list - Hier kannst du zwischen den Werten *GLOBAL_PING*, *GLOBAL* und *SERVER* wählen. Mit GLOBAL_PING werden alle Spieler inklusive ihrer Pings in der Tabliste angezeigt. Mit GLOBAL werden alle Spieler über alle Server angezeigt, aber ohne Ping. Mit SERVER werden nur Spieler angezeigt, die auf demselben Sub-Server sind. **Wichtig:** Diese Funktion funktioniert nicht in Versionen 1.8 und älter.
* query_enabled - Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, wird während des DNS-Verfahrens eine UDP-Abfrage geprüft, die nur solche Verbindungen zulässt. Wenn du ihn auf false setzt, sind auch andere Verbindungen durch Weiterleitung zum Server möglich.
* proxy_protocol - Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, kannst du das HAProxy-Protokoll nutzen. Wenn du ihn auf false setzt, wird das Protokoll abgelehnt.
* forced_hosts - Hier kannst du einzelne direkte Verbindungen zu Sub-Servern erlauben. Syntax: `Your.OwnDomain.net: ServerName`
* ping_passthrough - Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, siehst du beim Anpingen des Sub-Servers per *forced_hosts* Funktion das echte MOTD des Sub-Servers statt dem MOTD aus der BungeeCord Konfiguration. Wenn du ihn auf false setzt, wird der Wert aus der Variable *servers* zurückgegeben.
* priorities - Hier kannst du in absteigender Reihenfolge auflisten, zu welchem Server die Spieler zuerst connecten sollen. Ein Server wird übersprungen, wenn er offline oder nicht verfügbar ist.
* bind_local_address - Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, versucht das System immer, den Spieler zu Servern weiterzuleiten, die auf derselben IP wie der BungeeCord Server lauschen. Wenn du ihn auf false setzt, können die Sub-Server unterschiedliche IP-Adressen haben. Dieser Wert ist nur relevant für Netzwerke, die Server auf verschiedenen Systemen betreiben.
* host - Diese Variable setzt die IP und den Port des Hosts. Ist 0.0.0.0 als IP gesetzt, werden alle IP-Adressen und Domains akzeptiert, die auf den Host weiterleiten.
* max_players - Der numerische Wert bestimmt die maximale Spielerzahl dieses Listeners.
* tab_size - Dieser Wert legt die maximale Anzahl der Spieler fest, die in der Tabliste angezeigt werden.
* Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, verbindet sich der Spieler immer mit dem Standardserver (dem ersten verfügbaren Server in *priorities*). Wenn du ihn auf false setzt, landet der Spieler auf dem Sub-Server, auf dem er zuletzt online war. **Wichtig:** Wenn du diesen Wert aktivierst, werden Verbindungen via *forced_hosts* ebenfalls an den Standardserver weitergeleitet.

### ip_forward

Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, können Spieler nur direkt über den BungeeCord Server auf das Netzwerk zugreifen. Wenn du ihn auf false setzt, können Spieler auch direkt auf einen Sub-Server connecten, wenn sie IP und Port kennen.
**Wichtig:** Wenn du *online_mode* auf true setzt, solltest du diese Funktion ebenfalls aktivieren, um eine Sicherheitslücke zu schließen.

### prevent_proxy_connections

Der Wert kann auf false oder true gesetzt werden. Wenn du ihn auf true setzt, werden die IP-Adressen der verbundenen Spieler an den Mojang-Server gesendet. Wenn du ihn auf false setzt, verhindert der Server das IP-Forwarding zu Mojang.
Der Wert hat keinen echten Einfluss auf das Spielerlebnis.

### groups

In dieser Liste kannst du einzelnen Spielern eine oder mehrere Gruppen zuweisen. Dadurch erhalten sie die zugehörigen BungeeCord-Berechtigungen, wie in *permissions* definiert.
Die Syntax und Einrückungen (jeweils 2 Leerzeichen) sind wichtig:
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

Dieser Wert definiert, wie lange ein Spieler warten muss, bis er erneut versuchen kann, sich mit dem Server zu verbinden. Standardmäßig ist dieser Wert auf 4000 gesetzt, was einer maximalen Wartezeit von 4 Sekunden entspricht.

### stats

Hier fügt BungeeCord einen zufällig generierten Code ein. Es wird empfohlen, diesen Code nicht zu ändern, da er hilft, BungeeCord zu optimieren und Bugs zu beheben. Analysedaten werden anonym und verschlüsselt an die Entwickler weitergeleitet.

### connection_throttle_limit

Dieser Wert bestimmt, wie viele Verbindungsversuche ein Spieler hat, bevor er die Wartezeit von *connection_throttle* abwarten muss, um erneut eine Verbindung zum Server zu versuchen.

<InlineVoucher />