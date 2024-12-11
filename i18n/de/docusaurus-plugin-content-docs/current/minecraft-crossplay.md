---
id: minecraft-crossplay
title: "Minecraft: Crossplay zwischen Minecraft Java und Bedrock-Editionen einrichten"
description: Informationen zum Einrichten von Crossplay zwischen Minecraft Java & Bedrock Editionen auf Ihrem Minecraft-Server von ZAP-Hosting – ZAP-Hosting.com-Dokumentation
sidebar_label: Java & Bedrock Crossplay
services:
  - gameserver
---

## Einführung

Traditionell war es nicht möglich, sowohl in der Minecraft Java- als auch in der Bedrock-Edition zusammen zu spielen, da beide Editionen als vollständig getrennte Plattformen betrachtet werden. Glücklicherweise kann man heutzutage Crossplay ermöglichen, indem man spezielle Plugins für Java Edition-Server verwendet, die es Spielern der Bedrock-Edition ermöglichen, zu spielen. In diesem Leitfaden werden wir den Prozess der Installation und Einrichtung des GeyserMC-Plugins zusammen mit dem Floodgate-Plugin untersuchen, um Crossplay zwischen beiden Plattformen zu ermöglichen und zu vereinfachen.

## Voraussetzungen

Um Crossplay einzurichten, benötigen Sie einen Minecraft-Server, auf dem eine der kompatiblen Java-Server-Software ausgeführt wird. Wir empfehlen die Verwendung von Paper, Spigot oder Bukkit, die die beliebtesten Optionen sind.

Sie sollten einen Minecraft-Spieleserver bereit haben, auf dem eines dieser Spiele installiert und aktiviert ist. Mehr dazu findest du in der [Spielwechsel](gameserver-gameswitch.md) Anleitung.

## Installation

Um mit der Installation zu beginnen, gehen Sie zum Web-Interface-Dashboard Ihres Spielservers und navigieren Sie zum Abschnitt **Einstellungen->Plugins**. Suchen Sie auf dieser Seite das Dropdown-Menü **GeyserMC** und wählen Sie es aus. Verwenden Sie die Schaltfläche Installieren, um das Plugin automatisch auf Ihrem Server zu installieren, und warten Sie, bis der Fortschrittsbalken vollständig ist.

Wir empfehlen außerdem die Installation des **Floodgate**-Plug-ins, das sich im selben Abschnitt befindet, da es verschiedene Vorteile bietet, wie z. B.:
- Bedrock-Edition-Spieler können beitreten, ohne ein Java-Konto zu benötigen.
- Bedrock-Edition-Skins können in der Java-Edition angezeigt werden.
- Verschiedene entwicklerbezogene Vorteile.

:::note
Das Floodgate-Plug-in ist optional, aber wir empfehlen es sehr, da es das Crossplay für Bedrock-Spieler erheblich erleichtert.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/PT4NEHKFnRsCE5B/preview)

Nachdem die Plugins nun auf Ihrem Server installiert sind, gehen Sie zum folgenden Abschnitt, um die Einstellungen zu konfigurieren.

## Plugins konfigurieren

Wählen Sie im selben Abschnitt **Plugins** auf der Weboberfläche das blaue Einstellungssymbol neben dem GeyserMC-Plugin aus, um automatisch zum entsprechenden Bereich im Abschnitt **Einstellungen** zu gelangen.

![](https://screensaver01.zap-hosting.com/index.php/s/RBQ23DatqiB63KS/preview)

Hier auf dieser Seite können Sie den Servernamen und die MOTD-Zeilen anpassen, die speziell für Bedrock-Edition-Spieler angezeigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/5F65z2yftaao7jm/preview)

Wenn Sie bis zum Ende der Seite scrollen, können Sie auch die Ports sehen, die Ihrem Server zugewiesen sind.

- Der **Spiele Port** ist der Hauptserverport, der verwendet werden sollte, wenn Sie eine Verbindung mit regulären Java Edition-Clients herstellen.
- Der **Port 5** ist der Port, der vom GeyserMC-Plugin verwendet wird. Sie sollten diesen verwenden, wenn Sie eine Verbindung mit Bedrock Edition-Clients herstellen.

Wenn Sie eine Verbindung von einem Client aus herstellen, stellen Sie sicher, dass Sie den richtigen Port verwenden, der auf der Minecraft-Client-Edition basiert.

:::tip
Für Kunden mit der **Own IP**-Serverkonfigurationsoption ist auf Anfrage eine benutzerdefinierte Portzuweisung möglich, um den Port nach Ihren Wünschen anzupassen. Sie können [den Support](https://zap-hosting.com/en/customer/support/) über ein Ticket kontaktieren, um dies zu beantragen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/k62FRXkQ8Frps2g/preview)

<!--
### Floodgate-Plugin

Wenn Sie sich für die Installation des Floodgate-Plugins entschieden haben, müssen Sie die GeyserMC-Konfigurationsdatei anpassen, um es als Hauptauthentifizierungsmethode zu aktivieren. Bitte stellen Sie sicher, dass Ihr Server ausgeschaltet ist, bevor Sie Konfigurationsdateien bearbeiten, da sonst Änderungen überschrieben werden können.

Gehen Sie zum Abschnitt **Configs** auf der Weboberfläche Ihres Spielservers und öffnen Sie die Datei `plugins/Geyser-[deine_servertype]/config.yml` über die blaue Schaltfläche zum Bearbeiten.

![](https://screensaver01.zap-hosting.com/index.php/s/ixCtkQ5WWWacfGe/preview)

Suchen Sie in dieser Datei den Parameter `auth-type` im Abschnitt `remote` und ändern Sie diesen Wert von **online** in **floodgate**, bevor Sie die Datei speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/c6JRFxPfjGBSWZi/preview)

GeyserMC verwendet nun das Floodgate-Plugin für die Benutzerauthentifizierung und bietet Ihnen verschiedene Vorteile, die bereits besprochen wurden.
-->

## Verbindung und Fehlerbehebung

Nachdem das Plugin konfiguriert wurde, starten Sie Ihren Server neu, um sicherzustellen, dass die neuen Einstellungen wirksam werden. Versuchen Sie nun, von beiden Spielversionen aus eine Verbindung zum Server herzustellen, um sicherzustellen, dass alles funktioniert.

Stellen Sie sicher, dass Sie je nach Spieledition die richtigen Ports verwenden. Dies sollte **Port 5** für Bedrock-Spieler und der **Spielport** für Java-Edition-Spieler sein, die Sie unter der Registerkarte **Einstellungen** finden. Sie können diese auch finden, indem Sie mit der Maus über das Informationssymbol auf dem Dashboard Ihrer Weboberfläche fahren.

![](https://screensaver01.zap-hosting.com/index.php/s/X8aLS5qknsHyCp3/preview)

Bei Erfolg sollten Sie nun in der Lage sein, spielübergreifend zu spielen und sich problemlos mit Kunden aus beiden Spielversionen zu verbinden.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Wenn Sie Probleme haben, eine Verbindung zum Server herzustellen, versuchen Sie es mit den folgenden Schritten zur Fehlerbehebung, die bei den meisten Problemen helfen sollten.

#### Client veraltet – Server veraltet

Dieser Fehler deutet darauf hin, dass die Spielversionen von Server und Client nicht übereinstimmen. Wenn dieses Problem bei Java Edition auftritt, wechseln Sie einfach über den Launcher zur richtigen Spielversion.

Leider können Sie die Spielversionen bei Bedrock-Editionen nicht einfach ändern. Wenn dieses Problem bei einem Minecraft Bedrock Edition-Client auftritt, stellen Sie daher sicher, dass Sie die App und den Server auf die neuesten Versionen aktualisieren.

Wir empfehlen außerdem die Verwendung der Plugins ViaVersion und ViaBackwards, die die Spielversionen erweitern, von denen aus der Server zugänglich ist, sodass Benutzer mit einer niedrigeren oder höheren Spielversion weiterhin eine Verbindung zum Server herstellen können. Gehen Sie wie zuvor zum Abschnitt **Plugins** auf der Weboberfläche und suchen Sie im Dropdown-Menü **Alle Plugins** nach **ViaVersion** und **ViaBackwards**. Verwenden Sie das grüne Download-Symbol, um sie auf Ihrem Server zu installieren.

:::note
Wenn Sie Probleme bei der Installation des Plugins über die Weboberfläche haben, ist es möglich, dass das Plugin nicht über eine stabile neueste Version verfügt. In solchen Fällen empfehlen wir, eine Beta-Version des Plugins manuell von der Website herunterzuladen und per FTP hochzuladen. Weitere Informationen hierzu finden Sie in unserem Leitfaden [Zugriff per FTP](gameserver-ftpaccess.md).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CiA3baYs9otnjbL/preview)

Sobald die Plugins installiert sind, versuchen Sie erneut, eine Verbindung herzustellen, was nun von einer größeren Anzahl von Spielversionen aus möglich sein sollte.

#### Verbindung zur Welt nicht möglich

Der häufigste Grund für diesen Fehler ist die Verwendung des falschen Ports beim Hinzufügen des Servers in Ihrem Client. Stellen Sie sicher, dass Sie den Port verwenden, der unter **Port 5** im Abschnitt **Einstellungen** der Weboberfläche Ihres Spielservers zu finden ist, wenn Sie eine Verbindung von Bedrock-Edition-Clients aus herstellen. Verwenden Sie für Java-Edition-Clients ebenfalls den Hauptwert **Spiele Port**.

Wenn das Problem weiterhin besteht, empfehlen wir, die Konfigurationsdatei des GeyserMC-Plugins zu überprüfen, um sicherzustellen, dass die richtigen Ports automatisch eingestellt wurden. Gehen Sie zum Abschnitt **Configs** auf Ihrer Weboberfläche und öffnen Sie die Datei `plugins/Geyser-[deine_servertype]/config.yml` über die blaue Schaltfläche Bearbeiten.

Suchen Sie in dieser Datei die `Port`-Parameter in den Abschnitten `bedrock` und `remote`. Stellen Sie sicher, dass der bedrock-Port auf den Wert unter **Port 5** im Abschnitt **Einstellungen** eingestellt ist und dass der remote-Port entweder auf **25565** oder den **Spiele Port** eingestellt ist.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Abschluss 

Herzlichen Glückwunsch, Sie haben das GeyserMC-Plugin erfolgreich auf Ihrem Minecraft-Server installiert und konfiguriert, wodurch Crossplay zwischen Java- und Bedrock-Editionen eingeführt wurde! Bei weiteren Fragen oder Problemen wenden Sie sich bitte an unser Support-Team, das Ihnen täglich zur Verfügung steht!