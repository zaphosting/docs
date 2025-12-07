---
id: vserver-linux-steamcmd
title: "VPS: Configurazione SteamCMD su Linux"
description: "Scopri come configurare SteamCMD su Linux per installare server di gioco dedicati in modo efficiente e ottimizzare la gestione del tuo server → Scopri di più ora"
sidebar_label: Configura SteamCMD
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione
SteamCMD è uno strumento essenziale per installare server dedicati per tantissimi giochi, come Palworld, Enshrouded e molti altri. In questa guida vedremo come fare il setup iniziale di SteamCMD sul tuo server Linux. Useremo Ubuntu come esempio, ma la procedura è molto simile anche su altre distro.

<InlineVoucher />

## Preparazione

Per cominciare, connettiti al tuo VPS via SSH. Se ti serve una mano, dai un’occhiata alla nostra guida [Accesso SSH Iniziale](vserver-linux-ssh.md).

## Installare SteamCMD

Una volta dentro il server, devi configurare **SteamCMD** per poter scaricare i file necessari dei server dedicati. SteamCMD è la versione **da riga di comando (CLI)** del client Steam, lo strumento che ti permette di scaricare facilmente contenuti dal workshop Steam e file per server dedicati.

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

- Il pacchetto **software-properties-common** semplifica la gestione delle sorgenti software della tua distro.
- SteamCMD è uno strumento a 32 bit, quindi devi aggiungere l’architettura **i386** per installare il software necessario.
- SteamCMD è proprietario, quindi devi abilitare il repository **multiverse** o **non-free** a seconda della tua distro, perché di solito non sono inclusi di default.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & altre distro non Debian
sudo apt-add-repository non-free
```

Ora aggiorna di nuovo i pacchetti per applicare le modifiche:
```
sudo apt update
```

Infine, installa SteamCMD con questo comando. Potrebbe comparire un prompt per accettare la licenza, accetta per continuare.
```
sudo apt install steamcmd
```

:::tip
Per verificare che SteamCMD sia installato correttamente, basta lanciare `steamcmd`. Quando si carica, il prompt dovrebbe mostrare `Steam>`. Puoi uscire digitando `quit`.
:::

Ora che hai tutto pronto e installato, puoi passare al passo successivo: installare il server dedicato usando SteamCMD.

## Creare un Utente

Ti consigliamo di creare un utente separato per usare SteamCMD. Usare l’utente root, come spesso succede, non è una buona idea per vari motivi.

Crea un utente chiamato `steam` con questa riga (puoi aggiungere una password a piacere):

```
sudo useradd -m steam
sudo passwd steam # Password opzionale
```

Dopo aver creato l’utente, devi modificare il file `.bashrc` per dargli accesso al percorso `/usr/games` dove si trova SteamCMD. Serve aggiungere una variabile d’ambiente PATH.

Apri il file con nano:
```
sudo nano /home/steam/.bashrc
```

Scorri fino in fondo con le frecce e aggiungi questa riga:
```
export PATH="/usr/games/:$PATH"
```

Salva e chiudi nano con `CTRL + X`, poi `Y` per confermare e infine `ENTER`.

## Conclusione

Hai configurato con successo la funzionalità base di SteamCMD sul tuo server Linux. Ora puoi procedere a installare contenuti Steam usando l’utente `steam`.

Ti consigliamo di dare un’occhiata alle altre guide di questa sezione, dove ti spieghiamo come installare giochi specifici tramite SteamCMD, che hai appena configurato.

<InlineVoucher />