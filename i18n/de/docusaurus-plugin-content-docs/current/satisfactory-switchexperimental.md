---
id: satisfactory-switchexperimental
title: "Satisfactory: Experimental Build"
description: "Entdecke die Vorteile und Risiken der Nutzung von Satisfactorys Experimental Build, um große Updates frühzeitig zu testen und dein Gameplay zu verbessern → Jetzt mehr erfahren"
sidebar_label: Experimental Build
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Was ist der Experimental Build?
Satisfactory gibt es in zwei Versionen: dem regulären Build und dem Experimental Build. Der reguläre Build ist zuverlässiger, stabiler und weniger fehleranfällig, da er eine ausgereiftere Version ist. Der Experimental Build hingegen bietet dir Zugriff auf große Patches zuerst, bevor sie als regulärer Build veröffentlicht werden. Dadurch gibt es zwar mehr Bugs und häufigere Updates, aber du kannst die großen Neuerungen als Erster ausprobieren!

:::info
Hinweis: Egal welchen Build du wählst, dein Server und dein Spielclient müssen auf derselben Build-Version sein, damit eine Verbindung möglich ist.
:::

<InlineVoucher />

## Wie wechselt man zum Experimental Build?
Über unser Gameserver-System kannst du den Build deines Servers ganz einfach über unsere Webseite ändern. Bevor du startest, empfehlen wir dir, deine Satisfactory-Savegames zu sichern, da der Wechsel des Builds alle Dateien löscht.

### Savegames sichern
Das Sichern deines gesamten Gameservers oder deiner Savegames ist super easy. Gehe auf die Satisfactory-Produktseite und öffne den Reiter `Tools -> Backups`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

Auf dieser Seite kannst du viele Funktionen nutzen, darunter automatische Backups, die wir in [Backups](gameserver-backups.md) genauer erklären. Hier konzentrieren wir uns auf ein manuelles Backup.

Oben auf der Seite klickst du einfach auf das grüne + Icon und bestätigst die Abfrage, um ein Backup des gesamten Gameservers auf deinem ZAP-Backup-Speicher zu erstellen.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

Dein Backup wurde jetzt erstellt und kann per FTP abgerufen werden, wie in [Zugriff via FTP](gameserver-ftpaccess.md) beschrieben.

Alternativ kannst du die Savegame-Dateien auch direkt im Webinterface unter `Savegame Manager` herunterladen. Hier findest du den [Savegame Manager](satisfactory-savegame.md).

### Wechsel zum Experimental Gameserver
Gehe zuerst auf deine Satisfactory-Produktseite und öffne den Reiter `Settings -> Games`.

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

Du siehst den Bereich `Installed games`, der dir zeigt, welche Spiele du bereits installiert hast. Falls du schon mal zwischen den Builds gewechselt hast, findest du den Experimental Build hier und kannst direkt zum letzten Schritt springen, um das Spiel zu aktivieren.

Scroll danach runter zum Dropdown-Menü `Available Games` und suche im Textfeld nach „Satisfactory“.

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

Klicke auf den grünen Download-Button und bestätige die Abfrage, die erscheint. Der Download des ausgewählten Server-Builds startet jetzt.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>Der Download kann ein paar Minuten dauern. Bitte warte, bis er abgeschlossen ist, bevor du mit dem letzten Schritt weitermachst.

Jetzt werden beide Versionen unter `Installed games` angezeigt, was das spätere Wechseln erleichtert.

Zum Schluss musst du das Spiel unter `Installed games` aktivieren. Klicke auf das blaue „Spiel aktivieren“-Icon.

:::info
Achtung: Während der Neuinstallation werden alle Spieldaten gelöscht. Geh sicher, dass du vorher ein Backup gemacht hast, falls noch nicht geschehen.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

Wenn du wieder zum regulären Build wechseln willst, machst du das gleiche, wählst aber beim Auswahlprozess den regulären Satisfactory Gameserver aus!

## Spielclient auf Experimental umstellen
:::info
Hinweis: Egal welchen Build du wählst, dein Server und dein Spielclient müssen auf derselben Build-Version sein, damit eine Verbindung möglich ist.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Öffne zuerst Steam und gehe in deine Spielebibliothek. Suche nach „Satisfactory“, klicke mit Rechts drauf und wähle das Eigenschaften-Menü.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

Im neuen Menü wechselst du zum Reiter `Betas` und wählst dort `experimental` aus.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

Das war’s! Jetzt musst du nur noch warten, bis Steam das Spiel auf den ausgewählten Build aktualisiert hat. Danach kannst du starten und deinen Server genießen!
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Bei Epic Games ist der Wechsel zum Experimental Build noch einfacher. Geh einfach in deine Bibliothek und suche nach dem Spiel „Satisfactory Experimental“. Beide Builds sind im Epic Games Launcher als eigene Spiele gelistet.

Das war’s! Jetzt musst du nur noch warten, bis Epic Games das Spiel heruntergeladen und installiert hat. Danach kannst du starten und deinen Server genießen!

</TabItem>
</Tabs>

<InlineVoucher />