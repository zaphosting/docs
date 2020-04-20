---
id: vserver_windows_nointernet
title: Kein Internet was nun?
sidebar_label: Kein Internet was nun?
---


## 🖥 Kein Internet was nun?
In der Regel steht der Server auf gestartet, wenn er keine aktive Internetverbindung hat.

![](https://screensaver01.zap-hosting.com/index.php/s/Fg2t57mYkWdk4qf/preview)

Sollte er aber online sein und dennoch kein Internet haben, kann man dies über die VNC Konsole prüfen: 

![](https://screensaver01.zap-hosting.com/index.php/s/BeBX8Q9H6z8seMH/preview)


## 🖥 Wie stelle ich die Verbindung wieder her?
Als Erstes verbinden wir uns via VNC-Konsole mit dem Server. 

![](https://screensaver01.zap-hosting.com/index.php/s/wrjFksQ4jWFGEz4/preview)

Im Anschluss öffnen wir die Adaptereinstellungen. Dafür machen wir einen Rechtsklick auf die Internetverbindung.

![](https://screensaver01.zap-hosting.com/index.php/s/TjqqwyRj5rEEBww/preview)

Anschließend klicken wir auf **Adapteroptionen ändern**.

![](https://screensaver01.zap-hosting.com/index.php/s/szKJLktSqq8HA2z/preview)

Nun öffnen wir per **Rechtsklick** die **Eigenschaften** des Adapters. 

![](https://screensaver01.zap-hosting.com/index.php/s/c8tmdfzrDXDN6Mj/preview)

Im Anschluss machen dort einen **Doppelklick** auf die **Ipv4** Verbindung.

![](https://screensaver01.zap-hosting.com/index.php/s/J4ZL7t6awrRJ5a4/preview)

Daraufhin prüfen wir, ob dort **unsere** Ip aus dem Interface eingetragen ist. Im Folgenden zeige ich ein Beispiel wie es bei der Ip 185.249.196.108 korrekt wäre:

![](https://screensaver01.zap-hosting.com/index.php/s/KtR7nfiN4LJJyjg/preview)

> Wichtig hierbei ist, dass die Subnetzmaske immer ein Typ C Netz ist und somit immer 255.255.255.0 lautet.

> Das Standardgateway ist immer die Ip selber mit der 1 am Ende.

> Als DNS-Server nimmt man in der Regel den Google DNS wie im obigen Screenshot.

Im Anschluss übernimmt man die Einstellungen und startet den Server ggf. neu.

**Sollte danach immer noch keine aktive Internetverbindung da sein, dann muss der Support angeschrieben werden sodass diese die Ip ein mal ändern, da sie dann woanders bereits vergeben ist.** 




