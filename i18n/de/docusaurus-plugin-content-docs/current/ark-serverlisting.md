---
id: ark-serverlisting
title: "ARK: Probleme bei der Serverauflistung mit Steam-Spielen, die Steamworks nutzen"
description: "Entdecke, warum beliebte Spiele Probleme bei der Serverauflistung wegen Steamworks-Limits haben und wie das dein Multiplayer-Erlebnis beeinflusst → Jetzt mehr erfahren"
sidebar_label: Serverlisting Probleme
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Leider haben viele beliebte Spiele wie ARK oder Valheim massive Probleme damit, alle Server in der Ingame-Serverliste anzuzeigen.

Das liegt daran, dass diese Spiele die Software „Steamworks“ für ihre Serverauflistung nutzen.

Steamworks kann maximal 4880 Server listen. Wenn ein Spiel mehr aktive Server als diese Zahl hat, wird nur ein kleiner Teil der aktiven Server für den Spieler angezeigt.

Es ist also total zufällig, ob Spieler 1 Server Y sieht oder nicht.  
Es kann sogar passieren, dass Spieler 1 Server Y sieht, Spieler 2 aber nicht. Spieler 3 sieht ihn dann wieder, aber dafür einen anderen Server nicht, den Spieler 1 sieht.

Um auszuschließen, dass das Problem beim Serveranbieter liegt, kannst du den Server unter „Steam“ → „Anzeigen“ → „Server“ mit IP und Port suchen. Wenn er dort gefunden wird, ist die Verbindung zwischen Spieler und Server einwandfrei. Denn hier erfolgt eine direkte Abfrage durch den Spieler.

Ein gutes Beispiel, um das Problem zu bestätigen: ARK-Spieler, die das Spiel über Steam starten, finden oft keine Server. Öffnen sie ARK hingegen über Epic Games, werden die Server problemlos gefunden. Dort wird kein Steamworks verwendet.

Auch verschiedene Entwickler haben sich zu dem Problem geäußert. Zum Beispiel dachte Garry Newman von Garrysmod zunächst, das Problem läge bei seinem Serveranbieter OVH. Das war aber nicht der Fall. Das Problem betrifft auch ZAP-Hosting und jeden anderen Serveranbieter, da es direkt an Steamworks liegt:

![](https://screensaver01.zap-hosting.com/index.php/s/M6DkmBYCjLsPBeW/preview)

Quelle: https://x.com/garrynewman/status/1334446218437681152?s=20

Oder Rust, wie sie in ihrem Blog schreiben:

```
Es ist nicht alles eitel Sonnenschein, wenn man plötzlich so einen Popularitätsschub erlebt.  
Man sieht erste Risse im Fundament, am deutlichsten für uns war, dass der Serverbrowser nie dafür ausgelegt war, so viele Server zu handhaben.  
Ohne zu technisch zu werden, führt das dazu, dass viele Server für Nutzer nicht angezeigt werden und das sorgt für viel Frust bei Serverbetreibern.  
Wir arbeiten aktuell an Lösungen und erforschen Möglichkeiten, also habt bitte Geduld mit uns.
```

Quelle: https://rust.facepunch.com/blog/

Wir behalten das Problem weiter im Blick und informieren hier, sobald es eine Lösung gibt.

<InlineVoucher />