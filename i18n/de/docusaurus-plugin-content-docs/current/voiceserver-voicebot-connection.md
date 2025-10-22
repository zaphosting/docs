---
id: voiceserver-voicebot-connection
title: "Voiceserver: Deinen Voicebot mit deinem Voiceserver verbinden"
description: "Entdecke, wie du deinen Voicebot mit TeamSpeak und Discord verbindest für nahtlose Kommunikation und Steuerung → Jetzt mehr erfahren"
sidebar_label: Verbindung zum Voiceserver
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Einführung

Du möchtest deinen Voicebot mit deinem TeamSpeak-Server verbinden, weißt aber noch nicht genau, wie das geht? Kein Stress, wir erklären dir hier Schritt für Schritt, wie du das machst!



## Bot mit deinem TeamSpeak verbinden

Um deinen Voicebot mit deinem TeamSpeak 3 Server zu verbinden, musst du ihn im Control Panel aufrufen. Dann gehst du links auf **Server**, so wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Jetzt kannst du unter **Server** einen TeamSpeak auswählen, wenn dieser auch bei deinem Account gebucht ist. Falls dein Server extern gehostet wird, kannst du dort auch **Custom Teamspeak Server** auswählen.

Die Daten kannst du dann unten eingeben, einfach speichern und der Voicebot verbindet sich mit deinem TeamSpeak 3 Server. Hier ein Beispiel:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Bot mit deinem Discord verbinden

Um deinen Voicebot mit Discord zu verbinden, gehst du auf **Server** und wählst dann **Discord** aus.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Jetzt musst du den **Discord Bot Token** und die **Discord Bot Client ID** eingeben. Danach verbindet sich der Voicebot mit deinem Discord-Server.


## So bekommst du deinen Discord Bot Token und die Client ID

Da dein Discord-Server keine direkte IP-Adresse oder Port hat, gibt es ein paar Schritte, die du vorbereiten musst, bevor du deinen Bot auf einem Discord-Server nutzen kannst.


### Erstellen einer Discord-Anwendung

Als Erstes musst du eine Discord-Anwendung erstellen. Dein Bot wird dann dieser Anwendung zugewiesen und agiert unter deren Namen. Um so eine Anwendung zu erstellen, geh bitte auf [das Discord Developer Portal](https://discord.com/developers/applications/).

Jetzt erstellst du eine neue Anwendung, indem du auf **New Application** klickst und kannst ihr einen Namen geben, wie hier zu sehen:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Dann erstellst du die Anwendung mit einem Klick auf **Create**. Für die nächsten Schritte solltest du dir jetzt die Application ID notieren:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Bot konfigurieren und Token holen

Beim Erstellen der Anwendung wird automatisch auch ein Bot erstellt. Den Token bekommst du ganz einfach, indem du auf **Reset Token** klickst. Dann erhältst du einen User-Token, den du dir unbedingt notieren solltest:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Gib den Bot-Token niemals an Dritte weiter, damit dein Bot ungestört läuft und keine Sicherheitslücken entstehen. Der Token ist wie ein geheimer Schlüssel und darf nicht geteilt werden.
:::

Auf derselben Seite musst du ein Stück nach unten scrollen und die **Presence Intent**, **Server Members Intent** und **Message Content Intent** aktivieren, dann speicherst du deine Änderungen:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Bot zu deinem Discord einladen

Um den Bot einzuladen, musst du die zuvor notierte Client ID an der passenden Stelle in den folgenden Link einfügen, dann öffnest du den Link im Browser und fügst den Bot deinem Discord-Server hinzu. So sollte das Beispiel aussehen:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Bot im Control Panel konfigurieren

Jetzt trägst du den zuvor notierten Token und die Client ID in die vorgesehenen Felder im ZAP-Hosting Control Panel ein und klickst unten auf **Speichern**:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Danach kannst du den Bot starten. Er sollte sich innerhalb von ca. 10 Sekunden mit deinem Discord-Server verbinden. 


## Fazit

Der Voicebot ist ein super nützliches und spaßiges Tool für viele Leute. Du kannst ihn entweder auf einem TeamSpeak-Server oder auf Discord nutzen. Falls du noch Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂 

<InlineVoucher />