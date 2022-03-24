---
id: vserver_network_analysis_winmtr
title: vServer: Netzwerkanalyse mit MTR/WinMTR
description: Informationen, wie du eine Netzwerkanalyse mit MTR/WinMTR durchführen kannst, um Netzwerkprobleme zu identifizieren - ZAP-Hosting.com Dokumentationen
sidebar_label: Netzwerkanalyse MTR/WinMTR
---

## ❓ Was ist MTR/WinMTR?

WinMTR ist ein Netzwerk-Diagnose-Programm, welches die Funktion von Ping und Traceroute vereint. Entwickelt wurde das Programm von Matt Kimball auf der Grundlage des bekannten MTR-Programm für Linux. Es bietet die Möglichkeit detaillierte Informationen über mögliche Netzwerkprobleme zu erhalten. Außerdem misst das Programm die Zeitspanne zwischen dem Aussenden eines Signals und dem Empfangen des entsprechenden Antwortpaketes. In dem folgenden Screenshot wird die Hinroute zu ZAP-Hosting.com als Beispiel gezeigt:



![image](https://user-images.githubusercontent.com/13604413/159171609-82df7202-a2a2-4d8a-8e16-168f5b90366f.png)



Hierbei werden alles Nodes aufgelistet, welche benutzt werden, um ans Ziel zu kommen. Bei möglichen Problemen kann man so erkennen, ob es Probleme seitens des Servers oder diese bereits bei einem selbst auftreten. Der Startpunkt fängt mit dem ersten Eintrag an und das Ende (ZAP - 104.xx.xx) als letzter Eintrag.



## ❓ Wann sollte die Diagnose durchgeführt werden?

Der Netzwerk-Diagnose Test sollte durchgeführt werden, wenn die Problematik gerade aktiv besteht. Dabei ist es wichtig, dass die Person die davon betroffen ist den Test durchführt. Um die Netzwerk-Diagnose so gut wie möglich analysieren zu können sollte eine Auswertung von der Hinroute und Rückroute gemacht werden, falls möglich. Je nach Betriebssystem wird entweder WinMTR (Windows) oder MTR (Linux) benutzt. 



## 🔧 Einrichtung von MTR / WinMTR



### 💻 Windows

Die Windows Version für WinMTR kann über die [ZAP-Hosting](https://zap-hosting.com/winmtr.zip) Seite heruntergeladen werden. Nach der Installation muss das Programm gestartet werden und der Hostname oder die IP-Adresse des betroffenen Falls eingetragen werden:

![image](https://user-images.githubusercontent.com/13604413/159171614-5ffff921-5d69-4786-8c8f-1a1f63413a97.png)





### 🐧 Linux

Um MTR auf Linux zu Installieren muss eine Verbindung per SSH zum Server aufgebaut werden. Falls du nicht genau weißt wie das funktioniert, dann kannst du dir dazu folgende Anleitung anschauen: [Erstzugriff (SSH)](https://docs.zap-hosting.com/docs/de/vserver_linux_ssh/)

Nun kann das Paket mit dem folgenden Befehl installiert werden:

```
apt-get install mtr
```

![image](https://user-images.githubusercontent.com/13604413/159171623-715da5a6-bc37-4449-ad26-d2bdf9b4288e.png)



Im Anschluss lässt sich die Auswertung mit dem Befehl **mtr IP-Adresse** starten. Mit STRG+C kann der Test je nach Wunsch jederzeit gestoppt werden.

![image](https://user-images.githubusercontent.com/13604413/159171625-4c77447f-a9df-466c-9117-8af6252eeba3.png)





## ❓ Auswertung auslesen

Das Programm liefert mehrere Informationen. Diese muss man genau überprüfen um das Problem auch richtig zuordnen zu können.

![image](https://user-images.githubusercontent.com/13604413/159171629-26be5afd-7493-4a48-bdb6-2fa5facbfa72.png)

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

