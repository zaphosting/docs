---
id: dedicated-windows-ftpserver
title: "Dedicated Server: Installation von FTP Server"
description: Informationen, wie du einen FTP Server auf deinem Windows Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumenationen
sidebar_label: FTP Server installieren
---



## Einführung

Das **FTP (File Transfer Protocol)** ist ein Netzwerkprotokoll, das dazu dient, Dateien über ein TCP/IP-Netzwerk zu übertragen. Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen.

Mit dem **FileZilla Server** kann solch ein FTP-Server auf einem Windows-Betriebssystem eingerichtet werden. Der FileZilla Server ist dabei einfach zu installieren und zu konfigurieren und bietet zahlreiche Funktionen wie die Möglichkeit, Benutzerkonten einzurichten, Zugriffsrechte zu verwalten und Dateien zu übertragen.



## Vorbereitung

### Download

Das Aufsetzen eines FTP Servers setzt entsprechende Software voraus. Für das Windows Server Betriebssystem kann die FileZilla Server Software als mögliche Lösung eingesetzt werden. Die Option zum Herunterladen findest du hier: [FileZilla Server](https://filezilla-project.org/download.php?type=server)



### Installation

Nachdem die Setup Datei heruntergeladen wurde, musst du diese ausführen. Klicke dafür auf die zuvor heruntergeladene Datei. Es sollte sich folgendes Fenster öffnen: 

![image](https://user-images.githubusercontent.com/26007280/190911353-3b3fc815-f7ed-4df8-9303-8d639ff9ff2b.png)

Dort kannst du nun die zu installierenden Pakete auswählen. Es genügt, wenn du dort die bereits ausgewählten Pakete installierst, daher klickst du einfach auf **Next** und wählst im Anschluss den Installationspfad aus: 

![image](https://user-images.githubusercontent.com/26007280/190911361-b3b5fc61-8648-4378-a920-d7faa8118fc3.png)

In diesem Beispiel wird der Filezilla Server unter **C:\Program Files (x86)\FileZilla Server** installiert. Du kannst jedoch auch einen eigenen Pfad wählen. Nach der Auswahl des Pfads muss indessen noch bestimmt werden, in welcher Form der FTP-Server installiert und gestartet werden soll. Des Weiteren kann der Port bestimmt werden und es muss dann noch ein Administrator Passwort bestimmt werden. 

![image](https://user-images.githubusercontent.com/26007280/190911700-52fd9613-70ac-413c-a171-b6d581ddd622.png)

Anschließend klickst du auch dort auf **Next** und im darauf folgenden Schritt ebenfalls. Zum Abschluss klickst du auf **Install** womit du die Installation startest. Jetzt öffnet sich die Verwaltungsoberfläche des FileZilla FTP-Servers. Klicke dort auf den Button **Connect to FileZilla FTP Server**. 

Es sollte sich ein Fenster öffnen, wo du die Felder Host, Port und Password siehst. Die ersten beiden Felder kannst du unverändert lassen und gibst dein definiertes Administratorpasswort vom FTP-Server an. Im Anschluss stellst du die Verbindung her, in dem du auf den **Ok** Button klickst. 

![image](https://user-images.githubusercontent.com/26007280/190911836-b3840fce-e575-4c69-864d-7fbb5fbe84a9.png)



## Konfiguration



### Erstellung von Benutzern

Um via FTP auf deinen Server verbinden zu können, muss nun ein entsprechender Benutzer angelegt werden. 
Klicke dazu oberhalb im Menü auf **Server** und dann auf **Configure**. 
![image](https://user-images.githubusercontent.com/26007280/190913231-5cda42fb-c47a-4b92-a32d-dd3eb1d23b61.png)

Unter dem Menüpunkt Users kannst du daraufhin mit einem Klick auf **Add** einen neuen Benutzer hinzufügen:
![image](https://user-images.githubusercontent.com/26007280/190913620-936d4430-51a7-44c9-9023-ad4087c01599.png)

In diesem Beispiel heist der Benutzer **YourUserName**. Hier kannst du natürlich einen eigenen Benutzernamen wählen.

### Passwort und Berechtigungen

Jetzt, nachdem der Benutzer angelegt wurde, muss nun noch der Zugang und die Zugriffsberechtigungen bestimmt werden. Dafür wird in der Kategorie **General** bei **Credentials** der Benutzer aktiviert und die Passwortoption konfiguriert. Aus Sicherheitsgründen empfehlen wir dringend ein Passwort zu verwenden. Wähle dafür **Require a password to log in** aus und definiere dein gewünschtes Passwort. 

![image](https://user-images.githubusercontent.com/26007280/190912515-a4952bc3-b4ce-45e6-ba33-42b358f01074.png)

Damit der Benutzer auch die entsprechenden Berechtigungen hat, musst du noch festlegen, auf welche Verzeichnisse dieser zugreifen darf, dazu genügt ein Klick auf **Add** bei Mount points. Hierbei muss einmal ein virtualler und ein nativer Pfad angegeben werden. In unserem Beispiel definieren wir, dass die C Fesplatte unter \ aufgelistet wird.  

![image](https://user-images.githubusercontent.com/26007280/190912711-90f6c4b6-35de-4339-b2a0-d3aa1d0ed8fd.png)

Rechts daneben findest du dann die Option **Permissions**, worüber du die Zugriffsrechte auf den angegebenen Pfad bestimmen kannst. Solltest du die Daten sowohl lesen als auch bearbeiten können, dann empfiehlt es sich **Read+Write** zu setzen. 

:::danger Aus Sicherheitsgründen solltest du einem Benutzer immer nur Zugriff auf bestimmte Ordner geben. 
:::

Die vorgenommenen Änderungen kannst du nun über den **Apply** Button übernehmen und bestätigen. 


## Windows Firewall Ausnahmen

Um eine Verbindung zu deinem FTP Server zu ermöglichen, muss jetzt noch die Anwendung des FTP Servers in der Windows-Firewall freigegeben werden. Dazu öffnest du die Firewall-Einstellungen unter **Systemsteuerung\System und Sicherheit\Windows Firewall** und klickst dort links oben auf **Eine App oder ein Feature durch die Windows Firewall zulassen**. Im folgenden Fenster wählst du dann die frei zugebene Anwendung aus:

![image](https://user-images.githubusercontent.com/13604413/159173002-024980dd-0d16-40a1-8316-979ceec99e7b.png)

In diesem Beispiel lautet der Pfad **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![image](https://user-images.githubusercontent.com/26007280/190912805-1a972dec-1e60-425a-806f-4c7dad3663dc.png)

Danach kannst du den Vorgang mit einem Klick auf **OK** schließen, eine Verbindung zu deinem FTP Server ist nun möglich. 
