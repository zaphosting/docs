---
id: palworld-upload-existing-save
title: "Palworld: Bestehenden Save hochladen"
description: "Lerne, wie du einen bestehenden Palworld-Save hochlädst, die Spieldateien korrekt überträgst und deinen Server so konfigurierst, dass der richtige Welt-Ordner geladen wird. -> Jetzt mehr erfahren"
sidebar_label: "Bestehenden Save hochladen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld speichert die Weltdaten eines Dedicated Servers in einem bestimmten Save-Ordner und benötigt einen passenden Konfigurationseintrag, um diesen korrekt zu laden. In dieser Anleitung lernst du, wie du einen bestehenden Save auf deinen ZAP-Hosting Palworld Gameserver hochlädst und den Server so einstellst, dass er mit den richtigen Weltdaten startet.

:::danger Nicht unterstützte Save-Quellen
Du kannst Xbox-Konsolen- oder PS5-Cloud-Saves nicht direkt auf einen Dedicated Palworld Gameserver übertragen. Nur Saves von einer PC-Installation oder einem bestehenden Dedicated Server können mit dieser Methode migriert werden.
:::



## Vorbereitung

Bevor du startest, stelle sicher, dass du Folgendes hast:

| Voraussetzung | Details |
| --- | --- |
| Bestehender Palworld-Save | Ein Save-Ordner von einer PC-Installation oder einem anderen Dedicated Server |
| Zugriff auf deinen ZAP-Hosting Gameserver | Du benötigst Zugriff auf die Weboberfläche, inklusive Dateimanager und dem Bereich `Configs` |
| Server gestoppt | Der Palworld Server sollte vor dem Ersetzen der Save-Daten gestoppt sein |
| Name des Save-Ordners | Du brauchst den genauen Ordnernamen deines hochgeladenen Saves, z.B. `[your_savefolder_id]` |

:::info Zugriff auf Konfigurationsdatei
Bei ZAP-Hosting kannst du die relevanten Palworld-Konfigurationsdateien über die Gameserver-Verwaltung unter `Configs` erreichen. Du musst die Datei nicht zwingend direkt im Dateimanager bearbeiten, außer du möchtest den Pfad manuell überprüfen.
:::

## Verstehe die benötigte Save-Struktur

Bevor du etwas hochlädst, ist es wichtig zu wissen, welchen Ordner Palworld tatsächlich lädt.

Der Speicherort des Server-Saves ist:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

In diesem Ordner solltest du normalerweise Dateien und Ordner ähnlich wie diese sehen:

```text
Level.sav
LevelMeta.sav
Players/
```

Bei älteren oder migrierten Saves kann auch Folgendes vorhanden sein:

```text
WorldOption.sav
```

:::caution Entferne veraltete WorldOption.sav
Falls `WorldOption.sav` im hochgeladenen Save-Ordner vorhanden ist, lösche diese Datei vor dem Serverstart. Diese Datei verursacht bekanntermaßen Probleme bei neueren Palworld Server-Setups und sollte bei migrierten Saves nur verwendet werden, wenn es von einem bestätigten aktuellen Setup ausdrücklich verlangt wird.
:::

## Finde die richtige Konfigurationsdatei

Damit der Server deine hochgeladene Welt lädt, musst du `GameUserSettings.ini` bearbeiten.

In der ZAP-Hosting Gameserver-Verwaltung:

1. Öffne deinen Palworld Server.
2. Gehe zu `Configs`.
3. Öffne `GameUserSettings.ini`.

Je nach Serverumgebung ist der zugrundeliegende Dateipfad meist einer der folgenden:

| Möglicher Pfad | Hinweise |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Häufig bei Linux-basierten Palworld Server-Installationen |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Kann bei Windows-basierten Installationen vorkommen |

:::note Pfad-Unterschiede
Palworld Server-Installationen nutzen je nach Plattform entweder `LinuxServer` oder `WindowsServer` im Config-Pfad. Wenn du die Datei über `Configs` bearbeitest, wird dir bereits die korrekte Datei angezeigt, du musst nur sicherstellen, dass du `GameUserSettings.ini` bearbeitest.
:::

## Save von einem anderen Dedicated Server hochladen

Wenn dein Save bereits von einem anderen Hosting-Anbieter stammt, kannst du ihn direkt migrieren.

### Bestehenden Save sichern

Bei deinem vorherigen Anbieter suche den bestehenden Save-Ordner und lade ihn herunter von:

```text
Pal/Saved/SaveGames/0/
```

Kopiere den kompletten Ordner mit dem zufälligen alphanumerischen Namen, z.B.:

```text
[your_savefolder_id]
```

### ZAP-Hosting Server stoppen

Bevor du den neuen Save hochlädst, stoppe deinen Palworld Server im ZAP-Hosting Webinterface.

:::caution Save-Konflikte vermeiden
Ersetze keine Save-Dateien, während der Server läuft. Das kann zu unvollständigen Uploads, überschriebenen Daten oder einem beschädigten Save führen.
:::

### Standard-Save-Ordner ersetzen

Öffne den Dateimanager deines Gameservers und navigiere zu:

```text
Pal/Saved/SaveGames/0/
```

Lösche den vom Server automatisch erstellten Standard-Save-Ordner und lade dann deinen bestehenden Save-Ordner an dieselbe Stelle hoch.

Nach dem Upload sollte die Struktur so aussehen:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Richtigen Save-Ordner in GameUserSettings.ini setzen

Öffne jetzt `GameUserSettings.ini` über `Configs` und suche den Eintrag `DedicatedServerName`.

Setze ihn auf den exakten Namen deines hochgeladenen Save-Ordners:

```ini
DedicatedServerName=[your_savefolder_id]
```

| Konfig-Eintrag | Erforderlicher Wert |
| --- | --- |
| `DedicatedServerName` | Der exakte Ordnername innerhalb von `Pal/Saved/SaveGames/0/` |

:::tip Exakte Übereinstimmung erforderlich
`DedicatedServerName` muss genau mit dem hochgeladenen Ordnernamen übereinstimmen, inklusive aller Buchstaben und Zahlen. Wenn der Wert nicht passt, startet der Server möglicherweise eine andere Welt oder lädt scheinbar ohne Fortschritt.
:::

### Server starten

Nachdem du die Konfiguration gespeichert hast, starte deinen Palworld Server wieder.

Normalerweise ist kein zusätzlicher Konsolenbefehl nach dem Upload nötig. Ein kompletter Server-Neustart reicht, damit der neue Save geladen wird.

## Save von einer Steam Co-op Welt hochladen

Wenn du deine Welt bisher lokal über Steam Co-op gehostet hast, kannst du diesen Save ebenfalls auf deinen Dedicated Server hochladen.

### Lokalen Steam Save finden

Drücke auf deinem Windows-PC `Windows` + `R` und öffne:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

Öffne dort den Ordner mit deinem SteamID64. Suche dann den Welt-Ordner, den du hochladen möchtest:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Save auf den Server hochladen

Wenn du den richtigen Save-Ordner gefunden hast:

1. Stoppe deinen Palworld Server.
2. Öffne den Dateimanager.
3. Navigiere zu `Pal/Saved/SaveGames/0/`.
4. Lösche den Standard-Save-Ordner.
5. Lade deinen bestehenden Save-Ordner hoch.
6. Öffne `GameUserSettings.ini` unter `Configs`.
7. Setze:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Speichere die Datei und starte den Server neu.

:::caution Host-Charakter-Limitierung
Beim Migrieren einer lokalen Steam Co-op Welt wird der Host-Charakter nicht automatisch wie die verbundenen Spieler-Daten übertragen. Das bedeutet in der Praxis, dass der ursprüngliche Host eventuell zusätzliche Drittanbieter-Tools für Save-Konvertierung oder Charakter-Transfer benötigt, falls Charakter-Kontinuität gewünscht ist.
:::

## Save von PC Game Pass hochladen

PC Game Pass Saves verwenden ein anderes Format und sind nicht direkt für einen Dedicated Palworld Server geeignet.

### Game Pass Save finden

Die lokalen Game Pass Save-Daten liegen typischerweise hier:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Save zuerst konvertieren

Um einen PC Game Pass Save auf einem Dedicated Server zu nutzen, musst du ihn mit einem Drittanbieter-Konvertierungstool in ein Steam-kompatibles Format umwandeln.

Ein häufig genutztes Tool ist [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Drittanbieter-Tool-Hinweis
Drittanbieter-Tools zur Save-Konvertierung werden nicht von ZAP-Hosting entwickelt oder gepflegt. Ihre Funktionalität kann sich ändern und Kompatibilität ist nicht garantiert. Erstelle immer ein Backup deines Originalsaves, bevor du ein Tool benutzt.
:::

Nach der Konvertierung wird der exportierte Save meist in einem Ordner wie diesem abgelegt:

```text
XGP_converted_saves
```

### Konvertierten Save hochladen

Nachdem der Save konvertiert wurde:

1. Stoppe deinen Server.
2. Öffne den Dateimanager.
3. Gehe zu `Pal/Saved/SaveGames/0/`.
4. Lösche den Standard-Save-Ordner.
5. Lade den konvertierten Save-Ordner hoch.
6. Öffne `GameUserSettings.ini` in `Configs`.
7. Setze den korrekten Ordnernamen:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Speichere die Datei und starte den Server.

## Erforderliche Konfigurationsänderungen

Der wichtigste manuelle Schritt ist das korrekte Bearbeiten von `GameUserSettings.ini`.

### Übersicht der Konfigurationseinträge

| Datei | Ort im ZAP-Interface | Zu ändernder Eintrag | Beispielwert |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Beispielkonfiguration

Wenn dein hochgeladener Save-Ordner `84B5E2264EC387DEDB43179D666031A1` heißt, sollte der Eintrag so aussehen:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

Füge keine zusätzlichen Anführungszeichen hinzu, außer sie sind bereits in der Syntax deiner aktuellen Konfigurationsvorlage vorhanden.

## Upload überprüfen

Nachdem der Server gestartet ist, verbinde dich und prüfe, ob deine Weltdaten korrekt geladen wurden.

Folgendes solltest du überprüfen:

| Prüfung | Erwartetes Ergebnis |
| --- | --- |
| Welt lädt | Die bestehende Karte und Strukturen sind vorhanden |
| Spieler-Daten | Übertragene Spieler-Daten sind dort verfügbar, wo relevant |
| Save-Ordner stimmt | `DedicatedServerName` stimmt exakt mit dem hochgeladenen Ordner überein |
| Veraltete Datei entfernt | `WorldOption.sav` ist nicht mehr vorhanden, falls sie Probleme verursachte |

## Fehlerbehebung

Wenn der Upload nicht wie erwartet funktioniert, prüfe diese häufigen Ursachen.

### Server startet eine neue Welt

Wenn der Server eine neue Welt erstellt, statt deinen hochgeladenen Save zu laden, ist meist der `DedicatedServerName` falsch gesetzt.

Stelle sicher:

- der hochgeladene Ordner liegt in `Pal/Saved/SaveGames/0/`
- der Ordnername wurde exakt kopiert
- `DedicatedServerName=[your_savefolder_id]` stimmt genau mit dem Ordnernamen überein

### Kartendaten fehlen

Wenn der Server startet, aber dein Weltfortschritt oder Kartendaten fehlen, überprüfe erneut die Ordnernamen-Übereinstimmung.

Dieses Problem entsteht oft durch eine Diskrepanz zwischen:

- dem hochgeladenen Save-Ordnernamen
- dem Wert von `DedicatedServerName` in `GameUserSettings.ini`

### Save-Upload sieht korrekt aus, lädt aber nicht

Wenn die Ordnerstruktur stimmt, der Save aber trotzdem nicht geladen wird:

- Prüfe, ob der Save von einer unterstützten Quelle stammt
- Entferne `WorldOption.sav`, falls vorhanden
- Stelle sicher, dass der Server vor dem Ersetzen der Dateien komplett gestoppt war
- Starte den Server nach dem Speichern der Konfigurationsänderungen neu

:::tip Best Practice beim Datei-Upload
Wenn du einen großen Save hochlädst, warte, bis der Transfer vollständig abgeschlossen ist, bevor du den Server startest. Ein zu frühes Starten kann den Save unvollständig lassen und verhindern, dass die Welt richtig lädt.
:::

## Fazit

Glückwunsch, du hast erfolgreich einen bestehenden Palworld-Save auf deinen ZAP-Hosting Server hochgeladen. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂