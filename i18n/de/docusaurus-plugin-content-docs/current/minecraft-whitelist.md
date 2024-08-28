---
id: minecraft-whitelist
title: "Minecraft: Server Whitelist aktivieren und bearbeiten"
description: Informationen, wie du eine Whitelist für deinen Minecraft-Server von ZAP-Hosting aktivieren und bearbeiten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Whitelist
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die **Minecraft Whitelist** ist eine Möglichkeit, um seinen Server zu schützen, indem nur ausgewählte Spieler, die auf der Liste stehen, die Erlaubnis haben, sich mit dem Server zu verbinden. Denn Minecraft bietet standardmäßig keine Server Passwort Option, wie manch andere Spiele.

![image](https://screensaver01.zap-hosting.com/index.php/s/7PdkCFcZk3o8Wr8/preview)

<YouTube videoId="nyor26XxwLY" title="How to enable WHITELIST on your Minecraft Server" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

<InlineVoucher />

## Whitelist aktivieren

### Aktivierung (Config)

Um die Whitelist zu aktivieren, muss der Wert des Befehle in der **server.properties** Config auf **true** gesetzt werden. Ein Neustart des Servers ist im Anschluss zwingend notwendig, damit die Änderung wirksam wird. 

```
white-list=true
```

### Aktivierung (Chat)

Alternativ kann die Whitelist Funktion auch im Spiel oder per Live Konsole aktiviert werden:

```
/whitelist on			(Aktiviert die Whitelist Funktion)
/whitelist off			(Deaktiviert die Whitelist Funktion)
```

Um die Whitelist Funktion über das Spiel zu aktivieren, sind Operator Rechte zwingend notwendig! Alternativ kann dies ansonsten auch über die Live Konsole (Webinterface) gemacht werden. Allerdings ist dort zu beachten, dass die Befehle dort ohne das **/** Symbole ausgeführt werden müssen.

![image](https://screensaver01.zap-hosting.com/index.php/s/KJ2pmgKs6ABrAem/preview)

## Whitelist verwalten

### Spieler hinzufügen / entfernen

**Chat**

Mit den folgenden Befehlen können Spieler zur Whitelist hinzugefügt oder entfernt werden:

```
/whitelist add SpielerName
/whitelist remove SpielerName
```

**white-list.json**

Wenn die UUID des Spielers bekannt ist, dann kann der Spieler auch manuell über die **white-list.json** hinzugefügt werden. Diese kannst du per FTP-Verbindung aufrufen und bearbeiten. Eine Anleitung zum Verbinden per FTP findest du hier: [FTP Dateizugriff](gameserver-ftpaccess.md)

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

Wenn die Spieler manuell hinzugefügt werden, dann muss die Whitelist im Spiel neu geladen werden. Um den Server deshalb nicht zwingend neu starten zu müssen, ist dies auch per Befehl möglich:

```
 /whitelist reload
```

### Ansicht der Liste

Um nicht jedes Mal die Whitelist Datei per FTP öffnen zu müssen, ist es auch möglich alle Spieler, die auf der Whitelist stehen über folgenden Befehl anzuzeigen: 

```
/whitelist list
```