---
id: voiceserver-voicebot-connection
title: "Voiceserver: Verknüpfung deines Voicebots mit einem Voiceserver"
description: Informationen, wie du einen Voicebot mit deinem Teamspeak/Discord Server von ZAP-Hosting verbinden kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Verknüpfung mit Voiceserver
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Du möchtest deinen Voicebot mit deinem Teamspeak Server verbinden, weißt aber noch nicht so wirklich wie das geht? Keine Sorge, im Folgenden erläutern wir dir im Detail, wie du dies genau umsetzt!

<InlineVoucher />

## Bot mit deinem TeamSpeak verbinden

Um deinen Voicebot mit deinem TeamSpeak 3 Server zu verbinden, musst du ihn im Webinterface aufrufen. Danach gehst du links auf **Server-Einstellungen**, wie unten gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/wp2ttHJyJeWbS44/preview)

Jetzt kannst du unter **Server-Einstellungen** einen TeamSpeak auswählen, falls dieser ebenfalls mit deinem Account gebucht wurde. Falls dieser extern gehostet ist, kannst du dort auch **Anderer Teamspeak Server** auswählen.

Die Daten können dann unten eingetragen werden, einfach speichern und der Voicebot verbindet sich mit deinem TeamSpeak 3 Server, hier ein Beispiel:

![](https://screensaver01.zap-hosting.com/index.php/s/fB7bF4XdcxPsjfm/preview)


## Bot mit deinem Discord verbinden

Um deinen Voicebot mit deinem Discord zu verbinden, musst du auf **Server-Einstellungen** gehen, dann musst du **Discord** auswählen.

![](https://screensaver01.zap-hosting.com/index.php/s/fCDKT64FHF4DN5j/preview)

Der **Discord Bot Token** und die **Discord Bot Client ID** müssen dann eingetragen werden. Danach verbindet sich der Voicebot mit deinem Discord-Server.


## Deinen Discord Bot Token und die Client ID erhalten

Da dein Discord-Server keine direkte IP-Adresse oder Port hat, gibt es ein paar Schritte zur Vorbereitung, bevor du deinen Bot auf einem Discord-Server nutzen kannst.


### Eine Discord-Anwendung erstellen

Zuerst musst du eine Discord-Anwendung erstellen. Dein Bot wird dieser dann zugewiesen und agiert unter deren Namen. Um so eine Anwendung zu erstellen, rufe bitte das [Discord Developer Portal](https://discord.com/developers/applications/) auf.

Jetzt erstellst du eine neue Anwendung, indem du auf **New Application** klickst und kannst nun einen Namen vergeben, wie unten zu sehen:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Dann erstellst du die Anwendung mit einem Klick auf **Create**. Für die folgenden Schritte notiere dir bitte jetzt die Application ID:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Bot konfigurieren und Token erhalten

Beim Erstellen einer Anwendung wird automatisch auch ein Bot erstellt. Du kannst ganz einfach den Token erhalten, indem du auf **Reset Token** klickst. Danach bekommst du einen Nutzer-Token, den du dir ebenfalls notieren oder irgendwo aufschreiben solltest:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Gib den Bot-Token niemandem weiter, damit dein Bot ungestört funktioniert und kein Sicherheitsproblem entsteht. Der Token ist wie ein geheimer Schlüssel und sollte nicht weitergegeben werden.
:::

Auf derselben Seite musst du etwas nach unten scrollen und die Optionen **Presence Intent**, **Server Members Intent** und **Message Content Intent** aktivieren, danach speicherst du deine Änderungen:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Bot zu deinem Discord einladen

Um den Bot einzuladen, musst du die zuvor notierte Client ID an der passenden Stelle in den folgenden Link einfügen, den Link dann im Browser öffnen und den Bot zu deinem Discord-Server hinzufügen. Der Link sollte so aussehen wie in diesem Beispiel:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Bot im Panel konfigurieren

Jetzt trägst du den zuvor notierten Token und die Client ID in die dafür vorgesehenen Felder im ZAP-Hosting Webinterface ein und klickst unten auf **Speichern**:

![](https://screensaver01.zap-hosting.com/index.php/s/TF8wdNbYJssrKXQ/preview)

Danach kannst du den Bot starten. Er sollte sich dann innerhalb von ca. 10 Sekunden mit deinem Discord-Server verbinden. 



## Abschluss

Der Voicebot ist ein sehr nützliches und spaßiges Produkt für viele Leute. Du kannst ihn entweder auf einem TeamSpeak-Server oder auf Discord verwenden. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
