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

![](https://screensaver01.zap-hosting.com/index.php/s/gEAbHGxdqXPeF2K/preview)

Dort kannst du nun die zu installierenden Pakete wählen, es genügt wenn du dort die bereits ausgewählten Pakete installierst, daher klickst du einfach auf **Next** und wählst im Anschluss den Installationspfad aus: 

![](https://screensaver01.zap-hosting.com/index.php/s/s7Zs8wLKMjGoY6a/preview)

In diesem Beispiel wird das ganze nach **C:\Program Files (x86)\FileZilla Server** installiert, du kannst jedoch auch einen eigenen Pfad wählen.
Anschließen klickst du auch dort auf **Next** und im darauf folgenden Schritt ebenfalls. Zum Abschluss klickst du auf **Install** womit du die Installation startest, danach 
kannst du das ganze mit einem Klick auf **Close** schließen. 


Nun öffnet sich die Verwaltungsoberfläche des FileZilla FTP Servers, den **Host** so wie **Port** kannst du unverändert lassen, das Feld **Password** bleibt zudem leer.
Klicke dort einfach auf Connect:

![](https://screensaver01.zap-hosting.com/index.php/s/kibqZNDz5J8YKwy/preview)

## 👨 Anlegen eines Benutzers

Um via FTP auf deinen Server verbinden zu können muss nun ein entsprechender Benutzer angelegt werden. 
Klicke dazu oberhalb im Menü auf **Edit** und dann auf **Users**:

![](https://screensaver01.zap-hosting.com/index.php/s/zXHCBymFWHmbMTk/preview)


Mit einem Klick auf **Add** kannst du dort dann einen neuen Benutzer hinzufügen:

![](https://screensaver01.zap-hosting.com/index.php/s/n9SMFbDxgi8k59y/preview)

In diesem Beispiel heist der Benutzer **Testbenutzer**, du kannst natürlich einen eigenen Namen wählen.

### 🔒 Passwort und Berechtigungen setzen

Um für den Benutzer das Passwort zu setzen aktivierst du dieses einfach mit einem Klick auf das Feld **Password**, dahinter trägst du dann das Passwort für den Benutzer ein:

![](https://screensaver01.zap-hosting.com/index.php/s/snjxbG2FNnYD6nX/preview)

Damit der Benutzer auch die entsprechenden Berechtigungen hat musst du noch festlegen auf welche Verzeichnisse dieser zugreifen darf, dazui genügt ein Klick auf **Shared Folders** und anschließend ein weiterer Klick auf **Add**:  

![](https://screensaver01.zap-hosting.com/index.php/s/MwXRFeKx6Fti9mT/preview)

In diesem Beispiel erhält der Benutzer lediglich Zugriff auf das Verzeichnis **Dokumente**, dieses wählst du dann mit einem Linksklick aus und klickst auf **OK**:

![](https://screensaver01.zap-hosting.com/index.php/s/4zjzLP7LDnaxdAY/preview)

> ACHTUNG! Aus Sicherheitsgründen solltest du einem Benutzer immer nur Zugriff auf bestimmte Ordner geben, zum Beispiel zu deinem Gameserver.

Anschließend kannst du dem Benutzer noch die nötigen Berechtigungen geben um in dem gewählten Verzeichnis Dateien hochladen, herunterladen, löschen oder auch neue Verzeichnisse
oder zu löschen zu können:

![](https://screensaver01.zap-hosting.com/index.php/s/BeQYGibMayzorm8/preview)

Das Fenster kannst du dann durch einen Klick auf **OK** schließen. 


## 🔥Freigabe in der Windows-Firewall

Um eine Verbindung zu deinem FTP Server zu ermöglichen, muss nun noch die Anwendung des FTP Servers in der Windows-Firewall freigegeben werden, dazu öffnest du die Firewall-Einstellungen 
unter **Systemsteuerung\System und Sicherheit\Windows Firewall** und klickst dort links oben auf **Eine App oder ein Feature durch die Windows Firewall zulassen**.
Im folgenden Fenster wählst du dann die freizugebene Anwendung aus:

![](https://screensaver01.zap-hosting.com/index.php/s/xRaqrAmz6Gapstb/preview)

In diesem Beispiel lautet der Pfad **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/iA54gQfcTWXs9e7/preview)

Danach kannst du das ganze mit einem Klick auf **OK** schließen, eine Verbindung zu deinem FTP Server ist nun möglich. 



