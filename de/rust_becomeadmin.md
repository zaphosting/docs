---
id: rust_becomeadmin
title: Rust: Admin auf eigenem Server werden
description: Informationen, wie du dich zum Admin auf deinem Rust-Server von ZAP-Hosting machen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden
---

## 🖥️ Admin werden via RCON

Mithilfe eines RCON Tools kannst du auf deinem Server beliebige Befehle ausführen, auch Adminrechte können so vergeben werden.
Zuerst musst du [via RCON verbinden](rust_connectrcon.md).

Sobald du verbunden bist, navigiere in das Feld in welchem du Consolenbefehle ausführen kannst. In unserem Beispiel nutzen wir **RustAdmin**.

![](https://screensaver01.zap-hosting.com/index.php/s/ykaMNZRtaAmJQcs/preview)

Um dir Adminrechte zu geben, kannst du dort nun folgenden Befehl ausführen:
`ownerid Steam64ID`

> Bitte ersetze **Steam64ID** durch deine Steam64ID. Mit diesem Tool kannst du deine [Steam64ID herausfinden](https://steamid.io/)

Im Anschluss hast du direkt Adminrechte auf deinem Server. 

> Solltest du im Spiel online sein während du diesen Befehl ausführt, musst du den Server einmal verlassen und erneut betreten damit die Adminrechte aktiv werden.

Nun bist du Administrator. :) 

## ↕️ Adminrechte via FTP setzen

Ein weiterer Weg dir Adminrechte auf deinem Server zu geben ist via FTP.
Zuerst musst du auf deinen Server via [FTP verbinden](gameserver_ftpaccess.md).

Nachdem du dich via FTP verbunden hats navigierst du in folgendes Verzeichnis: 

`/g#####/rust/server/<your_server_save>/cfg`

In diesem Verzeichnis **erstellst** du eine **neue Datei** mit dem Namen **users.cfg**

In dieser Datei kannst du für jeden Admin einen Eintrag erstellen, dieser sollte so aussehen:

`<role> <Steam64ID> <reason/user>`

> Ersetze dort **Steam64ID** mit deiner Steam64ID.  Mit diesem Tool kannst du deine [Steam64ID herausfinden](https://steamid.io/)

Hier findest du ein Beispiel wie ein fertiger Eintrag aussehen kann:

```
ownerid 76561198114248380 "Hier kannst du zum Beispiel deinen Namen eintragen..."
moderatorid 76561198114248380 "Und hier den Namen des zweiten Administrators..."
```
> Nun musst du deinen Server einmal neu starten damit die Änderungen wirksam werden.

Nun bist du Administrator. :) 
