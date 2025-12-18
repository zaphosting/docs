---
id: vserver-linux-databases
title: "VPS: Installazione di Database"
description: "Scopri come installare e configurare vari database su Linux per migliorare prestazioni e sicurezza → Scopri di più ora"
sidebar_label: Installa Database
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Questa guida ti mostra i passaggi per installare diversi tipi di database. Per questo esempio, utilizziamo Ubuntu 20.04 come sistema operativo, ma sono indicati anche i comandi equivalenti per altre distro Linux che offriamo sul nostro sito. Questi comandi vanno eseguiti via SSH; se non sai come connetterti al tuo server via SSH, dai un’occhiata qui: [Accesso iniziale (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Preparazione

Prima di iniziare con l’installazione di un database, assicurati che il sistema sia aggiornato. Per farlo, aggiorna i pacchetti tramite il package manager del tuo sistema con il comando corrispondente:

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

## Tipi di database

A seconda del database che vuoi installare, segui la guida corrispondente:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Cos’è MariaDB?

MariaDB è un sistema di gestione di database relazionali open-source, originariamente fork di MySQL. Garantisce prestazioni migliori, sicurezza e sviluppo continuo. Offre motori di archiviazione migliorati e un’architettura completamente compatibile con MySQL. Ti consigliamo MariaDB rispetto a MySQL.

## Installazione di MariaDB

Prima di tutto, assicurati di installare l’ultima versione di MariaDB. Alcuni sistemi operativi più vecchi come Debian 9 o Ubuntu 18.04 non includono di default l’ultima versione nei loro package manager, quindi eseguendo questo comando ti assicuri di prendere la versione più aggiornata.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Dopo aver aggiunto il repo, aggiorna la cache del package manager come indicato nella sezione preparazione.

:::info
L’installazione del repo MariaDB (passo sopra) può essere tranquillamente saltata su sistemi moderni come Ubuntu 22.04 o Debian 11.
:::

Una volta configurato il repo, puoi installare MariaDB con il pacchetto `mariadb-server`. Esegui il comando corrispondente al tuo sistema operativo:

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

## Configurazione di MariaDB

Terminata l’installazione, avvia la configurazione del server con:

```
mysql_secure_installation
```

Segui le istruzioni per configurare MariaDB (MySQL) e impostare una password per il server. Alla prima richiesta puoi premere **Invio** per saltare.

![](https://screensaver01.zap-hosting.com/index.php/s/S8mibcHmaAcetqJ/preview)

:::info
L’utente root è l’utente principale del tuo server MariaDB (MySQL)!
:::

Ti verrà chiesto se vuoi impostare una password per root, conferma con **y**. Poi inserisci la nuova password.

:::note
Mentre digiti la password non vedrai nulla, è normale. Assicurati di usare una password sicura e conservala in un posto sicuro.
:::

Successivamente ti chiederà se vuoi rimuovere gli utenti anonimi: fallo sempre per motivi di sicurezza, conferma con **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/7q2kGxDXTfWg36m/preview)

Poi decidi se l’utente root può connettersi da remoto: per sicurezza disattiva questa opzione confermando con **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/PcpJ6boNspf2fPo/preview)

Puoi anche rimuovere il database di test fornito da MariaDB (MySQL) confermando con **y**, non serve e si può eliminare:

![](https://screensaver01.zap-hosting.com/index.php/s/9HfkcaLjGXjEwK7/preview)

Alla fine ti chiederà se vuoi aggiornare i permessi del database: conferma con **y** per attivare la password impostata per root:

![](https://screensaver01.zap-hosting.com/index.php/s/QiBNQYFiwJM4CcA/preview)

Il tuo server MariaDB (MySQL) è ora pronto all’uso!

![](https://screensaver01.zap-hosting.com/index.php/s/zkKoTX7GbbKgj2M/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Cos’è Redis?

Redis è un archivio dati in-memory, usato principalmente per memorizzare dati con struttura chiave-valore, ma supporta anche liste, JSON e altro. È famoso per la sua velocità, rispondendo alle query in millisecondi.

## Installazione di Redis

Per prima cosa devi aggiungere un repo che ci permetta di installare Redis. Questo passo non serve per tutte le distro Linux, solo per quelle elencate qui sotto. Esegui il comando corrispondente al tuo sistema operativo e versione:

```
// Ubuntu (qualsiasi versione) e Debian (solo Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (solo CentOS 7)
sudo yum install epel-release

// CentOS (solo CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Dopo aver aggiunto il repo, aggiorna la cache del package manager come indicato nella sezione preparazione.

:::info
Se il tuo sistema operativo non è nella lista sopra, puoi saltare questo passo.
:::

Dopo aver aggiunto il repo, installa il pacchetto Redis Server con il comando adatto al tuo sistema:

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

Dopo l’installazione, il tuo server Redis è pronto! Di default gira su 127.0.0.1:6379 senza password.

:::caution 
Per utenti Debian/Ubuntu:
Ricordati di abilitare il servizio `redis-server` dopo l’installazione per farlo partire automaticamente all’avvio del server. Usa questo comando:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Cos’è MongoDB?
MongoDB è un database NoSQL orientato ai documenti, progettato per scalabilità e agilità degli sviluppatori. Memorizza dati in formato BSON simile a JSON, permettendo di archiviare tipi di dati diversi. Supporta indici per ridurre i tempi di risposta ed è caratterizzato dall’assenza di uno schema predefinito come MySQL o SQLite, offrendo flessibilità e velocità.

## Installazione di MongoDB

Seleziona il tuo sistema operativo dalle tab qui sotto per vedere la guida specifica.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installazione su Ubuntu & Debian

Per prima cosa importa la chiave pubblica GPG di MongoDB:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Poi aggiungi la sorgente MongoDB alla lista sorgenti del tuo sistema con:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Aggiorna i repository con `sudo apt update` e infine installa MongoDB con:

```
sudo apt install mongodb-org
```

Ora MongoDB dovrebbe essere installato e funzionante!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installazione su CentOS & Fedora

Prima di tutto configura il repo MongoDB per sistemi Red Hat.

Crea il file `/etc/yum.repos.d/mongodb-org-6.0.repo` e incolla dentro questo contenuto:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Ora puoi installare MongoDB. Il comando varia leggermente tra CentOS e Fedora, usa quello giusto per te:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

MongoDB è ora installato, molto più semplice rispetto ad altre distro Linux!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installazione su OpenSUSE

Per prima cosa importa la chiave pubblica MongoDB con:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Poi aggiungi il repo MongoDB con:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Infine installa MongoDB con:

```
sudo zypper -n install mongodb-org
```

MongoDB è ora installato e pronto all’uso!

</TabItem>
</Tabs>

</TabItem>
</Tabs>


## Conclusione

Congratulazioni, hai installato e configurato il database con successo! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />