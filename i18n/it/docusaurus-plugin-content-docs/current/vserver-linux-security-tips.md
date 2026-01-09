---
id: vserver-linux-security-tips
title: "VPS: Consigli per la Sicurezza Linux"
description: "Scopri come migliorare la sicurezza del tuo server Linux con consigli essenziali per prevenire accessi non autorizzati e proteggere i tuoi servizi → Scopri di più ora"
sidebar_label: Consigli di Sicurezza
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Questa guida contiene alcuni consigli e suggerimenti su come rendere il tuo server Linux più sicuro. Soprattutto perché i server (virtuali) devono essere accessibili dall’esterno, una protezione base contro accessi indesiderati è assolutamente consigliata e non va trascurata.

:::info
Tieni presente che queste istruzioni non sono esaustive e che informazioni più dettagliate si trovano in altre sezioni della documentazione ZAP. (es. [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
Il modo più semplice per proteggere il tuo server è sempre lo stesso, indipendentemente dal server: usa password sicure, aggiorna regolarmente i tuoi servizi e presta attenzione a quali servizi installi e quali guide segui.
:::

<InlineVoucher />

## Proteggere SSH

SSH (Secure Shell) è un servizio che ti permette di accedere da remoto alla console del server per eseguire comandi. Qui puoi vedere come configurare SSH sul tuo server: [Accesso iniziale (SSH)](vserver-linux-ssh.md)

Di default, per SSH si usa il login tramite password. Tuttavia, questo ha lo svantaggio che l’autenticazione può essere aggirata abbastanza facilmente con un attacco brute force, soprattutto se usi una password troppo semplice per il login SSH. Quindi, se decidi di usare la soluzione password, usa una password **sicura**.

Per proteggere ancora meglio il tuo server da accessi SSH indesiderati, dovresti abilitare l’autenticazione esclusivamente tramite chiavi SSH e disattivare il login con password. Dai un’occhiata alla guida [Chiavi SSH](vserver-linux-sshkey.md), che spiega come generare e aggiungere chiavi SSH.

## Configurazione delle porte dei tuoi servizi

| Servizio | Porta |
|----------|-------|
| SSH      | 22    |
| FTP      | 21    |
| Mail     | 25    |
| DNS      | 53    |
| HTTP     | 80    |
| HTTPS    | 443   |

Servizi come SSH o FTP usano sempre le stesse porte di default (alcune elencate nella tabella sopra). Se un attaccante esterno vuole fare brute force sul servizio SSH del tuo server, deve prima sapere quale porta usa SSH. Se non cambi queste porte, di solito le porte 22 e 21 sono il bersaglio per eseguire comandi direttamente sul server o accedere ai file via FTP.

Per evitare questo, ti consigliamo di impostare le porte dei servizi standard come personalizzate. Nella prossima parte della guida scoprirai come fare:

:::danger
La porta che scegli deve essere tra 1024 e 65536 e non deve essere già in uso!
:::
Puoi usare `cat /etc/services` per vedere alcune porte standard ed evitare di scegliere una porta già occupata.

### Porta SSH

Per cambiare la porta SSH devi modificare il file di configurazione. Di solito si trova in `/etc/ssh/sshd_config`, ma se non è lì puoi usare questo comando per trovarlo.
```
find / -name "sshd_config" 2>/dev/null
```

Ora apri il file con nano (come root o con *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Aggiungi la tua porta desiderata dopo `Port`. Se `Port` è commentato (es. `#Port 22`), togli il "#" e sostituisci 22 con la porta che vuoi. Ora salva il file (in Nano con Ctrl + o) e chiudilo (Nano: Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

Ora devi riavviare il servizio SSH per applicare le modifiche.
```
#Su Ubuntu/Debian/CentOS ad esempio
sudo systemctl restart sshd
```

### Porta FTP

Se hai installato un servizio FTP come **proFTPd**, la porta si può cambiare facilmente modificando il file di configurazione, quindi la procedura è simile a quella di SSH.

Trova il file di configurazione `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

Il file si trova di solito in `/etc/proftpd.conf` (CentOS) o `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Apri il file con nano, togli il "#" davanti a `port` e inserisci la porta che vuoi. Ricorda le indicazioni sopra per non inserire una porta non valida.

:::tip
Usa Ctrl + W per cercare in nano.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Uso di un firewall

Il principio dell’accessibilità esterna di un server è sempre lo stesso: una porta deve essere aperta per far sì che il server sia raggiungibile dall’esterno. Nel caso di SSH, questa è **di default** la porta 22/TCP. (vedi sopra come cambiare la porta di default)

Il problema è che questa porta è accessibile a chiunque, indipendentemente da persona, posizione e intenzione. Questo rappresenta una grossa vulnerabilità perché attaccanti potrebbero bombardare il server con tentativi di login per scoprire la password corretta (con un attacco brute force se hai ancora abilitato il login con password) o per sovraccaricare la rete del server con flooding (es. DDoS), cosa che succede spesso.

Per ridurre questi rischi puoi applicare regole firewall che limitano l’accesso alle porte aperte.

Ci sono due metodi diversi che puoi usare:
- **IPTables**: il firewall Linux originale, offre molte opzioni ma è un po’ più complicato da usare.
- **UFW**: un’interfaccia più semplice per usare IPTables senza comandi complicati, ma un po’ più limitata.

Alla fine scegli tu quale usare. A seconda dell’uso potresti aver bisogno della versatilità di IPTables, ma a volte UFW basta (es. se vuoi solo aprire/chiudere porte, che è comunque meglio di niente!).

### IPTables

In questa sezione userai IPTables per creare regole che limitano il numero di tentativi di connessione. Le spiegazioni dei comandi sono sotto il blocco codice.

Nota che questa regola è attiva solo per **porta 22** (valore dopo `--dport`), per altri servizi i comandi vanno adattati.

:::note
I comandi seguenti potrebbero non funzionare su tutte le distro Linux, ma funzionano sulla maggior parte delle distro più popolari.
:::

Prima accedi al tuo server Linux. Se ti serve aiuto, segui la nostra guida [Accesso iniziale (SSH)](vserver-linux-ssh.md). Poi esegui i comandi nell’ordine indicato.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1. La prima regola scarta pacchetti se ci sono più di 2 connessioni in stato `TIME_WAIT` sulla porta 22 da un singolo IP.
2. La seconda regola aggiunge l’IP di una nuova connessione alla lista `recent`.
3. La terza regola scarta nuove connessioni da IP che hanno tentato più di 2 connessioni nell’ultimo secondo.

### UFW

Come detto sopra, UFW è un’interfaccia “più semplice” per IPTables. Il primo passo è installare UFW, perché non è incluso di default in tutte le distro Linux. Esegui i comandi come root o con *sudo*.

Accedi al tuo server Linux. Se ti serve aiuto, segui la guida [Accesso iniziale (SSH)](vserver-linux-ssh.md). Le istruzioni sono testate su Debian e Ubuntu, ma dovrebbero funzionare anche su altre distro.

Prima aggiorna apt e i servizi esistenti.
```
sudo apt update && sudo apt upgrade -y
```

Poi installa UFW con apt.
```
sudo apt install ufw -y
```

Controlla che l’installazione sia andata a buon fine con:
```
sudo ufw status
> Firewall not loaded
```

Per non bloccarti fuori dal server, devi prima abilitare il servizio ssh prima di attivare il firewall.

:::caution
Se hai già cambiato la porta SSH, usa quella nuova al posto di 22.
:::

Abilita il servizio ssh con questi comandi:
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

Un output corretto dovrebbe essere tipo:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Ora esegui questo comando che limita le connessioni a 6 al minuto.
```
ufw limit 22/tcp
```

:::note
UFW permette di limitare solo a 6 connessioni al minuto. Il limiter di UFW è semplice e potrebbe non andare bene per tutte le situazioni. Per configurazioni più dettagliate e flessibili, consigliamo IPTables.
:::

:::tip
Il firewall (IPTables o UFW) può solo contare i tentativi di connessione e bloccarli. Con Fail2Ban puoi invece controllare i log per anomalie. La prossima sezione spiega come installare e attivare Fail2Ban.
:::

## Misure aggiuntive con Fail2Ban

Fail2Ban è un servizio che blocca gli IP che si connettono con intenzioni probabilmente malevole. Monitora i log per anomalie e protegge il sistema in modo efficace e semplice.

Dopo l’installazione, Fail2Ban ha già configurazioni predefinite per servizi comuni come:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Altri servizi si possono aggiungere con espressioni regolari (RegEx) e specificando il file di log.

Ad esempio, guarda un’entrata in `/var/log/auth.log`. Questo file contiene tutti i tentativi di login SSH, riusciti o falliti.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Qui vedi l’entrata:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban usa questo file e monitora i fallimenti di autenticazione. Poiché il log contiene l’IP dell’attaccante, Fail2Ban può bloccarlo dopo pochi tentativi falliti.

### Installazione di Fail2Ban

Accedi al tuo server Linux. Se ti serve aiuto, segui la guida [Accesso iniziale (SSH)](vserver-linux-ssh.md). Esegui i comandi come root o con *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Dopo l’installazione, controlla lo stato con `systemctl`: (esci con Ctrl+C)
```
systemctl status fail2ban.service
* fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
     Active: active (running) since Sat 2023-12-02 13:10:33 UTC; 24s ago
       Docs: man:fail2ban(1)
    Process: 23988 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, statu>
   Main PID: 23989 (fail2ban-server)
        CPU: 409ms
     CGroup: /system.slice/fail2ban.service
             `-23989 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Starting Fail2Ban Service...
Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Started Fail2Ban Service.
Dec 02 13:10:34 vps-zap515723-1 fail2ban-server[23989]: Server ready
```

### Configurazione di Fail2Ban

Fail2Ban è installato ma non ancora attivo o configurato. Dai un’occhiata a `/etc/fail2ban` e vedrai questi file:
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
Per creare una “jail” attiva, devi creare un file `jail.local`. Copia il contenuto di `jail.conf` in `jail.local` e aprilo:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Ora puoi fare tutte le impostazioni in `jail.local`, inclusi i servizi da monitorare.
Guarda solo la parte dopo `[Default]`. La sezione Default serve per impostazioni generali.

Scorri un po’ fino a trovare questa parte e modificala così, ad esempio:

| Attributo    | Spiegazione                                         | Valore      |
|--------------|----------------------------------------------------|-------------|
| ignoreip     | IP che non devono essere bloccati                   | 127.0.0.1/8 |
| ignorecommand| Non rilevante                                       |             |
| bantime      | Durata del blocco di un IP                          | 1h          |
| findtime     | Intervallo di tempo per considerare i fallimenti   | 10m         |
| maxretry     | Numero di tentativi falliti prima del ban          | 5           |

```
# può essere definito usando spazio (e/o virgola) come separatore.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" è il numero di secondi per cui un host è bannato.
bantime  = 1h

# Un host è bannato se ha generato "maxretry" fallimenti negli ultimi "findtime"
# secondi.
findtime  = 10m

# "maxretry" è il numero di fallimenti prima che un host venga bannato.
maxretry = 5
```

Hai finito di configurare le impostazioni di default. Per monitorare il servizio SSH, scorri un po’ più giù fino al tag `[sshd]`. Se hai cambiato porta, mettila sotto `port`.

Il tag `[sshd]` sarà così:
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
Come vedi, puoi fare impostazioni individuali per ogni servizio (qui `maxretry` è più basso del default). Anche se hai fatto impostazioni generali, puoi configurare quasi tutto per ogni servizio. Se non lo fai, si usa la configurazione generale.
:::

Ora riavvia Fail2Ban per iniziare il monitoraggio.
```
sudo systemctl restart fail2ban.service
```

### Verifica il funzionamento di Fail2Ban

Se hai accesso a una VPN o un secondo server, puoi provare a bloccarti con Fail2Ban per vedere se funziona. Con una VPN o hotspot dal cellulare avrai un IP diverso, così puoi testare Fail2Ban.

:::danger
Non fare questo sulla tua rete normale, potresti bloccarti e **rimanere fuori**.
:::

Prova a connetterti via SSH al server (da un IP diverso!) e inserisci la password sbagliata più volte. Il risultato dovrebbe essere tipo:
```
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
root@185.223.29.xxx: Permission denied (publickey,password).
root@vps-zap515723-2:/var/log# ssh root@185.223.29.179
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
^C
root@vps-zap515723-2:/var/log# ssh root@185.223.29.xxx
ssh: connect to host 185.223.29.xxx port 22: Connection refused
```

Come vedi, la connessione al server protetto da Fail2Ban ora viene rifiutata (`Connection refused` invece di `Permission denied`).

Ora mostra lo stato di Fail2Ban. Qui vedi che un IP è stato bloccato.
```
fail2ban-client status sshd
Status for the jail: sshd
|- Filter
|  |- Currently failed: 4
|  |- Total failed:     8
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   xxx
```

Se vuoi sbloccare un IP, usa questo comando: `fail2ban-client set sshd unbanip {tuo IP}`.

:::info
Se hai molti ban di IP, conviene aumentare il tempo di ban ad ogni tentativo fallito per ridurre i tentativi possibili.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
#Il tempo di ban aumenta ad ogni ban di questo IP
bantime.increment = true
#Fattore di scala di 24 ore (1h,24h,48h,3d,4d....)
bantime.factor = 24
#Tempo massimo di ban = 5 settimane
bantime.maxtime = 5w
```

## Proteggere webserver usando Cloudflare

Molti usano Cloudflare come gestore DNS del dominio. Cloudflare non solo ha una delle reti più grandi al mondo, che offre tempi di caricamento più bassi, latenza ridotta e migliore esperienza, ma protegge anche i siti da attacchi DoS/DDoS, flooding e nuovi tipi di attacchi che emergono ogni giorno.
In questa guida vedrai come proteggere il tuo webserver dagli attacchi.

Partiamo dal presupposto che il tuo dominio sia già gestito da Cloudflare, altrimenti puoi seguire [la loro guida](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) per trasferirlo. Vai alla scheda DNS nel pannello Cloudflare e assicurati che il record verso il tuo webserver abbia la nuvola arancione e dica "Proxied".

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Così tutto il traffico verso il tuo dominio passa da Cloudflare e poi al server, essendo traffico legittimo.
Tuttavia, il server è ancora accessibile dall’esterno di Cloudflare, quindi devi limitare l’accesso alle porte 80 e 443 TCP del tuo server Linux, permettendo solo traffico legittimo da Cloudflare.

Per farlo, puoi limitare manualmente l’accesso con regole firewall usando la [lista pubblica IPv4 di Cloudflare](https://cloudflare.com/ips-v4) e la [lista pubblica IPv6 di Cloudflare](https://cloudflare.com/ips-v6).

In alternativa, puoi risparmiare tempo usando tool come [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) per importare rapidamente queste regole firewall.
Assicurati di non avere regole separate che permettono accesso illimitato al webserver, altrimenti non funzioneranno.

## Conclusione - il tuo server ora è molto più sicuro!

Questa guida ti ha mostrato funzioni base e avanzate per mettere in sicurezza il tuo server Linux. Se hai seguito tutte le raccomandazioni adatte al tuo sistema, il tuo server è già molto più protetto di prima - complimenti!

Ovviamente puoi fare ancora di più:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Aggiungere altre configurazioni a Fail2Ban
- Configurare notifiche mail in Fail2Ban
- E molto altro...

<InlineVoucher />