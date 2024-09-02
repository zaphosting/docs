---
id: spaceengineers-addmods
title: "Space Engineers: Installation von Mods"
description: Informationen, wie du Mod auf deinen Space Engeineers Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Mods installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Vorbereitung

Um Mods auf einem Server hinzufügen zu können, muss hierbei eine Konfigurationsdatei bearbeitet werden. Damit es hierbei keine Probleme bei der Übernähe der Änderungen gibt, stelle bitte sicher, dass dein Server hierbei zuvor gestoppt wird!

Damit im weiteren Verlauf die richtige Config bearbeitet wird, muss zuvor der Name des Savegames in Erfahrung gebracht werden.
Sofern die Einstellungen hierzu nicht angepasst wurden, lautet dieser standardmäßig "zap001". Prüfe dies jedochzur Sicherheit einmal, wie nun beschrieben:

Um zu den Einstellungen von deinem Server zu gelangen, öffne in der linken Listen unter dem Reiter "Einstellungen" den Punkt "Einstellungen"

![image](https://screensaver01.zap-hosting.com/index.php/s/HW3DZrMaijDfrnw/preview)

Auf dieser Seite kann im ersten Feld der Name des Savegames eingesehen werden oder auch angepasst werden.
Dieser Name muss sich nun gemerkt werden, damit später die richtige Konfigurationsdatei bearbeitet wird.

![image](https://screensaver01.zap-hosting.com/index.php/s/3Hx4pNLkAr3saaC/preview)

Die Installation von **Notepad++** ist zudem Vorrausetzung dieser Anleitung, damit die Schritte auch genau gleich durchgeführt werden können!

## Mods heraussuchen

Sehr viele Mods kann man im Workshop von Space Engineers finden.
Der Workshop kann [hier](https://steamcommunity.com/workshop/about/?appid=244850) gefunden werden.

Nachdem ein interessanter Mod gefunden wurde, klicken wir diese einmal an, um alle weiteren Details einsehen zu können.
Wenn der Mod einem gefällt, dann muss sich nun die Mod-ID nortiert werden. Die Mod-ID ist meist fett markiert auf der Seite oder oben in der URL-Leiste zu finden:

![image](https://screensaver01.zap-hosting.com/index.php/s/XSLW5Ysq5gFRoKg/preview)

## Konfigurationsdateien öffnen

Es gibt zwei Möglichkeiten die Dateien eines Servers bearbeiten zu können.
Zum einen wäre dies via [FTP](gameserver-ftpaccess.md) möglich und einmal durch den Config-Editor im Webinterface selbst.

In diesem Fall wird die Config manuell via FTP bearbeitet, um Syntax-Fehler in der Config zu vermeiden.
Wie genau die Verbindung via FTP hergestellt wird, wird in der oben verlinkten Anleitung genau beschrieben.

Sobald die Verbindung via FTP hergestellt wurde, muss in das folgende Verzeichnis navigiert werden:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

In diesem Ordner sind alle Savegames aufgelistet, welche jemals auf dem Server erstellt wurden.
Um die Configs des jeweiligen Savegames anpassen zu können, muss jetzt der entsprechende Ordner geöffnet werden.
In unserem Beispiel wäre das der Ordner "zap001":

![image](https://screensaver01.zap-hosting.com/index.php/s/Fox34KdXg9Ywm3M/preview)

In diesem Ordner muss jetzt die Sandbox-Datei bearbeitet werden.
Es muss genau diese Config geöffnet werden, wie im Screenshot dargestellt!

![grafik](https://screensaver01.zap-hosting.com/index.php/s/ramYJxx9opKZKeY/preview)


## Mods hinzufügen

Es gibt bereits einen Mod-Bereich in der Config, welcher sich am Ende der Config befindet. Diesen Teil markieren wir jedoch einmal mit der Maus und entfernen diesen dann.
Im Anschluss fügen wir folgenden Inhalt ein:

`<Mods></Mods>`

Sobald der Inhalt eingefügt ist, gehen wir mit dem Cursor zwischen "&gt;" & "&lt;" und drücken dann einmal ENTER.
Damit wird automatisch die korrekte Sytnax genutzt und wir können fortfahren.

![image](https://screensaver01.zap-hosting.com/index.php/s/JfBax75wn4kCbqE/preview)

Im nächsten Schritt fügen wir den ersten Mod hinzu. Hierzu arbeiten wir mit einem "ModItem", welches ein Mod bildet.
Hierzu kopieren wir den folgenden Inhalt und fügen ihn dann wie im Screenshot gezeigt in die Config ein:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![image](https://screensaver01.zap-hosting.com/index.php/s/stHa6DSEnP4gr45/preview)

:::info
Hierbei muss 12345 mit der Mod-ID deiner ausgeäwhlten Mod getauscht werden!
:::

Wie auch im Screenshot zu sehen, muss derselbe Schritt einfach nur erneut wiederholt werden, um einen Mod hinzuzufügen.
Nachdem alle gewünschten Mods hinzugefügt wurden, kann die Config mit **STRG+S** gespeichert werden und die Config geschlossen werden.
Danach kann der Server normal gestartet werden und die Mods werden dann automatisch installiert.
