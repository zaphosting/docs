---
id: rust-connectrcon
title: "Rust: Verbindung via RCON zum Server herstellen"
description: Informationen, wie du dich via RCON mit deinem Rust-Server von ZAP-Hosting verbinden kannst, um deinen Server zu verwalten - ZAP-Hosting.com Dokumentation
sidebar_label: Verbindung via RCON
---

## Was ist RCON?

Bei RCON handelt es sich um ein Protokoll, mit welchem Befehle auf einem Server ausgeführt werden können, ohne dass ein direkter Zugriff auf die Serverkonsole erforderlich ist.

### WebRCON aktivieren

Bevor du via RCON verbinden kannst, musst du sicherstellen, dass WebRCON auf deinem Server aktiviert ist.
Du kannst WebRCON einfach links im Menü unter **Einstellungen** aktivieren.

![image](https://user-images.githubusercontent.com/26007280/189935075-d8410086-a638-4ae5-814a-c91e65abf812.png)

![image](https://user-images.githubusercontent.com/26007280/189935132-22df1a52-81c1-4edd-895d-723ace8fa1b9.png)

:::info
Nachdem du WebRCON aktiviert hast, musst du deinen Server einmal neu starten, damit die Einstellung aktiviert wird. 
:::

### Ein RCON Tool installieren

Um nun zu deinem Server via RCON verbinden zu können, benötigst du ein sogenanntes **RCON Tool**. Dabei handelt es sich um ein Programm, mit welchem du via RCON zu deinem Server verbinden kannst. 

Als Beispiel und als Empfehlung nutzen wir [RustAdmin](https://www.rustadmin.com/).

Diest kannst du direkt über die Website von **RustAdmin** installieren.
![image](https://user-images.githubusercontent.com/26007280/189935195-073a0878-1aa1-437a-8761-d1434d069469.png)

## Verbinden via RCON

Nachdem du WebAdmin geöffnet hast, klickst du auf **Server** und im Anschluss auf **Connect**.

:::info
Dein Server muss vollständig gestartet sein, um via RCON erreichbar zu sein. 
:::

![image](https://user-images.githubusercontent.com/26007280/189935408-315587b5-0f51-4728-8de5-b08de52e023e.png)

Dort wirst du jetzt auf die Konfigurationsseite geleitet, auf welcher du deine Serverinformationen angeben kannst.

![image](https://user-images.githubusercontent.com/26007280/189935448-6236075d-bcef-478e-9f9e-b481033cfcac.png)

:::info
ACHTUNG: Deinen RCON Port so wie RCON Passwort findest du links im Menü unter **Einstellungen**, dort wo du zuvor WebRCON aktiviert hast. 
:::

Nachdem du deine Daten korrekt eingetragen hast, kannst du die Konfiguration speichern.

![image](https://user-images.githubusercontent.com/26007280/189935483-81b3a158-e1ea-4a56-9719-2ccebdc45155.png)

Nun klickst du auf **Server** und dann auf **Connect**.

![image](https://user-images.githubusercontent.com/26007280/189935514-550db0b4-493c-41f6-ab5a-158dbc184b6b.png)

Wenn du alles richtig gemacht hast, leuchtet die Anzeige **Connected** nun grün am unteren Ende der Seite.

![image](https://user-images.githubusercontent.com/26007280/189935617-64849a03-c969-46a0-9765-58c73ca0c551.png)

Nun kannst du RCON für deinen Server nutzen. :) 
