---
id: vserver-linux-ip-configuration
title: "VPS: Configurazione IP (Ubuntu/Debian)"
description: "Scopri come configurare un indirizzo IP statico su un server Linux con Ubuntu o Debian → Scopri di più ora"
sidebar_label: Configura indirizzi IP
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduzione

Configurare gli indirizzi IP sul tuo VPS Linux ti permette di controllare come il server comunica all’interno della rete. Questo include assegnare indirizzi IP, definire il gateway predefinito e configurare i server DNS necessari per la connettività di rete.

:::warning Server irraggiungibile a causa di mancanza di connessione internet?
Se il tuo server diventa irraggiungibile a causa di una configurazione di rete errata o mancanza di connessione internet, l’accesso remoto via SSH potrebbe non funzionare più. Usa la [console VNC](vserver-vnc.md) nell’interfaccia web per connetterti al server e sistemare la configurazione di rete.
:::

<InlineVoucher />

## Preparazione

Prima di configurare un indirizzo IP statico, assicurati di avere a portata di mano le seguenti informazioni:

- Indirizzo IP da assegnare  
- Maschera di sottorete  
- Gateway predefinito  
- Server DNS  

Queste informazioni le trovi nell’interfaccia web. Vai nella **gestione VPS** e poi su **Indirizzi IP**.

## Configurazione

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Le installazioni Ubuntu usano **Netplan** per la configurazione di rete. Connettiti al VPS via SSH e individua il file di configurazione Netplan nella cartella `/etc/netplan/`. Apri il file di configurazione:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Modifica la configurazione per definire un IP statico:
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

Adatta i seguenti valori alla tua configurazione di rete:

- 109.230.238.45 → Il tuo indirizzo IP statico  
- 109.230.238.1 → Il tuo gateway  
- Indirizzi DNS → I tuoi server DNS preferiti  

Salva il file e applica la configurazione:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian usa comunemente il file di configurazione delle interfacce di rete invece di Netplan. Connettiti al VPS via SSH e apri il file di configurazione delle interfacce di rete:

```
nano /etc/network/interfaces
```

Aggiungi o modifica la configurazione per la tua interfaccia di rete. Esempio di configurazione:

```bash
auto lo
iface lo inet loopback

# Interfaccia di rete principale
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # le opzioni dns-* sono gestite dal pacchetto resolvconf, se installato
        dns-nameservers 1.1.1.1
```

Adatta i valori secondo la tua configurazione di rete:
- address → Il tuo indirizzo IP statico  
- netmask → La tua maschera di sottorete  
- gateway → Il tuo gateway predefinito  
- dns-nameservers → I tuoi server DNS preferiti  

Dopo aver salvato il file di configurazione, riavvia il servizio di rete:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Verifica

Dopo aver applicato la configurazione, è consigliato verificare che il nuovo indirizzo IP sia stato applicato correttamente. Per farlo, esegui questo comando nel terminale:

```
ip a
```

Questo comando mostra tutte le **interfacce di rete** disponibili sul sistema con i dettagli di configurazione attuali. Nell’output, individua l’interfaccia configurata, di solito chiamata `eth0`, `ens18` o simile a seconda del sistema.

All’interno della sezione dell’interfaccia, cerca la voce **`inet`**, che rappresenta l’indirizzo IPv4 assegnato all’interfaccia. L’output dovrebbe contenere l’indirizzo IP statico configurato. Per esempio:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Se l’indirizzo corretto appare nell’output, la configurazione IP statica è stata applicata con successo. Se non compare, ricontrolla il file di configurazione e assicurati di aver salvato correttamente prima di riapplicare la configurazione con:

```
sudo netplan apply
```



## Conclusione

Congratulazioni! Hai configurato con successo l’indirizzo IP sul tuo server Linux. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />