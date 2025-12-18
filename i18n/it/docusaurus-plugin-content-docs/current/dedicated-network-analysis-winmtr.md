---
id: dedicated-network-analysis-winmtr
title: "Dedicated Server: Identificare problemi di rete con WinMTR/MTR"
description: "Scopri come diagnosticare problemi di rete analizzando i percorsi in uscita e di ritorno per identificare efficacemente latenza e perdita di pacchetti → Scopri di più ora"
sidebar_label: Problemi di rete
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

I problemi di rete possono essere fastidiosi e, ovviamente, non dovrebbero far parte della vita quotidiana. Tuttavia, quando si presentano, è importante identificare rapidamente ed efficacemente la causa per risolvere il problema. Informazioni dettagliate sui problemi di rete possono essere analizzate efficacemente utilizzando l'applicazione **WinMTR (Windows)** o **MTR (Linux/Mac OS)**.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR è uno strumento di diagnostica di rete che combina le funzioni di Ping e Traceroute. Permette un’analisi dettagliata sia del **percorso in uscita (Client → Server)** sia del **percorso di ritorno (Server → Client)** tracciando il percorso dei pacchetti dati in entrambe le direzioni. In questo modo cattura informazioni importanti come latenza e perdita di pacchetti, fondamentali per diagnosticare e risolvere con precisione i problemi di rete.

**Percorso in uscita (Client → Server)**: Un report per il **percorso in uscita** è utile quando si presentano problemi come disconnessioni, connessioni lente o difficoltà a stabilire la connessione. Questa analisi aiuta a identificare potenziali problemi lungo il percorso dal client al server, come congestione di rete, perdita di pacchetti o routing difettoso.

**Percorso di ritorno (Server → Client)**: Un report per il **percorso di ritorno** ha senso solo dopo aver confermato una connessione stabile e funzionante sul percorso in uscita. Quindi, il report del percorso di ritorno diventa particolarmente rilevante quando il percorso in uscita non mostra problemi, ma persistono problemi come risposte lente del server, tempi di caricamento ritardati o trasmissioni dati incomplete.

In sintesi, se si verificano problemi di rete evidenti, si dovrebbe analizzare prima il **percorso in uscita (Client → Server)**. Se il report in uscita non mostra anomalie e i problemi persistono, è necessario controllare il **percorso di ritorno (Server → Client)** per identificare possibili problemi asimmetrici. I problemi di rete asimmetrici si verificano quando i pacchetti dati vengono trasmessi senza problemi in una direzione, mentre nell’altra si riscontrano ritardi o perdita di pacchetti.

## Installazione

Ora che è chiaro quando sono utili i report per i percorsi in entrata e in uscita, passiamo all’installazione sia lato client che server.

### Client

Per il percorso in uscita, l’applicazione deve essere installata sul client (**il tuo computer**). I passaggi seguenti spiegano come installare l’app per il tuo sistema operativo.

<Tabs>
<TabItem value="windows" label="Windows" default>

Se usi un PC con sistema operativo Windows, l’analisi di rete si effettua tramite l’app WinMTR. Per installare WinMTR sul tuo computer, scarica prima l’app dal sito ZAP-Hosting. Dopo il download, estrai il file. Otterrai così il file eseguibile `WinMTR.exe`.

| Applicazione | Download                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>

<TabItem value="linux" label="Linux">

Se usi un PC con sistema operativo Linux, l’analisi di rete si effettua tramite l’app MTR. Per installare MTR sul tuo sistema, apri il terminale ed esegui il comando di installazione adatto al tuo sistema operativo:

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

Se usi un Mac, l’analisi di rete si effettua tramite l’app MTR. Tuttavia, MTR non è preinstallato su Mac OS e non è disponibile sull’Apple Store. Per installare MTR devi prima installare Homebrew come package manager sul tuo Mac.

**Installare Homebrew**

Apri il terminale e lancia questo comando per installare Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Installare MTR**

Segui i passaggi mostrati per completare l’installazione. Una volta che Homebrew è installato correttamente, puoi usarlo per installare MTR con questo comando:

```
brew install mtr
```

</TabItem>
</Tabs>


### Server
Per il percorso di ritorno, l’app deve essere installata sul server. I passaggi seguenti spiegano come installare l’app per il sistema operativo del tuo server.

<Tabs>

<TabItem value="linux" label="Server Linux" default>

Connettiti al tuo server via **[SSH](vserver-linux-ssh.md)**. Per installare MTR sul sistema, esegui il comando di installazione adatto al sistema operativo del server:

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

<TabItem value="windows" label="Server Windows">

Connettiti al tuo server tramite **[Remote Desktop Connection](vserver-windows-userdp.md)**. Per installare WinMTR sul server, scarica prima l’app dal sito ZAP-Hosting. Dopo il download, estrai il file. Otterrai così il file eseguibile `WinMTR.exe`.

| Applicazione | Download                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>
</Tabs>

## Creare il report

Di seguito vedremo come creare un report usando l’app WinMTR/MTR, sia per il **percorso in uscita (Client → Server)** che per il **percorso di ritorno (Server → Client)**.

:::warning Crea il report durante il problema attivo 
Il report va generato mentre il problema è attivo e visibile. Solo così il report fornirà informazioni utili per risolvere il problema.
:::

### Percorso in uscita (Client → Server)

Per analizzare il percorso dal tuo PC al server, apri l’app WinMTR/MTR sul tuo computer e segui i passaggi qui sotto.

<Tabs>
<TabItem value="windows" label="Windows" default>

Lancia WinMTR facendo doppio click su `WinMTR.exe`. Nel campo `Host` inserisci l’indirizzo IP o il nome host del server. Avvia il report. Lascia l’applicazione in esecuzione per almeno **un minuto** per raccogliere dati sufficienti. Quando hai abbastanza dati, ferma l’analisi e salva il risultato cliccando su `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

Su Linux apri il terminale e lancia questo comando:

```
mtr <indirizzo-ip-del-tuo-server>
```

Lascia l’app in esecuzione per almeno **un minuto** per raccogliere dati sufficienti. Quando hai abbastanza dati, ferma l’analisi e salva il risultato.

</TabItem>

<TabItem value="macos" label="MacOS">

Su Mac apri il terminale e lancia questo comando:

```
mtr <indirizzo-ip-del-tuo-client>
```

Lascia l’app in esecuzione per almeno **un minuto** per raccogliere dati sufficienti. Quando hai abbastanza dati, ferma l’analisi e salva il risultato.

</TabItem>
</Tabs>

### Percorso di ritorno (Server → Client)

Per analizzare il percorso dal server al tuo PC, connettiti al server e segui i passaggi qui sotto.

<Tabs>
<TabItem value="linux" label="Server Linux" default>

Su server Linux usa il comando SSH e lancia:

```
mtr <indirizzo-ip-del-tuo-client>
```

Lascia l’app in esecuzione per almeno **un minuto** per raccogliere dati sufficienti. Quando hai abbastanza dati, ferma l’analisi e salva il risultato.

:::info
Non conosci il tuo indirizzo IP o non sai come trovarlo? Ci sono diversi modi per scoprirlo. Il più veloce è usare un servizio online come WhatIsMyIPAddress.
:::

</TabItem>

<TabItem value="windows" label="Server Windows">

Nel campo `Host` inserisci l’indirizzo IP della tua connessione. Avvia il report. Lascia l’app in esecuzione per almeno **un minuto** per raccogliere dati sufficienti. Quando hai abbastanza dati, ferma l’analisi e salva il risultato cliccando su `Export TEXT`.

:::info
Non conosci il tuo indirizzo IP o non sai come trovarlo? Ci sono diversi modi per scoprirlo. Il più veloce è usare un servizio online come **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Valutare il report

Quando valuti i risultati, ci sono alcuni punti chiave da tenere a mente. La sezione seguente spiega questi aspetti nel dettaglio e chiarisce la loro importanza per l’analisi. Prestare attenzione a questi fattori è fondamentale per una diagnosi precisa e per identificare efficacemente le cause.

### Perdita di pacchetti

Se nei risultati vedi perdita di pacchetti, questo indica potenziali problemi di rete. Una perdita temporanea e lieve dell’1-2% potrebbe non essere critica, ma valori più alti indicano problemi più seri. La perdita di pacchetti può causare ritardi o interruzioni nelle connessioni dei servizi. Se la perdita è distribuita uniformemente su tutti gli hop, il problema potrebbe essere nella tua rete locale o sul server. Se invece la perdita si verifica solo in uno specifico hop o area, il problema è probabilmente in quel nodo o nella connessione al successivo. È importante sapere che piccole perdite nei primi hop, che appartengono alla tua rete locale, non sono necessariamente critiche, perché questi dispositivi spesso danno priorità bassa alle richieste ICMP (come il ping) e possono scartarle.

### Latenza (tempi di ping)

I valori di latenza (`Avg`, `Best`, `Worst`) ti danno un’idea della velocità e stabilità della connessione. Se noti che la latenza rimane costantemente alta in un hop specifico, potrebbe indicare congestione di rete o un router lento. Un aumento improvviso della latenza tra due hop indica un possibile collo di bottiglia. Normalmente la latenza aumenta gradualmente lungo il percorso verso la destinazione. Tuttavia, fai attenzione a picchi improvvisi e significativi, spesso segno di un problema. Confrontare i percorsi in uscita e di ritorno può aiutare a identificare problemi asimmetrici, cioè quando il traffico in una direzione incontra difficoltà.

Analizzando con attenzione questi fattori, puoi capire con precisione dove si trova il problema di rete — nella tua rete, con il provider internet o lungo il percorso verso il server.

### Esempi diagnostici

Per aiutarti a capire meglio, ecco alcuni esempi diagnostici. Abbiamo raccolto scenari che mostrano situazioni diverse e possibili cause. Questi esempi ti aiuteranno a interpretare i dati e diagnosticare i problemi di rete in modo più efficace.

:::info
Gli esempi diagnostici seguenti mostrano scenari basati su report WinMTR/MTR fittizi. Gli indirizzi IP, nomi host e percorsi sono completamente inventati e non hanno alcun collegamento con reti o host reali.
:::

<Tabs>
<TabItem value="mtrResultsExample1" label="Esempio 1" default>

**Esempio:** Perdita di pacchetti sul client

**Descrizione**

In questo esempio, la perdita di pacchetti si verifica sul lato client, visibile sia nel percorso in uscita che in quello di ritorno.

**Percorso in uscita (Client → Server)**

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

**Percorso di ritorno (Server → Client)**

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

**Valutazione**

L’analisi mostra che la perdita di pacchetti avviene sul lato client. Entrambi i percorsi mostrano perdite nei primi hop (Hop 1 e 2), indicando un problema nella rete locale del client o nel router.

</TabItem>

<TabItem value="mtrResultsExample2" label="Esempio 2">

**Esempio:** Perdita di pacchetti sul server

**Descrizione**

In questo esempio, la perdita di pacchetti si verifica sul lato server, visibile sia nel percorso in uscita che in quello di ritorno.

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

**Percorso di ritorno (Server → Client)**

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

**Valutazione**

L’analisi indica che la perdita di pacchetti avviene sul lato server. Entrambi i percorsi mostrano perdite negli ultimi hop (Hop 7 e 8), segnalando un problema sul server.

</TabItem>

<TabItem value="mtrResultsExample3" label="Esempio 3">

**Esempio:** Problemi di latenza sul client

**Descrizione**

In questo esempio, si descrivono alti tempi di latenza sul lato client, visibili sia nel percorso in uscita che in quello di ritorno.

**Percorso in uscita (Client → Server)**

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

**Percorso di ritorno (Server → Client)**

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

**Valutazione**

L’analisi mostra alta latenza sul client. Entrambi i percorsi evidenziano latenza aumentata nei primi hop (Hop 1 e 2), indicando un problema sul lato client.

</TabItem>

<TabItem value="mtrResultsExample4" label="Esempio 4">

**Esempio:** Problemi di latenza sul server

**Descrizione**

In questo esempio, si descrivono alti tempi di latenza sul lato server, visibili sia nel percorso in uscita che in quello di ritorno.

**Percorso in uscita (Client → Server)**

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

**Percorso di ritorno (Server → Client)**

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

**Valutazione**

L’analisi mostra alta latenza sul server. Entrambi i percorsi evidenziano latenza aumentata negli ultimi hop (Hop 7 e 8), indicando un problema sul server.

</TabItem>

<TabItem value="mtrResultsExample5" label="Esempio 5">

**Esempio:** Problema di routing (Routing ISP)

**Descrizione**

In questo esempio, il percorso dal Client X al server funziona senza problemi, mentre il percorso dal Client Y al server presenta problemi di routing con perdita di pacchetti. Questo indica un problema nel routing del provider internet (ISP).

**Percorso in uscita (Client X → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Percorso in uscita (Client Y → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net            25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net            10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Destination-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Percorso di ritorno (Server → Client X)**

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

**Percorso di ritorno (Server  → Client Y)**

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

**Valutazione**

L’analisi mostra un problema di routing con l’ISP. Mentre il percorso dal Client X al server è stabile, quello dal Client Y presenta problemi significativi con perdita di pacchetti e alta latenza.

</TabItem>

<TabItem value="mtrResultsExample6" label="Esempio 6">

**Esempio:** Perdita di pacchetti solo sul percorso in uscita (Client → Server)

**Descrizione**

In questo esempio, la perdita di pacchetti si verifica solo sul percorso in uscita (dal client al server), mentre il percorso di ritorno (dal server al client) non mostra perdite. Questo potrebbe indicare un problema in un segmento di rete verso il server, causato da router difettosi, congestione o connessione scadente lungo il percorso.

**Percorso in uscita (Client → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net            15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net            10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Destination-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5

```

**Percorso di ritorno (Server → Client)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Destination-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Valutazione**

L’analisi mostra che la perdita di pacchetti si verifica solo sul percorso in uscita. Le perdite sono visibili agli hop 4, 5 e 6, indicando un problema lungo il percorso dal client al server, come congestione o dispositivi di rete difettosi. Sul percorso di ritorno invece non ci sono perdite, quindi la connessione in direzione opposta è stabile.

</TabItem>

<TabItem value="mtrResultsExample7" label="Esempio 7">

**Esempio:** Perdita di pacchetti solo sul percorso di ritorno (Server → Client)

**Descrizione**

In questo esempio, la perdita di pacchetti si verifica solo sul percorso di ritorno (dal server al client), mentre il percorso in uscita (dal client al server) non mostra perdite. Questo potrebbe indicare un problema in un segmento di rete sul percorso di ritorno.

**Percorso in uscita (Client → Server)**

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

**Percorso di ritorno (Server → Client)**

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

**Valutazione**

L’analisi mostra che la perdita di pacchetti si verifica solo sul percorso di ritorno. Le perdite sono visibili agli hop 4, 5 e 6 del percorso di ritorno, indicando un problema lungo il percorso dal server al client.

</TabItem>

</Tabs>

## Segnalare problemi

Anche se ZAP-Hosting monitora costantemente la rete, è importante contattare subito il nostro supporto in caso di problemi di rete. Per una diagnosi precisa e una risoluzione rapida, ti chiediamo gentilmente di fornirci i risultati dei tuoi report WinMTR/MTR sia per il percorso in uscita che per quello di ritorno. Queste informazioni ci aiutano a identificare con precisione le aree problematiche e a risolvere il problema velocemente.