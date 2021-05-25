---
id: vserver_root_unterschied
title: Unterschied Rootserver / V-Server bei ZAP-Hosting
description: Informationen zu den Unterschieden zwischen Rootservern und vServern bei ZAP-Hosting - ZAP-Hosting.com Dokumnentationen
sidebar_label: Unterschied Rootserver / V-Server
---

## 💻 Virtualisierung
### V-Server (Linux)
Unsere Linux V-Server werden mittels LXC virtualisiert.
Dabei handelt es sich um eine Container Virtualisierung.
Mehrere V-Server können somit voneinander isoliert auf einem einzigen Hauptsystem betrieben werden.
Allerdings werden die Resourcen hierbei untereinander geteilt, was zu Leistungsschwankungen führen kann.
Außerden teilen sich Container den gleichen Betriebssystem-Kernel,
weshalb es auch nicht möglich ist andere Betriebssysteme, wie Windows, als LXC-Gast zu starten. 

### Rootserver & Windows V-Server
Die Rootserver sowie Windows V-Server werden mittels KVM vollvirtualisiert.
Eine Vollvirtualisierung unterscheidet sich vom klassichen VServer dadurch, 
dass ein komplett eigenständiger Server simuliert wird, der unabhängig von allen anderen Servern läuft.
Der  Vorteil liegt darin, dass es sich um jeweils eigenständige, abgeschottete  und abgeschlossene Systeme handelt. 
Dadurch laufen die Rootserver stabil und haben eine gleichbleibende Leistung.

## ❓ Was ist für mich die richtige Entscheidung?
Hierbei muss erstmal geschaut werden, was ich mit meinem Server überhaupt vor habe.
Brauche ich den Server für kleine Projekte, wie zum Beispiel für einen Webserver, einen Teamspeak 3 Server oder einen Mailserver , dann reicht ein V-Server aus.
Auch für  Gameserver ist ein V-Server oftmals ausreichend. (Wie zum Beispiel ein kleiner Minecraft Server)

Gerade für größere Projekte ist ein Rootserver oftmals die bessere Entscheidung.
Zum Beispiel wenn ich einen Server für eine Community benötige oder wenn ich Gameserver installieren möchte, welche viel Leistung benötigen.
(Zum Beispiel CS:GO Server (128 Tick) oder Rust Server mit vielen Spielern)
Auch für eine große Webpräsenz ist ein Rootserver die oftmals bessere Wahl.

> Solltest du dir noch immer nicht sicher sein, was für dich die bessere Wahl ist, kannst du dich gerne bei uns im Support melden.
> Teile uns dort mit, was du genau für Wünsche mit dem Server realisieren möchtest und wir beraten dich dann gerne! 


