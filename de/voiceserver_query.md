---
id: voiceserver_query
title: Teanspeak Server: Teamspeak Query Login einrichten
description: Informationen, wie du einen TS Query Login für deinen Teamspeak Server von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Teamspeak Query Login
---

## Teamspeak Query Login

### Selbst gehosteter Teamspeak-Server

Wenn der Teamspeak Server auf dem eigenen vServer oder Root Server über unser Webinterface gehostet wird, kann der normale "Server Admin Query" Login genutzt werden. 
Die Login Daten sind bei der Teamspeak Instanz im Webinterface verfügbar. 

### Gemieteter Teamspeak Server von ZAP-Hosting

Bei einem direkt gemieteten Teamspeak Server steht aus Sicherheitsgründen der "Server Admin Query" Login nicht zur Verfügung. 
Es kann jedoch wie folgt ein eigener Query Login erstellt werden, sofern man Admin Rechte auf seinem Teamspeak Server besitzt. 

>Wichtig: Die Funktionen wie Snapshot einspielen, Slots/Ports ändern und ähnliches stehen unter anderem aus Sicherheitsgründen nicht zur Verfügung.

## Schritt 1️⃣: 
Um einen eigenen Query Login zu erstellen, muss im Teamspeak Client unter Extras der Punkt "Server Query Login" angeklickt werden.
Anschließend muss ein Name für den Login eingetragen werden, dieser ist auch gleichzeit der Login Name z.b "MeinQueryLogin":

![image](https://user-images.githubusercontent.com/13604413/159177367-e085ff23-c3e1-4afc-b4a5-44d2c3bc9fd3.png)

Nachdem dies mit "OK" bestätigt wurde, wird ein Passwort angezeigt. 
Dies muss umbedingt gespeichert werden, es lässt sich später nicht mehr ändern. 

![image](https://user-images.githubusercontent.com/13604413/159177369-80ce4ec5-e9b5-4ff4-a3e5-2afac1aabdfd.png)

## Schritt 2️⃣
Mit den nun erstellten Login Daten kann eine Verbindung z.b via [YaTQA](https://yat.qa) hergestellt werden. 
Dazu wird die Server IP, der Query Port, der Server Port sowie der Query Loginname und das dazugehörige Passwort benötigt. 
Die Server IP sowie der Query Port als auch der Server Port kann auf dem Dashboard im Webinterface eingesehen werden: 

![image](https://user-images.githubusercontent.com/13604413/159177371-139b9e2f-b7ab-46dd-92df-ac3785958b48.png)

Anschließend können die Daten in YaTQA eingetragen werden: 

![image](https://user-images.githubusercontent.com/13604413/159177374-86e07d75-d065-4c5b-99e1-aada760e7b75.png)

>Sofern beim ändern des Query Ports ein Fehler erscheint, muss dies in den Einstellungen noch zugelassen werden. 

Fehler:
>![image](https://user-images.githubusercontent.com/13604413/159177378-68e3638a-098f-4a6b-9903-3525e773d87f.png)

Lösung:
>![image](https://user-images.githubusercontent.com/13604413/159177381-9ec4269c-e05e-44c4-b0ae-662ff2f580ca.png)

Mit einem Klick auf "Verbinden", lässt sich dann eine Verbindung zum Teamspeak Server herstellen:

![image](https://user-images.githubusercontent.com/13604413/159177383-0dcccdcd-cc45-46e5-a6ed-27dc167aca5e.png)

Fertig ✅
