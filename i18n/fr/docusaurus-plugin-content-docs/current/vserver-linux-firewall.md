---
id: vserver-linux-firewall
title: "VPS : Gérer le pare-feu sous Linux"
description: "Apprends à configurer un pare-feu pour sécuriser ton serveur et autoriser les connexions externes nécessaires → Découvre-le maintenant"
sidebar_label: Redirection de ports (Pare-feu)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Pour beaucoup de services et programmes, il faut autoriser des connexions externes. C’est possible en configurant un pare-feu.  
Dans ce guide, tu vas apprendre à mettre en place un pare-feu et à autoriser ces connexions.

<InlineVoucher />

## Préparation

Pour installer le pare-feu, tu dois te connecter à ton serveur via SSH. Si tu ne sais pas comment faire, tu peux consulter notre [guide d’accès initial](vserver-linux-ssh.md).  
Après la connexion, pense à mettre à jour ton serveur avec `apt update` puis `apt upgrade`.

## Utiliser UFW (Facile)

Il existe plusieurs programmes de pare-feu sous Linux, ce guide se concentre sur les 2 plus populaires : UFW et IPTables.  
On commence par UFW, car il est plus simple à configurer et à gérer.

### Installer UFW

Tu peux installer UFW facilement via APT avec la commande `sudo apt install ufw`.  
Pour ne pas perdre ta connexion SSH, ne l’active pas tout de suite, commence par le configurer.

### Configurer UFW

On recommande d’utiliser ces règles par défaut :

`sudo ufw default deny incoming`  
et  
`sudo ufw default allow outgoing`

Maintenant, autorise la connexion SSH et tous les autres ports que tu souhaites ouvrir :

`sudo ufw allow 22` pour SSH

`sudo ufw allow 80` exemple pour HTTP

`sudo ufw allow 25565` exemple pour un serveur Minecraft

Pour activer UFW, lance `sudo ufw enable`. Tu peux toujours ouvrir d’autres ports plus tard avec `sudo ufw allow PORT`.

### Ajouter des redirections de ports

Pour rediriger un port, utilise simplement cette commande :

Pour les ports TCP :

`sudo ufw allow PORT/tcp` en remplaçant PORT par le port à rediriger.

Exemple : `sudo ufw allow 25565/tcp` pour un serveur Minecraft

Pour les ports UDP :

`sudo ufw allow PORT/udp` en remplaçant PORT par le port à rediriger.

Exemple : `sudo ufw allow 9987/udp` pour un serveur TeamSpeak 3

### Lister et supprimer des redirections de ports

Pour afficher toutes les règles de ports, lance `sudo ufw status numbered`.  
Pour supprimer une règle, utilise `sudo ufw delete NUMÉRO`, en remplaçant NUMÉRO par le numéro de la règle dans la liste.

## Installer IPTables (Avancé)

La plupart des systèmes incluent déjà IPTables par défaut, mais pour être sûr, tu peux lancer `sudo apt install iptables`.

### Configurer IPTables

Commence par définir les règles et politiques par défaut :

`sudo iptables -P INPUT DROP` pour bloquer toutes les connexions entrantes

`sudo iptables -P FORWARD DROP` pour bloquer toutes les redirections

`sudo iptables -P OUTPUT ACCEPT` pour autoriser toutes les connexions sortantes

`sudo iptables -A INPUT -i lo -j ACCEPT` pour autoriser le loopback

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` pour autoriser toutes les connexions existantes

Maintenant, autorise la connexion SSH et tous les autres ports que tu souhaites ouvrir :

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` pour SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` exemple pour HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` exemple pour un serveur Minecraft

Ensuite, rends les règles persistantes pour qu’elles restent actives après un redémarrage.  
Installe le paquet iptables-persistent avec `sudo apt install iptables-persistent`.  
Applique-le avec `sudo netfilter-persistent save`.  
Et ajoute-le au démarrage automatique avec `sudo systemctl enable netfilter-persistent`.

### Ajouter des redirections de ports

Pour rediriger un port, utilise cette commande :

Pour les ports TCP :

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` en remplaçant PORT par le port à rediriger.

Exemple : `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` pour un serveur Minecraft

Pour les ports UDP :

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` en remplaçant PORT par le port à rediriger.

Exemple : `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` pour un serveur TeamSpeak 3

### Lister et supprimer des redirections de ports

Tu peux afficher toutes les règles avec : `sudo iptables -L --line-numbers`.  
Pour supprimer une règle, utilise `sudo iptables -D INPUT NUMÉRO` en remplaçant NUMÉRO par le numéro de la règle à supprimer.

## Conclusion

Tu as installé avec succès un pare-feu sur ton serveur Linux et créé tes propres règles de ports.  
Tu peux aussi utiliser ce guide pour rediriger d’autres ports.  
Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />