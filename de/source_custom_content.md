---
id: source_custom_content
title: Custom Inhalte
sidebar_label: Custom Inhalte
---

## Was sind Custom Inhalte?

Einige Source-Games wie zum Beispiel Counter-Strike oder Garrys Mod sind durch ihre Vielfältigkeit bekannt geworden. Ermöglicht wurde das Ganze durch die Unterstützung von Plugins und sogenannten **Custom Inhalten**. So entwickelten sich über die Jahre diverse Spielmodi wie zum Beispiel Zombie Mod, Hide and Seek, Minigames, Jailbreak und vieles mehr. 

![img](https://screensaver01.zap-hosting.com/index.php/s/D4cfNkDdyyqH55R/preview)



Auf solchen Server werden oftmals Maps, Player Skins und Sounds die von der Community erstellt wurden benutzt. Damit Spieler auch die verwendeten Custom Inhalte vom Server benutzen bzw. sehen können müssen diese vorher erst vom Server heruntergeladen werden. Hierbei gibt es zwei Möglichkeiten:

- FastDL
- Steam Workshop

Je nach Anwendungsbereich lohnt sich die eine Option eher als die andere Optionen. Im Folgenden siehst du eine Übersicht der Unterschiede zwischen FastDL und Workshop:

|  Custom Inhalte  | FastDL | Steam Workshop |
| :--------------: | :----: | :------------: |
|       Maps       |   ✓    |       ✓        |
| Materials/Models |   ✓    |       ✗        |
|      Sounds      |   ✓    |       ✗        |



## Custom Inhalte einrichten



### FastDL

Im Folgenden wird die Einrichtung des FastDL Servers mittels eines unserer [Webspace Produkte](https://zap-hosting.com/de/shop/product/webspace/) erklärt. Allerdings kann hierfür auch eine beliebige andere Option benutzt werden die einen öffentlich zugänglichen Webserver beinhaltet. Um mit der Einrichtung zu beginnen, rufen wir das Webspace Produkt auf und öffnen die Verwaltung:

![img](https://screensaver01.zap-hosting.com/index.php/s/TaMGiFBS58WDJkt/preview)



Dort angelangt rufen wir den File-Manager auf und legen dabei die folgenden Ordner an:

![img](https://screensaver01.zap-hosting.com/index.php/s/ywx4gn9fSJoSQc2/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/jHk4grkTyaBSxrC/preview)



Als Nächstes müssen beim Webspace noch die Berechtigungen vorgenommen werden, damit das Herunterladen der Inhalte im Spiel im Anschluss auch funktioniert:

![img](https://screensaver01.zap-hosting.com/index.php/s/jd3Q7L8xLZr45P4/preview)

> Die Berechtigungen müssen für alle Ordner gesetzt werden!

Nun können die Custom Inhalte hochgeladen werden. Hierfür müssen die Dateien sowohl auf dem Server als auch auf dem FastDL(Webspace) vorhanden sein. Auf dem Gameserver werden die Dateien ungepackt hochgeladen und auf dem FastDL sollten sie als bzip2 gepackt hochgeladen werden. Hierfür eignet sich das Programm 7Zip.

Als letztes muss der FastDL Server nur noch beim Gameserver eingetragen werden. Die Konfiguration erfolgt hierbei über die **server.cfg**. Dafür müssen die folgenden Befehle zu der Config hinzugefügt werden:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Ersetze die URL durch deine ZAP Webspace URL.
```

Nach neu starten und verbinden des Servers sollten die entsprechenden Inhalte heruntergeladen werden. Das kann in der Konsole vom Spiel auch überprüft werden:

![img](https://screensaver01.zap-hosting.com/index.php/s/m7rkTna8jbXdc2R/preview)



### Steam Workshop

Im Folgenden wird die Einrichtung des Steam Workshops erklärt. Zu Beginn muss die Steam Workshop Seite aufgerufen werden. Dafür wählt ihr in Steam das entsprechende Spiel aus und ruft dort den Workshop auf. In diesem Fall nehmen wir [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections) als Beispiel. Dort angelangt klicken wir im Menüpunkt auf Durchsuchen und wählen Kollektion aus:

![img](https://screensaver01.zap-hosting.com/index.php/s/e9MkLE3cE974Lmb/preview)



Dort klicken wir nun rechts auf Kollektion und legen die Kollektion für den Gameserver an:

![img](https://screensaver01.zap-hosting.com/index.php/s/cxbwBtwbjEtpNMC/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/k7kWNYNdwirp2Nq/preview)

Danach wurde die Kollektion erfolgreich erstellt. Diese ist standardmäßig aber noch leer. Daher rufen wir nun den Workshop des Spiels wieder auf und wählen die Objekte aus, die wir hinzufügen wollen:

![img](https://screensaver01.zap-hosting.com/index.php/s/4y7D2wtHQgH9tRb/preview)


Wenn du die mit dem Zusammenstellen der Inhalte fertig bist, dann musst du im Anschluss erneut die Kollektion aufrufen und dort dann rechtsklick drücken und Seiten-URL kopieren auswählen. Aus der URL wird die ID der Kollektion benötigt, welche wie folgt aussehen kann:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Diese muss am Ende dann nur noch unter Steam Workshop in der Gameserver Verwaltung eingetragen werden:

![img](https://screensaver01.zap-hosting.com/index.php/s/XXEwq6yoANAx5gJ/preview)
