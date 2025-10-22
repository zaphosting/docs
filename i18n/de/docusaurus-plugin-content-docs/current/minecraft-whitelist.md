---
id: minecraft-whitelist
title: "Minecraft: Whitelist aktivieren und bearbeiten"
description: "Entdecke, wie du deinen Minecraft Gameserver absicherst, indem du den Spielerzugang mit Whitelist-Funktionen verwaltest und dein Gameplay schützt → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die **Minecraft Whitelist** ist eine Option, um deinen Gameserver zu schützen, indem nur ausgewählte Spieler auf der Liste sich verbinden dürfen. Standardmäßig bietet Minecraft keine Server-Passwort-Option wie andere Spiele.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Wie du die WHITELIST auf deinem Minecraft Gameserver aktivierst" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Whitelist aktivieren



### Aktivierung (Config)

Um die Whitelist zu aktivieren, muss der Wert des Befehls in der **server.properties** Config auf **true** gesetzt werden. Ein Neustart des Servers ist notwendig, damit die Änderung wirksam wird.

```
white-list=true
```



### Aktivierung (Chat)

Alternativ kann die Whitelist-Option auch im Spiel oder über die Live-Konsole aktiviert werden:

```
/whitelist on			(Whitelist aktivieren)
/whitelist off			(Whitelist deaktivieren)
```



Um die Whitelist im Spiel zu aktivieren, sind Operator-Rechte erforderlich! Ansonsten kannst du das auch über die Live-Konsole (Interface) machen. Beachte, dass die Befehle dort ohne das **/**-Symbol eingegeben werden müssen.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Whitelist verwalten



### Spieler hinzufügen / entfernen



**Chat**

Du kannst Spieler mit folgenden Befehlen zur Whitelist hinzufügen oder entfernen:

```
/whitelist add SpielerName
/whitelist remove SpielerName
```



**white-list.json**

Falls die UUID des Spielers bekannt ist, kann der Spieler auch manuell über die **white-list.json** Datei hinzugefügt werden. Diese kannst du per FTP erreichen und bearbeiten. Eine Anleitung zum FTP-Zugang findest du hier: [Zugriff via FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler3"
  }
]
```



### Liste aktualisieren

Wenn du Spieler manuell hinzufügst, musst du die Whitelist im Spiel neu laden. Das geht auch per Befehl, um einen Server-Neustart zu vermeiden:

```
 /whitelist reload
```



### Liste anzeigen

Wenn du nicht jedes Mal die Whitelist-Datei per FTP öffnen willst, kannst du dir alle Spieler auf der Whitelist mit folgendem Befehl anzeigen lassen:

```
/whitelist list
```


<InlineVoucher />