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

![image](https://user-images.githubusercontent.com/13604413/159171933-8c48ca29-b8f3-450b-980e-b0e06a8550d8.png)

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

![image](https://user-images.githubusercontent.com/13604413/159171942-82667636-b148-4248-a95d-ad3d9ed3ab47.png)

Nun wirst du gefragt ob du anonyme Benutzer von deinem Server entfernen möchtest, dies solltest du aus Sicherheitsgründen auf jeden Fall tun, daher bestätigst du auch dies
mit einem **y** für yes, also ja: 

![image](https://user-images.githubusercontent.com/13604413/159171944-d897a99a-a0f4-421b-bfb9-92c0640f2db0.png)

In der folgenden Abfrage legst du fest ob der Benutzer root von Außen zum Server verbinden darf, dies solltest du aus Sicherheitsgründen ebenfalls deaktivieren und bestätigst dies
daher mit **y**:

![image](https://user-images.githubusercontent.com/13604413/159171945-e7b4f9ef-1ec0-409f-ad5f-dff05f42c561.png)

Im nächsten Schritt bestätigst du ebenfalls mit **y** um die von MariaDB (MySQL) mitgelieferte Testdatenbank zu entfernen, diese benötigst du nicht und daher kann diese einfach 
gelöscht werden:

![image](https://user-images.githubusercontent.com/13604413/159171948-625983b8-897f-4b47-a8a8-e47cc72b90f4.png)


Zum Abschluss der Konfiguration wirst du gefragt ob du die gesetzten Berechtigungen der Datenbank aktualisieren möchtest, dies bestätigst du ebenfalls mit **y** damit
unter anderem das zuvor gesetzte Passwort für den root Benutzer aktiv wird:

![image](https://user-images.githubusercontent.com/13604413/159171953-8a6cb526-6fac-47fd-be04-eb752f57b1a1.png)


Dein MariaDB (MySQL) Server ist nun einsatzbereit!

![](https://screensaver01.zap-hosting.com/index.php/s/LR8gWDmrQnBm8D5/preview)

