---
id: hytale-teleport-between-worlds
title: "Hytale: Zwischen Welten teleportieren"
description: "Entdecke, wie du auf einem Hytale-Server zwischen Welten teleportierst → Jetzt mehr erfahren"
sidebar_label: Zwischen Welten teleportieren
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Teleportieren zwischen Welten auf einem Hytale-Server ermöglicht es Spielern, nahtlos von einer Weltumgebung in eine andere zu wechseln. Diese Funktion wird häufig auf Servern genutzt, die mehrere Welten hosten, wie Hubs, Adventure-Maps, Kreativbereiche oder separate Gameplay-Zonen.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da sich das Spiel noch in aktiver Entwicklung befindet, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsabläufe weiterhin ändern.

:::

<InlineVoucher />


## Teleportieren

Die Welt-Teleport-Befehle können entweder über die Server-Konsole oder von einem Operator im Ingame-Chat ausgeführt werden. Wird der Befehl über die Konsole ausgeführt, wirkt er sich sofort auf den angegebenen Spieler aus. Im Spiel muss der Spieler, der den Befehl ausführt, Operator- oder gleichwertige Rechte besitzen.

Um einen Spieler von seiner aktuellen Welt in eine andere Welt zu teleportieren, nutze folgenden Befehl:

```
/world teleport <Spielername> <Weltenname>
```

Der Parameter `<Spielername>` definiert den Namen des Spielers, der teleportiert werden soll. Der Parameter `<Weltenname>` gibt den Namen der Zielwelt an.

Das Teleportieren zwischen Welten setzt voraus, dass die Zielwelt auf dem Server verfügbar ist. Ist die Zielwelt nicht geladen, schlägt der Teleport-Befehl fehl. Um eine Welt für das Teleportieren verfügbar zu machen, lade sie mit folgendem Befehl:

```
/world load <Weltenname>
```


:::tip Übersicht der Weltnamen

Falls du dir beim genauen Namen einer Welt unsicher bist, kannst du dir mit dem Befehl `/world list` eine Liste aller verfügbaren Welten anzeigen lassen.
:::


## Abschluss

Das Teleportieren zwischen Welten ist ein mächtiges Tool, um Multi-Welten-Hytale-Server zu managen. Mit den passenden Welt-Befehlen über die Konsole oder den Ingame-Chat und dem Laden der Zielwelten können Admins eine reibungslose und flexible Navigation zwischen verschiedenen Server-Umgebungen ermöglichen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


<InlineVoucher />