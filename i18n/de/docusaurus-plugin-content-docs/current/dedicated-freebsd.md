---
id: dedicated-freebsd
title: "Dedicated Server: Installation von FreeBSD"
description: Informationen zu der Installation des FreeBSD Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: FreeBSD installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Folgenden wird dir Schritt für Schritt erklärt, wie du das FreeBSD Betriebssystem auf deinem Dedicated Server installieren und konfigurieren kannst. Folge diesen Anweisungen sorgfältig, um sicherzustellen, dass du das Betriebssystem erfolgreich einrichtest und optimal nutzt.

:::info
Der Aufbau der Anleitung basiert auf der Verwendung des FreeBSD 13.0 Betriebssystems. Installationen von früheren oder neueren Versionen können hinsichtlich des Prozesses leicht abweichen. 
:::

<InlineVoucher />

## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, dass die entsprechende ISO vom Betriebssystem gemountet wird. Für das Mounten gibt es mehrere mögliche Wege: 

1. Mounten über die Ersteinrichtung
2. Mounten über die iLO (Virtual Media)
3. Mounten über die iLO (Remote Console)

Solltest du mit dem Mounten einer ISO-Datei noch nicht vertraut sein, dann schaue dir am besten unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung an.



## Installation

Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Wir starten die Installation mit `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Wähle die gewünschte Keymap aus, und bestätigen mit Continue.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Wähle den gewünschten Hostname

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Wähle optionale Systempakete, welche installiert werden sollen und bestätige mit OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

In diesem Schritt können Partitionen erstellt werden, in diesem Beispiel nutzen wir ein RAID0. Mehr Informationen zur Raid Einstellungen findest du in der spezifischen Anleitung dafür.

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Sofern keine weiteren Änderungswünsche bestehen, ebenfalls einfach mit Enter bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Wir wählen in unserem Beispiel, keine Redundanz, da es sich um ein RAID0 handelt.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Wähle deinen Datenträger mit der `Leertaste` aus und bestätige dann mit `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

Wir bestätigen das alle Daten überschrieben werden dürfen.

:::info
Dein Server führt nun das Setup aus, dies kann einige Zeit in Anspruch nehmen
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Gib dein gewünschtes Serverpasswort ein und bestätige deine Eingabe mit `Enter`.

***

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Wir wählen "No" bei der IPv4 und IPv6 Konfiguration, diese muss zum schluss erledigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Wir wählen "Yes" und wählen danach unsere Zeitzoneneinstellungen sowie Datum und Uhrzeit.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Hier könnten die Dienste verändert werden, welche beim Serverstart automatisiert gestartet werden.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Falls notwendig, könnten hier noch Sicherheitseinstellungen getroffen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

Das Setup ist beendet. Wir wählen "Exit" und bestätigen mit Enter.

:::info
Entferne nun die ISO-Datei aus deiner iLO und wähle Reboot
:::

## Konfiguration

### Netzwerk

Um den Netzwerk-Adapter zu aktivieren, logge dich mit dem Passwort in dein System ein

Öffne die loader.conf mit einem Editor, beispielsweise `ee /boot/loader.conf` und füge Folgendes hinzu:

```if_oce_load="YES"```

Mit `STRG+C` kann der Editor wieder verlassen werden, nach dem Tastendruck muss noch "exit" eingegeben werden, starte nun deinen Dedicated Server neu

***

Nach dem Neustart muss noch die rc.conf bearbeitet werden `ee /etc/rc.conf`, füge Folgendes hinzu:

```
ifconfig_oce0="DHCP"
```

:::info
Achtung: Der Name des Netzwerkadapters in dem Beispiel **oce0** kann abweichen. Stelle sicher, dass du den richtigen Netzwerk-Adapter angibst. Das kannst du über den ifconfig Befehl nachvollziehen. Die Informationen werden im Anschluss automatisch über den DHCP Server bezogen. 
:::

Das sollte dann in etwa so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Verlasse den Editor ebenfalls mit `STRG+C` und der Eingabe von "exit" und führe zum Abschluss einmal `/etc/netstart` aus

:::info
Dein Server sollte nun eine Netzwerkverbindung haben
:::





## Abschluss

Glückwunsch, du hast das FreeBSD Betriebssystem erfolgreich installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
