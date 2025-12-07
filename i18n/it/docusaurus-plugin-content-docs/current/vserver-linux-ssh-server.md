---
id: vserver-linux-ssh-server
title: "VPS: Installazione di SSH"
description: "Scopri come accedere e gestire in modo sicuro server Linux remoti con SSH per migliorare la protezione dei dati e il controllo del server → Scopri di più ora"
sidebar_label: Installa SSH
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione

Secure Shell (SSH) è un protocollo sicuro che permette un accesso criptato e protetto a sistemi remoti. Garantisce la riservatezza e l'integrità dei dati trasmessi attraverso le reti.

In questa guida vedrai come installare o reinstallare il server SSH per diverse distribuzioni Linux che offriamo attualmente sui nostri server VPS. La maggior parte delle distro Linux offerte sui nostri VPS ha già un server SSH installato di default, quindi puoi gestirlo facilmente tramite l'interfaccia web del prodotto. Puoi vedere come fare nella nostra guida: [Accesso iniziale (SSH)](vserver-linux-ssh.md)

Se vuoi migliorare la sicurezza del tuo server, ti consigliamo di dare un’occhiata alla nostra guida [Consigli di Sicurezza](vserver-linux-security-tips.md), che presenta vari strumenti e servizi per proteggere ancora di più il tuo server.

<InlineVoucher />

## Installazione

Per iniziare l’installazione, accedi al tuo server tramite VNC. Puoi seguire questi passaggi usando la [console VNC](vserver-vnc.md).


<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Se vuoi reinstallare il server SSH, assicurati prima di disinstallarlo. Puoi farlo con il comando: `yum remove openssh`.
:::

Prima di installare il server SSH, assicurati che il sistema sia aggiornato. Esegui il comando:
```
yum update
```

Ora procedi con l’installazione del server SSH usando il comando:
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

</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Se vuoi reinstallare il server SSH, assicurati prima di disinstallarlo. Puoi farlo con il comando: `apt remove openssh`.
:::

Prima di installare il server SSH, assicurati che il sistema sia aggiornato. Esegui il comando:
```
apt update
```

Ora procedi con l’installazione del server SSH usando il comando:
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
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Se vuoi reinstallare il server SSH, assicurati prima di disinstallarlo. Puoi farlo con il comando: `apt remove openssh`.
:::

Prima di installare il server SSH, assicurati che il sistema sia aggiornato. Esegui il comando:
```
apt update
```

Ora procedi con l’installazione del server SSH usando il comando:
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
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Se vuoi reinstallare il server SSH, assicurati prima di disinstallarlo. Puoi farlo con il comando: `dnf remove openssh`.
:::

Prima di installare il server SSH, assicurati che il sistema sia aggiornato. Esegui il comando:
```
dnf update
```

Ora procedi con l’installazione del server SSH usando il comando:
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
</TabItem>
</Tabs>

## Abilitare il login root

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se "nano" non è già installato, devi installarlo prima. Usa il comando: `yum install nano`
:::

Apri il file di configurazione con:
```
nano /etc/ssh/sshd_config 
```

Usa le frecce per navigare e cerca la riga:
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

<TabItem value="Debian" label="Debian" default>
Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se "nano" non è già installato, devi installarlo prima. Usa il comando: `yum install nano`
:::

Apri il file di configurazione con:
```
nano /etc/ssh/sshd_config 
```

Usa le frecce per navigare e cerca la riga:
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

<TabItem value="Ubuntu" label="Ubuntu" default>
Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se "nano" non è già installato, devi installarlo prima. Usa il comando: `yum install nano`
:::

Apri il file di configurazione con:
```
nano /etc/ssh/sshd_config 
```

Usa le frecce per navigare e cerca la riga:
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

<TabItem value="Fedora" label="Fedora" default>
Per abilitare il login root, devi modificare il file di configurazione di openssh. In questa guida useremo "nano" come editor.

:::info
Se "nano" non è già installato, devi installarlo prima. Usa il comando: `yum install nano`
:::

Apri il file di configurazione con:
```
nano /etc/ssh/sshd_config 
```

Usa le frecce per navigare e cerca la riga:
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


## Conclusione

Congratulazioni, hai installato e configurato con successo il servizio SSH! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno!


<InlineVoucher />