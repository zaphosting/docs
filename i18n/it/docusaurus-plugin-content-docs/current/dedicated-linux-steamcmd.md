---
id: dedicated-linux-steamcmd
title: "Dedicated Server: Configurazione SteamCMD su Linux"
description: "Scopri come configurare SteamCMD su server Linux per installare server di gioco dedicati in modo efficiente → Scopri di più ora"
sidebar_label: Configura SteamCMD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

SteamCMD è uno strumento essenziale necessario per installare server dedicati per una vasta gamma di giochi, tra cui Palworld, Enshrouded e molti altri. In questa guida esploreremo il processo di configurazione iniziale per installare SteamCMD sul tuo server Linux. Useremo Ubuntu negli esempi, ma la procedura è molto simile anche per altre distribuzioni.

## Preparazione

Per cominciare, connettiti al tuo Dedicated Server via SSH. Se ti serve una mano, dai un’occhiata alla nostra guida [SSH Initial Access](vserver-linux-ssh.md).

## Installazione di SteamCMD

Una volta entrato nel server, dovrai configurare **SteamCMD** per poter scaricare i file necessari del server dedicato. SteamCMD è la versione **command-line (CLI)** del client Steam ed è lo strumento che ti permette di scaricare facilmente una vasta gamma di contenuti dal workshop Steam e file per server dedicati.

Come sempre su Linux, è meglio aggiornare prima il sistema, eseguendo il comando giusto per la tua distro:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

Ora devi installare qualche pacchetto. Ecco cosa serve:

- Il pacchetto **software-properties-common** facilita la gestione della tua distro e delle sorgenti software indipendenti.
- SteamCMD è uno strumento a 32 bit, quindi devi aggiungere l’architettura **i386** per installare il software necessario a supportarla.
- SteamCMD è proprietario, quindi ti serve il pacchetto **multiverse** o **non-free** a seconda della tua distro Linux, perché di solito non sono inclusi nei repository di default.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & altre distro non Debian
sudo apt-add-repository non-free
```

Ora esegui di nuovo l’aggiornamento per far leggere e installare i cambiamenti:

```
sudo apt update
```

Infine, installa SteamCMD con questo comando. Potrebbe apparire un prompt per accettare la licenza, accettalo per continuare.

```
sudo apt install steamcmd
```

:::tip
Puoi verificare che SteamCMD sia installato correttamente semplicemente eseguendo `steamcmd`. Una volta caricato, il prompt dovrebbe mostrare `Steam>`. Digita `quit` per uscire.
:::

Ora che tutto è pronto e installato, puoi procedere con il passo successivo: installare il server dedicato usando SteamCMD.

## Creazione Utente

Ti consigliamo vivamente di creare un utente separato per usare SteamCMD. Usare l’utente root, come spesso succede, non è raccomandato per vari motivi.

Usa questo comando per creare un utente chiamato `steam` con una password a tua scelta (opzionale).

```
sudo useradd -m steam
sudo passwd steam # Password opzionale
```

Una volta creato l’utente, devi modificare il file `.bashrc` per dare accesso al percorso `/usr/games` dove si trova SteamCMD. Lo fai aggiungendo una variabile d’ambiente PATH extra.

Apri il file con l’editor nano:

```
sudo nano /home/steam/.bashrc
```

Scorri fino in fondo con le frecce e aggiungi questa riga:

```
export PATH="/usr/games/:$PATH"
```

Salva e chiudi nano con `CTRL + X`, poi `Y` per confermare e infine `ENTER`.

## Conclusione

Hai configurato con successo la funzionalità base di SteamCMD sul tuo server Linux. Ora puoi procedere con l’installazione dei contenuti Steam usando l’utente `steam`.

Ti consigliamo di dare un’occhiata alle altre guide di questa sezione, che spiegano come installare giochi specifici tramite SteamCMD, che hai appena configurato.