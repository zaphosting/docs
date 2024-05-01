---
id: dedicated-linux-ubuntu
title: "Dedicated Server: Installation von Ubuntu"
description: Informationen zu der Installation des Ubuntu Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Ubuntu installieren
---



## Einführung

Im Folgenden wird dir Schritt für Schritt erklärt, wie du das Debian Betriebssystem auf deinem Dedicated Server installieren und konfigurieren kannst. Folge diesen Anweisungen sorgfältig, um sicherzustellen, dass du das Betriebssystem erfolgreich einrichtest und optimal nutzt.

:::info

Der Aufbau der Anleitung basiert auf der Verwendung des Ubuntu 20.04 Betriebssystems. Installationen von früheren oder neueren Versionen können hinsichtlich des Prozesses leicht abweichen. 

:::

## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, dass die entsprechende ISO vom Betriebssystem gemountet wird. Für das Mounten gibt es mehrere mögliche Wege: 

1. Mounten über die Ersteinrichtung
2. Mounten über die iLO (Virtual Media)
3. Mounten über die iLO (Remote Console)

Solltest du mit dem Mounten einer ISO-Datei noch nicht vertraut sein, dann schaue dir am besten unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung an



## Installation
Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup.

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Wähle deine gewünschte Sprache des Systems aus und bestätige mit Enter.

:::info
Du kannst mit Tab zwischen den Menüpunkten wechseln und die Auswahl der verschiedenen Sprachen mit "Enter" öffnen
:::

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Wähle dein gewünschtes Tastaturlayout und bestätige deine Eingabe mit "Done".

:::info
Du kannst mit Tab wischen den Menüpunkten wechseln und die Auswahl der verschiedenen Layouts mit "Enter" öffnen
:::

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Dein Server konfiguriert seine Netzwerkschnittstelle automatisiert durch DHCP. Der Adapter `eno1`  ist der Netzwerkadapter deines ZAP Dedicated Servers.Wir bestätigen alles mit "Done".

***

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Wenn du einen Proxy nutzen möchtest, könntest du dies hier einstellen. Ein Proxy ist nicht notwendig.

***

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Unser dedizierter Server steht in Deutschland, somit wählen wir auch den deutschen Mirror-Standort, um die bestmögliche Download-Rate zu erreichen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

In diesem Schritt kannst du die Partitionen deines Systems anpassen, sofern du nur eine große Partition möchtest, wähle einfach "Use an entires disk".

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Das Setup erstellt automatisch die Partitionen, wir bestätigen das, indem wir "Done" auswählen.

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Das Setup vernichtet natürlich alle bestehenden Daten, das akzeptieren wir mit "Continue" und drücken Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

Hier können die Zugangsdaten für deinen Account erstellt werden, du kannst durch die verschiedenen Menüpunkte mit TAB oder den Pfeiltasten navigieren. Wenn du alles eingestellt hast, bitte mit "Done" bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Um deinen Server auch beispielsweise per PuTTY erreichen zu können, muss ein OpenSSH-Server installiert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Ubuntu bietet dir ein paar Paketsammlungen aus, sofern du etwas davon nutzen möchtest, wähle diese einfach aus.

:::info
🎉 Der Server installiert nun das Betriebssystem, nach diesem Schritt ist das Setup beendet.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)

Bitte entferne jetzt die ISO-Datei in deiner iLO, damit dein Server bei einem Neustart nicht wieder das Setup läd.

***

![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)

Wähle "Reboot now" und bestätige, dass du die ISO-Datei entfernt hast.



## Konfiguration

### Passwortänderung des Root Benutzers

Das Passwort des Root-Nutzers kann einfach geändert werden. Trage in der Console `sudo su -` ein und gib dein vorhin gesetztes Passwort ein, danach `sudo passwd root` um das Passwort zu ändern. Gib nun das neue Passwort für deinen Root-Nutzer ein.

Fertig! Du kannst dich jetzt mit dem gesetzten Passwort als `root` anmelden.

:::info
Bei weiteren Fragen und Problemen steht dir unser Support jederzeit gerne zur Verfügung
:::
