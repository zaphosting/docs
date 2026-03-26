---
id: dedicated-freebsd
title: "Dedicated Server: Installation von FreeBSD"
description: "Entdecke, wie du FreeBSD auf deinem Dedicated Server installierst und konfigurierst für optimale Performance und Zuverlässigkeit → Jetzt mehr erfahren"
sidebar_label: FreeBSD installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Folgenden erklären wir dir Schritt für Schritt, wie du das FreeBSD-Betriebssystem auf deinem Dedicated Server installierst und konfigurierst. Folge diesen Anweisungen sorgfältig, damit du das Betriebssystem erfolgreich einrichtest und optimal nutzen kannst.

:::info

Die Anleitung basiert auf der Nutzung von FreeBSD 13.0. Installationen von älteren oder neueren Versionen können im Ablauf leicht abweichen.

:::



## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, das passende ISO-Image des Betriebssystems einzubinden. Es gibt mehrere Möglichkeiten, das ISO zu mounten:

1. Mounten über die Ersteinrichtung
2. Mounten via iLO (Virtual Media)
3. Mounten via iLO (Remote Console)

Falls du noch nicht vertraut bist mit dem Mounten einer ISO-Datei, empfehlen wir dir unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigenes ISO](dedicated-iso.md) Anleitung.



## Installation
Wenn das ISO erfolgreich geladen wurde, befindet sich der Server im Setup-Prozess.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Starte die Installation mit `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Wähle dein bevorzugtes Tastaturlayout und fahre mit „Continue“ fort.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Gib deinen gewünschten Hostname ein.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Du kannst optionale Systempakete auswählen, die installiert werden sollen. Wenn du fertig bist, bestätige mit OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

In diesem Schritt kannst du Partitionen anlegen. Im Beispiel nutzen wir ein RAID0. Mehr Infos zu RAID findest du in [RAID konfigurieren](dedicated-raid.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Wenn keine Änderungen nötig sind, kannst du mit `Enter` fortfahren.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Da wir ein RAID0 nutzen, wählen wir keine Redundanz.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Markiere dein Volume mit `Space` und bestätige mit `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

Wir bestätigen, dass alle Daten gelöscht werden.

:::info
Dein Server verarbeitet jetzt die Einrichtung, das kann einige Minuten dauern.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Bitte gib dein Passwort ein und bestätige mit `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Wähle bei der IPv4/IPv6-Konfiguration „No“, das wird am Ende erledigt.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Wähle „Yes“ und stelle deine Zeitzone sowie Datum/Uhrzeit ein.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Du kannst festlegen, welche Dienste beim Serverstart automatisch gestartet werden.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Falls nötig, kannst du die Sicherheitseinstellungen anpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

Die Einrichtung ist abgeschlossen, wähle „Exit“ und bestätige mit `Enter`.

:::info
Entferne das ISO-Image in deinem iLO und wähle „Reboot“.
:::



## Konfiguration

### Netzwerk

Um das Netzwerkgerät zu aktivieren, melde dich bitte mit deinem Passwort am System an.

Öffne die Datei loader.conf mit einem Editor deiner Wahl, z.B. `ee /boot/loader.conf` und füge folgende Zeile hinzu:

```if_oce_load="YES"```

Verlasse den Editor mit `CTRL+C` und tippe exit, danach starte deinen Dedicated Server neu.

***

Nach dem Neustart müssen wir die rc.conf anpassen, z.B. mit `ee /etc/rc.conf`, und folgende Zeile hinzufügen:

```
ifconfig_oce0="DHCP"
```

:::caution
Der Name des Netzwerkadapters im Beispiel **oce0** kann abweichen. Achte darauf, den korrekten Netzwerkadapter anzugeben. Das kannst du mit dem Befehl ifconfig prüfen. Die IP-Adresse wird dann automatisch per DHCP bezogen.
:::

Das sollte dann ungefähr so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Verlasse den Editor mit `CTRL+C` und tippe „exit“. Führe anschließend den Befehl `/etc/netstart` einmal aus.

:::info
Dein Server sollte jetzt eine aktive Internetverbindung haben.
:::



## Abschluss

Glückwunsch, du hast FreeBSD erfolgreich auf deinem Dedicated Server installiert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – wir helfen dir gerne! 🙂