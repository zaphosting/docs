---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Admin auf dem eigenen Server werden"
description: Informationen, wie du dich zum Admin auf deinem SCP-Server von ZAP-Hosting.com machen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

:::info
Seit den letzten SCP-Updates ist die Passwort-Anmeldung nicht mehr möglich. Mit der folgenden Anleitung kannst du die Rollen stattdessen mithilfe der Steam ID hinzufügen.
:::

## Konfiguration der Remote Admin Config

### Voraussetzungen

Zuerst benötigst du deine Steam64ID.
Diese kannst du mit folgendem Tool ermitteln: [SteamID Finder](https://steamid.io/lookup).
Die ID muss später in die entsprechende Konfigurationsdatei eingetragen werden.

Hier findest du ein Beispiel, wie du deine Steam64ID herausfindest, indem du den Link zu deinem Steam-Profil einträgst:

![](https://screensaver01.zap-hosting.com/index.php/s/aBWBbDkP7YX8LLi/preview)

## Admins hinzufügen

Nun musst du die Konfigurationsdatei öffnen und bearbeiten. Diese findest du links im Menü als "**Configs**", direkt unter dem Menüpunkt "**Einstellungen**".

![](https://screensaver01.zap-hosting.com/index.php/s/mYFWzHZHYswj969/preview)

Dort befindet sich die "**config_remoteadmin.txt**" welche du mit dem Online-Editor öffnen und bearbeiten kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/4KECerJ4tZZcmGS/preview)

Dort werden die verschiedenen Serverrollen erstellt und zugewiesen.
Das "**SomeSteamId64**" welches direkt vor "**@steam: owner**" steht, muss mit deiner Steam64ID ersetzt werden, welche du zuvor herausgefunden hast.

![](https://screensaver01.zap-hosting.com/index.php/s/PeCy9zBbjBMSzj3/preview)

Diesen Vorgang kannst du für jeden Spieler wiederholen, welcher Rechte auf dem Server bekommen soll.
In unserem Beispiel setzen wir doe Rechte für drei benutzer, einer von ihnen bekommt die Rechte als "**owner**" und die anderen beiden bekommen "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/MPf9ge32oLz6t6Q/preview)

## Mehr Rollen hinzufügen - Remotepasswort überschreiben

Wenn du mehrere Rollen hast und das Remotepasswort überschreiben möchtest, kannst du einfach die folgende Zeile in der folgenden Datei editieren:
"**config_remoteadmin.txt**

Dort findest du folgende Sektion: 

![](https://screensaver01.zap-hosting.com/index.php/s/5xxPAQ6Z8DHNpqe/preview)

Um mehr Rollen hinzufügen zu können, kannst du diese einfach mit einem Komma getrennt dort eintragen. Als Beispiel fügen wir admin und moderator hinzu, um das Passwort zu überschreiben:

![](https://screensaver01.zap-hosting.com/index.php/s/jEtyF3exTYHAWni/preview)

:::info
Die Adminkonsole im Spiel lässt sich jederzeit mit der Taste **M** öffnen. Nun kannst du deinen Server starten und die vergebenen Rechte im Spiel nutzen.
:::


## Abschluss

Glückwunsch, du hast erfolgreich die Administratorberechtigungen konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
