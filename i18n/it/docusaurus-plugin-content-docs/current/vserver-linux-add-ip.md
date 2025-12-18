---
id: vserver-linux-add-ip
title: "VPS: Configura indirizzo(i) IP"
description: "Scopri come configurare e gestire indirizzi IP primari e aggiuntivi su sistemi Debian e Ubuntu per un setup di rete ottimizzato → Scopri di più ora"
sidebar_label: Configura indirizzo(i) IP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Vuoi configurare la tua rete e specificare gli indirizzi IP?

<InlineVoucher />

## Configurazione dell'indirizzo IP

Questa sezione spiega come definire e impostare l'indirizzo IP principale.

<Tabs>
  <TabItem value="debian" label="Debian" default>

La configurazione di rete su Debian avviene tramite le interfacce di rete. Esegui il comando `sudo nano /etc/network/interfaces` per aprire la configurazione di rete. Di default, il contenuto dovrebbe essere così:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

Se non è presente, il contenuto deve essere come sopra. Sostituisci il placeholder dell’indirizzo IP (XXX.XXX.XXX.XXX) con l’IP del tuo server, visibile nel pannello di controllo. Usa `255.255.255.0` (rete classe C) come subnet e assicurati che l’ultimo ottetto del gateway sia 1.

Salva con CTRL+X e conferma con Invio. Ora devi riavviare il modulo di rete per attivare il nuovo IP IPv4, con questo comando:

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

 </TabItem>
</Tabs>

## Configurazione di indirizzi IP aggiuntivi
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   Placeholder

</TabItem>
</Tabs>

## Test della configurazione
Per verificare che l’indirizzo IP configurato funzioni correttamente, puoi fare un test ping. Ad esempio, dal tuo PC apri il prompt dei comandi (cmd.exe) ed esegui:

```
ping <tuo_indirizzo_ip_server>
```

Se tutto è configurato bene, il risultato sarà simile a questo:

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## Conclusione

Complimenti, hai configurato con successo la tua rete! Per qualsiasi domanda o supporto, il nostro team è sempre pronto ad aiutarti, tutti i giorni! 🙂

<InlineVoucher />