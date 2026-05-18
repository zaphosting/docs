---
id: dedicated-linux-ip-configuration
title: "Dedicated Server: Configurazione IP (Ubuntu/Debian)"
description: "Scopri come configurare un indirizzo IP statico su un server Linux con Ubuntu o Debian → Scopri di più ora"
sidebar_label: Configura Indirizzi IP
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduzione

Configurare gli indirizzi IP sul tuo Dedicated Server Linux ti permette di gestire come il server comunica all’interno della rete. Questo include assegnare indirizzi IP, definire il gateway predefinito e configurare i server DNS necessari per la connettività di rete.

:::warning Server irraggiungibile a causa di mancanza di connessione internet?
Se il tuo server diventa irraggiungibile a causa di una configurazione di rete errata o mancanza di connessione internet, l’accesso remoto via SSH potrebbe non funzionare più. Usa la [console iLO HTML](dedicated-ilo.md#the-html5-console) per connetterti al server e sistemare la configurazione di rete.
:::

<InlineVoucher />

## Preparazione

Prima di configurare un IP statico, assicurati di avere a portata di mano queste informazioni:

- Indirizzo IP da assegnare  
- Subnet mask  
- Gateway predefinito  
- Server DNS  

Puoi trovare queste info nell’interfaccia web. Apri la gestione del tuo **Dedicated Server** e vai su **Indirizzi IP**.

## Configurazione

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Le installazioni Ubuntu usano **Netplan** per la configurazione di rete. Connettiti al tuo Dedicated Server via SSH e trova il file di configurazione Netplan nella cartella `/etc/netplan/`. Apri il file di configurazione:

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

Adatta questi valori alla tua configurazione di rete:

- 109.230.238.45 → Il tuo indirizzo IP statico  
- 109.230.238.1 → Il tuo gateway  
- Indirizzi DNS → I tuoi server DNS preferiti  

Salva il file e applica la configurazione:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian usa di solito il file di configurazione delle interfacce di rete invece di Netplan. Connettiti via SSH al tuo Dedicated Server e apri il file di configurazione delle interfacce:

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

Adatta i valori alla tua configurazione di rete:
- address → Il tuo indirizzo IP statico  
- netmask → La tua subnet mask  
- gateway → Il tuo gateway predefinito  
- dns-nameservers → I tuoi server DNS preferiti  

Dopo aver salvato il file, riavvia il servizio di rete:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Verifica

Dopo aver applicato la configurazione, ti consigliamo di verificare che il nuovo indirizzo IP sia stato applicato correttamente. Per farlo, esegui questo comando nel terminale:

```
ip a
```

Questo comando mostra tutte le **interfacce di rete** disponibili sul sistema con i dettagli di configurazione attuali. Nell’output, cerca l’interfaccia che hai configurato, di solito chiamata `eth0`, `ens18` o simile a seconda del sistema.

All’interno della sezione dell’interfaccia, cerca la voce **`inet`**, che rappresenta l’indirizzo IPv4 assegnato all’interfaccia. Dovresti vedere l’indirizzo IP statico che hai configurato, ad esempio:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Se l’indirizzo corretto appare nell’output, la configurazione IP statica è stata applicata con successo. Se non vedi il nuovo IP, ricontrolla il file di configurazione e assicurati di aver salvato correttamente prima di riapplicare la configurazione.



## Conclusione

Congratulazioni! Hai configurato con successo il tuo indirizzo IP sul server Linux. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />