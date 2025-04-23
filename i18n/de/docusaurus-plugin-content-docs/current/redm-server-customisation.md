---
id: redm-server-customisation
title: "RedM: Customise server details"
description: Information on how to customise server details displayed in the server list for RedM servers - ZAP-Hosting.com 
sidebar_label: Customise Server Details
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du möchtest deinen Server so anpassen, dass er benutzerdefinierte Informationen in der Serverliste anzeigt? Das ist ganz einfach möglich! In dieser Anleitung erfährst du, wie du eine Reihe von verschiedenen Anpassungen vornehmen kannst, um deinen Server in der Serverliste hervorzuheben!



<InlineVoucher />



## Benutzerdefinierter Servername

### Farbcodes

Es gibt eine Reihe von Farben, die du zu deinem Servernamen hinzufügen kannst. Diese können durch die Verwendung eines Präfixes angegeben werden, wenn du die Farbe ändern möchtest. Die Liste der verfügbaren Farben findest du in der untenstehenden Tabelle.

:::info
Um Farben in deinem Servernamen verwenden zu können, musst du ein gültiges [RedM Subscription](https://portal.cfx.re/subscriptions) haben, das den Vorteil beinhaltet. Wenn das der Fall ist und es trotzdem nicht funktioniert, vergewissere dich, dass du einen [Eigener Lizenzschlüssel](redm-licensekey.md) eingestellt hast.
:::

Nun kannst du den Namen deines Servers ändern, indem du eine der drei Methoden anwendest, die im Abschnitt Zugriff auf die Konfiguration beschrieben sind. Hier ist ein Beispiel für die Verwendung von Farben und das Ergebnis:

```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)



| Code | Farbe     | Hex Code |
| ---- | --------- | -------- |
| ^0   | Weiß      | #F0F0F0  |
| ^1   | Rot       | #F44336  |
| ^2   | Grün      | #4CAF50  |
| ^3   | Gelb      | #FFEB3B  |
| ^4   | Blau      | #42A5F5  |
| ^5   | Hellblaub | #03A9F4  |
| ^6   | Lila      | #9C27B0  |
| ^7   | Weiß      | #F0F0F0  |
| ^8   | Orange    | #FF5722  |
| ^9   | Grau      | #9E9E9E  |



### Emojis

RedM ermöglicht es dir auch, Emojis direkt in deinem Servernamen zu platzieren. Füge einfach beliebige Emojis in den Parameter `sv_hostname` in deiner Serverkonfiguration ein und schon funktioniert es. Du brauchst dafür keine RedM Subscription.



## Projektdetails festlegen

### Server Beschreibung

Um einen kurzen und prägnanten Überblick über deinen Server zu bekommen, kannst du ganz einfach eine kleine Projektbeschreibung für deinen RedM Gameserver einstellen, die neben deinem Servernamen in der Serverliste angezeigt wird. Hier ist ein Beispiel für das Setzen eines Projektnamens und das Ergebnis, das sich daraus ergibt:

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)

### Server Tags

Das Setzen von Server-Tags kann nützlich sein, um den Inhalt eures Servers einzugrenzen und es potenziellen Spielern zu ermöglichen, euren Server zu sehen, wenn sie Server nach ihren Wünschen herausfiltern. Sobald du Tags gesetzt hast, werden diese in der Serverliste deines Servers sichtbar sein und auch zum Filtern deines Servers verwendet werden. Hier ist ein Beispiel für das Setzen von Projekt-Tags und das daraus resultierende Ergebnis:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://github.com/zaphosting/docs/assets/42719082/33407e9f-9e28-4264-9b13-e946ed5b434a)

### Sonstiges

Außerdem kannst du ein paar andere Serverdetails nach deinen Wünschen ändern.

#### Gametyp

Das Setzen des Gametype-Parameters ändert, was auf der Serverlistenseite deines Servers angezeigt wird. Dies ändert **nicht** den Gamemode auf dem Server selbst. Du kannst den Gametype über das Webinterface deines Gameservers oder durch Setzen eines Tags ändern:

```
sets gametype "Freeroam"
```

#### Sprache

Außerdem kannst du die Sprache deines Servers ändern, die auf der Seite mit der Serverliste angezeigt wird. Wir haben eine spezielle [Sprache / Standort (Flagge)](redm-locale.md) zur Einstellung der Sprache. Dies kann über das Webinterface deines Gameservers oder durch Setzen eines Tags geschehen:

```
sets locale "en-GB"
```

Du kannst eine Liste aller Locale-Tags abrufen, indem du [diese Ressource](https://github.com/TiagoDanin/Locale-Codes#locale-list) oder etwas ähnliches anschaust.





## Abschluss

Vorausgesetzt, dass du alle Schritte befolgt hast, hast du deinen RedM Gameserver erfolgreich angepasst. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂