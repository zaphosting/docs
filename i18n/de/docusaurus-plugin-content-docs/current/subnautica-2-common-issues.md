---
id: subnautica-2-common-issues
title: "Subnautica 2: Häufige Probleme"
description: "Entdecke häufige Subnautica 2 Gameserver-Probleme, Verbindungsprobleme und Performance-Lösungen, um dein Spiel online und stabil zu halten -> Jetzt mehr erfahren"
sidebar_label: "Subnautica 2: Häufige Probleme"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Subnautica 2 Serverprobleme können von Startfehlern und Abstürzen bis hin zu Lag, Verbindungsproblemen und schlechter Ingame-Performance reichen. In dieser Anleitung lernst du, wie du häufige Probleme auf deinem Subnautica 2 Gameserver erkennst und praktische Lösungen anwendest, um dein Spiel wieder online und stabil laufen zu lassen.

:::info Early Access Änderungen
Wenn die Subnautica 2 Server-Software noch aktiv weiterentwickelt wird, können sich Verhalten, Konfigurationsdateien oder verfügbare Features zwischen Versionen unterscheiden. Wenn dir Unterschiede an deinem Server auffallen, vergleiche diese immer mit der aktuell installierten Version in deinem ZAP-Hosting Webinterface.
:::

<InlineVoucher />

## Probleme und Lösungen

Serverprobleme haben nicht immer eine einzelne Ursache. Oft hängen sie mit veralteten Dateien, falschen Einstellungen, unzureichenden Ressourcen oder temporären Netzwerkbedingungen zusammen. Die folgenden Abschnitte helfen dir, die häufigsten Probleme Schritt für Schritt zu beheben.

### Allgemeine Probleme

Allgemeine Probleme betreffen meist die grundlegende Serververfügbarkeit, Sichtbarkeit oder das Startverhalten. Diese Checks solltest du zuerst durchführen, bevor du dich komplexeren Ursachen widmest.

<details>
  <summary>Server im Spiel nicht sichtbar</summary>

Wenn dein Subnautica 2 Server nicht sichtbar ist, wurde er möglicherweise nicht korrekt gestartet oder hat den Initialisierungsprozess nicht abgeschlossen. Ursachen können ungültige Konfigurationswerte, unvollständige Installationsdateien oder Startfehler sein.

Prüfe zunächst Folgendes:

- Stelle sicher, dass der Server im ZAP-Hosting Webinterface als laufend angezeigt wird
- Überprüfe die Serverkonsole auf Startfehler
- Sieh dir die Logdateien auf fehlende Dateien oder fehlgeschlagene Initialisierungsschritte an
- Vergewissere dich, dass du im Ingame-Serverbrowser die richtigen Suchfilter verwendest
- Warte einige Minuten nach dem Start, da manche Server etwas Zeit brauchen, bis sie öffentlich sichtbar sind

Wenn der Server weiterhin nicht erscheint, starte ihn einmal neu und beobachte die Konsole vom Start an.

</details>

<details>
  <summary>Server startet nicht</summary>

Wenn der Server gar nicht startet, liegt die Ursache meist an beschädigten Dateien, einem unvollständigen Update oder einer ungültigen Konfiguration.

Folgende Punkte solltest du prüfen:

| Check | Warum wichtig |
| --- | --- |
| Server-Konsolenausgabe | Zeigt den genauen Startfehler, falls vorhanden |
| Kürzliche Konfigurationsänderungen | Ein einziger ungültiger Wert kann den Start verhindern |
| Kürzliche Datei-Uploads oder Änderungen | Manuell geänderte Dateien können unvollständig oder inkompatibel sein |
| Aktuelle Spielversion | Nicht passende Serverdateien können sofortigen Startfehler verursachen |

Wenn du kürzlich Konfigurationsdateien geändert hast, setze die letzten Änderungen zurück und versuche es erneut. Wenn das Problem nach einem Update oder manueller Dateiänderung auftrat, kann das Wiederherstellen eines Backups Zeit sparen.

:::tip Backups vor größeren Änderungen nutzen
Erstelle vor wichtigen Dateiänderungen oder Serverupdates ein Backup, damit du bei neuen Problemen schnell zurückrollen kannst.
:::

</details>

<details>
  <summary>Server-Passwort oder Zugriffs-Einstellungen funktionieren nicht wie erwartet</summary>

Wenn Spieler nicht beitreten können, obwohl der Server online ist, überprüfe deine Zugriffs-Einstellungen genau. Ein falsches Passwort, veraltete gespeicherte Client-Daten oder ein Unterschied zwischen öffentlichen und privaten Servereinstellungen kann den Zugang blockieren.

Prüfe:

- Ob das von den Spielern eingegebene Passwort exakt mit dem aktuellen Serverpasswort übereinstimmt
- Ob der Server nach Änderungen der Zugriffs-Einstellungen neu gestartet wurde
- Ob keine alten, clientseitig gespeicherten Verbindungsdaten verwendet werden
- Ob private oder Whitelist-Einstellungen korrekt konfiguriert sind, falls für deine Serverversion verfügbar

Wenn du unsicher bist, ob die Konfiguration das Problem verursacht, vereinfache die Einstellungen vorübergehend und teste mit minimalen Einschränkungen.

</details>

### Absturzprobleme

Unerwartete Abstürze unterbrechen das Spiel und können bei wiederholtem Auftreten zu Datenverlust führen. Häufige Ursachen sind veraltete Serverdateien, inkompatible Mods oder überlastete Ressourcen.

<details>
  <summary>Server aktuell halten</summary>

Die neueste verfügbare Subnautica 2 Server-Version zu nutzen ist wichtig für Stabilität, Kompatibilität und Sicherheit. Ältere Versionen können Bugs enthalten, die bereits behoben wurden, oder mit dem aktuellen Spielclient nicht mehr richtig funktionieren.

Ein veralteter Server kann verursachen:

- Startfehler
- zufällige Abstürze
- Versionskonflikte
- instabiles Gameplay

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Wenn dein Server nach einem Spielupdate abstürzt, prüfe zuerst, ob eine neuere Serverversion im Webinterface verfügbar ist. Nach dem Update starte den Server neu und teste erneut.

</details>

<details>
  <summary>Fehlerhafte oder inkompatible Mods und Zusatzinhalte</summary>

Falls Subnautica 2 in deiner Version Mods oder andere zusätzliche serverseitige Inhalte unterstützt, können diese häufig Absturzursachen sein. Inkompatible oder veraltete Inhalte laden sich eventuell teilweise, verursachen aber später Fehler im Spiel.

Typische Anzeichen sind:

- Server stürzt nach dem Start ab
- Server stürzt beim Beitritt eines Spielers ab
- Server friert beim Laden der Welt ein
- Fehler treten nach Hinzufügen neuer Inhalte auf

So findest du die Ursache:

1. Server stoppen
2. Kürzlich hinzugefügte Inhalte entfernen oder deaktivieren
3. Server mit minimaler Konfiguration starten
4. Stabilität testen
5. Inhalte einzeln wieder aktivieren

Diese Methode hilft dir, genau die Datei oder das Paket zu identifizieren, das Probleme verursacht.

:::caution Versionskompatibilität
Nutze nur Mods, Frameworks oder Erweiterungen, die mit deiner aktuellen Subnautica 2 Server-Version kompatibel sind. Schon eine veraltete Komponente kann wiederholte Abstürze auslösen.
:::

</details>

<details>
  <summary>Beschädigte Welt- oder Speicherdaten</summary>

Wenn der Server beim Laden der Welt oder kurz nach dem Verbindungsaufbau abstürzt, können die Speicherdaten beschädigt sein. Das passiert oft nach erzwungenem Herunterfahren, unterbrochenen Schreibvorgängen oder wiederholten Abstürzen.

Mögliche Hinweise:

- Server stürzt immer an derselben Ladephase ab
- Neue Welt startet problemlos, die bestehende nicht
- Konsole meldet Fehler beim Laden von Speicherständen oder Welten

Wenn du Speicherkorruption vermutest, teste mit einem Backup oder einer frischen Welt, falls verfügbar. Startet die frische Welt ohne Probleme, liegt das Problem wahrscheinlich an den bestehenden Speicherdaten.

:::danger Datenverlustgefahr
Lösche deine bestehenden Weltdaten nicht sofort. Erstelle zuerst eine Backup-Kopie, um später eine Wiederherstellung zu versuchen.
:::

</details>

### Performance-Probleme

Performance-Probleme zeigen sich meist als Lag, verzögerte Aktionen, langsames Weltenladen oder instabiles Gameplay. Ursachen sind oft falsche Konfiguration, zu wenig Hardware-Ressourcen oder umfangreiche Zusatzinhalte.

<details>
  <summary>Schlechte Serverkonfiguration</summary>

Falsche Konfigurationswerte können CPU-, Speicher- oder Speicherplatzbelastung erhöhen und die Gesamtperformance senken. Wenn dein Subnautica 2 Server langsam oder instabil wirkt, überprüfe deine Einstellungen genau.

Insbesondere solltest du prüfen, ob:

- Spieler-bezogene Limits realistisch für dein Paket sind
- Welt-bezogene Einstellungen nicht unnötig anspruchsvoll sind
- experimentelle oder nicht standardmäßige Einstellungen kürzlich geändert wurden
- der Server nach Änderungen neu gestartet wurde

Deine Konfiguration kannst du meist im Bereich **Einstellungen** oder über die verfügbaren Dateien in **Configs** im ZAP-Hosting Webinterface verwalten.

</details>

<details>
  <summary>Serverpaket entspricht nicht den Projektanforderungen</summary>

Ein zu kleines Serverpaket kann zu Rucklern, langen Ladezeiten und Instabilität führen. Das fällt besonders auf, wenn du mehr Spieler hast, Zusatzinhalte nutzt oder eine große, aktive Welt betreibst.

ZAP-Hosting zeigt dir während der Bestellung empfohlene Konfigurationen, damit du passende Ressourcen für dein Spiel wählst.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Nutze die folgende Tabelle als allgemeine Fehlerbehebungshilfe:

| Symptom | Mögliche Ursache | Empfohlene Aktion |
| --- | --- | --- |
| Häufige Lag-Spikes | CPU-Ressourcen zu knapp | Last reduzieren oder Paket upgraden |
| Lange Ladezeiten | Speicher- oder RAM-Engpass | Nutzung prüfen und mehr Ressourcen erwägen |
| Abstürze bei Spielerlast | Gesamtkapazität zu gering | Last senken oder Server skalieren |
| Gute Performance leer, schlecht bei Spielern | Paket zu klein für aktive Nutzung | Upgrade basierend auf Spieleraktivität |

:::note Mindestempfehlungen
Empfohlene Paketgrößen sind nur ein Ausgangspunkt. Wenn dein Subnautica 2 Gameserver eine größere Welt, mehr Spieler oder Zusatzinhalte nutzt, brauchst du möglicherweise von Anfang an mehr Ressourcen.
:::

</details>

<details>
  <summary>Hohe Ressourcennutzung durch Mods oder Zusatzinhalte</summary>

Auch wenn Zusatzinhalte den Server nicht abstürzen lassen, können sie Performance-Probleme verursachen. Schlecht optimierte Inhalte erhöhen CPU-Auslastung, verbrauchen zu viel RAM oder lösen wiederholte Hintergrundprozesse aus.

Eine gute Fehlerbehebungsmethode ist der Performance-Vergleich mit und ohne Zusatzinhalte. Läuft der Server minimal stabil, füge Inhalte schrittweise wieder hinzu, bis das Problem erneut auftritt.

Das hilft besonders, wenn:

- Lag nach Installation neuer Inhalte begann
- Server mit der Zeit instabil wird
- Performance nur in bestimmten Bereichen oder Situationen abfällt
- Nutzung ohne offensichtliche Konfigurationsänderungen steigt

</details>

<details>
  <summary>Große Welt oder lang laufender Speicher verursacht Verlangsamung</summary>

Mit wachsender Serverwelt und zunehmender Spieleraktivität kann die Performance sinken. Das ist typisch für lang laufende Server mit großen gespeicherten Weltdaten.

Wenn die Performance am Anfang gut war, später aber schlechter wird, beachte:

- Teste, ob ein neueres Backup besser läuft
- Prüfe, ob zu viele Spieler gleichzeitig aktiv sind
- Entferne unnötige Zusatzinhalte
- Schau, ob das Problem nur in einer bestimmten Welt auftritt

Wenn eine frische Testwelt deutlich besser läuft, hängt die Verlangsamung wahrscheinlich mit Weltgröße oder Speicherkomplexität zusammen.

</details>

### Netzwerkprobleme

Netzwerkprobleme beeinflussen, wie Spieler sich verbinden und mit deinem Server interagieren. Sie zeigen sich als hoher Ping, Rubberbanding, Verbindungsabbrüche oder komplette Unerreichbarkeit.

<details>
  <summary>Ping-Spikes, Lag und Netzwerkverzögerung</summary>

Ping-Spikes und Verzögerungen entstehen oft durch eine Mischung aus Serverlast und Routingbedingungen. Selbst wenn das Spiel online ist, können überlastete Hardware oder große geografische Entfernung das Erlebnis verschlechtern.

Häufige Ursachen:

- Serverstandort ist weit von der Spielerbasis entfernt
- Server hat hohe CPU- oder RAM-Auslastung
- Viele Spieler sind gleichzeitig verbunden
- Hintergrundaufgaben oder andere Prozesse verbrauchen Ressourcen
- Temporäre Routing- oder Paketverluste zwischen Spielern und Server

Zur Verbesserung der Netzwerkqualität prüfe:

| Check | Ergebnis |
| --- | --- |
| Wähle einen Standort nahe bei deinen Spielern | Niedrigere durchschnittliche Latenz |
| Reduziere unnötige Serverlast | Weniger Lag-Spikes im Spiel |
| Halte den Server aktuell | Bessere Stabilität und Kompatibilität |
| Teste zu verschiedenen Zeiten | Hilft temporäre Routingprobleme zu erkennen |

Wenn nur ein Spieler betroffen ist, liegt das Problem meist bei dessen Verbindung. Sind alle betroffen, ist die Ursache eher server- oder routingseitig.

</details>

<details>
  <summary>Spieler werden zufällig getrennt</summary>

Zufällige Verbindungsabbrüche können durch instabiles Routing, überlastete Serverressourcen oder temporäre Softwareinstabilität entstehen. Wenn Spieler ohne klaren Ingame-Grund getrennt werden, vergleiche die Zeitpunkte der Abbrüche mit Konsolenmeldungen und Performance-Spitzen.

Prüfe:

- Ob Abbrüche bei hoher Last auftreten
- Ob der Server kurz neu startet oder einfriert
- Ob alle Spieler gleichzeitig oder nur einzelne getrennt werden
- Ob das Problem nach einem Update oder Konfigurationswechsel begann

Trennen sich alle Spieler gleichzeitig, liegt das Problem meist am Server oder Netzwerkweg. Bei einzelnen Spielern ist die Ursache oft lokal.

</details>

<details>
  <summary>DDoS-Angriffe und andere Netzwerkbedrohungen</summary>

Gameserver können gelegentlich Ziel von bösartigem Traffic sein, etwa Distributed Denial of Service (DDoS)-Angriffe. Diese können Lag, Verbindungsfehler oder temporäre Ausfälle verursachen.

ZAP-Hosting bietet DDoS-Schutz für gehostete Dienste, der hilft, die Auswirkungen gängiger und komplexer Angriffsmuster zu reduzieren. Wenn du vermutest, dass dein Subnautica 2 Server angegriffen wird, kontaktiere den Support und gib möglichst viele Details an, zum Beispiel:

- Wann das Problem begann
- Ob alle Spieler betroffen sind
- Ob der Server komplett unerreichbar wird
- Ob das Problem zu bestimmten Zeiten wiederkehrt

:::info Eingebauter Schutz
Die DDoS-Abwehr läuft auf Infrastruktur-Ebene. Bei Verdacht auf bösartigen Traffic musst du normalerweise keine Servereinstellungen ändern. Sammle Symptome und kontaktiere den Support.
:::

</details>

### Gameplay-bezogene Serverprobleme

Manche Probleme sind keine direkten Abstürze oder Netzwerkfehler, beeinflussen aber trotzdem, ob das Spiel für Spieler richtig funktioniert.

<details>
  <summary>Versionskonflikt zwischen Client und Server</summary>

Wenn Spieler nach einem Spielupdate nicht beitreten können, laufen Server und Spielclient möglicherweise mit unterschiedlichen Versionen. Das passiert besonders kurz nach Patches.

So löst du das:

1. Stelle sicher, dass der Server aktualisiert wurde
2. Starte den Server nach dem Update neu
3. Vergewissere dich, dass Spieler ihren Spielclient aktualisiert haben
4. Teste die Verbindung erneut

Wenn nur einige Spieler beitreten können, vergleiche zuerst deren Spielversion mit der Serverversion.

</details>

<details>
  <summary>Änderungen wirken nach Einstellung nicht</summary>

Wenn du Konfigurationswerte geändert hast, aber im Spiel nichts anders erscheint, nutzt der Server möglicherweise noch zwischengespeicherte oder unveränderte Laufzeitdaten, oder die bearbeitete Datei ist nicht die aktive.

Prüfe:

- Ob die richtige Datei bearbeitet wurde
- Ob die Werte erfolgreich gespeichert wurden
- Ob der Server danach komplett neu gestartet wurde
- Ob die geänderte Einstellung von deiner installierten Version unterstützt wird

Wenn das genaue Konfigurationsverhalten für deine Subnautica 2 Version unklar ist, vermeide Vermutungen und teste Änderungen einzeln, um klar zu erkennen, was wirkt.

</details>

## Vorbeugende Maßnahmen

Probleme vorzubeugen ist meist einfacher als sie nachträglich zu beheben. Ein paar regelmäßige Wartungsschritte können die Stabilität deutlich verbessern.

### Empfohlene Wartungs-Checkliste

Nutze diese Checkliste, um die Wahrscheinlichkeit zukünftiger Probleme zu verringern:

| Aufgabe | Warum du es tun solltest |
| --- | --- |
| Regelmäßige Backups erstellen | Schützt deine Welt und Konfiguration vor Datenverlust |
| Server sorgfältig updaten | Reduziert Bugs und Versionskonflikte |
| Änderungen einzeln testen | Erleichtert Fehlersuche bei Problemen |
| Performance nach Änderungen überwachen | Erkennt steigende CPU- oder RAM-Nutzung frühzeitig |
| Nur notwendige Inhalte installiert lassen | Verringert Kompatibilitäts- und Performance-Risiken |

### Backups regelmäßig nutzen

Regelmäßige Backups sparen viel Zeit und verhindern dauerhaften Datenverlust. Wenn eine Konfigurationsänderung, ein Update oder ein Weltproblem Probleme verursacht, kannst du einen bekannten funktionierenden Zustand wiederherstellen, statt alles manuell neu aufzubauen.

Du kannst die verfügbare [Backup-Lösung](gameserver-backups.md) nutzen, um manuelle oder geplante Backups für deinen Gameserver zu erstellen.

:::tip Backup vor riskanten Änderungen
Erstelle vor Serverupdates, wichtigen Dateiänderungen oder dem Hinzufügen neuer Mods und Inhalte ein Backup. So hast du einen sicheren Rückfallpunkt, falls neue Probleme auftreten.
:::

<InlineVoucher />

## Fazit

Glückwunsch, du hast erfolgreich häufige Probleme auf deinem Subnautica 2 Gameserver behoben. Bei weiteren Fragen oder Unterstützung steht dir unser Support-Team täglich gerne zur Verfügung! 🙂