---

id: fivem-txadmin-discord-bot
title: "FiveM: txAdmin Discord Bot"  
description: Informationen zur Einrichtung des Discord Bots für einen FiveM txAdmin Server von ZAP-Hosting – ZAP-Hosting.com Dokumentation  
sidebar_label: txAdmin Discord Bot  
services:  
  - gameserver  
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung  
Das txAdmin-Panel bringt viele Features für deinen FiveM Server mit – unter anderem auch eine Discord Bot-Integration. In dieser Anleitung zeigen wir dir, wie du den Discord Bot einrichtest und verwendest.

<InlineVoucher />

## Vorbereitung

Um den Discord Bot für deinen txAdmin-Server einzurichten, musst du dich zuerst im txAdmin-Panel einloggen. Die Login-Daten findest du auf der Übersichtsseite deines Servers, wie hier zu sehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/Y9Ycr8FQqGQZr4w/download)

:::info
Diese Anleitung setzt voraus, dass txAdmin bereits eingerichtet ist. Wie das funktioniert, erfährst du in unserem Guide [FiveM: txAdmin Setup](fivem-txadmin-setup.md).
:::

## Einrichtung

### Eine Discord Application erstellen

Um den Bot mit txAdmin zu verbinden, musst du zuerst eine Discord Application erstellen. Dein Bot wird dieser dann zugewiesen und agiert unter deren Namen. Rufe dazu das [Discord Developer Portal](https://discord.com/developers/applications/) auf.

Erstelle nun eine neue Application, indem du auf **New Application** klickst. Anschließend kannst du dieser einen Namen geben – wie hier dargestellt:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Dann klickst du auf **Create**, um die Application zu erstellen. Notiere dir anschließend die Application-ID für die nächsten Schritte:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)

### Bot konfigurieren und Token erhalten

Beim Erstellen einer Application wird auch automatisch ein Bot erstellt. Du kannst den Token ganz einfach erhalten, indem du auf **Reset Token** klickst. Anschließend bekommst du einen User Token, den du dir ebenfalls notieren solltest:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Gib den Bot Token niemals weiter, damit dein Bot störungsfrei funktioniert und keine Sicherheitsprobleme verursacht. Der Token ist wie ein geheimer Schlüssel und darf nicht weitergegeben werden.
:::

Auf derselben Seite musst du etwas nach unten scrollen und die Option „Server Members Intent“ aktivieren. Vergiss nicht, deine Änderungen zu speichern:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

### Bot zu deinem Discord einladen

Um den Bot einzuladen, musst du die zuvor notierte Client-ID in den folgenden Link einsetzen und diesen im Browser öffnen, um den Bot deinem Discord-Server hinzuzufügen. So könnte der Link aussehen:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)

### Server- und Channel-IDs abrufen

Damit der Bot korrekt mit txAdmin funktioniert, musst du die Server-ID ermitteln, auf dem der Bot aktiv sein soll.
Diese bekommst du, indem du mit Rechtsklick auf das Server-Icon klickst und dann **Server ID kopieren** auswählst. Notiere dir auch diese ID.

So sollte das aussehen:
![](https://screensaver01.zap-hosting.com/index.php/s/6RywsHBecDb2Aeb/preview)

Optional kannst du auch einen Channel festlegen, in dem Statusmeldungen wie geplante Neustarts angezeigt werden. Die Channel-ID kopierst du auf dieselbe Weise – nur eben für einen Channel.
Denk daran, dass der Bot in diesem Channel Schreibrechte haben muss.

:::info
Falls du die Option zum Kopieren der Server- oder Channel-ID nicht siehst, musst du zuerst den Entwicklermodus in deinen Discord-Einstellungen aktivieren:
![](https://screensaver01.zap-hosting.com/index.php/s/EE26GrtQ6j6rHjB/preview) 
:::

### Einstellungen in txAdmin anpassen

Jetzt kannst du den Discord Bot in txAdmin aktivieren und alle zuvor notierten IDs und Tokens eintragen:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Optional: Statusnachricht senden

Du kannst optional eine Statusnachricht senden lassen, die den aktuellen Serverstatus, Spielerzahl usw. laufend aktualisiert. Dazu klickst du in Discord in den gewünschten Channel und gibst `/status add` ein. Stelle sicher, dass der Bot dort Nachrichten senden darf. So sollte das aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Alles in dieser Nachricht kannst du in den Discord-Einstellungen innerhalb von txAdmin anpassen.

## Abschluss

Die Einrichtung eines Discord Bots für txAdmin ermöglicht es dir, den Status deines FiveM Servers sowie weitere Informationen direkt auf deinem Discord-Server anzuzeigen. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂