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

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer auf deinen Server joinen darf. DayZ hat einen eingebauten Whitelist-Modus, den du aktivieren und für einzelne Spieler an- oder ausschalten kannst.

<InlineVoucher />


## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und öffne die Hauptkonfigurationsdatei `serverDZ.cfg`. Suche die Whitelist-Einstellung und aktiviere sie.

```cfg
enableWhitelist = 1;
```

Als Nächstes findest du die Whitelist-Datei, die dein Host bereitstellt, meistens heißt sie `whitelist.txt` und liegt im selben Verzeichnis wie deine Server-Konfigurationsdateien. Füge pro Zeile eine SteamID64 hinzu.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Speichere alle Dateien und starte den Server neu, damit die Whitelist angewendet wird.

## Whitelist-Spieler verwalten

Um einen Spieler hinzuzufügen, hängst du seine SteamID64 an `whitelist.txt` an, speicherst und startest den Server neu. Um einen Spieler zu entfernen, lösche die entsprechende Zeile aus `whitelist.txt`, speichere und starte den Server neu.

Halte die Datei sauber mit genau einer ID pro Zeile. Kommentare werden nicht überall unterstützt, also vermeide zusätzlichen Text in derselben Zeile, außer du hast bestätigt, dass dein Server das akzeptiert.

## Whitelist-Funktion prüfen

Nach dem Neustart versuchst du, dich mit einem Account zu verbinden, der nicht in `whitelist.txt` steht. Der Zugang sollte verweigert werden. Dann verbinde dich mit einem gelisteten Account, um zu bestätigen, dass es klappt.

Wenn gelistete Spieler nicht joinen können, überprüfe, ob du SteamID64 benutzt hast und ob der Server wirklich die `whitelist.txt` lädt, die du bearbeitet hast.

## Fazit

Wenn du alle Schritte richtig befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugang trotzdem nicht wie erwartet funktioniert, starte den Server nochmal neu und check die Datei oder die Konsolenausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />