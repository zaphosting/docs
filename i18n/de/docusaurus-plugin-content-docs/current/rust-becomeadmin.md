---
id: rust-becomeadmin
title: "Rust: Werde Admin auf deinem eigenen Server"
description: "Entdecke, wie du Administratorrechte vergibst, um volle Kontrolle über deinen Server zu haben und dein Game effektiv zu managen → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du durchführen musst, um Administratorrechte für deinen Server zu vergeben, werden im Folgenden beschrieben.  
<InlineVoucher />

## Admin werden mit RCON

Mit RCON kannst du direkt einen Befehl ausführen, um dich selbst zum Admin zu machen.  
Zuerst musst du dich [per RCON verbinden](rust-connectrcon.md).

Sobald du verbunden bist, navigiere zu der Stelle, an der du Konsolenbefehle eingeben kannst. In unserem Beispiel nutzen wir RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Hier gibst du den entsprechenden Befehl ein:  
`ownerid Steam64ID`

:::info
Ersetze **Steam64ID** bitte durch deine echte Steam64ID. Deine Steam64ID findest du mit diesem [Tool](https://steamid.io/)
:::

Danach wirst du direkt zum Admin gemacht.

:::info
Wenn du währenddessen im Spiel bist, solltest du dich einfach neu auf dem Server einloggen.
:::

Und schon bist du Administrator! :)

## Admin werden per FTP

Alternativ kannst du dir die Adminrechte auch direkt über FTP vergeben.  
Zuerst musst du dich mit [FTP-Zugang verbinden](gameserver-ftpaccess.md).

Nachdem du erfolgreich verbunden bist, navigiere zu folgendem Verzeichnis:

`/g#####/rust/server/<dein_server_save>/cfg`

In diesem Ordner musst du eine **neue Datei** erstellen. Diese nennst du **users.cfg**

In dieser Datei fügst du deine Einträge im folgenden Format hinzu:

`<role> <Steam64ID> <reason/user>`

:::info
Ersetze **Steam64ID** bitte durch deine echte Steam64ID. Deine Steam64ID findest du mit diesem [Tool](https://steamid.io/)
:::

Ein Beispiel-Eintrag sieht so aus:

```
ownerid 76561198114248380 "Du kannst hier zur Referenz alles reinschreiben"
moderatorid 76561198114248380 "Test-Person"
```
:::info
Du musst deinen Server neu starten, damit die Änderungen wirksam werden.
:::

## Abschluss

Glückwunsch, du hast die Administratorrechte erfolgreich eingerichtet. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />