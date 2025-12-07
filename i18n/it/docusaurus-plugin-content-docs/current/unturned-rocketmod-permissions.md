---
id: unturned-rocketmod-permissions
title: "Unturned: Server-Permissions anpassen"
description: "Check, wie du Server-Permissions easy managst und anpasst für mehr Kontrolle und Sicherheit → Jetzt mehr erfahren"
sidebar_label: Permissions anpassen
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Vorbereitung
Damit die nötigen Config-Dateien vom Server generiert werden, muss der Server erstmal gestartet werden.  
Ist der Server online, kannst du ihn danach wieder stoppen.  
Denn so werden alle wichtigen Dateien erstellt, die wir oder der Server brauchen.

## Config öffnen
Die Permissions sind in der Datei "Permissions.config.xml" gespeichert.  
Du kannst die Datei ganz easy über unser Interface anschauen und bearbeiten.  
Klick einfach auf den Tab „Configs“ im Interface deines Servers:

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

Die Config heißt „Rocket Permissions“ und lässt sich mit einem Klick auf den blauen Stift zum Bearbeiten öffnen:

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## Config verstehen
Die Config wirkt auf den ersten Blick kompliziert und unübersichtlich.  
Wir helfen dir, sie zu checken!  
Die Datei ist in verschiedene Gruppen aufgeteilt.  
Alle Gruppen sind im Bereich <groups> </groups> gelistet.  
Das heißt, die Datei startet mit "<groups>" und endet mit "</groups>":

Anfang:

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

Ende:

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

Zwischen diesen Tags findest du dann die einzelnen Gruppen.  
Zum Beispiel steht dieser Block für eine Gruppe:

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

Hier sind dann alle wichtigen Parameter der Gruppe zugewiesen.

## Permissions anpassen
Innerhalb der Gruppe findest du auch den Bereich „Permissions“.  
Siehst du hier im Screenshot:

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

Hier kannst du jetzt die Rechte der Gruppe anpassen.  
Außerdem kannst du festlegen, wie lange der Cooldown ist, bis ein Befehl wieder genutzt werden kann.  
Angenommen, du willst der Gruppe das Recht geben, Spieler zu bannen.  
Dann trägst du Folgendes ein:

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

Das bedeutet, die Gruppe kann jetzt ingame Leute bannen, und da der Cooldown auf 0 Sekunden steht, geht das ohne Pause.

Willst du der Gruppe noch das Recht geben, sich selbst zu heilen, sieht das so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

Der Befehl kann dann aber nur alle 3600 Sekunden genutzt werden.  
Das Vorgehen ist bei anderen Rechten genauso.  
Für manche Permissions brauchst du aber passende Plugins.

## User zur Gruppe hinzufügen
Die Gruppen mit den gewünschten Rechten sind jetzt erstellt.  
Jetzt müssen noch User der Gruppe zugewiesen werden.  
Dafür brauchst du die Steam64ID der User.  
Die findest du raus, wenn du auf diesen Link klickst:  
https://steamid.io/

Hast du die Steam64ID, kannst du sie in der Config eintragen.  
Das geht mit dem Parameter Member:

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

Das sieht dann in einem Beispiel so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

Für jeden neuen User, der in die Gruppe soll, musst du eine neue Zeile anlegen.  
Wenn du alle gewünschten User eingetragen hast, speichere die Config mit dem Button „Save“.  
Dann startest du den Server neu und bist im Spiel der Gruppe zugewiesen!

<InlineVoucher />