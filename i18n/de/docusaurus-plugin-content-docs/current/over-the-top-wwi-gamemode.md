---
title: "Over the Top WWI: Spielmodus ändern"
description: "Lerne, wie du den Spielmodus auf deinem Over the Top WWI Server änderst → Jetzt mehr erfahren"
sidebar_label: Spielmodus ändern
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der Spielmodus auf einem **Over the Top WWI** Gameserver bestimmt, wie Matches ablaufen und welche Ziele die Spieler erfüllen müssen. Unterschiedliche Spielmodi können das Tempo, die Strategie und das gesamte Gameplay-Erlebnis stark verändern.

Indem du den Spielmodus anpasst, kannst du deinen Server auf groß angelegte Schlachten, defensives Gameplay oder zielbasierte Szenarien ausrichten – ganz nach den Vorlieben deiner Community.

<InlineVoucher />

## Konfiguration

Der Spielmodus wird in der Server-Konfigurationsdatei eingestellt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche die Datei `ServerConfiguration.ini` und öffne sie. Dort findest du folgenden Parameter:

```
CurrentGameMode = 2
```

Der Wert bestimmt, welcher Spielmodus auf deinem Server aktiv ist. Verfügbare Werte:

- `2` → Conquest
- `3` → Siege

Der gewählte Wert definiert die grundlegenden Spielregeln für jedes Match.

- **Conquest (2)** konzentriert sich darauf, Ziele auf der Karte einzunehmen und zu halten, was ständige Bewegung und Teamkoordination fördert.
- **Siege (3)** ist meist defensiver, wobei ein Team angreift und das andere strategische Positionen verteidigt.

Die Wahl des richtigen Modus hängt von deinem bevorzugten Spielstil und der Spieleranzahl ab.

Nachdem du den Wert in der `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Server neu. Der neue Spielmodus wird beim nächsten Match oder Kartenwechsel aktiviert.

## Fazit

Glückwunsch! Du hast erfolgreich den Spielmodus auf deinem **Over the Top WWI Gameserver** geändert. Mit der passenden Moduswahl kannst du das Gameplay-Erlebnis gestalten und besser auf die Wünsche deiner Community abstimmen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />