---
id: vrising-becomeadmin
title: V Rising: Admin werden
description: Informationen, wie du Admin auf deinem V Rising Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden
---

Du möchtest mehr Kontrolle über deinen Server erhalten? Als Admin hast du die Möglichkeit noch mehr individuelle Anpassungen vorzunehmen oder deinen Server im Spiel zu verwalten. Im Folgenden wird dir erklärt, wie du dich als Admin registrieren und die Berechtigungen im Spiel hinzufügst kannst. 


### Berechtigungen hinzufügen

Die Verwaltung der Admin Berechtigungen erfolgt über die **adminlist.txt**. Diese lässt sich im Webinterface unter Configs verwalten. Für das Hinzufügen eines Admins wird die SteamID64 vom Spieler benötigt. Diese erhältst du, in dem du dein Steam Profil aufrufst und dort dann an einer beliebigen Stelle einen Rechtsklick machst. Dort hast du dann die Möglichkeit, die Seiten URL zu kopieren. Im Anschluss kann die URL auf einer der folgenden Webseiten angeben werden: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![image](https://user-images.githubusercontent.com/26007280/190595734-97691fb8-e3ce-426f-8fea-f829dae4aa58.png)

Dort angelangt gibst du beim Feld deine Steam Profil URL an, welche du kopiert hast und erhältst dadurch dann deine SteamID64. Diese wird dann in der **adminlist.txt** Config-Datei eingetragen. Gehe dazu im Webinterface in deine Gameserver Verwaltung in die Kategorie Configs und rufe die adminlist.txt Config-Datei auf. 

![image](https://user-images.githubusercontent.com/26007280/190595891-402ca158-0fab-4849-abdc-1d9cef91dcc3.png)

> Solltest du mehreren Spielern Admin Berechtigungen zuweisen wollen, dann müssen die SteamIDs jeweils in einer eigenen Zeile eingetragen werden. 



### Berechtigungen aktivieren

Für die Zuweisung der Admin Berechtigungen im Spiel musst du nun noch die Konsole bei deinem Spiel aktivieren. Verbinde dich dafür mit deinem Server und gehe im Anschluss in die Einstellungen. In den Einstellungen muss dann die Option **Console Enabled** aktiviert werden. Die Konsole lässt sich standardmäßig mit der Gravis Taste auf der Tastatur öffnen. In der Konsole können die Admin-Berechtigungen dann mit dem `adminauth` Befehl aktiviert werden. 

![image](https://user-images.githubusercontent.com/26007280/190595836-df76024d-cce5-491b-ae84-d1142886e149.png)


### Admin Befehlsliste

Hier findest du eine kurze Übersicht über die gängigsten Admin-Befehle, welche du auf deinem Server ausführen kannst. 

|                          |                                                              |
| ------------------------ | ------------------------------------------------------------ |
| adminauth                | Zuweisung von Administrationsberechtigungen                  |
| admindeauth              | Aufhebung von Administrationsberechtigungen                  |
| banuser [name/IP/userID] | Einen bestimmten Spieler anhand des Namens, der IP oder der Benutzer-ID sperren |
| banned                   | Zeigt eine Liste aller gesperrten Spieler an                 |
| bancharacter             | Wird verwendet, um ein bestimmtes Character zu verbieten     |
| give [name]              | Liefert dir einen bestimmten Gegenstand im Spiel.            |
| giveset                  | Ermöglicht die Erkundung verschiedener Rüstungs- und Waffensets |
| kick [name/IP/userID]    | Einen bestimmten Spieler anhand des Namens, der IP oder der Benutzer-ID kicken |
| unban [name/IP/userID]   | Einen bestimmten Spieler anhand des Namens, der IP oder der Benutzer-ID entsperren |
