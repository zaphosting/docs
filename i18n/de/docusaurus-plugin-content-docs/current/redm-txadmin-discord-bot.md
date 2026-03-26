---
id: redm-txadmin-discord-bot
title: "RedM: txAdmin Discord Bot"
description: "Richte einen Discord Bot für deinen txAdmin RedM Server ein und integriere ihn, um Management und Kommunikation zu verbessern → Jetzt mehr erfahren"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung
Das txAdmin Panel bringt viele Features für deinen RedM Server mit, darunter auch eine Discord Bot Integration.
In dieser Anleitung zeigen wir dir, wie du den Discord Bot einrichtest und wie du ihn nutzt.

<InlineVoucher />

## Vorbereitung

Um den Discord Bot für deinen txAdmin Server einzurichten, musst du dich zuerst in dein txAdmin Panel einloggen.
Die Login-Daten findest du auf der Übersichtsseite deines Servers, so wie hier gezeigt:

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

Diese Anleitung setzt voraus, dass txAdmin bereits eingerichtet ist. Wie das geht, erfährst du in unserer [RedM: txAdmin Einrichtung](redm-txadmin-setup.md) Anleitung.

:::

## Einrichtung

### Erstellen einer Discord Anwendung

Um den Bot mit txAdmin zu verbinden, musst du zuerst eine Discord Anwendung erstellen. Dein Bot wird dann dieser Anwendung zugewiesen und agiert unter deren Namen. Um eine solche Anwendung zu erstellen, gehe bitte zum [Discord Developer Portal](https://discord.com/developers/applications/).

Erstelle jetzt eine neue Anwendung, indem du auf **New Application** klickst und vergib einen Namen, wie unten zu sehen:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Anschließend erstellst du die Anwendung mit einem Klick auf **Create**. Für die nächsten Schritte notiere dir bitte die Application ID:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Bot konfigurieren und Token erhalten

Beim Erstellen der Anwendung wird automatisch ein Bot erstellt. Du kannst den Token ganz einfach bekommen, indem du auf **Reset Token** klickst. Dann erhältst du einen User-Token, den du dir ebenfalls notieren solltest:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Gib den Bot-Token niemals weiter, damit dein Bot ungestört läuft und keine Sicherheitslücke entsteht. Der Token ist wie ein geheimer Schlüssel und darf nicht geteilt werden.
:::

Auf derselben Seite musst du etwas nach unten scrollen und die Option "Server Members Intent" aktivieren und deine Änderungen speichern:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Bot zu deinem Discord einladen

Um den Bot einzuladen, musst du die zuvor notierte Client ID in den folgenden Link an der passenden Stelle einfügen und den Link dann im Browser öffnen, um den Bot zu deinem Discord Server hinzuzufügen. So sollte der Link aussehen:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Server- und Channel-IDs herausfinden

Damit der Bot mit txAdmin richtig funktioniert, brauchst du die Server-ID, auf der der Bot aktiv sein soll.
Diese bekommst du, indem du im Discord mit Rechtsklick auf das Server-Icon klickst und **Server-ID kopieren** auswählst. Notiere dir diese ID ebenfalls.

So sieht das Beispiel aus:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Optional kannst du auch einen Channel festlegen, in dem Status-Updates wie Neustartpläne gepostet werden. Die Channel-ID kannst du auf die gleiche Weise kopieren.
Vergiss nicht, dass der Bot die Berechtigung haben muss, in diesem Channel Nachrichten zu lesen und zu schreiben.

:::info
Falls du die Option zum Kopieren der Server- oder Channel-ID nicht siehst, musst du zuerst den Entwicklermodus in deinen Discord Benutzereinstellungen aktivieren:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Einstellungen in txAdmin anpassen

Jetzt kannst du den Discord Bot in txAdmin aktivieren und alle zuvor notierten IDs und Tokens eintragen:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Optional: Statusnachricht senden

Du kannst optional eine Statusnachricht einmalig senden, die dann ständig den aktuellen Serverstatus, Spieleranzahl usw. aktualisiert.
Dazu klickst du im gewünschten Discord Channel und gibst `/status add` ein. Achte darauf, dass der Bot die Berechtigung hat, Nachrichten in diesem Channel zu senden.

Das sollte dann so eine Nachricht erzeugen:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Alles in dieser Nachricht kannst du auf der Discord Einstellungsseite innerhalb von txAdmin anpassen.

## Abschluss

Mit dem Einrichten eines Discord Bots für txAdmin kannst du ganz easy den Status deines RedM Servers und weitere Infos direkt in deinem Discord Server anzeigen lassen. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – melde dich einfach! 🙂

<InlineVoucher />