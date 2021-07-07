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

![](https://screensaver01.zap-hosting.com/index.php/s/skPdcw2DDy5zo3H/preview)

Dort befindet sich die "**config_remoteadmin.txt**" welche du mit dem Online-Editor öffnen und bearbeiten kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/p9BwZkyzXeZ42nn/preview)

Dort werden die verschiedenen Serverrollen erstellt und zugewiesen.
Das "**SomeSteamId64**" welches direkt vor "**@steam: owner**" steht muss mit deiner Steam64ID ersetzt werden, welche du zuvor herausgefunden hast.

![](https://screensaver01.zap-hosting.com/index.php/s/oaTqEsxPaeD52SA/preview)

Sobald du deine Steam64ID eingetragen hast sollte es so aussehen (natürlich mit deiner eigenen Steam64ID):
![](https://screensaver01.zap-hosting.com/index.php/s/kNcH4qiT3sEtnoJ/preview)

Diesen Vorgang kannst du für jeden Spieler wiederholen welcher Rechte auf dem Server bekommen soll.
In unserem Beispiel setzen wir doe Rechte für drei benutzer, einer von ihnen bekommt die Rechte als "**owner**" und die anderen beiden bekommen "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/xLBKPqePiHCcZ7C/preview)

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
