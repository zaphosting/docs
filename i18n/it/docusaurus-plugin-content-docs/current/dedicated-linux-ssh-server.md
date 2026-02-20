---
id: dedicated-linux-ssh-server
title: "Configura SSH su un Server Linux - Attiva l’Accesso Remoto Sicuro"
description: "Scopri come installare e gestire in sicurezza il server SSH su Linux per garantire un accesso remoto protetto e una maggiore sicurezza del server → Scopri di più ora"
sidebar_label: Installa SSH
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Secure Shell (SSH) è un protocollo sicuro che permette un accesso criptato e protetto ai sistemi remoti. Garantisce la riservatezza e l’integrità dei dati trasmessi attraverso le reti.

In questa guida vedrai come installare o reinstallare il server SSH per diverse distribuzioni Linux che offriamo attualmente sui nostri server VPS/Dedicati. La maggior parte delle distro Linux offerte sui nostri server VPS/Dedicati ha già un server SSH preinstallato, quindi puoi gestirlo facilmente tramite l’interfaccia web del prodotto. Puoi vedere come fare nella nostra guida: [Accesso iniziale (SSH)](vserver-linux-ssh.md)

Se vuoi migliorare ulteriormente la sicurezza del tuo server, ti consigliamo di dare un’occhiata alla nostra guida [Consigli di Sicurezza](vserver-linux-security-tips.md), che presenta vari strumenti e servizi per proteggere al meglio il tuo server.



## Installazione

Per iniziare l’installazione, accedi al tuo server tramite VNC. Puoi seguire questi passaggi usando la [console VNC](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Se vuoi reinstallare il server SSH, assicurati prima di disinstallarlo. Puoi farlo con il comando: `yum remove openssh`.
:::

Prima di installare il server SSH, assicurati che il sistema sia aggiornato. Esegui questo comando:
```
yum update
```

Ora procedi con l’installazione del server SSH usando il comando:
```
yum install openssh-server
```

Una volta completata l’installazione, avvia il servizio SSH con il comando:
```
systemctl start sshd
```

Assicurati di abilitare l’avvio automatico del servizio all’accensione del sistema con:
```
systemctl enable sshd
```

## Abilitare il login root

Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se "nano" non è installato, devi prima installarlo con il comando: `yum install nano`
:::

Apri il file di configurazione con:
```
nano /etc/ssh/sshd_config 
```

Usa le frecce per navigare e cerca questa riga:
```
#PermitRootLogin prohibit-password
```

Modificala così per abilitare il login root remoto:
```
PermitRootLogin yes
```

Infine, riavvia il server SSH per applicare la nuova configurazione con:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Se vuoi reinstallare il server SSH, assicurati prima di disinstallarlo. Puoi farlo con il comando: `apt remove openssh`.
:::

Prima di installare il server SSH, assicurati che il sistema sia aggiornato. Esegui questo comando:
```
apt update
```

Ora procedi con l’installazione del server SSH usando il comando:
```
apt install openssh-server
```

Una volta completata l’installazione, avvia il servizio SSH con il comando:
```
systemctl start sshd
```

Assicurati di abilitare l’avvio automatico del servizio all’accensione del sistema con:
```
systemctl enable sshd
```

## Abilitare il login root

Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se non hai ancora "nano" installato, devi installarlo con il comando: `apt install nano`
:::

Apri il file di configurazione con:
```
nano /etc/ssh/sshd_config 
```

Usa le frecce per navigare e cerca questa riga:
```
#PermitRootLogin prohibit-password
```

Modificala così per abilitare il login root remoto:
```
PermitRootLogin yes
```

Infine, riavvia il server SSH per applicare la nuova configurazione con:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Se vuoi reinstallare il server SSH, assicurati prima di disinstallarlo. Puoi farlo con il comando: `apt remove openssh`.
:::

Prima di installare il server SSH, assicurati che il sistema sia aggiornato. Esegui questo comando:
```
apt update
```

Ora procedi con l’installazione del server SSH usando il comando:
```
apt install openssh-server
```

Una volta completata l’installazione, avvia il servizio SSH con il comando:
```
systemctl start sshd
```

Assicurati di abilitare l’avvio automatico del servizio all’accensione del sistema con:
```
systemctl enable sshd
```

## Abilitare il login root

Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se non hai ancora "nano" installato, devi installarlo con il comando: `apt install nano`
:::

Apri il file di configurazione con:
```
nano /etc/ssh/sshd_config 
```

Usa le frecce per navigare e cerca questa riga:
```
#PermitRootLogin prohibit-password
```

Modificala così per abilitare il login root remoto:
```
PermitRootLogin yes
```

Infine, riavvia il server SSH per applicare la nuova configurazione con:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Se vuoi reinstallare il server SSH, assicurati prima di disinstallarlo. Puoi farlo con il comando: `dnf remove openssh`.
:::

Prima di installare il server SSH, assicurati che il sistema sia aggiornato. Esegui questo comando:
```
dnf update
```

Ora procedi con l’installazione del server SSH usando il comando:
```
dnf install openssh-server
```

Una volta completata l’installazione, avvia il servizio SSH con il comando:
```
systemctl start sshd
```

Assicurati di abilitare l’avvio automatico del servizio all’accensione del sistema con:
```
systemctl enable sshd
```

## Abilitare il login root

Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se non hai ancora "nano" installato, devi installarlo con il comando: `dnf install nano`
:::

Apri il file di configurazione con:
```
sudo nano /etc/ssh/sshd_config 
```

Usa le frecce per navigare e cerca questa riga:
```
#PermitRootLogin prohibit-password
```

Modificala così per abilitare il login root remoto:
```
PermitRootLogin yes
```

Infine, riavvia il server SSH per applicare la nuova configurazione con:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Hai appena installato con successo il servizio SSH sul tuo server e ora puoi accedere al tuo server tramite SSH.