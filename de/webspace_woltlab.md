---
id: webspace_woltlab
title: Webspace: Woltlab Forensoftware installieren
description: Informationen, wie du die Woltlab Forensoftware auf deinen Webspace von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Woltlab installieren

---



## Was ist Woltlab?

Woltlab ist eine verbreitete Forensoftware, welche erstmals 2001 veröffentlicht wurde und seitdem weiterhin entwickelt wird. In dieser Anleitung erklären wir, wie diese Forensoftware auf unserem Webspace Produkt installiert werden kann. 

![img](https://screensaver01.zap-hosting.com/index.php/s/yzDHFJ4ELHBSEYf/preview)



## Woltlab einrichten

### Vorbereitung

Bevor die eigentliche Installation von Woltlab durchgeführt werden kann, müssen gewisse Vorbereitungen vorgenommen werden. Dazu gehören das Besorgen der Forensoftware, die Einrichtung der zu verwendenden Datenbank und der Mailserver (E-Mail Adresse)



**Software**

Die offiziellen Dateien der Forensoftware (Installer) können auf der offiziellen Webseite von Woltlab heruntergeladen werden. Der Download dazu ist hier zu finden: [WoltLab Suite Core](https://www.woltlab.com/woltlab-suite-download/)

Diese muss heruntergeladen werden. Man erhält dann eine ZIP-Datei, die dann auf dem lokalen Computer vorher noch entpackt werden muss, bevor diese hochgeladen werden kann. In der ZIP-Datei befindet sich ein Ordner mit dem Namen **upload**. Dieser Ordner sollte drei Dateien beinhalten (WCFSETUP.tar.gz, install.php und test.php). Diese Dateien werden benötigt.

Das Hochladen der Dateien kann entweder per FTP oder über den File-Manager durchgeführt werden. In dem Beispiel zeigen wir es anhand des File-Managers. Diesen findest du im Dashboard deines Webspaces unter **Datei-Manager**. Dort angelangt ziehen wir die drei Dateien, die wir aus der ZIP-Datei bekommen haben per Drag-and-drop in den File-Manager. 

![img](https://screensaver01.zap-hosting.com/index.php/s/RTqRZWrRKcDCrdr/preview)
![img](https://screensaver01.zap-hosting.com/index.php/s/B7CiGrHxSJocyKz/preview)
![img](https://screensaver01.zap-hosting.com/index.php/s/yCrPoCtYksiRo5y/preview)

**Datenbank**

Als Nächstes muss die Datenbank angelegt werden, in der später alle Informationen vom Forum gespeichert werden sollen. Klicke dazu wieder auf **Websites & Domains** und dann auf **Datenbanken**. Dort klicken wir dann auf **Datenbank hinzufügen**, tragen Den **Datenbanknamen** so wie den gewünschten **Benutzernamen** und das **Passwort** ein und klicken dann auf **OK**: 

![img](https://screensaver01.zap-hosting.com/index.php/s/oDMpf3csBinesbg/preview)


**Mailserver (E-Mail Adresse)**

Um einen Account beim Forum zu registrieren wird ein Mailserver mit einer E-Mail-Adresse benötigt, damit die Registrierungsmails auch an die Benutzer verschickt werden können. Eine Anleitung zur Einrichtung solch einer E-Mail-Adresse findest du hier: [E-Mails verschicken](https://zap-hosting.com/guides/docs/de/webspace_plesk_sendmail/)



### Installation

Wenn alle Schritte von der Vorbereitung erfüllt wurden, dann kann mit der eigentlichen Einrichtung von WoltLab begonnen werden. Dafür muss nun im Internetbrowser die Installer Datei (**install.php**) von der Forensoftware aufgerufen werden, auf unserem Test-Webspace ist dies **https://zap65083-1.plesk06.zap-webspace.com/install.php**. Das sieht dann so aus: 

![img](https://screensaver01.zap-hosting.com/index.php/s/PbSAPfaTJ68FKeC/preview)


Dort wird zu Beginn festgelegt, welche Sprache der Installationsassistent verwenden soll. Wähle die Sprache aus und klicke im Anschluss auf **Weiter**. Als Nächstes müssen für die Nutzung der Forensoftware die Lizenzbestimmungen von WoltLab zugestimmt werden. 

Daraufhin sollte eine Übersicht der benötigten Systemvoraussetzungen angezeigt werden. Diese beinhalten zum PHP, Arbeitsspeicher etc. Standardmäßig sollten das Webspace bereits so konfiguriert sein, dass diese alle erfüllt werden. Du kannst dort einfach nach unten scrollen und auf **Weiter** klicken.

Sollten irgendwelche Voraussetzungen nicht erfüllt werden, dann melde dich diesbezüglich bitte im Support. Ansonsten kannst du einfach runterscrollen und auf **Weiter** klicken. Als nächstes kannst du festlegen unter welchem Pfad das Forum erreichbar sein soll. Wenn das direkt über die Hauptdomain stattfinden soll also z.B. ohne ein /forum, dann kannst du die Option einfach so lassen wie sie ist. 



Daraufhin wird der Installationspfad des Forums festgelegt, diesen solltest du im Normalfall unverändert lassen. Dort kannst du auf **Weiter** klicken:

![img](https://screensaver01.zap-hosting.com/index.php/s/wN3r3CMp93idrQY/preview)


Im Anschluss kann ausgewählt werden welche Sprachen das Forum unterstützen soll, hier ist sowohl **Deutsch** als auch **Englisch** möglich:

![img](https://screensaver01.zap-hosting.com/index.php/s/FPBRe92rezZxKHW/preview)


Nun steht die Konfiguration der Datenbank an, welche bereits im Voraus erstellt wurde. Die Datenbank Informationen von der erstellten Datenbank müssen nun dort eingetragen werden: 



![img](https://screensaver01.zap-hosting.com/index.php/s/yxZFATYeLJzYZA3/preview)



Die Datenbank wird im Anschluss konfiguriert. Das kann einen Augenblick dauern. Im Anschluss kann dann ein Administrator Account erstellt werden, worüber später die Verwaltung vorgenommen werden kann. 

![img](https://screensaver01.zap-hosting.com/index.php/s/X46Qoc5TwaDENzF/preview)

Im Anschluss startet die Paketinstallation, dort wählen wir noch die folgenden frei Pakete aus: 

![img](https://screensaver01.zap-hosting.com/index.php/s/Z76HmkR6TNkxqKs/preview)
![img](https://screensaver01.zap-hosting.com/index.php/s/WapwQ3nP5fc95Q8/preview)

Im Anschluss kann dann die erstmalige Einrichtung in der Verwaltungsoberfläche abgeschlossen werden. Dort angelangt können dann Informationen wie der Titel der Webseite, Zeitzone, Mail Einstellungen, Lizenzschlüssel etc. vorgenommen werden. Wichtig dabei ist es, dass die korrekten E-Mail Informationen hinterlegt werden, damit auch erfolgreich Mails verschickt werden können. Ebenfalls muss dort dann auch der Lizenzschlüssel von Woltlab eingetragen werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/By8wZ3JcZg2knyn/preview)
![img](https://screensaver01.zap-hosting.com/index.php/s/Fafm4pSqAAcFKPE/preview)

> Woltlab ist kostenpflichtig und kann daher auch nur mit einem gültigen Authentifizierung-Code verwendet werden. 


 Im Anschluss kannst du dann dein Forum über die von dir definierte URL erreichen.
