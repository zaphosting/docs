---
id: vserver-linux-firewall
title: "VPS: Firewall beheren in Linux"
description: "Leer hoe je een firewall configureert om je server te beveiligen en noodzakelijke externe verbindingen toe te staan → Leer het nu"
sidebar_label: Port Forwarding (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Voor veel services en programma’s moet je externe verbindingen toestaan. Dit kan je regelen door een firewall in te stellen.  
In deze gids leer je hoe je een firewall opzet en die verbindingen toestaat.

<InlineVoucher />

## Voorbereiding

Om de firewall te installeren, moet je via SSH verbinding maken met je server. Weet je niet hoe? Check dan onze [eerste toegang](vserver-linux-ssh.md) gids.  
Na het verbinden update je de server met `apt update` en `apt upgrade`.

## UFW gebruiken (Makkelijk)

Er zijn meerdere firewallprogramma’s voor Linux, deze gids focust op de 2 populairste: UFW en IPTables.  
We beginnen met UFW, omdat die makkelijker is om in te stellen en te beheren.

### UFW installeren

Je installeert UFW simpel via APT met `sudo apt install ufw`.  
Om je SSH-verbinding niet te verliezen, activeer je het nog niet, eerst moet je het goed instellen.

### UFW instellen

Wij raden deze standaard policies aan:

`sudo ufw default deny incoming`  
en  
`sudo ufw default allow outgoing`

Daarna moet je de SSH-verbinding en andere poorten die je nu wilt openen toestaan:

`sudo ufw allow 22` voor SSH

`sudo ufw allow 80` voorbeeld voor HTTP

`sudo ufw allow 25565` voorbeeld voor een Minecraft-server

Om UFW te activeren, voer je `sudo ufw enable` uit. Je kunt altijd later meer poorten openen met `sudo ufw allow POORT`.

### Poort forwarding toevoegen

Om een poort door te sturen, gebruik je simpelweg dit commando:

Voor TCP-poorten:

`sudo ufw allow POORT/tcp` waarbij je POORT vervangt door de poort die je wilt doorsturen.

Voorbeeld: `sudo ufw allow 25565/tcp` voor een Minecraft-server

Voor UDP-poorten:

`sudo ufw allow POORT/udp` waarbij je POORT vervangt door de poort die je wilt doorsturen.

Voorbeeld: `sudo ufw allow 9987/udp` voor een TeamSpeak 3-server

### Poort forwarding bekijken en verwijderen

Om alle poortregels te zien, gebruik je `sudo ufw status numbered`. Wil je een regel verwijderen? Gebruik dan `sudo ufw delete NUMMER`, waarbij je het nummer uit de lijst gebruikt.

## IPTables installeren (Geavanceerd)

De meeste systemen hebben IPTables standaard al, maar voor de zekerheid kun je `sudo apt install iptables` uitvoeren.

### IPTables instellen

Stel eerst de standaard policies en instellingen in:

`sudo iptables -P INPUT DROP` om alle inkomende verbindingen te blokkeren

`sudo iptables -P FORWARD DROP` om alle forwarding te blokkeren

`sudo iptables -P OUTPUT ACCEPT` om alle uitgaande verbindingen toe te staan

`sudo iptables -A INPUT -i lo -j ACCEPT` om de loopback toe te staan

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` om alle bestaande verbindingen toe te staan

Daarna moet je de SSH-verbinding en andere poorten die je wilt openen toestaan:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` voor SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` voorbeeld voor HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` voorbeeld voor een Minecraft-server

Vervolgens moet je de regels persistent maken, zodat ze na een herstart actief blijven. Installeer het pakket met `sudo apt install iptables-persistent`. Pas het toe met `sudo netfilter-persistent save`. En zet het aan bij het opstarten met `sudo systemctl enable netfilter-persistent`.

### Poort forwarding toevoegen

Om een poort door te sturen, gebruik je dit commando:

Voor TCP-poorten:

`sudo iptables -A INPUT -p tcp --dport POORT -j ACCEPT` waarbij je POORT vervangt door de poort die je wilt doorsturen.

Voorbeeld: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` voor een Minecraft-server

Voor UDP-poorten:

`sudo iptables -A INPUT -p udp --dport POORT -j ACCEPT` waarbij je POORT vervangt door de poort die je wilt doorsturen.

Voorbeeld: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` voor een TeamSpeak 3-server

### Poort forwarding bekijken en verwijderen

Je kunt alle regels bekijken met: `sudo iptables -L --line-numbers`. Wil je een regel verwijderen? Gebruik dan `sudo iptables -D INPUT NUMMER`, waarbij je NUMMER vervangt door het nummer uit de lijst.

## Conclusie

Je hebt nu succesvol een firewall geïnstalleerd op je Linux-server en je eigen poortregels aangemaakt. Deze gids kun je ook gebruiken om meer poorten door te sturen.  
Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />