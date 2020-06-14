---
id: minecraft_bungeecord_config
title: Server Config
sidebar_label: Server Config
---

## Wofür brauche ich eine BungeeCord Config?

An sich ist BungeeCord die Verwaltung eines Bündels von Servern, welche durch den Proxyserver (BungeeCord-Server) verbunden werden. Um das Netzwerk dieser Server anzupassen, muss die Datei *config.yml* bearbeitet werden. Auf dieser Seite erfährst du die genaue Bedeutung jeder Einstellung und zusätzliche Informationen über die Auswirkung auf die Unterserver wie zum Beispiel PaperSpigot-/ und Bukkit-Server.

## Einstellungen

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

Dies setzt die Größe der an die Spieler versendeten Pakete fest. Ein kleinerer Wert als der Standardmäßige *256* wie zum Beispiel 128 kann die Verbindung zu anderen, weit entfernten Nutzern verbessern. Dies führt allerdings auch zu einer stark erhöhten CPU-Auslastung, weshalb die Veränderung des Wertes mit Vorsicht zu genießen ist.

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

Hinter dieser Variable stecken viele Optionsmöglichkeiten, die für die Verbindung zum BungeeCord Server wichtig sind. Es können mehrere Horcher angelegt werden, um die Verbindung auf verschiedene IP Adressen und Ports zu ermöglichen. Ein Horcher besteht aus folgenden Konfigurationswerten:
* query_port - Durch diesen Wert wird der Port des Horchers festgelegt.
* motd - Hier wird die Nachricht festgelegt, welche in der Serverliste angezeigt wird, wenn der Spieler direkt den BungeeCord Server in seiner Liste eingetragen hat.
* tab_list - Du kannst hier zwischen den Werten *GLOBAL_PING*, *GLOBAL* und *SERVER* wählen. Durch GLOBAL_PING werden in der Tablist serverübergreifend alle Spieler inklusive deren Pings angezeigt. Durch die Verwendung von GLOBAL werden ebenso alle Spieler serverübergreifend angezeigt, allerdings wird der Ping nicht angezeigt. Mit dem Begriff SERVER werden den Spielern nur die Mitspieler angezeigt, welche sich auch auf dem gleichen Unterserver befinden.
**Wichtig:** Diese Funktion funktioniert nicht mehr in den Versionen 1.8 und älter.
* query_enabled - Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst wird während des DNS Durchlaufes eine UDP Abfrage geprüft, welche nur solche Verbindungen erlaubt. Bei einer Negation können auch andere Verbindungen über Weiterleitungen zum Server hergestellt werden.
* proxy_protocol - Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst kannst du das HAProxy Protokoll verwenden. Bei einer Negation wird dies verweigert.
* forced_hosts - Hier kannst du einzelne Direktverbindungen auf Unterserver erlauben. Syntax: `Deine.EigeneDomain.de: ServerName`
* ping_passthrough - Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst wird dir beispielsweise die echte MOTD des Unterservers statt der in der BungeeCord Config stehenden angezeigt, wenn du den Unterserver über die Funktion *forced_hosts* anpingst. Bei einer Negation wird der Wert aus der festgelegten Variable von *servers* zurückgegeben.
* priorities - Hier kannst du absteigend aufzählen, auf welchen Server die Spieler als Erstes verbinden sollen. Ein Server wird übersprungen, wenn dieser offline oder nicht erreichbar ist.
* bind_local_address - Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst wird immer versucht den Spieler auf Server weiterzuleiten, die auf die gleiche IP wie die des BungeeCord Servers hören. Bei einer Negation können die Unterserver auch unterschiedliche IP Adressen besitzen. Dieser Wert ist nur für Netzwerke relevant, welche Server auf unterschiedlichen Systemen laufen lassen.
* host - Mit dieser Variable wird die IP und der Port des Hosts festgelegt. Wenn als IP 0.0.0.0 gesetzt wird werden alle IP Adressen und Domains akzeptiert, die auf den Host weiterleiten.
* max_players - Der Zahlenwert legt die maximale Spieleranzahl dieses Horchers fest.
* tab_size - Dieser Wert legt die maximale Zahl an angezeigten Spielern in der Tablist fest.
* force_default_server - Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst wird der Spieler immer auf den Standardserver (der erste, erreichbare Server aus *priorities*) verbinden. Bei einer Negation landet der Spieler auf dem Unterserver, auf welchem er sich zuletzt befand. **Wichtig:** Wenn du diesen Wert aktivierst werden Verbindungen über *forced_hosts* auch auf den Standardserver weitergeleitet.

### ip_forward

Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst können Spieler nur direkt über den BungeeCord Server auf das Netzwerk. Bei einer Negation können Spieler auch direkt auf einen Unterserver, falls diese die IP und den Port kennen.
**Wichtig:** Wenn du den *online_mode* auf true setzt solltest du diese Funktion auch aktivieren, um eine Sicherheitslücke zu schließen.

### prevent_proxy_connections

Der Wert kann auf false (falsch) oder true (wahr) gestellt werden. Falls du diesen auf wahr stellst werden die IP Adressen der verbundenen Spieler an den Mojang Server gesendet. Bei einer Negation wird eine IP Weiterleitung an Mojang unterbunden.
Der Wert hat keinen wirklichen Einfluss auf das Spielempfinden.

### groups

In dieser Liste kannst du einzelnen Spielern eine oder mehrere Gruppen zuweisen. Dadurch erhalten diese dann die entsprechenden BungeeCord Berechtigungen, die unter *permissions* festgelegt wurden.
Die Syntax beziehungsweise Einrückungen (in Form von 2 Leerzeichen) sind dabei wichtig zu beachten:
```
groups:
  SpielerName:
  - GruppenName
```

### connection_throttle

Dieser Zahlenwert sagt aus wie lange ein Spieler warten muss bis er wieder versuchen darf sich zum Server zu verbinden. Standardmäßig ist dieser Wert auf 4000, was einer maximalen Antwortzeit von 4 Sekunden entspricht. 

### stats

Hier wird von BungeeCord ein zufällig generierter Code eingefügt. Es wird empfohlen diesen nicht zu verändern, da BungeeCord dadurch besser optimiert werden kann und Fehler behoben werden können. Analysedaten werden anonym und verschlüsselt an die Entwickler weitergeleitet.

### connection_throttle_limit

Dieser Wert bestimmt die Anzahl ab wie vielen Verbindungsversuchen der Spieler den angegebenen Wert von *connection_throttle* abwarten muss, bis er wieder versuchen darf sich zum Server zu verbinden.
