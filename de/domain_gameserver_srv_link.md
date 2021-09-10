---
id: domain_gameserver_srv_link
title: Domains: Gameserver-Weiterleitung einrichten
description: Informationen wie du eine Weiterleitung von deiner Domain auf einen Gameserver einrichtest - ZAP-Hosting.com Dokumentationen
sidebar_label: Domain Gameserver Weiterleitung
---

> Bitte beachte dass es immer bis zu 24 Stunden dauern kann bis Änderungen an DNS Einträgen aktiv werden!

## Domain auf Gameserver weiterleiten
Du kannst entweder deine Domain vollständig, oder lediglich eine Subdomain auf deinen Gameserver weiterleiten.
So muss sich niemand die komplizierte IP Adresse welche aus Zahlen besteht merken sondern kann sich einfach mithilfe der Domain auf deinen Gameserver verbinden.

## Wie funktioniert das?

### Bevor wir mit der Erstellung von Einträgen in den DNS Einstellungen der Domain beginnen, hier ein paar Informationen vorab:
Für die Weiterleitung der IP Adresse wird entweder eine Subdomain erstellt welche auf die IP Adresse des Gameservers leitet, oder du leitest die komplette Domain ohne Subdomain weiter.
Dies würde bereits ausreichen wenn der Gameserver den Standartport des jeweiligen Spiels verwendet.
Verwendet der Gameserver jedoch einen anderen Port als den Standartport des jeweiligen Spiels, wird zusätzlich noch ein sogenannter **SRV Eintrag**
benötigt um die Subdomain auf den richtigen Port weiterleiten zu können.

> Nicht alle Spiele unterstützen die Weiterleitung einer Domain auf den Spielport per SRV Eintrag, informiere dich daher vorher ob 
dein Spiel SRV Einträge unterstützt.


### SRV Service
Der Servicename hängt vom jeweiligen Spiel ab und beginnt immer mit einem **Unterstrich**.
Zum Beispiel lautet der Servicename für einen Minecraft Gameserver immer **_minecraft** und für einen FiveM Gameserver **_cfx**.


### SRV Protokoll
Als Protokoll geben wir das für die Verbindung verwendete Internetprotokoll an. Hier stehen **UDP** und **TCP** zur Verfügung.
Welches Protokoll hier verwendet wird hängt ebenfalls vom jeweiligen Spiel ab, die Angabe des Protokolls beginnt ebenfalls immer
mit einem **Unterstrich** und lautet entweder **_udp** oder **_tcp**.

## Vorbereitung
Um deine Domain ohne die Erstellung einer Subdomain auf einen Gameserver weiterzuleiten, öffnest du zuerst deine Domain indem du
im Dashboard auf diese klickst, anschließend öffnest du die DNS-Verwaltung über das Menü auf der linken Seite.

![](https://screensaver01.zap-hosting.com/index.php/s/4X38fmafBRHt5dG/preview)

Dort siehst du nun alle bereits vorhandenen DNS Einträge für deine Domain.

![](https://screensaver01.zap-hosting.com/index.php/s/pBxr2seQiFqNyom/preview)

## ⛏ Weiterleitung der Domain für Minecraft
Zunächst muss für die korrekte Weiterleitung auf Minecraft Server sowohl IP und Port von dem Minecraft Server rausgesucht werden auf welchen weitergeleitet werden soll.
Mit diesen Daten können nun die nachfolgenden Schritte befolgt werden.

In unserem Beispiel nutzen wir als Domainnamen die "testserver-domain.de", als Server IP "123.123.123.123" und PORT "25500".

### Erstellung A Record
Für die Erstellung von einem neuen Record muss der Button "**Neuer Eintrag**" genutzt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/DAobcpEmfk8Apbz/preview)

Dabei öffnet sich dann ein Fenster mit vier Feldern welche befüllt werden müssen:

![](https://screensaver01.zap-hosting.com/index.php/s/nzZje7jpwxpEsNZ/preview)

Der "**Name**" ist die Haupt- oder auch Subdomain über welche die Weiterleitung auf die IP erfolgt, dieser Name ist frei wählbar. Der "**Typ**" wird in diesem Schritt auf "**A**" belassen. Bei dem "**Wert**" muss dann nur noch die IP von dem Minecraft Server eingetragen werden welche vorher rausgesucht wurde.
In unserem Beispiel sieht es daher wie folgt aus.

![](https://screensaver01.zap-hosting.com/index.php/s/SRjQ9N5ZKPGdwCw/preview)

Sobald gespeichert wird dieser Eintrag auch korrekt angezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/z5MNifTEEECApEb/preview)

### Erstellung SRV Record
Nun muss noch ein SRV Record erstellt werden, dieser dient zur Portweiterleitung welche erforderlich ist, wenn man nicht den Default Port besitzt.
Dafür also erneut auf den Button "**Neuer Eintrag**". 

![](https://screensaver01.zap-hosting.com/index.php/s/DAobcpEmfk8Apbz/preview)

Hierbei muss bei "**Name**" nun das Protokol als auch die Verbindungsdomain rein. Der Domainname welcher dort eingetragen wird, wird später für die Verbindung zu dem Server genutzt. Als "**Typ**" wird in diesem Schritt über das Drop Down Menü der Wert "**SRV**" ausgewählt:

![](https://screensaver01.zap-hosting.com/index.php/s/etaCx7mpay62TGJ/preview)

Bei dem "**Wert**" müssen nun drei Werte eingetragen werden, erst die Priorität welche standardmäßig auf 0 belassen werden kann, dann als zweites der Port vom Spieleserver in unserem Beispiel "25500" und zu guter Letzt den Domainnamen des gerade erstellten "**A-Records**".

In unserem Beispiel sieht es dann wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/xXQ7AbjPNxrcaK9/preview)

### Troubleshooting & Ergebnis
> WICHTIG! am Ende von dem Eintrag muss ein Punkt geschrieben werden, ohne diesen Punkt versucht das System die Domain anzuhängen. 

Wird dieser Hinweis nicht beachtet, dann macht das System aus minecraft.testserver-domain.de die Weiterleitung zu minecraft.testserver-domain.de.testserver-domain.de wodurch die Weiterleitung fehlschlägt.

Korrekt erstellt sieht das Ergebnis dann wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/bzyZf85yeiCxmYW/preview)

## 🐌 Weiterleitung der Domain für Fivem
Zunächst muss für die korrekte Weiterleitung auf Fivem Server sowohl IP und Port von dem Fivem Server rausgesucht werden auf welchen weitergeleitet werden soll.
Mit diesen Daten können nun die nachfolgenden Schritte befolgt werden.

In unserem Beispiel nutzen wir als Domainnamen die "testserver-domain.de", als Server IP "123.123.123.123" und PORT "30300".

### Erstellung A Record
Für die Erstellung von einem neuen Record muss der Button "**Neuer Eintrag**" genutzt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/DAobcpEmfk8Apbz/preview)

Dabei öffnet sich dann ein Fenster mit vier Feldern welche befüllt werden müssen:

![](https://screensaver01.zap-hosting.com/index.php/s/nzZje7jpwxpEsNZ/preview)

Der "**Name**" ist die Haupt- oder auch Subdomain über welche die Weiterleitung auf die IP erfolgt, dieser Name ist frei wählbar. Der "**Typ**" wird in diesem Schritt auf "**A**" belassen. Bei dem "**Wert**" muss dann nur noch die IP von dem Fivem Server eingetragen werden welche vorher rausgesucht wurde.
In unserem Beispiel sieht es daher wie folgt aus.

![](https://screensaver01.zap-hosting.com/index.php/s/8kyPYTyZaJaMZMm/preview)

Sobald gespeichert wird dieser Eintrag auch korrekt angezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/aiPNTBgpRC5PXqD/preview)

### Erstellung SRV Record
Nun muss noch ein SRV Record erstellt werden, dieser dient zur Portweiterleitung welche erforderlich ist, wenn man nicht den Default Port besitzt.
Dafür also erneut auf den Button "**Neuer Eintrag**".

![](https://screensaver01.zap-hosting.com/index.php/s/DAobcpEmfk8Apbz/preview)

Hierbei muss bei "**Name**" nun das Protokol als auch die Verbindungsdomain rein. Der Domainname welcher dort eingetragen wird, wird später für die Verbindung zu dem Server genutzt. Als "**Typ**" wird in diesem Schritt über das Drop Down Menü der Wert "**SRV**" ausgewählt:

![](https://screensaver01.zap-hosting.com/index.php/s/etaCx7mpay62TGJ/preview)

Bei dem "**Wert**" müssen nun drei Werte eingetragen werden, erst die Priorität welche standardmäßig auf 0 belassen werden kann, dann als zweites der Port vom Spieleserver in unserem Beispiel "30300" und zu guter Letzt den Domainnamen des gerade erstellten "**A-Records**".

In unserem Beispiel sieht es dann wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/TcKi2CQnDFkXbfg/preview)

### Troubleshooting & Ergebnis
> WICHTIG! am Ende von dem Eintrag muss ein Punkt geschrieben werden, ohne diesen Punkt versucht das System die Domain anzuhängen. 

Wird dieser Hinweis nicht beachtet, dann macht das System aus fivem.testserver-domain.de die Weiterleitung zu fivem.testserver-domain.de.testserver-domain.de wodurch die Weiterleitung fehlschlägt.

Korrekt erstellt sieht das Ergebnis dann wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/y7NP22JFk34JKRk/preview)
