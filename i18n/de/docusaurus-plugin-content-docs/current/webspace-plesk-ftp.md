---
id: webspace-plesk-ftp
title: "Webspace: FTP-Zugang für Webspace einrichten"
description: "Entdecke, wie du mehrere FTP-Zugänge für gemeinsame Webprojekte verwaltest und Ordnerrechte effektiv kontrollierst → Jetzt mehr erfahren"
sidebar_label: FTP-Zugang
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

FTP steht für *File Transfer Protocol* und wird benötigt, um Dateien vom PC auf den Webspace hochzuladen.  
Jeder Kunde erhält automatisch einen FTP-Zugang zu seinem bestellten Webspace.

Hier erklären wir, wie du weitere FTP-Zugänge einrichtest. Das ist praktisch, wenn du mit mehreren Leuten an einem Projekt arbeitest und jede Person einen eigenen FTP-Zugang bekommen soll.

Diese Personen können dann mit dem erstellten FTP-Zugang nur auf die Ordner zugreifen, die vom Besitzer des Webspaces festgelegt wurden.

<InlineVoucher />

## FTP-Zugang einrichten

Im Plesk Dashboard öffnest du die Funktion "**FTP-Zugang**".

:::info
Auf dieser Hauptseite siehst du auch die IP-Adresse, die du später für den Test brauchst.
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

Hier wird dir jetzt der eine FTP-Zugang angezeigt, der vom System automatisch mit der Bestellung des Webspaces erstellt wurde.  
Um einen weiteren Account anzulegen, klickst du auf den Button "**FTP-Konto hinzufügen**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

Danach gibst du die gewünschten Daten ein. Sobald alles ausgefüllt ist, bestätigst du mit "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
Bei "**Basisverzeichnis**" kannst du jetzt das Verzeichnis auswählen, auf das der FTP-Zugang Zugriff haben soll. Wenn der FTP-Zugang alles sehen und bearbeiten darf, musst du hier nichts ändern.
:::

## FTP-Zugang testen

Um den FTP-Zugang zu testen, brauchst du ein Programm, mit dem das möglich ist. In unserem Beispiel nutzen wir den *Filezilla Client*.  
Bei "**Server**" gibst du die IP des Servers ein, die auf der Hauptseite angezeigt wird.  
Bei "**Benutzername**" und "**Passwort**" trägst du die Daten ein, die du für den FTP-Zugang erstellt hast.  
Der Standard-Port ist "**21**".

## Benutzerkonto existiert bereits

Diese Meldung erscheint, wenn der FTP-Kontoname bereits von jemand anderem im System verwendet wird.  
Der bestellte Webspace wurde auf einem System mit mehreren Kunden erstellt. Wenn einer dieser Kunden den Namen schon nutzt, kann kein anderer Kunde denselben Namen verwenden.  
In so einem Fall musst du einen anderen Kontonamen wählen.

<InlineVoucher />