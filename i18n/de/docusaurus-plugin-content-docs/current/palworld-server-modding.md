---
id: palworld-server-modding
title: "Palworld: Installieren von Mods für Palworld"
description: Informationen über die Installation von Mods auf deinem Palworld-Server oder Spiel-Client von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Mods installieren
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Einführung

Seit der Veröffentlichung von Palworld sind immer wieder neue spannende Mods online gegangen, die das Spielerlebnis verbessern und das Spiel noch unterhaltsamer machen. In dieser Anleitung erklären wir dir, wie du Modifikationen (Mods) zu deinem Palworld Server und/oder Spielclient hinzufügst.

<YouTube videoId="x4tfL3Vi5qE" title="How To Install Mods On Your Palworld Server!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

### Wichtige Informationen

Gegenwärtig kannst du verfügbare Mods auf Modding-Seiten von Drittanbietern ansehen und herunterladen. Wir empfehlen die Nutzung von Seiten wie [Nexus Mods](https://www.nexusmods.com/palworld/) oder [Curseforge](https://www.curseforge.com/palworld/), die in der Modding-Szene einen guten Ruf genießen. Du kannst derzeit keine Mods über Steam Workshop herunterladen.

:::note
ZAP-Hosting haftet nicht für mögliche Veränderungen/Schäden an deinen Serverdateien oder deiner Welt durch die Installation von Mods. Wir raten dir dringend, Backups zu machen, bevor du weitermachst. Mehr über Backups erfährst du in unserem [Palworld Savegame Anleitung](palworld-server-savegames.md), in dem dieses Thema ausführlich behandelt wird.
:::

:::info
Wir unterstützen derzeit nur PAK-Mods (.PAK-Dateien). Mods, die aus Sicherheitsgründen eine ausführbare Datei benötigen, kannst du nicht verwenden.
:::



### Server & Client-seitige Mods

Wenn du Mods auswählst, musst du zuerst feststellen, ob es sich um serverseitige oder clientseitige Mods handelt. Am einfachsten kannst du das herausfinden, indem du die Beschreibung der Mod auf der Website durchsuchst oder den Mod-Autor direkt kontaktierst.

Serverseitige Skripte können direkt auf dem Server installiert werden und erfordern kein Eingreifen der Spieler/innen. Bei clientseitigen Mods hingegen muss jeder Benutzer, der eine Verbindung herstellen möchte, die Mod selbst herunterladen und lokal in seinen Spieldateien installieren.

:::info
Du musst sicherstellen, dass die Mod, die du verwenden möchtest, mit der aktuellen Spielversion von Palworld kompatibel ist.
:::



## Schritt 1: Vorbereiten der PAK-Datei

Auf Modding-Websites, wie den in der Einführung vorgeschlagenen, kannst du eine große Auswahl an verschiedenen Mods durchsuchen und herunterladen.

:::info
Zur Erinnerung: Aus Sicherheitsgründen unterstützen wir derzeit nur PAK-Mods (.PAK-Dateien).
:::

Gehe zu der Mod, die du verwenden möchtest, und lade sie lokal auf dein Gerät herunter. Falls nötig, entpacke die Dateien mit einem Tool wie [7zip](https://www.7-zip.org/), um die **.pak** Datei zu extrahieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Schritt 2: Hochladen per FTP

Sobald du die PAK-Dateien zum Hochladen bereit hast, gehst du zum Bereich **Tools->FTP-Browser** im Webinterface deines Gameservers. 

Du brauchst einen FTP-Client, um dich mit deinem Server zu verbinden. Wenn du keinen FTP-Client hast oder Hilfe bei der FTP-Verbindung brauchst, verwende bitte unsere [Zugriff per FTP Anleitung](gameserver-ftpaccess.md).

In deinem Webinterface kannst du die Schaltfläche **Direktverbindung** verwenden. Dadurch wird das FTP-Programm deiner Wahl geöffnet und du wirst automatisch eingeloggt. 

Alternativ kannst du die Anmeldedaten, die du auf der Seite FTP-Browser findest, auch manuell in deinen FTP-Client eingeben und dich verbinden.

![image](https://github.com/zaphosting/docs/assets/42719082/01a28fcf-c576-4c97-9090-9201bdb01d04)

Als nächstes musst du die PAK-Dateien für die Mod hochladen, die du zuvor vorbereitet hast. Du musst sie in das folgende Verzeichnis hochladen:
```
../g[dein_zapid]/palworld-windows/Pal/Content/Paks/ # Für die Windows-Version
../g[dein_zapid]/palworld-linux/Pal/Content/Paks/ # Für die Linux-Version
```

![img](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

Und das war's mit der Serverseite! Jetzt ist es an der Zeit, an der Client-Seite zu arbeiten.



## Schritt 3: Mods clientseitig installieren

Jetzt, wo alle Mods auf dem Server installiert sind, müssen wir sicherstellen, dass alle Clients, die dem Server beitreten wollen, das Gleiche tun. Sie müssen diesen Vorgang wiederholen. Derzeit gibt es keine Möglichkeit, dass ein Client automatisch Mods abruft und herunterlädt, wenn er dem Server beitritt.

Öffne zunächst Steam und klicke mit der rechten Maustaste auf Palworld, wähle Verwalten und durchsuche lokale Dateien.

![img](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Es wird ein Ordner mit deiner Palworld-Spielinstallation auf deinem lokalen Gerät angezeigt.

![img](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Navigiere nun in das folgende Verzeichnis: 
```
../Palworld/Pal/Content/Paks/
```

Verschiebe die **.pak** Dateien der Mods in diesen Ordner. Wiederhole dies für jede weitere Mod, die du hinzugefügt hast.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Schritt 4: Palworld starten und mit dem Server verbinden

Jetzt kannst du dich mit deinem Palworld Server verbinden und das Erlebnis mit einem Haufen neuer Mods genießen. Benutze unsere [Palworld Connect Anleitung](palworld-connect.md), wenn du Hilfe beim Verbinden mit deinem Server brauchst.

Sobald du dich eingeloggt hast, solltest du die Unterschiede sehen können, die die Mods verursacht haben.

Auf unserem Testserver verwenden wir zum Beispiel die Minecraft-Blocks-Mod:

![img](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Du hast erfolgreich Mods auf deinem Palworld-Server installiert. Wenn du Probleme mit dem Modding hast, sieh dir bitte den Abschnitt zur Fehlersuche unten an.



## Fehlersuche

In diesem Abschnitt über die Fehlersuche stellen wir dir einige häufige Gründe für Probleme vor und zeigen dir Schritte zur Fehlerbehebung auf, mit denen du das Problem eingrenzen kannst. Bitte bedenke, dass die Modifikation noch in den Kinderschuhen steckt und noch nicht offiziell ist, daher ist es wahrscheinlich, dass Fehler auftreten.

#### Sicherstellen, dass die Mod-Version kompatibel ist

Vergewissere dich, dass die Mods, die du installiert hast, mit der aktuellen Spielversion von Palworld kompatibel sind. Wenn dies nicht der Fall ist, kann es sein, dass du Fehler erhältst und bestimmte Funktionen der Mods nicht funktionieren. Wenn die Mod veraltet ist, solltest du den Autor der Mod kontaktieren und ein Update anfordern.

#### Starte den Server neu

Starten Sie den Server neu, nachdem Sie Änderungen vorgenommen haben oder wenn Sie keine Mods mehr sehen. Wir raten dir, dich mit dem Mod-Autor in Verbindung zu setzen, wenn du Fehler oder Bugs bei der Verwendung bestimmter Mods feststellst.

#### Suche in den Logs nach Fehlern

Eine erste mögliche Lösungsstrategie ist es, im Webinterface deines Gameservers den Abschnitt **Informationen->Log-Dateien** zu überprüfen. Diese Dateien enthalten eine Reihe von Logs mit Informationen über den Server, wie z.B. aktuelle Ereignisse, Hinweise oder Fehlermeldungen.

Vor allem Fehlermeldungen können helfen, die Ursache eines Problems zu erkennen und besser zu verstehen. Oft können Schwierigkeiten durch einen gezielten Blick in die Logdateien aufgedeckt und behoben werden.

:::info
Benötigst du zusätzliche Hilfe? Kein Problem, melde dich einfach bei unserer [Discord Community](https://discord.com/invite/zaphosting) an oder erstelle einen Beitrag in unserem [r/zaphosting Subreddit](https://www.reddit.com/r/zaphosting/), wo wir und die Community dir bei deinen Fragen helfen können.

Benötigst du offiziellen Support? Bitte [erstelle ein Ticket](https://zap-hosting.com/en/customer/support/) auf unserer Website mit so vielen Details wie möglich und wir werden uns so schnell wie möglich bei dir melden! :)
:::