---
id: fivem_txadmin_setup
title: txAdmin Einrichtung
sidebar_label: txAdmin Einrichtung
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/n3RoiExrvN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Was genau ist txAdmin?

txAdmin ist ein Interface für FiveM Server, welches unter anderem ein Server-Installer, Admin- und Management Interface ist.

## Ersteinrichtung

Nachdem wir unseren txAdmin Server gemietet haben, wird dieser im Interface wie folgt angezeigt:

![image](https://user-images.githubusercontent.com/13604413/159169306-97751551-ef77-47a1-9fe2-acf2a437c16c.png)

Hier öffnen wir das txAdmin Interface nun über den Link im Interface:

![image](https://user-images.githubusercontent.com/13604413/159169313-5e9e3c01-1c48-48e5-855e-6126c39bfdf9.png)

Im txAdmin Interface geben wir nun unseren Benutzer und unseres Passwort an, welches unter dem Link steht und melden uns an.

Nach der Anmeldung landen wir direkt im txAdmin Setup, hier können wir nun auswählen, wie unser Server heißt:

> Diese Einstellung ist **nicht** der Server Name in der Serverliste, sondern ein interner Name für Ingame Meldungen und den Discord Webhook.

![image](https://user-images.githubusercontent.com/13604413/159169329-6b9670f4-e472-4619-8451-4dc8158a33cf.png)

Nun können wir auswählen, wie genau wir den Server Einrichten wollen, hier gibt es mehrere Optionen:

![image](https://user-images.githubusercontent.com/13604413/159169335-a4a52bc6-020e-4116-985c-9145ae7d5d84.png)

### Local Server Data

Diese Einstellung solltest du benutzen, falls du bereits einen Server mit txAdmin betrieben hast und diesen nun bei uns betreiben möchtest, du kannst in diesem Fall die Daten einfach per FTP Hochladen, und den Pfad davon im Setup angeben:

![image](https://user-images.githubusercontent.com/13604413/159169346-9d8536fc-8fe2-4746-aa78-67b54b60c89c.png)


### Popular Template

Popular Templates sind vorgefertigte Packs, welche direkt benutzt werden können, dies ist der einfachste weg, den FiveM Server direkt benutzen zu können, falls dies dein erster Server ist, wird diese Option empfohlen:

![image](https://user-images.githubusercontent.com/13604413/159169359-1a0e1e9e-17c3-4d60-9da7-7fd6362da8b7.png)

Nun können wir einen eigenen Pfad für das Pack generieren, generell würden wir empfehlen, diesen Pfad Standard zu lassen.

![image](https://user-images.githubusercontent.com/13604413/159169394-3fc332b4-4537-46cf-bd25-57235783c843.png)


Nachdem wir das bestätigt haben, landen wir sofort im Recipe Deployer, falls Änderungen am Recipe vorgenommen werden sollen, kann dies nun getan werden, ansonsten kann das Ganze einfach mit dem "Next" Button bestätigt werden.


Falls eigene Datenbank-Einstellungen oder License Key genutzt werden sollen, kann dies nun geändert werden, wir empfehlen, die Datenbankinformationen nicht zu verändern.

![image](https://user-images.githubusercontent.com/13604413/159169403-1909153c-67ac-4b6b-9623-7d8cf6f0751b.png)



Fast fertig! Nun können wir noch die letzten Änderungen in der server.cfg vornehmen, nun drücken wir einfach nur noch "Save & Run Server", und der FiveM Server wird automatisch starten!


### Remote URL Template

Falls eine Template aufgespielt werden soll, welche in txAdmin selbst nicht verlinkt ist, kann mit dieser Funktion ein eigenes Recipe an gegeben werden, welches auf dem Server ausgeführt wird.

### Custom Template

Diese Option ist für Benutzer gedacht, welche ein eigenes Recipe bereits erstellt haben, und dieses erneut laden möchten.

### Zusätzliche Unterstützung

Für txAdmin-spezifischen Support kontaktiere bitte das txAdmin-Team über https://txadm.in/ oder https://discord.gg/txAdmin/
