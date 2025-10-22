---
id: source-custom-content
title: Installation von Custom Content und Mods auf Gameservern
description: "Entdecke, wie Custom Content das Gameplay in Source-Spielen wie Counter-Strike und Garry's Mod mit Maps, Skins und Sounds verbessert → Jetzt mehr erfahren"
sidebar_label: Custom Content
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Was ist Custom Content?

Einige Source-Spiele wie Counter-Strike oder Garry's Mod sind bekannt für ihre Vielfalt. Das wurde erst durch die Unterstützung von Plugins und **Custom Content** möglich. Über die Jahre wurden verschiedene Spielmodi entwickelt, wie Zombie Mod, Hide and Seek, Minigames, Jailbreak und vieles mehr.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

Solche Server nutzen oft von der Community erstellte Maps, Spieler-Skins und Sounds. Damit Spieler den Custom Content des Servers nutzen oder sehen können, muss der Content zuerst vom Server heruntergeladen werden. Hier gibt es zwei Möglichkeiten:

- FastDL
- Steam Workshop

Je nach Anwendungsbereich ist die eine Option sinnvoller als die andere. Unten findest du eine Übersicht der Unterschiede zwischen FastDL und Workshop:

|  Custom Inhalte  | FastDL | Steam Workshop |
| :--------------: | :----: | :------------: |
|       Maps       |   ✓    |       ✓        |
| Materialien/Modelle |   ✓    |       ✗        |
|      Sounds      |   ✓    |       ✗        |



## Custom Content einrichten



### FastDL

Im Folgenden wird die Einrichtung des FastDL-Servers mit einem unserer [Webspace-Produkte](https://zap-hosting.com/en/shop/product/webspace/) erklärt. Du kannst aber auch jede andere Option nutzen, die einen öffentlich zugänglichen Webserver bereitstellt. Für den Start der Einrichtung öffnen wir das Webspace-Produkt und gehen in die Verwaltung:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



Dort öffnen wir den Dateimanager und erstellen folgende Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



Anschließend muss der Webspace so berechtigt werden, dass der Download des Contents im Spiel reibungslos funktioniert:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
Die Berechtigungen müssen für alle Ordner gesetzt werden!
:::

Jetzt kann der Custom Content hochgeladen werden. Die Dateien müssen sowohl auf dem Server als auch auf dem FastDL(Webspace) verfügbar sein. Auf dem Gameserver werden die Dateien entpackt hochgeladen, auf dem FastDL sollten sie gepackt als bzip2 hochgeladen werden. Dafür empfehlen wir das Programm 7Zip.

Zum Schluss muss der FastDL-Server nur noch im Gameserver angegeben werden. Die Konfiguration erfolgt über die **server.cfg**. Dafür müssen folgende Befehle in die Config eingefügt werden:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Ersetze die URL mit deiner ZAP-Webspace-URL.
```

Nach einem Neustart und dem Verbinden mit dem Server sollte der entsprechende Content heruntergeladen werden. Das kannst du auch in der Konsole des Spiels überprüfen:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

Im Folgenden wird die Einrichtung des Steam Workshops erklärt. Zuerst muss die Steam Workshop-Seite geöffnet werden. Dazu wählst du das passende Spiel in Steam aus und öffnest dort den Workshop. Wir nehmen hier [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections) als Beispiel. Dort klickst du auf den Menüpunkt Browse und wählst Collection aus:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

Dort klickst du mit der rechten Maustaste auf Collection und erstellst die Collection für deinen Gameserver:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

Die Collection wurde nun erfolgreich erstellt, ist aber standardmäßig noch leer. Deshalb öffnest du jetzt nochmal den Workshop des Spiels und wählst die Objekte aus, die du hinzufügen möchtest:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

Wenn du fertig bist mit Sammeln, gehst du zurück zur Collection, klickst mit der rechten Maustaste und wählst Copy Page URL. Die ID der Collection brauchst du aus der URL, die so aussehen kann:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Diese ID musst du dann im Steam Workshop in deiner Gameserver-Verwaltung eintragen:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />