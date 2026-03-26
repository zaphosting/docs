---
id: dedicated-iso
title: "Dedicated Server: Eigene ISO"
description: "Entdecke, wie du ISO-Dateien einfach per iLO oder Remote-Konsole mountest, um deinen Server effizient zu booten → Jetzt mehr erfahren"
sidebar_label: Eigene ISO
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Willst du eine ISO mounten? Vielleicht eine von uns oder lieber deine eigene? Kein Problem! Wir bieten eine große Auswahl an ISO-Dateien und noch mehr Optionen.

:::danger Auswahl und Nutzung von ISO-Dateien
Wenn du deine eigene ISO (OS) nutzt, die wir nicht aktiv anbieten, können wir bei möglichen Problemen keine Funktionsgarantie übernehmen.
:::



## Verfügbare Mount-Optionen
Es gibt zwei Wege, deine eigene ISO-Datei zu mounten. Ein Neustart des Servers ist immer nötig, damit die Datei geladen wird. Grundsätzlich gibt es keine Einschränkungen beim Mounten, wichtig ist nur, dass die ISO bootfähig ist.

## Mounten über iLO
Öffne dein iLO Management Interface und gehe zu „Virtual“ Media
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Gib die URL ein, die auf die ISO-Datei zeigt, die du nutzen möchtest. Achte darauf, dass der Link mit .iso endet.
* Drücke auf „Insert Media“
* Klicke auf „Server Reset“, damit dein System neu startet.

Deine ISO-Datei wird jetzt geladen.

## Mounten über Remote-Konsole

**HTML5-Konsole**
Du kannst die Datei ganz easy direkt in der Remote-Konsole mounten:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Klick auf das Disc-Symbol
* Wähle „CD/DVD“
* Entscheide dich zwischen „Scripted media URL“ oder „Local .iso File“

Der Unterschied: Bei „Scripted media URL“ mountest du eine ISO, die auf einem Server/Webspace liegt. Bei „Local *.iso File“ wählst du eine Datei direkt von deinem PC, ohne sie hochladen zu müssen.

Nach der Auswahl deiner ISO-Datei musst du den Server neu starten.


**Java-Konsole**
Wie bei der HTML5-Konsole wird die ISO-Datei auch hier direkt in der Anwendung gemountet.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Öffne „Virtual Drives“

Der Unterschied zwischen „Image File CD/DVD-ROM“ und „URL CD/DVD-ROM“ ist derselbe: Entweder mountest du eine ISO, die auf einem Server/Webspace liegt, oder du wählst eine Datei direkt von deinem PC aus.

Nach dem Einbinden deiner ISO-Datei ist ein Server-Neustart erforderlich.


## Abschluss
Glückwunsch, du hast deine ISO-Datei erfolgreich ausgewählt und gemountet. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂