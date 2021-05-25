---
id: webspace_htaccess_discord
title: Webspace: Discord Weiterleitung via Domain einrichten
description: Informationen, wie du eine Discord Weiterleitung via Domain bei deinem Webspace von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Discord Weiterleitung via Domain
---

## Discord Server via Domain beitreten

>Es wird vorausgesetzt das eine eigene Domain als auch ein eigener Webserver/Webspace vorhanden ist. 

Damit über eine eigene Domain ein Discord Server erreicht werden kann, wird eine .htaccess Dateil mit einer entsprechenden Weiterleitungsregel benötigt. 

Es soll zum Beispiel über die Domain beispiel-example.de/discord eine Weiterleitung zum Discord Server ermöglich werden. 

### Schritt 1️⃣
Anlegen des Unterverzeichnis "discord" auf dem Webspace/Webserver: 

![](https://screensaver01.zap-hosting.com/index.php/s/zqQ7pbXdBAbiZt4/preview)

### Schritt 2️⃣
Anlegen der ".htaccess" Datei auf dem Webspace/Webserver: 

![](https://screensaver01.zap-hosting.com/index.php/s/JXN57oAZTeCTe8j/preview)

### Schritt 3️⃣
Erstellen der Weiterleitungsregel in der ".htaccess" Datei:

![](https://screensaver01.zap-hosting.com/index.php/s/Ame6nxmBdgNNM2d/preview)

Wichtig bei der Weiterleitungsregel ist das die ursprüngliche Domain durch eine andere "getauscht" bzw. weitergeleitet wird. 
Es muss also in der Weiterleitungsregel "beispiel-example.de" durch die eigene Domain ersetzt werden und "https://discord.gg/A6e4jyg" durch die eigene Discord Server Adresse. 

```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]

```
Werte die verändert werden müssen: 

```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?***EIGENE-DOMAIN***
RewriteRule (.*) ***EIGENE-DISCORD-DOMAIN*** [R=301,L]
```
Nach dem speichern, ist die Weiterleitung direkt aktiv.

### Schritt 4️⃣
Weiterleitung testen:

Wird nun die Domain/discord aufgerufen, so sollte eine Weiterleitung zu Discord erfolgen. 

Fertig ✅
