---
id: redm-server-customisation
title: "RedM: Anpassen der Serverinformationen"
description: Informationen über die Anpassung der in der Serverliste angezeigten Informationen für RedM-Server - ZAP-Hosting.com - Dokumentation
sidebar_label: Anpassen der Serverinformationen
---

Möchtest du deinen Server so anpassen, dass er benutzerdefinierte Informationen in der Serverliste anzeigt? Das ist ganz einfach möglich! In dieser Anleitung erfährst du, wie du eine Reihe von verschiedenen Anpassungen vornehmen kannst, um deinen Server in der Serverliste hervorzuheben!

## Zugriff auf die Konfiguration deines Servers

Es gibt mehrere Möglichkeiten, um auf die Konfigurationsdatei `server.cfg` für deinen RedM Gameserver zuzugreifen. Diese Datei muss bearbeitet werden, damit du Anpassungen vornehmen kannst.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>
Die einfachste Methode ist es, den Abschnitt **Einstellungen** im Webinterface deines Gameservers aufzurufen und dort nach den entsprechenden Einstellungen zu suchen, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/43d0e6eb-a24d-46b8-a6a2-5659ae94084c)
</TabItem>

<TabItem value="configs" label="Via WI Config file">
Alternativ dazu können Benutzer, die die Raw-Datei direkt bearbeiten möchten, dies tun, indem sie den Abschnitt **Configs** im Webinterface ihres Gameservers aufrufen und auf den blauen Button " Datei bearbeiten" klicken, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/e3c7392c-7246-4133-be2e-383dac4b0327)

Dadurch öffnet sich direkt auf der Website ein Texteditor, mit dem du diese bearbeiten kannst.
</TabItem>

<TabItem value="ftp" label="Via FTP">
Die letzte Methode, um auf die Raw-Datei zuzugreifen, ist per FTP. Wenn du mit der Verwendung von FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die [FTP Dateizugriff](gameserver-ftpaccess.md) Anleitung zu werfen. Diese Methode dauert jedoch länger, und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir dir, einfach den Abschnitt **Configs** im Webinterface deines Gameservers zu verwenden.
</TabItem>
</Tabs>

### Benutzerdefinierter Servername

### Farbcodes

Es gibt eine Reihe von Farben, die du zu deinem Servernamen hinzufügen kannst. Diese können durch die Verwendung eines Präfixes angegeben werden, wenn du die Farbe ändern möchtest. Die Liste der verfügbaren Farben findest du in der folgenden Tabelle.

:::info
Um Farben in deinem Servernamen zu verwenden, musst du ein gültiges [FiveM Patreon Tier](https://www.patreon.com/FiveM/posts) haben, das den Vorteil beinhaltet. Wenn das der Fall ist und es immer noch nicht funktioniert, vergewissere dich, dass du einen [benutzerdefinierten Lizenzschlüssel, mehr Informationen findest du in unserer Anleitung](fivem-licensekey.md) eingestellt hast.
:::

Jetzt kannst du den Namen deines Servers ändern, indem du eine der drei Methoden anwendest, die im Abschnitt Zugriff auf die Konfiguration beschrieben sind. Hier ist ein Beispiel für die Verwendung von Farben und das Ergebnis, das sie erzeugen:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![image](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)

#### Farbcodes Tabelle

| Code | Farbe    | Hex Code |
| ---- | -------- | -------- |
| ^0   | Weiß     | #F0F0F0  |
| ^1   | Rot      | #F44336  |
| ^2   | Grün     | #4CAF50  |
| ^3   | Gelb     | #FFEB3B  |
| ^4   | Blau     | #42A5F5  |
| ^5   | Hellblau | #03A9F4  |
| ^6   | Lila     | #9C27B0  |
| ^7   | Weiß     | #F0F0F0  |
| ^8   | Orange   | #FF5722  |
| ^9   | Grau     | #9E9E9E  |

### Emojis

RedM ermöglicht es auch, Emojis direkt in Ihren Servernamen einzufügen. Fügen einfach beliebige Emojis in den Parameter `sv_hostname` in deiner Serverkonfiguration ein und es wird funktionieren. Du benötigst dafür keinen RedM Patreon-Tier.

Hier ist ein Beispiel für das Hinzufügen von Emojis über das Webinterface deines Gameservers:

![image](https://github.com/zaphosting/docs/assets/42719082/43d0e6eb-a24d-46b8-a6a2-5659ae94084c)

Du kannst dies ebenfalls direkt zu deiner `server.cfg` Konfigurationsdatei per FTP oder über den Abschnitt **Configs** im Webinterface deines Gameservers hinzufügen.



## Projektdetails definieren

### Server Beschreibung

Du kannst ganz einfach eine kleine Projektbeschreibung für deinen RedM Gameserver festlegen, die neben deinem Servernamen in der Serverliste angezeigt wird.

Hier ist ein Beispiel für das Setzen eines Projektnamens und das Ergebnis:

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![image](https://github.com/zaphosting/docs/assets/42719082/32bbf492-9ee0-4c78-a391-9c44120369c2)

### Server Tags

Das Setzen von Server-Tags kann nützlich sein, um den Inhalt deines Servers einzugrenzen und es potenziellen Spielern zu ermöglichen, deinen Server zu sehen, wenn sie Server nach ihren Vorlieben herausfiltern. Sobald du Tags gesetzt hast, werden diese in der Serverliste deines Servers sichtbar sein und auch zum Filtern deines Servers verwendet werden.

Hier ist ein Beispiel für das Setzen von Projekt-Tags und das daraus resultierende Ergebnis:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![image](https://github.com/zaphosting/docs/assets/42719082/33407e9f-9e28-4264-9b13-e946ed5b434a)

### Sonstige Informationen

Außerdem kannst du ein paar weitere Serverinformationen nach deinen Wünschen ändern.

#### Gametype

Das Setzen des Gametype-Parameters ändert, was auf der Serverlistenseite deines Servers angezeigt wird. Dies ändert **nicht** den Gamemode auf dem Server selbst. Du kannst den Gametype über das Webinterface deines Gameservers oder durch Setzen eines Tags ändern:

```
sets gametype "Freeroam"
```

#### Sprache

Schließlich kannst du die Sprache deines Servers ändern, die auf der Serverlistenseite angezeigt wird. Wir haben eine spezielle Anleitung zur Einstellung der Sprache, die du hier finden kannst: [Sprache / Standort (Flagge) ändern](redm-locale.md).

Dies kann über das Webinterface deines Gameservers oder durch Setzen eines Tags geschehen:
```
sets locale "en-GB"
```

Du kannst eine Liste aller Locale-Tags erhalten, indem du [diese Quelle](https://github.com/TiagoDanin/Locale-Codes#locale-list) oder eine ähnliche Seite aufrufst. Du hast deinen RedM Gameserver erfolgreich angepasst!
