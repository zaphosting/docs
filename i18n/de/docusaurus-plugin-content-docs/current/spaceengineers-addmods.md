---
id: spaceengineers-addmods
title: "Space Engineers: Mods installieren"
description: "Entdecke, wie du sicher Mods auf deinem Space Engineers Gameserver konfigurierst und hinzufügst für ein individuelles Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### Vorbereitung

Um Mods auf einem Server hinzufügen zu können, muss eine Konfigurationsdatei bearbeitet werden. Damit es keine Probleme bei der Übernahme der Änderungen gibt, stelle bitte sicher, dass dein Server vorher gestoppt ist!

Damit die richtige Konfig im weiteren Verlauf verarbeitet wird, muss vorher der Name des Savegames herausgefunden werden. Wenn die Einstellungen dafür nicht angepasst wurden, ist der Standard "zap001". Zur Sicherheit solltest du das aber wie folgt überprüfen:

Um zu den Einstellungen deines Servers zu gelangen, öffne den Punkt „Einstellungen“ in der linken Liste unter dem Reiter „Settings“

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

Der Name des Savegames kann im ersten Feld auf dieser Seite eingesehen oder angepasst werden. Diesen Namen musst du dir jetzt merken, damit später die richtige Konfigdatei bearbeitet werden kann.

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

Die Installation von **Notepad++** ist ebenfalls Voraussetzung für diese Anleitung, damit die Schritte genau so durchgeführt werden können!

## Mods raussuchen

Viele Mods findest du im Space Engineers Workshop. Den Workshop findest du [hier](https://steamcommunity.com/workshop/about/?appid=244850).

Nachdem du einen interessanten Mod gefunden hast, klickst du einmal darauf, um alle weiteren Details zu sehen. Gefällt dir der Mod, muss jetzt die Mod-ID gespeichert werden. Die Mod-ID ist meistens fett markiert an der Seite oder oben in der URL-Leiste:

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## Konfigdateien öffnen

Es gibt zwei Wege, die Dateien eines Servers zu bearbeiten. Zum einen wäre das über den [Zugang via FTP](gameserver-ftpaccess.md) möglich und zum anderen über den Config Editor im Webinterface selbst.

In diesem Fall wird die Konfig manuell via FTP bearbeitet, um Syntaxfehler in der Konfig zu vermeiden. Wie genau die Verbindung via FTP hergestellt wird, ist in der oben verlinkten Anleitung ausführlich beschrieben.

Sobald die Verbindung via FTP steht, musst du in folgendes Verzeichnis navigieren:

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

Dieser Ordner listet alle Savegames auf, die jemals auf dem Server erstellt wurden. Um die Konfigs des jeweiligen Savegames anzupassen, muss jetzt der entsprechende Ordner geöffnet werden. In unserem Beispiel wäre das der Ordner "zap001":

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

Die Sandbox-Datei muss jetzt in diesem Ordner bearbeitet werden. Genau diese Konfig muss geöffnet werden, wie im Screenshot gezeigt!

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## Mods hinzufügen

In der Konfig gibt es bereits einen Mod-Bereich, der sich am Ende der Konfig befindet. Diesen Bereich markieren wir mit der Maus und löschen ihn dann. Danach fügen wir folgenden Inhalt ein:

`<Mods></Mods>`

Sobald der Inhalt eingefügt ist, setzen wir den Cursor zwischen „&gt;“ & „&lt;“ und drücken einmal ENTER. Dadurch wird automatisch die korrekte Syntax verwendet und wir können weitermachen.

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

Im nächsten Schritt fügen wir den ersten Mod hinzu. Dafür arbeiten wir mit einem „ModItem“, das einen Mod bildet. Kopiere dazu folgenden Inhalt und füge ihn dann wie im GIF gezeigt in die Konfig ein:

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
Hier muss 12345 mit der Mod-ID deines ausgewählten Mods ersetzt werden!
:::

Wie im GIF zu sehen ist, müssen die gleichen Schritte einfach wiederholt werden, um weitere Mods hinzuzufügen. Nachdem alle gewünschten Mods eingetragen sind, kann die Konfig mit **STRG+S** gespeichert und geschlossen werden. Danach kann der Server normal gestartet werden und die Mods werden automatisch installiert.

<InlineVoucher />