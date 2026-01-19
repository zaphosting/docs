---
id: projectzomboid-whitelist
title: "Project Zomboid: Whitelist"
description: "Infos, wie du deinen Project Zomboid Server bei ZAP-Hosting auf die Whitelist setzt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Whitelist ist ein Zugriffsmodus, bei dem du Nutzerkonten explizit anlegen musst, bevor sie joinen können. Bei Project Zomboid erreicht man das meist, indem man die offene Registrierung in der Serverkonfiguration deaktiviert und dann User per Konsolenbefehlen hinzufügt.

<InlineVoucher />


## Whitelist aktivieren

Verbinde dich per FTP mit deinem Server und öffne die Servereinstellungsdatei. Die findest du normalerweise unter `Zomboid/Server/` und sie heißt nach deinem Server, z.B. `servertest.ini` oder `<ServerName>.ini`. Such den Eintrag `Open` und setz ihn auf false.

```ini
Open=false
```

Speichere die Datei und starte den Server neu. Mit deaktivierter offener Registrierung können nur noch die Accounts joinen, die du angelegt hast.

## Whitelist-Spieler verwalten

Öffne die Live-Konsole im ZAP-Hosting Gameserver-Management und leg Accounts für erlaubte Spieler an. Nutze den Befehl adduser mit Benutzername und Passwort.

```text
/adduser "username" "password"
```

Um einem User den Zugang zu entziehen, entferne ihn mit dem passenden Befehl von der Whitelist.

```text
/removeuserfromwhitelist "username"
```

Falls du vorher offene Registrierung erlaubt hast und bestehende verbundene Accounts in Whitelist-Einträge umwandeln willst, nutze den Befehl, der alle aktuell verbundenen Nutzer zur Whitelist hinzufügt.

```text
/addalltowhitelist
```

## Whitelist-Funktion prüfen

Nach Aktivierung von `Open=false` sollte ein neuer User, der nicht mit `/adduser` hinzugefügt wurde, nicht joinen können. Teste mit einem Whitelist-Account, ob der Zugang klappt.

Wenn ungebannte Nutzer trotzdem joinen können, überprüfe, ob du die richtige `<ServerName>.ini` Datei bearbeitet und den Server neu gestartet hast.

## Fazit

Wenn du alle Schritte richtig gemacht hast, ist deine Whitelist jetzt aktiv und du kontrollierst genau, wer auf den Server darf. Falls der Zugang trotzdem nicht wie gewünscht funktioniert, starte den Server nochmal neu und check die Datei oder Konsolenausgabe, ob die Änderung übernommen wurde.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />