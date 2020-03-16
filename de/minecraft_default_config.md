---
id: minecraft_default_config
title: Server Config 
sidebar_label: Server Config
---

## Was kann ich in dieser Config einstellen?

Minecraft bringt bereits eine kleine Config mit sich, welche sich *server.properties* nennt.
In der  kann der Server grundlegend konfiguriert werden.
Wir beschreiben hier, was die einzelnen Punkte bewirken und was bei Änderungen zu beachten ist.
Einige Einstellungen sind **behutsam** zu behandeln, da diese teilweise drastischen Einfluss auf die Performance des Servers haben, was unter anderem auch zu Instabilität des Servers führen kann.

### view-distance

Bei dieser Einstellung kann die *maximale Sichtweite vom Server* festgelegt werden. Unabhängig wie die Sichtweite im Client eingestellt wurde, sendet der Server niemans mehr Chunk-Daten an den Client wie hier festgelegt. Hierbei kann man den Wert auch herrabsetzen um die Performance des Servers etwas zu schonen.
Das Spielerlebnis wird auch bei einem Wert von 5 nicht beeinträchtigt. Niedrigere Werte sind nicht zu empfehlen und können in seltenen Fällen auch Probleme hervorrufen.
**WICHTIG:** Der Wert sollte unter keinen Umstände (wenn nicht zwingend notwenig) höher gestellt werden und ist daher mit Vorsicht zu behandeln, da es unter anderem zu starken Performanceproblemen kommen könnte.

> Diese Einstellung wird nur bei einem Vanilla oder Forge Server angewendet.
> Bei Bukkit, Spigot und Paper Spigot muss der Wert in der jeweils eigenen Config festgelegt werden.

### max-build-height

Hiermit kann festgelegt werden, bis zu welcher Höhe (Y-Koordinate) gebaut oder abgebaut werden kann.
Größere Werte als 256 sind **nicht zulässig** und werden vom Server ignoriert.
Die Einstellung ist daher seh sinnvoll, solltest du die maximale Bauhöhe verringern wollen.

### server-ip

Sofern du für deinen Root- oder vServer mehrere IPs gebucht hast, kannst du hier festlegen welche IP genutzt soll.
Wenn du nur eine einzige IP hast, kann dieser Wert einfach frei bleiben - Das gleiche gilt für einen Gameserver.

### level-seed

Standardmäßig generiert der Weltgenerator immer einen zufälligen (Seed)[https://minecraft-de.gamepedia.com/Startwert] und damit auch eine komplett zufällige Welt.
Du kannst hier jedoch einen eigenen Seed aus **Buchstaben oder Zahlen** festlegen, worauf der Server dann die entsprechende Welt erstellt. Die maximale Länge von **32 Zeichen** sollte zudem nicht überschritten werden.

> Es gibt einige Seed-Generatoren, wo man eine Welt nach seinen eigenen Vorstellungen konfigurieren kann.
> (Dieser)[https://minecraft.tools/de/custom.php] Generator ist einer der besten und ermöglicht nahezu alles.

### gamemode

Mit dieser Option kannst du den standardmäßigen Spielmodus auf deinem Server festlegen.
Der Spielmodus wird jedem Spieler zum ersten Besuch des Servers erteilt und kann danach über den (/gamemode)[https://minecraft-de.gamepedia.com/Befehl/gamemode] Befehl jederzeit angepasst werden.

Sofern du die IDs der jeweiligen Spielmodi nicht kannst, findest du hier eine Auflistung:
| Wert | Spielmodus |
|--|--|
| 0 | Überleben |
| 1 | Kreativ |
| 2 | Abenteuer |
| 3 | Zuschauer |

### server-port

Du kannst hier  deinem Server einen festen Port zuweisen, über welchen dieser in Verbindung mit der IP erreichbar sein wird.
Sofern duals Beispiel mehrere Server auf deinem Rootserver betreiben möchtest, muss je Server ein unterschiedlicher Port festgelegt werden. Diese Option kann in der Regel unberührt bleiben und wird meist nur bei einem BungeeCord-Netzwerk benötigt.

### enable-command-block

### allow-nether

### enable-rcon

### op-permission-level

### enable-query

### prevent-proxy-connections

### generator-settings

### resource-pack

### player-idle-timeout

### level-name

### motd

### force-gamemode

### hardcore

### white-list

### broadcast-console-to-ops

### pvp

### spawn-npcs

### generate-structures

### spawn-animals

### snooper-enabled

### difficulty

### network-compression-threshold

### level-type

### spawn-monsters

### max-tick-time

### max-players

### enforce-whitelist

### resource-pack-sha1

### online-mode

### allow-flight

### max-world-size

### function-permission-level
