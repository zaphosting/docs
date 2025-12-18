---
id: dedicated-windows-rescue
title: "Dedicated Server: Recupera i tuoi file con System Rescue"
description: "Scopri come recuperare dati e creare backup da un server non avviabile usando SystemRescue ISO e trasferimento file sicuro → Scopri di più ora"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Il tuo server non si avvia più? Sei bloccato fuori dal sistema o vuoi fare un backup prima di apportare modifiche?  
Avviando il server con la **SystemRescue ISO**, puoi comunque accedere ai tuoi dischi, recuperare file importanti e creare backup localmente. Funziona anche se il sistema operativo originale non è più accessibile.

Per trasferire i dati recuperati in modo sicuro, puoi usare **SFTP (Secure File Transfer Protocol)**. Questo metodo ti permette di copiare i file dal sistema di rescue al tuo PC o a un altro server tramite una connessione sicura e criptata.





## Preparazione

Per fare il backup userai la **SystemRescue ISO versione 12.01**.  
Inizia accedendo all’interfaccia del tuo server dedicato e vai nella sezione **Installazione iniziale**.

Seleziona la ISO **SystemRescue 12.01** tra le opzioni disponibili. Dopo aver scelto la ISO giusta, clicca su **Avvia da ISO** per far partire il boot. Una volta che il server è avviato dalla ISO, connettiti tramite l’[interfaccia iLO](dedicated-ilo.md) per procedere.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



Nell’**interfaccia di gestione iLO**, apri la **console HTML** per accedere al display remoto del server. Quando la console è attiva, vedrai il menu di boot della **SystemRescue ISO**. Da qui, scegli l’opzione per avviare con i **parametri di default**.

Questo assicura che SystemRescue parta con la configurazione standard consigliata, offrendo un ambiente stabile e pronto all’uso per manutenzione o backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## Montare il/i disco/i

Prima di montare un disco, è importante farsi un’idea dei dispositivi di storage e delle loro partizioni disponibili. Puoi farlo con questo comando:

```
fdisk -l
```

Questo comando elenca tutti i dischi rilevati con i dettagli delle partizioni. L’output include:

- Dispositivi di storage connessi (es. `/dev/sda`, `/dev/sdb`),
- La dimensione di ogni disco,
- Tipi di partizione,
- Partizioni disponibili (es. `/dev/sda1`, `/dev/sda2`, …),
- Tipo di filesystem (se rilevato).

Nell’esempio, il disco `/dev/sda` ha tre partizioni: `/dev/sda1`, `/dev/sda2` e `/dev/sda3`. Assicurati di scegliere la partizione giusta prima di montarla. L’output di `fdisk -l` ti aiuta a evitare errori mostrando chiaramente quali dati sono su quale disco. Esempio:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

Una volta identificata la partizione giusta, il passo successivo è creare una cartella che farà da punto di mount, cioè il posto dove la partizione sarà accessibile. Poi monta la partizione in questa cartella. Ti consigliamo di montare in **modalità sola lettura** per accedere ai dati in sicurezza.

Per creare il punto di mount e montare la partizione, usa questi comandi:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Sostituisci `/dev/sdaX` con la partizione corretta trovata con `fdisk -l`. Nell’esempio, `/dev/sda2` è la partizione giusta per il disco.

:::tip Partizioni Windows ibernate

Linux non può aprire in sicurezza partizioni Windows ibernate o con Fast Boot attivo. Per evitare perdita o corruzione dati, monta sempre queste partizioni **in sola lettura**.

:::

## Configurare il firewall

Per sicurezza, SystemRescue attiva il firewall di default. Questo blocca tutte le connessioni in entrata per proteggere il sistema da accessi non autorizzati.

Però in questo caso devi permettere la connessione dal tuo PC al server SFTP che gira su SystemRescue. Devi quindi configurare il firewall per consentire il traffico SFTP o disattivarlo temporaneamente.

Se sei in una rete fidata, la soluzione più semplice e veloce è fermare il servizio firewall su SystemRescue con questo comando:

```
systemctl stop iptables
```



## Impostare la password root

Il client SFTP deve autenticarsi con username e password per accedere ai dati dal server SFTP. Si usa l’account root di sistema così il client può accedere a tutti i file visibili in SystemRescue. Di default, l’autenticazione come root in SystemRescue non è permessa. Devi impostare una password per permettere l’accesso. Definisci la password con questo comando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Trasferimento dati

Ora sei pronto per fare il backup. Apri il client FTP che preferisci e connettiti al server. Assicurati di selezionare `SFTP` come protocollo di trasferimento. Come hostname inserisci l’`indirizzo IP` del server, usa la porta `21` e accedi con username `root` e la `password` che hai appena impostato.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Quando ti connetti via **SFTP** per la prima volta, WinSCP mostra questo prompt di sicurezza. L’avviso appare perché la **host key** del server non è ancora salvata nella cache locale.

Se conosci l’IP ed è una connessione voluta, **puoi fidarti del server**. Clicca semplicemente su **"Yes"** per confermare. Così la chiave del server sarà salvata e non ti verrà più chiesto in futuro.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Ora che sei connesso, vai nella **cartella rescue** che hai creato prima. Da lì puoi accedere ai file e iniziare a scaricarli sul tuo PC. Sfoglia le cartelle, seleziona i dati da salvare e trasferiscili in modo sicuro via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusione

Hai appena recuperato e fatto il backup dei tuoi file importanti.  
I tuoi dati sono al sicuro e pronti per essere ripristinati quando vuoi. Ora puoi procedere con altre operazioni, come reinstallare il server, riparare il sistema o migrare i dati in un nuovo ambiente.

Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂