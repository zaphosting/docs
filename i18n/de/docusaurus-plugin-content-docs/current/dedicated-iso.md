---
id: dedicated-iso
title: "Dedicated Server: Eigene ISO"
description: "Entdecke, wie du ISO-Dateien ganz easy über iLO oder Remote-Konsole mountest, um deinen Server effizient zu booten → Jetzt mehr erfahren"
sidebar_label: Eigene ISO
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Willst du eine ISO mounten? Vielleicht eine von uns oder lieber deine eigene? Kein Ding. Wir bieten eine große Auswahl an ISO-Dateien und noch mehr Optionen.

:::danger Auswahl und Nutzung von ISO-Dateien
Wenn du deine eigene ISO (OS) nutzt, die wir nicht aktiv anbieten, können wir bei möglichen Problemen keine Funktionsgarantie übernehmen.
:::

<InlineVoucher />

## Verfügbare Mount-Optionen
Es gibt zwei Wege, deine eigene ISO-Datei zu mounten. Ein Neustart des Servers ist immer nötig, damit die Datei geladen wird. Grundsätzlich gibt es keine Einschränkungen beim Mounten, wichtig ist nur, dass die ISO bootfähig ist.

## Mounten über iLO
Öffne dein iLO Management Interface und gehe zu „Virtual Media“
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Gib die URL ein, die auf die ISO-Datei zeigt, die du nutzen möchtest. Achte darauf, dass der Link mit .iso endet.
* Drücke jetzt auf „Insert Media“
* Klick auf „Server Reset“, damit dein System neu startet.

Deine ISO-Datei wird jetzt geladen.

## Mounten über Remote-Konsole

**HTML5-Konsole**
Du kannst die Datei direkt in der Remote-Konsole mounten:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Klick auf das Disc-Symbol
* Wähle „CD/DVD“
* Entscheide dich zwischen „Scripted media URL“ oder „Local .iso File“

Der Unterschied zwischen „Scripted media URL“ und „Local .iso File“ ist, dass du bei ersterem eine ISO-Datei mountest, die auf einem Server/Webspace liegt, und bei letzterem direkt eine Datei von deinem Rechner auswählst, ohne sie hochladen zu müssen.

Wenn du deine ISO-Datei ausgewählt hast, ist ein Server-Neustart erforderlich.

**Java-Konsole**
Wie bei der HTML5-Konsole wird die ISO-Datei auch hier direkt in der Anwendung gemountet.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Öffne „Virtual Drives“

Der Unterschied zwischen „Image File CD/DVD-ROM“ und „URL CD/DVD-ROM“ ist, dass du bei ersterem eine ISO-Datei von deinem Rechner direkt mountest und bei letzterem eine ISO-Datei, die auf einem Server/Webspace liegt.

Nachdem du deine gewünschte ISO-Datei eingebunden hast, ist ein Server-Neustart nötig.

## Fazit
Glückwunsch, du hast deine ISO-Datei erfolgreich ausgewählt und gemountet. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />