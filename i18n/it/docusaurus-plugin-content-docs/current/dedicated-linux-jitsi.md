---
id: dedicated-linux-jitsi
title: "Configura Jitsi Meet su un Server Linux - Ospita la Tua Piattaforma di Videoconferenze"
description: "Scopri come configurare e gestire il tuo server Jitsi Meet sicuro per meeting online privati e facili → Scopri di più ora"
sidebar_label: Installa Jitsi Meet
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Jitsi Meet è un software open source per videoconferenze con cui puoi creare le tue videoconferenze direttamente sul tuo server. Il grande vantaggio di Jitsi Meet è la facilità d’uso: ti serve solo un browser (o l’app Jitsi su smartphone) e non devi accedere a servizi esterni. Ogni videoconferenza ha il suo URL unico per partecipare. Jitsi Meet è perfetto anche per chi non è molto esperto di videochiamate.  
Attenzione: senza ulteriori configurazioni, chiunque acceda al server Jitsi Meet può avviare le proprie videoconferenze sul server.

## Installa Jitsi Meet su un Server Debian

Qui ti mostriamo come installare un server Jitsi Meet su Debian. In realtà Jitsi Meet funziona anche su altri Linux, tipo Ubuntu, e l’installazione è molto simile.

### Preparativi

Per usare Jitsi Meet al meglio, ti conviene usare un dominio tuo per accedere al server Jitsi. Ha senso creare un sottodominio dedicato per il server Jitsi Meet. Come esempio useremo il dominio meet.zap-testdomain.de.  
Per i domini ZAP-Hosting devi creare una nuova voce nella gestione DNS. Inserisci il nome del sottodominio nel campo "Nome" e l’IP del tuo server nel campo "Valore". Nel nostro esempio mettiamo "meet" come Nome e l’IP del server di test ZAP dove installeremo Jitsi Meet come Valore: 185.239.239.49 (usa l’IP del tuo server, non questo esempio)

Puoi comunque accedere a un server Jitsi Meet tramite IP, ma per il certificato SSL serve un dominio. Senza dominio il browser ti avviserà con un warning di sicurezza.

Quando il sottodominio è attivo (può volerci fino a 24 ore), puoi preparare il server per l’installazione.  
Connettiti al server via Putty o WinSCP.  
Prima di continuare, assicurati che il server sia aggiornato. Se serve, esegui i comandi con i permessi di superutente, aggiungendo "sudo" prima del comando (es. "sudo apt-get update").

```
$	apt-get update
```
```
$	apt-get upgrade
```

Se non hai un firewall installato, puoi aggiungerne uno, per esempio UFW:
```
$	apt install ufw
```

Configura il firewall con queste regole:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Attiva il firewall:
```
$	ufw enable
```

Controlla lo stato:
```
$	ufw status
```

### Installazione di Jitsi Meet

Per installare Jitsi Meet ti serve prima il pacchetto gnupg:
```
$	apt install gnupg
```

Dopo l’installazione scarica la chiave GPG di Jitsi e aggiungila:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Per installare Jitsi Meet devi aggiungere il repository Jitsi:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

Nel file aggiungi questa riga, poi salva e chiudi l’editor:
```
$	deb https://download.jitsi.org stable/
```

Ora puoi installare Jitsi Meet. Prima aggiorna i pacchetti:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Durante l’installazione ti verrà chiesto di inserire un hostname. Inserisci il sottodominio che hai creato per il server Jitsi Meet. Nel nostro esempio: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

Conferma con "Ok". Si aprirà una nuova finestra che ti chiede se vuoi creare un certificato TLS autofirmato o usarne uno esistente. Seleziona "Genera un nuovo certificato autofirmato":

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

L’installazione di Jitsi Meet è ora completa, manca solo il certificato TLS.  
Installa il pacchetto Certbot:
```
$	apt install certbot
```

Esegui lo script per installare il certificato TLS:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Durante l’esecuzione ti verrà chiesto di inserire un indirizzo email da inviare a letsencrypt.org. Inseriscilo e conferma.

A questo punto Jitsi Meet dovrebbe essere completamente installato e attivo sul tuo server. Per testare se funziona, inserisci il sottodominio nel browser. Nel tutorial è:
```
https://meet.zap-testdomain.de
```

Se la pagina si carica con Jitsi Meet, puoi partire subito con la tua prima videoconferenza.