---
id: redm-server-customisation
title: "RedM: Serverdetails anpassen"
description: "Entdecke, wie du deinen Servernamen mit Farben und Emojis individualisieren kannst, damit er in der Serverliste heraussticht → Jetzt mehr erfahren"
sidebar_label: Serverdetails anpassen
services:
  - gameserver-redm
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

Du kannst deinem Servernamen verschiedene Farben verpassen. Das funktioniert über einen Prefix, mit dem du die Farbe änderst. Welche Farben du nutzen kannst, siehst du in der Tabelle unten.

:::info
Um Farben im Servernamen zu verwenden, brauchst du ein gültiges [Cfx.re Abo](https://portal.cfx.re/subscriptions), das diesen Vorteil beinhaltet. Falls du eins hast und es trotzdem nicht klappt, check, ob du einen [eigene Lizenzschlüssel](redm-licensekey.md) eingetragen hast.
:::

Jetzt kannst du den Namen deines Servers über eine der drei Methoden aus dem Abschnitt zur Konfigurationszugriff ändern. Hier ein Beispiel, wie Farben genutzt werden und wie das Ergebnis aussieht:
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

RedM erlaubt es dir auch, Emojis direkt in den Servernamen einzubauen. Einfach die gewünschten Emojis in den `sv_hostname` Parameter deiner Serverkonfiguration packen – das funktioniert ohne Cfx.re Abo.



## Projekt-Details einstellen

### Serverbeschreibung

Eine Serverbeschreibung ist super, um kurz und knapp zu zeigen, worum es bei deinem Server geht. Du kannst eine kleine Projektbeschreibung für deinen RedM Gameserver einstellen, die dann neben dem Servernamen in der Serverliste angezeigt wird. Hier ein Beispiel, wie du eine Projektbeschreibung setzt und wie das aussieht:

```
sets sv_projectDesc "Join our Discord to stay updated on latest events! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Server-Tags

Server-Tags helfen dabei, deinen Server genauer zu beschreiben und potenziellen Spielern zu zeigen, worum es geht. So können sie deinen Server beim Filtern besser finden. Sobald du Tags setzt, sind diese auf der Serverlistenseite sichtbar und werden zum Filtern genutzt. Beispiel für Tags und das Ergebnis:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Weitere Details

Du kannst auch noch ein paar andere Serverdetails nach deinem Geschmack anpassen.

#### Gametype

Der Parameter gametype ändert, was auf der Serverlistenseite angezeigt wird. Er ändert **nicht** den Gamemode auf dem Server selbst. Du kannst den Gametype über das Webinterface deines Gameservers ändern oder per Tag:

```
sets gametype "Freeroam"
```

#### Sprache

Zuletzt kannst du die Sprache deines Servers einstellen, die in der Serverliste angezeigt wird. Wir haben eine [Sprache / Standort (Flagge)](redm-locale.md) Anleitung für die Lokalisierung. Das geht über das Webinterface deines Gameservers oder per Tag:

```
sets locale "en-GB"
```

Eine Liste aller Locale-Tags findest du z.B. [hier](https://github.com/TiagoDanin/Locale-Codes#locale-list) oder in ähnlichen Ressourcen.



## Abschluss

Wenn du alle Schritte befolgt hast, hast du deinen RedM Gameserver erfolgreich individualisiert. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />