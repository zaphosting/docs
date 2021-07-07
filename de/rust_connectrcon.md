---
id: rust_connectrcon
title: Rust: Verbindung via RCON zum Server herstellen
description: Informationen, wie du dich via RCON mit deinem Rust-Server von ZAP-Hosting verbinden kannst, um deinen Server zu verwalten - ZAP-Hosting.com Dokumentationen
sidebar_label: Verbindung via RCON
---

## ❓ Was ist RCON?

Bei RCON handelt es sich um ein Protokoll mit welchem Befehle auf einem Server ausgeführt werden können ohne dass ein direkter Zugriff auf die Serverkonsole erforderlich ist.

### WebRCON aktivieren

Bevor du via RCON verbinden kannst musst du sicherstellen dass WebRCON auf deinem Server aktiviert ist.
Du kannst WebRCON einfach links im Menü unter **Einstellungen** aktivieren.

![](https://screensaver01.zap-hosting.com/index.php/s/QN5nMcDqdbMkw6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/DkpWponrmqBnR7d/preview)

> Nachdem du WebRCON aktiviert hast musst du deinen Server einmal neu starten damit die Einstellung aktiviert wird. 

### Ein RCON Tool installieren

Um nun zu deinem Server via RCON verbinden zu können benötigst du ein sogenanntes **RCON Tool**. Dabei handelt es sich um ein Programm mit welchem du via RCON zu deinem Server verbinden kannst. 

Als Beispiel und als Empfehlung nutzen wir [RustAdmin](https://www.rustadmin.com/).

Diest kannst du direkt über die Website von **RustAdmin** installieren.
![](https://screensaver01.zap-hosting.com/index.php/s/f39GYt4L3o9aSd6/preview)

## 🖥️ Verbinden via RCON

Nachdem du WebAdmin geöffnet hast klickst du auf **Server** und im Anschluss auf **Connect**.

> Dein Server muss vollständig gestartet sein um via RCON erreichbar zu sein. 

![](https://screensaver01.zap-hosting.com/index.php/s/a6m6qDkCCGsAjpF/preview)

Dort wirst du nun auf die Konfigurationsseite geleitet auf welcher du deine Serverinformationen angeben kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/bB8oRFScCrSpDbz/preview)

> ACHTUNG: Deinen RCON Port so wie RCON Passwort findest du links im Menü unter **Einstellungen**, dort wo du zuvor WebRCON aktiviert hast. 

Nachdem du deine Daten korrekt eingetragen hast kannst du die Konfiguration speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/EYCE2oJpo5iWMFN/preview)

Nun klickst du auf **Server** und dann auf **Connect**.

![](https://screensaver01.zap-hosting.com/index.php/s/YMsPL5sqGZpW5N5/preview)

Wenn du alles richtig gemacht hast leuchtet die Anzeige **Connected** nun grün am unteren Ende der Seite.

![](https://screensaver01.zap-hosting.com/index.php/s/Qj7HfjWLb4tYofB/preview)

Nun kannst du RCON für deinen Server nutzen. :) 
