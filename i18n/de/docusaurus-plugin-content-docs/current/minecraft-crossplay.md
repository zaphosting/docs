---
id: minecraft-crossplay
title: "Minecraft: Crossplay zwischen Minecraft Java und Bedrock-Editionen einrichten"
description: Informationen zum Einrichten von Crossplay zwischen Minecraft Java & Bedrock Editionen auf Ihrem Minecraft-Server von ZAP-Hosting – ZAP-Hosting.com-Dokumentation
sidebar_label: Java & Bedrock Crossplay
services:
  - gameserver
---

## Einführung

Traditionell war es nicht möglich, sowohl in der Minecraft Java- als auch in der Bedrock-Edition zusammen zu spielen, da beide Editionen als vollständig getrennte Plattformen betrachtet werden. Glücklicherweise kann man heutzutage Crossplay ermöglichen, indem man spezielle Plugins für Java Edition-Server verwendet, die es Spielern der Bedrock-Edition ermöglichen, zu spielen. In dieser Anleitung werden wir den Prozess der Installation und Einrichtung des GeyserMC-Plugins zusammen mit dem Floodgate-Plugin untersuchen, um Crossplay zwischen beiden Plattformen zu ermöglichen und zu vereinfachen.

## Voraussetzungen

Um Crossplay einzurichten, benötigst du einen Minecraft-Server, auf dem eine der kompatiblen Java-Server-Software ausgeführt wird. Wir empfehlen die Verwendung von Paper, Spigot oder Bukkit, die die beliebtesten Optionen sind.

Du solltest einen Minecraft Gameserver bereit haben, auf dem eines dieser Spiele installiert und aktiviert ist. Mehr dazu findest du in der [Spielwechsel](gameserver-gameswitch.md) Anleitung.

## Installation

Um mit der Installation zu beginnen, gehe zum Webinterface Dashboard deines Gameservers und navigiere zum Abschnitt **Einstellungen->Plugins**. Suche auf dieser Seite das Dropdown-Menü **GeyserMC** und wähle es aus. Verwende den Button Installieren, um das Plugin automatisch auf deinem Server zu installieren und warte, bis der Fortschrittsbalken abgeschlossen ist.

Wir empfehlen außerdem die Installation des **Floodgate**-Plugins, welches sich im selben Abschnitt befindet, da es verschiedene Vorteile bietet, wie z. B.:
- Bedrock-Edition-Spieler können beitreten, ohne ein Java-Konto zu benötigen.
- Bedrock-Edition-Skins können in der Java-Edition angezeigt werden.
- Verschiedene entwicklerbezogene Vorteile.

:::note
Das Floodgate-Plugin ist optional, aber wir empfehlen es sehr, da es das Crossplay für Bedrock-Spieler erheblich erleichtert.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/PT4NEHKFnRsCE5B/preview)

Nachdem die Plugins nun auf deinem Server installiert sind, gehe zum folgenden Abschnitt, um die Einstellungen zu konfigurieren.

## Plugins konfigurieren

Wähle im selben Abschnitt **Plugins** im Webinterface das blaue Einstellungssymbol neben dem GeyserMC Plugin aus, um automatisch zum entsprechenden Bereich im Abschnitt **Einstellungen** zu gelangen.

![](https://screensaver01.zap-hosting.com/index.php/s/RBQ23DatqiB63KS/preview)

Hier auf dieser Seite kannst du den Servernamen und die MOTD-Zeilen anpassen, die speziell für Bedrock-Edition-Spieler angezeigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/5F65z2yftaao7jm/preview)

Wenn du bis zum Ende der Seite scrollst, dann kannst du auch die Ports sehen, die deinem Server zugewiesen sind.

- Der **Spiele Port** ist der Hauptserverport, der verwendet werden sollte, wenn du eine Verbindung mit dem regulären Java Edition-Client herstellst.
- Der **Port 5** ist der Port, der vom GeyserMC-Plugin verwendet wird. Du solltest diesen verwenden, wenn du eine Verbindung mit dem Bedrock Edition-Client herstellst.

Wenn du eine Verbindung von einem Client aus hestellst, dann stelle sicher, dass du den richtigen Port verwendest, der auf der Minecraft-Client-Edition basiert.

:::tip
Für Kunden mit der **Eigene IP-Adressen** Serverkonfigurationsoption ist auf Anfrage eine benutzerdefinierte Portzuweisung möglich, um den Port nach deinen Wünschen anzupassen. Du kannst [den Support](https://zap-hosting.com/de/customer/support/) über ein Ticket kontaktieren, um dies zu beantragen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/k62FRXkQ8Frps2g/preview)

<!--
### Floodgate-Plugin

Wenn du dich für die Installation des Floodgate Plugins entschieden hast, dann musst du die GeyserMC-Konfigurationsdatei anpassen, um es als Hauptauthentifizierungsmethode zu aktivieren. Bitte stelle sicher, dass dein Server ausgeschaltet ist, bevor du die Konfigurationsdateien bearbeitest, da sonst Änderungen überschrieben werden können.

Gehe zum Abschnitt **Configs** beim Dashboard deines Gameservers und öffne die Datei `plugins/Geyser-[deine_servertype]/config.yml` über den blauen Button zum Bearbeiten.

![](https://screensaver01.zap-hosting.com/index.php/s/ixCtkQ5WWWacfGe/preview)

Suche in dieser Datei den Parameter `auth-type` im Abschnitt `remote` und ändere diesen Wert von **online** in **floodgate**, bevor du die Datei speicherst.

![](https://screensaver01.zap-hosting.com/index.php/s/c6JRFxPfjGBSWZi/preview)

GeyserMC verwendet nun das Floodgate Plugin für die Benutzerauthentifizierung und bietet dir verschiedene Vorteile, die bereits erläutert wurden.
-->

## Verbindung und Fehlerbehebung

Nachdem das Plugin konfiguriert wurde, starte deinen Server neu, um sicherzustellen, dass die neuen Einstellungen wirksam werden. Versuche nun, von beiden Spielversionen aus eine Verbindung zum Server herzustellen, um sicherzustellen, dass alles funktioniert.

Stelle sicher, dass du je nach Spieledition die richtigen Ports verwendest. Dies sollte **Port 5** für Bedrock-Spieler und der **Spielport** für Java-Edition-Spieler sein, die du unter dem Abschnitt **Einstellungen** findest. Du kannst diese auch finden, indem du mit der Maus über das Informationssymbol auf dem Dashboard deines Webinterfaces hoverst.

![](https://screensaver01.zap-hosting.com/index.php/s/X8aLS5qknsHyCp3/preview)

Bei Erfolg solltest du nun in der Lage sein, spielübergreifend zu spielen und sich problemlos mit Spielern aus beiden Spielversionen zu verbinden.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Wenn du Probleme hast, eine Verbindung zum Server herzustellen, versuche es mit den folgenden Schritten zur Fehlerbehebung, die bei den meisten Problemen helfen sollten.

#### Client veraltet – Server veraltet

Dieser Fehler deutet darauf hin, dass die Spielversionen von Server und Client nicht übereinstimmen. Wenn dieses Problem bei Java Edition auftritt, wechsel einfach über den Launcher zur richtigen Spielversion.

Bedauerlicherweise kannst du die Spielversionen bei Bedrock-Editionen nicht einfach ändern. Wenn dieses Problem bei einem Minecraft Bedrock Edition-Client auftritt, dann stelle sicher, dass du den Client und den Server auf die neuesten Versionen aktualisierst.

Wir empfehlen außerdem die Verwendung der Plugins ViaVersion und ViaBackwards, die die Spielversionen erweitern, von denen aus der Server zugänglich ist, sodass Benutzer mit einer niedrigeren oder höheren Spielversion weiterhin eine Verbindung zum Server herstellen können. Gehe wie zuvor zum Abschnitt **Plugins** im Webinterface und suche im Dropdown-Menü **Alle Plugins** nach **ViaVersion** und **ViaBackwards**. Verwende das grüne Download-Symbol, um diese auf deinem Server zu installieren.

:::note
Wenn du Probleme bei der Installation des Plugins über das Webinterface hast, ist es möglich, dass das Plugin nicht über eine stabile neueste Version verfügt. In solchen Fällen empfehlen wir, eine Beta-Version des Plugins manuell von der Website herunterzuladen und per FTP hochzuladen. Weitere Informationen hierzu findest du in unserer Anleitung [Zugriff per FTP](gameserver-ftpaccess.md).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CiA3baYs9otnjbL/preview)

Sobald die Plugins installiert sind, versuche erneut, eine Verbindung herzustellen, was nun von einer größeren Anzahl von Spielversionen aus möglich sein sollte.

#### Verbindung zur Welt nicht möglich

Der häufigste Grund für diesen Fehler ist die Verwendung des falschen Ports beim Hinzufügen des Servers in deinem Client. Stelle sicher, dass du den Port verwendest, der unter **Port 5** im Abschnitt **Einstellungen** im Webinterface deines Gameservers zu finden ist, wenn du eine Verbindung von dem Bedrock-Edition-Client aus herstellst. Verwende für den Java-Edition-Client ebenfalls den Hauptwert **Spiele Port**.

Wenn das Problem weiterhin besteht, empfehlen wir, die Konfigurationsdatei des GeyserMC-Plugins zu überprüfen, um sicherzustellen, dass die richtigen Ports automatisch eingestellt wurden. Gehe zum Abschnitt **Configs** im Webinterface und öffne die Datei `plugins/Geyser-[deine_servertype]/config.yml` über den blauen Button **Bearbeiten**.

Suche in dieser Datei die `Port`-Parameter in den Abschnitten `bedrock` und `remote`. Stelle sicher, dass der Bedrock-Port auf den Wert von **Port 5** im Abschnitt **Einstellungen** eingestellt ist und dass der Remote-Port entweder auf **25565** oder den **Spiele Port** eingestellt ist.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Abschluss 

Herzlichen Glückwunsch, du hast das GeyserMC Plugin erfolgreich auf deinem Minecraft Server installiert und konfiguriert, womit Crossplay zwischen Java- und Bedrock-Editionen nun unterstützt wird. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂