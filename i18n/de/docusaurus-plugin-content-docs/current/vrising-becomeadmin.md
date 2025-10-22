---
id: vrising-becomeadmin
title: "V Rising: Admin werden"
description: "Entdecke, wie du die vollen Administratorrechte für deinen Gameserver effizient verwaltest und vergibst → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Administrator kannst du alle verfügbaren Optionen und Funktionen, die das Spiel direkt bietet, nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

### Rechte hinzufügen

Die Verwaltung der Admin-Rechte erfolgt über die **adminlist.txt** Konfigurationsdatei. Du findest diese Datei im Webinterface unter dem Menüpunkt Configs. Um einen Admin hinzuzufügen, benötigst du die SteamID64 des Spielers. Diese bekommst du, indem du dein Steam-Profil öffnest und mit einem Rechtsklick irgendwo auf der Seite das Kontextmenü öffnest. Dort kannst du die URL der Seite kopieren. Die URL kannst du dann auf einer der folgenden Webseiten eingeben: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Gib dort deine kopierte Steam-Profil-URL in das Feld ein, und du erhältst deine SteamID64. Füge die SteamID64 in die **adminlist.txt** Konfigurationsdatei ein. Gehe dazu im Webinterface deiner Gameserver-Verwaltung in den Bereich Configs und öffne die adminlist.txt.

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
Wenn du mehreren Spielern Admin-Rechte vergeben möchtest, muss jede SteamID in einer eigenen Zeile stehen.
:::

### Rechte aktivieren

Bevor du die Admin-Rechte im Spiel nutzen kannst, musst du die Konsole für dein Spiel aktivieren. Verbinde dich mit deinem Server und gehe in die Einstellungen. Dort musst du die Option **Console Enabled** aktivieren. Die Konsole kannst du standardmäßig mit der Gravis-Taste (`^`) auf der Tastatur öffnen. Die Admin-Rechte kannst du dann in der Konsole mit dem Befehl `adminauth` aktivieren.

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)

### Admin-Befehlsliste

Hier eine kurze Übersicht der gängigsten Admin-Befehle, die du auf deinem Server ausführen kannst.

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Vergabe von Admin-Rechten                               |
| admindeauth              | Entzug von Admin-Rechten                                |
| banuser [Name/IP/UserID] | Bannt einen bestimmten Spieler per Name, IP oder UserID |
| banned                   | Zeigt eine Liste aller gebannten Nutzer                 |
| bancharacter             | Bannt einen bestimmten Charakter                         |
| give [Name]              | Gibt dir einen bestimmten Gegenstand im Spiel           |
| giveset                  | Ermöglicht das Ausprobieren verschiedener Rüstungs- und Waffensets |
| kick [Name/IP/UserID]    | Kickt einen bestimmten Spieler per Name, IP oder UserID |
| unban [Name/IP/UserID]   | Entbannt einen bestimmten Spieler per Name, IP oder UserID |

## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich eingerichtet. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />