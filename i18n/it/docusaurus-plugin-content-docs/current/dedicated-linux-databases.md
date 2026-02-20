---
id: dedicated-linux-databases
title: "Configura Database su un Server Linux - Deploy e Gestione dei Servizi Database"
description: "Scopri come installare e configurare vari database su Ubuntu e altre distro Linux per prestazioni e sicurezza migliorate → Scopri di più ora"
sidebar_label: Installa Database
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Questa guida ti mostra i passaggi per installare diversi tipi di database. Per questo esempio, utilizziamo Ubuntu 20.04 come sistema operativo, ma sono indicati anche i comandi equivalenti per altre distro Linux che offriamo sul nostro sito. Questi comandi devono essere eseguiti via SSH; se non sai come connetterti al tuo server via SSH, dai un’occhiata qui: [Accesso iniziale (SSH)](vserver-linux-ssh.md).

## Preparazione

Prima di iniziare con l’installazione di un database, è fondamentale assicurarsi che il sistema sia aggiornato. Per farlo, aggiorna i pacchetti dal gestore pacchetti del sistema con il comando corrispondente al tuo sistema operativo:

```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Tipi di Database

A seconda del servizio database che vuoi installare, segui la guida corrispondente:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Cos’è MariaDB?

MariaDB è un sistema di gestione database relazionale open-source, originariamente fork di MySQL. Garantisce prestazioni migliorate, sicurezza e sviluppo continuo. In particolare, MariaDB offre motori di archiviazione avanzati e un’architettura completamente compatibile con MySQL. Ti consigliamo MariaDB rispetto a MySQL.

## Installazione MariaDB

Prima di tutto, assicurati di installare l’ultima versione di MariaDB. Alcuni sistemi operativi più vecchi come Debian 9 o Ubuntu 18.04 non includono di default l’ultima versione di MariaDB nei loro repository, quindi eseguendo questo comando ti assicuri di ottenere la versione più aggiornata.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Dopo aver installato il repo, aggiorna la cache del gestore pacchetti seguendo i passaggi della sezione preparazione.

:::info
L’installazione del repo MariaDB (passo sopra) può essere tranquillamente saltata su sistemi moderni come Ubuntu 22.04 o Debian 11.
:::

Una volta completata la configurazione del repo, puoi procedere con l’installazione di MariaDB installando il pacchetto `mariadb-server`. A seconda del sistema operativo, esegui uno dei seguenti comandi:

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## Configurazione MariaDB

Terminata l’installazione, avvia la configurazione del server con questo comando:

```
mysql_secure_installation
```

Ora puoi configurare il tuo server MariaDB (MySQL) seguendo le istruzioni e impostando una password per il server. Alla richiesta successiva, puoi saltare l’input premendo **Invio**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
L’utente root è l’utente principale del tuo server MariaDB (MySQL)!
:::

Ti verrà chiesto se vuoi impostare una password per l’utente root, conferma con **y** per sì. Poi digita la nuova password per root.

:::note
Mentre digiti la password, non la vedrai apparire. È normale, la password verrà comunque salvata. Usa una password sicura per root e conservala in un posto sicuro.
:::

Successivamente ti verrà chiesto se vuoi rimuovere gli utenti anonimi dal server, fallo sempre per motivi di sicurezza. Conferma con **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

Alla richiesta successiva, decidi se l’utente root può connettersi al server da remoto. Per sicurezza, disattiva questa opzione confermando con **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

Nel passaggio seguente, puoi confermare la rimozione del database di test fornito da MariaDB (MySQL) con **y**, perché non serve ed è meglio eliminarlo:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

Alla fine della configurazione, ti verrà chiesto se vuoi aggiornare i permessi del database. Conferma con **y** per attivare la password appena impostata per root:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Il tuo server MariaDB (MySQL) è ora pronto all’uso!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Cos’è Redis?

Redis è un archivio di strutture dati in-memory, usato principalmente per memorizzare dati con struttura chiave-valore, ma supporta anche formati come liste, JSON e altro. È famoso per la sua velocità, rispondendo alle query in millisecondi.

## Installazione Redis

Prima di tutto, devi aggiungere un repo che ci permetta di installare Redis. Questo passaggio non è necessario per tutte le distro Linux, solo per quelle elencate qui sotto. Esegui il comando corrispondente al tuo sistema operativo e versione:

```
// Ubuntu (qualsiasi versione) e Debian (solo Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (solo CentOS 7)
sudo yum install epel-release

// CentOS (solo CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Dopo aver aggiunto il repo, aggiorna la cache del gestore pacchetti come spiegato nella sezione preparazione.

:::info
Se il tuo sistema operativo non è nella lista sopra, puoi saltare questo passaggio.
:::

Dopo aver installato il repo, procedi con l’installazione del pacchetto Redis Server. Esegui il comando adatto al tuo sistema operativo:

```
// Ubuntu e Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

Dopo l’installazione, il tuo server Redis è pronto all’uso! Di default gira su 127.0.0.1:6379 senza password.

:::caution 
Per utenti Debian/Ubuntu:
Ricorda di abilitare il servizio `redis-server` dopo l’installazione per farlo partire automaticamente all’avvio del server. Usa questo comando:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Cos’è MongoDB?
MongoDB è un database NoSQL orientato ai documenti, progettato per scalabilità e agilità degli sviluppatori. Memorizza i dati in formato BSON simile a JSON, permettendo di archiviare tipi di dati diversi. Supporta l’uso di indici per ridurre i tempi di risposta ed è caratterizzato dall’assenza di uno schema predefinito come MySQL o SQLite, offrendo agilità e flessibilità.

## Installazione MongoDB

Seleziona il tuo sistema operativo dalle tab qui sotto per vedere la guida corrispondente.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installazione su Ubuntu & Debian

Per prima cosa, importa la chiave pubblica GPG di MongoDB con questo comando:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Poi, aggiungi la sorgente MongoDB alla lista sorgenti del tuo sistema operativo con questo comando:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Ora il gestore pacchetti può installare MongoDB Community Edition, ma prima aggiorna i repository con `sudo apt update`. Infine, installa MongoDB con:

```
sudo apt install mongodb-org
```

La tua installazione MongoDB dovrebbe essere funzionante!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installazione su CentOS & Fedora

Per prima cosa, configura il repo MongoDB per sistemi Red Hat.

Crea un file chiamato `/etc/yum.repos.d/mongodb-org-6.0.repo` e incolla dentro questo contenuto:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Ora puoi installare MongoDB. C’è una piccola differenza nel comando di installazione tra CentOS e Fedora, quindi usa quello giusto qui sotto:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

La tua installazione MongoDB dovrebbe essere attiva, molto più semplice rispetto ad altre distro Linux!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installazione su OpenSUSE

Per prima cosa importa la chiave pubblica MongoDB per il repository con:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Poi aggiungi il repository MongoDB con questo comando:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Infine, installa l’ultima versione di MongoDB con:

```
sudo zypper -n install mongodb-org
```

La tua installazione MongoDB dovrebbe essere pronta!

</TabItem>
</Tabs>

</TabItem>
</Tabs>