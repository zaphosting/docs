---
id: webspace-plesk-ftp
title: "Webspace: FTP Zugang für Webspace einrichten"
description: Informationen, wie du einen FTP Zugang für deinen Webspace von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: FTP-Zugang
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

FTP steht für *file transfer protocol* und wird benötigt, um Dateien von dem PC auf den Webspace zu laden.
Jeder Kunde kriegt automatisch mit dem bestellten Webspace einen FTP Zugang zu diesem.  Hier erklären wir, wie weitere FTP Zugänge eingerichtet werden. Dies bietet sich an, wenn man mit mehreren Personen an einem Projekt arbeitet und jede Person einen eigenen FTP Zugang bekommen soll. Diese Personen können dann mit dem erstellten FTP Zugang nur auf die Ordner, welche von dem Besitzer des Webspace festgelegt wurden.

<InlineVoucher />

## FTP Zugang einrichten

In dem Plesk Dashboard die Funktion "**FTP-Zugang**" öffnen

:::info
Auf dieser Hauptseite wäre auch bereits die IP-Adresse zu sehen, welche später für den Test benötigt wird.
:::

![Bildschirmfoto vom 2022-05-13 05-28-17](https://screensaver01.zap-hosting.com/index.php/s/Ss3yHAYwT7wRqMq/preview)

Dort wäre nun der eine FTP Zugang zu sehen, welcher von dem System automatisch mit der fertigen Bestellung von dem Webspace erstellt wird.
Um ein weiteres Konto zu erstellen, muss dort der Button "**FTP-Konto hinzufügen**" angeklickt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/gLaz9jSdFJ4Pc7m/preview)

Im Anschluss müssen die gewünschten Daten eingetragen werden. Sobald fertig eingetragen, werden die Eingaben mit "**OK**" bestätigt.

![](https://screensaver01.zap-hosting.com/index.php/s/44Sj5dPA7iYfDof/preview)

:::info
Bei "**Basisverzeichnis**" kann man nun das Verzeichnis wählen, auf welches der FTP Zugang Zugriff haben soll. Wenn der FTP Zugang alles einsehen und bearbeiten darf, muss dort nichts umgestellt werden. 
:::

## FTP Zugang testen

Um den FTP Zugang zu testen, wird ein Programm benötigt, mit welchem dies möglich wäre. In unserem Beispiel nutzen wir *FileZilla Client*.
Bei "**Server**" wird die IP von dem Server eingetragen, welche auf der Hauptseite zu sehen ist. 
Bei "**Benutzername**" und "**Passwort**" werden die Daten eingetragen, welche wir für den FTP Zugang erstellt haben.
Der Port ist standardmäßig "**21**"

## Benutzerkonto existiert bereits

Diese Meldung entsteht, wenn der FTP-Kontoname von einer anderen Person auf dem System genutzt wird. Der bestellte Webspace wurde auf einem System mit mehreren Kunden angelegt, wenn einer dieser Kunden jetzt den Namen benutzt, kann kein anderer Kunde diesen benutzen.
In einem solchen Fall müsste ein anderer Kontoname gewählt werden.


<InlineVoucher />
