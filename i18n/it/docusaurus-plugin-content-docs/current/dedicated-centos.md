---
id: dedicated-centos
title: "Dedicated Server: Installazione di CentOS"
description: "Scopri come installare e configurare CentOS sul tuo server dedicato per prestazioni e sicurezza ottimali → Scopri di più ora"
sidebar_label: Installa CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Qui ti spieghiamo passo passo come installare e configurare il sistema operativo CentOS sul tuo server dedicato. Segui attentamente queste istruzioni per assicurarti di configurare correttamente il sistema operativo e sfruttarlo al massimo.

:::info

La guida si basa sull’uso di CentOS 8.3. Le installazioni con versioni precedenti o più recenti potrebbero differire leggermente nel processo.

:::



## Preparazione

Per installare e configurare un sistema operativo, è fondamentale montare l’ISO corrispondente. Ci sono diversi modi per farlo:

1. Montaggio tramite setup iniziale  
2. Montaggio tramite iLO (Virtual Media)  
3. Montaggio tramite iLO (Remote Console)  

Se non hai mai montato un file ISO, ti consigliamo di dare un’occhiata alle nostre guide su [Setup iniziale](dedicated-setup.md) o [ISO personalizzata](dedicated-iso.md).



## Installazione

Quando l’ISO è caricata correttamente, il server entra nella fase di setup.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Tastiera  
Scegli il layout della tastiera che preferisci

* Data & Ora  
Seleziona il tuo fuso orario

* Password root  
Imposta una password per l’account root. Può essere qualsiasi, ma ricordati di usare una password forte e conservarla in un posto sicuro.

* Destinazione installazione  
Seleziona l’SSD su cui installare CentOS

* Rete & Hostname  
A causa di un problema di incompatibilità, la rete non può essere configurata ora, lo faremo alla fine.

Quando hai configurato tutto come vuoi, clicca su ‘Begin Installation’.

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

Al termine dell’installazione, rimuovi il file ISO dal server e clicca su ‘Reboot System’.



## Configurazione

### Rete

Ora configuriamo la scheda di rete, aggiornando alcuni file. Monta questo file ISO sul server tramite la console remota o direttamente da iLO.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

Dopo aver montato l’ISO, montiamolo nel sistema per accedervi.

```mount /dev/sr0 /mnt```

L’ISO è ora montato in `/mnt`

```rpm -i /mnt/be2net.rpm```

Installa il pacchetto di aggiornamento.

```modprobe be2net```

Ora eseguiamo l’aggiornamento, potrebbe richiedere qualche secondo.  
Controlla con `ip a s` se esiste un dispositivo di rete chiamato `eno1`. Se sì, riavvia il sistema.

Dopo il reboot, procedi con la configurazione della scheda di rete.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Inserisci questi dati nel file:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Esci da nano premendo `CTRL+X` e poi `Y`

Ora avvia la scheda di rete con `ifup eno1`

:::info
Il tuo server dedicato dovrebbe ora avere una connessione internet funzionante.
:::





## Conclusione

Congratulazioni, hai installato con successo CentOS sul tuo server dedicato. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂