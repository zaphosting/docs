---
id: minecraft-default-config
title: "Minecraft: Server Config Einstellungen"
description: "Entdecke, wie du Minecraft Server-Einstellungen für Performance und Stabilität optimierst und gleichzeitig das Gameplay anpasst → Jetzt mehr erfahren"
sidebar_label: Server Config
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Was kann ich in dieser Config einstellen?

Minecraft bringt bereits eine kleine Config namens *server.properties* mit.
Der Server kann hier grundlegend konfiguriert werden. Wir erklären, was die einzelnen Punkte bewirken und worauf du bei Änderungen achten solltest. Einige Einstellungen sind **vorsichtig** zu behandeln, da sie teils drastisch die Performance des Servers beeinflussen können, was unter anderem zu Instabilität führen kann.

<InlineVoucher />

### view-distance

Mit dieser Einstellung wird die *maximale Sichtweite* vom Server festgelegt. Egal, wie die Sichtweite im Client eingestellt ist, der Server sendet nie mehr Chunk-Daten an den Client als hier angegeben. Du kannst den Wert auch reduzieren, um die Performance des Servers zu schützen. Das Spielerlebnis leidet selbst bei einem Wert von 5 nicht. Werte unter 5 sind nicht empfohlen und können in seltenen Fällen Probleme verursachen.
**WICHTIG:** Der Wert sollte unter keinen Umständen (außer es ist absolut notwendig) höher gesetzt werden und daher mit Vorsicht behandelt werden, da dies zu starken Performance-Problemen führen kann.

:::info
Diese Einstellung gilt nur für Vanilla- oder Forge-Server.

Für Bukkit, Spigot und Paper Spigot muss der Wert in deren eigener Config gesetzt werden.
:::

### max-build-height

Hiermit legst du fest, bis zu welcher Höhe (Y-Koordinate) gebaut oder abgebaut werden kann. Werte über 256 sind **nicht erlaubt** und werden vom Server ignoriert. Die Einstellung ist also sehr nützlich, wenn du die maximale Bauhöhe reduzieren möchtest.

### server-ip

Wenn du mehrere IPs für deinen Root- oder VPS gebucht hast, kannst du hier angeben, welche IP verwendet werden soll. Hast du nur eine einzelne IP, kann dieser Wert einfach frei bleiben – das gilt auch für einen Gameserver.

### level-seed

Standardmäßig generiert der Weltgenerator immer einen zufälligen [Seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) und somit eine komplett zufällige Welt.
Du kannst hier aber deinen eigenen Seed aus **Buchstaben oder Zahlen** definieren, und der Server erstellt dann die entsprechende Welt. Die maximale Länge von **32 Zeichen** sollte nicht überschritten werden.

:::info
Es gibt einige Seed-Generatoren, mit denen du eine Welt nach deinen eigenen Vorstellungen konfigurieren kannst.

[Dieser](https://minecraft.tools/en/custom.php) Generator ist einer der besten und kann fast alles.
:::

### gamemode

Mit dieser Option kannst du den Standard-Spielmodus auf deinem Server festlegen. Der Spielmodus wird jedem Spieler beim ersten Besuch auf dem Server zugewiesen und kann dann jederzeit mit dem [/gamemode](https://minecraft.fandom.com/wiki/Gameplay) Befehl geändert werden.

Falls du die IDs der jeweiligen Spielmodi nicht kennst, hier eine Übersicht:

| Wert | Spielmodus |
|--|--|
| 0 | Survival |
| 1 | Kreativ |
| 2 | Abenteuer |
| 3 | Zuschauer |

### server-port

Du kannst deinem Server einen festen Port zuweisen, über den er in Verbindung mit der IP erreichbar ist. Wenn du mehrere Server auf deinem Server betreiben möchtest, muss für jeden Server ein anderer Port definiert werden. Diese Option kann normalerweise unangetastet bleiben und wird meist nur für ein BungeeCord-Netzwerk benötigt.

### enable-command-block

Damit werden [Command Blocks](https://minecraft.fandom.com/wiki/Command_Block) auf dem Server aktiviert. Wenn keine benötigt werden, sollte der Wert auf *false* gesetzt werden, da es einige Methoden gibt, mit denen der Server durch Command Blocks zerstört oder beschädigt werden kann.

### allow-nether

Mit dieser Option kannst du den Nether an- oder ausschalten. Wenn deaktiviert, ist der Nether über Portale nicht mehr zugänglich. Der Zugang über Plugins wie [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/) bleibt aber weiterhin möglich.

### enable-rcon

Über RCON können Befehle von überall aus der Konsole ausgeführt werden. Ein Passwort und ein separater Port sind dafür erforderlich. Die Einstellungen dafür werden ebenfalls hier in der Config gesetzt. Wir empfehlen, RCON zu deaktivieren, um unbefugte Zugriffe zu verhindern.

### op-permission-level

Hier kannst du das Standard-OP-Level festlegen, das einem neuen Operator zu Beginn zugewiesen wird. Die jeweiligen Level und die individuelle Vergabe pro Spieler sind [hier](minecraft-addop.md) von uns genauer beschrieben.

### enable-query

Query stellt externen Diensten wie einer Webseite separate Daten bereit, z.B. die aktuelle Spielerzahl oder eine genaue Liste der aktuellen Spieler. So könntest du z.B. Daten auf einer Webseite mit PHP anzeigen. Einige Serverlisten nutzen diese Funktion, damit der Server korrekt gelistet wird.

### prevent-proxy-connections

Mit dieser Einstellung kannst du bestimmen, ob Spieler sich über VPN/Proxy verbinden dürfen. VPNs werden oft genutzt, um IP-Banns zu umgehen, daher kann die Option sehr nützlich sein. In manchen Fällen gibt es aber auch Einschränkungen, sodass normale Verbindungen fälschlicherweise blockiert werden.

:::info
Um umfangreiche Kontrolle über VPN/Proxy-Verbindungen zu bekommen, lohnt sich die Installation eines Plugins.

Viele kostenlose Plugins findest du schnell, dieses (allerdings kostenpflichtige) [Plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) hat uns am meisten überzeugt und schützt deinen Server vor jeglichen Bot-Attacken.
:::

### generator-settings

Wie im Singleplayer-Modus kann der Server eine Welt nach bestimmten Vorgaben erstellen. Ähnlich wie ein Seed kann die Welt vorher konfiguriert werden, wonach der Server die Welt generiert. Es bleibt aber eine zufällige Welt und ist daher nicht wie jede andere.

Ein Generationscode für eine Flachwelt könnte so aussehen:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Wenn auf dem Server ein spezielles Texturpaket genutzt werden soll, kann hier der **direkte Downloadlink** als Link angegeben werden. 
Das Pack wird dann nach Bestätigung durch den Spieler automatisch geladen und aktiviert.

### player-idle-timeout

Abwesende Spieler können mit dieser Option nach der angegebenen Anzahl Sekunden automatisch gekickt werden. Die Option ist sehr nützlich, wenn die Slots eines Servers stark ausgelastet sind und du inaktive Spieler kickst, um Platz für neue (möglicherweise aktive) Spieler zu schaffen.

### level-name

Die Welt heißt standardmäßig "world". Mit dieser Option kannst du einen anderen Namen definieren, nach dem die Welt benannt wird. Existiert bereits eine Welt und der Name wird hier geändert, wird automatisch eine neue Welt mit diesem Namen erstellt. Die alte Welt bleibt erhalten und befindet sich weiterhin im vorherigen Ordner.

### motd

Hier kannst du eine Nachricht definieren, die in der Serverliste angezeigt wird, wenn sie hinzugefügt wurde. Die Nachricht wird bei direkter Verbindung nicht angezeigt, außer es sind spezielle Mods im Client installiert. Die Nachricht kann mit allen möglichen Farben und Formatierungen gestaltet werden, die Minecraft bietet.

:::info
Das MOTD kannst du schnell und einfach mit diesem [Tool](https://minecraft.tools/en/motd.php) erstellen.
:::

### force-gamemode

Legt fest, ob der Spieler beim Betreten des Servers immer auf den Standard-Spielmodus gesetzt wird, wie oben beschrieben. Egal, in welchem Modus der Spieler den Server verlassen hat, der Standard-Spielmodus wird immer gesetzt.

### hardcore

Der Hardcore-Modus sorgt dafür, dass Spieler beim Tod gebannt oder in den Zuschauermodus versetzt werden. Wenn gewünscht, **muss** eine neue Welt erstellt werden, da der Hardcore-Modus Auswirkungen auf die Weltgenerierung hat.

### white-list

Aktiviert die [Whitelist](https://minecraft.fandom.com/wiki/Commands/whitelist), sodass nur Spieler, die auf der Liste stehen, Zugang bekommen. Die Befehle zum Hinzufügen, Entfernen und mehr findest du auf der verlinkten Seite.

### broadcast-console-to-ops

Legt fest, ob Operatoren eine Chat-Benachrichtigung erhalten, wenn Befehle im Spiel ausgeführt werden.

### pvp

Hiermit kannst du PVP auf dem Server an- oder ausschalten. Wenn PVP deaktiviert ist, können Spieler sich nicht mehr gegenseitig Schaden zufügen. Diese Option verhindert aber nicht z.B. das absichtliche Platzieren von Lava. Spieler können also weiterhin über Umwege angreifen.

### spawn-npcs

In Dörfern triffst du Dorfbewohner, wenn diese Option aktiviert ist. Ist sie auf *false* gesetzt, gibt es auf dem gesamten Server keine Dorfbewohner. Die Option ist sehr nützlich, wenn du den Handel nur auf Spieler beschränken und so die Wirtschaft eines Wirtschaft-Servers stärken möchtest.

### generate-structures

Diese Einstellung betrifft erneut den Weltgenerator. Hier kannst du bestimmen, ob Strukturen wie Dörfer oder Tempel in der Welt generiert werden sollen.

### spawn-animals

Legt fest, ob Tiere auf dem Server gespawnt werden. Eine Liste aller Tiere findest du
[hier](https://minecraft.fandom.com/wiki/Animal). 

### snooper-enabled

Wenn aktiviert, sendet der Server anonyme Daten an Mojang. Diese Daten werden für Weiterentwicklung und Optimierung genutzt. Die Option hat keinen Einfluss auf die Server-Performance.

### difficulty

Hier kannst du die allgemeine Schwierigkeit auf dem Server festlegen. Je nach Einstellung fügen Mobs mehr oder weniger Schaden zu. Genauere Infos und mögliche Optionen findest du [hier](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

Der Wert definiert die Größe, ab der Daten zwischen Client und Server komprimiert oder unkomprimiert gesendet werden. Bei einem kleinen Wert wie dem Standard 256 werden Daten ca. 20 Mal pro Sekunde ausgetauscht. Ein Wert von 512 ist empfehlenswert, um die Server-Performance zu entlasten und hat keine negativen Auswirkungen. Der Wert sollte **niemals** höher als 1024 gesetzt werden.

**Diese Einstellung sollte mit Vorsicht behandelt werden, da falsche Werte umfangreiche Probleme für Spieler verursachen und irreparablen Schaden an der Welt anrichten können.**

### level-type

Bestimmt den Weltentyp, nach dem der Weltgenerator die Welt erstellt. Nach Änderung dieser Option sollte eine **neue Welt** **erstellt** werden. Ansonsten gibt es unschöne Übergänge in der Welt, wo neue Chunks generiert werden.

| Wert | Bedeutung |
|--|--|
| DEFAULT | Normale Welt mit Bergen, Tälern, Dörfern etc. |
| FLAT | Eine komplett flache Welt, in der nur Dörfer enthalten sind |
| LARGEBIOMES | Ähnlich wie eine normale Welt, nur mit größeren Biomen |
| AMPLIFIED | Ebenfalls ähnlich wie eine normale Welt, aber sehr zerklüftet mit großen Höhenunterschieden |
| BUFFET | Eine Buffet-Welt, bei der die Einstellungen über *generator-settings* gesetzt werden |

### spawn-monsters

Legt fest, ob Monster auf dem Server gespawnt werden. Eine Liste aller Monster findest du 
[hier](https://minecraft.fandom.com/wiki/Mob). 

### max-tick-time

Regelt die maximale Länge eines Ticks. Verschiedene Aufgaben des Servers werden einem Tick zugeordnet. Dauert ein Tick länger als standardmäßig 60 Sekunden, wird der Server automatisch gestoppt.

Bei Forge-Servern ist das manchmal nervig, da Mods oft hohe Anforderungen stellen und dadurch etwas mehr Zeit brauchen. In so einem Fall kann der Wert auf *-1* gesetzt werden, was den automatischen Stopp deaktiviert.

### max-players

Legt die Anzahl der Slots fest, die belegt werden können, also die maximale Spieleranzahl auf dem Server.

### enforce-whitelist

Diese Option sorgt dafür, dass Änderungen an der Whitelist direkt übernommen werden. Normalerweise muss die Whitelist neu geladen werden, bevor sie aktiv ist.

### online-mode

Hier kannst du bestimmen, ob Spieler ohne Premium-Account auf den Server zugreifen können. Wichtig ist, dass bei einem öffentlichen Server Spieler Rechte erlangen können, indem sie den Namen eines Operators wählen und der Server **nur** den Namen abgleicht.

Ein Spieler würde so unbefugt Rechte erhalten. Um das zu verhindern, solltest du unbedingt ein Passwort-Plugin auf einem Plugin-fähigen Server wie Spigot installieren.

### allow-flight

Deaktiviert oder aktiviert den Minecraft-eigenen AntiCheat in Bezug auf Fliegen. Meistens ist es durch Hack-Clients möglich, ohne Erlaubnis zu fliegen.

:::info
Wir empfehlen aber immer, einen AntiCheat in Form eines Plugins zu installieren!
:::

### function-permission-level

Legt das OP-Level fest, mit dem Befehle ausgeführt werden können. Auf Level 4 können z.B. Befehle zum Stoppen des Servers oder zum Kicken/Bannen von Spielern ausgeführt werden.

<InlineVoucher />