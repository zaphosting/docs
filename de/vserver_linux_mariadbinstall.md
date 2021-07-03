---
id: vserver_linux_mariadbinstall
title: vServer: MariaDB (MySQL) auf Server installieren
descriptin: Informationen, wie du MariaDB (MySQL) auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: MariaDB (MySQL) Installation
---

Im folgenden lernst du wie du einen MariaDB (MySQL) Server auf deinem Linux vServer oder Rootserver installieren kannst. 
In den Beispielen wird Debian 10 als Betriebssystem verwendet, die Befehle können bei anderen Linux Distributionen abweichen.
Verbinde dich nun via SSH mit deinem Server, wie das funktioniert erfähst du hier: [Erstzugriff (SSH) unter Linux](https://zap-hosting.com/guides/docs/de/vserver_linux_ssh)

## 🔄 Aktualisieren der Pakete

Zu Beginn müssen vorhandene Pakete aktualisiert werden, dies geschieht mithilfe des folgenden Befehls: **apt update**

![](https://screensaver01.zap-hosting.com/index.php/s/HiKJ3N2jMkEwFtG/preview)

Dadurch werden nun alle Paketquellen aktualisiert, im Anschluss kannst du die Aktualisierungen mit folgendem Befehl installieren, sofern welche vorhanden sind: **apt upgrade -y**


## 📥 Starten der Installation

Die Installation von MariaDB (MySQL) startest du mit folgendem Befehl: **apt install mariadb-server mariadb-client -y**


## ⚙️ Konfiguration
Nachdem die Installation abgeschlossen ist gibst du folghenden Befehl ein um die Konfiguration des Servers zu starten: **mysql_secure_installation**

Führe nun die Konfiguration deines MariaDB (MySQL) Servers durch, im folgenden legen wir auch ein Passwort für deinen Server fest.

![](https://screensaver01.zap-hosting.com/index.php/s/PTTfCaLgTbTcPXn/preview)

Dort übersprichst du die Eingabe vorerst durch das drücken auf **Enter**, das Passwort für den root User legen wir im gleich fest.

> Bei dem User root handelt es sich um den Hauptbenutzer deines MariaDB (MySQL) Servers!

Nun wirst du gefragt ob du ein Passwort für den Benutzer root setzen möchtest, dieses bestätigst du mit **y** für yes, also ja.

Im Anschluss gibst du dort das neue Passwort für den Benutzer root ein.


> Während der Eingabe des Passwortest kannst du dieses zwar nicht sehen, das ist jedoch normal und dein Passwort wird trotzdem hinterlegt. Achte unbedingt darauf ein sicheres 
Passwort für deinen root Benutzer zu wählen und verwahre dieses an einem sicheren Ort. 

![](https://screensaver01.zap-hosting.com/index.php/s/2EaytsgrWYqNPjg/preview)

Nun wirst du gefragt ob du anonyme Benutzer von deinem Server entfernen möchtest, dies solltest du aus Sicherheitsgründen auf jeden Fall tun, daher bestätigst du auch dies
mit einem **y** für yes, also ja: 

![](https://screensaver01.zap-hosting.com/index.php/s/j8XJdEXn2jQryDf/preview)

In der folgenden Abfrage legst du fest ob der Benutzer root von Außen zum Server verbinden darf, dies solltest du aus Sicherheitsgründen ebenfalls deaktivieren und bestätigst dies
daher mit **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/a6D5D9i6dpXYYGX/preview)

Im nächsten Schritt bestätigst du ebenfalls mit **y** um die von MariaDB (MySQL) mitgelieferte Testdatenbank zu entfernen, diese benötigst du nicht und daher kann diese einfach 
gelöscht werden:

![](https://screensaver01.zap-hosting.com/index.php/s/icwxknJRHySGgpg/preview)


Zum Abschluss der Konfiguration wirst du gefragt ob du die gesetzten Berechtigungen der Datenbank aktualisieren möchtest, dies bestätigst du ebenfalls mit **y** damit
unter anderem das zuvor gesetzte Passwort für den root Benutzer aktiv wird:

![](https://screensaver01.zap-hosting.com/index.php/s/2LwRwdPP9MwDFwr/preview)


Dein MariaDB (MySQL) Server ist nun einsatzbereit!

![](https://screensaver01.zap-hosting.com/index.php/s/LR8gWDmrQnBm8D5/preview)

