---
id: minecraft-crossplay
title: "Minecraft: Crossplay zwischen Minecraft Java & Bedrock Edition einrichten"
description: "Entdecke, wie du nahtloses Crossplay zwischen Minecraft Java und Bedrock mit den Plugins GeyserMC und Floodgate für ein verbessertes Multiplayer-Erlebnis aktivierst → Jetzt mehr erfahren"
sidebar_label: Java & Bedrock Crossplay
services:
  - gameserver-minecraft
---

## Einführung

Traditionell war gemeinsames Spielen über Minecraft Java und Bedrock Editionen hinweg nicht möglich, da beide Editionen als komplett getrennte Plattformen gelten. Glücklicherweise kannst du heutzutage Crossplay ermöglichen, indem du spezielle Plugins für Java Edition Server nutzt, die es Bedrock-Spielern erlauben, mitzuspielen. In dieser Anleitung zeigen wir dir, wie du das GeyserMC Plugin zusammen mit dem Floodgate Plugin installierst und einrichtest, um Crossplay zwischen beiden Plattformen einfach und möglich zu machen.

## Vorbereitung

Um Crossplay einzurichten, brauchst du einen Minecraft Gameserver, der eine der kompatiblen Java Server-Softwares nutzt. Wir empfehlen Paper, Spigot oder Bukkit, da diese die beliebtesten Optionen sind.

Du solltest einen Minecraft Gameserver mit einem dieser Spiele installiert und aktiviert haben. Falls du dabei Hilfe brauchst, schau dir unsere [Game Change](gameserver-gameswitch.md) Anleitung an.

## Installation

Starte die Installation, indem du dich im Dashboard deines Gameservers im Webinterface anmeldest und zum Bereich **Einstellungen->Plugins** navigierst. Dort findest du das Dropdown-Menü für **GeyserMC**. Wähle es aus und klicke auf den Installationsbutton, um das Plugin automatisch auf deinem Server zu installieren. Warte, bis die Fortschrittsanzeige abgeschlossen ist.

Wir empfehlen außerdem, das **Floodgate** Plugin im selben Bereich zu installieren, da es dir folgende Vorteile bringt:
- Bedrock Edition Spieler können ohne Java-Account beitreten.
- Bedrock Skins werden in der Java Edition angezeigt.
- Verschiedene Entwickler-Vorteile.

:::note
Das Floodgate Plugin ist optional, aber wir empfehlen es sehr, da es das Crossplay für Bedrock-Spieler deutlich erleichtert.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

Nachdem die Plugins installiert sind, geht’s im nächsten Abschnitt an die Konfiguration.

## Plugins konfigurieren

Im selben **Plugins** Bereich im Webinterface klickst du auf das blaue Zahnrad-Symbol neben dem GeyserMC Plugin. Dadurch gelangst du automatisch zum passenden Bereich in den **Einstellungen**.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Hier kannst du den Servernamen und die MOTD-Zeilen anpassen, die speziell für Bedrock Edition Spieler angezeigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

Scrollst du ganz nach unten, siehst du die Ports, die deinem Server zugewiesen sind.

- Der **Game Port** ist der Hauptserver-Port, der für Verbindungen von regulären Java Edition Clients genutzt wird.
- Der **Port 5** ist der Port, den das GeyserMC Plugin verwendet. Diesen solltest du für Verbindungen von Bedrock Edition Clients nutzen.

Achte beim Verbinden darauf, den richtigen Port je nach Minecraft Edition zu verwenden.

:::tip
Kunden mit der Serverkonfiguration **Eigene IP** können auf Anfrage eine individuelle Port-Zuweisung erhalten, um den Port nach Wunsch anzupassen. Du kannst dazu einfach ein [Support-Ticket](https://zap-hosting.com/en/customer/support/) eröffnen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

<!--

### Floodgate Plugin

Falls du das Floodgate Plugin installiert hast, musst du die GeyserMC Konfigurationsdatei anpassen, um es als Haupt-Authentifizierungsmethode zu aktivieren. Bitte stelle sicher, dass dein Server ausgeschaltet ist, bevor du Konfigurationsdateien bearbeitest, da sonst Änderungen überschrieben werden könnten.

Gehe im Webinterface zu **Configs** und öffne die Datei `plugins/Geyser-[dein_servertype]/config.yml` mit dem blauen Bearbeiten-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/ixCtkQ5WWWacfGe/preview)

Suche in der Datei den Parameter `auth-type` im Abschnitt `remote` und ändere den Wert von **online** auf **floodgate**, bevor du speicherst.

![](https://screensaver01.zap-hosting.com/index.php/s/c6JRFxPfjGBSWZi/preview)

GeyserMC nutzt nun das Floodgate Plugin für die Nutzer-Authentifizierung und bietet dir die zuvor genannten Vorteile.
-->

## Verbinden & Fehlerbehebung

Nachdem du die Plugins konfiguriert hast, starte deinen Server neu, damit die neuen Einstellungen aktiv werden. Versuche dann, dich von beiden Editionen aus mit dem Server zu verbinden, um sicherzugehen, dass alles funktioniert.

Achte darauf, die richtigen Ports je nach Edition zu verwenden: **Port 5** für Bedrock Spieler und den **Game Port** für Java Spieler. Diese findest du unter dem Tab **Einstellungen** oder, indem du im Dashboard des Webinterfaces über das Info-Symbol fährst.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

Wenn alles klappt, kannst du jetzt problemlos Crossplay nutzen und dich von beiden Editionen verbinden.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Falls du Verbindungsprobleme hast, probiere diese Schritte zur Fehlerbehebung aus, die die häufigsten Probleme lösen sollten.

#### Client veraltet – Server veraltet

Dieser Fehler bedeutet, dass Server- und Client-Versionen nicht übereinstimmen. Bei Java Edition kannst du einfach im Launcher die richtige Version auswählen.

Bei Bedrock Edition ist das Ändern der Version nicht so einfach. Stelle daher sicher, dass sowohl App als auch Server auf dem neuesten Stand sind.

Wir empfehlen außerdem die Plugins ViaVersion und ViaBackwards zu installieren, die den Server für verschiedene Spielversionen zugänglich machen. So können Nutzer mit älteren oder neueren Versionen trotzdem verbinden. Gehe dazu im Webinterface zum Bereich **Plugins**, öffne das Dropdown-Menü **Alle Plugins** und suche nach **ViaVersion** und **ViaBackwards**. Klicke auf das grüne Download-Symbol, um sie zu installieren.

:::note
Falls die Installation über das Webinterface nicht klappt, kann es sein, dass keine stabile neueste Version des Plugins verfügbar ist. In dem Fall empfehlen wir, eine Beta-Version manuell von der Webseite herunterzuladen und per FTP hochzuladen. Mehr dazu findest du in unserer [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

Nach der Installation versuche erneut, dich zu verbinden – jetzt sollte es mit mehr Spielversionen funktionieren.

#### Verbindung zur Welt nicht möglich

Der häufigste Grund ist, dass der falsche Port beim Hinzufügen des Servers im Client verwendet wird. Nutze für Bedrock Edition den unter **Port 5** angegebenen Port in den **Einstellungen** deines Gameservers. Für Java Edition Clients gilt der Haupt-**Game Port**.

Wenn das Problem weiterhin besteht, überprüfe die GeyserMC Konfigurationsdatei, ob die Ports korrekt gesetzt sind. Gehe im Webinterface zu **Configs** und öffne die Datei `plugins/Geyser-[dein_servertype]/config.yml` mit dem blauen Bearbeiten-Button.

Suche die `port`-Parameter unter den Abschnitten `bedrock` und `remote`. Stelle sicher, dass der Bedrock-Port dem Wert von **Port 5** in den **Einstellungen** entspricht und der Remote-Port auf **25565** oder den **Game Port** gesetzt ist.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Fazit

Glückwunsch, du hast erfolgreich das GeyserMC Plugin auf deinem Minecraft Gameserver installiert und konfiguriert und damit Crossplay zwischen Java und Bedrock Edition ermöglicht! Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂