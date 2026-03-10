---
id: csgo-becomeadmin
title: "CS:GO: Admin werden"
description: "Entdecke, wie du Administratorrechte für volle Serverkontrolle in CS:GO mit Sourcemod vergibst und verwaltest → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen von Sourcemod direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server brauchst, werden im Folgenden beschrieben.  
<InlineVoucher />



## Vorbereitung

Um Administratorrechte nutzen zu können, muss zunächst eine Grundlage geschaffen werden. Standardmäßig bietet CS:GO keine umfassende Admin-Verwaltung. Es gibt jedoch Frameworks dafür, wie Sourcemod. Das Framework muss zur Konfiguration installiert sein. Falls du es noch nicht installiert hast, schau dir gerne unsere passende Plugin-Installationsanleitung für CS:GO an.



## Admins definieren

Admins kannst du über die Konfigurationsdatei `admins_simple.ini` oder `admins.cfg` hinzufügen, die du unter `../csgo/cstrike/addons/sourcemod/configs/` findest. Für einfache Setups reicht meist `admins_simple.ini` aus. Dort kannst du Admins per SteamID definieren und direkt Berechtigungsflags vergeben.

```ini title="admins_simple.ini (Beispiel)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

Im Beispiel erhält der erste Admin volle Rechte durch das Flag `z`, während der zweite Admin nur ausgewählte Rechte bekommt.

Für komplexere Konfigurationen wie Gruppen, Immunität oder Passwörter solltest du stattdessen `admins.cfg` verwenden.

```
Admins
{
  "User 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "User 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## Admin-Gruppen definieren

Du kannst auch Admin-Gruppen anlegen. So kannst du die Rechte eines Admins über seine Gruppe steuern. Dadurch musst du die Rechte nicht für jeden Admin einzeln konfigurieren. Die Gruppen werden in der Datei `admin_groups.cfg` definiert, die du unter `../csgo/cstrike/addons/sourcemod/configs/` findest.

```
Groups
{
  "Full Admin"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderator"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

Anschließend kannst du einem Admin in der `admins.cfg` eine Gruppe zuweisen:

```
Admins
{
  "User 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Full Admin"
  }
}
```

## Admin-Immunität definieren

Admins oder Gruppen kann ein Immunitätswert zugewiesen werden. Wenn ein Admin mit niedrigerem Immunitätswert versucht, einen Admin mit höherem Immunitätswert zu beeinflussen, schlägt der Befehl fehl. Du kannst den Immunitätswert hinzufügen, indem du den Schlüssel `immunity` bei jedem Admin in `admins.cfg` oder direkt in `admin_groups.cfg` einfügst.

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

Ein höherer Immunitätswert bedeutet einen stärkeren Schutz vor administrativen Aktionen anderer Admins mit niedrigerer Immunität.

## Fazit

Glückwunsch, du hast erfolgreich die Administratorrechte für deinen CS:GO-Server mit Sourcemod konfiguriert. Bei weiteren Fragen oder Supportbedarf steht dir unser Support-Team täglich zur Verfügung – melde dich einfach! 🙂

<InlineVoucher />