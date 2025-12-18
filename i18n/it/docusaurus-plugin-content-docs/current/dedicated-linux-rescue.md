---
id: dedicated-linux-rescue
title: "Dedicated Server: Recupera i tuoi file con System Rescue"
description: "Scopri come recuperare dati e creare backup da un server non avviabile usando SystemRescue ISO e trasferimento file sicuro → Scopri di più ora"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il tuo server non si avvia più? Sei bloccato fuori dal sistema o vuoi fare un backup prima di apportare modifiche?
Avviando il tuo server con la **SystemRescue ISO**, puoi comunque accedere ai tuoi dischi, recuperare file importanti e creare backup in locale. Funziona anche se il sistema operativo originale non è più accessibile.

Per trasferire i dati recuperati in modo sicuro, puoi usare **SFTP (Secure File Transfer Protocol)**. Questo metodo ti permette di copiare i file dal sistema di rescue al tuo PC o a un altro server tramite una connessione sicura e criptata.





## Preparazione

Per fare il backup dei dati, userai la **SystemRescue ISO versione 12.01**.
Inizia accedendo all’interfaccia del tuo server dedicato e vai nella sezione **Installazione iniziale**.

Seleziona la ISO **SystemRescue 12.01** tra le opzioni disponibili. Dopo aver scelto la ISO corretta, clicca su **Avvia da ISO** per iniziare il boot. Una volta che il server è partito dalla ISO, connettiti tramite l’[interfaccia iLO](dedicated-ilo.md) per proseguire.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



Nell’**interfaccia di gestione iLO**, apri la **console HTML** per accedere al display remoto del server. Quando la console è attiva, vedrai il menu di boot della **SystemRescue ISO**. Da qui, seleziona l’opzione per avviare con i **parametri di default**.

Così SystemRescue parte con la configurazione standard consigliata, garantendo un ambiente stabile e pronto all’uso per manutenzione o backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


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

In questo esempio, il disco `/dev/sda` ha tre partizioni: `/dev/sda1`, `/dev/sda2` e `/dev/sda3`. Assicurati di selezionare la partizione giusta prima di montarla. L’output di `fdisk -l` ti aiuta a evitare errori mostrando chiaramente quali dati sono su quale disco. Esempio:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Dopo aver identificato la partizione corretta, il passo successivo è creare una cartella che fungerà da punto di mount. Qui la partizione sarà accessibile. Poi monta la partizione in questa cartella. È consigliato montare in **modalità sola lettura** per garantire un accesso sicuro ai dati.

Per creare il punto di mount e montare la partizione, usa questi comandi:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Sostituisci `/dev/sdaX` con la partizione corretta trovata con `fdisk -l`. Nell’esempio, `/dev/sda2` sarebbe la partizione giusta per il nostro disco.

## Configurare il firewall

Per motivi di sicurezza, SystemRescue attiva il firewall di default. Questo significa che tutte le connessioni in entrata sono bloccate per proteggere il sistema da accessi non autorizzati.

In questo caso però, devi permettere una connessione dalla tua macchina locale al server SFTP che gira su SystemRescue. Per farlo, devi configurare il firewall per consentire il traffico SFTP oppure disattivarlo temporaneamente.

Se sei in una rete fidata, la soluzione più semplice e veloce è fermare il servizio firewall in SystemRescue con questo comando:

```
systemctl stop iptables
```



## Impostare la password di root

Il client SFTP deve autenticarsi con username e password per accedere ai dati sul server SFTP. Si usa l’account root di sistema così il client può accedere ai file visibili in SystemRescue. Di default, l’autenticazione come root in SystemRescue non è permessa. Devi impostare una password per permettere al client di autenticarsi. Definisci una password con questo comando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Trasferimento dati

Ora sei pronto per fare il backup dei dati. Apri il client FTP che preferisci e connettiti al server. Assicurati di selezionare `SFTP` come protocollo di trasferimento. Per hostname inserisci l’`indirizzo IP` del server, usa la porta `21` e accedi con username `root` e la `password` che hai appena impostato.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Quando ti connetti a un server via **SFTP** per la prima volta, WinSCP mostra questo prompt di sicurezza. L’avviso appare perché la **host key** del server non è ancora salvata nella cache locale.

In questo caso, se sai che l’IP è corretto e hai avviato tu la connessione, **è sicuro fidarsi del server**. Clicca semplicemente su **"Yes"** per confermare. Così la chiave del server sarà salvata in cache e non ti verrà più chiesto per questo server.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Ora che sei connesso, naviga nella **cartella rescue** che hai creato prima. Da lì puoi accedere ai tuoi file e iniziare a scaricarli sul tuo PC. Sfoglia le cartelle, seleziona i dati da salvare e trasferiscili in modo sicuro via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusione

Hai appena recuperato e fatto il backup dei tuoi file importanti.
Questo significa che i tuoi dati sono al sicuro e pronti per essere ripristinati quando vuoi. Ora puoi procedere con altre operazioni, come reinstallare il server, riparare il sistema o migrare i dati in un nuovo ambiente.

Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂