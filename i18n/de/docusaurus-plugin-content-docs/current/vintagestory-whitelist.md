---
id: vintagestory-whitelist
title: "Vintage Story: Whitelist"
description: "Infos dazu, wie du deinen Vintage Story Gameserver bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer auf deinen Gameserver joinen darf. Vintage Story hat einen eingebauten Whitelist-Modus, den du aktivieren und für jeden Spieler einzeln an- oder ausschalten kannst.

<InlineVoucher />


## Whitelist aktivieren

Öffne die Ingame-Konsole und setze den Whitelist-Modus mit dem Server-Config-Befehl. Nutze den Wert 1 für den Whitelist-Modus, damit nur Spieler auf der Whitelist Zugang haben.

```text
/serverconfig whitelistmode 1
```

Starte den Server danach einmal neu, damit die Einstellung dauerhaft übernommen und sauber beim Start angewendet wird.

## Whitelist-Spieler verwalten

Um einen Spieler zu erlauben, füge ihn mit dem Player-Befehl zur Whitelist hinzu.

```text
/player PlayerName whitelist on
```

Um den Zugang zu entziehen, schalte die Whitelist für den Spieler aus.

```text
/player PlayerName whitelist off
```

Wenn du die aktuelle Server-Einstellung nochmal prüfen willst, gib die Server-Konfiguration aus oder führe den whitelistmode-Befehl ohne Änderungen aus und bestätige, dass der Wert auf 1 steht.

## Whitelist-Funktion überprüfen

Versuche, dich mit einem Spieler zu verbinden, der nicht auf der Whitelist steht. Die Verbindung sollte abgelehnt werden. Verbinde dich danach mit einem Spieler, für den du `whitelist on` gesetzt hast.

Wenn trotzdem alle joinen können, überprüfe, ob `whitelistmode` wirklich auf 1 steht und ob du die Befehle auf dem richtigen Server ausgeführt hast.

## Fazit

Wenn du alle Schritte oben richtig befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugang trotzdem nicht wie gewünscht funktioniert, starte den Server einmal neu und prüfe die Datei oder die Befehlsausgabe erneut, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />