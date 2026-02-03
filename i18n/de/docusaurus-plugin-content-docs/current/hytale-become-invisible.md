---
id: hytale-become-invisible
title: "Hytale: Unsichtbar werden"
description: "Entdecke, wie du auf einem Hytale Gameserver unsichtbar wirst → Jetzt mehr erfahren"
sidebar_label: Unsichtbar werden
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Unsichtbarkeit kann auf Hytale Gameservern für Moderation, Tests oder Content-Erstellung super nützlich sein. So können Admins Spieler beobachten, ohne aufzufallen, verdächtige Aktivitäten checken oder Bereiche erkunden, ohne ins Gameplay einzugreifen. Je nach Serverkonfiguration und verfügbaren Rechten lässt sich Unsichtbarkeit meist über Ingame-Befehle oder die Live-Konsole aktivieren.

<InlineVoucher />

## Voraussetzungen

Um die Unsichtbarkeits-Funktion zu nutzen, brauchst du ausreichende Rechte auf dem Server. Meist sind Operator-Rechte oder Zugriffe auf Moderations- und Gameplay-Befehle nötig. Wenn du nicht die nötigen Rechte hast, wird der Befehl abgelehnt und Unsichtbarkeit kann nicht aktiviert werden. Wie du die nötigen Rechte bekommst, erfährst du in unserer [Admin werden](hytale-becomeadmin.md) Anleitung.

## Unsichtbar werden

Um unsichtbar zu werden, öffne den Ingame-Chat und gib den vom Server unterstützten Unsichtbarkeits-Befehl ein. Führe folgenden Befehl aus:

```
/hide <Spielername>
```

Sobald der Befehl erfolgreich ausgeführt wurde, ist dein Charakter für andere Spieler in der Welt nicht mehr sichtbar. Du kannst dich weiterhin bewegen, interagieren und Aktivitäten überwachen – je nach Serverregeln und Umsetzung der Unsichtbarkeit.

Neben dem einfachen Hide-Befehl bietet Hytale auch erweiterte Optionen, mit denen du steuern kannst, wer einen Spieler sehen kann. Zum Beispiel kannst du einen Spieler nur für einen bestimmten Zielspieler unsichtbar machen oder die Unsichtbarkeit für alle auf dem Server aktivieren.

Folgende Befehle sind verfügbar:
- `/hide <Spielername>`  Macht den angegebenen Spieler unsichtbar.
- `/hide <Spielername> --target <Spielername>`  Macht den angegebenen Spieler nur für den Zielspieler unsichtbar.
- `/hide all`  Macht alle Spieler unsichtbar.

## Unsichtbarkeit deaktivieren

Um wieder sichtbar zu werden, führe den entsprechenden Befehl aus, um die Unsichtbarkeit zu deaktivieren. Nach Bestätigung des Befehls können andere Spieler deinen Charakter wieder wie gewohnt sehen.

```
/hide show <Spielername>
```

Es gibt auch zusätzliche Befehle, um Unsichtbarkeit in spezifischeren Fällen zu entfernen, z. B. Sichtbarkeit nur für bestimmte Zielspieler wiederherzustellen oder Unsichtbarkeit von allen zu entfernen.

Folgende Befehle sind verfügbar:
- `/hide show <Spielername>`  Entfernt die Unsichtbarkeit vom angegebenen Spieler.
- `/hide show <Spielername> --target <Spielername>`  Entfernt die Unsichtbarkeit vom angegebenen Spieler für den Zielspieler.
- `/hide showall`  Entfernt die Unsichtbarkeit von allen Spielern.

## Fazit

Unsichtbar werden auf einem Hytale Gameserver ist ein praktisches Tool für Admins und Moderatoren, die das Gameplay diskret überwachen wollen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />