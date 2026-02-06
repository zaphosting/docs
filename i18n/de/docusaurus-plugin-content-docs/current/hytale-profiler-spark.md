---
id: hytale-profiler-spark
title: "Hytale: Spark Profiler – Performance-Engpässe erkennen"
description: "Nutze den Spark Mod, um Performance-Probleme zu diagnostizieren und Lag-Ursachen auf deinem Hytale Gameserver zu finden → Jetzt mehr erfahren"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Einführung

Performance-Probleme wie niedrige TPS (Ticks pro Sekunde), Lag-Spikes oder Ruckler können das Spielerlebnis auf deinem Hytale Gameserver stark beeinträchtigen. Die Ursache dieser Probleme manuell zu finden, ist ohne detaillierte Diagnosen ziemlich schwierig.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

Der **Spark** Profiler Mod gibt Serverbetreibern ein mächtiges Tool an die Hand, um die Server-Performance zu analysieren. Nach der Installation sammelt Spark Daten zu CPU-Auslastung, Tick-Zeiten, Server-Gesundheitsmetriken und mehr und erstellt detaillierte Berichte, die genau zeigen, wo Performance-Probleme auftreten. Damit ist Spark ein unverzichtbares Tool für Troubleshooting und Optimierung – besonders bei größeren oder stark frequentierten Hytale Welten.

<InlineVoucher />

## Was Spark macht

Spark bietet verschiedene Profiling-Funktionen:

- **Performance-Profiling** – zeichnet Serveraktivitäten auf und identifiziert langsame Ticks oder hohe CPU-Auslastung  
- **Server-Gesundheitsmetriken** – zeigt Tick-Dauern, TPS, CPU- und Speicherverbrauch  
- **Interaktive Berichte** – erstellt webbasierte Reports, die im Browser angezeigt werden können  
- **Leichtgewichtig und einfach zu bedienen** – minimaler Einfluss bei der Datensammlung  

## Spark installieren

Spark wird über CurseForge verteilt und als Mod installiert. Du kannst Mods entweder über unseren Mods Installer oder per FTP installieren. Mehr Infos findest du in unserer [Mods installieren](http://localhost:3000/guides/docs/hytale-mods) Anleitung. Nach der Installation einfach den Hytale Gameserver neu starten.

<Button label="Spark herunterladen" link="https://www.curseforge.com/hytale/mods/spark" block />

## Profiler starten

Nachdem du Spark installiert und deinen Server gestartet hast, öffne den **Live Console**-Tab im Dashboard deines Gameservers oder nutze den Ingame-Chat, falls du die nötigen Rechte hast. Um mit der Performance-Datenerfassung zu starten, gib folgenden Befehl ein:

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

Sobald der Profiler läuft, zeichnet Spark detaillierte Serveraktivitäten wie Tick-Dauern, CPU-Auslastung und Thread-Ausführung auf. Der Profiler sollte während der Phase laufen, in der das Problem auftritt – zum Beispiel bei hoher Spielerzahl oder während Lag-Spikes. Eine Laufzeit von mindestens 30 bis 60 Sekunden liefert in der Regel genug Daten für eine aussagekräftige Analyse.

Während der Profiler aktiv ist, kannst du die Live-Ergebnisse mit folgendem Befehl ansehen:

```
/spark profiler open
```

Dieser Befehl erzeugt einen Weblink in der Konsole oder im Chat. Öffnest du diesen Link im Browser, bekommst du eine Live-Ansicht der Profiler-Daten, inklusive Tick-Grafiken und Workload-Verteilung.

Wenn genug Daten gesammelt wurden, stoppe den Profiler mit:

```
/spark profiler stop
```

Nach dem Stoppen erstellt Spark einen finalen Bericht-Link. Dieser Report enthält den kompletten Datensatz der Profiling-Session und kann im Browser geöffnet oder zum Teilen weitergegeben werden.

Falls du die aktuelle Profiling-Session verwerfen und neu starten möchtest, kannst du den Profiler so zurücksetzen:

```
/spark profiler cancel
/spark profiler start
```

Das löscht die bisherigen Daten und startet sofort eine neue Profiling-Runde.

## Profiler-Ergebnisse analysieren

Der Spark Profiler Report liefert eine detaillierte Aufschlüsselung, wie die Server-Ressourcen genutzt werden. Besonders wichtig ist die Tick-Timeline, die zeigt, wie lange einzelne Ticks brauchen. Dauerhaft lange Ticks deuten oft auf hohe Last hin, die direkt TPS und Spiel-Performance beeinträchtigt.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

Der Profiler hebt außerdem **Hotspots** hervor – also Funktionen oder Systeme, die am meisten Ressourcen verbrauchen. Diese Insights helfen dir zu erkennen, ob Performance-Probleme durch bestimmte Mods, Spieleraktionen, Weltmechaniken oder Servereinstellungen verursacht werden.

Spark-Berichte sind so gestaltet, dass sie leicht geteilt werden können. Wenn du Support oder Hilfe von anderen Admins suchst, kannst du einfach den Profiler-Link weitergeben, damit sie die Daten direkt einsehen und gezielte Tipps geben können.

## Fazit

Der Spark Profiler Mod für Hytale ist ein super Tool, um Performance-Probleme zu diagnostizieren und die Ursachen von Server-Lag zu finden. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />