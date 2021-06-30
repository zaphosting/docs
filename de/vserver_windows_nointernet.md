---
id: vserver_windows_nointernet
title: vServer: Kein Internetzugang auf Windows Server. Was nun?
description: Informationen zu Problemlösungen, wenn der Windows vServer von ZAP-Hosting keinen Internetzugang anzeigt - ZAP-Hosting.com Dokumentationen
sidebar_label: Kein Internet was nun?
---

## 🖥 Kein Internet was nun?
In der Regel steht dein Windows Server auf "Gestartet", sollte er über keine Internetverbindung verfügen.

![](https://screensaver01.zap-hosting.com/index.php/s/qSJjBQiLJKgyReK/preview)

Sollte dein Server regulär Online sein, dennoch aber keine Verbindung haben, muss die Netzwerkkonfiguration über die VNC-Konsole geprüft werden.

![](https://screensaver01.zap-hosting.com/index.php/s/6jtNLPRw4TfTL8L/preview)


## 🖥 Wie stelle ich die Verbindung wieder her?
Wir verbinden uns über die VNC-Konsole und melden uns auf dem Server an.

![](https://screensaver01.zap-hosting.com/index.php/s/nHtJAMEx2EfxLsw/preview)

Im Anschluss öffnen wir die Adaptereinstellungen. Dafür machen wir einen Rechtsklick auf die Internetverbindung.

![](https://screensaver01.zap-hosting.com/index.php/s/TjqqwyRj5rEEBww/preview)

Anschließend klicken wir auf **Adapteroptionen ändern**.

![](https://screensaver01.zap-hosting.com/index.php/s/szKJLktSqq8HA2z/preview)

Nun öffnen wir per **Rechtsklick** die **Eigenschaften** des Adapters. 

![](https://screensaver01.zap-hosting.com/index.php/s/c8tmdfzrDXDN6Mj/preview)

Im Anschluss machen dort einen **Doppelklick** auf die **Ipv4** Verbindung.

![](https://screensaver01.zap-hosting.com/index.php/s/J4ZL7t6awrRJ5a4/preview)

Daraufhin prüfen wir, ob dort **unsere** IP aus dem ZAP Webinterface eingetragen ist. Im folgenden zeige ich ein Beispiel wie es bei der IP 185.249.196.108 korrekt wäre:

![](https://screensaver01.zap-hosting.com/index.php/s/yi6kN86JFjpFrFw/preview)

> Gehe sicher das du **deine** Server IP unter "IP Addresse" Eingibst

> Wichtig hierbei ist, dass die Subnetzmaske immer ein Typ C Netz ist und somit immer 255.255.255.0 lautet.

> Das Standardgateway ist immer die Ip selber mit der 1 am Ende.

> Als DNS-Server nimmt man in der Regel den Google DNS wie im obigen Screenshot.

Im Anschluss übernimmt man die Einstellungen und startet den Server ggf. neu.
