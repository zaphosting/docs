---
id: dedicated-windows-ftpserver
title: "FTP auf einem Windows Server einrichten – Sicheren Datei-Transfer-Service hosten"
description: "Entdecke, wie du einen FileZilla FTP-Server auf Windows einrichtest und verwaltest – für sichere Dateiübertragungen und Benutzerzugriffssteuerung → Jetzt mehr erfahren"
sidebar_label: FTP installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das **FTP (File Transfer Protocol)** ist ein Netzwerkprotokoll, das zum Übertragen von Dateien über ein TCP/IP-Netzwerk verwendet wird. Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen.

Mit dem **FileZilla Server** kannst du so einen FTP-Server auf einem Windows-Betriebssystem einrichten. Der FileZilla Server ist einfach zu installieren und zu konfigurieren und bietet zahlreiche Features wie die Einrichtung von Benutzerkonten, Verwaltung von Zugriffsrechten und Dateiübertragungen.



## Vorbereitung

### Download

Für die Einrichtung eines FTP-Servers benötigst du passende Software. Die FileZilla Server Software ist eine mögliche Lösung für Windows Server Betriebssysteme. Den Download findest du hier: [FileZilla Server](https://filezilla-project.org/download.php?type=server).



### Installation

Nachdem du die Setup-Datei heruntergeladen hast, musst du sie ausführen. Klicke dazu auf die zuvor heruntergeladene Datei. Es sollte sich folgendes Fenster öffnen: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



Hier kannst du die zu installierenden Pakete auswählen. Es reicht aber, wenn du die vorgewählten Pakete installierst, also klickst du einfach auf **Next** und wählst dann den Installationspfad:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

In diesem Beispiel wird der FileZilla Server unter **C:\Program Files (x86)\FileZilla Server** installiert. Du kannst aber auch einen eigenen Pfad wählen. Nach der Pfadauswahl musst du festlegen, in welcher Form der FTP-Server installiert und gestartet werden soll. Außerdem kannst du den Port bestimmen und ein Administrator-Passwort festlegen.



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

Danach klickst du ebenfalls auf **Next** und im nächsten Schritt am Ende auf **Install**, um die Installation zu starten. Die Verwaltungsoberfläche des FileZilla FTP-Servers öffnet sich nun. Klicke auf den Button **Connect to FileZilla FTP Server**.

Es sollte ein Fenster erscheinen, in dem du die Felder Host, Port und Passwort siehst. Die ersten beiden Felder kannst du unverändert lassen und dein zuvor definiertes Administrator-Passwort für den FTP-Server eingeben. Danach stellst du die Verbindung mit einem Klick auf **Ok** her.



## Konfiguration

### Benutzer anlegen

Damit du dich per FTP mit deinem Server verbinden kannst, musst du einen Benutzer anlegen.  
Klicke im Menü oben auf **Server** und dann auf **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

Unter dem Menüpunkt Users kannst du dann einen neuen Benutzer hinzufügen, indem du einfach auf **Add** klickst:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

In diesem Beispiel heißt der Benutzer **YourUserName**. Natürlich kannst du hier deinen eigenen Benutzernamen wählen.



### Passwort und Berechtigungen

Nachdem der Benutzer erstellt wurde, müssen der Zugriff und die Zugriffsrechte konfiguriert werden. Dazu wird der Benutzer aktiviert und die Passwortoptionen unter der Kategorie **General** bei **Credentials** eingestellt. Aus Sicherheitsgründen empfehlen wir dringend, ein Passwort zu verwenden. Wähle **Require a password to log in** und setze dein gewünschtes Passwort.

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

Damit der Benutzer die passenden Berechtigungen hat, musst du angeben, auf welche Verzeichnisse der Benutzer zugreifen darf, indem du unter Mount Points auf **Add** klickst. Es muss ein virtueller und ein nativer Pfad angegeben werden. In unserem Beispiel definieren wir, dass die C-Festplatte unter \ gelistet wird.

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

Rechts findest du die Option **Permissions**, mit der du die Zugriffsrechte für den angegebenen Pfad einstellen kannst. Wenn du Daten lesen und bearbeiten möchtest, empfehlen wir die Einstellung **Read+Write**.

::: danger
Aus Sicherheitsgründen solltest du einem Benutzer nur Zugriff auf bestimmte Ordner geben.
:::

Die vorgenommenen Änderungen kannst du jetzt mit einem Klick auf **Apply** übernehmen und bestätigen.



## Windows Firewall-Ausnahmen

Damit eine Verbindung zu deinem FTP-Server möglich ist, muss die Nutzung des FTP-Servers in der Windows-Firewall erlaubt werden. Öffne dazu die Firewall-Einstellungen unter **Systemsteuerung\System und Sicherheit\Windows Defender Firewall** und klicke auf **App oder Feature durch Windows Defender Firewall zulassen**.  
Im folgenden Fenster wählst du dann die Anwendung aus, die erlaubt werden soll:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

In diesem Beispiel ist der Pfad **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

Danach kannst du den Vorgang mit einem Klick auf **OK** abschließen. Eine Verbindung zu deinem FTP-Server ist jetzt möglich.





## Abschluss

Glückwunsch, du hast den FTP-Server erfolgreich installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂


