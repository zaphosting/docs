---
id: dayz-whitelist
title: "DayZ: Whitelist"
description: "Infos, wie du deinen DayZ-Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer auf deinen Server joinen darf. DayZ bietet einen integrierten Whitelist-Modus, den du aktivieren und für einzelne Spieler an- oder ausschalten kannst.

<InlineVoucher />


## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und öffne die Hauptkonfigurationsdatei `serverDZ.cfg`. Suche die Whitelist-Einstellung und aktiviere sie.

```cfg
enableWhitelist = 1;
```

Als Nächstes findest du die Whitelist-Datei, die dein Host bereitstellt – meist heißt sie `whitelist.txt` und liegt im gleichen Verzeichnis wie deine Server-Konfigurationsdateien. Füge pro Zeile eine SteamID64 hinzu.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Speichere alle Dateien und starte den Server neu, damit die Whitelist angewendet wird.

## Whitelist-Spieler verwalten

Um einen Spieler hinzuzufügen, hängst du seine SteamID64 an `whitelist.txt` an, speicherst die Datei und startest den Server neu. Um einen Spieler zu entfernen, lösche seine Zeile aus `whitelist.txt`, speichere und starte den Server neu.

Halte die Datei sauber mit jeweils einer ID pro Zeile. Kommentare werden nicht überall unterstützt, also vermeide zusätzlichen Text in derselben Zeile, außer du hast bestätigt, dass dein Server das akzeptiert.

## Whitelist-Funktion prüfen

Nach dem Neustart versuchst du, dich mit einem Account zu verbinden, der nicht in `whitelist.txt` steht. Der Zugang sollte verweigert werden. Verbinde dich danach mit einem gelisteten Account, um zu bestätigen, dass es klappt.

Wenn gelistete Spieler nicht joinen können, überprüfe, ob du SteamID64 benutzt hast und ob der Server wirklich die `whitelist.txt` lädt, die du bearbeitet hast.

## Fazit

Wenn du alle Schritte korrekt befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf deinen Server darf. Falls der Zugang trotzdem nicht wie erwartet funktioniert, starte den Server nochmal neu und prüfe die Datei oder die Befehlsausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />