---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Infos, wie du deinen Terraria-Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer auf deinen Server joinen darf. Beim Terraria-Hosting läuft das üblicherweise über einen TShock-Server, bei dem du die Whitelist-Funktion aktivierst. Diese wird über eine Whitelist-Datei und Befehle verwaltet.

<InlineVoucher />

## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und check, ob dein Server TShock nutzt. Dann öffne die TShock-Konfigurationsdatei `tshock/config.json` und aktiviere die Whitelist-Einstellung:

```
"EnableWhitelist": true
```

Speichere die Datei und starte den Server neu. TShock verlangt jetzt eine Whitelist-Freigabe für eingehende Verbindungen.

## Whitelist-Spieler verwalten

Um einen Eintrag hinzuzufügen, öffne die Live-Konsole im ZAP-Hosting Gameserver-Management und nutze den Whitelist-Befehl mit der IP-Adresse des Spielers.

```text
whitelist 203.0.113.25
```

TShock speichert die Liste in `tshock/whitelist.txt`. Um einen Eintrag zu entfernen, verbinde dich per FTP, öffne die Datei, lösche die entsprechende IP-Zeile, speichere und starte den Server neu.

```txt
203.0.113.25
198.51.100.10
```

## Whitelist-Funktion prüfen

Nach dem Neustart versuchst du, dich von einer IP-Adresse zu verbinden, die nicht auf der Liste steht. Der Zugang sollte blockiert sein. Dann verbinde dich von einer IP, die auf der Whitelist steht.

Falls Spieler trotzdem joinen können, obwohl sie nicht gelistet sind, überprüfe nochmal, ob `EnableWhitelist` in der `config.json` auf true steht und der Server wirklich als TShock gestartet wurde.

## Fazit

Wenn du alle Schritte richtig befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf deinen Server darf. Falls der Zugang trotzdem nicht wie erwartet funktioniert, starte den Server nochmal neu und prüfe die Datei oder die Konsolenausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂



<InlineVoucher />