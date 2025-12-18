---
id: vserver-rescue
title: "VPS: Recupera i tuoi file con System Rescue"
description: "Scopri come recuperare dati e creare backup da un server non avviabile usando SystemRescue ISO in modo sicuro → Scopri di più ora"
sidebar_label: System Rescue (Backup)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il tuo server non si avvia più? Sei bloccato fuori dal sistema o vuoi creare un backup prima di fare modifiche?
Avviando il tuo server con la **SystemRescue ISO**, puoi comunque accedere ai tuoi dischi, recuperare file importanti e creare backup localmente. Funziona anche se il sistema operativo originale non è più accessibile.

Per trasferire i dati recuperati in modo sicuro, puoi usare **SFTP (Secure File Transfer Protocol)**. Questo metodo ti permette di copiare file dal sistema di rescue al tuo PC locale o a un altro server tramite una connessione sicura e criptata.

<InlineVoucher />



## Preparazione

Per fare il backup dei dati, userai la **SystemRescue ISO versione 12.01**.
Inizia accedendo all’interfaccia del tuo VPS e vai nella sezione **ISOs**.

Seleziona l’ISO tra le opzioni disponibili. Dopo aver scelto quella giusta, clicca su **Modifica ordine di boot** e poi sul pulsante **Riavvia** per avviare il processo di boot.

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)



Una volta che il server è partito dall’ISO, connettiti tramite la [console VNC](vserver-vnc.md) per procedere. Quando la console è attiva, vedrai il menu di avvio della **SystemRescue** ISO. Da qui, seleziona l’opzione per avviare con i **parametri di default**.

Questo assicura che SystemRescue parta con la configurazione standard consigliata, offrendo un ambiente stabile e pronto all’uso per manutenzione o backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)


## Montare il/i disco/i

Prima di montare un disco, è importante avere una panoramica dei dispositivi di archiviazione e delle loro partizioni. Puoi farlo con questo comando:

```
fdisk -l
```

Questo comando elenca tutti i dischi rilevati con i dettagli delle partizioni. L’output include:

- Dispositivi di archiviazione connessi (es. `/dev/sda`, `/dev/sdb`),
- La dimensione di ogni disco,
- Tipi di partizione,
- Partizioni disponibili (es. `/dev/sda1`, `/dev/sda2`, …),
- Tipo di filesystem (se rilevato).

In questo esempio, il disco `/dev/sda` ha tre partizioni: `/dev/sda1`, `/dev/sda2` e `/dev/sda3`. Assicurati di selezionare la partizione corretta prima di montarla. L’output di `fdisk -l` ti aiuta a evitare errori mostrando chiaramente quale disco contiene quali dati. Esempio:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Una volta identificata la partizione giusta, il passo successivo è creare una directory che sarà il punto di mount, cioè il luogo dove la partizione sarà accessibile. Poi monta la partizione in questa directory. È consigliato montare in **modalità sola lettura** per garantire un accesso sicuro ai dati.

Per creare il punto di mount e montare la partizione, usa questi comandi:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Sostituisci `/dev/sdaX` con l’identificativo corretto della partizione trovato con `fdisk -l`. Nell’esempio, `/dev/sda2` sarebbe la partizione giusta.



## Configurare la rete

La rete non si configura automaticamente. Per stabilire la connettività, i parametri base di rete devono essere impostati manualmente. Prima di assegnare un indirizzo IP, è consigliato verificare il nome della scheda di rete. Di solito si chiama **ens18**, ma può variare. Puoi controllare con il comando `ip a`.

Una volta che conosci la scheda corretta, puoi assegnare manualmente un indirizzo IP. Esempio per configurare un indirizzo in una subnet locale:

```
ip addr add <IP>/24 dev <adapter>
```

Sostituisci `<IP>` con l’indirizzo desiderato e `<adapter>` con il nome della scheda, di solito `ens18`. Per far sì che il sistema possa instradare il traffico correttamente, devi aggiungere anche un gateway di default:

```
ip route add default via <gateway>
```

Sostituisci `<gateway>` con l’indirizzo del gateway valido della tua rete. Dopo questi passaggi, la configurazione di rete è attiva e puoi testare la connettività, per esempio pingando un host esterno.



## Configurare il firewall

Per motivi di sicurezza, SystemRescue attiva il firewall di default. Questo significa che tutte le connessioni in ingresso sono bloccate per proteggere il sistema da accessi non autorizzati.

Tuttavia, in questo caso devi permettere una connessione dalla tua macchina locale al server SFTP che gira su SystemRescue. Per farlo, devi configurare il firewall per consentire il traffico SFTP oppure disabilitarlo temporaneamente.

Se lavori in una rete affidabile, la soluzione più semplice e veloce è fermare il servizio firewall in SystemRescue con questo comando:

```
systemctl stop iptables
```



## Impostare la password di root

Il client SFTP deve autenticarsi con username e password per accedere ai dati dal server SFTP. Si usa l’account root di sistema così il client può accedere ai file visibili in SystemRescue. Di default, l’autenticazione come root in SystemRescue non è permessa. Devi impostare una password per permettere al client di autenticarsi. Definisci una password con questo comando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Trasferimento dati

Ora sei pronto per fare il backup dei tuoi dati. Apri un client FTP a tua scelta e connettiti al server. Assicurati di selezionare `SFTP` come protocollo di trasferimento. Per l’hostname inserisci l’`indirizzo IP` del server, usa la porta `21` e accedi con username `root` e la `password` che hai impostato.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Quando ti connetti a un server via **SFTP** per la prima volta, WinSCP mostra questo prompt di sicurezza. L’avviso appare perché la **host key** del server non è ancora salvata nella cache locale.

In questo caso, se sai che l’IP è corretto e hai avviato la connessione intenzionalmente, **è sicuro fidarsi del server**. Clicca semplicemente su **"Yes"** per confermare. Questo aggiungerà la chiave del server alla cache così non ti verrà più chiesto per questo server in futuro.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Ora che sei connesso, naviga nella **directory rescue** che hai creato prima. Da lì potrai accedere ai tuoi file e iniziare a scaricarli sul tuo PC. Sfoglia le cartelle, seleziona i dati da salvare e trasferiscili in modo sicuro via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusione

Hai appena recuperato e fatto il backup dei tuoi file importanti.
Questo significa che i tuoi dati sono al sicuro e pronti per essere ripristinati quando vuoi. A questo punto puoi procedere con altre azioni, come reinstallare il server, riparare il sistema o migrare i dati in un nuovo ambiente.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />