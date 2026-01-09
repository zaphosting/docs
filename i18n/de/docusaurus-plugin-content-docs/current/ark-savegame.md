---
id: ark-savegame
title: ARK Survival Evolved Eigene Save-Datei importieren
description: "Entdecke, wie du deinen Ark: Survival Evolved Gameserver mit offiziellen oder eigenen Backup-Saves wiederherstellst für nahtloses Gameplay → Jetzt mehr erfahren"
sidebar_label: Save-Datei importieren
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Willst du deine eigene oder eine offizielle Backup-Save-Datei auf deinem Ark: Survival Evolved Gameserver importieren? Kein Problem, diese Anleitung erklärt dir Schritt für Schritt, wie du deine reguläre eigene oder offizielle Backup-Save-Datei auf deinem neuen Server importierst.

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="Wie du einen ARK:SE Server mit offiziellen Server-Backups bekommst" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Ding! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Bereite deine Save-Datei vor

### Offizielle Backup-Save-Datei

Du musst zuerst deine offizielle Server-Save-Datei herunterladen. Das kannst du direkt über die [ARK-Webseite](https://survivetheark.com/index.php?/server-backups/) machen oder ein [Community-Tool](https://arkutils.netlify.app/tools/officialdownload) nutzen, das dir die Suche nach deinem Server erleichtert.

:::note
Wenn du Xbox- oder Playstation-Spieler bist, kannst du leider keine offiziellen Server-Dateien herunterladen. Die Entwickler erlauben nur das freie Herunterladen von Welt-Saves von Steam- und Epic-Plattformen.
:::

Es gibt zwei Snapshots, die erstellt wurden: der erste vom 25. August 2023 und der zweite vom 30. September 2023. Für beide musst du deinen Server finden und die Save-Datei herunterladen.

:::note
Die Nutzung deiner eigenen offiziellen Backup-Save-Datei ist nur mit der **ARK - SE (Official backupsave kompatibel)** Gameserver-Variante möglich. Wenn du eine andere Version für deinen Server nutzt, kannst du die Version im **Games**-Bereich deines Gameserver-Webinterfaces entsprechend ändern oder unsere [Game Change](gameserver-gameswitch.md) Anleitung nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::



### Eigene reguläre Save-Datei

Um deine eigene Save-Datei (nicht offiziell) zu importieren, benötigst du alle Dateien aus dem Save-Ordner. Diese liegen normalerweise im Verzeichnis **SavedArks**, das sich im Ordner **Shootergame/Saved** befindet. Suche diese Dateien und sichere sie für den Import.

:::note
Dafür solltest du die reguläre **Ark: SE** Gameserver-Variante (ohne offiziellen Backupsave-Support) verwenden, da du eine reguläre Save-Datei importierst, die nicht offiziell ist.

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::



## Save auf den Server hochladen

Nachdem du deine `.zip` Save-Datei heruntergeladen hast, musst du sie mit einem Programm wie 7zip oder Winrar entpacken. Für beide Gameserver- und Save-Datei-Typen ist der Upload-Prozess gleich.

Jetzt musst du per FTP auf deinen Server zugreifen, um die Save-Dateien hochzuladen. Nutze unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung, falls du Hilfe beim Einloggen mit deinem bevorzugten FTP-Client und beim Übertragen der Dateien brauchst.

Öffne deinen FTP-Client und navigiere zu folgendem Unterverzeichnis in deinem Gameserver:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

Lösche alle Dateien des aktuellen Save-Files (oder sichere sie vorher, falls du später noch auf diesem Save spielen möchtest). Ziehe dann alle entpackten Dateien in dieses Verzeichnis (inklusive .ark, .arktribe und .arkprofile Dateien). Bitte hab Geduld, das Hochladen kann je nach Größe deiner Save-Datei eine Weile dauern.

Sobald der Upload abgeschlossen ist, starte deinen Server neu und die neu hochgeladenen Dateien sollten geladen werden. Du hast erfolgreich eine offizielle Backup-Save-Datei auf deinem Ark: Survival Evolved Gameserver hochgeladen.

<InlineVoucher />