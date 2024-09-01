---
id: webspace-htaccess-discord
title: "Webspace: Discord Weiterleitung via Domain einrichten"
description: Informationen, wie du eine Discord Weiterleitung via Domain bei deinem Webspace von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Discord Weiterleitung
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Discord Server via Domain beitreten

>Es wird vorausgesetzt das eine eigene Domain als auch ein eigener Webserver/Webspace vorhanden ist. 

Damit über eine eigene Domain ein Discord Server erreicht werden kann, wird eine .htaccess Datei mit einer entsprechenden Weiterleitungsregel benötigt. 

Es soll zum Beispiel über die Domain beispiel-example.de/discord eine Weiterleitung zum Discord Server ermöglicht werden. 

### Schritt 1
Anlegen des Unterverzeichnis "discord" auf dem Webspace/Webserver: 

![](https://screensaver01.zap-hosting.com/index.php/s/3CqRrTP9gAxKctn/preview)

### Schritt 2
Anlegen der ".htaccess" Datei auf dem Webspace/Webserver: 

![](https://screensaver01.zap-hosting.com/index.php/s/fx4MGDpBoHKWgX5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/GBzeab3DFiDbNqc/preview)

### Schritt 3
Erstellen der Weiterleitungsregel in der ".htaccess" Datei:

![](https://screensaver01.zap-hosting.com/index.php/s/y2HKtxgE7QNKF4e/preview)

Wichtig bei der Weiterleitungsregel ist, dass die ursprüngliche Domain durch eine andere "getauscht" bzw. weitergeleitet wird. 
Es muss also in der Weiterleitungsregel "beispiel-example.de" durch die eigene Domain ersetzt werden und "https://discord.gg/A6e4jyg" durch die eigene Discord Server Adresse. 

```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]

```
Werte, die verändert werden müssen: 

```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?***EIGENE-DOMAIN***
RewriteRule (.*) ***EIGENE-DISCORD-DOMAIN*** [R=301,L]
```
Nach dem Speichern ist die Weiterleitung direkt aktiv.

### Schritt 4
Weiterleitung testen:

Wird nun die Domain/Discord aufgerufen, so sollte eine Weiterleitung zu Discord erfolgen. 
