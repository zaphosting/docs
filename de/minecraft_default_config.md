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

Bei dieser Einstellung kann die *maximale Sichtweite vom Server* festgelegt werden. Unabhängig wie die Sichtweite im Client eingestellt wurde, sendet der Server niemals mehr Chunk-Daten an den Client wie hier festgelegt. Hierbei kann man den Wert auch herrabsetzen, um die Performance des Servers etwas zu schonen.
Das Spielerlebnis wird auch bei einem Wert von 5 nicht beeinträchtigt. Niedrigere Werte sind nicht zu empfehlen und können in seltenen Fällen auch Probleme hervorrufen.
**WICHTIG:** Der Wert sollte unter keinen Umständen (wenn nicht zwingend notwendig) höher gestellt werden und ist daher mit Vorsicht zu behandeln, da es unter anderem zu starken Performanzproblemen kommen könnte.

> Diese Einstellung wird nur bei einem Vanilla oder Forge Server angewendet.
> Bei Bukkit, Spigot und Paper Spigot muss der Wert in der jeweils eigenen Config festgelegt werden.

### max-build-height

Hiermit kann festgelegt werden, bis zu welcher Höhe (Y-Koordinate) gebaut oder abgebaut werden kann.
Größere Werte als 256 sind **nicht zulässig** und werden vom Server ignoriert.
Die Einstellung ist daher seh sinnvoll, solltest du die maximale Bauhöhe verringern wollen.

### server-ip

Sofern du für deinen Root- oder vServer mehrere IPs gebucht hast, kannst du hier festlegen welche IP genutzt werden soll.
Wenn du nur eine einzige IP hast, kann dieser Wert einfach frei bleiben - Das gleiche gilt für einen Gameserver.

### level-seed

Standardmäßig generiert der Weltgenerator immer einen zufälligen [Seed](https://minecraft-de.gamepedia.com/Startwert) und damit auch eine komplett zufällige Welt.
Du kannst hier jedoch einen eigenen Seed aus **Buchstaben oder Zahlen** festlegen, worauf der Server dann die entsprechende Welt erstellt. Die maximale Länge von **32 Zeichen** sollte zudem nicht überschritten werden.

> Es gibt einige Seed-Generatoren, wo man eine Welt nach seinen eigenen Vorstellungen konfigurieren kann.
> (Dieser)[https://minecraft.tools/de/custom.php] Generator ist einer der besten und ermöglicht nahezu alles.

### gamemode

Mit dieser Option kannst du den standardmäßigen Spielmodus auf deinem Server festlegen.
Der Spielmodus wird jedem Spieler zum ersten Besuch des Servers erteilt und kann danach über den [/gamemode](https://minecraft-de.gamepedia.com/Befehl/gamemode) Befehl jederzeit angepasst werden.

Sofern du die IDs der jeweiligen Spielmodi nicht kannst, findest du hier eine Auflistung:

| Wert | Spielmodus |
|--|--|
| 0 | Überleben |
| 1 | Kreativ |
| 2 | Abenteuer |
| 3 | Zuschauer |

### server-port

Du kannst hier  deinem Server einen festen Port zuweisen, über welchen dieser in Verbindung mit der IP erreichbar sein wird.
Sofern du als Beispiel mehrere Server auf deinem Rootserver betreiben möchtest, muss je Server ein unterschiedlicher Port festgelegt werden. Diese Option kann in der Regel unberührt bleiben und wird meist nur bei einem BungeeCord-Netzwerk benötigt.

### enable-command-block

Damit können [Befehlsblöcke](https://minecraft-de.gamepedia.com/Befehlsblock) auf dem Server aktiviert werden.
Sofern keine gebraucht werden, sollte der Wert auf *false* gesetzt werden, da es einige Methoden gibt, womit der Server zerstört oder beschädigt werden kann in Verbindung mit Befehlsblöcken.

### allow-nether

Diese Option de- oder aktiviert werden Nether.
Sofern deaktiviert, kann der Nether nicht mehr über ein Portal betreten werden.
Der Zugang ist jedoch weiterhin über ein Plugin wie [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/).

### enable-rcon

Über RCON können von überall Befehle in der Konsole ausgeführt werden.
Nötig dazu ist ein Passwort, soweit ein separater Port. Die Einstellungen dazu werden ebenfalls hier in der Config gesetzt.
Wir empfehlen RCON zu deaktivieren, um Eingriffe von unbefugten vorzubeugen.

### op-permission-level

Hier kann das standardmäßige OP-Level festgelegt werden, welches einem neuen Operator zu Anfang zugeteilt werden soll.
Die jeweiligen Level und die einzelne Vergabe je Spieler wird [hier](https://docs.zap-hosting.com/docs/de/minecraft_addop/) genauer von uns beschrieben.

### enable-query

Die Query stellt externen Dienste wie einer Webseite gesonderte Daten zur Verfügung, wie etwas die aktuelle Anzahl an Spielern oder eine genaue Auflistung der derzeitigen Spieler.
Beispielsweise könnte man so Daten auf einer Webseite mittels PHP darstellen. Einige Serverlisten nutzen diese Funktion, damit der Server in der Liste korrekt gelistet werden kann.

### prevent-proxy-connections

Mit dieser Einstellung kann festgelegt werden, ob sich Spieler mit einer VPN/Proxy verbinden können.
Eine VPN wird oft zur Umgehung eines IP-Bans genutzt, die Option kann daher sehr sinnvoll sein.
Teilweise gibt es auch eine Einschränkung, sodass auch normale Verbindungen fälschlicherweise falsch eingestuft und so blockiert werden.

> Um weitreichende Kontrolle über VPN/Proxy Verbindungn gewinnen zu können, loht es sich ein Plugin dafür zu installieren.
> Viele kostenlose Plugins lassen sich schnell finden, dieses (jedoch kostenpflichtige) [Plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/) hat uns jedoch am meisten überzeugt und sichert deinen Server auch vor jeglichen Bot-Attacken.

### generator-settings

Wie auch im Einzelspielmodus kann der Server eine Welt nach bestimmten Vorgaben erstellen.
Ähnlich wie bei einem Seed kann die Welt zuvor konfiguriert werden, worauf der Server dann die Welt erstellt.
Anders ist jedoch, dass es weiterhin immer eine zufällige Welt ist und diese daher keiner anderen gleicht.

Ein Generierungscode würde für eine Flatmap so aussehen:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Sofern auf dem Server ein spezielles Texturenpaket genutzt werden soll, kann hierzu der **direkte Download als Link** angegeben werden.
Das Pack wird dann nach Bestätigung des Spielers automatisch geladen und aktiviert.

### player-idle-timeout

Abwesende Spieler können mit dieser Option nach der festgelegten Anzahl an Sekunden automatisch gekickt werden.
Die Option ist daher sehr hilfreich, wenn die Slots eines Server sehr ausgelastet sind und man so inaktive Spieler kickt, um Platz für einen neuen (möglich aktiven) Spieler zu schaffen.

### level-name

Standardmäßig wird die Welt "world" benannt. Mit dieser Option kann nun ein anderer Name festgelegt werde, wonach die Welt benannt wird.
Sofern bereits eine Welt besteht und der Name hier geändert wird, wird automatisch eine neue Welt mit diesem Namen erstellt.
Die alte Welt bleibt dabei erhalten und befindet sich weiterhin in dem vorherigen Ordner.

### motd

Hier kann eine Nachricht definiert werden, welche in der Serverliste angezeigt wird, sofern hinzugefügt. Die Nachricht wird nicht bei der Direktverbindung angezeigt, sofern im Client keine speziellen Mods installiert sind.
Die Nachricht kann mit allen möglichen Farben und Formatierungen versehen werden, welche Minecraft bietet.

> Schnell und einfach kann die MOTD über dieses [Tool](https://minecraft.tools/de/motd.php) erstellt werden.

### force-gamemode

Dies legt fest, ob die Spieler beim Betreten des Servers immer in den Standard-Spielmodus wie oben beschrieben gesetzt werden soll.
Unabhängig mit welchem Spielmodus der Server verlassen wurde, wird immer der Standard-Spielmodus gesetzt.

### hardcore

Der Hardcore-Modus sorgt dafür, dass Spieler beim Tod verbannt werden bzw. diese in den Zuschauermodus versetzt werden.
Sofern dies gewünscht ist, **muss** eine neue Welt erstellt werden, da der Hardcore-Modus Einfluss auf die Weltgeneration hat.

### white-list

Dies aktiviert die [Whitelist](https://minecraft-de.gamepedia.com/Befehl/whitelist), wodurch nur Spieler welche sich auf der Liste befinden Zugang erhalten. Den Umgang mit der Whitelist erklären wir [hier](http://bald.de).

### broadcast-console-to-ops

Legt fest, ob Operatoren über die Ausführung von Befehlen im Spiel eine Benachrichtigung im Chat erhalten.

### pvp

Hiermit kann das PVP auf dem Server de- bzw. aktiviert werden. Sofern PVP deaktiviert ist, können sich Spieler gegenseitig keinen Schaden mehr zufügen.
Diese Option verhindert nicht das mutwillige Platzieren von Lava als Beispiel. Spieler können sich also weiterhin über Umwege angreifen.

### spawn-npcs

In Dörfer trifft man auf Dorfbewohner, sofern hier aktiviert.
Ist diese Option auf *false* gestellt, wird es auf dem gesamten Server keine Dorfbewohner mehr zu finden geben.
Die Option ist sehr sinnvoll, sofern man den Handel nur auf Spieler begrenzen möchte und damit die Wirtschaft eines Wirtschaftsservers zu stärken.

### generate-structures

Diese Einstellung nimmt wieder Einfluss auf den Weltgenerator. Hiermit kann bestimmt werden, ob Strukturen in der Welt erschaffen werden soll.
Damit gemeint sind als Beispiel Dörfer oder Tempel.

### spawn-animals

Legt fest, ob auf dem Server Tiere gespawnt werden sollen.
Eine Auflistung aller Tiere findest du [hier](https://minecraft-de.gamepedia.com/Kreatur/Tiere). 

### snooper-enabled

Sofern aktiviert, sendet der Server anonyme Daten an Mojang.
Die Daten werden zur weiteren Entwicklung und Optimierung genutzt.
Diese Option hat keinerlei Einfluss auf die Leistung des Servers.

### difficulty

Damit kann die allgemeine Schwierigkeit auf dem Server festgelegt werden.
Je nachdem verursachen Mobs als Beispiel mehr oder weniger Schaden.
Genaue Informationen dazu und den möglichen Optionen lassen sich (hier)[https://minecraft-de.gamepedia.com/Schwierigkeitsgrad#ID] finden.

### network-compression-threshold

Der Wert legt fest, ab welcher Größe Daten zwischen Client und Server gesendet bzw. komprimiert werden.
Ein kleiner Wert wie etwas der Standardwert 256 werden ca. 20x die Sekunde Daten von Client und Server ausgetauscht.
Um die Leistung des Servers etwas zu entlasten ist ein Wert von 512 ratsam und zieht keine Beeinträchtigungen mit sich.
Der Wert sollte **niemals** höher als 1024 gestellt werden.

**Diese Einstellung ist mit Vorsicht zu behandeln, da es bei falschen Werten zu weitreichenden Problemen bei Spielern und irreparable Schäden an der Welt verursachen kann.**

### level-type

Bestimmt den Welttyp, wonach der Weltgenerator eine Welt erstellt.
Nach einer Änderung dieser Option sollte eine **neue Welt erstellt werden**. Andernfalls kommt es zu unerwünschten Schnitten in der Welt, an denen neue Chunks generiert werden.

| Wert | Bedeutung |
|--|--|
| DEFAULT | Normale Welt mit Bergen, Tälern, Dörfern, etc. |
| FLAT | Eine komplett flache Welt, wo nur Dörfer enthalten sind |
| LARGEBIOMES | Ähnlich wie eine normale Welt, nur mit größeren Biomen |
| AMPLIFIED | Ebenfalls ähnlich wie eine normale Welt, nur sehr zerklüftet und dabei große Höhenunterschiede |
| BUFFET | Eine Buffet-Welt, wobei die Einstellungen über die Option *generator-settings* festgelegt werden |

### spawn-monsters

Legt fest, ob auf dem Server Monster gespawnt werden sollen.
Eine Auflistung aller Monster findest du [hier](https://minecraft-de.gamepedia.com/Kreatur/Monster). 

### max-tick-time

Dies regelt die maximale Länge eines Ticks. Verschiedene Aufgaben vom Server werden einem Tick zugeteilt.
Sofern ein Tick länger als standardmäßig 60 Sekunden andauern, so wird der Server automatisch gestoppt.

Bei Forge-Servern ist dies teilweise sehr ärgerlich, da Mods oftmals  hohe Ansprüche stellen und so etwas mehr Zeit brauchen.
In so einem Fall kann man den Wert auf *-1* setzten, wodurch der automatische Stop deaktiviert werden.

### max-players

Stellt ein, wie viele Slots belegt werden können und damit wie viele Spieler sich maximal auf dem Server befinden können.

### enforce-whitelist

Diese Option bewirkt, dass die Whitelist jede Änderungen direkt übernimmt.
Im Normalfall muss die Whitelist zuvor neu geladen werden, damit diese aktiviert wird.

### online-mode

Hiermit kann festgelegt werden, ob Spieler ohne einen Premium-Account den Server betreten können.
Dabei beachten sollte man, dass wenn es sich um einen öffentlichen Server handelt, sich Spieler so Rechte verschaffen können, da Spieler den Namen des Operators wählen können und der Server **nur** den Namen abgleichen kann.

Damit würde dann ein Spieler unbefugt an die Rechte gelangen.
Zur Prävention dessen sollte man bei einem Pluginfähigen-Server wie bei Spigot dringend ein Passwort-Plugin installieren.

### allow-flight

Dies de- bzw. aktiviert das eigene AntiCheat von Minecraft in Bezug auf das Fliegen.
Meist durch Hackclients ist es Spielern möglich unerlaubt zu fliegen.

> Wir raten dennoch in jedem Fall ein AntiCheat in Form eines Plugin zu installieren!

### function-permission-level

Legt fest, mit welchem OP-Level Befehle ausführen können. Bei Level 4 können diese  den Server als Beispiel stoppen oder Spieler kicken bzw. bannen.
