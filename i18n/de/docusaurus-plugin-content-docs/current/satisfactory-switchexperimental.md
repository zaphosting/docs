---
id: satisfactory-switchexperimental
title: "Satisfactory: Experimentelle Version"
description: Informationen zur experimentellen Version für Satisfactory von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Experimentelle Version
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Was ist eine experimentelle Version?
Satisfactory besteht aus zwei Versionen, dem regulären Build und dem experimentellen Build. Der reguläre Build ist zuverlässiger, stabiler und weniger fehleranfällig, da es ein endgültigerer Build ist. Der experimentelle Build hingegen bietet zunächst Zugang zu größeren Patches, bevor es als regulärer Build veröffentlicht wird. Es birgt daher ein höheres Risiko von Fehlern und wird viel häufiger aktualisiert, hat aber den Vorteil, dass größere Aktualisierungen zuerst ausprobiert werden können!

:::info
Unabhängig davon, welchen Build du wählst, müssen sowohl dein Server als auch dein Spielclient die gleiche Build-Version haben, damit eine Verbindung hergestellt werden kann.
:::

<InlineVoucher />

## Wie wechsle ich zur experimentellen Version?
Durch unser Gameserver-System ist es sehr einfach, den Build des Servers über unsere Website zu ändern. Bevor du beginnst, empfehlen wir dir, deine Satisfactory-Savegames zu sichern, da beim Wechsel des Spiels alle Dateien gelöscht werden.

### Sichern von Spielständen
Deinen gesamten Gameserver oder deine Gamesaves zu sichern, ist ganz einfach. Gehe auf die Satisfactory-Produktseite und wähle den Reiter `Tools -> Backups`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/5p6F77zjjem5ZMg/preview)

Auf dieser Seite kannst du eine Vielzahl von Funktionen ausführen, darunter auch automatische Backups, die [Backups](gameserver-backups.md) näher erläutert werden. Hier konzentrieren wir uns auf eine manuelle Sicherung.

Drücke oben auf der Seite einfach auf das grüne + Symbol und akzeptiere die Aufforderung, ein Backup des gesamten Gameservers auf deinem ZAP-Backup-Speicher zu erstellen.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/RYdg5CFsPoiD8GY/preview)

Dein Backup wurde nun erstellt und du kannst über FTP darauf zugreifen, wie [Zugriff per FTP](gameserver-ftpaccess.md) gezeigt wird.

Alternativ kannst du die Savegame-Dateien auch direkt aus dem Bereich "Savegame Manager" im Webinterface herunterladen. Diesen findest du im [Savegame Manager](satisfactory-savegame.md).

### Zur experimentellen Version wechseln
Gehe zunächst auf deine Satisfactory Produktseite und öffne den Reiter "Einstellungen -> Spiele".

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/gJekTd5S9meW22G/preview)

Du siehst den Abschnitt `Installierte Spiele`, in dem die Spiele angezeigt werden, die du bereits installiert hast. Wenn du bereits zwischen den beiden Versionen gewechselt hast, werden sie dort angezeigt und du kannst zum letzten Schritt übergehen, um das Spiel zu aktivieren.

Scrolle anschließen nach unten, klicke auf das Dropdown-Menü "Verfügbare Spiele" und suche im Textfeld nach "Satisfactory".

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/tegbMeKeaz329TA/preview)

Drücke auf den grünen Download Button und bestätige die Einrichtung, bei der daraufhin erscheinenden Aufforderung. Der Download des angegebenen Server-Builds wird nun gestartet.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/xPJ7gssbJscsYQS/preview)

>Der Download kann einigen Minuten beanspruchen. Bitte warte, bis der Vorgang abgeschlossen ist, bevor du mit dem letzten Schritt fortfährst.

Jetzt werden beide Versionen unter `Installierte Spiele` angezeigt, sodass es einfacher ist, zwischen beiden zu wechseln.

Schließlich musst du das Spiel unter dem Abschnitt `Installierte Spiele` aktivieren. Drücke auf das blaue Symbol "Spiel aktivieren".

:::info
Achtung! Alle Daten des Spiels werden bei der Neuinstallation gelöscht. Gehe also unbedingt ein paar Schritte zurück und erstelle ein Backup, falls du das noch nicht getan hast.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/no3d4g4PjsxHY63/preview)

Wenn du wieder zum regulären Build wechseln möchtest, befolge dieselben Schritte, wähle aber stattdessen das regulären Satisfactory Spielpaket während des Auswahlprozesses!

## Spielclient auf Experimentell umstellen
:::info
Unabhängig davon, welches Build du wählst, müssen sowohl dein Server als auch dein Spielclient die gleiche Build-Version haben, um eine Verbindung herstellen zu können.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam Version" label="Steam Version">
Öffne zunächst dein Steam und gehe zu deiner Spielbibliothek. Suche nach "Satisfactory", klicke mit der rechten Maustaste darauf und wähle das Menü "Eigenschaften" aus.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/aG3SeTSKZNm7nGm/preview)

Im neuen Menü gehst du zum Abschnitt `Betas` und wählst `Experimentell` aus.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/gawYknATwbY23Dj/preview)

Das war's. Jetzt musst du nur noch darauf warten, dass Steam das Spiel auf den ausgewählten Spiel-Version aktualisiert, dann kannst du dein Spiel starten und deinen Server genießen!

</TabItem>
<TabItem value="Epic Games Version" label="Epic Games Version">
Bei Epic Games ist es sogar noch einfacher, zu Experimentell zu wechseln. Alles, was du tun musst, ist es in deine Bibliothek zu gehen und das Spiel "Satisfactory Experimental" zu finden. Beide Spielversionen auf dem Epic Games Launcher sind eigenständig in der Bibliothek. Das war's. Jetzt musst du nur noch darauf warten, dass Epic Games das Spiel herunterlädt und installiert. Danach kannst du dein Spiel starten und deinen Server genießen!

</TabItem>
</Tabs>

<InlineVoucher />
