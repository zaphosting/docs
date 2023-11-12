---
id: fivem-server-customisation
title: Customise server details
description: Information on how to customise server details displayed in the server list for FiveM servers - ZAP-Hosting.com 
sidebar_label: Customise Server Details
---

**📺Video:** Du bevorzugst eine Anleitung eher in Form eines Videos oder als zusätzliche visuelle Ergänzung? Kein Problem! Für dieses Thema stellen wir ebenfalls ein Video zur Verfügung:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zuWgjwb2-Xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Du möchtest deinen Server so anpassen, dass er benutzerdefinierte Informationen in der Serverliste anzeigt? Das ist ganz einfach möglich! In dieser Anleitung erfährst du, wie du eine Reihe von verschiedenen Anpassungen vornehmen kannst, um deinen Server in der Serverliste hervorzuheben!



## Zugriffsmöglichkeiten für die Konfiguration

Es gibt mehrere Möglichkeiten, um auf die Konfigurationsdatei "server.cfg" von deinem FiveM Gameserver zuzugreifen. Diese Datei muss bearbeitet werden, damit du Anpassungen vornehmen kannst.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Webinterface" default>

### Über das Webinterface

Die benutzerfreundlichste Möglichkeit ist es, im Webinterface deines Gameservers in den Bereich **Einstellungen** zu gehen und dort nach den entsprechenden Einstellungen zu suchen, wie unten dargestellt:

![image](https://github.com/zaphosting/docs/assets/42719082/43d0e6eb-a24d-46b8-a6a2-5659ae94084c)
</TabItem>

<TabItem value="configs" label="Konfigurationsdatei">

### Über die Konfigurationsdatei

Alternativ kannst du die Datei auch direkt bearbeiten, indem du im Webinterface deines Gameservers in den Bereich **Configs** gehst und den blauen editieren Button drückst, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/e3c7392c-7246-4133-be2e-383dac4b0327)

Es öffnet sich ein Texteditor zur Bearbeitung direkt auf der Website.
</TabItem>

<TabItem value="ftp" label="FTP">

### Über das FTP-Protokoll

Die letzte Möglichkeit, um auf die Datei zuzugreifen, ist per FTP. Wenn du mit der Verwendung von FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die [FTP Dateizugriff](gameserver-ftpaccess.md) Anleitung zu werfen. Diese Methode dauert jedoch länger, und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir, den Abschnitt **Configs**-im Webinterface deines Gameservers zu verwenden. 

</TabItem>
</Tabs>



## Benutzerdefinierter Servername

### Farbcodes

Es gibt eine Reihe von Farben, die du zu deinem Servernamen hinzufügen kannst. Diese können durch die Verwendung eines Präfixes angegeben werden, wenn du die Farbe ändern möchtest. Die Liste der verfügbaren Farben findest du in der untenstehenden Tabelle.

:::info
Um Farben in deinem Servernamen verwenden zu können, musst du ein gültiges [FiveM Patreon Tier] (https://www.patreon.com/fivem/posts) haben, das den Vorteil beinhaltet. Wenn das der Fall ist und es trotzdem nicht funktioniert, vergewissere dich, dass du einen [benutzerdefinierten Lizenzschlüssel, weitere Informationen findest du in unserem Leitfaden](fivem-licensekey.md) eingestellt hast.
In order to use colours in your server name, you must have a valid [FiveM Patreon tier](https://www.patreon.com/fivem/posts) which has the benefit. If you do but it still doesn't work, ensure that you have set a [custom license key, more info can be found on our guide](fivem-licensekey.md).
:::

Nun kannst du den Namen deines Servers ändern, indem du eine der drei Methoden anwendest, die im Abschnitt Zugriff auf die Konfiguration beschrieben sind. Hier ist ein Beispiel für die Verwendung von Farben und das Ergebnis:

```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![image](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)



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

FiveM ermöglicht es dir auch, Emojis direkt in deinem Servernamen zu platzieren. Füge einfach beliebige Emojis in den Parameter `sv_hostname` in deiner Serverkonfiguration ein und schon funktioniert es. Du brauchst dafür keine FiveM Patreon Mitgliedschaft. Hier ist ein Beispiel für das Hinzufügen von Emojis über das Webinterface deines Gameservers:

![image](https://github.com/zaphosting/docs/assets/42719082/43d0e6eb-a24d-46b8-a6a2-5659ae94084c)

Du kannst dies auch direkt in der Konfigurationsdatei `server.cfg` per FTP oder in dem Abschnitt **Configs** beim Webinterface deines Gameservers hinzufügen.



## Projektdetails festlegen

### Server Beschreibung

Um einen kurzen und prägnanten Überblick über deinen Server zu bekommen, kannst du ganz einfach eine kleine Projektbeschreibung für deinen FiveM Gameserver einstellen, die neben deinem Servernamen in der Serverliste angezeigt wird. Hier ist ein Beispiel für das Setzen eines Projektnamens und das Ergebnis, das sich daraus ergibt:

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![image](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)

### Server Tags

Das Setzen von Server-Tags kann nützlich sein, um den Inhalt eures Servers einzugrenzen und es potenziellen Spielern zu ermöglichen, euren Server zu sehen, wenn sie Server nach ihren Wünschen herausfiltern. Sobald du Tags gesetzt hast, werden diese in der Serverliste deines Servers sichtbar sein und auch zum Filtern deines Servers verwendet werden. Hier ist ein Beispiel für das Setzen von Projekt-Tags und das daraus resultierende Ergebnis:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![image](https://github.com/zaphosting/docs/assets/42719082/33407e9f-9e28-4264-9b13-e946ed5b434a)

### Sonstiges

Außerdem kannst du ein paar andere Serverdetails nach deinen Wünschen ändern.

#### Gametyp

Das Setzen des Gametype-Parameters ändert, was auf der Serverlistenseite deines Servers angezeigt wird. Dies ändert **nicht** den Gamemode auf dem Server selbst. Du kannst den Gametype über das Webinterface deines Gameservers oder durch Setzen eines Tags ändern:

```
sets gametype "Freeroam"
```

#### Sprache

Außerdem kannst du die Sprache deines Servers ändern, die auf der Seite mit der Serverliste angezeigt wird. Wir haben eine spezielle [Anleitung](fivem-locale.md) zur Einstellung der Sprache. Dies kann über das Webinterface deines Gameservers oder durch Setzen eines Tags geschehen:

```
sets locale "en-GB"
```

Du kannst eine Liste aller Locale-Tags abrufen, indem du [diese Ressource](https://github.com/TiagoDanin/Locale-Codes#locale-list) oder etwas ähnliches anschaust.

Du hast deinen FiveM Gameserver erfolgreich angepasst!