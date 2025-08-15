---
id: webspace-wordpress
title: "Webspace: WordPress installieren"
description: Informationen, wie du WordPress auf deinen Webspace von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: WordPress installieren
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

WordPress ist das meist verwendete freie Content-Management-System weltweit. Es wurde ab 2003 von Matthew Mullenweg als Software für Weblogs programmiert und wird als Open-Source-Projekt permanent weiterentwickelt. In dieser Anleitung erklären wir, wie diese Software auf unserem Webspace Produkt installiert werden kann. 

![](https://screensaver01.zap-hosting.com/index.php/s/ddP3y64b4nCW2nq/preview)

<InlineVoucher />

## Vorbereitung

Bevor die eigentliche Installation von WordPress durchgeführt werden kann, müssen gewisse Vorbereitungen vorgenommen werden. Dazu gehört das Besorgen der Software, die Einrichtung der zu verwendenden Datenbank und der Mailserver (E-Mail Adresse).



**Software**

Die Software kann auf der offiziellen Webseite von WordPress heruntergeladen werden. Der Download dazu ist hier zu finden: [WordPress Download](https://de.wordpress.org/download/)

![](https://screensaver01.zap-hosting.com/index.php/s/a9GgdcdgWnExELk/preview)

Beim Download erhält man eine gepackte ZIP-Datei, welche auf dem lokalen Computer entpackt werden muss. Darin befindet sich dann ein Ordner. Dessen Inhalt wird benötigt und muss entweder per **FTP oder Datei-Manager** hochgeladen werden. In dem Beispiel wird die Einrichtung mittels FTP gezeigt. Unter **Websites & Domains** bei **FTP-Access** kannst du einen FTP-Benutzer anlegen.



![](https://screensaver01.zap-hosting.com/index.php/s/nkKsBpyb6GM6Rkp/download/chrome_7Y5hmuXn5f.gif)



Nun verbinden wir uns mit dem erstellten FTP-Account mit dem Webspace. Dort navigieren wir dann in das **httpdocs** Verzeichnis und laden im Anschluss die Dateien der Forensoftware hoch.

![](https://screensaver01.zap-hosting.com/index.php/s/fBDzPzmykfFQGRQ/preview)



**Datenbank**

Als Nächstes muss die Datenbank angelegt werden, in der später alle Informationen von der Webseite gespeichert werden sollen. Klicke dazu wieder auf **Websites & Domains** und dann auf **Datenbanken**. Dort klicken wir dann auf Datenbank hinzufügen und legen eine Datenbank an: 



![](https://screensaver01.zap-hosting.com/index.php/s/99BJeGCHjS9QHkz/download/chrome_Jzw3adOg7G.gif)

Im Anschluss auf **OK** klicken und schon wurde die Datenbank hinzugefügt.



**Mailserver (E-Mail-Adresse)**

Um einen Account beim Forum zu registrieren wird ein Mailserver mit einer E-Mail-Adresse benötigt, damit die Registrierungsmails auch an die Benutzer verschickt werden können. Eine Anleitung zur Einrichtung solch einer E-Mail-Adresse findest du hier: [E-Mails verschicken](webspace-plesk-sendmail.md)



## Installation

Wenn alle Schritte von der Vorbereitung erfüllt wurden, dann kann mit der eigentlichen Einrichtung von WordPress begonnen werden. Dafür muss jetzt im Internetbrowser die Webseite aufgerufen werden. Das sieht dann so aus: 

![](https://screensaver01.zap-hosting.com/index.php/s/3w5gWATLjfDFoan/preview)



Dort angelangt können wir auf **Los geht's!** Klicken, um mit der Einrichtung anzufangen. Als Erstes steht dann die Konfiguration der Datenbank an, welche bereits im Voraus in der Vorbereitung erstellt wurde. Die Datenbankinformationen von der erstellten Datenbank müssen nun dort eingetragen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/KGRpK4s92RYyRCa/preview)



Klicke im Anschluss auf **Senden** und im folgenden Schritt auf **Installation durchführen**.



![](https://screensaver01.zap-hosting.com/index.php/s/6rYLYQRJJRqgKJq/preview)



Jetzt benötigt WordPress noch weitere Informationen. Hier kann der Titel der Webseite, Benutzername, Passwort, und die E-Mail-Adresse angegeben werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/nkos6Kg99cHEHt7/preview)



Wenn alle Felder ausgefüllt wurden, dann muss im Anschluss auf **WordPress installieren** geklickt werden. Die Installation wird dann innerhalb weniger Sekunden abgeschlossen und es öffnet sich das Login-Fenster. Dort kannst du dich jetzt mit deinem erstellten Account einloggen. Im Anschluss kannst du dein WordPress nach deinen Wünschen beliebig einrichten!



![](https://screensaver01.zap-hosting.com/index.php/s/MnLRYMDJCXjJJ8i/download/chrome_4KNjihGpo0.gif)



## Abschluss

Glückwünsch, du hast dein WordPress bei deinem Webspace installiert. olltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!

<InlineVoucher />
