---
id: projectzomboid-whitelist
title: "Project Zomboid: Whitelist"
description: "Infos, wie du deinen Project Zomboid Gameserver bei ZAP-Hosting auf Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist ein Zugriffsmodus, bei dem du Nutzerkonten explizit anlegen musst, bevor sie joinen können. Bei Project Zomboid erreichst du das meist, indem du die offene Registrierung in der Serverkonfiguration deaktivierst und dann Nutzer per Konsolenbefehlen hinzufügst.

<InlineVoucher />


## Whitelist aktivieren

Verbinde dich per FTP mit deinem Gameserver und öffne die Servereinstellungsdatei. Diese findest du normalerweise unter `Zomboid/Server/` und sie heißt nach deinem Server, z.B. `servertest.ini` oder `<ServerName>.ini`. Suche den Eintrag `Open` und setze ihn auf false.

```ini
Open=false
```

Speichere die Datei und starte den Server neu. Mit deaktivierter offener Registrierung können nur noch die Accounts joinen, die du angelegt hast.

## Whitelist-Spieler verwalten

Öffne die Live-Konsole im ZAP-Hosting Gameserver-Management und erstelle Accounts für erlaubte Spieler. Nutze den Befehl adduser mit Benutzername und Passwort.

```text
/adduser "username" "password"
```

Um einem Nutzer den Zugang zu entziehen, entferne ihn mit dem passenden Befehl von der Whitelist.

```text
/removeuserfromwhitelist "username"
```

Falls du vorher offene Registrierung erlaubt hattest und bestehende verbundene Accounts in Whitelist-Einträge umwandeln willst, nutze den Befehl, der alle aktuell verbundenen Nutzer zur Whitelist hinzufügt.

```text
/addalltowhitelist
```

## Whitelist-Funktion prüfen

Nach Aktivierung von `Open=false` sollte ein neuer Nutzer, der nicht mit `/adduser` hinzugefügt wurde, nicht joinen können. Teste mit einem whitelisted Account, ob der Zugang klappt.

Falls ungebannte Nutzer trotzdem joinen können, überprüfe, ob du die aktive `<ServerName>.ini` Datei bearbeitet und den Server neu gestartet hast.

## Fazit

Wenn du alle Schritte korrekt befolgt hast, ist deine Whitelist jetzt aktiv und du kannst genau steuern, wer auf deinen Gameserver darf. Falls der Zugang trotzdem nicht wie gewünscht funktioniert, starte den Server nochmal neu und prüfe die Datei oder Konsolenausgabe, um sicherzugehen, dass die Änderung übernommen wurde.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />