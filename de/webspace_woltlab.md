---
id: webspace_woltlab
title: Woltlab installieren
sidebar_label: Woltlab installieren

---



## Was ist Woltlab?

Woltlab ist eine verbreitete Forensoftware, welche erstmals 2001 veröffentlicht wurde und seitdem weiterhin entwickelt wird. In dieser Anleitung erklären wir, wie diese Forensoftware auf unserem Webspace Produkt installiert werden kann. 

![img](https://screensaver01.zap-hosting.com/index.php/s/8cnWkrByjoy29LK/preview)



## Woltlab einrichten

### Vorbereitung

Bevor die eigentliche Installation von Woltlab durchgeführt werden kann, müssen gewisse Vorbereitungen vorgenommen werden. Dazu gehören das Besorgen der Forensoftware, die Einrichtung der zu verwendenden Datenbank und der Mailserver (E-Mail Adresse)



**Software**

Die offiziellen Dateien der Forensoftware (Installer) können auf der offiziellen Webseite von Woltlab heruntergeladen werden. Der Download dazu ist hier zu finden: [WoltLab Suite Core](https://www.woltlab.com/woltlab-suite-download/)

![img](https://screensaver01.zap-hosting.com/index.php/s/Eo5H8tsbynxGyZm/preview)

Diese muss heruntergeladen werden. Man erhält dann eine ZIP-Datei, die dann auf dem lokalen Computer vorher noch entpackt werden muss, bevor diese hochgeladen werden kann. In der ZIP-Datei befindet sich ein Ordner mit dem Namen **upload**. Dieser Ordner sollte drei Dateien beinhalten (WCFSETUP.tar.gz, install.php und test.php). Diese Dateien werden benötigt. Wenn das erledigt wurde, dann kann mit dem Upload der Dateien begonnen werden.

Das Hochladen der Dateien kann entweder per FTP oder über den File-Manager durchgeführt werden. In dem Beispiel zeigen wir es anhand des File-Managers. Diesen findest du im Dashboard deines Webspaces unter **Datei-Manager**. Dort angelangt ziehen wir die drei Dateien, die wir aus der ZIP-Datei bekommen haben per Drag-and-drop in den File-Manager. 

![img](https://screensaver01.zap-hosting.com/index.php/s/4fmHG6wEFrWzagP/preview)



**Datenbank**

Als Nächstes muss die Datenbank angelegt werden, in der später alle Informationen vom Forum gespeichert werden sollen. Klicke dazu wieder auf **Websites & Domains** und dann auf **Datenbanken**. Dort klicken wir dann auf Datenbank hinzufügen und legen eine Datenbank an: 

![img](https://screensaver01.zap-hosting.com/index.php/s/XcegSRpm5A5M7WS/preview)

Im Anschluss auf **OK** klicken und schon wurde die Datenbank hinzugefügt.



**Mailserver (E-Mail Adresse)**

Um einen Account beim Forum zu registrieren wird ein Mailserver mit einer E-Mail-Adresse benötigt, damit die Registrierungsmails auch an die Benutzer verschickt werden können. Eine Anleitung zur Einrichtung solch einer E-Mail-Adresse findest du hier: [E-Mails verschicken](https://zap-hosting.com/guides/docs/de/webspace_plesk_sendmail/)



### Installation

Wenn alle Schritte von der Vorbereitung erfüllt wurden, dann kann mit der eigentlichen Einrichtung von WoltLab begonnen werden. Dafür muss nun im Internetbrowser die Installer Datei (**install.php**) von der Forensoftware aufgerufen werden. Das sieht dann so aus: 

![img](https://screensaver01.zap-hosting.com/index.php/s/ixGkH8sSqCpFjei/preview)



Dort wird zu Beginn festgelegt, welche Sprache der Installationsassistent verwenden soll. Wähle die Sprache aus und klicke im Anschluss auf **Weiter**. Als Nächstes müssen für die Nutzung der Forensoftware die Lizenzbestimmungen von WoltLab zugestimmt werden. 

Daraufhin sollte eine Übersicht der benötigten Systemvoraussetzungen angezeigt werden. Diese beinhalten zum PHP, Arbeitsspeicher etc. Standardmäßig sollten das Webspace bereits so konfiguriert sein, dass diese alle erfüllt werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/daMjPiR7npjGgmA/preview)

Sollten irgendwelche Voraussetzungen nicht erfüllt werden, dann melde dich diesbezüglich bitte im Support. Ansonsten kannst du einfach runterscrollen und auf **Weiter** klicken. Als nächstes kannst du festlegen unter welchem Pfad das Forum erreichbar sein soll. Wenn das direkt über die Hauptdomain stattfinden soll also z.B. ohne ein /forum, dann kannst du die Option einfach so lassen wie sie ist. 



Daraufhin kann festgelegt werden, welche Sprachen das Forum unterstützen soll. Wähle deine gewünschten Sprachen aus und klicke auf weiter. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jns5rMmafrXf68k/preview)



Nun steht die Konfiguration der Datenbank an, welche bereits im Voraus erstellt wurde. Die Datenbank Informationen von der erstellten Datenbank müssen nun dort eingetragen werden: 



![img](https://screensaver01.zap-hosting.com/index.php/s/sgWjswzMZFT4dxQ/preview)



Die Datenbank wird im Anschluss konfiguriert. Das kann einen Augenblick dauern. Im Anschluss kann dann ein Administrator Account erstellt werden, worüber später die Verwaltung vorgenommen werden kann. 

![img](https://screensaver01.zap-hosting.com/index.php/s/CoDQQ99ExorNi6j/preview)



Im Anschluss kann dann die erstmalige Einrichtung in der Verwaltungsoberfläche abgeschlossen werden. Dort angelangt können dann Informationen wie der Titel der Webseite, Zeitzone, Mail Einstellungen, Lizenzschlüssel etc. vorgenommen werden. Wichtig dabei ist es, dass die korrekten E-Mail Informationen hinterlegt werden, damit auch erfolgreich Mails verschickt werden können. Ebenfalls muss dort dann auch der Lizenzschlüssel von Woltlab eingetragen werden.

> Woltlab ist kostenpflichtig und kann daher auch nur mit einem gültigen Authentifizierung-Code verwendet werden. 



![img](https://screensaver01.zap-hosting.com/index.php/s/3qwa7ic6cyRE9eH/preview)



Zu guter Letzt muss unter Paketen dann nur noch das Woltlab Suite Forum (Burning Board) Paket installiert werden:

![img](https://screensaver01.zap-hosting.com/index.php/s/XzQ9sQ2GMsD8JHN/preview)



 Im Anschluss kannst du dann dein Forum über die von dir definierte URL erreichen.
