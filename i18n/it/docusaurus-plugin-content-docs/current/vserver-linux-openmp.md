---
id: vserver-linux-openmp
title: "VPS: Open.mp Dedicated Server Linux Setup"
description: "Scopri come configurare il server dedicato open.mp sul tuo VPS Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installare il server dedicato open.mp su di esso? Sei nel posto giusto. In questa guida ti spiegheremo passo passo come installare questo servizio sul tuo server Linux. Useremo Ubuntu negli esempi, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo VPS? Ti permette di configurare servizi di game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

### Creazione Utente

Ti consigliamo caldamente di creare un utente separato per far girare tutti i tuoi servizi di game server dedicati. Usare l’utente root, come spesso succede, non è raccomandato per vari motivi. Se hai già un utente pronto, passa pure ai passaggi di installazione.

Usa questo comando per creare un utente chiamato `gameservers` con una password a tua scelta (opzionale).

```
sudo useradd -m gameservers
sudo passwd gameservers # Password opzionale
```

Una volta che hai accesso al server e un utente pronto, procedi con l’installazione.

## Installazione

Inizia loggandoti come utente `gameservers` e vai nella sua home directory per tenere tutto organizzato.
```
sudo -u gameservers -s
cd ~
```

Per mantenere ordine, crea una nuova cartella per il server open.mp e aprila.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Ora devi scaricare l’ultima release dal [repository GitHub di open.mp](https://github.com/openmultiplayer/open.mp/releases). Sulla pagina, clicca col tasto destro sulla versione **linux-x86** e copia il link. Poi esegui questo comando sostituendo `[link]` con il link copiato per scaricare l’ultima release Linux.
```
wget [link]
```

Questo scaricherà il file `.zip` nella cartella corrente, che dovrebbe essere la tua nuova cartella `OpenMP-Server`. Procedi con questo comando per estrarre i file.
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Ora i file saranno accessibili nella cartella **Server**, entra con `cd Server`. Usa `ls` per vedere i contenuti quando vuoi. Il server è pronto, passa alla sezione successiva per configurare i parametri.

## Configurazione

A questo punto hai finito l’installazione del server open.mp. Puoi configurare ulteriormente il server tramite un file di configurazione nella directory del server.

Modifica i parametri principali aprendo il file **config.json**.
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Dai un’occhiata alla nostra guida Open.mp [Configurazione Server](openmp-configuration.md) per vedere tutte le opzioni disponibili e cosa fanno.

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale del gioco e lancia lo script **omp-server**.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Dovresti vedere comparire i log nel terminale, inclusi quelli di rete, segno che l’avvio è andato a buon fine. Se tutto va come previsto, il server sarà raggiungibile via direct connect e visibile nella lista server. In alternativa, puoi connetterti direttamente tramite: `[tuo_indirizzo_ip]:7777`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server open.mp sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come impostare il tuo game server dedicato come servizio. Questo ti offre tanti vantaggi come avvio automatico al boot, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />