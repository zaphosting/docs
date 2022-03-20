---
id: vserver_windows_ftpserver
title: vServer: FTP Server auf Windows Server installieren
description: Informationen, wie du einen FTP Server auf deinen Windows vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumenationen
sidebar_label: FTP Server installieren
---


## 🖥️ FTP Server mit FileZilla Server unter Windows

Mit FileZilla Server steht dir eine kostenlose Software zur Verfügung welche es dir ermöglich deinen eigenen FTP Server auf einem Windows Server zu installieren.
Die Installation so wie Einrichting ist übersichtlich und unkompliziert, daher eignet sich das ganze auch für unerfahrene Nutzer. 


## 💾 Download und Installation

Zuerst lädst du dir die aktuellste Version von **FileZilla Server** hier herunter: [FileZilla Server Download](https://filezilla-project.org/download.php?type=server)
Die heruntergeladene Datei führst du mit einem Doppelklick aus wodurch der Installationsprozess gestartet wird, dort klickst du dich vor bis du zu folgendem Fenster gelangst:

![image](https://user-images.githubusercontent.com/13604413/159172969-1c0f99f5-bfdb-4044-9b1f-50a0fe1a920e.png)

Dort kannst du nun die zu installierenden Pakete wählen, es genügt wenn du dort die bereits ausgewählten Pakete installierst, daher klickst du einfach auf **Next** und wählst im Anschluss den Installationspfad aus: 

![image](https://user-images.githubusercontent.com/13604413/159172973-37b19d92-dbf8-4397-b3e6-9b2b71e3d3a2.png)

In diesem Beispiel wird das ganze nach **C:\Program Files (x86)\FileZilla Server** installiert, du kannst jedoch auch einen eigenen Pfad wählen.
Anschließen klickst du auch dort auf **Next** und im darauf folgenden Schritt ebenfalls. Zum Abschluss klickst du auf **Install** womit du die Installation startest, danach 
kannst du das ganze mit einem Klick auf **Close** schließen. 


Nun öffnet sich die Verwaltungsoberfläche des FileZilla FTP Servers, den **Host** so wie **Port** kannst du unverändert lassen, das Feld **Password** bleibt zudem leer.
Klicke dort einfach auf Connect:


![image](https://user-images.githubusercontent.com/13604413/159172976-a54bad3d-99f5-4c80-a93c-ea7d40a20a9f.png)

## 👨 Anlegen eines Benutzers

Um via FTP auf deinen Server verbinden zu können muss nun ein entsprechender Benutzer angelegt werden. 
Klicke dazu oberhalb im Menü auf **Edit** und dann auf **Users**:

![image](https://user-images.githubusercontent.com/13604413/159172982-05180815-3f8c-45d6-9029-89449dc3c780.png)


Mit einem Klick auf **Add** kannst du dort dann einen neuen Benutzer hinzufügen:

![image](https://user-images.githubusercontent.com/13604413/159172984-7906789a-9bbe-41ad-a9e7-17ef45e8493b.png)

In diesem Beispiel heist der Benutzer **Testbenutzer**, du kannst natürlich einen eigenen Namen wählen.

### 🔒 Passwort und Berechtigungen setzen

Um für den Benutzer das Passwort zu setzen aktivierst du dieses einfach mit einem Klick auf das Feld **Password**, dahinter trägst du dann das Passwort für den Benutzer ein:

![image](https://user-images.githubusercontent.com/13604413/159172988-8501e87a-154a-47a2-b8a5-552afc3d6cff.png)

Damit der Benutzer auch die entsprechenden Berechtigungen hat musst du noch festlegen auf welche Verzeichnisse dieser zugreifen darf, dazui genügt ein Klick auf **Shared Folders** und anschließend ein weiterer Klick auf **Add**:  

![image](https://user-images.githubusercontent.com/13604413/159172994-3ec8adb3-2b2a-4ff8-b600-0294865416fb.png)

In diesem Beispiel erhält der Benutzer lediglich Zugriff auf das Verzeichnis **Dokumente**, dieses wählst du dann mit einem Linksklick aus und klickst auf **OK**:

![image](https://user-images.githubusercontent.com/13604413/159172998-9f900ab7-d16f-452e-a3c3-9c7ecaaaabb6.png)

> ACHTUNG! Aus Sicherheitsgründen solltest du einem Benutzer immer nur Zugriff auf bestimmte Ordner geben, zum Beispiel zu deinem Gameserver.

Anschließend kannst du dem Benutzer noch die nötigen Berechtigungen geben um in dem gewählten Verzeichnis Dateien hochladen, herunterladen, löschen oder auch neue Verzeichnisse
oder zu löschen zu können:

![image](https://user-images.githubusercontent.com/13604413/159172999-9161b0ac-5a06-4ba2-8316-5d656e18f0da.png)

Das Fenster kannst du dann durch einen Klick auf **OK** schließen. 


## 🔥Freigabe in der Windows-Firewall

Um eine Verbindung zu deinem FTP Server zu ermöglichen, muss nun noch die Anwendung des FTP Servers in der Windows-Firewall freigegeben werden, dazu öffnest du die Firewall-Einstellungen 
unter **Systemsteuerung\System und Sicherheit\Windows Firewall** und klickst dort links oben auf **Eine App oder ein Feature durch die Windows Firewall zulassen**.
Im folgenden Fenster wählst du dann die freizugebene Anwendung aus:

![image](https://user-images.githubusercontent.com/13604413/159173002-024980dd-0d16-40a1-8316-979ceec99e7b.png)

In diesem Beispiel lautet der Pfad **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![image](https://user-images.githubusercontent.com/13604413/159173004-60bccc27-e66d-425c-a9dc-945fb1468d40.png)

Danach kannst du das ganze mit einem Klick auf **OK** schließen, eine Verbindung zu deinem FTP Server ist nun möglich. 



