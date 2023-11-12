---
id: ark-savegame
title: Eigenes Savegame (Welt) importieren
description: Informationen, wie du ein eigenes Savegame bei deinem ARK-Server von ZAP-Hosting importieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Savegame (Welt) importieren
---



## Einführung

Du möchtest einen eigenen Spielstand (Savegame/Backup/Snapshot/) von einem früheren Server oder von den offiziellen ARK: Survival Evolved Servern verwenden? Kein Problem, denn du kannst auch ein bestehendes Savegame verwenden.  Wie das genau funktioniert, erklären wir dir im Folgenden. 



## Voraussetzungen

Für das Importieren des eigenen Spielstand werden alle Dateien vom Spielstand benötigt. Diese werden in der Regel in dem **SavedArks** Verzeichnis gespeichert, welches sich im **Shootergame/Saved** Verzeichnis befindet. Suche nach diesen Dateien und lege sie für den folgenden Importvorgang ab. Alternativ kannst du auch einen Spielstand von den offiziellen ARK-Servern hochladen. Mehr Informationen über die Auflösung der offiziellen Server und die Bereitstellung der Spielstände findest du hier: https://ark.wiki.gg/wiki/2023_official_server_save_files

Die Übertragung der Dateien erfolgt über das FTP-Protokoll. Für die Nutzung von FTP ist daher ein FTP-Client erforderlich. Wenn du noch nicht mit FTP vertraut bist, empfehlen wir dir, die Anleitung [FTP-Dateizugriff] (gameserver-ftpaccess.md) zu lesen.

:::warning
Die Nutzung eines eigenen Spielstandes ist ausschließlich mit der **ARK - SE (official Backupsave compatible)** Variante. Solltest du bei deinem Server eine andere Variante verwenden, so kannst du das Spiel unter Spiele entsprechend ändern. 
:::



## Spielstand hochladen

Verbinde dich nun per FTP mit deinem Server und navigiere zu folgender Verzeichnisstruktur: `/gxxxxx/ark/ShooterGame/Saved/SavedArks`. Lösche dort jetzt alle Dateien des aktuellen Spielstandes und lade anschließend alle benötigten Dateien (.ark, .arktribe und .arkprofile) deines Spielstandes, den du zuvor vorbereitet hast, hoch. Dieser Vorgang kann je nach Größe des Spielstandes eine gewisse Zeit in Anspruch nehmen.



## Ergebnis

Mit dem nächsten Startvorgang sollten die neu hochgeladenen Dateien berücksichtig und verwendet werden. Dein gewünschter Spielstand sollte nun verfügbar sein. :)
