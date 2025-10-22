---
id: arma3-serverconfig
title: "Arma 3: Server-Konfigurationsdatei bearbeiten"
description: "Entdecke, wie du deine Arma 3 Server-Einstellungen für optimales Gameplay und Performance anpasst → Jetzt mehr erfahren"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server.cfg Parameter und Konfiguration

Die Server.cfg von Arma 3 ist für den Betrieb jedes Arma 3 Servers notwendig und bietet dir viele Möglichkeiten, deinen Arma 3 Server individuell zu konfigurieren.

Die Server.cfg wird entweder direkt per FTP auf einem vorinstallierten Gameserver oder VPS bearbeitet.  
Bei einem Gameserver steht dir im Interface links auch der Menüpunkt Configs zur Verfügung, über den du die Server.cfg mit wenigen Klicks bearbeiten kannst.

<InlineVoucher />

## Server.cfg über den ZAP-Editor bearbeiten

Um die Server.cfg deines Arma 3 Servers im ZAP-Editor zu bearbeiten, klickst du zuerst in der Oberfläche auf deinen Server und wählst dann im Menü links unter „Einstellungen“ den Punkt „Configs“ aus.

![](https://puu.sh/Fo5i6/183ee65ef3.png)

Dort siehst du eine Liste der verfügbaren Konfigurationsdateien für Arma 3, wir bearbeiten jetzt nur die Server.cfg.  
Mit einem Klick auf den blauen Button „Datei öffnen“ gelangst du in den ZAP-Editor.

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

Hier kannst du deinen Arma 3 Server individuell konfigurieren, z.B. den Servernamen und die Slot-Anzahl.  
Passe die Einstellungen nach Belieben an und klicke anschließend auf „Speichern“.

![](https://puu.sh/Fk7I1/407a039e38.png)

Beim Eintragen des Servernamens achte darauf, den Namen in Anführungszeichen zu setzen, sonst kann der Server ihn nicht lesen.  
Wichtig ist außerdem, jede Zeile mit einem Semikolon (;) zu beenden, sonst kann der Server die folgenden Einstellungen nicht auslesen.  
Eine Ausnahme ist die Option „motd[]“ – hier musst du jede Zeile mit einem Komma abschließen, außer die letzte, bei der du das Komma weglässt.

## Richtig:

Hier sind Anführungszeichen sowie Semikolon und Komma korrekt gesetzt.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## Falsch:

Hier fehlen Anführungszeichen sowie Semikolon und Komma, so würde der Server nicht starten.

![](https://puu.sh/Fk7NK/f96a31199d.png)

## Server.cfg per FTP bearbeiten

Alternativ zum ZAP-Editor kannst du die Server.cfg auch direkt per FTP bearbeiten. In diesem Beispiel nutzen wir **FileZilla**, um eine FTP-Verbindung zu deinem Gameserver herzustellen und die Verzeichnisse deines Servers zu durchsuchen.

Wie du dich per FTP mit deinem Gameserver verbindest, erfährst du hier: [Zugriff via FTP](gameserver-ftpaccess.md).

## Verbindung herstellen und zum Pfad der Server.cfg navigieren

:::info
Achte darauf, dass dein Gameserver gestoppt ist, während du per FTP daran arbeitest.
:::

Nachdem du dich wie oben beschrieben per FTP mit deinem Gameserver verbunden hast, navigierst du im unteren rechten Fenster von FileZilla zum Verzeichnis deiner Server.cfg, das du unter findest: **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
Der Name des ersten Ordners (g198376) ist die ID deines Servers, so kannst du die Ordner auseinanderhalten, falls du mehrere Gameserver hast.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

Im Verzeichnis findest du die Server.cfg deines Arma 3 Servers sowie weitere vorhandene Konfigurationsdateien.  
Jetzt kannst du die Server.cfg mit einem **Rechtsklick** auswählen und auf **Ansehen/Bearbeiten** klicken.

![](https://puu.sh/Fo5fM/f3519a8936.png)

Es öffnet sich ein Standard-Editor, in dem du deine Server.cfg wie oben beschrieben bearbeiten kannst.  
Nach der Bearbeitung speicherst du die Datei mit **STRG+S**. Danach kannst du den Editor schließen, dein Server ist jetzt startklar.

<InlineVoucher />