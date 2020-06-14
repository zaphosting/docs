---
id: minecraft_bungeecord_config
title: Server Config
sidebar_label: Server Config
---

## Wofür brauche ich eine BungeeCord Config?

An sich ist BungeeCord die Verwaltung eines Bündels von Servern, welche durch den Proxyserver (BungeeCord-Server) verbunden werden. Um das Netzwerk dieser Server anzupassen, muss die Datei *config.yml* bearbeitet werden. Auf dieser Seite erfährst du die genaue Bedeutung jeder Einstellung und zusätzliche Informationen über die Auswirkung auf die Unterserver wie zum Beispiel PaperSpigot-/ und Bukkit-Server.

## Einstellungen

### server_connect_timeout

-- 404 --

### remote_ping_cache

-- 404 --

### forge_support

Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst können Spieler mit einem Forge Klienten (für Modpacks gedacht) den Server betreten. Bei einer Negation werden diese Verbindungen abgelehnt.

### player_limit

Dieser Zahlenwert sagt aus wie viele Spieler gleichzeitig eine Verbindung zu dem Server aufgebaut haben dürfen. Im Vergleich zu dem Wert *max_players* aus den Horchern ist dieser Wert die interne, absolute Bestimmung der gesamten Spieleranzahl.

### permissions

In diesem Abschnitt können verschiedenen Gruppen gewisse Berechtigungen erteilt werden. Hierbei handelt es sich aber **ausschließlich** um **BungeeCord Berechtigungen** und nicht um zum Beispiel Spigot/Bukkit Zulassungen.
Die Syntax beziehungsweise Einrückungen (in Form von 2 Leerzeichen) sind dabei wichtig zu beachten:
```
permissions:
  GruppenName:
  - Berechtigung.Eins
  - Berechtigung.Zwei
```

### timeout

Diese Zahl sagt aus wie lange der Server maximal keine Signale an die Spieler senden darf bevor sich der Server herunterfährt und somit alle Verbindungen unterbricht. Standardmäßig ist dieser Wert auf 30000, was einer maximalen Antwortzeit von 30 Sekunden entspricht. 

### log_commands

Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst wird eine Nachricht in die Konsole geschrieben, wenn ein Spieler einen BungeeCord-Befehl ausführt. Bei einer Negation wird diese Nachricht nicht angezeigt.

### network_compression_threshold

-- 404 --

### online_mode

Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst können nur Spieler auf den Server, welche sich Minecraft gekauft haben. Bei einer Negation können auch Cracked-Spieler auf den Server, da keine Kommunikation mehr mit dem Mojang Server stattfindet.
**Wichtig:** Wenn auch Cracked-Spieler auf deinem Server spielen sollen können empfielt sich ein Autorisierungsplugin, da sich sonst andere Spieler als deine Person ausgeben können und somit Administrator Berechtigungen erlangen können.

### disabled_commands

Hier kannst du Befehle aufgelistet angeben, welche auf dem gesamten Netzwerk deaktiviert und nicht ausführbar sein sollen. Diese Einschränkung gilt für jeden Spieler auf dem Netzwerk.

### servers

In dieser Liste werden alle Unterserver deines Netzwerkes angegeben. Fehlt hier ein Server, wird er nicht in dein Serversystem eingebunden.
Die Syntax beziehungsweise Einrückungen (in Form von 2 Leerzeichen) sind dabei wichtig zu beachten:
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
Die **motd** ist die Nachricht, welche in der deiner Serverliste angezeigt wird, wenn du den einzelnen Unterserver über die Funktion *forced_hosts* anpingst:

![](https://screensaver01.zap-hosting.com/index.php/s/Ajdd2HCdSHeKLa5/preview)

Unter **address** gibst du die entsprechende IP des Unterservers ein. Wenn der Wert **restricted** auf true ist muss der Spieler die Berechtigung *bungeecord.server.<ServerName>* besitzen, um den Unterserver betreten zu können.

### listeners



### ip_forward

### remote_ping_timeout

### prevent_proxy_connections

### groups

### connection_throttle

### stats

### connection_throttle_limit

### log_pings
