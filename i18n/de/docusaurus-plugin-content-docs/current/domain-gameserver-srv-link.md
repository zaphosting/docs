---
id: domain-gameserver-srv-link
title: "Domain: Gameserver Weiterleitung einrichten"
description: Informationen, wie du eine Weiterleitung von deiner Domain auf einen Gameserver einrichtest - ZAP-Hosting.com Dokumentation
sidebar_label: Gameserver Weiterleitung
---

:::info
Bitte beachte, dass es immer bis zu 24 Stunden dauern kann bis Änderungen an DNS Einträgen aktiv werden!
:::

## Einführung
Du kannst entweder deine Domain vollständig, oder lediglich eine Subdomain auf deinen Gameserver weiterleiten.
So muss sich niemand die komplizierte IP-Adresse, welche aus Zahlen besteht merken, sondern kann sich einfach mithilfe der Domain auf deinen Gameserver verbinden.

## Funktionsweise

Für die Weiterleitung der IP-Adresse wird entweder eine Subdomain erstellt, welche auf die IP-Adresse des Gameservers leitet, oder du leitest die komplette Domain ohne Subdomain weiter.
Dies würde bereits ausreichen, wenn der Gameserver den Standard Port des jeweiligen Spiels verwendet.
Verwendet der Gameserver jedoch einen anderen Port als den Standard Port des jeweiligen Spiels, wird zusätzlich noch ein sogenannter **SRV Eintrag**
benötigt, um die Subdomain auf den richtigen Port weiterleiten zu können.

:::info
Nicht alle Spiele unterstützen die Weiterleitung einer Domain auf den Spielport per SRV Eintrag, informiere dich daher vorher, ob dein Spiel SRV Einträge unterstützt.
:::


### SRV Service
Der Servicename hängt vom jeweiligen Spiel ab und beginnt immer mit einem **Unterstrich**.
Zum Beispiel lautet der Servicename für einen Minecraft Gameserver immer **_minecraft** und für einen FiveM Gameserver **_cfx**.


### SRV Protokoll
Als Protokoll geben wir das für die Verbindung verwendete Internetprotokoll an. Hier stehen **UDP** und **TCP** zur Verfügung.
Welches Protokoll hier verwendet wird, hängt ebenfalls vom jeweiligen Spiel ab, die Angabe des Protokolls beginnt ebenfalls immer
mit einem **Unterstrich** und lautet entweder **_udp** oder **_tcp**.

## Vorbereitung
Um deine Domain ohne die Erstellung einer Subdomain auf einen Gameserver weiterzuleiten, öffnest du zuerst deine Domain, indem du
im Dashboard auf diese klickst, anschließend öffnest du die DNS-Verwaltung über das Menü auf der linken Seite.

![image](https://user-images.githubusercontent.com/13604413/172062132-fbd375ad-4fee-4c28-af6f-370005f560eb.png)

Dort siehst du nun alle bereits vorhandenen DNS Einträge für deine Domain.

![image](https://user-images.githubusercontent.com/13604413/172062190-77af42af-4639-4908-91d5-1320684049a9.png)

## Domain Weiterleitung (Minecraft)
Zunächst muss für die korrekte Weiterleitung auf Minecraft Server sowohl IP und Port von dem Minecraft Server rausgesucht werden auf welchen weitergeleitet werden soll.
Mit diesen Daten können nun die nachfolgenden Schritte befolgt werden.

In unserem Beispiel nutzen wir als Domainnamen die "testserver-domain.de", als Server IP "123.123.123.123" und PORT "25500".

### A-Record anlegen
Für die Erstellung von einem neuen Record muss der Button "**Neuer Eintrag**" genutzt werden.

Dabei öffnet sich dann ein Fenster mit vier Feldern, welche befüllt werden müssen:

![image](https://user-images.githubusercontent.com/13604413/172062215-06dc635b-eec9-4ad2-9901-0b7554b7e7b9.png)

Der "**Name**" ist die Haupt- oder auch Subdomain über welche die Weiterleitung auf die IP erfolgt, dieser Name ist frei wählbar. Der "**Typ**" wird in diesem Schritt auf "**A**" belassen. Bei dem "**Wert**" muss dann nur noch die IP von dem Minecraft Server eingetragen werden, welche vorher herausgesucht wurde.
In unserem Beispiel sieht es daher wie folgt aus.

![image](https://user-images.githubusercontent.com/13604413/172062230-a8019e62-9c82-4601-af01-ac5340c1cba5.png)

### SRV-Record anlegen
Nun muss noch ein SRV Record erstellt werden, dieser dient zur Portweiterleitung welche erforderlich ist, wenn man nicht den Default Port besitzt.
Dafür also erneut auf den Button "**Neuer Eintrag**". 

Hierbei muss bei "**Name**" nun das Protokol als auch die Verbindungsdomain rein. Der Domainname, welcher dort eingetragen wird, wird später für die Verbindung zu dem Server genutzt. Als "**Typ**" wird in diesem Schritt über das Drop Down Menü der Wert "**SRV**" ausgewählt:

![image](https://user-images.githubusercontent.com/13604413/172062272-0394edff-aa9c-4587-9a17-77ac74dc3cb5.png)

Bei dem "**Wert**" müssen jetzt drei Werte eingetragen werden, erst die Priorität welche standardmäßig auf 0 belassen werden kann, dann als zweites der Port vom Spieleserver in unserem Beispiel "25500" und zu guter Letzt den Domainnamen des gerade erstellten "**A-Records**".

In unserem Beispiel sieht es dann wie folgt aus:

![image](https://user-images.githubusercontent.com/13604413/172062452-ec6e0fdb-5c6d-4a30-b578-933f5da0446d.png)

### Fehlersuche & Ergebnis
:::info
WICHTIG! Am Ende von dem Eintrag muss ein Punkt geschrieben werden, ohne diesen Punkt versucht das System die Domain anzuhängen. 
:::

Wird dieser Hinweis nicht beachtet, dann macht das System aus minecraft.testserver-domain.de die Weiterleitung zu minecraft.testserver-domain.de.testserver-domain.de wodurch die Weiterleitung fehlschlägt.

## Domain Weiterleitung (FiveM)
Zunächst muss für die korrekte Weiterleitung auf Fivem Server sowohl IP und Port von dem Fivem Server herausgesucht werden auf welchen weitergeleitet werden soll.
Mit diesen Daten können nun die nachfolgenden Schritte befolgt werden.

In unserem Beispiel nutzen wir als Domainnamen die "testserver-domain.de", als Server IP "123.123.123.123" und PORT "30300".

### A-Record anlegen
Für die Erstellung von einem neuen Record muss der Button "**Neuer Eintrag**" genutzt werden.
Dabei öffnet sich dann ein Fenster mit vier Feldern, welche befüllt werden müssen:

![image](https://user-images.githubusercontent.com/13604413/172062501-ad0a0629-3c36-480e-96bb-1c09960d7e78.png)

Der "**Name**" ist die Haupt- oder auch Subdomain über welche die Weiterleitung auf die IP erfolgt, dieser Name ist frei wählbar. Der "**Typ**" wird in diesem Schritt auf "**A**" belassen. Bei dem "**Wert**" muss dann nur noch die IP von dem Fivem Server eingetragen werden, welche vorher herausgesucht wurde.
In unserem Beispiel sieht es daher wie folgt aus.

![image](https://user-images.githubusercontent.com/13604413/172062490-cf3bab81-573c-448a-98a1-fcd12ec0823d.png)

Sobald gespeichert, wird dieser Eintrag auch korrekt angezeigt:

![image](https://user-images.githubusercontent.com/13604413/172062510-8b24fc94-49fa-440e-abb2-7cff693be8d2.png)

### SRV-Record anlegen
Nun muss noch ein SRV Record erstellt werden, dieser dient zur Portweiterleitung welche erforderlich ist, wenn man nicht den Default Port besitzt.
Dafür also erneut auf den Button "**Neuer Eintrag**".

Hierbei muss bei "**Name**" nun das Protokoll als auch die Verbindungsdomain rein. Der Domainname, welcher dort eingetragen wird, wird später für die Verbindung zu dem Server genutzt. Als "**Typ**" wird in diesem Schritt über das Drop Down Menü der Wert "**SRV**" ausgewählt:

![image](https://user-images.githubusercontent.com/13604413/172062652-3400e743-37ba-4906-8c30-8162d05c865c.png)

Bei dem "**Wert**" müssen jetzt drei Werte eingetragen werden, erst die Priorität welche standardmäßig auf 0 belassen werden kann, dann als zweites der Port vom Spieleserver in unserem Beispiel "30300" und zu guter Letzt den Domainnamen des gerade erstellten "**A-Records**".

In unserem Beispiel sieht es dann wie folgt aus:

![image](https://user-images.githubusercontent.com/13604413/172062644-89dcfad2-073c-435f-839d-115dba26bf94.png)

### Fehlersuche & Ergebnis
:::info
WICHTIG! Am Ende von dem Eintrag muss ein Punkt geschrieben werden, ohne diesen Punkt versucht das System die Domain anzuhängen. 
:::

Wird dieser Hinweis nicht beachtet, dann macht das System aus fivem.testserver-domain.de die Weiterleitung zu fivem.testserver-domain.de.testserver-domain.de wodurch die Weiterleitung fehlschlägt.
