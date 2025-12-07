---
id: dedicated-linux-ssh-server
title: "Dedicated Server: Installazione di SSH"
description: "Scopri come installare e gestire in modo sicuro i server SSH su Linux VPS per garantire un accesso remoto sicuro e una protezione avanzata del server → Scopri di più ora"
sidebar_label: Installa SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Secure Shell (SSH) è un protocollo sicuro che permette un accesso remoto criptato e protetto ai sistemi. Garantisce la riservatezza e l'integrità dei dati trasmessi attraverso le reti.

In questa guida scoprirai come installare o reinstallare il server SSH per diverse distribuzioni Linux che offriamo attualmente sui nostri VPS. La maggior parte delle distro Linux disponibili sui nostri VPS ha già un server SSH preinstallato, quindi puoi gestirlo facilmente tramite l’interfaccia web del prodotto. Puoi vedere come fare nella nostra guida: [Accesso iniziale (SSH)](vserver-linux-ssh.md)

Se vuoi migliorare la sicurezza del tuo server, ti consigliamo di dare un’occhiata alla nostra guida [Consigli di Sicurezza](vserver-linux-security-tips.md), che presenta vari strumenti e servizi per proteggere ancora di più il tuo server.



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

Ora procedi con l’installazione del server SSH usando questo comando:
```
yum install openssh-server
```

Una volta terminata l’installazione, avvia il servizio SSH con il comando:
```
systemctl start sshd
```

Assicurati di abilitare il servizio per l’avvio automatico all’accensione del sistema con:
```
systemctl enable sshd
```

## Abilitare il login root

Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se "nano" non è già installato, devi installarlo prima. Usa questo comando: `yum install nano`
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

Ora procedi con l’installazione del server SSH usando questo comando:
```
apt install openssh-server
```

Una volta terminata l’installazione, avvia il servizio SSH con il comando:
```
systemctl start sshd
```

Assicurati di abilitare il servizio per l’avvio automatico all’accensione del sistema con:
```
systemctl enable sshd
```

## Abilitare il login root

Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se non hai già "nano" installato, devi installarlo. Usa questo comando: `apt install nano`
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

Ora procedi con l’installazione del server SSH usando questo comando:
```
apt install openssh-server
```

Una volta terminata l’installazione, avvia il servizio SSH con il comando:
```
systemctl start sshd
```

Assicurati di abilitare il servizio per l’avvio automatico all’accensione del sistema con:
```
systemctl enable sshd
```

## Abilitare il login root

Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se non hai già "nano" installato, devi installarlo. Usa questo comando: `apt install nano`
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

Ora procedi con l’installazione del server SSH usando questo comando:
```
dnf install openssh-server
```

Una volta terminata l’installazione, avvia il servizio SSH con il comando:
```
systemctl start sshd
```

Assicurati di abilitare il servizio per l’avvio automatico all’accensione del sistema con:
```
systemctl enable sshd
```

## Abilitare il login root

Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se non hai già "nano" installato, devi installarlo. Usa questo comando: `dnf install nano`
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

Hai appena installato con successo il servizio SSH sul tuo server e ora puoi accedere tramite SSH.