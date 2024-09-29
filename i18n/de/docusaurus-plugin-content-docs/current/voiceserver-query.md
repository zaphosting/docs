---
id: voiceserver-query
title: "Voiceserver: Teamspeak Query Login einrichten"
description: Informationen, wie du einen TS Query Login für deinen Teamspeak Server von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Query Login
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Teamspeak Query Login

<InlineVoucher />

### Selbst gehosteter Teamspeak-Server

Wenn der Teamspeak Server auf dem eigenen vServer oder Rootserver über unser Webinterface gehostet wird, kann der normale "Server Admin Query" Login genutzt werden. 
Die Logindaten sind bei der Teamspeak Instanz im Webinterface verfügbar. 

### Gemieteter Teamspeak Server von ZAP-Hosting

Bei einem direkt gemieteten Teamspeak Server steht aus Sicherheitsgründen der "Server Admin Query" Login nicht zur Verfügung. 
Es kann jedoch wie folgt ein eigener Query Login erstellt werden, sofern man Admin Rechte auf seinem Teamspeak Server besitzt. 

>Wichtig: Die Funktionen wie Snapshot einspielen, Slots/Ports ändern und ähnliches stehen unter anderem aus Sicherheitsgründen nicht zur Verfügung.

## Schritt 1: 
Um einen eigenen Query Login zu erstellen, muss im Teamspeak Client unter Extras der Punkt "Server Query Login" angeklickt werden.
Anschließend muss ein Name für den Login eingetragen werden, dieser ist auch gleichzeitig der Login Name z. B. "MeinQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/eweyFfpToxgc8zz/preview)

Nachdem dies mit "OK" bestätigt wurde, wird ein Passwort angezeigt. 
Dies muss unbedingt gespeichert werden, es lässt sich später nicht mehr ändern. 

![](https://screensaver01.zap-hosting.com/index.php/s/46ZMkiekeTKe2px/preview)

## Schritt 2:
Mit den nun erstellten Login Daten kann eine Verbindung z. B. via [YaTQA](https://yat.qa) hergestellt werden. 
Dazu wird die Server IP, der Query Port, der Server Port sowie der Query Loginname und das dazugehörige Passwort benötigt. 
Die Server IP sowie der Query Port als auch der Server Port kann auf dem Dashboard im Webinterface eingesehen werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/koneCDCyRRar8CC/preview)

Anschließend können die Daten in YaTQA eingetragen werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/Jesm3QmyAGz4dws/preview)

>Sofern beim ändern des Query Ports ein Fehler erscheint, muss dies in den Einstellungen noch zugelassen werden. 

Fehler:
>![](https://screensaver01.zap-hosting.com/index.php/s/yZTy5FG3Cz7imbk/preview)

Lösung:
>![](https://screensaver01.zap-hosting.com/index.php/s/SenjCbzc8eyPgP7/preview)

Mit einem Klick auf "Verbinden", lässt sich dann eine Verbindung zum Teamspeak Server herstellen:

![](https://screensaver01.zap-hosting.com/index.php/s/NZ4Epk4kNLiRjZt/preview)
