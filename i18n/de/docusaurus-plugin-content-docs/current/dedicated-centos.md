---
id: dedicated-centos
title: "Dedicated Server: Installation von CentOS"
description: "Entdecke, wie du CentOS erfolgreich auf deinem Dedicated Server installierst und konfigurierst für optimale Performance und Sicherheit → Jetzt mehr erfahren"
sidebar_label: CentOS installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Folgenden erklären wir dir Schritt für Schritt, wie du das CentOS-Betriebssystem auf deinem Dedicated Server installierst und konfigurierst. Folge diesen Anweisungen genau, damit du das Betriebssystem erfolgreich einrichtest und optimal nutzen kannst.

:::info

Die Struktur der Anleitung basiert auf der Nutzung von CentOS 8.3. Installationen von älteren oder neueren Versionen können im Ablauf leicht abweichen.

:::



## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, das passende ISO-Image des Betriebssystems zu mounten. Es gibt mehrere Möglichkeiten, das ISO zu mounten:

1. Mounten über die Ersteinrichtung
2. Mounten über iLO (Virtual Media)
3. Mounten über iLO (Remote Console)

Wenn du noch nicht vertraut bist mit dem Mounten einer ISO-Datei, empfehlen wir dir unsere [Ersteinrichtung](dedicated-setup.md) oder die [Eigene ISO](dedicated-iso.md) Anleitung.



## Installation

Wenn das ISO erfolgreich geladen wurde, befindet sich der Server im Setup-Prozess.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Tastatur  
Wähle dein bevorzugtes Tastaturlayout

* Zeit & Datum  
Wähle deine Zeitzone aus

* Root-Passwort  
Lege ein Passwort für deinen Root-Account fest. Dieses kann beliebig sein, aber denk daran, ein starkes Passwort zu verwenden und es sicher zu speichern.

* Installationsziel  
Wähle die SSD aus, auf der CentOS installiert werden soll

* Netzwerk & Hostname  
Aufgrund eines Inkompatibilitätsproblems konnte das Netzwerk noch nicht eingerichtet werden, das machen wir am Ende.

Wenn du alle Einstellungen nach deinen Wünschen konfiguriert hast, klicke auf „Installation starten“.

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

Nach Abschluss der Installation entferne die ISO-Datei von deinem Server und klicke auf „System neu starten“.



## Konfiguration

### Netzwerk

Als nächstes konfigurieren wir das Netzwerkgerät, dafür müssen einige Dateien aktualisiert werden. Bitte mounte diese ISO-Datei auf deinem Server, entweder über die Remote-Konsole oder direkt über iLO.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

Nachdem die ISO-Datei erfolgreich gemountet wurde, müssen wir sie im System einbinden, um darauf zugreifen zu können.

```mount /dev/sr0 /mnt```

Die ISO-Datei ist jetzt unter `/mnt` gemountet.

```rpm -i /mnt/be2net.rpm```

Installiere als nächstes das Update-Paket.

```modprobe be2net```

In diesem Schritt führen wir das Update aus, das kann ein paar Sekunden dauern.  
Du kannst jetzt mit `ip a s` prüfen, ob ein Netzwerkgerät namens `eno1` existiert. Falls ja, starte dein System bitte neu.

Nach dem Neustart geht es weiter mit der Konfiguration des Netzwerkgeräts.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Trage bitte folgende Daten in die Datei ein:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Nano verlässt du mit `CTRL+X` und bestätigst mit `Y`.

Jetzt starten wir unser Netzwerkgerät mit `ifup eno1`.

:::info
Dein Dedicated Server sollte jetzt eine funktionierende Internetverbindung haben.
:::





## Abschluss

Glückwunsch, du hast CentOS erfolgreich auf deinem Dedicated Server installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂