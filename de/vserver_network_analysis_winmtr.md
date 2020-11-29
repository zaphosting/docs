---
id: vserver_network_analysis_winmtr
title: Netzwerkanalyse MTR/WinMTR
sidebar_label: Netzwerkanalyse MTR/WinMTR
---

## ❓ Was ist MTR/WinMTR?

WinMTR ist ein Netzwerk-Diagnose-Programm, welches die Funktion von Ping und Traceroute vereint. Entwickelt wurde das Programm von Matt Kimball auf der Grundlage des bekannten MTR-Programm für Linux. Es bietet die Möglichkeit detaillierte Informationen über mögliche Netzwerkprobleme zu erhalten. Außerdem misst das Programm die Zeitspanne zwischen dem Aussenden eines Signals und dem Empfangen des entsprechenden Antwortpaketes. In dem folgenden Screenshot wird die Hinroute zu ZAP-Hosting.com als Beispiel gezeigt:



![img](https://screensaver01.zap-hosting.com/index.php/s/4KzrnjDSnipdeS9/preview)



Hierbei werden alles Nodes aufgelistet, welche benutzt werden, um ans Ziel zu kommen. Bei möglichen Problemen kann man so erkennen, ob es Probleme seitens des Servers oder diese bereits bei einem selbst auftreten. Der Startpunkt fängt mit dem ersten Eintrag an und das Ende (ZAP - 104.xx.xx) als letzter Eintrag.



## ❓ Wann sollte die Diagnose durchgeführt werden?

Der Netzwerk-Diagnose Test sollte durchgeführt werden, wenn die Problematik gerade aktiv besteht. Dabei ist es wichtig, dass die Person die davon betroffen ist den Test durchführt. Um die Netzwerk-Diagnose so gut wie möglich analysieren zu können sollte eine Auswertung von der Hinroute und Rückroute gemacht werden, falls möglich. Je nach Betriebssystem wird entweder WinMTR (Windows) oder MTR (Linux) benutzt. 



## 🔧 Einrichtung von MTR / WinMTR



### 💻 Windows

Die Windows Version für WinMTR kann über die [ZAP-Hosting](https://zap-hosting.com/winmtr.zip) Seite heruntergeladen werden. Nach der Installation muss das Programm gestartet werden und der Hostname oder die IP-Adresse des betroffenen Falls eingetragen werden:

![img](https://screensaver01.zap-hosting.com/index.php/s/NMM89KjjpxRXWdY/preview)





### 🐧 Linux

Um MTR auf Linux zu Installieren muss eine Verbindung per SSH zum Server aufgebaut werden. Falls du nicht genau weißt wie das funktioniert, dann kannst du dir dazu folgende Anleitung anschauen: [Erstzugriff (SSH)](https://docs.zap-hosting.com/docs/de/vserver_linux_ssh/)

Nun kann das Paket mit dem folgenden Befehl installiert werden:

```
apt-get install mtr
```

![img](https://screensaver01.zap-hosting.com/index.php/s/m7Xo2HMiK2WErcJ/preview)



Im Anschluss lässt sich die Auswertung mit dem Befehl **mtr IP-Adresse** starten. Mit STRG+C kann der Test je nach Wunsch jederzeit gestoppt werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/Fc3Z3wFoxDdL3HH/preview)





## ❓ Auswertung auslesen

Das Programm liefert mehrere Informationen. Diese muss man genau überprüfen um das Problem auch richtig zuordnen zu können. Zu den Informationen gehören folgende Punkte:

![img](https://screensaver01.zap-hosting.com/index.php/s/RLNmFsgdMBzXpyC/preview)



Während der Auswertung einer Route kann hin und wieder mal die Meldung **Keine Antwort vom Host** erscheinen, wo 100% Paketverlust gemeldet werden. Das ist oftmals aber nicht direkt die Ursache. In solch einem Fall kann es sein, dass lediglich die Pakete durch die Firewall gefiltert werden und daher keine Rückmeldung kommt oder generell nicht erreichbar ist. Es wird dann die nächst mögliche Option für die Route gewählt. Erst wenn der Paketverlust an einer Stelle beginnt und sich auch über weitere zieht ist die Rede von einem aktiven Paketverlust. 

|  Wert  |                      Bedeutung                      |
| :----: | :-------------------------------------------------: |
|  Host  |               Name des Netzwerk Nodes               |
| Loss % |      Prozentualer Anteil an verlorenen Paketen      |
|  Sent  | Die Anzahl an Paketen die zum Node geschickt wurden |
|  Recv  |   Die Anzahl an Paketen die der Node erhalten hat   |
|  Best  |                Bester Ping des Nodes                |
|  Avrg  |          Durchschnittlicher Ping des Nodes          |
|  Wrst  |           Der schlechteste Ping des Nodes           |
|  Last  |                  Letzter Ping Wert                  |

