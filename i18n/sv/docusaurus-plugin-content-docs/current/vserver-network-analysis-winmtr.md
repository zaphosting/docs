---
id: vserver-network-analysis-winmtr
title: "VPS: Identifiera nätverksproblem med WinMTR/MTR"
description: "Lär dig hur du diagnostiserar nätverksproblem genom att analysera utgående och inkommande rutter för att förbättra anslutningens stabilitet och prestanda → Läs mer nu"
sidebar_label: Nätverksproblem
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Nätverksproblem kan vara störande och bör såklart inte vara en del av vardagen. Men när de väl uppstår är det viktigt att snabbt och effektivt identifiera orsaken för att lösa problemet. Detaljerad information om nätverksproblem kan effektivt analyseras med hjälp av applikationen **WinMTR (Windows)** eller **MTR (Linux/Mac OS)**.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR är ett nätverksdiagnostikverktyg som kombinerar funktionerna från Ping och Traceroute. Det möjliggör en detaljerad analys av både **utgående rutt (Klient → Server)** och **inkommande rutt (Server → Klient)** genom att spåra datapaketens väg i båda riktningarna. Under tiden samlar det in viktig information som latens och paketförlust, vilket är avgörande för att korrekt diagnostisera och åtgärda nätverksproblem.

**Utgående rutt (Klient → Server)**: En rapport för den **utgående rutten** är användbar när problem som anslutningsavbrott, långsamma anslutningar eller svårigheter att etablera anslutning uppstår. Denna analys hjälper till att identifiera potentiella problem på vägen från klienten till servern, som nätverksbelastning, paketförlust eller felaktig routing.

**Inkommande rutt (Server → Klient)**: En rapport för den **inkommande rutten** är bara meningsfull när en stabil och fungerande anslutning på den utgående rutten har bekräftats. Det betyder att rapporten för den inkommande rutten blir särskilt relevant när den utgående rutten inte visar några problem, men problem som långsamma serverresponser, fördröjda laddningstider eller ofullständiga datatransmissioner ändå kvarstår.

Sammanfattningsvis, om märkbara nätverksproblem uppstår bör den **utgående rutten (Klient → Server)** analyseras först. Om den utgående rapporten inte visar några avvikelser och problemen kvarstår, är det nödvändigt att kontrollera **inkommande rutten (Server → Klient)** för att identifiera eventuella asymmetriska problem. Asymmetriska nätverksproblem kan uppstå när datapaket skickas utan problem i ena riktningen, medan fördröjningar eller paketförlust sker i motsatt riktning.



## Installation
Nu när det är tydligt när rapporter för inkommande och utgående rutter är användbara, kan vi gå vidare till installationen på både klient- och serversidan.

### Klient
För den utgående rutten måste applikationen installeras på klienten (**din dator**). Följande steg visar hur du installerar applikationen för ditt operativsystem.

<Tabs>
  <TabItem value="windows" label="Windows" default>
När du använder en dator med Windows operativsystem görs nätverksanalysen via WinMTR-applikationen. För att installera WinMTR på din dator, ladda först ner applikationen från ZAP-Hostings webbplats. Efter nedladdning, packa upp filen. Då får du den körbara filen `WinMTR.exe`.

| Applikation | Nedladdning                              |
| ----------- | ---------------------------------------- |
| WinMTR      | [Länk](https://zap-hosting.com/winmtr.zip) |

  </TabItem>
  <TabItem value="linux" label="Linux">

När du använder en dator med Linux operativsystem görs nätverksanalysen via MTR-applikationen. För att installera MTR på ditt system, öppna terminalen och kör rätt installationskommando för ditt operativsystem:

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

När du använder en dator med Mac OS operativsystem görs nätverksanalysen via MTR-applikationen. MTR är dock inte förinstallerat på Mac OS-enheter och finns inte heller i Apple Store. För att installera MTR behöver du först installera Homebrew som pakethanterare på din dator.



**Installera Homebrew**

Öppna terminalen på din dator och kör följande kommando för att installera Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Installera MTR**

Följ instruktionerna som visas för att slutföra installationen. När Homebrew är installerat kan du använda det för att installera MTR genom att skriva följande kommando i terminalen:

```
brew install mtr
```

</TabItem>
</Tabs>


### Server
För den inkommande rutten måste applikationen installeras på servern. Följande steg visar hur du installerar applikationen för ditt servers operativsystem.

<Tabs>

<TabItem value="linux" label=" Server med Linux" default>

Anslut till din server via **[SSH](vserver-linux-ssh.md)**. För att installera MTR på ditt system, kör rätt installationskommando för ditt servers operativsystem:

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

<TabItem value="windows" label="Server med Windows">

Anslut till din server via **[Fjärrskrivbord](vserver-windows-userdp.md)**. För att installera WinMTR på din server, ladda först ner applikationen från ZAP-Hostings webbplats. Efter nedladdning, packa upp filen. Då får du den körbara filen `WinMTR.exe`.

| Applikation | Nedladdning                              |
| ----------- | ---------------------------------------- |
| WinMTR      | [Länk](https://zap-hosting.com/winmtr.zip) |

</TabItem>

</Tabs>



## Skapa rapport



Nedan skapas en rapport med WinMTR/MTR-applikationen. Detta görs för både **utgående rutt (Klient → Server)** och **inkommande rutt (Server → Klient)**.

:::warning Skapa rapport under aktiva problem 
Rapporten bör skapas när problemet aktivt pågår och är märkbart. Endast då ger rapporten användbar information som kan hjälpa till att felsöka och lösa problemet.
:::

### Utgående rutt (Klient → Server)

För att analysera rutten från din dator till servern, öppna WinMTR/MTR-applikationen på din dator och följ stegen nedan.

<Tabs>
<TabItem value="windows" label="Windows" default>

WinMTR-applikationen startas genom att dubbelklicka på filen `WinMTR.exe`. I fältet `Host` anger du serverns IP-adress eller värdnamn. Starta sedan rapporten. Låt applikationen köra i minst **en minut** för att samla tillräckligt med data. När du har tillräckligt med data, stoppa analysen och spara resultatet genom att klicka på `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

MTR-applikationen kan användas på din dator genom att öppna terminalen och köra följande kommando:

```
mtr <din server-ip-adress>
```

Låt applikationen köra i minst **en minut** för att samla tillräckligt med data. När du har tillräckligt med data, stoppa analysen och spara resultatet.

</TabItem>

<TabItem value="macos" label="MacOS">

MTR-applikationen kan användas på din dator genom att öppna terminalen och köra följande kommando:

```
mtr <din klient-ip-adress>
```

Låt applikationen köra i minst **en minut** för att samla tillräckligt med data. När du har tillräckligt med data, stoppa analysen och spara resultatet.

</TabItem>
</Tabs>





### Inkommande rutt (Server → Klient)

För att analysera rutten från servern till din dator, anslut till din server och följ stegen nedan.

<Tabs>
<TabItem value="linux" label=" Server med Linux" default>
    

MTR-applikationen kan användas på din server genom att köra följande kommando i SSH-terminalen:

```
mtr <din klient-ip-adress>
```

Låt applikationen köra i minst **en minut** för att samla tillräckligt med data. När du har tillräckligt med data, stoppa analysen och spara resultatet.

:::info
Vet du inte din IP-adress eller osäker på hur du hittar den? Det finns flera sätt att ta reda på din IP-adress. Det snabbaste är via en online-tjänst som WhatIsMyIPAddress.
:::

</TabItem>
<TabItem value="windows" label="Server med Windows">

I fältet `Host` anger du IP-adressen för din anslutning. Starta sedan rapporten. Låt applikationen köra igen i minst **en minut** för att samla tillräckligt med data. När du har tillräckligt med data, stoppa analysen och spara resultatet genom att klicka på `Export TEXT`.

:::info
Vet du inte din IP-adress eller osäker på hur du hittar den? Det finns flera sätt att ta reda på din IP-adress. Det snabbaste är via en online-tjänst som **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Utvärdera rapport

När du utvärderar resultaten finns det flera viktiga punkter att ha i åtanke. Följande avsnitt förklarar dessa punkter mer i detalj och klargör deras betydelse för analysen. Att noggrant granska dessa aspekter är avgörande för att göra en korrekt diagnos och effektivt identifiera potentiella orsaker.

### Paketförlust

Om du ser paketförlust i resultaten indikerar detta potentiella nätverksproblem. En mindre tillfällig paketförlust på 1-2 % behöver inte vara problematisk, men högre värden tyder på allvarligare problem. Paketförlust kan orsaka fördröjningar eller avbrott i tjänsternas anslutningar. Om förlusten är jämnt fördelad över alla hopp kan problemet ligga i ditt eget nätverk eller på serversidan. Om förlusten däremot bara sker vid ett specifikt hopp eller område är problemet sannolikt hos den noden eller anslutningen till nästa. Det är också viktigt att veta att små förluster i de första hoppen, som tillhör ditt lokala nätverk, inte nödvändigtvis är kritiska, eftersom dessa enheter ofta prioriterar ICMP-förfrågningar (som ping) lägre och kan kassera dem.



### Latens (pingtider)
Latensvärdena (`Avg`, `Best`, `Worst`) ger dig insikt i anslutningens hastighet och stabilitet. Om du märker att latensen är konsekvent hög vid ett visst hopp kan det indikera nätverksbelastning eller en långsam router. En plötslig ökning av latens mellan två hopp pekar på en möjlig flaskhals. Normalt ökar latensen gradvis längs rutten till destinationen. Var dock uppmärksam på plötsliga, betydande toppar, som ofta är ett tecken på problem. Att jämföra utgående och inkommande rutter kan också vara hjälpsamt för att identifiera asymmetriska problem, vilket indikerar att trafiken i ena riktningen stöter på svårigheter.

Med noggrann analys av dessa faktorer kan du exakt avgöra var nätverksproblemet ligger – om det är i ditt eget nätverk, hos internetleverantören eller någonstans längs vägen till servern.



### Diagnostiska exempel 
För att förbättra din förståelse, låt oss förtydliga informationen med några diagnostiska exempel. Vi har sammanställt några scenarier som illustrerar olika situationer och möjliga orsaker. Dessa exempel hjälper dig att tolka data och diagnostisera nätverksproblem mer effektivt.

:::info
Följande diagnostiska exempel illustrerar olika scenarier baserade på fiktiva WinMTR/MTR-rapporter. IP-adresser, värdnamn och rutter som visas är helt fiktiva och har ingen koppling till verkliga nätverk eller värdar.
:::

<Tabs>

<TabItem value="mtrResultsExample1" label="Exempel 1" default>

**Exempel:** Paketförlust hos klienten

**Beskrivning**

I detta exempel beskrivs paketförlust som sker på klientsidan, synligt på både utgående och inkommande rutter.

**Utgående rutt (Klient → Server)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                     15.0%   20    1.1    3.4   1.0   10.2  2.8
2. 10.0.0.1                        10.0%   20   12.3   15.7  10.5   30.8  5.5
3. 172.16.0.1                       0.0%   20   25.1   26.0  24.8   27.2  0.6
4. 203.0.113.5                      0.0%   20   35.4   34.5  33.2   36.1  0.9
5. be1234.ccr42.isp.net             0.0%   20   50.6   49.8  49.1   51.5  0.8
6. be5678.ccr21.isp.net             0.0%   20   60.1   59.9  59.5   61.0  0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3  0.5
8. Mål-IP (Server)                  0.0%   20   80.2   80.0  79.5   81.2  0.6
```

**Inkommande rutt (Server → Klient)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Mål-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
2. 198.51.100.10                   0.0%   20   70.1   70.4  69.8   71.2  0.5
3. be5678.ccr21.isp.net            0.0%   20   60.2   60.0  59.6   60.7  0.4
4. be1234.ccr42.isp.net            0.0%   20   50.1   50.2  49.5   51.0  0.5
5. 203.0.113.5                    0.0%   20   35.5   35.0  34.5   36.0  0.4
6. 172.16.0.1                     0.0%   20   25.2   26.1  24.9   27.3  0.7
7. 10.0.0.1                      10.0%   20   15.8   16.5  15.0   35.2  6.2
8. 192.168.1.1                   15.0%   20    2.0    4.0   1.2   12.0  3.8
```

**Utvärdering**

Utvärderingen visar att paketförlust sker på klientsidan. Båda rutterna visar förluster vid de första hoppen (Hopp 1 och 2), vilket indikerar ett problem på klientens sida, antingen i det lokala nätverket eller med routern.

</TabItem>

<TabItem value="mtrResultsExample2" label="Exempel 2">

**Exempel:** Paketförlust hos servern

**Beskrivning**

I detta exempel beskrivs paketförlust som sker på serversidan, synligt på både utgående och inkommande rutter.

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
7. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
8. Mål-IP (Server)                 15.0%   20   85.3   90.2  85.0  105.0  7.0
```



**Inkommande rutt (Server → Klient)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Mål-IP (Server)                15.0%   20   85.3   90.2  85.0  105.0  7.0
2. 198.51.100.10                  10.0%   20   70.5   72.5  70.0   80.0  4.5
3. be5678.ccr21.isp.net            0.0%   20   60.1   60.2  59.5   61.5  0.7
4. be1234.ccr42.isp.net            0.0%   20   50.2   50.5  49.5   51.0  0.4
5. 203.0.113.5                    0.0%   20   30.6   30.3  29.5   31.5  0.6
6. 172.16.0.1                     0.0%   20   20.2   20.5  19.5   21.0  0.5
7. 10.0.0.1                       0.0%   20   10.5   11.1  10.0   12.5  0.7
8. 192.168.1.1                    0.0%   20    1.2    1.3   1.1    2.0  0.3
```



**Utvärdering**

Utvärderingen visar att paketförlust sker på serversidan. Båda rutterna visar förluster vid de sista hoppen (Hopp 7 och 8), vilket pekar på ett problem hos servern.

</TabItem>

<TabItem value="mtrResultsExample3" label="Exempel 3">

**Exempel:** Latensproblem hos klienten

**Beskrivning**

I detta exempel beskrivs höga latenstider på klientsidan, märkbara på både utgående och inkommande rutter.

**Utgående rutt (Klient → Server)**

```console {2-3} 
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
2. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
3. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
4. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
5. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
6. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Mål-IP (Server)                  0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Inkommande rutt (Server → Klient)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Mål-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                  0.0%   20   70.1   70.4  69.8   71.2   0.5
3. be5678.ccr21.isp.net           0.0%   20   60.2   60.0  59.6   60.7   0.4
4. be1234.ccr42.isp.net           0.0%   20   50.1   50.2  49.5   51.0   0.5
5. 203.0.113.5                   0.0%   20   35.5   35.0  34.5   36.0   0.4
6. 172.16.0.1                    0.0%   20   25.2   26.1  24.9   27.3   0.7
7. 10.0.0.1                     0.0%   20  120.7  115.5  60.0  190.0  30.0
8. 192.168.1.1                  0.0%   20  150.5  130.5  50.0  200.0  40.0
```

**Utvärdering**

Utvärderingen visar att det finns hög latens på klientsidan. Båda rutterna visar ökad latens vid de första hoppen (Hopp 1 och 2), vilket indikerar ett problem på klientens sida.

</TabItem>

<TabItem value="mtrResultsExample4" label="Exempel 4">

**Exempel:** Latensproblem hos servern

**Beskrivning**

I detta exempel beskrivs höga latenstider som sker på serversidan, märkbara på både utgående och inkommande rutter.

**Utgående rutt (Klient → Server)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
8. Mål-IP (Server)                  0.0%   20  300.5  320.0 300.0  350.0  15.0
```

**Inkommande rutt (Server → Klient)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Mål-IP (Server)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
2. 198.51.100.10                  0.0%   20  200.5  210.0 200.0  230.0  10.0
3. be5678.ccr21.isp.net           0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net           0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                   0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                    0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                     0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                  0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Utvärdering**

Utvärderingen visar att det finns hög latens på serversidan. Båda rutterna visar ökad latens vid de sista hoppen (Hopp 7 och 8), vilket indikerar ett problem på serverns sida.

</TabItem>

<TabItem value="mtrResultsExample5" label="Exempel 5">

**Exempel:** Routingproblem (ISP-routing)

**Beskrivning**

I detta exempel beskrivs hur rutten från Klient X till servern fungerar utan problem, medan det finns routingproblem från Klient Y till servern, vilket leder till paketförlust. Detta indikerar ett problem med routingen hos internetleverantören (ISP).

**Utgående rutt (Klient X → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Mål-IP (Server)                  0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Utgående rutt (Klient Y → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                    30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net           25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net           10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                   0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Mål-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Inkommande rutt (Server → Klient X)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Mål-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                  0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net           0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net           0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                   0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                    0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                     0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                  0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Inkommande rutt (Server  → Klient Y)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Mål-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                  0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net           0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net           0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                   0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                    0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                     0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                  0.0%   20    1.2    1.3   1.1    2.0   0.3

```

**Utvärdering**

Utvärderingen visar att det finns ett routingproblem hos ISP. Medan rutten från Klient X till servern är stabil, visar rutten från Klient Y betydande problem som leder till paketförlust och hög latens.

</TabItem>

<TabItem value="mtrResultsExample6" label="Exempel 6">

**Exempel:** Paketförlust endast på utgående rutt (Klient → Server)

**Beskrivning**

I detta exempel sker paketförlust endast på den utgående rutten (från klienten till servern), medan den inkommande rutten (från servern till klienten) inte visar någon förlust. Detta kan indikera ett problem i ett nätverkssegment mot servern, möjligtvis orsakat av felaktiga routrar, belastning eller dålig anslutning längs vägen.

**Utgående rutt (Klient → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                    10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net           15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net           10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                   0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Mål-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5

```

**Inkommande rutt (Server → Klient)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Mål-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                  0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net           0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net           0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                   0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                    0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                     0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                  0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Utvärdering**

Utvärderingen visar att paketförlust endast sker på den utgående rutten. Förlusterna syns vid hopp 4, 5 och 6, vilket indikerar ett problem längs vägen från klienten till servern, som belastning eller felaktiga nätverksenheter i ett segment av rutten. På den inkommande rutten finns däremot inga förluster, vilket betyder att anslutningen i motsatt riktning är stabil.

</TabItem>

<TabItem value="mtrResultsExample7" label="Exempel 7">

**Exempel:** Paketförlust endast på inkommande rutt (Server → Klient)

**Beskrivning**

I detta exempel sker paketförlust endast på den inkommande rutten (från servern till klienten), medan den utgående rutten (från klienten till servern) inte visar någon förlust. Detta kan indikera ett problem i ett nätverkssegment på den inkommande vägen.

**Utgående rutt (Klient → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Mål-IP (Server)                  0.0%   20   85.3   85.0  84.5   86.0   0.5
```

**Inkommande rutt (Server → Klient)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Mål-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                  0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net           0.0%   20   65.1   65.2  64.5   66.5   0.5
4. be1234.ccr42.isp.net          10.0%   20   50.6   51.0  50.0   55.0   1.2
5. 203.0.113.5                  15.0%   20   35.7   36.5  34.5   40.0   1.8
6. 172.16.0.1                   10.0%   20   20.2   21.5  19.5   25.0   2.5
7. 10.0.0.1                      0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                   0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Utvärdering**

Utvärderingen visar att paketförlust endast sker på den inkommande rutten. Förlusterna syns vid hopp 4, 5 och 6 på den inkommande rutten, vilket indikerar ett problem längs vägen från servern till klienten.

</TabItem>

</Tabs>

## Rapportera problem

Även om ZAP-Hosting kontinuerligt övervakar nätverket är det viktigt att du kontaktar vår support snabbt vid nätverksproblem. För att säkerställa en korrekt diagnos och snabb lösning ber vi dig vänligen att skicka oss resultaten från dina WinMTR/MTR-rapporter för både utgående och inkommande rutter. Denna information hjälper oss att exakt identifiera potentiella problemområden och lösa problemet snabbt.

<InlineVoucher />