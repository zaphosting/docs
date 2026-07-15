---
id: palworld-install-mods
title: "Palworld: Mods installieren"
description: "Lerne, wie du Palworld-Mods installierst, inklusive UE4SS Palworld, Lua-Mods und .pak-Mods auf deinem Dedicated Server. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Mods installieren
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld unterstützt verschiedene Arten von Server-Mods, am häufigsten `UE4SS`, `.lua` und `.pak` Mods. In dieser Anleitung lernst du, wie du deinen Server vorbereitest, den richtigen Mod-Typ erkennst, die benötigten Dateien hochlädst und deinen Server neu startest, damit die Mods korrekt geladen werden.



## Vorbereitung

Bevor du Mods installierst, solltest du sicherstellen, dass dein Server und der ausgewählte Mod kompatibel sind.

:::danger Erstelle zuerst ein Backup deiner Welt
Du solltest immer ein Backup deiner Palworld-Speicherdaten erstellen, bevor du Mods installierst. Falls ein Mod inkompatibel ist oder Startprobleme verursacht, kannst du so deinen vorherigen Weltzustand wiederherstellen.
:::

Überprüfe zuerst Folgendes:

| Voraussetzung | Details |
| --- | --- |
| Server-Edition | Dedicated Palworld-Server verwenden die **Steam**-Version. Mods, die nur für die **Game Pass**-Version gedacht sind, sollten nicht verwendet werden. |
| Mod-Kompatibilität | Stelle sicher, dass der Mod-Autor ausdrücklich angibt, dass der Mod auf einem Dedicated Server funktioniert. |
| Mod-Typ | Prüfe, ob es sich um einen `UE4SS`, `.lua` oder `.pak` Mod handelt. |
| Client-Anforderung | Manche Mods müssen sowohl auf dem **Server** als auch auf allen **Spieler-Clients** installiert werden. |
| Server-Version | Prüfe deine aktuelle Server-Version vor der Mod-Installation. |

### Server-Version prüfen

Um deine aktuelle Palworld-Server-Version zu bestätigen, öffne die Server-Konsole in deiner ZAP-Hosting Gameserver-Verwaltung und führe aus:

```text
info
```

Dies zeigt Versionsinformationen an, die du mit den Anforderungen des Mods vergleichen kannst.

:::tip Installiere immer nur einen Mod gleichzeitig
Installiere immer nur einen Mod auf einmal und teste ihn, bevor du einen weiteren hinzufügst. So kannst du bei Startproblemen oder fehlerhaften Mods leichter Fehler finden.
:::

## Verstehe, welchen Mod-Typ du installierst

Palworld-Mods werden nicht alle auf die gleiche Weise installiert. Du musst den Mod-Typ vor dem Hochladen der Dateien erkennen.

| Mod-Typ | Typischer Inhalt | Üblicher Installationspfad | Hinweise |
| --- | --- | --- | --- |
| `UE4SS` / `.lua` Mod | Ordner mit Skripten wie `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Benötigt meist das `UE4SS` Framework |
| `.pak` Mod | Eine oder mehrere `.pak` Dateien, manchmal mit zusätzlichen Dateien | `Pal/Content/Paks/~mods/` | Manche Mods nutzen stattdessen `Pal/Content/Paks/LogicMods/` |
| Client-seitiger Mod | Variiert | Nicht immer serverseitig installierbar | Nur verwenden, wenn der Mod-Autor Server-Support bestätigt |

:::caution Folge dem Pfad des Mod-Autors
Die hier genannten Pfade sind die aktuell häufigsten für Palworld-Mods. Einige Mods benötigen jedoch eine andere Ordnerstruktur. Folge immer den Anweisungen des Mod-Autors, wenn diese abweichen.
:::

## Greife auf deine Server-Dateien im ZAP-Interface zu

Du benötigst den Datei-Manager in deiner ZAP-Hosting Gameserver-Verwaltung.

### Öffne den Bereich Configs

Die relevanten Konfigurationsdateien findest du im Bereich **Configs** deiner Gameserver-Verwaltung. Hier kannst du verfügbare Konfigurationsdateien für deinen Palworld-Server prüfen und bearbeiten.

:::note Configs vs. Mod-Dateien
Die Installation von Palworld-Mods erfolgt meist nicht nur durch eine Änderung in einer einzelnen Config-Datei. In den meisten Fällen musst du die eigentlichen Mod-Dateien in die richtigen Server-Verzeichnisse hochladen, und manche Mods erfordern zusätzlich Konfigurationsänderungen in Dateien unter **Configs**.
:::

### Öffne den Datei-Manager

Um Mod-Dateien wie `.pak`-Archive oder `UE4SS`-Skriptordner hochzuladen, brauchst du Zugriff auf deine Server-Dateien über den Datei-Manager im ZAP-Interface.

Wenn ein Mod eine eigene Konfigurationsdatei enthält, solltest du diese genau so hochladen, wie vom Mod-Autor bereitgestellt, und nur ändern, wenn der Autor unterstützte Werte dokumentiert.

## Installiere das UE4SS-Framework falls nötig

`UE4SS` ist ein Modding-Framework, das viele Palworld Lua- und skriptbasierte Mods nutzen. Du brauchst es nur, wenn dein ausgewählter Mod davon abhängt.

### Bestätige, dass dein Server Windows nutzt

`UE4SS` für Palworld wird in der Regel mit der Windows-Server-Version verwendet. Wenn dein Server kein Windows-Palworld-Server ist, funktionieren `UE4SS`-basierte Mods möglicherweise nicht wie erwartet.

:::info UE4SS Voraussetzung
Wenn dein Mod ein `UE4SS` oder `.lua` Mod ist, solltest du sicherstellen, dass das Framework bereits installiert ist, bevor du den Mod hochlädst.
:::

### Prüfe den UE4SS-Installationspfad

Wenn `UE4SS` installiert ist, befindet sich das Verzeichnis normalerweise hier:

```text
Pal/Binaries/Win64/ue4ss/
```

Der Mod-Ordner, der von den meisten `UE4SS` und Lua-Mods genutzt wird, ist:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Falls dein ZAP-Hosting Produkt eine eingebaute Modding- oder `UE4SS`-Option in der Server-Verwaltung bietet, kannst du diese nutzen. Wenn diese Option nicht sichtbar ist, existiert sie für dein Produkt oder Server-Typ wahrscheinlich nicht.

## Lade Lua- oder UE4SS-Mods hoch und installiere sie

Lua- und andere `UE4SS`-basierte Palworld-Mods werden meist als Ordner verteilt, nicht als einzelne `.pak` Datei.

### Entpacke den Mod auf deinem lokalen Gerät

Lade das Mod-Archiv von der offiziellen Release-Seite des Mod-Autors herunter und entpacke es zuerst auf deinem PC. Lade die `.zip` oder `.rar` Datei nicht hoch, außer der Autor weist ausdrücklich darauf hin.

### Lade den Mod-Ordner in den richtigen Pfad hoch

Für die meisten Lua- oder `UE4SS`-Mods lade den entpackten Mod-Ordner hier hoch:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Eine typische Lua-Mod-Struktur sieht so aus:

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Ersetze `UploadedMod` durch den tatsächlichen Ordnernamen, den der Mod-Autor vorgibt.

### Beispielstruktur

| Element | Beispielpfad |
| --- | --- |
| Mod-Ordner | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| Skript-Datei | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution Benenne Dateien nicht willkürlich um
Du solltest den Mod-Ordner, Skript-Dateien oder die interne Ordnerstruktur nicht umbenennen, außer der Mod-Autor fordert das ausdrücklich. Viele `UE4SS` Mods sind auf die originale Struktur angewiesen, um korrekt zu laden.
:::

## Lade und installiere .pak-Mods

`.pak` Mods werden anders installiert als Lua- oder `UE4SS`-Skriptmods.

### Lade die `.pak` Datei hoch

Für die meisten Palworld `.pak` Mods lade die Datei hier hoch:

```text
Pal/Content/Paks/~mods/
```

Beispiel:

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Manche Mods geben stattdessen an, diesen Pfad zu verwenden:

```text
Pal/Content/Paks/LogicMods/
```

### Prüfe zusätzliche Dateien, falls vorhanden

Einige `.pak` Mods enthalten mehrere Dateien, z. B. Metadaten oder Begleitdateien. Wenn das Mod-Archiv mehrere erforderliche Dateien enthält, lade alle genau so hoch, wie vom Mod-Autor beschrieben.

| Üblicher `.pak` Speicherort | Anwendungsfall |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Häufigster Speicherort für allgemeine `.pak` Mods |
| `Pal/Content/Paks/LogicMods/` | Von manchen Mods genutzt, je nach Anleitung des Autors |

## Bearbeite Mod-Konfigurationsdateien, falls der Mod das verlangt

Manche Palworld-Mods enthalten eigene Konfigurationsdateien, die nach dem Hochladen bearbeitet werden müssen. Diese Einstellungen sind nicht einheitlich, daher hängen Dateiname und Werte vom jeweiligen Mod ab.

### Wo du die Konfigurationsdatei findest

Wenn der Mod eine Config-Datei mitliefert, findest du sie nach dem Hochladen möglicherweise hier:

| Mod-Typ | Möglicher Config-Speicherort |
| --- | --- |
| `UE4SS` / `.lua` Mod | Im Mod-Ordner unter `Pal/Binaries/Win64/ue4ss/Mods/[dein_mod_name]/` |
| `.pak` Mod | Manchmal keine editierbare Config enthalten; prüfe die Mod-Dokumentation |
| Server-Konfig-Integration | In manchen Fällen können zusätzliche Einstellungen über **Configs** in deiner ZAP-Server-Verwaltung bearbeitet werden |

### Was du ändern solltest

Ändere nur Werte, die vom Mod-Autor ausdrücklich dokumentiert sind. Typische Beispiele sind:

- Aktivieren oder Deaktivieren von Mod-Funktionen
- Einstellen von Multiplikatoren oder Limits
- Definieren von Admin-only-Verhalten
- Ändern von Schlüsselnamen oder internen Optionen, die der Mod nutzt

Da Palworld-Mods kein einheitliches Config-Format verwenden, gibt es keinen universellen Konfigurationseintrag, der für alle Mods gilt.

:::info Kein universeller Palworld Mod Config-Eintrag
Es gibt aktuell keine einzelne Palworld-Server-Konfigurationsdatei oder eingebaute Config-Sektion, die alle Mods global aktiviert. In der Praxis erfolgt die Mod-Installation meist durch das Ablegen der richtigen Dateien in den richtigen Verzeichnissen und das Bearbeiten mod-spezifischer Config-Dateien nur, wenn der Mod diese mitliefert.
:::

## Starte den Server neu und teste den Mod

Nachdem du die Mod-Dateien hochgeladen und alle erforderlichen Konfigurationsänderungen vorgenommen hast, musst du deinen Palworld-Server neu starten.

### Server neu starten

Nutze die Neustart-Funktion in deiner ZAP-Hosting Gameserver-Verwaltung, um den Dienst vollständig neu zu starten.

Dieser Schritt ist notwendig, da Palworld neu hochgeladene Server-Mods normalerweise erst beim Serverstart lädt.

### Funktionalität testen

Nach dem Neustart:

1. Verbinde dich mit dem Server.
2. Teste die Mod-Funktion im Spiel.
3. Prüfe die Server-Konsole auf Fehler, falls der Mod nicht funktioniert.
4. Entferne die neu hinzugefügten Mod-Dateien, falls der Server nicht startet oder sich unerwartet verhält.

:::tip Fehlerhafte Mods beheben
Wenn ein Mod Probleme verursacht, entferne zuerst nur die Dateien des zuletzt installierten Mods und starte den Server erneut. So findest du schnell heraus, ob dieser Mod die Ursache ist.
:::

## Schnellübersicht

| Aufgabe | Aktion |
| --- | --- |
| Server-Version prüfen | `info` in der Server-Konsole ausführen |
| UE4SS Basis-Pfad | `Pal/Binaries/Win64/ue4ss/` |
| UE4SS/Lua Mod-Pfad | `Pal/Binaries/Win64/ue4ss/Mods/` |
| Übliche Lua-Skriptdatei | `scripts/main.lua` |
| Üblicher `.pak` Mod-Pfad | `Pal/Content/Paks/~mods/` |
| Alternativer `.pak` Pfad | `Pal/Content/Paks/LogicMods/` |
| Zugriff auf Config-Dateien | Öffne **Configs** in der ZAP Gameserver-Verwaltung |
| Letzter Schritt | Server neu starten |

## Fazit

Glückwunsch, du hast erfolgreich Mods auf deinem Palworld-Server installiert. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂