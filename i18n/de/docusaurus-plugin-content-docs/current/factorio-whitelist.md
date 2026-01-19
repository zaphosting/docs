---
id: factorio-whitelist
title: "Factorio: Whitelist"
description: "Infos, wie du deinen Factorio-Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die den Serverzugang auf freigegebene Factorio-Accounts beschränkt. Bei den meisten gehosteten Servern wird die Whitelist aktiviert, sobald mindestens ein Spieler hinzugefügt wurde, und sie wird in einer `server-whitelist.json` Datei gespeichert.

<InlineVoucher />

## Whitelist aktivieren

Öffne die Live-Konsole im ZAP-Hosting Gameserver-Management und füge den ersten Spieler zur Whitelist hinzu. Das Hinzufügen des ersten Namens aktiviert die Whitelist normalerweise sofort.

```text
/whitelist add PlayerName
```

Falls dein Host einen expliziten Aktivierungsbefehl anbietet, kannst du diesen auch vor dem Hinzufügen der Nutzer ausführen.

```text
/whitelist enable
```

Ein Neustart ist normalerweise nicht nötig, damit die Änderung wirksam wird, aber ein einmaliger Neustart nach der Ersteinrichtung stellt sicher, dass die Whitelist-Datei geschrieben und beim Start geladen wird.

## Whitelist-Spieler verwalten

Um weitere Spieler hinzuzufügen, führe den Add-Befehl mit deren Factorio-Benutzernamen erneut aus.

```text
/whitelist add AnotherPlayer
```

Um einen Spieler zu entfernen, nutze den Remove-Befehl.

```text
/whitelist remove PlayerName
```

Um die aktuelle Whitelist anzuzeigen, verwende den Get-Befehl.

```text
/whitelist get
```

## Whitelist-Funktion prüfen

Nachdem mindestens ein Spieler hinzugefügt wurde, versuche mit einem nicht gelisteten Account beizutreten. Die Verbindung sollte abgelehnt werden. Dann verbinde dich mit einem whitelisted Account, um zu bestätigen, dass es funktioniert.

Wenn der Server trotzdem alle reinlässt, überprüfe, ob die Befehle auf dem richtigen Server ausgeführt wurden, und starte den Server einmal neu, um sicherzugehen, dass die Whitelist-Datei beim Start geladen wird.

## Fazit

Wenn du alle Schritte oben korrekt befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugang trotzdem nicht wie erwartet funktioniert, starte den Server einmal neu und überprüfe die Datei oder die Befehlsausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />