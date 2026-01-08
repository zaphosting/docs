---
id: eco-whitelist
title: "ECO: Whitelist"
description: "Infos, wie du deinen ECO-Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist eine Zugangsliste, die einschränkt, wer sich mit deinem Server verbinden kann. In ECO wird die Whitelist in der `Users.eco`-Konfiguration gespeichert und wird automatisch aktiv, sobald mindestens eine SteamID64 eingetragen ist.

## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und suche die Datei `Users.eco`. Öffne sie und finde den Abschnitt `WhiteList`. Füge dort die SteamID64-Werte innerhalb von `$values` hinzu.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Speichere die Datei und starte den Server neu, damit die neue Zugangsliste angewendet wird.

## Whitelist-Spieler verwalten

Spieler hinzufügen kannst du auch über die Live-Konsole im ZAP-Hosting Gameserver-Management, wenn du die nötigen Ingame-Rechte hast. Nutze den Whitelist-Befehl mit dem Spielernamen.

```text
/whitelist PlayerName
```

Spieler entfernen geht nur über das Bearbeiten der `Users.eco`. Lösche die SteamID64 aus `$values`, speichere und starte den Server neu, da es keinen Serverbefehl zum Entfernen von Einträgen gibt.

## Whitelist-Funktion überprüfen

Nach dem Neustart versuche, dich mit einem Account zu verbinden, der nicht in `$values` steht. Der Zugang sollte blockiert sein. Verbinde dich danach mit einem whitelisted Account.

Wenn der Zugang noch offen ist, überprüfe, ob mindestens eine SteamID64 eingetragen ist und ob die bearbeitete `Users.eco`-Datei zur aktiven Serverinstanz gehört.

## Fazit

Wenn du alle Schritte korrekt befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf den Server darf. Falls der Zugang trotzdem nicht wie erwartet funktioniert, starte den Server nochmal neu und prüfe die Datei oder die Konsolenausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

<InlineVoucher />