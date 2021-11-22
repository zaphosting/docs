---
id: dedicated_freebsd
title: FreeBSD installieren
sidebar_label: FreeBSD installieren
---

> In diesem Beispiel wird die Installation von FreeBSD 13.0 durchgeführt

## 📋 Vorbereitungen
Wähle in deinem ZAP-Interface die gewünschte ISO von FreeBSD aus und lasse den Server mit der ISO booten, bis dieser im Setup ist.

> Die Navigation im Setup Prozess erfolgt mit TAB, Leertaste und Enter.
> TAB = Zwischen Menüpunkten wechseln, Leertaste = markieren, Enter = Bestätigen

***

## ⌚ Das Setup
Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup.

![](https://screensaver01.zap-hosting.com/index.php/s/NpXzwWEeHd9nLN8/preview)

Wir starten die Installation mit `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/YggRe58jXHszJHy/preview)

Wähle die gewünschte Keymap aus, und bestätigen mit Continue

***

![](https://screensaver01.zap-hosting.com/index.php/s/wR4iq9GdzsDfgoZ/preview)

Wähle den gewünschten Hostname

***

![](https://screensaver01.zap-hosting.com/index.php/s/qjHnRJ2eSLsWdf9/preview)

Wähle optionale Systempakete welche installiert werden sollen und bestätige mit OK

***

![](https://screensaver01.zap-hosting.com/index.php/s/zKzZMgPxRP9gTpB/preview)

In diesem Schritt können Partitionen erstellt werden, in diesem Beispiel nutzen wir ein RAID0.
Mehr Informationen zur Raideinstellungen findest du in der speziefischen Anleitung dafür.

***

![](https://screensaver01.zap-hosting.com/index.php/s/rG2f2bopCqPEAwP/preview)

Sofern keine weiteren Änderungswünsche bestehen, ebenfalls einfach mit Enter bestätigen

***

![](https://screensaver01.zap-hosting.com/index.php/s/yxpQCWn6zCZK2HE/preview)

Wir wählen in unserem Beispiel, keine Redundanz da es sich um ein RAID0 handelt.

***

![](https://screensaver01.zap-hosting.com/index.php/s/Wd4ntdirBoMjeeg/preview)

Wähle deinen Datenträger mit der `Leertaste` aus und bestätige dann mit `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/GdTn5ztzQk8Q5nA/preview)

Wir bestätigen das alle Daten überschrieben werden dürfen

> Dein Server führt nun das Setup aus, dies kann einige Zeit in Anspruch nehmen

### 🔧 Konfiguration

![](https://screensaver01.zap-hosting.com/index.php/s/yrY4223owaDFaKs/preview)

Gib dein gewünschtes Serverpasswort ein und bestätige deine Eingabe mit `Enter`

***

![](https://screensaver01.zap-hosting.com/index.php/s/WqEAD3HDrZr4wC5/preview)

Wir wählen "No" bei der IPv4 und IPv6 Konfiguration, diese muss zum schluss erledigt werden

***

![](https://screensaver01.zap-hosting.com/index.php/s/t8Ptgqqq4Fj3Cx3/preview)

Wir wählen "Yes" und wählen danach unsere Zeitzoneneinstellungen sowie Datum und Uhrzeit

***

![](https://screensaver01.zap-hosting.com/index.php/s/smtKkCiHwzobZoe/preview)

Hier könnten die Dienste verändert werden, welche beim Serverstart automatisiert gestartet werden

***

![](https://screensaver01.zap-hosting.com/index.php/s/WRmMrR7m2gtmXNc/preview)

Falls notwendig, könnten hier noch Sicherheitseinstellungen getroffen werden

***

![](https://screensaver01.zap-hosting.com/index.php/s/mJzxzSQqxtQK72H/preview)

Das Setup ist beendet. Wir wählen "Exit" und bestätigen mit Enter.

> Entferne nun die ISO-Datei aus deiner iLO und wähle Reboot

### 💻 Netzwerk

Um den Netzwerk-Adapter zu aktivieren, logge dich mit dem Passwort in dein System ein

Öffne die loader.conf mit einem Editor, beispielsweise `ee /boot/loader.conf` und füge folgendes hinzu:

```if_oce_load="YES"```

Mit `STRG+C` kann der Editor wieder verlassen werden nach dem Tastendruck muss noch "exit" eingegeben werden, starte nun deinen Dedicated Server neu

***

Nach dem Neustart muss noch die rc.conf bearbeitet werden `ee /etc/rc.conf`, füge folgendes hinzu:

```
ifconfig_oce0="inet DeineIP netmask 255.255.255.0"
defaultrouter="DeinGateway"
```

DeineIP ist die IP deines Dedicated Servers, diese siehst du im ZAP Interface.
Bei "defaultrouter" muss das Gateway angegeben werden, dies ist immer die IP deines Servers mit .1 am Ende, also Beispielsweise:

Server IP: 123.123.123.123

Subnetmask: 255.255.255.0

Gateway: 123.123.123.1

Das sollte dann in etwa so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/pgGdbSerTe5236B/preview)

Verlasse den Editor ebenfalls mit `STRG+C` und der Eingabe von "exit" und führe zum Abschluss einmal `/etc/netstart` aus

> Dein Server sollte nun eine Netzwerkverbindung haben
