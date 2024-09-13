---
id: assettocorsa-configure
title: Server konfigurieren
description: Informationen zu den Konfigurationsoptionen deines Assetto Corsa-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server konfigurieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Bevor wir den Server konfigurieren können, muss der [Zugriff per FTP](gameserver-ftpaccess.md) eingerichtet werden:

![image](https://screensaver01.zap-hosting.com/index.php/s/LoP5aCdQKHw7eca/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![image](https://screensaver01.zap-hosting.com/index.php/s/qHyziSwMrwCYf6W/preview)



## Vorbereitung

Zunächst öffnen wir den Assetto Corsa Ordner, diesen können wir öffnen, indem wir Steam öffnen und "Assetto Corsa" in der Spieleliste Rechtsklicken,

Nun öffnen wir "Lokale Dateien" und öffnen die Lokalen Spieldateien:

![image](https://screensaver01.zap-hosting.com/index.php/s/fFmMaJTBG7EJw2F/preview)

Dort öffnen wir den "server" Ordner und öffnen den ACServerManager.exe.


## Map Einstellen

Wir sind nun im "AC Server Manager" Interface, damit können wir Serverconfigs erstellen und verwalten, zunächst erstellen wir eine neue Config

![image](https://screensaver01.zap-hosting.com/index.php/s/2ra757X4qizDrQS/preview)


Nun können wir unseren Server konfigurieren, in unseren Fall wollen wir nur die Strecken&Autos editieren, dazu öffnen wir das "Tracks" Tab

Hier können wir nun auf unsere bevorzugte Map klicken, oben können dann noch die Menge der Autos auf der Strecke eingestellt werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/wHYoPimY3RLgsdf/preview)


:::info
Gehe sicher, dass du nicht mehr Autos, als Slots auf deinem Server angibst, ansonsten wird der Server nicht starten
:::

## Autos Einstellen

Nun wechseln wir in das Tab "Cars / Entry List", hier können wir nun neue Autos hinzufügen:

Um Autos zu aktivieren, muss links das Häkchen gesetzt werden

![image](https://screensaver01.zap-hosting.com/index.php/s/BzkNiHMFH3FRi8A/preview)


In der Mitte erscheinen nun Autos, welche auf dem Grid platziert werden können, hier können wir nun Autos in den Farben wählen, welche im Grid sein sollten:

![image](https://screensaver01.zap-hosting.com/index.php/s/KoZ8cDxJgocEtKN/preview)


:::info
Um mehrere Autos zu wählen, können mehrere Haken gesetzt werden, um die verschiedenen Autos in der Mitte hinzugefügt werden.


Beachte, dass alle Autoslots befüllt werden und nicht mehr, als die Menge der verfügbaren Slots gesetzt wird

![image](https://screensaver01.zap-hosting.com/index.php/s/RjTdy6tfeNqJLLe/preview)
:::


## Config Hochladen

Nun können wir die Config über den "Save" Button abspeichern und über den "Export" Button exportieren:

![image](https://screensaver01.zap-hosting.com/index.php/s/iSS2dDGf4bewRAn/preview)

Hier wählen wir jetzt einen freien Ordner, dort werden die Config-Daten gespeichert.

Nun kann der AC Server Manager geschlossen werden, wir öffnen nun den Ordner, in welche die Configs exportiert wurden.

![image](https://screensaver01.zap-hosting.com/index.php/s/e9gmt95C6n4jmpp/preview)


Diese Configs können nun über Drag&Drop in den "cfg" Ordner des Servers hochgeladen werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/a4WprPjxkFM29LK/preview)


Der Server kann nun mit der neuen Config gestartet werden.