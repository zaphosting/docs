---
id: starmade-whitelist
title: "StarMade: Whitelist"
description: "Infos dazu, wie du deinen StarMade Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer auf deinen Server joinen darf. StarMade unterstützt eine eingebaute Whitelist, die in der `server.cfg` gesteuert und über die `whitelist.txt` befüllt wird.

<InlineVoucher />

## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und öffne die `server.cfg`. Aktiviere die Authentifizierung und die Whitelist.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Speichere die Datei. Öffne oder erstelle dann die `whitelist.txt` im selben Serververzeichnis. Füge Spieler im von StarMade genutzten Format hinzu, jeweils eine Zeile pro Spieler.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Starte den Server neu, damit die aktualisierte Whitelist geladen wird.

## Whitelist-Spieler verwalten

Um einen Spieler hinzuzufügen, füge eine neue Zeile in der `whitelist.txt` im gleichen Format hinzu, speichere und starte den Server neu. Um einen Spieler zu entfernen, lösche seine Zeile aus der `whitelist.txt`, speichere und starte neu.

Wenn Spielernamen Sonderzeichen enthalten, nutze genau den Ingame-Namen, wie er beim Login angezeigt wird, um Fehler zu vermeiden.

## Whitelist-Funktion prüfen

Nach dem Neustart versuche, dich mit einem Account zu verbinden, der nicht in der `whitelist.txt` steht. Der Zugang sollte verweigert werden. Verbinde dich danach mit einem eingetragenen Spielernamen.

Wenn eingetragene Spieler nicht joinen können, überprüfe, ob die StarMade-Authentifizierung aktiviert und erforderlich ist, sonst stimmen die Namen möglicherweise nicht zuverlässig überein.

## Fazit

Wenn du alle Schritte korrekt befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf deinen Server darf. Falls der Zugang trotzdem nicht wie erwartet funktioniert, starte den Server nochmal neu und prüfe die Datei oder die Konsolenausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />