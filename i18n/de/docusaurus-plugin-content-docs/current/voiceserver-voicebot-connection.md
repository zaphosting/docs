---
id: voiceserver-voicebot-connection
title: "Voiceserver: Deinen Voicebot mit deinem Voiceserver verbinden"
description: "Entdecke, wie du deinen Voicebot mit TeamSpeak und Discord verbindest für nahtlose Kommunikation und Steuerung → Jetzt mehr erfahren"
sidebar_label: Verbindung zum Voiceserver
services:
  - voiceserver
  - voicebot
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Einführung

Du willst deinen Voicebot mit deinem TeamSpeak-Server verbinden, hast aber keine Ahnung, wie das geht? Kein Stress, wir erklären dir hier Schritt für Schritt, wie das funktioniert!



## Bot mit deinem TeamSpeak verbinden

Um deinen Voicebot mit deinem TeamSpeak 3 Server zu verbinden, musst du ihn im Control Panel aufrufen. Dann gehst du links auf **Server**, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Jetzt kannst du unter **Server** einen TeamSpeak auswählen, falls dieser auch bei deinem Account gebucht ist. Wenn der Server extern gehostet wird, kannst du dort auch **Custom Teamspeak Server** auswählen.

Die Daten kannst du dann unten eingeben, einfach speichern und der Voicebot verbindet sich mit deinem TeamSpeak 3 Server, hier ein Beispiel:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Bot mit deinem Discord verbinden

Um deinen Voicebot mit Discord zu verbinden, gehst du auf **Server** und wählst dann **Discord** aus.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Jetzt musst du den **Discord Bot Token** und die **Discord Bot Client ID** eingeben. Danach verbindet sich der Voicebot mit deinem Discord Server.


## So bekommst du deinen Discord Bot Token und die Client ID

Da dein Discord Server keine direkte IP-Adresse oder Port hat, gibt’s ein paar Schritte, die du vorbereiten musst, bevor du deinen Bot auf einem Discord Server nutzen kannst.


### Erstellen einer Discord Application

Als Erstes musst du eine Discord Application erstellen. Dein Bot wird dann dieser zugewiesen und agiert unter ihrem Namen. Um so eine Application zu erstellen, geh bitte auf [das Discord Developer Portal](https://discord.com/developers/applications/).

Jetzt erstellst du eine neue Application, indem du auf **New Application** klickst und kannst ihr einen Namen geben, so wie hier:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Dann erstellst du die Application mit **Create**. Für die nächsten Schritte notier dir bitte die Application ID:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Bot konfigurieren und Token holen

Beim Erstellen der Application wird automatisch ein Bot angelegt. Den Token bekommst du ganz easy, indem du auf **Reset Token** klickst. Dann bekommst du einen User-Token, den du dir auch notieren solltest:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Gib den Bot-Token auf keinen Fall weiter, damit dein Bot ungestört läuft und keine Sicherheitslücken entstehen. Der Token ist wie ein geheimer Schlüssel und darf nicht geteilt werden.
:::

Auf derselben Seite musst du ein Stück runter scrollen und die **Presence Intent**, **Server Members Intent** und **Message Content Intent** aktivieren, dann speicherst du deine Änderungen:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Bot zu deinem Discord einladen

Um den Bot einzuladen, musst du die vorher notierte Client ID in den folgenden Link an der richtigen Stelle einfügen, dann öffnest du den Link im Browser und fügst den Bot zu deinem Discord Server hinzu. So sieht das Beispiel aus:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Bot im Control Panel konfigurieren

Jetzt gibst du den vorher notierten Token und die Client ID in die vorgesehenen Felder im ZAP-Hosting Control Panel ein und klickst unten auf **Speichern**:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Danach kannst du den Bot starten. Er sollte sich innerhalb von ca. 10 Sekunden mit deinem Discord Server verbinden. 


## Fazit

Der Voicebot ist ein super nützliches und spaßiges Tool für viele Leute. Du kannst ihn entweder auf einem TeamSpeak Server oder auf Discord nutzen. Falls du noch Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂 

<InlineVoucher />