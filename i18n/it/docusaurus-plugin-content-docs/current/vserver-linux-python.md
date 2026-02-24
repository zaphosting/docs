---
id: vserver-linux-python
title: "Configura Python su un Server Linux - Attiva Sviluppo e Automazione"
description: "Scopri come installare e aggiornare il runtime Python su varie distro Linux per garantire un ambiente sicuro e sempre aggiornato → Scopri di più ora"
sidebar_label: Installa Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Questa guida ti mostra come installare il runtime Python e venv. Questi comandi vanno eseguiti via SSH; se non sai come connetterti al tuo server via SSH, dai un’occhiata alla nostra guida [Accesso Iniziale (SSH)](vserver-linux-ssh.md) per saperne di più.

<InlineVoucher />

## Preparazione

Prima di installare qualsiasi cosa sul server, è consigliato eseguire il comando di aggiornamento specifico per il tuo sistema operativo, così da mantenere il server sicuro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installazione

La maggior parte delle distro Linux ha Python già installato, ma la versione potrebbe non essere aggiornata o il sistema potrebbe essere stato installato senza alcuni pacchetti. Puoi controllare se Python è presente con (`python3 --version`) e poi eseguire i comandi seguenti per aggiornare o installare il runtime.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Controlla versione
  python3 --version

  // Aggiorna / installa il runtime
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Controlla versione
  python3 --version

  // Aggiorna il runtime
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Controlla versione
  python3 --version

  // Aggiorna il runtime
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Controlla versione
  python3 --version

  // Aggiorna il runtime
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Esecuzione del codice

Ora che hai Python installato sul server, puoi iniziare a far girare i tuoi programmi Python.

### Modalità interprete

Eseguendo il comando `python3` si avvia l’interprete Python. Puoi scrivere qualsiasi codice Python valido dopo il prompt `>>>` e verrà eseguito premendo `Enter`. Per uscire dall’interprete, digita `exit()` nella console.

### Esecuzione di file .py

Per eseguire file Python `.py`, usa semplicemente il comando `python3 [nomefile].py`, sostituendo `[nomefile]` con il percorso del file che vuoi far partire.

:::tip
La maggior parte dei programmi che trovi online si avviano con `python3 main.py` perché `main.py` è il punto di partenza più comune per i programmi Python.
:::

## Ambienti virtuali

Quando scrivi un programma Python potresti aver bisogno di installare pacchetti esterni tramite pip. Questi possono essere installati globalmente e quindi accessibili a tutti gli script `.py`, oppure puoi creare un ambiente virtuale (venv).

### Creare il venv

Prima di tutto, spostati nella cartella dove vuoi creare il venv con `cd` e, una volta pronto, esegui `python3 -m venv .` per installare i file necessari nella posizione corrente.

### Attivare & disattivare

Per eseguire comandi come `pip install` dentro il venv devi attivarlo con `source /bin/activate`. Ora la tua console lavorerà solo dentro il venv e gli script avranno accesso solo ai pacchetti installati localmente.

Quando hai finito di lavorare nel venv, puoi uscire con il comando `deactivate`.


## Conclusione

Complimenti, hai installato e configurato Python con successo! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />