---
id: dedicated-linux-openvpn
title: "Configura OpenVPN su un Server Linux - Crea la tua VPN Sicura"
description: "Scopri come proteggere la tua connessione internet e accedere a contenuti bloccati usando OpenVPN su server Linux → Scopri di più ora"
sidebar_label: Installa OpenVPN
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

OpenVPN è un software VPN potente e versatile che permette una connessione sicura su Internet. È una soluzione open source che offre una tecnologia VPN robusta e configurabile per stabilire una connessione criptata tra il tuo dispositivo e un server VPN. Usando OpenVPN, puoi proteggere la tua connessione internet, tutelare la tua privacy online e accedere a contenuti geo-bloccati ovunque tu sia nel mondo. In questa guida vedremo come installare e configurare il servizio **OpenVPN** su un server Linux.

## Preparazione

Prima di tutto, il driver di rete **TUN** deve essere attivato. Questo passaggio non è necessario per i root server.  
Per farlo, devi creare un nuovo file chiamato **tunscript.sh** nella cartella **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Inserisci le seguenti righe:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Salva il file premendo `CTRL+O`, poi `Y` e infine `Enter`. Per uscire premi `CTRL+X`.  
Dopodiché esegui questo comando:

```
chmod +x /usr/sbin/tunscript.sh
```

Ora esegui ``crontab -e`` e seleziona l’**editor nano** [1]. Aggiungi questa riga alla fine del file:
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Salva con `CTRL+O`, conferma con `Y` e premi `Enter`. Esci con `CTRL+X`.  
Così facendo, lo script verrà eseguito automaticamente ad ogni riavvio.

## Installazione

Per installare OpenVPN, esegui questo comando nel terminale:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Apparirà un dialogo che ti chiederà se vuoi usare UDP o TCP. Ti consigliamo UDP, quindi digita `1` e premi `Enter`.  
Poi ti verrà chiesto di scegliere una porta per OpenVPN, ti consigliamo di lasciare quella di default.

Ora devi configurare il server DNS. Ti consigliamo di usare Google Public DNS o Cloudflare DNS:
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Infine, devi definire un nome per il client. Puoi scegliere qualsiasi nome, ad esempio il nome del tuo dispositivo.

## Configurazione

### Aggiungere altri client

Se vuoi creare più connessioni, è utile creare più account. Per aggiungere un altro client, esegui di nuovo:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Seleziona `1` e conferma. Ora definisci il nome del nuovo client.

### Rimuovere client

Per rimuovere un client, esegui:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Seleziona il numero del client che vuoi eliminare dalla lista e premi `Enter`. Ti verrà chiesto di confermare la cancellazione. Se sei sicuro, premi `Y` e poi `Enter`.  
Il client verrà rimosso.

## Disinstallazione

Se non ti serve più OpenVPN, puoi disinstallarlo così:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Premi `3` e conferma. Conferma ancora una volta e OpenVPN verrà disinstallato.

## Connessione alla VPN

Per connetterti alla tua VPN, ti consigliamo di usare il **[client OpenVPN](https://openvpn.net/community-downloads/)**. Scaricalo sul dispositivo da cui vuoi connetterti.

Connettiti via SFTP al tuo server per scaricare il file .ovpn creato e poi cancellalo dal server.  
Dopo aver installato il client, avvialo. Fai clic destro sull’icona OpenVPN nella taskbar, clicca su 'Import file', seleziona il file scaricato e clicca su 'Open'.  
Per connetterti, clicca di nuovo sull’icona e seleziona "Connect".

:::info
Se hai importato più file, devi selezionare il client che vuoi usare e poi cliccare su Connect
:::