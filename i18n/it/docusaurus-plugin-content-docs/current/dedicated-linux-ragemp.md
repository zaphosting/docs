---
id: dedicated-linux-ragemp
title: "Server Dedicato: Configurazione RageMP Dedicated Server su Linux"
description: "Scopri come configurare un RageMP Dedicated Server sul tuo server Linux per un hosting e gestione di gioco senza intoppi → Scopri di più ora"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un Server Dedicato Linux e vuoi installarci il servizio RageMP Dedicated Server? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux. Useremo Ubuntu negli esempi, ma il processo è molto simile anche per altre distribuzioni.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo Server Dedicato? Così puoi configurare i servizi dei tuoi game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparazione

Per cominciare, connettiti al tuo Server Dedicato via SSH. Se ti serve aiuto, usa la nostra guida [Accesso SSH Iniziale](dedicated-linux-ssh.md).

### Creazione Utente

Ti consigliamo caldamente di creare un utente separato per far girare tutti i tuoi servizi di game server dedicati. Usare l’utente root, come spesso succede, non è raccomandato per vari motivi. Se hai già un utente pronto, vai pure ai passaggi di installazione.

Usa questo comando per creare un utente chiamato `gameservers` con una password a tua scelta (opzionale).

```
sudo useradd -m gameservers
sudo passwd gameservers # Password opzionale
```

Una volta che hai accesso al server e un utente pronto, procedi con l’installazione.

## Installazione

Inizia loggandoti come utente `gameservers` e vai nella home directory `/home/gameservers` per tenere tutto ordinato.
```
sudo -u gameservers -s
cd ~
```

Per mantenere tutto organizzato, crea una nuova cartella per il tuo server RageMP e aprila.
```
mkdir RageMP-Server && cd RageMP-Server
```

Ora devi scaricare l’ultima release dal sito di RageMP. Usa questo comando per scaricarla direttamente.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Questo scaricherà il file `.tar.gz` nella cartella corrente, che dovrebbe essere la tua nuova cartella `RageMP-Server`. Procedi con questo comando per estrarre i file.
```
tar -xvzf linux_x64.tar.gz
```

Ora i file saranno accessibili nella cartella **ragemp-srv**, entra con `cd ragemp-srv`. Usa `ls` per vedere i contenuti quando vuoi. Il server è pronto, passa alla sezione successiva per configurare i parametri.

## Configurazione

A questo punto hai finito la configurazione base del tuo server RageMP. Puoi fare ulteriori configurazioni tramite un file di configurazione che trovi nella directory del server.

:::tip
Potrebbe essere necessario avviare il server almeno una volta prima che i file di configurazione vengano creati. Puoi farlo eseguendo lo script shell: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Poi premi `CTRL+C` per chiudere il server.
:::

Puoi modificare i parametri principali aprendo il file di configurazione **conf.json**.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella directory principale del gioco ed esegui lo script shell **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Dovresti vedere comparire i log nel terminale, inclusi quelli di rete, segno che l’avvio è andato a buon fine. Se tutto funziona come previsto, il server sarà raggiungibile via direct connect e visibile nella lista server. In alternativa, puoi connetterti direttamente tramite: `[tuo_indirizzo_ip]:22005`.

## Conclusione

Congratulazioni, hai installato e configurato con successo il server RageMP sul tuo Server Dedicato! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](dedicated-linux-create-gameservice.md), che spiega come configurare il tuo nuovo game server dedicato come servizio. Questo ti offre tanti vantaggi come avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!