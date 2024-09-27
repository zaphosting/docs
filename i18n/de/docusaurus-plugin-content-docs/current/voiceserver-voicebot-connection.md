---
id: voiceserver-voicebot-connection
title: "Voiceserver: Verknüpfung deines Voicebots mit einem Voiceserver"
description: Informationen, wie du einen Voicebot mit deinem Teamspeak/Discord Server von ZAP-Hosting verbinden kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Verknüpfung mit Voiceserver
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Voiceserver mit deinem TeamSpeak verbinden

Um deinen Voicebot mit deinem Ts3 zu verbinden, musst du diesen im Interface aufrufen. Im Anschluss gehst du links auf die **Server-Einstellungen**.

![](https://screensaver01.zap-hosting.com/index.php/s/33GFSgBFt7EqE8r/preview)

Nun kannst du unter **Server-Einstellungen** einen Ts3 auswählen, falls dieser ebenfalls mit deinem Account gebucht worden ist. Sollte dieser extern gehostet sein, kannst du dort **Anderer Teamspeak Server** auswählen.

Im Anschluss können unten die Daten eingetragen werden. Dann nur noch abspeichern und schon verbindet sich der Voicebot mit deinem Ts3 Server.

![](https://screensaver01.zap-hosting.com/index.php/s/DP3FmBCPTqorRDt/preview)


## Voicebot mit deinem Discord verbinden

Um deinen Voicebot mit deinem Discord zu verbinden, musst du dich in die Servereinstellungen begeben. Unter **Server-Einstellungen** musst du dann **Discord** auswählen.


![](https://screensaver01.zap-hosting.com/index.php/s/pCKXSZFoibySJBD/preview)

Im Anschluss muss der **Discord Bot Token** und die **Discord Bot Client-ID** eingetragen werden. Anschließend verbindet sich der Voicebot mit deinem Discordserver.


## Discord Bot Token/Id besorgen

Da dein Discordserver keine direkte IP-Adresse oder einen Port hat, sind ein paar Schritte zur Vorbereitung notwendig, bevor du deinen Bot auf einem Discordserver verwenden kannst.

### Schritt 1: Eine Discord-Anwendung erstellen
Als Erstes musst du eine Discord-Anwendung erstellen. Dein Bot wird dieser anschließend zugeordnet und agiert unter deren Namen. Um eine solche Anwendung zu erstellen, klicke bitte auf diesen Link: https://discordapp.com/developers/applications/me/

Nun erstellst du per Klick auf **New App** eine neue Anwendung.
Jetzt kannst du einen Namen vergeben:

![](https://screensaver01.zap-hosting.com/index.php/s/eFMoxX5pjrwoMcP/preview)

Anschließend erstellst du die App mit einem Klick auf **Create App**. Für die folgenden Schritte notiere dir bitte schon jetzt die Client-ID:

![](https://screensaver01.zap-hosting.com/index.php/s/NXH4m7CLEQkNq6x/preview)


### Schritt 2: Einen Bot-User erstellen
Deine Anwendung braucht jetzt noch einen User, den der Bot nutzen kann, um sich mit deinem Server zu verbinden.
Diesen erstellst du ganz einfach per Klick auf **Create a Bot User**. Dann erhältst du einen User-Token. Bitte notiere dir auch diesen:

![](https://screensaver01.zap-hosting.com/index.php/s/kDPgqQSEe3FJZd8/preview)

>**Wichtig: Bitte verrate den Bot-Token niemandem, damit dein Bot ungestört arbeiten kann. Der Token ist wie ein geheimer Schlüssel.**

### Schritt 3: Den Bot zum Server einladen
Um den Bot einzuladen, musst du die vorher notierte Client-ID in folgenden Link an der entsprechenden Stelle einfügen und den Link dann in deinem Browser aufrufen:

>**https://discordapp.com/oauth2/authorize?&client_id=CLIENT_ID&scope=bot&permissions=0**

### Schritt 4: Das Webinterface konfigurieren
Nun fügst du den vorher notierten Token sowie die Client-ID noch in die dafür vorgesehenen Felder im ZAP-Hosting Webinterface ein und drückst auf **Speichern**.
Anschließend kannst du den Bot starten. Er sollte sich dann innerhalb von ca. 10 Sekunden mit deinem Discord-Server verbinden. Falls du Hilfe brauchst, wende dich gerne an unseren Support!
