---
id: vserver-linux-ragemp
title: "VPS: Configurazione Server Dedicato RageMP su Linux"
description: "Scopri come configurare un server dedicato RageMP sul tuo VPS Linux per un multiplayer senza intoppi → Scopri di più ora"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
Hai un VPS Linux e vuoi installarci il server dedicato RageMP? Sei nel posto giusto. In questa guida ti spieghiamo passo passo come installare questo servizio sul tuo server Linux. Useremo Ubuntu come esempio, ma il processo è molto simile anche per altre distro.

:::tip
Lo sapevi che puoi installare la nostra **Interfaccia ZAP GS/TS3** direttamente sul tuo VPS? Così puoi configurare i servizi dei tuoi game server con integrazione diretta alla tua dashboard ZAP-Hosting, in pochi click! Scopri di più sull’[Interfaccia GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, dai un’occhiata alla nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

### Creazione Utente

Ti consigliamo di creare un utente separato per far girare tutti i tuoi server dedicati di gioco. Usare root non è mai una buona idea per vari motivi. Se hai già un utente pronto, passa pure ai passaggi di installazione.

Usa questo comando per creare un utente chiamato `gameservers` con una password a tua scelta (opzionale).

```
sudo useradd -m gameservers
sudo passwd gameservers # Password opzionale
```

Una volta che hai accesso al server e un utente pronto, puoi procedere con l’installazione.

## Installazione

Inizia facendo il login con l’utente `gameservers` e vai nella sua home directory per tenere tutto ordinato.
```
sudo -u gameservers -s
cd ~
```

Per organizzarti al meglio, crea una nuova cartella per il server RageMP e aprila.
```
mkdir RageMP-Server && cd RageMP-Server
```

Ora devi scaricare l’ultima release dal sito di RageMP. Usa questo comando per scaricarla direttamente.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Questo scaricherà il file `.tar.gz` nella cartella corrente, che dovrebbe essere la tua nuova `RageMP-Server`. Estrai i file con questo comando.
```
tar -xvzf linux_x64.tar.gz
```

Ora i file saranno nella cartella **ragemp-srv**. Entra nella cartella con `cd ragemp-srv`. Puoi usare `ls` per vedere i file quando vuoi. Il server è pronto, passa alla sezione successiva per configurarlo.

## Configurazione

A questo punto hai finito di installare il server RageMP. Puoi configurarlo ulteriormente tramite un file di configurazione che trovi nella directory del server.

:::tip
Potrebbe essere necessario avviare il server almeno una volta per far creare i file di configurazione. Puoi farlo eseguendo lo script: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Poi premi `CTRL+C` per chiudere il server.
:::

Modifica i parametri principali aprendo il file **conf.json**.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Avvio & Connessione al server

Ora è il momento di avviare il server. Vai nella cartella principale del gioco e lancia lo script **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Dovresti vedere comparire i log nel terminale, inclusi quelli di rete, segno che il server è partito correttamente. Se tutto va come previsto, il server sarà raggiungibile via direct connect e visibile nella lista server. In alternativa, puoi connetterti direttamente con: `[tuo_indirizzo_ip]:22005`.

## Conclusione

Complimenti, hai installato e configurato con successo il server RageMP sul tuo VPS! Come prossimo passo, ti consigliamo di dare un’occhiata alla nostra guida [Setup Linux Service](vserver-linux-create-gameservice.md), che spiega come trasformare il tuo server dedicato in un servizio di sistema. Questo ti dà tanti vantaggi come avvio automatico all’accensione, aggiornamenti automatici, gestione semplice e accesso ai log, e molto altro!

Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />