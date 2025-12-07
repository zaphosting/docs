---
id: minecraft-whitelist
title: "Minecraft: Server Whitelist aktivieren und bearbeiten"
description: "Lerne, wie du deinen Minecraft-Server mit der Whitelist-Funktion absicherst und den Spielerzugang kontrollierst → Jetzt mehr erfahren"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die **Minecraft Whitelist** ist eine coole Option, um deinen Server zu schützen, indem nur ausgewählte Spieler auf der Liste sich verbinden dürfen. Standardmäßig gibt’s bei Minecraft keinen Server-Passwort-Check wie bei anderen Games.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Wie du die WHITELIST auf deinem Minecraft Server aktivierst" description="Lernst du besser, wenn du’s live siehst? Kein Ding! Unser Video zeigt dir Schritt für Schritt, wie’s geht. Perfekt, wenn’s schnell gehen soll oder du einfach lieber visuell lernst!"/>

<InlineVoucher />

## Whitelist aktivieren



### Aktivierung (Config)

Um die Whitelist zu aktivieren, muss der Wert im **server.properties** Config auf **true** gesetzt werden. Ein Server-Neustart ist nötig, damit die Änderung greift.

```
white-list=true
```



### Aktivierung (Chat)

Alternativ kannst du die Whitelist auch direkt im Spiel oder über die Live-Konsole aktivieren:

```
/whitelist on			(Whitelist einschalten)
/whitelist off			(Whitelist ausschalten)
```



Um die Whitelist im Spiel zu aktivieren, brauchst du Operator-Rechte! Ansonsten geht’s auch easy über die Live-Konsole (Interface). Achtung: Die Befehle dort ohne das **/** ausführen.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Whitelist verwalten



### Spieler hinzufügen / entfernen



**Chat**

Spieler kannst du mit diesen Befehlen auf die Whitelist setzen oder wieder runternehmen:

```
/whitelist add SpielerName
/whitelist remove SpielerName
```



**white-list.json**

Wenn du die UUID vom Spieler kennst, kannst du ihn auch manuell in der **white-list.json** Datei hinzufügen. Die erreichst und bearbeitest du per FTP. Wie das geht, findest du hier: [Zugriff via FTP](gameserver-ftpaccess.md)

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

Wenn du Spieler manuell hinzufügst, musst du die Whitelist im Spiel neu laden. Das geht auch per Befehl, so musst du den Server nicht neu starten:

```
 /whitelist reload
```



### Liste anzeigen

Wenn du nicht jedes Mal die Whitelist-Datei per FTP öffnen willst, kannst du dir alle Spieler auf der Whitelist auch mit diesem Befehl anzeigen lassen:

```
/whitelist list
```


<InlineVoucher />