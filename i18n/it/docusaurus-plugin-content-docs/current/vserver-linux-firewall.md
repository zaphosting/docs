---
id: vserver-linux-firewall
title: "VPS: Gestire il Firewall su Linux"
description: "Scopri come configurare un firewall per mettere in sicurezza il tuo server e permettere le connessioni esterne necessarie → Scopri di più ora"
sidebar_label: Port Forwarding (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Per molti servizi e programmi, devi permettere connessioni esterne. Questo è possibile configurando un firewall.  
In questa guida imparerai come configurare un firewall e consentire queste connessioni.

<InlineVoucher />

## Preparazione

Per installare il firewall, devi connetterti al tuo server via SSH. Se non sai come fare, puoi dare un’occhiata alla nostra guida su [accesso iniziale](vserver-linux-ssh.md).  
Dopo esserti connesso, aggiorna il server con `apt update` e `apt upgrade`.

## Usare UFW (Facile)

Ci sono diversi programmi firewall per Linux, questa guida si concentra sui 2 più popolari: UFW e IPTables.  
Partiamo da UFW, perché è più semplice da configurare e gestire.

### Installare UFW

Puoi installare UFW facilmente con APT usando `sudo apt install ufw`.  
Per non perdere la connessione SSH, non attivarlo subito, prima devi configurarlo.

### Configurare UFW

Consigliamo di usare queste policy di default:

`sudo ufw default deny incoming`  
e  
`sudo ufw default allow outgoing`

Ora devi permettere la connessione SSH e qualsiasi altra porta che vuoi aprire subito:

`sudo ufw allow 22` per SSH

`sudo ufw allow 80` esempio per HTTP

`sudo ufw allow 25565` esempio per un server Minecraft

Per attivare UFW, esegui `sudo ufw enable`. Puoi sempre aprire altre porte, se serve, con `sudo ufw allow PORT`.

### Aggiungere Port Forwarding

Per inoltrare una porta, usa questo comando:

Per porte TCP:

`sudo ufw allow PORT/tcp` sostituendo PORT con la porta che vuoi inoltrare.

Esempio: `sudo ufw allow 25565/tcp` per un server Minecraft

Per porte UDP:

`sudo ufw allow PORT/udp` sostituendo PORT con la porta che vuoi inoltrare.

Esempio: `sudo ufw allow 9987/udp` per un server TeamSpeak 3

### Elencare e rimuovere Port Forwarding

Per vedere tutte le regole delle porte, esegui `sudo ufw status numbered`. Se vuoi rimuovere una regola, usa `sudo ufw delete NUMBER`, dove NUMBER è il numero della regola nella lista.

## Installare IPTables (Avanzato)

La maggior parte dei sistemi ha già IPTables di default, ma per sicurezza puoi eseguire `sudo apt install iptables`.

### Configurare IPTables

Prima, imposta le policy e le impostazioni di default:

`sudo iptables -P INPUT DROP` per bloccare tutte le connessioni in ingresso

`sudo iptables -P FORWARD DROP` per bloccare tutti i forwardings

`sudo iptables -P OUTPUT ACCEPT` per accettare tutte le connessioni in uscita

`sudo iptables -A INPUT -i lo -j ACCEPT` per permettere il loopback

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` per permettere tutte le connessioni già esistenti

Ora devi permettere la connessione SSH e qualsiasi altra porta che vuoi aprire subito:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` per SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` esempio per HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` esempio per un server Minecraft

Poi devi rendere le regole persistenti, così restano attive anche dopo il riavvio del server. Installa il pacchetto IPTables persistent con `sudo apt install iptables-persistent`. Poi applica le regole con `sudo netfilter-persistent save`. Infine aggiungilo all’avvio automatico con `sudo systemctl enable netfilter-persistent`.

### Aggiungere Port Forwarding

Per inoltrare una porta, usa questo comando:

Per porte TCP:

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` sostituendo PORT con la porta che vuoi inoltrare.

Esempio: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` per un server Minecraft

Per porte UDP:

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` sostituendo PORT con la porta che vuoi inoltrare.

Esempio: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` per un server TeamSpeak 3

### Elencare e rimuovere Port Forwarding

Puoi vedere tutte le regole con questo comando: `sudo iptables -L --line-numbers`. Se vuoi rimuovere una regola, usa `sudo iptables -D INPUT NUMBER` sostituendo `NUMBER` con quello della lista che vuoi eliminare.

## Conclusione

Hai installato con successo un firewall sul tuo server Linux e creato le tue regole personalizzate per le porte. Puoi usare questa guida anche per inoltrare altre porte.  
Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />