---
id: unturned-rocketmod-permissions
title: "Unturned: Server-Permissions anpassen"
description: "Verstehe, wie du Server-Permissions effektiv verwaltest und anpasst für mehr Kontrolle und Sicherheit → Jetzt mehr erfahren"
sidebar_label: Permissions anpassen
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Vorbereitung
Damit die nötigen Konfigurationsdateien vom Server generiert werden, muss dieser zuerst gestartet werden.  
Ist der Server online, kannst du ihn danach wieder stoppen.  
Denn alle wichtigen Dateien, die wir oder der Server brauchen, wurden dann erstellt.

## Config öffnen
Die Permissions werden in der Datei "Permissions.config.xml" gespeichert.  
Du kannst diese Datei ganz easy über unser Interface ansehen und bearbeiten.  
Klick einfach auf den Tab „Configs“ im Interface deines Servers:

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

Die Config heißt „Rocket Permissions“ und lässt sich mit einem Klick auf den blauen Stift zum Bearbeiten öffnen:

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## Config verstehen
Die Config wirkt auf den ersten Blick kompliziert und unübersichtlich.  
Wir helfen dir, sie zu checken!  
Die Datei ist in verschiedene Gruppen unterteilt.  
Alle Gruppen sind im Bereich <groups> </groups> aufgelistet.  
Sie beginnt mit "<groups>" und endet mit "</groups>":

Anfang:

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

Ende:

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

Zwischen diesen Tags findest du dann die einzelnen Gruppen.  
Zum Beispiel stellt der ganze Block eine Gruppe dar:

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

In der alle nötigen Parameter der Gruppe zugewiesen sind.

## Permissions anpassen
Innerhalb der Gruppe findest du auch den Bereich „Permissions“.  
Wie du im Screenshot siehst:

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

Hier kannst du jetzt die Rechte der Gruppe anpassen.  
Außerdem kannst du die Wartezeit einstellen, wie lange ein Befehl warten muss, bis er wieder benutzt werden kann.  
Angenommen, wir wollen der Gruppe das Recht geben, Spieler zu bannen.  
Dann tragen wir Folgendes ein:

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

Das bedeutet, die Gruppe kann jetzt ingame Leute bannen, und da der „cool down“ auf 0 Sekunden gesetzt ist, geht das ohne Pause.

Wenn wir der Gruppe außerdem das Recht geben wollen, sich selbst zu heilen, sieht das so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

Der Befehl kann dann aber nur alle 3600 Sekunden genutzt werden.  
Das Vorgehen ist bei anderen Rechten identisch.  
Für manche Permissions brauchst du allerdings passende Plugins.

## Nutzer zur Gruppe hinzufügen
Die Gruppen sind jetzt mit den gewünschten Rechten erstellt.  
Jetzt müssen noch Nutzer der Gruppe zugewiesen werden.  
Dafür brauchst du die Steam64ID der Nutzer.  
Die findest du heraus, indem du auf folgenden Link klickst:  
https://steamid.io/

Hast du die Steam64ID, kannst du sie in der Config eintragen.  
Das geht hier mit dem Member-Parameter:

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

Das sieht in einem Beispiel so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

Für jeden neuen Nutzer, der der Gruppe zugewiesen werden soll, musst du eine neue Zeile anlegen.  
Wenn du alle gewünschten Nutzer eingetragen hast, speichere die Config mit dem Button „Save“.  
Starte dann den Server neu und du bist im Spiel der Gruppe zugewiesen!

<InlineVoucher />