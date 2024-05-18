---
id: ark-savegame
title: "ARK: Eigenes Savegame (Welt) importieren"
description: Informationen, wie du ein eigenes Savegame bei deinem ARK-Server von ZAP-Hosting importieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Savegame (Welt) importieren
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Einführung

Willst du deine eigene oder eine offizielle Backup-Speicherdatei auf deinen Ark: Survival Evolved-Server importieren? In dieser Anleitung erfährst du, wie du deine eigene oder eine offizielle Backup-Speicherdatei auf deinen neuen Server importierst.

<YouTube videoId="lvIIVOhAUjo" title="How to get an ARK:SE Server with Official Server Backups" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst?  Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>


## Bereite deine Speicherdatei vor

### Offizielle Backup-Save-Datei

Du musst zuerst deine offizielle Server-Sicherungsdatei herunterladen. Du kannst dies direkt von der [ARK-Website](https://survivetheark.com/index.php?/server-backups/) tun oder [ein von der Community erstelltes Tool](https://arkutils.netlify.app/tools/officialdownload) verwenden, um deinen Server leichter zu finden, da es eine Suche ermöglicht.

:::note
Wenn du ein Xbox- oder Playstation-Spieler bist, kannst du leider keine offiziellen Serverdateien herunterladen. Die Entwickler haben nur erlaubt, dass Weltspeicherstände von Steam und Epic-Plattformen frei heruntergeladen werden können.
:::

Es wurden zwei Schnappschüsse gemacht, der erste ist vom 25. August 2023 und der zweite vom 30. September 2023. Für beide musst du deinen Server finden und deine Spieldatei herunterladen.

:::note
Die Verwendung deines eigenen offiziellen Backup-Saves ist nur mit der **ARK - SE (Official backupsave compatible)** Gameserver-Variante möglich. Wenn du eine andere Version für deinen Server verwendest, kannst du die Version unter **games** im Webinterface deines Gameservers entsprechend ändern oder unsere [Gameswitch-Anleitung](gameserver-gameswitch.md) verwenden.

![image](https://github.com/zaphosting/docs/assets/42719082/8f2ac8fa-2b23-4738-8d95-87c289e9d98a)
:::



### Eigene reguläre Speicherdatei

Um deine eigene (nicht-offizielle) Spieldatei zu importieren, werden alle Dateien der Spieldatei benötigt. Diese sind normalerweise im Verzeichnis **SavedArks** gespeichert, das sich im Verzeichnis **Shootergame/Saved** befindet. Suche nach diesen Dateien und speichere sie für den nächsten Importvorgang.

:::note
Hierfür solltest du die reguläre **Ark: SE** Gameserver-Variante (ohne die offizielle Backupsave-Unterstützung) verwenden, da du eine reguläre Speicherdatei importierst, die nicht offiziell ist.

![image](https://github.com/zaphosting/docs/assets/42719082/43a6f039-778b-471f-82c8-91f1b8644a33)
:::



## Spielstand auf den Server hochladen

Sobald du deine `.zip`-Speicherdatei heruntergeladen hast, musst du sie mit einem Programm wie 7zip oder Winrar entpacken. Der Upload ist für beide Arten von Gameservern und Spieldateien derselbe.

Jetzt musst du über FTP auf deinen Server zugreifen, um deine Spieldateien hochzuladen. Bitte benutze unsere Anleitung [FTP-Zugang](gameserver-ftpaccess.md), wenn du Hilfe beim Einloggen über deinen bevorzugten FTP-Client und beim Übertragen von Dateien benötigst.

Wenn du deinen FTP-Client geöffnet hast, gehe in das folgende Unterverzeichnis deines Gameservers:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![image](https://github.com/zaphosting/docs/assets/42719082/92ca6e48-346e-4f3c-80e2-972421d1f73f)

Lösche alle Dateien der aktuellen Speicherdatei (oder sichere sie vorher, wenn du in Zukunft mit dieser Speicherdatei spielen willst). Als Nächstes ziehst du alle extrahierten Dateien in dieses Verzeichnis (einschließlich der Dateien .ark, .arktribe und .arkprofile) und lädst sie hoch. Bitte habe etwas Geduld, denn es kann einige Zeit dauern, bis alles hochgeladen ist, was von der Größe deiner Speicherdatei abhängt.

Sobald der Upload abgeschlossen ist, starte deinen Server neu und die neu hochgeladenen Dateien sollten geladen werden. Du hast erfolgreich eine offizielle Backup-Speicherdatei auf deinen Ark: Survival Evolved Gameserver hochgeladen.