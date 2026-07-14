---
id: palworld-troubleshooting
title: "Palworld: Fehlerbehebung"
description: "Behebe häufige Palworld-Serverprobleme, Palworld Steam-Update-Probleme und Steam-Verbindungsfehler auf deinem Gameserver. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Fehlerbehebung
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld Dedicated Server können aus verschiedenen Gründen ausfallen, darunter fehlgeschlagene Steam-Updates, Versionskonflikte, Mod-Konflikte und temporäre Steam-Verbindungsprobleme. In dieser Anleitung lernst du, wie du häufige Palworld-Serverprobleme bei ZAP-Hosting erkennst und die richtige Lösung anwendest, einschließlich wann du Konfigurationsdateien bearbeiten, Dateien überprüfen oder den Server neu starten musst.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du mit der Fehlerbehebung beginnst, stelle sicher, dass du Zugriff auf die Palworld Gameserver-Verwaltung und Konsole im ZAP-Hosting Webinterface hast.

Folgendes solltest du ebenfalls bereit haben:

| Voraussetzung | Warum es benötigt wird |
| --- | --- |
| Zugriff auf dein ZAP-Hosting Gameserver-Panel | Zum Stoppen, Starten, Neuinstallieren und Bearbeiten von Konfigurationsdateien |
| Zugriff auf die Serverkonsole | Nützlich, um zu prüfen, ob der Server reagiert |
| Ein aktuelles Backup | Empfohlen vor Dateiänderungen oder Mod-Entfernung |
| Direkte Server-IP und Port | Wichtig, da die Ingame-Liste „Letzte Server“ oft unzuverlässig ist |

:::caution Backup zuerst erstellen
Wenn du Mods entfernen, Dateien neu installieren oder Teile deiner Palworld-Serverkonfiguration zurücksetzen möchtest, solltest du vorher ein Backup erstellen, um Datenverlust zu vermeiden.
:::

## Zugriff auf die Palworld-Konfigurationsdateien

Einige Fehlerbehebungsschritte erfordern manuelle Änderungen an Palworld-Konfigurationsdateien. Bei ZAP-Hosting kannst du diese Dateien über die Gameserver-Verwaltung unter `Configs` erreichen.

Für Palworld Dedicated Server sind die wichtigsten Servereinstellungen meist in folgender Datei gespeichert:

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Wenn dein Server auf einer anderen Plattform läuft, kann der genaue Ordnername variieren. Bei Linux-basierten Palworld-Servern ist der Pfad `LinuxServer` jedoch Standard.

### Konfigurationsdatei im ZAP-Interface öffnen

So greifst du auf die Datei zu:

1. Öffne deinen Palworld-Server im ZAP-Hosting Webinterface.
2. Navigiere zum Bereich `Configs`.
3. Öffne die Datei `PalWorldSettings.ini`.
4. Prüfe die Zeile `OptionSettings=(...)`, die die meisten Gameplay- und Verbindungs-Einstellungen enthält.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Hauptkonfigurationsdatei
Die meisten Palworld-Serveroptionen sind in `PalWorldSettings.ini` gespeichert, meist im Abschnitt `OptionSettings=(...)`. Wenn du Gameplay-Einstellungen, Passwörter, Spielerlimits oder Netzwerkwerte anpassen möchtest, bearbeitest du normalerweise diese Datei.
:::

### Nach der Bearbeitung speichern und neu starten

Nach jeder Änderung an den Konfigurationswerten:

1. Speichere die Datei im Bereich `Configs`.
2. Starte den Palworld-Server über das ZAP-Hosting Interface neu.

Palworld übernimmt Konfigurationsänderungen nicht zuverlässig im laufenden Betrieb, daher ist ein Neustart nach der Bearbeitung von `PalWorldSettings.ini` erforderlich.

## Fehlerbehebung bei fehlgeschlagenen Steam-Update-Jobs

Ein bekannter Update-Fehler zeigt folgende Meldung:

```text
Error! app '2394010' state is 0x6 after update job
```

Das bedeutet meist, dass die Palworld Steam-Serverdateien nicht korrekt aktualisiert wurden.

### Empfohlene Lösung

So behebst du das Problem:

1. Stoppe deinen Palworld-Server.
2. Öffne die Serververwaltung im ZAP-Hosting Interface.
3. Nutze die Funktion zum Neuinstallieren oder zur Dateiprüfung.
4. Wähle die Option zur Integritätsprüfung, damit die Serverdateien überprüft und bei Bedarf neu heruntergeladen werden.
5. Starte den Server erneut.

:::tip Integritätsprüfung bei beschädigten Dateien
Eine Dateiprüfung ist meist der sicherste erste Schritt, da sie fehlende oder beschädigte Palworld-Gameserver-Dateien repariert, ohne dass du manuell Dateien hochladen musst.
:::

### Muss ich eine Konfigurationsdatei bearbeiten?

Für diesen Fehler ist normalerweise keine manuelle Änderung an Konfigurationsdateien nötig. Das Problem liegt meist an beschädigten oder unvollständigen Spieldateien und nicht an falschen Einstellungen in `PalWorldSettings.ini`.

## Fehlerbehebung bei „Connection Timed Out“

Wenn du beim Verbinden mit deinem Palworld-Gameserver den Fehler `Connection timed out` erhältst, können verschiedene Ursachen vorliegen.

## Prüfe, ob der Server wirklich läuft

Stelle zuerst sicher, dass der Server korrekt gestartet wurde.

### Konsole verwenden

Öffne die Serverkonsole im ZAP-Hosting Interface und prüfe, ob der Startvorgang normal abläuft. Wenn die Konsole verfügbar ist, teste einen einfachen Befehl wie:

```text
info
```

Antwortet der Server normal, läuft er wahrscheinlich. Gibt es keine sinnvolle Antwort oder stoppt der Prozess immer wieder, stürzt der Server möglicherweise beim Start ab.

### Ressourcenverbrauch prüfen

Bleibt die CPU-Auslastung beim Start ungewöhnlich niedrig und reagiert die Konsole nicht, kann das bedeuten, dass der Palworld-Serverprozess abgestürzt ist oder nicht initialisiert wurde.

| Symptom | Wahrscheinliche Ursache | Empfohlene Aktion |
| --- | --- | --- |
| Keine Konsolenreaktion | Absturz beim Start oder hängender Prozess | Server neu starten und letzte Änderungen prüfen |
| Sehr niedrige CPU-Auslastung beim Start | Server initialisiert nicht korrekt | Mods, Updates und Logs überprüfen |
| Server startet, Spieler timeouten | Verbindungsart oder Versionsproblem | Direkte IP nutzen und Versionen prüfen |

## Verbindung über direkte IP statt „Letzte Server“ herstellen

Ein häufiges Palworld-Problem ist, dass der Beitritt über den Ingame-Reiter „Letzte Server“ fehlschlägt, obwohl der Server online ist.

Verbinde dich stattdessen direkt:

1. Kopiere die Server-IP und den Port aus dem ZAP-Hosting Interface.
2. Verbinde dich in Palworld direkt über diese Adresse.
3. Verlasse dich für Tests nicht auf die Liste „Letzte Server“.

:::note Direkte Verbindung ist zuverlässiger
Wenn der Palworld Steam-Serverbrowser oder die Liste „Letzte Server“ inkonsistent reagiert, ist die direkte IP-Verbindung die beste Methode, um zu prüfen, ob dein Server erreichbar ist.
:::

## Prüfe auf Mod- oder UE4SS-Probleme

Wenn Palworld kürzlich ein Update erhalten hat und dein Server Mods oder `UE4SS` nutzt, kann es sein, dass der Server bis zur Aktualisierung dieser Modifikationen nicht mehr funktioniert.

### Was du prüfen solltest

Überprüfe, ob du kürzlich installiert hast:

- Gameplay-Mods
- Eigene Server-Modifikationen
- `UE4SS`
- Andere Drittanbieter-Dateien, die in den Palworld-Gameserver eingreifen

Wenn das Problem direkt nach einem Palworld-Steam-Update auftrat, sind diese Dateien wahrscheinlich die Ursache.

### Empfohlene Lösung

1. Stoppe den Server.
2. Erstelle ein Backup.
3. Entferne oder deaktiviere kürzlich hinzugefügte Mods oder `UE4SS`.
4. Starte den Server neu.
5. Teste die Verbindung über die direkte IP.

:::caution Mod-Kompatibilität nach Updates
Palworld-Updates können Mods ohne Vorwarnung kaputt machen. Wenn dein Server vor einem Update lief und danach nicht mehr, teste immer zuerst ohne Mods, bevor du andere Einstellungen änderst.
:::

### Sind Konfigurationsänderungen nötig?

Normalerweise nicht. Verbindungs-Timeouts durch Mods entstehen meist durch inkompatible Dateien und nicht durch Werte in `PalWorldSettings.ini`.

## Fehlerbehebung bei Steam-Verbindungsfehlern

Du kannst folgende Meldung beim Start sehen:

```text
Connecting anonymously to Steam Public...Retrying
```

Das hängt meist mit temporären Steam-Verbindungsproblemen zusammen und nicht mit einer kaputten Palworld-Konfiguration.

### Was das bedeutet

Der Palworld Dedicated Server ist für Teile des Starts und Updates auf Steam-Dienste angewiesen. Wenn Steam Ausfälle, hohe Last oder Wartungen hat, kann der Server vorübergehend keine Verbindung herstellen.

Das passiert besonders häufig während Stoßzeiten oder bei regelmäßigen Steam-Wartungen, die oft dienstags stattfinden.

### Empfohlene Lösung

Versuche Folgendes:

1. Warte 5 bis 10 Minuten.
2. Starte den Server neu.
3. Teste erneut.

Wenn das Problem während eines größeren Steam-Ausfalls auftritt, musst du warten, bis die Steam-Dienste wieder verfügbar sind.

### Automatische Updates berücksichtigen

Wenn dein Server während Steam-Ausfällen wiederholt Update-Probleme beim Start hat, kannst du automatische Updates in den Servereinstellungen deaktivieren, bis Steam stabil läuft.

:::tip Update-Zeiten während Steam-Wartung vermeiden
Vermeide wenn möglich, Palworld Steam-Updates während bekannter Steam-Wartungszeiten zu erzwingen. So reduzierst du fehlgeschlagene Startversuche und unnötige Fehlerbehebung.
:::

### Sind Konfigurationsänderungen nötig?

Nein. Dieses Problem wird normalerweise nicht durch `PalWorldSettings.ini` oder andere manuelle Konfigurationsdateien behoben.

## Fehlerbehebung bei „Inkompatible Version des Spiels“

Wenn Palworld anzeigt, dass das Match mit einer inkompatiblen Spielversion läuft, stimmen Client- und Server-Version nicht überein.

## Server-Version aktualisieren

Starte zuerst den Server im ZAP-Hosting Interface neu. Oft wird so das neueste Palworld-Gameserver-Update angewendet.

Wenn die Version weiterhin nicht passt, nutze deinen normalen Server-Update-Workflow. Falls du eine spezielle Update-Anleitung brauchst, folge der passenden Palworld-Update-Dokumentation, sofern in ZAP-Docs verfügbar.

### Client-Version bestätigen

Stelle sicher, dass deine lokale Palworld-Spielinstallation ebenfalls über Steam vollständig aktualisiert ist.

| Komponente | Was zu prüfen ist |
| --- | --- |
| Palworld-Server | Neu gestartet und aktualisiert bei ZAP-Hosting |
| Lokales Palworld-Spiel | In Steam aktualisiert |
| Mods | Aktualisiert oder entfernt, wenn inkompatibel |

:::info Versionskonflikte betreffen beide Seiten
Dieser Fehler bedeutet nicht immer, dass der Server veraltet ist. Auch dein lokaler Palworld-Client kann die ältere Version sein. Prüfe daher immer beide Seiten, bevor du tiefere Änderungen vornimmst.
:::

### Sind Konfigurationsänderungen nötig?

Normalerweise sind keine Konfigurationsdatei-Änderungen bei Versionskonflikten erforderlich.

## Verständnis von `steamclient.so`-Startmeldungen

Beim Start können Meldungen wie diese erscheinen:

```text
steamclient.so: cannot open shared object file: No such file or directory
```

In vielen Palworld-Hosting-Umgebungen tauchen diese Steam-bezogenen Meldungen auf, auch wenn der Server normal startet.

### Was du tun solltest

Wenn der Server weiter startet und erreichbar wird, kannst du diese Meldung meist ignorieren.

### Wann es problematisch wird

Untersuche das nur weiter, wenn der Server komplett nicht startet und diese Meldung zusammen mit weiteren fatalen Fehlern erscheint.

:::note Nicht jede Steam-Fehlermeldung ist kritisch
Startlogs enthalten oft nicht-fatalen Warnungen. Achte darauf, ob der Server vollständig hochfährt und Verbindungen annimmt, nicht nur auf einzelne Warnungen in der Konsole.
:::

## Fehlerbehebung bei Welt- und Gilden-bezogenen Verbindungsproblemen

Manchmal haben Spieler Verbindungsprobleme, die mit dem Welt- oder Gildenstatus zusammenhängen, nicht mit dem Serverprozess selbst.

Ein Beispiel ist, wenn ein Gildenmitglied die Gilde verlässt, aber andere gildenbezogene Spieldaten noch an Offline-Spieler gebunden sind. Das kann zu Verbindungsproblemen führen.

### Mögliche Lösungen

Versuche Folgendes in dieser Reihenfolge:

1. Bitte den betroffenen Spieler, der Gilde erneut beizutreten, falls möglich.
2. Starte den Palworld-Server neu.
3. Wenn das Problem bleibt, stelle ein Backup wieder her oder untersuche die betroffenen Spieldaten sorgfältig.

:::danger Änderungen an Spieldaten können riskant sein
Wenn du Welt- oder Speicherbeschädigungen vermutest, vermeide zufällige manuelle Dateiänderungen ohne aktuelles Backup. Falsche Änderungen können deine Palworld-Welt dauerhaft beschädigen.
:::

## Konfigurationswerte, die du prüfen solltest

Obwohl die meisten Probleme hier nicht direkt durch falsche Einstellungen verursacht werden, gibt es einige Werte in `PalWorldSettings.ini`, die du überprüfen kannst, wenn Spieler nicht wie erwartet beitreten können.

Diese Werte findest du meist im Abschnitt `OptionSettings=(...)`.

| Konfig-Schlüssel | Zweck | Was zu prüfen ist |
| --- | --- | --- |
| `ServerName` | Öffentlicher Servername | Stelle sicher, dass er korrekt gesetzt ist |
| `ServerDescription` | Serverbeschreibung | Optional, aber hilfreich zur Identifikation |
| `AdminPassword` | Admin-Login-Passwort | Prüfe, ob es korrekt gesetzt ist, wenn du Admin-Befehle nutzt |
| `ServerPassword` | Beitritts-Passwort | Entferne oder korrigiere es, wenn Spieler sich nicht anmelden können |
| `PublicPort` | Spiel-Verbindungsport | Prüfe, ob er mit dem zugewiesenen Port übereinstimmt |
| `PublicIP` | Angegebene öffentliche IP | Normalerweise unverändert lassen, außer es ist für dein Setup nötig |
| `bIsMultiplay` | Multiplayer-Modus | Sollte für normale Dedicated Server aktiviert bleiben |
| `bIsDedicated` | Dedicated Server-Modus | Sollte für gehostete Dedicated Server aktiviert bleiben |

### Beispielstruktur

Der genaue Inhalt kann variieren, aber die relevanten Einstellungen stehen meist in einer Zeile wie dieser:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

Ersetze Platzhalter wie `[your_admin_password]` und `[your_server_password]` durch deine eigenen Werte.

:::caution Keine unbekannten Werte zufällig ändern
Palworld speichert viele Einstellungen in einer einzigen `OptionSettings`-Zeile. Wenn du versehentlich Kommas, Anführungszeichen oder Klammern entfernst, kann der Server die Konfiguration nicht mehr korrekt lesen.
:::

## Konfigurationsänderungen sicher anwenden

Wenn du `PalWorldSettings.ini` bearbeiten musst, gehe so vor:

1. Stoppe den Server, um Konflikte beim Bearbeiten zu vermeiden.
2. Öffne `Configs` im ZAP-Hosting Interface.
3. Bearbeite `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4. Speichere deine Änderungen.
5. Starte den Server neu.
6. Teste den Server mit einer direkten IP-Verbindung.

### Keine zusätzlichen Befehle nötig

Für Standard-Palworld-Konfigurationsänderungen sind nach dem Speichern keine weiteren Konsolenbefehle nötig. Ein Neustart ist der wichtigste Schritt.

## Schnellübersicht

| Problem | Konfig-Datei bearbeiten | Neustart nötig | Weitere Aktion |
| --- | --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | Nein | Ja | Integrität prüfen oder Dateien neu installieren |
| `Connection timed out` | Meist nein | Oft ja | Direkte IP nutzen, Mods prüfen, Konsole testen |
| `Connecting anonymously to Steam Public...Retrying` | Nein | Ja | Auf Steam-Wiederherstellung warten |
| `Incompatible version of the game` | Nein | Ja | Server und Client updaten |
| `steamclient.so` Warnung | Nein | Nein, wenn Server normal startet | Meist unbedenklich |
| Verbindungsprobleme nach Gildenänderungen | Nein | Ja | Gilde erneut beitreten oder Backup wiederherstellen |

## Fazit

Glückwunsch, du hast erfolgreich häufige Palworld-Serverprobleme behoben. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂