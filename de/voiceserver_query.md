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

![](https://screensaver01.zap-hosting.com/index.php/s/dNAe5T3HCYXc82A/preview)

Nachdem dies mit "OK" bestätigt wurde, wird ein Passwort angezeigt. 
Dies muss umbedingt gespeichert werden, es lässt sich später nicht mehr ändern. 

![](https://screensaver01.zap-hosting.com/index.php/s/JpX749DTFJHtiR2/preview)

## Schritt 2️⃣
Mit den nun erstellten Login Daten kann eine Verbindung z.b via [YaTQA](https://yat.qa) hergestellt werden. 
Dazu wird die Server IP, der Query Port, der Server Port sowie der Query Loginname und das dazugehörige Passwort benötigt. 
Die Server IP sowie der Query Port als auch der Server Port kann auf dem Dashboard im Webinterface eingesehen werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/m6NLQ3QNgoeJnbP/preview)

Anschließend können die Daten in YaTQA eingetragen werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/8P5ckoo2R2E5mzp/preview)

>Sofern beim ändern des Query Ports ein Fehler erscheint, muss dies in den Einstellungen noch zugelassen werden. 

Fehler:
>![](https://screensaver01.zap-hosting.com/index.php/s/39BZXzmtQ4QStzf/preview)

Lösung:
>![](https://screensaver01.zap-hosting.com/index.php/s/BdDj6WCkf9QiZyL/preview)

Mit einem Klick auf "Verbinden", lässt sich dann eine Verbindung zum Teamspeak Server herstellen:

![](https://screensaver01.zap-hosting.com/index.php/s/Nc9yL7ndy5FwjJd/preview)

Fertig ✅
