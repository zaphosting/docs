---
id: voiceserver_query
title: Teamspeak Query Login
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

![](https://screensaver01.zap-hosting.com/index.php/s/NrZYgJ7mDxNqri3/preview)

Nachdem dies mit "OK" bestätigt wurde, wird ein Passwort angezeigt. 
Dies muss umbedingt gespeichert werden, es lässt sich später nicht mehr ändern. 

![](https://screensaver01.zap-hosting.com/index.php/s/FraFYW3rEoEowHX/preview)

## Schritt 2️⃣
Mit den nun erstellten Login Daten kann eine Verbindung z.b via [YaTQA](https://yat.qa) hergestellt werden. 
Dazu wird die Server IP, der Query Port, der Server Port sowie der Query Loginname und das dazugehörige Passwort benötigt. 
Die Server IP sowie der Query Port als auch der Server Port kann auf dem Dashboard im Webinterface eingesehen werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/BFoLXZK64eYRXMX/preview)

Anschließend können die Daten in YaTQA eingetragen werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/iZc498dySA7Zcn7/preview)

>Sofern beim ändern des Query Ports ein Fehler erscheint, muss dies in den Einstellungen noch zugelassen werden. 
Fehler:

>![](https://screensaver01.zap-hosting.com/index.php/s/N85dmTQM7bjEBEQ/preview)

>Einstellung:

>![](https://screensaver01.zap-hosting.com/index.php/s/rMj2DG9siZYqQPS/preview)

Mit einem Klick auf "Verbinden", lässt sich dann eine Verbindung zum Teamspeak Server herstellen:

![](https://screensaver01.zap-hosting.com/index.php/s/E7XwBrtfofD2wLS/preview)

Fertig ✅
