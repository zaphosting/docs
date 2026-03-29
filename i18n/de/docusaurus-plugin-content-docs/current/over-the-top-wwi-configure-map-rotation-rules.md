---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI: Map-Rotation-Regeln konfigurieren"
description: "Lerne, wie du das Map-Rotation-Verhalten auf deinem Over the Top WWI Gameserver konfigurierst → Jetzt mehr erfahren"
sidebar_label: Map Rotation
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Map-Rotation-Regeln in **Over the Top WWI** bestimmen, wie Maps basierend auf der Spieleranzahl ausgewählt und gespielt werden. So wird sichergestellt, dass die Maps ausgewogen bleiben und zur Anzahl der aktiven Spieler passen.

Mit der Konfiguration dieser Einstellungen kannst du verhindern, dass große Maps mit zu wenigen Spielern gespielt werden oder kleine Maps überfüllt sind.

<InlineVoucher />

## Konfiguration

Die Map-Rotation-Regeln werden in der Server-Konfigurationsdatei eingestellt. Du kannst diese Datei in deinem **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche und öffne die Datei `ServerConfiguration.ini`. In dieser Datei findest du folgenden Parameter:


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` aktiviert oder deaktiviert die automatische Map-Auswahl basierend auf der Spieleranzahl

  - `False` → Deaktiviert
  - `True` → Aktiviert


Wenn aktiviert, prüft der Server die aktuelle Spieleranzahl und passt die Map-Auswahl entsprechend an. So wird sichergestellt, dass Maps innerhalb eines passenden Bereichs gewählt werden, was für ein ausgewogenes Gameplay sorgt.

Das System nutzt interne Schwellenwerte, um zu bestimmen, ob eine Map geeignet ist, und verhindert so, dass große Maps unterbesetzt oder kleine Maps überfüllt sind.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Server neu. Das aktualisierte Map-Rotation-Verhalten wird dann automatisch angewendet.

## Fazit

Glückwunsch! Du hast erfolgreich die Map-Rotation-Regeln auf deinem **Over the Top WWI Gameserver** konfiguriert. So sorgst du für ein ausgewogenes Gameplay, indem die Map-Größe zur Spieleranzahl passt.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />