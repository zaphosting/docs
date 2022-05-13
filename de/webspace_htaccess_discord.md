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

![Bildschirmfoto vom 2022-05-13 05-40-52](https://user-images.githubusercontent.com/61953937/168206898-35423959-dbde-4dc1-afbf-13d366201a44.png)

### Schritt 2️⃣
Anlegen der ".htaccess" Datei auf dem Webspace/Webserver: 

![Bildschirmfoto vom 2022-05-13 05-41-14](https://user-images.githubusercontent.com/61953937/168206912-705bc4e8-c1a8-4523-87a8-62a1a3b59802.png)

![Bildschirmfoto vom 2022-05-13 05-41-31](https://user-images.githubusercontent.com/61953937/168206923-59fcc59a-ae79-447f-962f-9e7a3f8062eb.png)

### Schritt 3️⃣
Erstellen der Weiterleitungsregel in der ".htaccess" Datei:

![Bildschirmfoto vom 2022-05-13 05-40-23](https://user-images.githubusercontent.com/61953937/168206933-f9ac7d75-420a-4760-99e3-77d1493fba42.png)

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
