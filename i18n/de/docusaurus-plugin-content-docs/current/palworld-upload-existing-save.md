---
id: palworld-upload-existing-save
title: "Palworld: Bestehenden Save hochladen"
description: "Lerne, wie du einen bestehenden Palworld-Save hochlädst, eine Serverwelt migrierst und die erforderliche Konfigurationsdatei auf deinem ZAP-Hosting Gameserver korrekt aktualisierst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Bestehenden Save hochladen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld speichert die Welt-Daten eines Dedicated Servers in einem speziellen Save-Ordner und verknüpft diesen Ordner über die Serverkonfiguration. In dieser Anleitung lernst du, wie du einen bestehenden Save auf deinen ZAP-Hosting Palworld-Server hochlädst und die nötige Einstellung aktualisierst, damit der Server die richtige Welt lädt.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass der bestehende Palworld-Save-Ordner auf deinem lokalen Gerät verfügbar ist.

:::danger Nicht unterstützte Save-Quellen
Xbox-Konsole und PS5 Cloud-Saves können nicht direkt auf einen Palworld Dedicated Server übertragen werden. Du kannst nur Saves von einer PC-Installation oder von einem anderen bestehenden Dedicated Server migrieren.
:::

:::info Erforderlicher Zugriff
Du benötigst Zugriff auf die ZAP-Hosting Gameserver-Weboberfläche, inklusive des Dateimanagers und des Bereichs `Configs`.
:::

Falls du Hilfe beim Zugriff auf deine Serverdateien brauchst, nutze die passende Anleitung zum Dateimanagement in der ZAP-Hosting Dokumentation, sofern für dein Produkt verfügbar.

## Verstehe die erforderliche Save-Struktur

Bevor du etwas hochlädst, solltest du sicherstellen, dass dein Save die korrekte Struktur hat.

Auf einem Palworld Dedicated Server wird der aktive Welt-Save gespeichert unter:

```text
Pal/Saved/SaveGames/0/[deine_save_ordner_id]/
```

Der Ordnername `[deine_save_ordner_id]` ist normalerweise eine lange Zeichenfolge aus Buchstaben und Zahlen, zum Beispiel:

```text
84B5E2264EC387DEDB43179D666031A1
```

Ein gültiger Save-Ordner enthält normalerweise Dateien und Ordner ähnlich wie die folgenden:

| Element | Zweck |
| --- | --- |
| `Level.sav` | Haupt-Welt-Save-Daten |
| `LevelMeta.sav` | Welt-Metadaten |
| `Players/` | Spielerdaten |
| `WorldOption.sav` | Veraltete Welt-Optionsdatei, die eventuell entfernt werden muss |

:::caution Entferne veraltete WorldOption.sav
Wenn dein hochgeladener Save-Ordner `WorldOption.sav` enthält, lösche diese Datei vor dem Serverstart. Diese Datei verursacht bekanntermaßen Probleme bei aktuellen Dedicated Server Setups und sollte bei migrierten Saves nicht verwendet werden, außer es wird explizit durch eine neuere offizielle Palworld-Änderung verlangt.
:::

## Finde die Konfigurationsdatei im ZAP-Interface

Nachdem der Save-Ordner hochgeladen wurde, musst du den Server auf diesen Ordner verweisen, indem du die Palworld-Konfiguration bearbeitest.

Öffne im ZAP-Hosting Gameserver-Adminbereich den Bereich `Configs` und suche die Datei:

```text
GameUserSettings.ini
```

Je nach Serverumgebung befindet sich diese Datei typischerweise an einem der folgenden Pfade:

| Möglicher Pfad | Hinweise |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Üblicher Pfad bei Linux-basierten Palworld-Servern |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Älterer oder alternativer Pfad bei Windows-basierten Setups |

:::note LinuxServer vs WindowsServer Pfad
Palworld Dedicated Server werden meist mit dem `LinuxServer` Config-Pfad betrieben. Falls du `WindowsServer` nicht findest, prüfe stattdessen `LinuxServer`. Im ZAP-Interface ist der einfachste Weg, `Configs` zu öffnen und direkt `GameUserSettings.ini` auszuwählen.
:::

## Lade den bestehenden Save hoch

Der Upload-Prozess hängt davon ab, woher dein Save aktuell stammt, aber der Zielort auf dem ZAP-Server ist immer derselbe.

### Server zuerst stoppen

Bevor du den Standardwelt-Save ersetzt, stoppe deinen Palworld-Server im ZAP-Hosting Webinterface.

:::caution Vermeide Save-Korruption
Lade keine Welt-Dateien hoch und ersetze sie nicht, während der Server läuft. Das Stoppen des Servers verhindert unvollständige Schreibvorgänge und beschädigte Save-Daten.
:::

### Entferne den Standard-Save-Ordner

Öffne den Dateimanager und navigiere zu:

```text
Pal/Saved/SaveGames/0/
```

In diesem Verzeichnis findest du normalerweise einen standardmäßig generierten Save-Ordner. Lösche diesen Standardordner, bevor du deinen eigenen Save hochlädst.

### Lade deinen bestehenden Save-Ordner hoch

Lade deinen bestehenden Save-Ordner hoch nach:

```text
Pal/Saved/SaveGames/0/
```

Nach dem Upload sollte die Struktur so aussehen:

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [deine_save_ordner_id]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

Falls `WorldOption.sav` vorhanden ist, lösche sie nach dem Upload.

:::tip Kopiere den Ordnernamen exakt
Du brauchst den exakt hochgeladenen Ordnernamen für den nächsten Schritt. Kopiere `[deine_save_ordner_id]` genau so, wie er im Dateimanager angezeigt wird, inklusive aller Buchstaben und Zahlen.
:::

## Bearbeite GameUserSettings.ini

Nachdem der Save-Upload abgeschlossen ist, musst du die Serverkonfiguration aktualisieren, damit Palworld die richtige Welt lädt.

Öffne `GameUserSettings.ini` im Bereich `Configs` und suche den Eintrag `DedicatedServerName`.

Setze ihn auf den exakt hochgeladenen Save-Ordnernamen:

```ini
DedicatedServerName=[deine_save_ordner_id]
```

Beispiel:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Erforderlicher Konfigurationseintrag

Nutze die folgende Referenz beim Bearbeiten der Datei:

| Konfigurationsdatei | Schlüssel | Erforderlicher Wert |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Exakter Name des hochgeladenen Save-Ordners |

### Was bewirkt diese Einstellung?

`DedicatedServerName` sagt dem Palworld Dedicated Server, welcher Ordner innerhalb von `Pal/Saved/SaveGames/0/` als aktive Welt geladen werden soll.

Wenn dieser Wert nicht exakt mit dem hochgeladenen Ordnernamen übereinstimmt, kann der Server eine neue Welt erstellen oder falsch laden.

:::danger Exakte Übereinstimmung erforderlich
Wenn du fehlenden Kartenfortschritt, eine leere Welt oder einen neu generierten Save nach dem Start siehst, ist die häufigste Ursache, dass `DedicatedServerName` nicht exakt mit dem hochgeladenen Ordnernamen übereinstimmt.
:::

## Quelle-spezifische Speicherorte

Falls du nicht sicher bist, woher dein Original-Save stammt, nutze den passenden Pfad unten.

### Von einem anderen Dedicated Server Anbieter

Sichere bei deinem vorherigen Anbieter den Save-Ordner aus:

```text
Pal/Saved/SaveGames/0/
```

Kopiere den gesamten Welt-Ordner mit seinem Originalnamen und lade diesen Ordner dann wie oben beschrieben auf deinen ZAP-Hosting Server hoch.

### Von einem Steam Co-op Save

Für lokale Steam-Saves unter Windows öffne folgenden Pfad:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[deine_steamid64]\[deine_save_ordner_id]
```

Der Ordner `[deine_steamid64]` ist deine Steam 64-Bit-ID, und `[deine_save_ordner_id]` ist der Welt-Ordner, den du migrieren möchtest.

:::caution Host-Charakter-Beschränkung
Beim Migrieren einer lokalen Steam Co-op-Welt auf einen Dedicated Server wird der ursprüngliche Host-Charakter nicht automatisch wie verbundene Spielerdaten übertragen. Falls du den Host-Charakter erhalten möchtest, sind zusätzliche Drittanbieter-Tools zur Save-Konvertierung oder Charakterübertragung nötig.
:::

### Von PC Game Pass

Für PC Game Pass-Installationen werden die lokalen Save-Daten typischerweise hier gespeichert:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Game Pass Saves sind nicht im gleichen Format wie Steam- oder Dedicated Server Saves gespeichert. In der Praxis benötigst du meist ein Drittanbieter-Konvertierungstool, um den Save in ein Steam-kompatibles oder Dedicated-Server-kompatibles Format zu konvertieren, bevor du ihn hochlädst.

:::info Game Pass Konvertierungsanforderung
Ein direkter Upload von rohen PC Game Pass Save-Daten reicht in der Regel nicht aus. Du musst den Save zuerst konvertieren, dann den konvertierten Welt-Ordner nach `Pal/Saved/SaveGames/0/` hochladen und `DedicatedServerName` entsprechend setzen.
:::

## Starte den Server

Sobald der Save-Ordner hochgeladen und `GameUserSettings.ini` aktualisiert wurde, starte deinen Server wieder über das ZAP-Hosting Webinterface.

Für diesen Migrationsprozess sind normalerweise keine zusätzlichen Konsolenbefehle erforderlich.

Nach dem Start verbinde dich mit dem Server und überprüfe, ob:

- die richtige Welt geladen wird
- Gebäude und Kartenfortschritt vorhanden sind
- Spielerdaten wie erwartet verfügbar sind

## Fehlerbehebung

Wenn der hochgeladene Save nicht korrekt geladen wird, prüfe folgende Punkte.

### Der Server hat eine neue Welt erstellt

Stelle sicher, dass der folgende Wert in `GameUserSettings.ini` exakt mit dem hochgeladenen Ordnernamen übereinstimmt:

```ini
DedicatedServerName=[deine_save_ordner_id]
```

Bestätige außerdem, dass der hochgeladene Save direkt liegt unter:

```text
Pal/Saved/SaveGames/0/[deine_save_ordner_id]/
```

### Der Karten- oder Weltfortschritt fehlt

Das bedeutet meist eines der folgenden Probleme:

| Mögliche Ursache | Lösung |
| --- | --- |
| Falscher `DedicatedServerName` Wert | Gib den exakt hochgeladenen Ordnernamen erneut ein |
| Save-Ordner im falschen Verzeichnis hochgeladen | Verschiebe ihn nach `Pal/Saved/SaveGames/0/` |
| Unvollständiger Upload | Lade den kompletten Ordner erneut hoch und prüfe, ob alle Dateien vorhanden sind |

### WorldOption.sav verursacht Probleme

Wenn dein Save `WorldOption.sav` enthält, lösche diese Datei und starte den Server neu.

Diese Datei ist mit älterem Save-Verhalten verbunden und kann bei migrierten Dedicated Server Welten stören.

## Fazit

Glückwunsch, du hast erfolgreich einen bestehenden Palworld-Save auf deinen ZAP-Hosting Server hochgeladen. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂