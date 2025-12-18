---
id: vserver-linux-java
title: "VPS: Installazione di Java"
description: "Scopri come installare e configurare Java su vari sistemi Linux per far girare i tuoi programmi senza intoppi → Scopri di più ora"
sidebar_label: Installa Java
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Java è un linguaggio di programmazione super popolare usato in tutto il mondo per tantissimi programmi e servizi. Per far girare questi programmi basati su Java, è fondamentale che Java sia installato sul sistema. Qui sotto ti spieghiamo come installare Java sul tuo sistema per i sistemi operativi Linux che offriamo.

<InlineVoucher />

## Preparazione

Prima di partire con l’installazione vera e propria di Java, è importante assicurarsi che il sistema sia aggiornato. Per farlo, ci colleghiamo al server via SSH. Se non sai cos’è SSH o come usarlo, dai un’occhiata a questa guida: [Accesso iniziale (SSH)](vserver-linux-ssh.md)

Una volta dentro, puoi aggiornare il sistema con questo comando, a seconda del sistema operativo:

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



## Installazione

Finita la preparazione, puoi partire con l’installazione di Java. A seconda del sistema operativo, esegui questi comandi:

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```



## Controllo versione

Puoi verificare se l’installazione è andata a buon fine con il comando **java --version**. L’output dovrebbe essere simile a questo:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

## Conclusione

Complimenti, hai installato e configurato Java con successo! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!



<InlineVoucher />