---
id: vserver-network-analysis-winmtr
title: "vServer: Netzwerkprobleme mit MTR/WinMTR erkennen"
description: Informationen, wie du eine Netzwerkanalyse mit MTR/WinMTR durchführen kannst, um Netzwerkprobleme zu identifizieren - ZAP-Hosting.com Dokumentation
sidebar_label: Netzwerk Probleme
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Netzwerkprobleme können störend sein und sollten natürlich nicht zum Alltag gehören. Doch wenn sie auftreten, ist es wichtig, zur Behebung des Problems schnell und effizient eine Ursache zu finden. Ausführliche Informationen über Netzwerkprobleme lassen sich sehr gut mit der Anwendung **WinMTR (Windows)** oder **MTR (Linux/Mac OS)** analysieren. 

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR ist eine Netzwerk-Diagnose-Anwendung, welches die Funktionen von Ping und Traceroute vereint. Es bietet die Möglichkeit, sowohl die **Hinroute (Client → Server)** als auch die **Rückroute (Server → Client)** detailliert zu analysieren, indem es den Weg der Datenpakete in beide Richtungen verfolgen kann. Dabei erfasst es wichtige Informationen wie Latenzzeiten und Paketverluste, die entscheidend sind, um Netzwerkprobleme präzise zu diagnostizieren und gezielt zu beheben.

**Hinroute (Client → Server)**: Ein Bericht für die **Hinroute** ist sinnvoll, wenn Probleme wie Verbindungsabbrüche, langsame Verbindungen oder Schwierigkeiten beim Aufbau von Verbindungen auftreten. Diese Analyse hilft dabei, potenzielle Probleme auf dem Weg vom Client zum Server zu identifizieren, wie etwa Netzwerküberlastungen, Paketverluste oder fehlerhaftes Routing.

**Rückroute (Server → Client)**: Ein Bericht für die **Rückroute** macht erst dann Sinn, wenn eine stabile und funktionsfähige Verbindung auf der Hinroute festgestellt wurde. Das bedeutet, dass der Bericht für die Rückroute besonders relevant wird, wenn die Hinroute keine Auffälligkeiten zeigt, aber weiterhin Probleme wie langsame Serverantworten, verzögerte Ladezeiten oder unvollständige Datenübertragungen bestehen.

Zusammenfassend lässt sich sagen, dass bei wahrnehmbaren Netzwerkproblemen zunächst die **Hinroute (Client → Server)** analysiert werden sollte. Wenn der Bericht der Hinroute keine Auffälligkeiten zeigt und die Probleme weiterhin bestehen, ist es notwendig, die **Rückroute (Server → Client)** zu überprüfen, um mögliche asymmetrische Probleme zu identifizieren. Asymmetrische Netzwerkprobleme können auftreten, wenn Datenpakete in eine Richtung problemlos übertragen werden, während in der entgegengesetzten Richtung Verzögerungen oder Paketverluste auftreten. 



## Installation
Nachdem nun geklärt wurde, wann welche Berichte für die Hin- und Rückroute sinnvoll sind, geht es nun mit der Installation auf Client- und Serverebene los.

### Client
Für die Hinroute muss die Anwendung beim Client (**deinem Computer**) installiert werden. Wie du die Anwendung für dein Betriebssystem installierst, wird im folgenden Schritt erläutert. 

<Tabs>
  <TabItem value="windows" label="Windows" default>
Bei der Verwendung eines Computers mit einem Windows Betriebssystem wird die Netzwerkanalyse über die WinMTR Anwendung durchgeführt. Um WinMTR auf deinem Computer zu installieren, lade die Anwendung zunächst von der ZAP-Hosting Webseite herunter. Nach dem Download entpackst du die Datei. Als Ergebnis erhältst du die ausführbare `WinMTR.exe` Datei. 

| Anwendung | Download                                   |
| --------- | ------------------------------------------ |
| WinMTR    | [Link](https://zap-hosting.com/winmtr.zip) |

  </TabItem>
  <TabItem value="linux" label="Linux">

Bei der Verwendung eines Computers mit einem Linux Betriebssystem wird die Netzwerkanalyse über die MTR Anwendung durchgeführt. Um MTR auf deinem System zu installieren, öffne bitte das Terminal und führe den passenden Installationsbefehl für dein Betriebssystem aus:

**Debian**

```
apt install mtr -y
```

**Ubuntu**

```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

  </TabItem>
  <TabItem value="macos" label="MacOS">





Bei der Verwendung eines Computers mit einem Mac OS Betriebssystem wird die Netzwerkanalyse über die MTR Anwendung durchgeführt. Allerdings ist die MTR Anwendung standardmäßig nicht auf Mac OS Geräten vorinstalliert und ist ebenfalls nicht im Apple Store erhältlich. Um MTR zu installieren, musst du Homebrew als Paketverwaltungssystem auf deinem Computer installieren. 



**Homebrew installieren**

Öffne das Terminal bei deinem Computer und führe den folgenden Befehl aus um Hombrew zu installieren: 

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**MTR installieren**

Befolge die angezeigten Schritte, um die Installation abzuschließen. Nachdem Homebrew erfolgreich eingerichtet ist, kannst du es zur Installation von MTR verwenden. Verwende dafür den folgenden Befehl im Terminal:

```
brew install mtr
```

  </TabItem>
</Tabs>


### Server
Für die Rückroute muss die Anwendung beim Server installiert werden. Wie du die Anwendung für dein Server Betriebssystem installierst, wird im folgenden Schritt erläutert. 

<Tabs>

<TabItem value="linux" label=" Server operating on Linux" default>

Verbinde dich per **[SSH](vserver-linux-ssh.md)** mit deinem Server. Um MTR auf deinem System zu installieren, führe den passenden Installationsbefehl für dein Server Betriebssystem aus:

**Debian**

```
apt install mtr -y
```

**Ubuntu**

```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```
</TabItem>
  <TabItem value="windows" label="Server operating on Windows">

Verbinde dich per **[Remotedesktopverbindung](vserver-windows-userdp.md)** mit deinem Server. Um WinMTR auf deinem Computer zu installieren, lade die Anwendung zunächst von der ZAP-Hosting Webseite herunter. Nach dem Download entpackst du die Datei. Als Ergebnis erhältst du die ausführbare `WinMTR.exe` Datei.

| Anwendung | Download                                   |
| --------- | ------------------------------------------ |
| WinMTR    | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>
</Tabs>



## Bericht erstellen

Im Folgenden wird ein Bericht mittels der WinMTR/MTR Anwendung erstellt. Dies wird sowohl für die **Hinroute (Client → Server)** als auch für die **Rückroute (Server → Client)** durchgeführt. 

:::warning Bericht bei aktiv auftretenden Problemen erstellen
Der Bericht sollte erstellt werden, wenn die Problematik zu dem Zeitpunkt aktiv besteht und bemerkbar ist. Nur in solch einem Fall liefert ein Bericht nützliche Informationen, die zur Fehlersuche und Behebung des Problems hilfreich sein können.
:::

### Hinroute (Client → Server)

Um die Route von deinem Computer zum Server zu analysieren, öffne für die folgenden Schritte die WinMTR/MTR Anwendung auf deinem Computer. 



<Tabs>

<TabItem value="windows" label="Windows" default>

Die WinMTR Anwendung lässt sich durch einen Doppelklick auf die WinMTR.exe Datei ausführen. Gebe im Feld `Host` die IP-Adresse oder den Hostnamen des Servers ein. Danach startest du den Bericht. Lass die Anwendung für mindestens **eine Minuten** laufen, damit genügend Daten gesammelt werden. Sobald du genug Daten hast, stoppst du die Analyse und speicherst das Ergebnis, indem du auf `Export TEXT` klickst.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

Die MTR Anwendung lässt sich auf deinem Computer verwenden, in dem du das Terminal öffnest und den folgenden Befehl ausführst:

```
mtr <Deine Server-IP-Adresse>
```

Lass die Anwendung für mindestens **eine Minuten** laufen, damit genügend Daten gesammelt werden. Sobald du genug Daten hast, stoppst du die Analyse und speicher das Ergebnis. 

</TabItem>
<TabItem value="macos" label="MacOS">

Die MTR Anwendung lässt sich auf deinem Computer verwenden, in dem du das Terminal öffnest und den folgenden Befehl ausführst:
```
mtr <Deine Server-IP-Adresse>
```

Lass die Anwendung für mindestens **eine Minuten** laufen, damit genügend Daten gesammelt werden. Sobald du genug Daten hast, stoppst du die Analyse und speicher das Ergebnis. 

</TabItem>
</Tabs>





### Rückroute (Server → Client)

Um die Route vom Server zu deinem Computer zu analysieren, verbinde dich für die folgenden Schritte mit deinem Server. 

<Tabs>
  <TabItem value="linux" label=" Server operating on Linux" default>
    

Die MTR Anwendung lässt sich auf deinem Server verwenden, in dem du das SSH-Terminal folgenden Befehl ausführst:

```
mtr <Deine Client-IP-Adresse>
```

Lass die Anwendung für mindestens **eine Minuten** laufen, damit genügend Daten gesammelt werden. Sobald du genug Daten hast, stoppst du die Analyse und speicher das Ergebnis. 

:::info
Du kennst deine IP-Adresse nicht oder weißt nicht, wie du sie herausfinden kannst? Es gibt mehrere Methoden, um deine IP-Adresse zu ermitteln. Am schnellsten geht es über einen Online-Dienst wie beispielsweise **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::


</TabItem>
  <TabItem value="windows" label="Server operating on Windows">

Gebe im Feld `Host` die IP-Adresse von deinem Anschluss ein. Danach startest du den Bericht. Lass die Anwendung wieder für mindestens **eine Minuten** laufen, damit genügend Daten gesammelt werden. Sobald du genug Daten hast, stoppst du die Analyse und speicherst das Ergebnis, indem du auf `Export TEXT` klickst.

:::info
Du kennst deine IP-Adresse nicht oder weißt nicht, wie du sie herausfinden kannst? Es gibt mehrere Methoden, um deine IP-Adresse zu ermitteln. Am schnellsten geht es über einen Online-Dienst wie beispielsweise **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Bericht auswerten

Bei der Auswertung gibt es einige wesentliche Punkte, die du im Blick haben solltest. Im Folgenden wird näher erläutert, welche diese sind und welche Bedeutung sie jeweils für die Analyse haben. Eine sorgfältige Beachtung dieser Aspekte ist entscheidend, um eine präzise Diagnose zu stellen und potenzielle Ursachen gezielt zu erkennen.

### Paketverlust 

Wenn du in den Ergebnissen einen Paketverlust siehst, ist das ein Hinweis auf mögliche Netzwerkprobleme. Ein geringer temporärer Paketverlust von 1-2% ist vielleicht noch unproblematisch, aber höhere Werte deuten auf ernstere Schwierigkeiten hin. Paketverlust kann dazu führen, dass die Verbindungen von Dienste verzögert oder unterbrochen werden. Wenn der Verlust gleichmäßig über alle Hops verteilt ist, könnte das Problem in deinem eigenen Netzwerk oder beim Server liegen. Tritt der Verlust jedoch nur bei einem bestimmten Hop oder Bereich auf, liegt das Problem wahrscheinlich bei diesem Knoten oder der Verbindung zum nächsten. Wichtig ist auch zu wissen, dass kleinere Verluste in den ersten Hops, die zu deinem lokalen Netzwerk gehören, nicht unbedingt kritisch sind, da solche Geräte oft ICMP-Anfragen (wie Ping) mit niedriger Priorität behandeln und diese verwerfen können.



### Latenz (Ping-Zeiten)
Die Latenzwerte (`Avg`, `Best`, `Worst`) geben dir einen Hinweis auf die Geschwindigkeit und Stabilität der Verbindung. Wenn du feststellst, dass die Latenz bei einem bestimmten Hop durchgehend hoch ist, könnte das auf Netzwerküberlastung oder einen langsamen Router hindeuten. Ein plötzlicher Anstieg der Latenz zwischen zwei Hops weist auf eine mögliche Einschränkung hin. Normalerweise steigt die Latenz auf dem Weg zum Ziel allmählich an. Achte aber auf plötzliche, signifikante Anstiege, die oft ein Zeichen für ein Problem sind. Auch der Vergleich der Hin- und Rückroute kann hilfreich sein, um asymmetrische Probleme zu erkennen, die darauf hindeuten, dass der Datenverkehr in eine Richtung Schwierigkeiten hat.

Mit einer sorgfältigen Analyse dieser Faktoren kannst du genau feststellen, wo im Netzwerk das Problem liegt. Sei es in deinem eigenen Netzwerk, beim Internetdienstanbieter oder irgendwo auf dem Weg zum Server.



### Diagnosebeispiele 
Für ein besseres Verständnis versuchen wir die vorherigen Informationen mit ein paar möglichen Diagnosebeispielen zu verdeutlichen. Dafür haben wir ein paar Beispiele zusammengestellt die auf unterschiedliche Situationen (Ursachen) zutreffen.

:::info
Die folgenden Diagnosebeispiele veranschaulichen verschiedene Szenarien anhand fiktiver WinMTR/MTR-Berichte. Die darin enthaltenen IP-Adressen, Hostnamen und Routen sind frei erfunden und haben keine Verbindung zu realen Netzwerken oder Hosts.
:::

<Tabs>

<TabItem value="mtrResultsExample1" label="Beispiel 1" default>

**Beispiel:** Paketverlust beim Client

**Beschreibung**

In diesem Beispiel wird die Situation beschrieben, bei dem der Client Paketverluste auf seiner Seite aufweist, die sich sowohl auf der Hin- als auch auf der Rückroute zeigen.

**Hinroute (Client → Server)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                     15.0%   20    1.1    3.4   1.0   10.2  2.8
2. 10.0.0.1                        10.0%   20   12.3   15.7  10.5   30.8  5.5
3. 172.16.0.1                       0.0%   20   25.1   26.0  24.8   27.2  0.6
4. 203.0.113.5                      0.0%   20   35.4   34.5  33.2   36.1  0.9
5. be1234.ccr42.isp.net             0.0%   20   50.6   49.8  49.1   51.5  0.8
6. be5678.ccr21.isp.net             0.0%   20   60.1   59.9  59.5   61.0  0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3  0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
```

**Rückroute (Server → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2  0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7  0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0  0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0  0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3  0.7
7. 10.0.0.1                        10.0%   20   15.8   16.5  15.0   35.2  6.2
8. 192.168.1.1                     15.0%   20    2.0    4.0   1.2   12.0  3.8
```

**Auswertung**

Anhand der Auswertung ist zu erkennen, dass ein clientseitiger Paketverlust vorliegt. Beide Routen zeigen Verluste auf den ersten Hops (Hop 1 und 2), was auf ein Problem auf der Seite des Clients, entweder im lokalen Netzwerk oder beim Router hinweist.

</TabItem>

<TabItem value="mtrResultsExample2" label="Beispiel 2">

**Beispiel:** Paketverlust beim Server

**Beschreibung**

In diesem Beispiel wird die Situation beschrieben, bei dem der Server Paketverluste auf seiner Seite aufweist, die sich sowohl auf der Hin- als auch auf der Rückroute zeigen.

**Hinroute (Client → Server)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
7. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
8. Ziel-IP (Server)                15.0%   20   85.3   90.2  85.0  105.0  7.0
```



**Rückroute (Server → Client)**
```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                15.0%   20   85.3   90.2  85.0  105.0  7.0
2. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
```



**Auswertung**

Anhand der Auswertung ist zu erkennen, dass ein serverseitiger Paketverlust vorliegt. Beide Routen zeigen Verluste auf den letzten Hops (Hop 7 und 8), was auf ein Problem auf der Seite des Servers hinweist.

</TabItem>

<TabItem value="mtrResultsExample3" label="Beispiel 3">

**Beispiel:** Latenzprobleme beim Client

**Beschreibung**

In diesem Beispiel wird die Situation beschrieben, bei dem der Client hohe Latenzzeiten aufweist, die sich sowohl auf der Hin- als auch auf der Rückroute bemerkbar machen.

**Hinroute (Client → Server)**

```console {2-3} 
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
2. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
3. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
4. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
5. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
6. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Rückroute (Server → Client)**
```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
7. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
8. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
```

**Auswertung**

Anhand der Auswertung ist zu erkennen, dass auf der Client-Seite eine hohe Latenz vorliegt. Beide Routen weisen auf den ersten Hops (Hop 1 und 2) erhöhte Latenzzeiten auf, was auf ein Problem auf der Seite des Clients hindeutet.

</TabItem>

<TabItem value="mtrResultsExample4" label="Beispiel 4">

**Beispiel:** Latenzprobleme beim Server

**Beschreibung**

In diesem Beispiel wird die Situation beschrieben, bei dem der Server hohe Latenzzeiten aufweist, die sich sowohl auf der Hin- als auch auf der Rückroute bemerkbar machen.

**Hinroute (Client → Server)**
```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
8. Ziel-IP (Server)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
```

**Rückroute (Server → Client)**
```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
2. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Auswertung**

Anhand der Auswertung ist zu erkennen, dass auf der Server-Seite eine hohe Latenz vorliegt. Beide Routen weisen auf den letzten Hops (Hop 7 und 8) erhöhte Latenzzeiten auf, was auf ein Problem auf der Seite des Servers hindeutet.

</TabItem>

<TabItem value="mtrResultsExample5" label="Beispiel 5">

**Beispiel:** Routingproblem (ISP-Routing)

**Beschreibung**

In diesem Beispiel wird die Situation beschrieben, bei dem die Route von Client X zum Server einwandfrei funktioniert, während es von Client Y zum Server Probleme mit dem Routing gibt, die zu Paketverlust führt. Dies weist auf ein Problem beim Routing vom Internetanbieter hin.

**Hinroute (Client X → Server)**
```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Hinroute (Client Y → Server)**
```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net            25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net            10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Rückroute (Server → Client X)**
```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Rückroute (Server  → Client Y)**
```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3

```

**Auswertung**

Anhand der Auswertung ist zu erkennen, dass ein Routingproblem beim ISP vorliegt. Während die Route von Client X zum Server stabil ist, treten bei der Route von Client Y deutliche Probleme auf, die zu Paketverlusten und hoher Latenz führen.

</TabItem>

<TabItem value="mtrResultsExample6" label="Beispiel 6">

**Beispiel:** Paketverlust nur auf der Hinroute (Client → Server)

**Beschreibung**

In diesem Beispiel wird die Situation beschrieben, bei dem Paketverluste nur auf der Hinroute (vom Client zum Server) auftreten, während die Rückroute (vom Server zum Client) keine Verluste zeigt. Dies kann auf ein Problem in einem Netzwerksegment in Richtung des Servers hinweisen, möglicherweise verursacht durch fehlerhafte Router, Überlastung oder eine schlechte Verbindung auf der Strecke.

**Hinroute (Client → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net            15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net            10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5

```

**Rückroute (Server → Client)**
```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Auswertung**

Anhand der Auswertung ist zu erkennen, dass der Paketverlust ausschließlich auf der Hinroute auftritt. Die Verluste zeigen sich auf den Hops 4, 5 und 6, was auf ein Problem auf dem Weg vom Client zum Server hindeutet, wie beispielsweise eine Überlastung oder fehlerhafte Netzwerkgeräte in einem Segment der Route. Auf der Rückroute treten hingegen keine Verluste auf, was bedeutet, dass die Verbindung in der entgegengesetzten Richtung stabil ist.

</TabItem>

<TabItem value="mtrResultsExample7" label="Beispiel 7">

**Beispiel:** Paketverlust nur auf der Rückroute (Server → Client)

**Beschreibung**

In diesem Beispiel wird die Situation beschrieben, bei dem Paketverluste nur auf der Rückroute (vom Server zum Client) auftreten, während die Hinroute (vom Client zum Server) keine Verluste zeigt. Dies könnte auf ein Problem in einem Netzwerksegment auf dem Rückweg hinweisen.

**Hinroute (Client → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
```

**Rückroute (Server → Client)**
```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
4. be1234.ccr42.isp.net            10.0%   20   50.6   51.0  50.0   55.0   1.2
5. 203.0.113.5                     15.0%   20   35.7   36.5  34.5   40.0   1.8
6. 172.16.0.1                      10.0%   20   20.2   21.5  19.5   25.0   2.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Auswertung**

Anhand der Auswertung ist zu erkennen, dass der Paketverlust nur auf der Rückroute auftritt. Die Verluste treten auf den Hops 4, 5 und 6 der Rückroute auf, was auf ein Problem auf dem Rückweg vom Server zum Client hinweist. 

</TabItem>

</Tabs>


## Probleme melden

Obwohl ZAP-Hosting das Netzwerk kontinuierlich überwacht, ist es bei Netzwerkproblemen wichtig, unseren Support umgehend zu kontaktieren. Um eine präzise Diagnose und schnelle Lösung sicherzustellen, bitten wir dich, uns die Ergebnisse deines WinMTR/MTR Berichts für die Hin- und Rückroute zur Verfügung zu stellen. Diese Informationen helfen uns, potenzielle Problemquellen gezielt zu identifizieren und das Problem schnell zu beheben.

<InlineVoucher />
