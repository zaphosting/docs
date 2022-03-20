---
id: scp_becomeadmin
title: SCP: Secret Laboratory: Admin auf dem eigenen Server werden
description: Informationen, wie du dich zum Admin auf deinem SCP-Server von ZAP-Hosting.com machen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Admin werden
---

> HINWEIS: Seit den letzten SCP-Updates ist die Passwort-Anmeldung nicht mehr möglich. Mit der folgenden Anleitung kannst du die Rollen stattdessen mithilfe der Steam ID hinzufügen.

##  📃 Konfiguration der Remote Admin Config

### Voraussetzungen

Zuerst benötigst du deine Steam64ID.
Diese kannst du mit folgendem Tool ermitteln: [SteamID Finder](https://steamid.io/lookup).
Die ID muss später in die entsprechende Konfigurationsdatei eingetragen werden.

Hier findest du ein Beispiel wie du deine Steam64ID herausfindest indem du den Link zu deinem Steam-Profil einträgst:

![](https://screensaver01.zap-hosting.com/index.php/s/e3RmtQ4MPXreT4a/preview)

## ➕ Admins hinzufügen

Nun musst du die Konfiguratinsdatei öffnen une bearbeiten.
Diese findest du links im Menü als "**Configs**", direkt unter dem Menüpunkt "**Einstellungen**".

![image](https://user-images.githubusercontent.com/13604413/159181503-5c3ddda0-88e2-4bae-a2a0-a2160268ac0f.png)

Dort befindet sich die "**config_remoteadmin.txt**" welche du mit dem Online-Editor öffnen und bearbeiten kannst.

![image](https://user-images.githubusercontent.com/13604413/159181547-d354215d-2563-42ee-803e-673822364aed.png)

Dort werden die verschiedenen Serverrollen erstellt und zugewiesen.
Das "**SomeSteamId64**" welches direkt vor "**@steam: owner**" steht muss mit deiner Steam64ID ersetzt werden, welche du zuvor herausgefunden hast.

![image](https://user-images.githubusercontent.com/13604413/159181591-fe0fb375-db67-45a6-8790-1a497e81c69b.png)

Diesen Vorgang kannst du für jeden Spieler wiederholen welcher Rechte auf dem Server bekommen soll.
In unserem Beispiel setzen wir doe Rechte für drei benutzer, einer von ihnen bekommt die Rechte als "**owner**" und die anderen beiden bekommen "**admin**".

![image](https://user-images.githubusercontent.com/13604413/159181666-fd68aac0-2c42-470c-b0c2-b1448d67a2cd.png)

## 🕴️ Mehr Rollen hinzufügen - Remotepasswort überschreiben

Wenn du mehrere Rollen hast und das Remotepasswort überschreiben möchtest, kannst du einfach die folgende Zeile in der folgenden Datei editieren:
"**config_remoteadmin.txt**

Dort findest du folgende Sektion: 

![](https://screensaver01.zap-hosting.com/index.php/s/7otKf2fwcPRZzwL/preview)

Um mehr Rollen hinzufügen zu können kannst du diese einfach mit einem Komma getrennt dort eintragen.
Als Beispiel fügen wir admin und moderator hinzu um das Passwort zu überschreiben:

![](https://screensaver01.zap-hosting.com/index.php/s/pLpMRiipT5J3btk/preview)

> Hint: Die Adminkonsole im Spiel lässt sich jederzeit mit der Taste **M** öffnen.

> Nun kannst du deinen Server starten und die vergebenen Rechte im Spiel nutzen.
