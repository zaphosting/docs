---
id: unturned-rocketmod-permissions
title: "Unturned: Server-Berechtigungen anpassen"
description: Informationen, wie du die Berechtigungen für deinen Unturned Rocketmod Server von ZAP-Hosting anpassen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Berechtigungen anpassen
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Vorbereitungen
Damit die notwendigen Config Dateien vom Server generiert werden, muss dieser erst einmal gestartet werden. Soweit der Server dann online ist, kannst du diesen wieder stoppen. Denn alle notwendigen Dateien, welche wir bzw. der Server benötigt, wurden dann erstellt.

## Config aufrufen
Die Berechtigungen werden in der "Permissions.config.xml" Datei gespeichert. Diese kannst du ganz bequem über unser Interface einsehen und bearbeiten. Klicke dafür im Interface von deinem Server auf den Reiter "Configs":

![](https://screensaver01.zap-hosting.com/index.php/s/pjTAWsPwe5beSXL/preview)

Die Config heißt "Rocket Permissions" und kann mit einem Klick auf den blauen Stift zum Bearbeiten geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/BBSQqTWMkW3fWKk/preview)

## Die Config verstehen
Die Config sieht auf den ersten Blick umständlich und komplex aus. Wir helfen dir bei dem Verständnis! Unterteilt ist die Datei in den verschiedenen Gruppen. Die Gruppen werden in der <groups> </groups> Kategorie alle angezeigt und aufgelistet.
Sprich bei "<groups>" fängt es an und bei "</groups>" hört es auf:

Anfang:

![](https://screensaver01.zap-hosting.com/index.php/s/XbeRPNcF6akd2YA/preview)

Ende:

![](https://screensaver01.zap-hosting.com/index.php/s/2morqTgtSF38YFH/preview)

Dazwischen werden dann die Gruppen jeweils dargestellt.
Der ganze Block stellt zum Beispiel eine Gruppe dar:

![](https://screensaver01.zap-hosting.com/index.php/s/cqQ6Bdwfpt2DAip/preview)

In welchem dann alle notwendigen Parameter der Gruppe zugewiesen werden.

## Berechtigungen anpassen
Innerhalb der Gruppe findest du dann auch die "Permissions" Kategorie. Wie in diesem Screenshot zu sehen ist:

![](https://screensaver01.zap-hosting.com/index.php/s/WeFXrG544oc3X77/preview)

Darin können wir nun die Berechtigungen der Gruppe anpassen. Sowie die Wartezeit angeben, wann der Befehl erneut genutzt werden kann. Angenommen, wir wollen der Gruppe das Recht geben, User zu bannen. Dann können wir dort folgendes eintragen:

![](https://screensaver01.zap-hosting.com/index.php/s/o5gc5cPCCYHRYAw/preview)

Das würde bedeutet, dass die Gruppe jetzt im Spiel Leute bannen kann und da der "Cooldown" auf 0 Sekunden gesetzt wurde, kann dies durchgängig gemacht werden.

Wollen wir der Gruppe noch das Recht geben, sich zu heilen, dann kann es wie folgt eingetragen werden:

![](https://screensaver01.zap-hosting.com/index.php/s/ykarPB6EpdxoDN7/preview)

Hierbei ist es dem User aber nur alle 3600 Sekunden möglich den Befehl zu nutzen.
Die Prozedur ist bei weiteren Rechten identisch.
Allerdings sind für einige Berechtigungen auch entsprechende Plugins notwendig.

## User der Gruppe zuweisen
Die Gruppen wurden jetzt mit den gewünschten Berechtigungen erstellt. Nun müssen aber noch User der Gruppe zugewiesen werden. Dafür wird die Steam64ID der User benötigt. Diese kann man herausfinden, indem man auf den folgenden Link geht:
https://steamid.io/

Soweit man die Steam64ID ermittelt hat, kann man diese in die Config eintragen.
Das geht hier bei dem Member Parameter:

![](https://screensaver01.zap-hosting.com/index.php/s/QCLmceYwTPwJYzf/preview)

Aussehen würde dies in einem Beispiel wie folgt:

![](https://screensaver01.zap-hosting.com/index.php/s/szfnPfqmtFBo7BA/preview)

Es ist also immer notwendig eine neue Zeile für neue User anzulegen, welche der Gruppe zugewiesen werden sollen. Soweit du alle gewünschten User eingetragen hast, kannst du die Config speichern, indem du auf den "Speichern" Button klickst. Danach den Server starten und schon bist du im Spiel der besagten Gruppe zugewiesen!
