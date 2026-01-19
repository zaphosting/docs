---
id: hytale-whitelist
title: "Hytale: Whitelist Einrichtung und Verwaltung"
description: "Entdecke, wie du deinen Hytale Gameserver mit Whitelist-Funktionen absicherst und den Spielerzugang kontrollierst → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Whitelist ist eine Sicherheits- und Zugangskontrollfunktion, mit der du festlegen kannst, wer auf deinen Hytale Gameserver joinen darf. Wenn aktiviert, dürfen nur Spieler, die explizit auf der Whitelist stehen, sich verbinden. Das ist besonders praktisch für private Server, Community-Server, Entwicklungsumgebungen oder Testphasen, in denen der Zugang nur vertrauenswürdigen Spielern vorbehalten sein soll.

:::info Early Access Hinweis

Hytale wurde am 13. Januar 2026 veröffentlicht und befindet sich aktuell im Early Access. Da sich das Spiel noch in aktiver Entwicklung befindet, können sich Server-Software, Konfigurationsdateien, Modding-Support und Installationsabläufe weiterhin ändern.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Whitelist aktivieren

Die Whitelist kannst du entweder über die Server-Konsole oder direkt im Spiel aktivieren. Stelle sicher, dass du die nötigen Rechte hast, z.B. Operator-Rechte, bevor du die Befehle ausführst.

Um die Whitelist zu aktivieren, gib folgenden Befehl ein:

```
/whitelist enable
```



Sobald aktiviert, wird jedem Spieler, der nicht auf der Whitelist steht, der Zugang zum Server verweigert. Um zu prüfen, ob die Whitelist aktuell aktiv ist, nutze:

```
/whitelist status
```

Dieser Befehl zeigt den aktuellen Status der Whitelist an und bestätigt, dass die Einstellung korrekt übernommen wurde.



## Whitelist deaktivieren

Wenn du wieder allen Spielern erlauben möchtest, dem Server beizutreten, kannst du die Whitelist jederzeit deaktivieren. Verwende dazu folgenden Befehl:

```
/whitelist disable
```

Nach der Deaktivierung beschränkt der Server den Zugang nicht mehr anhand der Whitelist und alle Spieler können sich verbinden.



## Whitelist verwalten

Die Whitelist lässt sich dynamisch verwalten, während der Server läuft. Spieler können jederzeit hinzugefügt oder entfernt werden, ohne dass ein Neustart nötig ist, wenn du die Befehle nutzt.



### Spieler zur Whitelist hinzufügen

Um einem bestimmten Spieler Zugang zum Server zu geben, füge ihn mit folgendem Befehl zur Whitelist hinzu:

```
/whitelist add <Spielername>
```

Der angegebene Spieler darf sofort joinen, sofern die Whitelist aktiviert ist.



### Spieler von der Whitelist entfernen

Um einem Spieler den Zugang zu entziehen, entferne ihn von der Whitelist:

```
/whitelist remove <Spielername>
```

Nach der Entfernung kann der Spieler nicht mehr joinen, solange die Whitelist aktiv ist.



### Whitelist anzeigen

Um alle Spieler anzuzeigen, die aktuell auf der Whitelist stehen und joinen dürfen, nutze:

```
/whitelist list
```

Dieser Befehl gibt die komplette Liste der whitelisted Spielernamen aus.



### Whitelist komplett leeren

Wenn du alle Spieler auf einmal von der Whitelist entfernen möchtest, kannst du sie komplett leeren:

```
/whitelist clear
```

Dadurch werden alle Einträge gelöscht, die Whitelist selbst bleibt aber aktiviert.



## Whitelist per Datei verwalten

Neben den Befehlen kannst du die Whitelist auch direkt über eine Konfigurationsdatei verwalten. Diese Methode eignet sich gut für Massenänderungen oder wenn du die Whitelist vorbereiten möchtest, bevor der Server startet. Die Datei heißt `whitelist.json` und befindet sich im Serververzeichnis.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Fazit

Glückwunsch, du hast die Whitelist für deinen Hytale Gameserver erfolgreich eingerichtet. Dein Server ist jetzt nur noch für freigegebene Spieler zugänglich, was dir mehr Kontrolle, Privatsphäre und eine sicherere Multiplayer-Umgebung bietet.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂