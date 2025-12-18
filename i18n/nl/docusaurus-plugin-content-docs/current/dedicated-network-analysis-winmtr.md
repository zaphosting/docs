---
id: dedicated-network-analysis-winmtr
title: "Dedicated Server: Netwerkproblemen opsporen met WinMTR/MTR"
description: "Ontdek hoe je netwerkproblemen kunt diagnosticeren door uitgaande en terugkerende routes te analyseren om latency en packet loss effectief te identificeren → Leer het nu"
sidebar_label: Netwerkproblemen
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Netwerkproblemen kunnen flink vervelend zijn en horen natuurlijk niet bij de dagelijkse gang van zaken. Maar als ze toch optreden, is het belangrijk om snel en efficiënt de oorzaak te achterhalen om het probleem op te lossen. Gedetailleerde info over netwerkproblemen kun je effectief analyseren met de **WinMTR (Windows)** of **MTR (Linux/Mac OS)** applicatie.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR is een netwerkdiagnosetool die de functies van Ping en Traceroute combineert. Hiermee kun je zowel de **uitgaande route (Client → Server)** als de **terugkerende route (Server → Client)** gedetailleerd analyseren door het pad van datapakketten in beide richtingen te volgen. Daarbij worden belangrijke gegevens zoals latency en packet loss vastgelegd, die cruciaal zijn voor een nauwkeurige diagnose en aanpak van netwerkproblemen.

**Uitgaande route (Client → Server)**: Een rapport van de **uitgaande route** is handig bij problemen zoals wegvallende verbindingen, trage verbindingen of moeite met verbinden. Deze analyse helpt mogelijke problemen te vinden op het pad van de client naar de server, zoals netwerkcongestie, packet loss of verkeerde routering.

**Terugkerende route (Server → Client)**: Een rapport van de **terugkerende route** heeft pas zin als een stabiele en werkende verbinding op de uitgaande route is bevestigd. Dit rapport is vooral relevant als de uitgaande route geen problemen toont, maar je toch last hebt van trage serverreacties, vertraagde laadtijden of incomplete datatransmissies.

Kortom, bij merkbare netwerkproblemen analyseer je eerst de **uitgaande route (Client → Server)**. Als dat rapport geen afwijkingen toont en de problemen blijven, check je de **terugkerende route (Server → Client)** om mogelijke asymmetrische problemen te vinden. Asymmetrische netwerkproblemen ontstaan als datapakketten in de ene richting probleemloos gaan, maar in de andere richting vertraging of packet loss optreden.

## Installatie

Nu duidelijk is wanneer rapporten voor de in- en uitgaande routes nuttig zijn, gaan we door naar de installatie op zowel client- als serverniveau.

### Client

Voor de uitgaande route moet de applicatie op de client (**jouw computer**) geïnstalleerd worden. Hieronder lees je hoe je de applicatie installeert voor jouw besturingssysteem.

<Tabs>
<TabItem value="windows" label="Windows" default>

Gebruik je een Windows-pc, dan voer je de netwerkdiagnose uit met de WinMTR-applicatie. Download WinMTR eerst van de ZAP-Hosting website. Na het downloaden pak je het bestand uit. Je krijgt dan het uitvoerbare bestand `WinMTR.exe`.

| Applicatie | Download                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>

<TabItem value="linux" label="Linux">

Gebruik je een Linux-pc, dan gebruik je de MTR-applicatie. Open de terminal en voer het installatiecommando uit dat bij jouw distributie hoort:

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

Gebruik je een Mac OS-pc, dan gebruik je ook de MTR-applicatie. Deze is niet standaard geïnstalleerd en ook niet beschikbaar in de Apple Store. Je moet eerst Homebrew installeren als pakketbeheerder.

**Homebrew installeren**

Open de terminal en voer dit commando uit om Homebrew te installeren:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**MTR installeren**

Volg de instructies op het scherm om de installatie af te ronden. Zodra Homebrew klaar is, installeer je MTR met:

```
brew install mtr
```

</TabItem>
</Tabs>


### Server
Voor de terugkerende route moet de applicatie op de server geïnstalleerd worden. Hieronder lees je hoe je dat doet voor het besturingssysteem van jouw server.

<Tabs>

<TabItem value="linux" label="Server met Linux" default>

Verbind met je server via **[SSH](vserver-linux-ssh.md)**. Installeer MTR met het juiste commando voor jouw server:

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

<TabItem value="windows" label="Server met Windows">

Verbind met je server via **[Remote Desktop Connection](vserver-windows-userdp.md)**. Download WinMTR van de ZAP-Hosting website en pak het bestand uit. Je krijgt dan het uitvoerbare bestand `WinMTR.exe`.

| Applicatie | Download                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>
</Tabs>

## Rapport maken

Hieronder leggen we uit hoe je een rapport maakt met WinMTR/MTR, zowel voor de **uitgaande route (Client → Server)** als de **terugkerende route (Server → Client)**.

:::warning Maak rapport tijdens actieve problemen 
Het rapport moet gemaakt worden terwijl het probleem actief en merkbaar is. Alleen dan geeft het rapport nuttige info die helpt bij het oplossen van het probleem.
:::

### Uitgaande route (Client → Server)

Open de WinMTR/MTR-app op je computer en volg de onderstaande stappen om de route van jouw pc naar de server te analyseren.

<Tabs>
<TabItem value="windows" label="Windows" default>

Start WinMTR door te dubbelklikken op `WinMTR.exe`. Vul bij `Host` het IP-adres of de hostname van de server in. Start daarna het rapport. Laat de applicatie minstens **één minuut** draaien om genoeg data te verzamelen. Stop daarna de analyse en sla het resultaat op via `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

Open de terminal en voer het volgende commando uit:

```
mtr <jouw server-ip-adres>
```

Laat het programma minstens **één minuut** draaien om genoeg data te verzamelen. Stop daarna de analyse en sla het resultaat op.

</TabItem>

<TabItem value="macos" label="MacOS">

Open de terminal en voer het volgende commando uit:

```
mtr <jouw server-ip-adres>
```

Laat het programma minstens **één minuut** draaien om genoeg data te verzamelen. Stop daarna de analyse en sla het resultaat op.

</TabItem>
</Tabs>

### Terugkerende route (Server → Client)

Verbind met je server en volg de onderstaande stappen om de route van de server naar jouw computer te analyseren.

<Tabs>
<TabItem value="linux" label="Server met Linux" default>

Voer op de server in de SSH-terminal het volgende commando uit:

```
mtr <jouw client-ip-adres>
```

Laat het programma minstens **één minuut** draaien om genoeg data te verzamelen. Stop daarna de analyse en sla het resultaat op.

:::info
Weet je je IP-adres niet of weet je niet hoe je het moet vinden? Er zijn verschillende manieren om je IP-adres te achterhalen. De snelste is via een online dienst zoals WhatIsMyIPAddress.
:::

</TabItem>

<TabItem value="windows" label="Server met Windows">

Vul bij `Host` het IP-adres van jouw verbinding in. Start daarna het rapport. Laat de applicatie minstens **één minuut** draaien om genoeg data te verzamelen. Stop daarna de analyse en sla het resultaat op via `Export TEXT`.

:::info
Weet je je IP-adres niet of weet je niet hoe je het moet vinden? Er zijn verschillende manieren om je IP-adres te achterhalen. De snelste is via een online dienst zoals **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Rapport evalueren

Bij het beoordelen van de resultaten zijn er een paar belangrijke punten om op te letten. Hieronder leggen we deze uit en waarom ze belangrijk zijn voor de analyse. Goed opletten op deze zaken is essentieel om een juiste diagnose te stellen en mogelijke oorzaken te vinden.

### Packet loss

Zie je packet loss in de resultaten, dan wijst dat op mogelijke netwerkproblemen. Een kleine tijdelijke packet loss van 1-2% is meestal geen ramp, maar hogere waarden duiden op ernstiger issues. Packet loss kan zorgen voor vertragingen of onderbrekingen in de verbindingen. Als de loss gelijkmatig verdeeld is over alle hops, kan het probleem in je eigen netwerk of aan de serverkant zitten. Maar als de loss alleen bij een specifieke hop of segment voorkomt, ligt het probleem waarschijnlijk bij die node of de verbinding ernaartoe. Kleine verliezen bij de eerste hops (die bij je lokale netwerk horen) zijn niet per se kritisch, omdat deze apparaten ICMP-verzoeken (zoals ping) vaak lager prioriteren en kunnen negeren.

### Latency (pingtijden)

De latency-waarden (`Avg`, `Best`, `Worst`) geven inzicht in de snelheid en stabiliteit van de verbinding. Blijft de latency bij een bepaalde hop consistent hoog, dan kan dat wijzen op netwerkcongestie of een trage router. Een plotselinge stijging tussen twee hops duidt op een mogelijke bottleneck. Normaal gesproken neemt latency geleidelijk toe richting de bestemming. Let op plotselinge, flinke pieken, want die wijzen vaak op een probleem. Het vergelijken van uitgaande en terugkerende routes helpt ook bij het opsporen van asymmetrische problemen, waarbij verkeer in één richting problemen ondervindt.

Met een goede analyse van deze factoren kun je precies bepalen waar het netwerkprobleem zit — in je eigen netwerk, bij de internetprovider, of ergens onderweg naar de server.

### Diagnostische voorbeelden

Om het beter te begrijpen, geven we een paar voorbeelden van diagnoses. We hebben scenario’s uitgewerkt die verschillende situaties en mogelijke oorzaken laten zien. Zo leer je hoe je de data interpreteert en netwerkproblemen effectiever opspoort.

:::info
De volgende voorbeelden zijn gebaseerd op fictieve WinMTR/MTR-rapporten. De IP-adressen, hostnamen en routes zijn volledig verzonnen en hebben geen connectie met echte netwerken of hosts.
:::

<Tabs>
<TabItem value="mtrResultsExample1" label="Voorbeeld 1" default>

**Voorbeeld:** Packet Loss bij de Client

**Beschrijving**

In dit voorbeeld is er packet loss aan de clientzijde, zichtbaar op zowel de uitgaande als terugkerende routes.

**Uitgaande Route (Client → Server)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                     15.0%   20    1.1    3.4   1.0   10.2  2.8
2. 10.0.0.1                        10.0%   20   12.3   15.7  10.5   30.8  5.5
3. 172.16.0.1                       0.0%   20   25.1   26.0  24.8   27.2  0.6
4. 203.0.113.5                      0.0%   20   35.4   34.5  33.2   36.1  0.9
5. be1234.ccr42.isp.net             0.0%   20   50.6   49.8  49.1   51.5  0.8
6. be5678.ccr21.isp.net             0.0%   20   60.1   59.9  59.5   61.0  0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3  0.5
8. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
```

**Terugkerende Route (Server → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2  0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7  0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0  0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0  0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3  0.7
7. 10.0.0.1                        10.0%   20   15.8   16.5  15.0   35.2  6.2
8. 192.168.1.1                     15.0%   20    2.0    4.0   1.2   12.0  3.8
```

**Evaluatie**

De evaluatie laat zien dat packet loss aan de clientzijde optreedt. Beide routes tonen verlies bij de eerste hops (Hop 1 en 2), wat wijst op een probleem bij de client, in het lokale netwerk of met de router.

</TabItem>

<TabItem value="mtrResultsExample2" label="Voorbeeld 2">

**Voorbeeld:** Packet Loss bij de server

**Beschrijving**

Hier is packet loss aan de serverzijde, zichtbaar op uitgaande en terugkerende routes.

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
7. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
8. Destination-IP (Server)                15.0%   20   85.3   90.2  85.0  105.0  7.0
```

**Terugkerende Route (Server → Client)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                15.0%   20   85.3   90.2  85.0  105.0  7.0
2. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
```

**Evaluatie**

De evaluatie toont packet loss aan de serverzijde. Beide routes laten verlies zien bij de laatste hops (Hop 7 en 8), wat wijst op een probleem bij de server.

</TabItem>

<TabItem value="mtrResultsExample3" label="Voorbeeld 3">

**Voorbeeld:** Latency problemen bij de client

**Beschrijving**

Hier is sprake van hoge latency aan de clientzijde, zichtbaar op uitgaande en terugkerende routes.

**Uitgaande Route (Client → Server)**

```console {2-3} 
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
2. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
3. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
4. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
5. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
6. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Terugkerende Route (Server → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
7. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
8. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
```

**Evaluatie**

De evaluatie toont hoge latency aan de clientzijde. Beide routes laten verhoogde latency zien bij de eerste hops (Hop 1 en 2), wat wijst op een probleem bij de client.

</TabItem>

<TabItem value="mtrResultsExample4" label="Voorbeeld 4">

**Voorbeeld:** Latency problemen bij de server

**Beschrijving**

Hier is sprake van hoge latency aan de serverzijde, zichtbaar op uitgaande en terugkerende routes.

**Uitgaande Route (Client → Server)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
8. Destination-IP (Server)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
```

**Terugkerende Route (Server → Client)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
2. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Evaluatie**

De evaluatie toont hoge latency aan de serverzijde. Beide routes laten verhoogde latency zien bij de laatste hops (Hop 7 en 8), wat wijst op een probleem bij de server.

</TabItem>

<TabItem value="mtrResultsExample5" label="Voorbeeld 5">

**Voorbeeld:** Routingprobleem (ISP Routing)

**Beschrijving**

Hier werkt de route van Client X naar de server zonder problemen, maar Client Y heeft routingproblemen naar de server, met packet loss. Dit wijst op een probleem bij de internetprovider (ISP).

**Uitgaande Route (Client X → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Uitgaande Route (Client Y → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                    30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net           25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net           10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Server)                0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Terugkerende Route (Server → Client X)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Terugkerende Route (Server → Client Y)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3

```

**Evaluatie**

De evaluatie toont een routingprobleem bij de ISP. De route van Client X naar de server is stabiel, maar die van Client Y vertoont flinke problemen met packet loss en hoge latency.

</TabItem>

<TabItem value="mtrResultsExample6" label="Voorbeeld 6">

**Voorbeeld:** Packet Loss alleen op de uitgaande route (Client → Server)

**Beschrijving**

Hier is packet loss alleen op de uitgaande route (van client naar server), terwijl de terugkerende route geen verlies toont. Dit kan wijzen op een probleem in een netwerksegment richting de server, bijvoorbeeld door defecte routers, congestie of slechte verbinding.

**Uitgaande Route (Client → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                    10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net           15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net           10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                   0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Server)                0.0%   20   85.3   85.0  84.5   86.0   0.5

```

**Terugkerende Route (Server → Client)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Evaluatie**

De evaluatie toont packet loss alleen op de uitgaande route, zichtbaar bij hops 4, 5 en 6. Dit wijst op een probleem onderweg van client naar server, zoals congestie of defecte netwerkapparatuur. De terugkerende route is stabiel.

</TabItem>

<TabItem value="mtrResultsExample7" label="Voorbeeld 7">

**Voorbeeld:** Packet Loss alleen op de terugkerende route (Server → Client)

**Beschrijving**

Hier is packet loss alleen op de terugkerende route (van server naar client), terwijl de uitgaande route geen verlies toont. Dit kan wijzen op een probleem in een netwerksegment op de terugweg.

**Uitgaande Route (Client → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
```

**Terugkerende Route (Server → Client)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
4. be1234.ccr42.isp.net            10.0%   20   50.6   51.0  50.0   55.0   1.2
5. 203.0.113.5                     15.0%   20   35.7   36.5  34.5   40.0   1.8
6. 172.16.0.1                      10.0%   20   20.2   21.5  19.5   25.0   2.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Evaluatie**

De evaluatie toont packet loss alleen op de terugkerende route, zichtbaar bij hops 4, 5 en 6. Dit wijst op een probleem onderweg van server naar client.

</TabItem>

</Tabs>

## Problemen melden

Hoewel ZAP-Hosting het netwerk continu monitort, is het belangrijk om bij netwerkproblemen snel contact op te nemen met onze support. Voor een accurate diagnose en snelle oplossing vragen we je vriendelijk om de resultaten van je WinMTR/MTR-rapporten van zowel de uitgaande als terugkerende routes aan te leveren. Zo kunnen we precies zien waar het probleem zit en het snel fixen.