---
id: source_custom_content
title: Source Spiele: Custom Inhalte und Mods auf Gameserver installieren
description: Informationen, wie du Custom Inhalte und Mods auf deinen Source Gameserver (z. B. CSS oder Garry's Mod) von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Custom Inhalte
---

## Was sind Custom Inhalte?

Einige Source-Games wie zum Beispiel Counter-Strike oder Garrys Mod sind durch ihre Vielfältigkeit bekannt geworden. Ermöglicht wurde das Ganze durch die Unterstützung von Plugins und sogenannten **Custom Inhalten**. So entwickelten sich über die Jahre diverse Spielmodi wie zum Beispiel Zombie Mod, Hide and Seek, Minigames, Jailbreak und vieles mehr. 

![image](https://user-images.githubusercontent.com/13604413/159178680-6fd1ea06-9ee9-4bfc-a23e-2f3457800c04.png)



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

![image](https://user-images.githubusercontent.com/26007280/189977410-ceed2407-51a6-4948-9ff1-0e0a330b35b0.png)



Dort angelangt rufen wir den File-Manager auf und legen dabei die folgenden Ordner an:

![image](https://user-images.githubusercontent.com/26007280/189977431-ffb69343-cce3-4c8b-a692-852d09485dfd.png)

![image](https://user-images.githubusercontent.com/13604413/159178687-7ea690cf-0d73-4e22-a302-023be7603cef.png)



Als Nächstes müssen beim Webspace noch die Berechtigungen vorgenommen werden, damit das Herunterladen der Inhalte im Spiel im Anschluss auch funktioniert:

![image](https://user-images.githubusercontent.com/26007280/189977450-0060dae6-bfdd-4c45-a566-0720a1c20be7.png)

> Die Berechtigungen müssen für alle Ordner gesetzt werden!

Nun können die Custom Inhalte hochgeladen werden. Hierfür müssen die Dateien sowohl auf dem Server als auch auf dem FastDL(Webspace) vorhanden sein. Auf dem Gameserver werden die Dateien ungepackt hochgeladen und auf dem FastDL sollten sie als bzip2 gepackt hochgeladen werden. Hierfür eignet sich das Programm 7Zip.

Als letztes muss der FastDL Server nur noch beim Gameserver eingetragen werden. Die Konfiguration erfolgt hierbei über die **server.cfg**. Dafür müssen die folgenden Befehle zu der Config hinzugefügt werden:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Ersetze die URL durch deine ZAP Webspace URL.
```

Nach neu starten und verbinden des Servers sollten die entsprechenden Inhalte heruntergeladen werden. Das kann in der Konsole vom Spiel auch überprüft werden:

![image](https://user-images.githubusercontent.com/13604413/159178720-35ccc5ca-7367-467a-869c-5cf87a834d95.png)



### Steam Workshop

Im Folgenden wird die Einrichtung des Steam Workshops erklärt. Zu Beginn muss die Steam Workshop Seite aufgerufen werden. Dafür wählt ihr in Steam das entsprechende Spiel aus und ruft dort den Workshop auf. In diesem Fall nehmen wir [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections) als Beispiel. Dort angelangt klicken wir im Menüpunkt auf Durchsuchen und wählen Kollektion aus:

![image](https://user-images.githubusercontent.com/26007280/189977467-255c3a49-c052-4380-b998-fcbd32f6697a.png)



Dort klicken wir nun rechts auf Kollektion und legen die Kollektion für den Gameserver an:

![image](https://user-images.githubusercontent.com/26007280/189977491-4adc04dc-7c9d-4f28-94a4-6acf58daf882.png)

![image](https://user-images.githubusercontent.com/13604413/159178741-f3d5bd5a-88e7-4bbc-9d9d-5273d16c3676.png)

Danach wurde die Kollektion erfolgreich erstellt. Diese ist standardmäßig aber noch leer. Daher rufen wir nun den Workshop des Spiels wieder auf und wählen die Objekte aus, die wir hinzufügen wollen:

![image](https://user-images.githubusercontent.com/26007280/189977514-079c20d6-69ee-4459-b051-20d59a61f5f5.png)


Wenn du die mit dem Zusammenstellen der Inhalte fertig bist, dann musst du im Anschluss erneut die Kollektion aufrufen und dort dann rechtsklick drücken und Seiten-URL kopieren auswählen. Aus der URL wird die ID der Kollektion benötigt, welche wie folgt aussehen kann:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Diese muss am Ende dann nur noch unter Steam Workshop in der Gameserver Verwaltung eingetragen werden:

![image](https://user-images.githubusercontent.com/26007280/189977550-ccaf65c4-ed4c-48fc-bc45-c42b86a2688d.png)
