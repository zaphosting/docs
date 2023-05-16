---
id: vserver_linux_add_ip
title: vServer IPv4 Adresse zum Server hinzufügen
description: Informationen, wie du eine IPv4 Adresse zu deinem vServer von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: IPv4 Adresse hinzufügen
---

## Zusätzlich(e) IPv4 Adresse(en) hinzufügen

Sofern diese nicht bereits automatisch eingetragen wurde, kann diese manuell in die Netzwerkconfig eingetragen werden. 

### Schritt 1
Die Netzwerkconfig wird mit einem Editor geöffnet, z.b mit "nano". 
```
sudo nano /etc/network/interfaces
```
> ⚠️ Achtung: Die Config muss mit root Rechten bearbeitet werden.

In der Config ist bereits ein Eintrag vorhanden der z.b so aussehen könnte:
```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address 123.123.123.100
        netmask 255.255.255.0
        gateway 123.123.123.1
```
Dort wird das Interface "eth0" angegeben sowie die IPv4, ihre Netzmaske und Gateway. 

### Schritt 2

Um eine weitete IPv4 hinzuzufügen, muss ein weiteres Interface eingetragen werden, z.b "eth1".
Die zusätzliche IPv4 lautet z.b 124.124.124.55.
Die Netzwerkmaske lautet 255.255.255.0, da es ein Klasse C Netz ist. 
Das Gateway ist immer die IPv4 Adresse mit einer 1 am Ende.

>⚠️Wichtig: Es muss die zusätzliche IPv4 sein, die im Webinterface unter IP Adressen angezeigt wird. 


Die zusätzliche Schnittstelle sehe dann wie folgt aus: 

```
allow-hotplug eth1
iface eth1 inet static
        address 124.124.124.55
        netmask 255.255.255.0
        gateway 124.124.124.1
```

Zusammen mit der Schnittstelle "eth0" sieht die Config nun so aus:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address 123.123.123.100
        netmask 255.255.255.0
        gateway 123.123.123.1
        
allow-hotplug eth1
iface eth1 inet static
        address 124.124.124.55
        netmask 255.255.255.0
        gateway 124.124.124.1
```
Die Confing muss dann gespeichert werden, bei "nano" z.b mit **STRG+X, y dann Enter**

### Schritt 3

Das Netzwerkmodul muss nun neugestartet werden, damit die die neue IPv4 Adresse aktiv wird, dies geschieht mit folgendem Befehl:
```
sudo service networking restart
```
Sobald dies abgeschlossen ist, ist der Server über beide IPv4 Adressen erreichbar. 
Dies kann z.b mit einem Ping Check via Windows CMD oder Linux Terminal, je nach eigenem Rechner Betriebsystem geprüft werden:
```
ping DieNeueIP
```
Die gleichen Schritte sind bei noch mehr zusätzliche IPv4 Adressen zu erledigen, das Interface erhöht sich dann immer um eine Zahl z.b "eth2", "eht3" usw.

✅Die zusätzliche IPv4 Adresse ist nun erfolgreich eingerichtet.
