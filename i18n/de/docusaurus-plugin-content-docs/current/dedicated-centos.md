---
id: dedicated-centos
title: Dedicated Server - CentOS installieren
description: Informationen zu der Installation des CentOS Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: CentOS installieren
---

:::info
In diesem Beispiel wird die Installation von CentOS 8.3 durchgeführt
:::

## Vorbereitungen
Wähle in deinem ZAP-Interface die gewünschte ISO von CentOS aus und lasse den Server mit der ISO booten, bis dieser im Setup ist.

:::info
Die Navigation im Setup-Prozess erfolgt ganz bequem mit deiner Maus
:::

***

## Das Setup
Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Keyboard
Wähle hier dein gewünschtes Tastaturlayout

* Time & Date 
Wähle deine gewünschte Zeitzone

* Root Password
Wähle das gewünschte Passwort, für den Root-Account

* Installation Destination
Wähle die SSD auf welche CentOS installiert werden soll

* Network & Hostname
Aufgrund einer Inkompatibilität im Kernel muss zuerst ein Update eingespielt werden, damit dein Dedicated Server eine Netzwerkverbindung aufbauen kann.
Die genauen Schritte werden unter Netzwerk erklärt.

Wenn du alles gewünschte konfiguriert hast, klicke auf "Begin Installation"

***

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

Wenn die Installation abgeschlossen ist, entferne die ISO-Datei von deinem Server und klicke "Reboot System"

## Netzwerk

In diesem Schritt muss noch die Netzwerkschnittstelle konfiguriert werden, hierzu ist ein Update notwendig.
Lade unsere ISO-Datei in deinen Server, entweder über deine Remote Console oder die iLO selbst.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

Nachdem die ISO-Datei erfolgreich eingebunden ist, müssen wir diese noch mounten, um darauf zugreifen zu können.

```mount /dev/sr0 /mnt```

Die ISO-Datei ist nun nach /mnt gemountet.

```rpm -i /mnt/be2net.rpm```

Wir müssen jetzt das Update Paket laden.

```modprobe be2net```

Nun das Paket ausführen und installieren. Das kann einen kurzen Augenblick dauern.
Danach kann mit `ip a s` geprüft werden, ob unser Netzwerkadapter `eno1` nun angezeigt wird, falls ja, müssen wir nun das System neu starten.

Nach einem Neustart müssen wir jetzt noch den Netzwerkadapter selbst konfigurieren.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

In dieser Datei müssen wir folgenden Inhalt eintragen:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Mit `STRG+X` und `Y` velassen wir nano wieder und speichern die Änderungen.

Als Letztes müssen wir noch den Netzwerkadapter starten, dies kann mit `ifup eno1` erledigt werden.

:::info
Dein Dedicated Server hat nun eine Internetverbindung
:::
