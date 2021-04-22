---
id: spaceengineers_addmods
title: Space Engineers: Mods auf Server installieren
description: Informationen, wie du Mod auf deinen Space Engeineers Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Mods installieren
---

### Vorbereitung

Um Mods auf einem Server hinzufügen zu können, muss hierbei eine Config-Datei bearbeitet werden.
Damit es hierbei keine Probleme bei der Übernahe der Änderungen gibt, stelle bitte sicher, dass dein Server hierbei zuvor gestoppt wird!

Damit im weiteren Verlauf die richtige Config bearbeitet wird, muss zuvor der Name des Savegames in Erfahrung gebracht werden.
Sofern die Einstellungen hierzu nicht angepasst wurden, lautet dieser Standardmäßig "zap001". Prüfe dies jedochzur Sicherheit einmal, wie nun beschrieben:

Um zu den Einstellungen von deinem Server zu gelangen, öffne in der linke Listen unter dem Reiter "Einstellungen" den Punkt "Einstellungen"

![](https://screensaver01.zap-hosting.com/index.php/s/ZRiabMsr6GAg9bx/preview)

Auf dieser Seite kann im ersten Feld der Name des Savegames eingesehen werden oder auch angepasst werden.
Dieser Name muss sich nun gemerkt werden, damit später die richtige Config-Datei bearbeitet wird.

![](https://screensaver01.zap-hosting.com/index.php/s/ngPdPtmTKHKC3zR/preview)

Die Installation von **Notepad++** ist zudem Vorrausetzung dieser Anleitung, damit die Schritte auch genau gleich durchgeführt werden können!

## Mods raussuchen

Sehr viele Mods kann man im Workshop von Space Engineers finden.
Der Workshop kann [hier](https://steamcommunity.com/workshop/about/?appid=244850) gefunden werden.

Nachdem eine interessante Mod gefunden wurde, klicken wir diese einmal an um alle weiteren Details einsehen zu können.
Wenn die Mod einem gefällt, dann muss sich nun die Mod-ID nortiert werden. Die Mod-ID ist meist Fett markiert auf der Seite oder oben in der URL-Leiste zu finden:

![](https://screensaver01.zap-hosting.com/index.php/s/fPo6jNKmb8nEXC9/preview)

## Config-Dateien öffnen

Es gibt zwei Möglichkeiten die Dateien eines Servers bearbeiten zu können.
Zum einen wäre dies via [FTP](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/) möglich und einmal durch den Config-Editor im Webinterface selbst.

In diesem Fall wird die Config manuell via FTP bearbeitet, um Syntax-Fehler in der Config zu vermeiden.
Wie genau die Verbindung via FTP hergestellt wird, wird in der oben verlinkten Anleitung genau beschrieben.

Sobald die Verbindung via FTP hergestellt wurde, muss in das folgende Verzeichnis navigiert werden:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

In diesem Ordner sind alle Savegames aufgelistet, welche jemals auf dem Server erstellt wurden.
Um die Configs des jeweiligen Savegames anpassen zu können, muss nun der entsprechende Ordner geöffnet werden.
In unserem Beispiel wäre das der Ordner "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/SGfJMRHsngmJFdY/preview)

In diesem Ordner muss nun die Sandbox-Datei bearbeitet werden.
Es muss genau diese Config geöffnet werden, wie im Screenshot dargestellt!

![](https://screensaver01.zap-hosting.com/index.php/s/NfYkkMbsirEJ5Mt/preview)

## Mods hinzufügen

Es gibt bereits einen Mod-Bereich in der Config, welcher sich am Ende der Config befindet. Diesen Teil markieren wir jedoch einmal mit der Maus und entfernen diesen dann.
Im Anschluss fügen wir folgenden Inhalt ein:

`<Mods></Mods>`

Sobald der Inhalt eingefügt ist, gehen wir mit dem Cursor zwischen ">" & "<" und drücken dann einmal ENTER.
Damit wird automatisch die korrekte Sytnax genutzt und wir können fortfahren.

![](https://screensaver01.zap-hosting.com/index.php/s/xDEG26pY6fWN9cc/download)

Im nächsten Schritt fügen wir die erste Mod hinzu. Hierzu arbeiten wir mit einem "ModItem", welches eine Mod bildet.
Hierzu kopieren wir den folgenden Inhalt und fügen Ihn dann wie im GIF gezeigt in die Config ein:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/WefE3SkkG3FRqP5/download)

> Hierbei muss 12345 mit der Mod-ID deiner ausgeäwhlten Mod getauscht werden!

Wie auch im GIF zu sehen muss der selbe Schritte einfach nur erneut wiederholt werden um eine Mod hinzuzufügen.
Nachdem alle gewünschten Mods hinzugefügt wurden, kann die Config mit **STRG+S** gespeichert werden und die Config geschlossen werden.
Danach kann der Server normal gestartet werden und die Mods werden dann automatisch installiert.
