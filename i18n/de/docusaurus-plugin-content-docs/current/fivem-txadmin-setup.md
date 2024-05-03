---
id: fivem-txadmin-setup
title: "FiveM: txAdmin Einrichtung"
description: Informationen zur Einrichtung des TxAdmin Interfaces für FiveM Gameserver von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: txAdmin Einrichtung
---

import YouTube from '@site/src/components/YouTube/YouTube';



## Einführung
txAdmin ist ein komplett kostenloses, voll ausgestattetes Web-Panel, um deinen FiveM-Server zu verwalten und zu überwachen. Es bietet eine Vielzahl von Funktionen, die darauf ausgelegt sind, die Verwaltung eines FiveM-Servers so einfach wie möglich zu machen. Die Einrichtung von txAdmin ist völlig kostenlos, beginne deine Reise mit dem einfachsten und doch funktionalsten Web-Panel für FiveM-Server.

<YouTube videoId="n3RoiExrvN0" title="Einrichten eines txAdmin FiveM Servers in nur 5 Minuten!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst?  Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>



## Ersteinrichtung
Nachdem wir unseren txAdmin Server gemietet haben, wird dieser im Interface wie folgt angezeigt:

![image](https://user-images.githubusercontent.com/13604413/159169306-97751551-ef77-47a1-9fe2-acf2a437c16c.png)

Hier öffnen wir das txAdmin Interface nun über den Link im Interface:

![image](https://user-images.githubusercontent.com/13604413/159169313-5e9e3c01-1c48-48e5-855e-6126c39bfdf9.png)

Im txAdmin Interface geben wir nun unseren Benutzer und unser Passwort an, welches unter dem Link steht und melden uns an.

Nach der Anmeldung landen wir direkt im txAdmin Setup, hier können wir nun auswählen, wie unser Server heißt:

:::info
Diese Einstellung ist **nicht** der Server Name in der Serverliste, sondern ein interner Name für im Spiel Meldungen und den Discord Webhook.
:::

![image](https://user-images.githubusercontent.com/13604413/159169329-6b9670f4-e472-4619-8451-4dc8158a33cf.png)

Nun können wir auswählen, wie genau wir den Server einrichten wollen, hier gibt es mehrere Optionen:

![image](https://user-images.githubusercontent.com/13604413/159169335-a4a52bc6-020e-4116-985c-9145ae7d5d84.png)

### Local Server Data

Diese Einstellung solltest du benutzen, falls du bereits einen Server mit txAdmin betrieben hast und diesen nun bei uns betreiben möchtest, du kannst in diesem Fall die Daten einfach per FTP Hochladen, und den Pfad davon im Setup angeben:

![image](https://user-images.githubusercontent.com/13604413/159169346-9d8536fc-8fe2-4746-aa78-67b54b60c89c.png)


### Popular Template

Popular Templates sind vorgefertigte Packs, welche direkt benutzt werden können, dies ist der einfachste weg, den FiveM Server direkt benutzen zu können, falls dies dein erster Server ist, wird diese Option empfohlen:

![image](https://github.com/zaphosting/docs/assets/13604413/1363dc9c-bd9e-4aea-86d5-a85e989b06f3)

Nun können wir einen eigenen Pfad für das Pack generieren, generell würden wir empfehlen, diesen Pfad Standard zu lassen.

![image](https://user-images.githubusercontent.com/13604413/159169394-3fc332b4-4537-46cf-bd25-57235783c843.png)


Nachdem wir das bestätigt haben, landen wir sofort im Recipe Deployer, falls Änderungen am Recipe vorgenommen werden sollen, kann dies nun getan werden, ansonsten kann das Ganze einfach mit dem "Next" Button bestätigt werden.


Falls eigene Datenbank-Einstellungen oder License Key genutzt werden sollen, kann dies nun geändert werden, wir empfehlen, die Datenbankinformationen nicht zu verändern.

![image](https://user-images.githubusercontent.com/13604413/159169403-1909153c-67ac-4b6b-9623-7d8cf6f0751b.png)



Fast fertig! Jetzt können wir noch die letzten Änderungen in der server.cfg vornehmen, nun drücken wir einfach nur noch "Save & Run Server", und der FiveM Server wird automatisch starten!


### Remote URL Template

Falls ein Template aufgespielt werden soll, welche in txAdmin selbst nicht verlinkt ist, kann mit dieser Funktion ein eigenes Recipe angegeben werden, welches auf dem Server ausgeführt wird.

### Custom Template

Diese Option ist für Benutzer gedacht, welche ein eigenes Recipe bereits erstellt haben, und dieses erneut laden möchten.

### Zusätzliche Unterstützung

Für txAdmin-spezifischen Support kontaktiere bitte das txAdmin-Team über https://txadm.in/ oder https://discord.gg/txAdmin/
