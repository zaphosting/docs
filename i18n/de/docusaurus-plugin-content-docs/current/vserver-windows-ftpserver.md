---
id: vserver-windows-ftpserver
title: "vServer: Installation von FTP Server"
description: Informationen, wie du einen FTP Server auf deinen Windows vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumenationen
sidebar_label: FTP Server installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das **FTP (File Transfer Protocol)** ist ein Netzwerkprotokoll, das dazu dient, Dateien über ein TCP/IP-Netzwerk zu übertragen. Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen.

Mit dem **FileZilla Server** kann solch ein FTP-Server auf einem Windows-Betriebssystem eingerichtet werden. Der FileZilla Server ist dabei einfach zu installieren und zu konfigurieren und bietet zahlreiche Funktionen wie die Möglichkeit, Benutzerkonten einzurichten, Zugriffsrechte zu verwalten und Dateien zu übertragen.

<InlineVoucher />

## Vorbereitung

### Download

Das Aufsetzen eines FTP Servers setzt entsprechende Software voraus. Für das Windows Server Betriebssystem kann die FileZilla Server Software als mögliche Lösung eingesetzt werden. Die Option zum Herunterladen findest du hier: [FileZilla Server](https://filezilla-project.org/download.php?type=server)



### Installation

Nachdem die Setup Datei heruntergeladen wurde, musst du diese ausführen. Klicke dafür auf die zuvor heruntergeladene Datei. Es sollte sich folgendes Fenster öffnen: 

![](https://screensaver01.zap-hosting.com/index.php/s/TBDCXZ5PKXC4Df2/preview)

Dort kannst du nun die zu installierenden Pakete auswählen. Es genügt, wenn du dort die bereits ausgewählten Pakete installierst, daher klickst du einfach auf **Next** und wählst im Anschluss den Installationspfad aus: 

![](https://screensaver01.zap-hosting.com/index.php/s/A8XWDrMsNwqsWpW/preview)

In diesem Beispiel wird der Filezilla Server unter **C:\Program Files (x86)\FileZilla Server** installiert. Du kannst jedoch auch einen eigenen Pfad wählen. Nach der Auswahl des Pfads muss indessen noch bestimmt werden, in welcher Form der FTP-Server installiert und gestartet werden soll. Des Weiteren kann der Port bestimmt werden und es muss dann noch ein Administrator Passwort bestimmt werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/dHnsX8oG6DG5c2s/preview)

Anschließend klickst du auch dort auf **Next** und im darauf folgenden Schritt ebenfalls. Zum Abschluss klickst du auf **Install** womit du die Installation startest. Jetzt öffnet sich die Verwaltungsoberfläche des FileZilla FTP-Servers. Klicke dort auf den Button **Connect to FileZilla FTP Server**. 

Es sollte sich ein Fenster öffnen, wo du die Felder Host, Port und Password siehst. Die ersten beiden Felder kannst du unverändert lassen und gibst dein definiertes Administratorpasswort vom FTP-Server an. Im Anschluss stellst du die Verbindung her, in dem du auf den **Ok** Button klickst. 

![](https://screensaver01.zap-hosting.com/index.php/s/Mtm3aqNGTG3Ekre/preview)



## Konfiguration



### Erstellung von Benutzern

Um via FTP auf deinen Server verbinden zu können, muss nun ein entsprechender Benutzer angelegt werden. 
Klicke dazu oberhalb im Menü auf **Server** und dann auf **Configure**. 
![](https://screensaver01.zap-hosting.com/index.php/s/crtSdiAaKJgJgGD/preview)

Unter dem Menüpunkt Users kannst du daraufhin mit einem Klick auf **Add** einen neuen Benutzer hinzufügen:
![](https://screensaver01.zap-hosting.com/index.php/s/Aej62q2GxGzNdtK/preview)

In diesem Beispiel heist der Benutzer **YourUserName**. Hier kannst du natürlich einen eigenen Benutzernamen wählen.

### Passwort und Berechtigungen

Jetzt, nachdem der Benutzer angelegt wurde, muss nun noch der Zugang und die Zugriffsberechtigungen bestimmt werden. Dafür wird in der Kategorie **General** bei **Credentials** der Benutzer aktiviert und die Passwortoption konfiguriert. Aus Sicherheitsgründen empfehlen wir dringend ein Passwort zu verwenden. Wähle dafür **Require a password to log in** aus und definiere dein gewünschtes Passwort. 

![](https://screensaver01.zap-hosting.com/index.php/s/qJngCCsxyeMSfYK/preview)

Damit der Benutzer auch die entsprechenden Berechtigungen hat, musst du noch festlegen, auf welche Verzeichnisse dieser zugreifen darf, dazu genügt ein Klick auf **Add** bei Mount points. Hierbei muss einmal ein virtualler und ein nativer Pfad angegeben werden. In unserem Beispiel definieren wir, dass die C Fesplatte unter \ aufgelistet wird.  

![](https://screensaver01.zap-hosting.com/index.php/s/pzHzQTHiR6MGsgN/preview)

Rechts daneben findest du dann die Option **Permissions**, worüber du die Zugriffsrechte auf den angegebenen Pfad bestimmen kannst. Solltest du die Daten sowohl lesen als auch bearbeiten können, dann empfiehlt es sich **Read+Write** zu setzen. 

:::danger Aus Sicherheitsgründen solltest du einem Benutzer immer nur Zugriff auf bestimmte Ordner geben. 
:::

Die vorgenommenen Änderungen kannst du nun über den **Apply** Button übernehmen und bestätigen. 


## Windows Firewall Ausnahmen

Um eine Verbindung zu deinem FTP Server zu ermöglichen, muss jetzt noch die Anwendung des FTP Servers in der Windows-Firewall freigegeben werden. Dazu öffnest du die Firewall-Einstellungen unter **Systemsteuerung\System und Sicherheit\Windows Firewall** und klickst dort links oben auf **Eine App oder ein Feature durch die Windows Firewall zulassen**. Im folgenden Fenster wählst du dann die frei zugebene Anwendung aus:

![](https://screensaver01.zap-hosting.com/index.php/s/xQ7noKCt9t4MRat/preview)

In diesem Beispiel lautet der Pfad **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/tpXWbqNaeTfnNQC/preview)

Danach kannst du den Vorgang mit einem Klick auf **OK** schließen, eine Verbindung zu deinem FTP Server ist nun möglich. 


## Abschluss

Glückwunsch, du hast den FTP-Server erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!
