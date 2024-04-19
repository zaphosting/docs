---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Admin auf dem eigenen Server werden"
description: Informationen, wie du dich zum Admin auf deinem SCP-Server von ZAP-Hosting.com machen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
---

:::info
Seit den letzten SCP-Updates ist die Passwort-Anmeldung nicht mehr möglich. Mit der folgenden Anleitung kannst du die Rollen stattdessen mithilfe der Steam ID hinzufügen.
:::

## Konfiguration der Remote Admin Config

### Voraussetzungen

Zuerst benötigst du deine Steam64ID.
Diese kannst du mit folgendem Tool ermitteln: [SteamID Finder](https://steamid.io/lookup).
Die ID muss später in die entsprechende Konfigurationsdatei eingetragen werden.

Hier findest du ein Beispiel, wie du deine Steam64ID herausfindest, indem du den Link zu deinem Steam-Profil einträgst:

![image](https://user-images.githubusercontent.com/26007280/189888228-2dbc315d-9b48-499c-a765-de4bebeac6fa.png)

## Admins hinzufügen

Nun musst du die Konfigurationsdatei öffnen und bearbeiten. Diese findest du links im Menü als "**Configs**", direkt unter dem Menüpunkt "**Einstellungen**".

![image](https://user-images.githubusercontent.com/13604413/159181503-5c3ddda0-88e2-4bae-a2a0-a2160268ac0f.png)

Dort befindet sich die "**config_remoteadmin.txt**" welche du mit dem Online-Editor öffnen und bearbeiten kannst.

![image](https://user-images.githubusercontent.com/13604413/159181547-d354215d-2563-42ee-803e-673822364aed.png)

Dort werden die verschiedenen Serverrollen erstellt und zugewiesen.
Das "**SomeSteamId64**" welches direkt vor "**@steam: owner**" steht, muss mit deiner Steam64ID ersetzt werden, welche du zuvor herausgefunden hast.

![image](https://user-images.githubusercontent.com/13604413/159181591-fe0fb375-db67-45a6-8790-1a497e81c69b.png)

Diesen Vorgang kannst du für jeden Spieler wiederholen, welcher Rechte auf dem Server bekommen soll.
In unserem Beispiel setzen wir doe Rechte für drei benutzer, einer von ihnen bekommt die Rechte als "**owner**" und die anderen beiden bekommen "**admin**".

![image](https://user-images.githubusercontent.com/13604413/159181666-fd68aac0-2c42-470c-b0c2-b1448d67a2cd.png)

## Mehr Rollen hinzufügen - Remotepasswort überschreiben

Wenn du mehrere Rollen hast und das Remotepasswort überschreiben möchtest, kannst du einfach die folgende Zeile in der folgenden Datei editieren:
"**config_remoteadmin.txt**

Dort findest du folgende Sektion: 

![image](https://user-images.githubusercontent.com/26007280/189888266-1af83395-e867-4fde-9e4a-a442179bf704.png)

Um mehr Rollen hinzufügen zu können, kannst du diese einfach mit einem Komma getrennt dort eintragen. Als Beispiel fügen wir admin und moderator hinzu, um das Passwort zu überschreiben:

![image](https://user-images.githubusercontent.com/26007280/189888296-22f532af-44d4-4269-ba73-4a91686c5f66.png)

:::info
Hinweis: Die Adminkonsole im Spiel lässt sich jederzeit mit der Taste **M** öffnen. Nun kannst du deinen Server starten und die vergebenen Rechte im Spiel nutzen.
:::
