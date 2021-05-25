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

![](https://screensaver01.zap-hosting.com/index.php/s/yPeWAQAGAiHRSKM/preview)

## 📃 Admin Konfig konfigurieren

Die "**adminconfig.yaml**" welche bearbeitet werden muss befindet sich in dem "**Saves**" Verzeichnis.
Um dieses Verzeichnis zu öffnen, muss die Anleitung für die [FTP-Verbindung](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess) befolgt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/Eqc2dmTPPZbycEf/preview)

Standardmäßig stehen dort folgende Werte vorgeschrieben drin:

![](https://screensaver01.zap-hosting.com/index.php/s/ppYsaXd4emxbHAM/preview)

Die vorher rausgesuchte Steam64ID muss dort nun hinter "**Id:**" geschrieben werden.

![](https://screensaver01.zap-hosting.com/index.php/s/eN9yrgMYpgM9Wtf/preview)

Mit "**Permission**" wird der Rang bestimmt, welcher dem User gegeben werden soll.
Die Ränge werden wie folgt vergeben:

Permission | Rang
-----|-------
3 | Gamemaster
6 | Moderator
9 | Admin
