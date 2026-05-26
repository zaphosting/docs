---
id: subnautica-2-mods
title: "Subnautica 2: Mods installieren"
description: "Lerne, wie du Subnautica 2 Mods auf deinem Gameserver installierst, indem du Lua- oder C++-Mods in den richtigen Ordner hochlädst, damit dein Subnautica Server sie beim Start automatisch lädt. -> Jetzt mehr erfahren"
sidebar_label: Subnautica 2: Mods installieren
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mods ermöglichen dir, dein Subnautica 2 Servererlebnis anzupassen und zu erweitern, indem du neue Gameplay-Features hinzufügst, Mechaniken verbesserst oder frischen Content einbringst. Mit Mods kannst du eine abwechslungsreichere und spannendere Umgebung für dich und deine Spieler schaffen. Diese Anleitung zeigt dir, wie du Subnautica 2 Mods auf deinem ZAP-Hosting Gameserver installierst, indem du unterstützte Lua- oder C++-Mods in den richtigen Ordner hochlädst, damit sie beim Serverstart automatisch geladen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, brauchst du Zugriff auf die Dateien deines Subnautica 2 Gameservers über das ZAP-Hosting Webinterface oder eine andere verfügbare Dateiverwaltungsmethode.

:::info Benötigter Mod-Typ
Verwende nur Lua- oder C++-Mods, die speziell für Subnautica 2 entwickelt wurden. Mods für andere Spiele wie Subnautica 1 oder Subnautica Below Zero sind nicht zwangsläufig kompatibel.
:::

:::note Mod-Downloadquellen
Subnautica 2 Mods findest du zum Beispiel auf Community-Plattformen wie [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Da sich Drittanbieter-Seiten jederzeit ändern können, solltest du vor dem Hochladen immer die Modbeschreibung und Installationshinweise prüfen.
:::

## Kompatible Mods herunterladen

Lade zuerst die Mods herunter, die du auf deinem Server verwenden möchtest. Achte darauf, dass die Mod explizit für **Subnautica 2** gedacht ist und prüfe, ob der Autor zusätzliche Anforderungen nennt.

### Mod-Inhalte prüfen

Nachdem du ein Mod-Archiv heruntergeladen hast, entpacke es auf deinem lokalen Rechner und schaue dir die enthaltenen Dateien an.

Typische Inhalte sind:

- Lua-Skriptdateien
- C++-Mod-Dateien
- eine vom Mod-Autor vorgegebene Ordnerstruktur
- eine `README`, Installationshinweise oder eine Abhängigkeitsliste

:::caution Kompatibilität prüfen
Nicht alle Mods sind serverkompatibel. Manche Mods sind nur für den Client gedacht und funktionieren nicht auf einem dedizierten Subnautica 2 Gameserver. Wenn der Mod-Autor keinen Server-Support erwähnt, solltest du die Mod vor dem produktiven Einsatz sorgfältig testen.
:::

## Zugriff auf deine Gameserver-Dateien

Öffne als Nächstes das Dateisystem deines Subnautica 2 Gameservers und finde das Hauptverzeichnis des Servers.

Wenn du das ZAP-Hosting Webinterface nutzt, öffne den Dateimanager deines Gameservers und navigiere zum Root-Verzeichnis der Serverinstallation.

### Mods-Ordner finden

Im Hauptverzeichnis deines Gameservers findest du den Ordner `mods`.

Das Installationsziel lautet:

```text
[haupt_gameserver_verzeichnis]/mods
```

Ersetze `[haupt_gameserver_verzeichnis]` durch das Basisverzeichnis deiner Subnautica 2 Serverdateien.

:::info Automatisches Mod-Laden
Der Server prüft beim Start den `mods`-Ordner. Wenn dort eine unterstützte Lua- oder C++-Mod korrekt liegt, wird sie beim nächsten Serverstart automatisch geladen.
:::

## Mods hochladen und installieren

Hast du die richtigen Mod-Dateien und den `mods`-Ordner geöffnet, kannst du die Mod-Inhalte hochladen.

### Mod-Dateien kopieren

Lade die entpackten Lua- oder C++-Mod-Dateien in den `mods`-Ordner im Hauptverzeichnis deines Gameservers hoch oder verschiebe sie dorthin.

Je nach Mod bedeutet das:

- eine einzelne Datei direkt in `mods` hochladen
- einen kompletten Mod-Ordner in `mods` hochladen
- die vom Mod-Autor vorgegebene Ordnerstruktur genau beibehalten

### Originalstruktur beibehalten

Wenn das heruntergeladene Archiv bereits einen Mod-Ordner enthält, ändere die interne Struktur nicht, außer der Autor weist ausdrücklich darauf hin.

| Element | Vorgehen |
| --- | --- |
| Einzelne Lua-Mod-Datei | In den `mods`-Ordner hochladen |
| Einzelne C++-Mod-Datei | In den `mods`-Ordner hochladen |
| Ordnerbasierte Mod | Gesamten Ordner in den `mods`-Ordner hochladen |
| Archivdatei wie `.zip` | Erst entpacken, dann die Inhalte hochladen |

:::caution Keine komprimierten Archive hochladen, wenn nicht ausdrücklich unterstützt
Wenn du nur eine `.zip`-Datei oder ein anderes Archiv hochlädst, ohne es zu entpacken, erkennt der Server die Mod möglicherweise nicht. Lade immer die entpackten Dateien oder Ordner hoch, sofern der Mod-Autor nichts anderes angibt.
:::

## Server neu starten

Nachdem du die Mods hochgeladen hast, starte deinen Subnautica 2 Gameserver neu.

Das ist notwendig, weil der Server Mods nur beim Start lädt. Wenn der Server bereits läuft, werden neu hochgeladene Dateien meist erst beim nächsten Start angewendet.

### Mod-Ladung bestätigen

Nach dem Neustart prüfe, ob die Mod im Spiel aktiv ist oder ob Logs bzw. Ausgaben verfügbar sind, die das bestätigen.

Die Bestätigung kann je nach Mod so aussehen:

- verändertes Gameplay-Verhalten
- neue Befehle oder Features
- sichtbare Logeinträge der Mod
- erfolgreicher Serverstart ohne Fehler

:::tip Mods einzeln installieren
Wenn du mehrere Mods nutzen möchtest, installiere und teste sie einzeln. So findest du leichter heraus, welche Mod Probleme verursacht, falls der Server nicht mehr richtig startet.
:::

## Fehlerbehebung

Wenn deine Subnautica 2 Mods nicht funktionieren, gibt es einige häufige Ursachen, die du prüfen solltest.

### Häufige Probleme

| Problem | Mögliche Ursache | Lösung |
| --- | --- | --- |
| Mod lädt nicht | Dateien im falschen Verzeichnis | Stelle sicher, dass die Dateien im `mods`-Ordner im Hauptverzeichnis liegen |
| Server startet, Mod zeigt keine Wirkung | Mod ist nur clientseitig oder inkompatibel | Prüfe die Mod-Seite und bestätige Support für dedizierte Server |
| Server startet nicht | Defekte Mod-Dateien oder Versionskonflikt | Entferne die zuletzt installierte Mod und starte den Server neu |
| Mod-Dateien sind da, werden aber ignoriert | Archiv wurde hochgeladen statt entpackter Dateien | Entpacke den Download und lade die eigentlichen Mod-Dateien hoch |
| Mehrere Mods verursachen Konflikte | Zwei Mods verändern dieselbe Funktion | Teste jede Mod einzeln und nutze nur kompatible Kombinationen |

### Problematische Mod entfernen

Verursacht eine neu installierte Mod Probleme, lösche die entsprechende Datei oder den Mod-Ordner aus dem `mods`-Verzeichnis und starte den Server neu.

```text
[haupt_gameserver_verzeichnis]/mods
```

:::danger Nur vertrauenswürdige Mod-Quellen nutzen
Lade Mods nur von Quellen herunter, denen du vertraust. Drittanbieter-Dateien können defekten, veralteten oder schädlichen Inhalt enthalten. Prüfe die Mod-Seite sorgfältig und vermeide unbekannte Downloads ohne klare Installations- oder Kompatibilitätsinfos.
:::

## Best Practices

Um deinen Server stabil zu halten, solltest du Mods sorgfältig verwalten und nicht zu viele auf einmal installieren.

### Empfohlener Ablauf

1. Lade eine kompatible Subnautica 2 Mod herunter.
2. Entpacke die Dateien lokal.
3. Lade die Dateien oder den Ordner in das `mods`-Verzeichnis des Servers hoch.
4. Starte den Server neu.
5. Teste die Funktionalität.
6. Wiederhole den Vorgang für die nächste Mod.

### Lokales Backup anlegen

Bevor du deine aktive Mod-Konfiguration änderst, sichere:

- deine aktuellen Mod-Dateien
- alle zugehörigen Konfigurationsdateien
- eine Liste der installierten Mods und deren Versionen

So kannst du bei Problemen schnell eine funktionierende Konfiguration wiederherstellen.

## Fazit

Glückwunsch, du hast erfolgreich Mods auf deinem Subnautica 2 Gameserver installiert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂