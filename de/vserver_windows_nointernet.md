---
id: vserver_windows_nointernet
title: vServer: Kein Internetzugang auf Windows Server. Was nun?
description: Informationen zu Problemlösungen, wenn der Windows vServer von ZAP-Hosting keinen Internetzugang anzeigt - ZAP-Hosting.com Dokumentationen
sidebar_label: Kein Internet was nun?
---

## 🖥 Kein Internet was nun?
In der Regel steht dein Windows Server auf "Gestartet", sollte er über keine Internetverbindung verfügen.

![image](https://user-images.githubusercontent.com/13604413/159165538-4c9c7858-ce7a-44eb-982e-fe614f731dfa.png)

Sollte dein Server regulär Online sein, dennoch aber keine Verbindung haben, muss die Netzwerkkonfiguration über die VNC-Konsole geprüft werden.

![image](https://user-images.githubusercontent.com/13604413/159165541-d23bfcaf-d745-4b98-96bb-5960a113723c.png)


## 🖥 Wie stelle ich die Verbindung wieder her?
Wir verbinden uns über die VNC-Konsole und melden uns auf dem Server an.

![image](https://user-images.githubusercontent.com/13604413/159165545-bb459a8b-f900-4d7c-95b6-c73b10d494ef.png)

Im Anschluss öffnen wir die Adaptereinstellungen. Dafür machen wir einen Rechtsklick auf die Internetverbindung.

![image](https://user-images.githubusercontent.com/13604413/159165546-ce7eedcc-2761-4109-a72b-a41ef19f4b5e.png)

Anschließend klicken wir auf **Adapteroptionen ändern**.

![image](https://user-images.githubusercontent.com/13604413/159165551-c3d6190f-f9cf-4b0c-8e09-14d6c55b02b8.png)

Nun öffnen wir per **Rechtsklick** die **Eigenschaften** des Adapters. 

![image](https://user-images.githubusercontent.com/13604413/159165554-6c7e2ff3-c4ab-42bc-ba9a-b34d1974e3b4.png)

Im Anschluss machen dort einen **Doppelklick** auf die **Ipv4** Verbindung.

![image](https://user-images.githubusercontent.com/13604413/159165558-e73e6c72-5c7f-4218-8fbd-7879ea9858b3.png)

Daraufhin prüfen wir, ob dort **unsere** IP aus dem ZAP Webinterface eingetragen ist. Im folgenden zeige ich ein Beispiel wie es bei der IP 185.249.196.108 korrekt wäre:

![image](https://user-images.githubusercontent.com/13604413/159165560-ca15c764-dc9e-460d-a5ac-2cd4eee8bf5f.png)

> Gehe sicher das du **deine** Server IP unter "IP Addresse" Eingibst

> Wichtig hierbei ist, dass die Subnetzmaske immer ein Typ C Netz ist und somit immer 255.255.255.0 lautet.

> Das Standardgateway ist immer die Ip selber mit der 1 am Ende.

> Als DNS-Server nimmt man in der Regel den Google DNS wie im obigen Screenshot.

Im Anschluss übernimmt man die Einstellungen und startet den Server ggf. neu.
