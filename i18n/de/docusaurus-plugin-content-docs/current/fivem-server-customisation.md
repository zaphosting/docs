---
id: fivem-server-customisation
title: "FiveM: Serverdetails anpassen"
description: "Entdecke, wie du deinen Servernamen mit Farben und Emojis individualisieren kannst, damit er in der Serverliste heraussticht → Jetzt mehr erfahren"
sidebar_label: Serverdetails anpassen
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Willst du deinen Server so anpassen, dass er individuelle Infos in der Serverliste anzeigt? Das geht ganz easy! In dieser Anleitung lernst du, wie du verschiedene Anpassungen vornimmst, damit dein Server in der Serverliste richtig auffällt!



<InlineVoucher />



## Individueller Servername

### Farb-Codes

Es gibt eine Reihe von Farben, die du deinem Servernamen hinzufügen kannst. Diese werden über einen Prefix angegeben, wenn du die Farbe ändern möchtest. Die verfügbaren Farben findest du in der Tabelle unten.

:::info
Um Farben in deinem Servernamen nutzen zu können, brauchst du ein gültiges [Cfx.re Abo](https://portal.cfx.re/subscriptions), das diesen Vorteil beinhaltet. Falls du eins hast und es trotzdem nicht funktioniert, stelle sicher, dass du einen [eigene Lizenzschlüssel](fivem-licensekey.md) gesetzt hast.
:::

Jetzt kannst du den Namen deines Servers ändern, indem du im txAdmin den CFG Editor öffnest, nach `sv_hostname` suchst und ihn nach deinen Wünschen anpasst. Hier ein Beispiel für die Verwendung von Farben und das Ergebnis:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Official Community Server ^0- ^1Events coming ^8soon^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| Code | Farbe      | Hex-Code |
| ---- | ---------- | -------- |
| ^0   | Weiß       | #F0F0F0  |
| ^1   | Rot        | #F44336  |
| ^2   | Grün       | #4CAF50  |
| ^3   | Gelb       | #FFEB3B  |
| ^4   | Blau       | #42A5F5  |
| ^5   | Hellblau   | #03A9F4  |
| ^6   | Lila       | #9C27B0  |
| ^7   | Weiß       | #F0F0F0  |
| ^8   | Orange     | #FF5722  |
| ^9   | Grau       | #9E9E9E  |

### Emojis

FiveM erlaubt es dir auch, Emojis direkt in deinen Servernamen einzufügen. Einfach die gewünschten Emojis in den `sv_hostname` Parameter deiner Serverkonfiguration packen – das funktioniert ohne Cfx.re Abo.



## Projekt-Details einstellen

### Serverbeschreibung

Eine Serverbeschreibung ist super, um kurz und knapp zu zeigen, worum es bei deinem Server geht. Du kannst ganz easy eine kleine Projektbeschreibung für deinen FiveM Gameserver setzen, die neben deinem Servernamen in der Serverliste angezeigt wird. Hier ein Beispiel, wie du eine Projektbeschreibung setzt und wie das aussieht:

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Server-Tags

Server-Tags helfen dabei, genauer zu zeigen, worum es bei deinem Server geht, und ermöglichen potenziellen Spielern, deinen Server bei der Filterung nach ihren Vorlieben zu finden. Sobald du Tags setzt, sind diese auf der Serverlistenseite deines Servers sichtbar und werden auch zum Filtern genutzt. Hier ein Beispiel, wie du Tags setzt und wie das aussieht:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Weitere Details

Du kannst auch ein paar weitere Serverdetails nach deinem Geschmack anpassen.

#### Gametype

Der Parameter gametype ändert, was auf der Serverlistenseite deines Servers angezeigt wird. Das ändert **nicht** den Gamemode auf dem Server selbst. Du kannst den Gametype über das Webinterface deines Gameservers ändern oder indem du einen Tag setzt:

```
sets gametype "Freeroam"
```

#### Sprache

Zuletzt kannst du die Sprache deines Servers ändern, die auf der Serverlistenseite angezeigt wird. Wir haben eine [Sprache / Standort (Flagge)](fivem-locale.md) Anleitung für die Lokalisierung. Das kannst du über das Webinterface deines Gameservers machen oder indem du einen Tag setzt:

```
sets locale "en-GB"
```

Eine Liste aller Locale-Tags findest du z.B. [hier](https://github.com/TiagoDanin/Locale-Codes#locale-list) oder in ähnlichen Ressourcen.



## Fazit

Wenn du alle Schritte befolgt hast, hast du deinen FiveM Gameserver erfolgreich individualisiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />