---
id: dedicated-network-analysis-winmtr
title: "Dedicated Server: Netzwerkprobleme mit WinMTR/MTR erkennen"
description: "Entdecke, wie du Netzwerkprobleme durch Analyse von Aus- und Rückweg effektiv diagnostizierst, um Latenz und Paketverlust zu identifizieren → Jetzt mehr erfahren"
sidebar_label: Netzwerkprobleme
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Netzwerkprobleme können echt nerven und gehören natürlich nicht zum Alltag. Wenn sie aber auftreten, ist es wichtig, schnell und effizient die Ursache zu finden, um das Problem zu lösen. Detaillierte Infos zu Netzwerkproblemen kannst du super mit der **WinMTR (Windows)** oder **MTR (Linux/Mac OS)** App analysieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR ist ein Netzwerk-Diagnose-Tool, das die Funktionen von Ping und Traceroute kombiniert. Damit kannst du sowohl den **Ausgangsweg (Client → Server)** als auch den **Rückweg (Server → Client)** detailliert analysieren, indem der Pfad der Datenpakete in beide Richtungen verfolgt wird. Dabei werden wichtige Infos wie Latenz und Paketverlust erfasst, die entscheidend sind, um Netzwerkprobleme genau zu diagnostizieren und zu beheben.

**Ausgangsweg (Client → Server)**: Ein Report für den **Ausgangsweg** ist hilfreich, wenn Probleme wie Verbindungsabbrüche, langsame Verbindungen oder Schwierigkeiten beim Verbindungsaufbau auftreten. Diese Analyse hilft, mögliche Probleme auf dem Weg vom Client zum Server zu erkennen, z.B. Netzwerküberlastung, Paketverlust oder fehlerhafte Routen.

**Rückweg (Server → Client)**: Ein Report für den **Rückweg** macht erst Sinn, wenn eine stabile und funktionierende Verbindung auf dem Ausgangsweg bestätigt wurde. Der Rückweg-Report wird also besonders relevant, wenn der Ausgangsweg keine Probleme zeigt, aber trotzdem z.B. langsame Serverantworten, verzögerte Ladezeiten oder unvollständige Datenübertragungen bestehen.

Kurz gesagt: Wenn du Netzwerkprobleme bemerkst, solltest du zuerst den **Ausgangsweg (Client → Server)** analysieren. Zeigt der Ausgangs-Report keine Auffälligkeiten und die Probleme bleiben, musst du den **Rückweg (Server → Client)** checken, um mögliche asymmetrische Probleme zu finden. Asymmetrische Netzwerkprobleme entstehen, wenn Datenpakete in eine Richtung problemlos übertragen werden, während in der anderen Richtung Verzögerungen oder Paketverluste auftreten.

## Installation

Jetzt, wo klar ist, wann Reports für Ein- und Ausgangswege sinnvoll sind, geht’s weiter mit der Installation auf Client- und Server-Seite.

### Client

Für den Ausgangsweg muss die App auf dem Client (**deinem Rechner**) installiert sein. Die folgenden Schritte zeigen, wie du die App für dein Betriebssystem installierst.

<Tabs>
<TabItem value="windows" label="Windows" default>

Wenn du einen Windows-Rechner nutzt, erfolgt die Netzwerkanalyse mit der WinMTR-App. Um WinMTR auf deinem Rechner zu installieren, lade die App zuerst von der ZAP-Hosting Webseite herunter. Nach dem Download entpackst du die Datei. Du erhältst dann die ausführbare Datei `WinMTR.exe`.

| Anwendung | Download                                   |
| --------- | ------------------------------------------ |
| WinMTR    | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>

<TabItem value="linux" label="Linux">

Auf einem Linux-Rechner nutzt du die MTR-App für die Netzwerkanalyse. Öffne das Terminal und führe den passenden Installationsbefehl für dein Betriebssystem aus:

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

Auf einem Mac OS Rechner nutzt du ebenfalls die MTR-App. Diese ist aber nicht vorinstalliert und auch nicht im Apple Store verfügbar. Du musst zuerst Homebrew als Paketmanager installieren.

**Homebrew installieren**

Öffne das Terminal und führe diesen Befehl aus, um Homebrew zu installieren:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**MTR installieren**

Folge den Anweisungen im Terminal, um die Installation abzuschließen. Sobald Homebrew läuft, installierst du MTR mit:

```
brew install mtr
```

</TabItem>
</Tabs>

### Server
Für den Rückweg muss die App auf dem Server installiert sein. Die folgenden Schritte zeigen, wie du die App für das Betriebssystem deines Servers installierst.

<Tabs>

<TabItem value="linux" label=" Server mit Linux" default>

Verbinde dich per **[SSH](vserver-linux-ssh.md)** mit deinem Server. Um MTR zu installieren, führe den passenden Befehl für dein Server-Betriebssystem aus:

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

<TabItem value="windows" label="Server mit Windows">

Verbinde dich per **[Remote Desktop Connection](vserver-windows-userdp.md)** mit deinem Server. Um WinMTR zu installieren, lade die App zuerst von der ZAP-Hosting Webseite herunter. Nach dem Download entpackst du die Datei. Du erhältst dann die ausführbare Datei `WinMTR.exe`.

| Anwendung | Download                                   |
| --------- | ------------------------------------------ |
| WinMTR    | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>
</Tabs>

## Report erstellen

Im Folgenden wird gezeigt, wie du mit WinMTR/MTR einen Report erstellst – sowohl für den **Ausgangsweg (Client → Server)** als auch für den **Rückweg (Server → Client)**.

:::warning Report während aktiver Probleme erstellen 
Der Report sollte erstellt werden, während das Problem aktiv und spürbar ist. Nur dann liefert der Report nützliche Infos, die bei der Fehlerbehebung helfen.
:::

### Ausgangsweg (Client → Server)

Um den Weg von deinem Rechner zum Server zu analysieren, öffne die WinMTR/MTR App auf deinem Rechner und folge den Schritten unten.

<Tabs>
<TabItem value="windows" label="Windows" default>

Starte die WinMTR-App per Doppelklick auf die `WinMTR.exe`. Gib im Feld `Host` die IP-Adresse oder den Hostnamen des Servers ein. Starte dann den Report. Lass die App mindestens **eine Minute** laufen, um genug Daten zu sammeln. Stoppe die Analyse und speichere das Ergebnis mit `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

Nutze die MTR-App, indem du im Terminal folgenden Befehl eingibst:

```
mtr <deine server-ip-adresse>
```

Lass die App mindestens **eine Minute** laufen, um genug Daten zu sammeln. Stoppe dann die Analyse und speichere das Ergebnis.

</TabItem>

<TabItem value="macos" label="MacOS">

Nutze die MTR-App, indem du im Terminal folgenden Befehl eingibst:

```
mtr <deine client-ip-adresse>
```

Lass die App mindestens **eine Minute** laufen, um genug Daten zu sammeln. Stoppe dann die Analyse und speichere das Ergebnis.

</TabItem>
</Tabs>

### Rückweg (Server → Client)

Um den Weg vom Server zu deinem Rechner zu analysieren, verbinde dich mit deinem Server und folge den Schritten unten.

<Tabs>
<TabItem value="linux" label=" Server mit Linux" default>

Nutze die MTR-App auf deinem Server, indem du im SSH-Terminal folgenden Befehl ausführst:
```
mtr <deine client-ip-adresse>
```

Lass die App mindestens **eine Minute** laufen, um genug Daten zu sammeln. Stoppe dann die Analyse und speichere das Ergebnis.

:::info
Du kennst deine IP-Adresse nicht oder weißt nicht, wie du sie findest? Es gibt verschiedene Wege, deine IP-Adresse zu ermitteln. Am schnellsten geht’s über Online-Dienste wie WhatIsMyIPAddress.
:::

</TabItem>

<TabItem value="windows" label="Server mit Windows">

Gib im Feld `Host` die IP-Adresse deiner Verbindung ein. Starte den Report. Lass die App wieder mindestens **eine Minute** laufen, um genug Daten zu sammeln. Stoppe die Analyse und speichere das Ergebnis mit `Export TEXT`.

:::info
Du kennst deine IP-Adresse nicht oder weißt nicht, wie du sie findest? Es gibt verschiedene Wege, deine IP-Adresse zu ermitteln. Am schnellsten geht’s über Online-Dienste wie **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>

## Report auswerten

Beim Auswerten der Ergebnisse gibt es ein paar wichtige Punkte, die du beachten solltest. Im Folgenden erklären wir diese genauer und zeigen, warum sie für die Analyse wichtig sind. Wenn du diese Aspekte genau im Blick hast, kannst du die Diagnose präzise stellen und mögliche Ursachen effektiv erkennen.

### Paketverlust

Wenn du Paketverlust in den Ergebnissen siehst, deutet das auf mögliche Netzwerkprobleme hin. Ein kleiner, temporärer Paketverlust von 1-2 % ist meist unkritisch, höhere Werte deuten auf ernsthaftere Probleme hin. Paketverlust kann Verzögerungen oder Unterbrechungen bei Verbindungen verursachen. Wenn der Verlust gleichmäßig über alle Hops verteilt ist, liegt das Problem wahrscheinlich in deinem eigenen Netzwerk oder auf der Serverseite. Tritt der Verlust nur an einem bestimmten Hop oder Bereich auf, liegt das Problem wahrscheinlich bei diesem Knoten oder der Verbindung zum nächsten. Wichtig zu wissen: Kleine Verluste bei den ersten Hops, die zu deinem lokalen Netzwerk gehören, sind nicht unbedingt kritisch, da diese Geräte ICMP-Anfragen (wie Ping) oft niedriger priorisieren und verwerfen können.

### Latenz (Ping-Zeiten)

Die Latenzwerte (`Avg`, `Best`, `Worst`) geben dir Einblick in die Geschwindigkeit und Stabilität der Verbindung. Bleibt die Latenz an einem bestimmten Hop dauerhaft hoch, kann das auf Netzwerküberlastung oder einen langsamen Router hinweisen. Ein plötzlicher Anstieg der Latenz zwischen zwei Hops deutet auf einen möglichen Engpass hin. Normalerweise steigt die Latenz auf dem Weg zum Ziel allmählich an. Achte aber auf plötzliche, starke Ausschläge, die oft ein Problem signalisieren. Der Vergleich von Ausgangs- und Rückweg hilft auch, asymmetrische Probleme zu erkennen, bei denen der Traffic in eine Richtung Schwierigkeiten hat.

Mit genauer Analyse dieser Faktoren kannst du genau bestimmen, wo das Netzwerkproblem liegt – ob in deinem eigenen Netzwerk, beim Internetanbieter oder irgendwo auf dem Weg zum Server.

### Diagnose-Beispiele

Um das Ganze besser zu verstehen, erklären wir die Infos mit ein paar Diagnose-Beispielen. Wir haben verschiedene Szenarien zusammengestellt, die unterschiedliche Situationen und mögliche Ursachen zeigen. Diese Beispiele helfen dir, die Daten zu interpretieren und Netzwerkprobleme besser zu diagnostizieren.

:::info
Die folgenden Diagnose-Beispiele basieren auf fiktiven WinMTR/MTR-Reports. Die IP-Adressen, Hostnamen und Routen sind komplett erfunden und haben keinen Bezug zu echten Netzwerken oder Hosts.
:::

<Tabs>
<TabItem value="mtrResultsExample1" label="Beispiel 1" default>

**Beispiel:** Paketverlust beim Client

**Beschreibung**

In diesem Beispiel tritt Paketverlust auf der Client-Seite auf, sichtbar auf beiden Wegen – Ausgangs- und Rückweg.

**Ausgangsweg (Client → Server)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                     15.0%   20    1.1    3.4   1.0   10.2  2.8
2. 10.0.0.1                        10.0%   20   12.3   15.7  10.5   30.8  5.5
3. 172.16.0.1                       0.0%   20   25.1   26.0  24.8   27.2  0.6
4. 203.0.113.5                      0.0%   20   35.4   34.5  33.2   36.1  0.9
5. be1234.ccr42.isp.net             0.0%   20   50.6   49.8  49.1   51.5  0.8
6. be5678.ccr21.isp.net             0.0%   20   60.1   59.9  59.5   61.0  0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3  0.5
8. Ziel-IP (Server)                  0.0%   20   80.2   80.0  79.5   81.2  0.6
```

**Rückweg (Server → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                  0.0%   20   80.2   80.0  79.5   81.2  0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2  0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7  0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0  0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0  0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3  0.7
7. 10.0.0.1                        10.0%   20   15.8   16.5  15.0   35.2  6.2
8. 192.168.1.1                     15.0%   20    2.0    4.0   1.2   12.0  3.8
```

**Auswertung**

Die Auswertung zeigt, dass der Paketverlust auf der Client-Seite auftritt. Beide Wege zeigen Verluste bei den ersten Hops (Hop 1 und 2), was auf ein Problem im lokalen Netzwerk oder Router des Clients hindeutet.

</TabItem>

<TabItem value="mtrResultsExample2" label="Beispiel 2">

**Beispiel:** Paketverlust beim Server

**Beschreibung**

Hier tritt Paketverlust auf der Serverseite auf, sichtbar auf beiden Wegen.

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

**Rückweg (Server → Client)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                15.0%   20   85.3   90.2  85.0  105.0  7.0
2. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
7. 10.0.0.1                        0.0%   20   10.5   11.1  10.0   12.5  0.7
8. 192.168.1.1                     0.0%   20    1.2    1.3   1.1    2.0  0.3
```

**Auswertung**

Der Paketverlust tritt auf der Serverseite auf. Beide Wege zeigen Verluste bei den letzten Hops (Hop 7 und 8), was auf ein Problem am Server hindeutet.

</TabItem>

<TabItem value="mtrResultsExample3" label="Beispiel 3">

**Beispiel:** Latenzprobleme beim Client

**Beschreibung**

Hier gibt es hohe Latenzzeiten auf der Client-Seite, sichtbar auf beiden Wegen.

**Ausgangsweg (Client → Server)**

```console {2-3} 
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
2. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
3. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
4. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
5. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
6. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                  0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Rückweg (Server → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                  0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
7. 10.0.0.1                        0.0%   20  120.7  115.5  60.0  190.0  30.0
8. 192.168.1.1                     0.0%   20  150.5  130.5  50.0  200.0  40.0
```

**Auswertung**

Die Auswertung zeigt hohe Latenz auf der Client-Seite. Beide Wege haben erhöhte Latenz bei den ersten Hops (Hop 1 und 2), was auf ein Problem beim Client hindeutet.

</TabItem>

<TabItem value="mtrResultsExample4" label="Beispiel 4">

**Beispiel:** Latenzprobleme beim Server

**Beschreibung**

Hier gibt es hohe Latenzzeiten auf der Serverseite, sichtbar auf beiden Wegen.

**Ausgangsweg (Client → Server)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
8. Ziel-IP (Server)                  0.0%   20  300.5  320.0 300.0  350.0  15.0
```

**Rückweg (Server → Client)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                  0.0%   20  300.5  320.0 300.0  350.0  15.0
2. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                        0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                     0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Auswertung**

Die Auswertung zeigt hohe Latenz auf der Serverseite. Beide Wege haben erhöhte Latenz bei den letzten Hops (Hop 7 und 8), was auf ein Problem am Server hindeutet.

</TabItem>

<TabItem value="mtrResultsExample5" label="Beispiel 5">

**Beispiel:** Routing-Problem (ISP-Routing)

**Beschreibung**

Hier funktioniert die Route von Client X zum Server ohne Probleme, während es von Client Y Routing-Probleme gibt, die zu Paketverlust führen. Das deutet auf ein Problem beim Routing des Internetanbieters (ISP) hin.

**Ausgangsweg (Client X → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Ausgangsweg (Client Y → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net            25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net            10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Rückweg (Server → Client X)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net            0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net            0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                    0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                    0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                      0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                   0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Rückweg (Server → Client Y)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net            0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net            0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                    0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                    0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                      0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                   0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Auswertung**

Die Auswertung zeigt ein Routing-Problem beim ISP. Während die Route von Client X stabil ist, gibt es bei Client Y deutliche Probleme mit Paketverlust und hoher Latenz.

</TabItem>

<TabItem value="mtrResultsExample6" label="Beispiel 6">

**Beispiel:** Paketverlust nur auf dem Ausgangsweg (Client → Server)

**Beschreibung**

Hier tritt Paketverlust nur auf dem Ausgangsweg (Client zum Server) auf, während der Rückweg (Server zum Client) keine Verluste zeigt. Das kann auf ein Problem in einem Netzwerksegment zum Server hinweisen, z.B. durch fehlerhafte Router, Überlastung oder schlechte Verbindung.

**Ausgangsweg (Client → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                    10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net           15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net           10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                   0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Ziel-IP (Server)                0.0%   20   85.3   85.0  84.5   86.0   0.5
```

**Rückweg (Server → Client)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                  0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net           0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net           0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                   0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                   0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                     0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                  0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Auswertung**

Der Paketverlust tritt nur auf dem Ausgangsweg auf. Die Verluste sind bei den Hops 4, 5 und 6 sichtbar, was auf ein Problem auf dem Weg vom Client zum Server hindeutet, z.B. Überlastung oder fehlerhafte Netzwerkgeräte. Der Rückweg ist dagegen stabil.

</TabItem>

<TabItem value="mtrResultsExample7" label="Beispiel 7">

**Beispiel:** Paketverlust nur auf dem Rückweg (Server → Client)

**Beschreibung**

Hier tritt Paketverlust nur auf dem Rückweg (Server zum Client) auf, während der Ausgangsweg (Client zum Server) keine Verluste zeigt. Das kann auf ein Problem in einem Netzwerksegment auf dem Rückweg hinweisen.

**Ausgangsweg (Client → Server)**

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

**Rückweg (Server → Client)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                   0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net            0.0%   20   65.1   65.2  64.5   66.5   0.5
4. be1234.ccr42.isp.net           10.0%   20   50.6   51.0  50.0   55.0   1.2
5. 203.0.113.5                    15.0%   20   35.7   36.5  34.5   40.0   1.8
6. 172.16.0.1                    10.0%   20   20.2   21.5  19.5   25.0   2.5
7. 10.0.0.1                      0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                   0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Auswertung**

Der Paketverlust tritt nur auf dem Rückweg auf. Die Verluste sind bei den Hops 4, 5 und 6 sichtbar, was auf ein Problem auf dem Weg vom Server zum Client hindeutet.

</TabItem>

</Tabs>

## Probleme melden

Obwohl ZAP-Hosting das Netzwerk ständig überwacht, ist es wichtig, bei Netzwerkproblemen schnell unseren Support zu kontaktieren. Damit wir die Diagnose genau stellen und das Problem schnell lösen können, bitten wir dich, uns die Ergebnisse deiner WinMTR/MTR-Reports für Aus- und Rückweg zu schicken. So können wir mögliche Problemstellen präzise identifizieren und fixen.

<InlineVoucher />