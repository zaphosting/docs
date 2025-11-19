---
id: dedicated-windows-ftpserver
title: "Dedicated Server: Installation von FTP"
description: "Entdecke, wie du einen FileZilla FTP-Server auf Windows einrichtest und verwaltest – für sichere Dateiübertragungen und Benutzerzugriffssteuerung → Jetzt mehr erfahren"
sidebar_label: FTP installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das **FTP (File Transfer Protocol)** ist ein Netzwerkprotokoll, das zum Übertragen von Dateien über ein TCP/IP-Netzwerk verwendet wird. Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen.

Mit dem **FileZilla Server** kannst du so einen FTP-Server auf einem Windows-Betriebssystem einrichten. Der FileZilla Server ist einfach zu installieren und zu konfigurieren und bietet zahlreiche Features wie die Einrichtung von Benutzerkonten, Verwaltung von Zugriffsrechten und Dateiübertragungen.



## Vorbereitung

### Download

Für die Einrichtung eines FTP-Servers benötigst du passende Software. Als mögliche Lösung für das Windows-Server-Betriebssystem kann die FileZilla Server Software verwendet werden. Den Download findest du hier: [FileZilla Server](https://filezilla-project.org/download.php?type=server).



### Installation

Nachdem du die Setup-Datei heruntergeladen hast, musst du sie ausführen. Klicke dazu auf die zuvor heruntergeladene Datei. Es sollte sich folgendes Fenster öffnen: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



Hier kannst du die zu installierenden Pakete auswählen. Es reicht jedoch, wenn du die vorgewählten Pakete installierst, also klickst du einfach auf **Weiter** und wählst dann den Installationspfad:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

In diesem Beispiel wird der FileZilla Server unter **C:\Program Files (x86)\FileZilla Server** installiert. Du kannst aber auch einen eigenen Pfad wählen. Nach der Pfadauswahl musst du festlegen, in welcher Form der FTP-Server installiert und gestartet werden soll. Außerdem kannst du den Port bestimmen und ein Administrator-Passwort vergeben.



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

Anschließend klickst du ebenfalls auf **Weiter** und im nächsten Schritt am Ende auf **Installieren**, um die Installation zu starten. Die Verwaltungsoberfläche des FileZilla FTP-Servers öffnet sich nun. Klicke auf den Button **Mit FileZilla FTP Server verbinden**.

Es sollte ein Fenster erscheinen, in dem du die Felder Host, Port und Passwort siehst. Die ersten beiden Felder kannst du unverändert lassen und dein zuvor definiertes Administrator-Passwort eingeben. Danach stellst du die Verbindung her, indem du auf **Ok** klickst.



## Konfiguration

### Benutzer anlegen

Um dich per FTP mit deinem Server verbinden zu können, musst du einen Benutzer anlegen.  
Klicke oben im Menü auf **Server** und dann auf **Konfigurieren**.

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

Unter dem Menüpunkt Benutzer kannst du dann einfach auf **Hinzufügen** klicken, um einen neuen Benutzer anzulegen:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

In diesem Beispiel heißt der Benutzer **YourUserName**. Natürlich kannst du hier deinen eigenen Benutzernamen wählen.



### Passwort und Berechtigungen

Nachdem der Benutzer angelegt wurde, müssen der Zugriff und die Zugriffsrechte konfiguriert werden. Dazu wird der Benutzer aktiviert und die Passwortoptionen unter der Kategorie **Allgemein** bei **Anmeldeinformationen** eingestellt. Aus Sicherheitsgründen empfehlen wir dringend, ein Passwort zu verwenden. Wähle **Passwort für Anmeldung erforderlich** und lege dein gewünschtes Passwort fest.

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

Damit der Benutzer die passenden Berechtigungen hat, musst du angeben, auf welche Verzeichnisse der Benutzer zugreifen darf, indem du unter Einhängepunkte auf **Hinzufügen** klickst. Es muss ein virtueller und ein nativer Pfad angegeben werden. In unserem Beispiel definieren wir, dass die C-Festplatte unter \ eingebunden wird.

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

Rechts findest du die Option **Berechtigungen**, mit der du die Zugriffsrechte auf den angegebenen Pfad einstellen kannst. Wenn du die Daten lesen und bearbeiten möchtest, empfehlen wir die Einstellung **Lesen+Schreiben**.

::: danger
Aus Sicherheitsgründen solltest du einem Benutzer nur Zugriff auf bestimmte Ordner geben.
:::

Die vorgenommenen Änderungen kannst du jetzt mit einem Klick auf **Übernehmen** bestätigen.



## Windows-Firewall-Ausnahmen

Damit eine Verbindung zu deinem FTP-Server möglich ist, muss die Nutzung des FTP-Servers in der Windows-Firewall erlaubt werden. Öffne dazu die Firewall-Einstellungen unter **Systemsteuerung\System und Sicherheit\Windows Defender Firewall** und klicke auf **App oder Feature durch Windows Defender Firewall zulassen**.  
Im folgenden Fenster wählst du dann die Anwendung aus, die erlaubt werden soll:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

In diesem Beispiel ist der Pfad **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

Danach kannst du den Vorgang mit einem Klick auf **OK** abschließen. Eine Verbindung zu deinem FTP-Server ist jetzt möglich.





## Fazit

Glückwunsch, du hast den FTP-Server erfolgreich installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂


