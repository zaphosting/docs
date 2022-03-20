---
id: fivem_txadmin_features
title: txAdmin Interface
sidebar_label: txAdmin Interface
---

## Dashboard

Im Dashboard von txAdmin können wir einsehen, wie viele auf dem Server sind und wie performant der Server läuft, hier können wir ebenfalls den Server Starten oder Stoppen, Announcements auf dem Server anzeigen lassen oder alle Spieler kicken:

![image](https://user-images.githubusercontent.com/13604413/159169522-fd692c95-1a15-486b-a959-99fa58bea7ce.png)

## Rechte Sidebar

In der Rechten Sidebar haben wir eine Liste von Spielern, welche Aktuell auf dem Server ist, um einen Spieler zu verwalten kann einfach auf den Namen geklickt werden.


Hier können wir nun einige Infos des Spielers einsehen, z. B. wie lange dieser schon auf dem Server war, unter IDs können wir ebenfalls die Identifier des Spielers einsehen.
Unten haben wir optionen um dem Spieler eine DM zu senden, Ingame wird diese dann im Chat angezeigt.

Warnungen werden als Vollbild-Notification in FiveM angezeigt

Ebenfalls gibt es eine "Ban" Option, womit man den Spieler direkt vom Server bannen kann.


## Players

Das Players Interface zeigt an, welche Spieler auf dem Server sind, hier können diese Spieler ebenfalls verwaltet werden:

![image](https://user-images.githubusercontent.com/13604413/159169590-7b91178c-505e-4a33-9eca-a47897b95b69.png)

Hier können ebenfalls bestimmte Identifier direkt gebannt werden, falls du die Whitelist auf dem Server aktiv hast, kannst du diese hier ebenfalls verwalten.

## Livekonsole

In der Livekonsole können Commands in der Serverkonsole eingegeben werden und die Logs des FiveM Servers angezeigt werden:

![image](https://user-images.githubusercontent.com/13604413/159169620-7b13ee9e-8db8-409c-970f-1f5775e49a6d.png)

Von hier aus kann ebenfalls der Server neu gestartet werden.

## Resources

Hier können alle Resourcen, welche sich auf dem Server befinden, verwaltet werden, falls eine Resource neu gestartet werden muss, kann das Ganze direkt von hier aus gemacht werden:

![image](https://user-images.githubusercontent.com/13604413/159169631-4445e0c8-d90f-4247-bc85-e967d8538ad4.png)

## Server Log

Das Server Log ist das txAdmin Log, hier werden einige Infos von txAdmin angezeigt, falls die Resource es unterstützt, werden hier auch Logs von bestimmten Resourcen angezeigt.

![image](https://user-images.githubusercontent.com/13604413/159169641-23e3b19e-f5f2-4dbf-8ca3-19de39510c0f.png)

## Cfg Editor

Im Cfg Editor kann deine server.cfg konfiguriert werden, das ganze funktioniert genauso wie der Config-Editor im ZAP-Hosting Interface.

![image](https://user-images.githubusercontent.com/13604413/159169655-907a4b05-0d58-4c27-a419-40805662d380.png)

## Diagnostics

Die Diagnostics zeigen an, wie gut der FiveM Server läuft, und zeigt mögliche Probleme mit txAdmin oder dem FiveM Server an:

![image](https://user-images.githubusercontent.com/13604413/159169661-da828f3a-fd2d-4cfc-81a4-27fb9971926a.png)

## Admin Manager

Im Admin Manager können neue User zum txAdmin Interface hinzugefügt werden, diese kannst du ganz einfach per Username/Passwort hinzufügen, du kannst aber auch die Discord ID oder den FiveM Forum Account linken.

![image](https://user-images.githubusercontent.com/13604413/159169682-2c6a3659-7ddc-45f7-a364-c9bb66ed1c82.png)

### Neue Admins anlegen

Um neue Admins anzulegen, klicken wir rechts oben auf den grünen "Add" Button, hier können wir nun die Infos des Accounts einfügen:

![image](https://user-images.githubusercontent.com/13604413/159169687-fca2cad8-d6c8-476c-8eaf-1195acd65a7e.png)

Hier können wir ebenfalls angeben, welche Funktionen der Account zur Verfügung haben sollte, wenn es z. B. nur ein Account zur Moderierung des Servers sein soll, können wir z. B. nur die Players optionen aktivieren und alles andere deaktiviert lassen.


Nun bekommen wir ein temporäres Passwort, dieses muss beim Anmelden dieses Nutzers angegeben werden, danach kann man das Passwort in txAdmin direkt ändern:

![image](https://user-images.githubusercontent.com/13604413/159169698-c6e3e457-90e2-4640-8414-581a478ed8dc.png)

Fertig! Nun wurde der neue Nutzer angelegt, in Zukunft kann dieser auch hier wieder verändert oder gelöscht werden.

## txAdmin Log

Im txAdmin Log können wir einsehen, was in letzter Zeit im txAdmin Interface gemacht wurde, damit können wir z. B. prüfen, was erstellte Nutzer im Interface genau machen:

![image](https://user-images.githubusercontent.com/13604413/159169722-5e6275e4-1e89-47d5-93dd-fcc8b399c8e5.png)

## Settings

In den Settings können mehrere Einstellungen zu txAdmin und dem FiveM Server vorgenommen werden, diese sind in mehreren Kategorien eingeteilt.

Hier können ebenfalls Backups der Datenbank angelegt werden, Bans aus anderen Resourcen importiert werden oder der FiveM Server zurückgesetzt werden.
![image](https://user-images.githubusercontent.com/13604413/159169739-9f8533d7-59e6-4c8e-bc3a-1632f69c0c78.png)


### FXServer

Hier können wir den Server-Data Ordnerpfad ändern, falls wir einen anderen server-data Ordner hochladen, die server.cfg kann ebenfalls geändert werden.

![image](https://user-images.githubusercontent.com/13604413/159169756-f5917576-13a2-40ae-a0ef-bd1812da6f4e.png)

Falls eigene Startparameter hinzugefügt werden sollen, kann dies hier auch getan werden, dies ist nützlich, um z. B. bestimmte Builds zu Forcen oder mehrere cfg Files auszuführen.

Onesync kann hier ebenfalls aktiviert oder deaktiviert werden.

Falls du txAdmin öfters Neustartest, kannst du hier einstellen, ob txAdmin automatisch den FiveM Server wieder starten soll, das Ganze ist standardmäßig aktiviert.

Die "Quiet" Option stellt um, ob Nachrichten in der FiveM Konsole in der Livekonsole des Servers angezeigt werden, diese Option sollte am besten deaktiviert bleiben.


### Restarter

Im Restarter können wir geplante Restarts für den Server einstellen, hier können wir bestimmte Zeiten einfügen:

![image](https://user-images.githubusercontent.com/13604413/159169774-b7171fb6-ac1c-4cb1-a4fe-5ad1e448ee1b.png)

Ebenfalls können wir hier einstellen, wie oft eine Warnung im Chat kommen soll, im "Restart Warnings" Parameter werden diese Zeiträume als Minuten angegeben.


### Player Manager

Der Player Manager hat einige Features zur Moderierung des Servers, unter anderem können wir hier das Ban Feature und die Whitelist aktivieren:

![image](https://user-images.githubusercontent.com/13604413/159169779-682fa426-907f-46a1-9531-ddef47d24c98.png)

Falls die Whitelist aktiviert ist, können wir hier auch angeben, welche Nachricht beim Verbinden kommen soll, falls ein Spieler noch nicht whitelisted wurde.

Die Option "Wipe Pending Whitelist On txAdmin Start" bestimmt, ob die Whitelisting Anfragen, welche beim Verbinden erstellt werden, beim txAdmin Neustart gelöscht werden sollen, falls die Whitelisting anfragen über mehrere Tage bearbeitet werden, sollte diese Option am besten deaktiviert werden.


### Discord

In dem letzten Menü der Settings können wir einen Discord Bot einstellen, welcher Infos zu txAdmin in einem Channel postet, hierzu muss der Discord Bot Token und die Channel ID, in welchem diese Infos gepostet werden sollen, eingetragen werden.

![image](https://user-images.githubusercontent.com/13604413/159169784-4ef64bbb-ee96-4f42-9cb0-3105323ec334.png)
