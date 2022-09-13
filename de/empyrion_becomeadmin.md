---
id: empyrion_becomeadmin
title: Empyrion Server: Admin werden
description: Informationen, wie du Admin auf deinem Empyrion-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden
---

## 🗝️ Steam64ID lokalisieren

Zuerst müsste die Steam64ID lokalisiert werden.
Dafür kann diese Seite genutzt werden: [SteamID-Lookup](https://steamid.io/lookup).
Die ID wird später in die Konfigurationsdatei eingetragen.

Hier ist ein Beispiel zu sehen, wie die Steam64ID lokalisiert wird.

![image](https://user-images.githubusercontent.com/13604413/159184139-e07456a3-965e-4e66-9aed-11a3a1cc9f76.png)

## 📃 Admin Konfig konfigurieren

Die "**adminconfig.yaml**" welche bearbeitet werden muss befindet sich in dem "**Saves**" Verzeichnis.
Um dieses Verzeichnis zu öffnen, muss die Anleitung für die [FTP-Verbindung](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess) befolgt werden.

![image](https://user-images.githubusercontent.com/26007280/189930662-f57fd04f-449b-41c8-80e7-ac6562c00380.png)

Standardmäßig stehen dort folgende Werte vorgeschrieben drin:

![image](https://user-images.githubusercontent.com/26007280/189930696-a284351a-ac4d-42dd-9853-5b931a2df4d9.png)

Die vorher rausgesuchte Steam64ID muss dort nun hinter "**Id:**" geschrieben werden.

![image](https://user-images.githubusercontent.com/26007280/189930734-9837ca13-4b19-4eeb-9156-09b6ca62030a.png)

Mit "**Permission**" wird der Rang bestimmt, welcher dem User gegeben werden soll.
Die Ränge werden wie folgt vergeben:

Permission | Rang
-----|-------
3 | Gamemaster
6 | Moderator
9 | Admin
