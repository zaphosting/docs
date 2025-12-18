---
id: minecraft-bungeecord-config
title: "Minecraft : Configuration du serveur BungeeCord"
description: "Comprends comment optimiser et gérer les paramètres de ton réseau de serveurs BungeeCord pour une meilleure performance et expérience joueur → Découvre tout maintenant"
sidebar_label: Propriétés du serveur
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## À quoi sert une configuration BungeeCord ?

BungeeCord gère un ensemble de serveurs connectés via un serveur proxy (serveur BungeeCord). Pour personnaliser le réseau de ces serveurs, il faut modifier le fichier *config.yml*. Sur cette page, tu vas découvrir la signification exacte de chaque paramètre et obtenir des infos supplémentaires sur leur impact sur les sous-serveurs comme PaperSpigot et Bukkit.

<InlineVoucher />

## Paramètres

### forge_support

La valeur peut être false ou true. Si tu la mets à true, les joueurs peuvent rejoindre le serveur avec un client Forge (idéal pour les modpacks). Si tu la mets à false, ces connexions seront refusées.

### player_limit

Ce chiffre indique combien de joueurs peuvent se connecter en même temps au serveur. Par rapport à la valeur *max_players* des listeners, c’est la limite interne absolue du nombre total de joueurs.

### permissions

Ici, tu peux attribuer certaines permissions à différents groupes. Ce sont **uniquement des permissions BungeeCord**, pas par exemple Spigot/Bukkit.  
La syntaxe et l’indentation (2 espaces) sont importantes :  
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

Ce nombre indique le temps max pendant lequel le serveur ne doit pas envoyer de signaux aux joueurs avant de couper toutes les connexions. Par défaut, c’est 30000, soit 30 secondes max de réponse.

### log_commands

La valeur peut être false ou true. Si tu la mets à true, chaque commande BungeeCord lancée par un joueur sera affichée dans la console. Sinon, ce message ne s’affichera pas.

### network_compression_threshold

Ce paramètre définit la taille des paquets envoyés aux joueurs. Une valeur plus petite que la valeur par défaut *256*, comme 128, peut améliorer la connexion pour les joueurs éloignés. Mais ça augmente aussi beaucoup l’utilisation CPU, donc fais gaffe avant de modifier.

### online_mode

La valeur peut être false ou true. Si tu la mets à true, seuls les joueurs ayant acheté Minecraft peuvent accéder au serveur. Sinon, les joueurs cracked pourront aussi se connecter, car il n’y aura pas de communication avec les serveurs Mojang.  
**Important :** Si tu veux autoriser les joueurs cracked, utilise un plugin d’authentification, sinon n’importe qui peut se faire passer pour un autre joueur et avoir les droits admin.

### disabled_commands

Ici, tu peux lister les commandes à désactiver sur tout le réseau. Cette restriction s’applique à tous les joueurs.

### servers

Cette liste montre tous les sous-serveurs de ton réseau. Si un serveur manque ici, il ne sera pas intégré à ton système.  
Syntaxe et indentation (2 espaces) à respecter :  
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
Le **motd** est le message qui s’affiche dans ta liste de serveurs quand tu ping un sous-serveur via la fonction *forced_hosts* :

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

Sous **address**, tu mets l’IP correspondante du sous-serveur. Si **restricted** est true, le joueur doit avoir la permission *bungeecord.server.ServerName* pour accéder au sous-serveur.

### listeners

Cette variable regroupe plein d’options importantes pour la connexion au serveur BungeeCord. Tu peux créer plusieurs listeners pour autoriser la connexion sur différentes IP et ports. Un listener comprend ces paramètres :  
* query_port - Définit le port du listener.  
* motd - Message affiché dans la liste des serveurs si le joueur a directement ajouté le serveur BungeeCord.  
* tab_list - Choix entre *GLOBAL_PING*, *GLOBAL* et *SERVER*. GLOBAL_PING affiche tous les joueurs avec leur ping dans la tablist. GLOBAL affiche tous les joueurs sur tous les serveurs, mais sans le ping. SERVER affiche seulement les joueurs du même sous-serveur. **Important :** cette fonction ne marche pas sur les versions 1.8 et plus anciennes.  
* query_enabled - false ou true. Si true, une requête UDP est vérifiée pendant la procédure DNS, autorisant uniquement ces connexions. Sinon, d’autres connexions sont possibles via redirection vers le serveur.  
* proxy_protocol - false ou true. Si true, tu peux utiliser le protocole HAProxy. Sinon, il est refusé.  
* forced_hosts - Permet les connexions directes vers des sous-serveurs. Syntaxe : `Your.OwnDomain.net: ServerName`  
* ping_passthrough - false ou true. Si true, tu verras le vrai MOTD du sous-serveur au lieu de celui du BungeeCord quand tu ping via *forced_hosts*. Sinon, c’est la valeur de *servers* qui s’affiche.  
* priorities - Liste dans l’ordre décroissant les serveurs vers lesquels les joueurs doivent se connecter en priorité. Un serveur hors ligne ou indisponible sera ignoré.  
* bind_local_address - false ou true. Si true, le système redirige toujours les joueurs vers des serveurs qui écoutent la même IP que le serveur BungeeCord. Sinon, les sous-serveurs peuvent avoir des IP différentes. Utile pour les réseaux avec serveurs sur plusieurs systèmes.  
* host - Définit l’IP et le port de l’hôte. Si 0.0.0.0 est mis en IP, toutes les IP et domaines qui redirigent vers l’hôte sont acceptés.  
* max_players - Nombre max de joueurs pour ce listener.  
* tab_size - Nombre max de joueurs affichés dans la tablist.  
* La valeur peut être false ou true. Si true, le joueur se connecte toujours au serveur par défaut (le premier disponible dans *priorities*). Sinon, il rejoint le sous-serveur où il était la dernière fois. **Important :** si activé, les connexions via *forced_hosts* seront aussi redirigées vers le serveur par défaut.

### ip_forward

La valeur peut être false ou true. Si true, les joueurs ne peuvent accéder au réseau que via le serveur BungeeCord. Sinon, ils peuvent aussi se connecter directement à un sous-serveur s’ils connaissent l’IP et le port.  
**Important :** si tu mets *online_mode* à true, active aussi cette fonction pour boucher une faille de sécurité.

### prevent_proxy_connections

La valeur peut être false ou true. Si true, les adresses IP des joueurs connectés sont envoyées aux serveurs Mojang. Sinon, le serveur empêche la transmission des IP à Mojang.  
Ce paramètre n’a pas d’impact réel sur l’expérience de jeu.

### groups

Ici, tu peux assigner un ou plusieurs groupes à des joueurs spécifiques. Ils recevront alors les permissions BungeeCord associées définies dans *permissions*.  
Syntaxe et indentation (2 espaces) à respecter :  
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

Ce paramètre définit combien de temps un joueur doit attendre avant de pouvoir retenter une connexion. Par défaut, c’est 4000, soit 4 secondes max d’attente.

### stats

BungeeCord insère ici un code généré aléatoirement. Il est conseillé de ne pas modifier ce code, car il aide à optimiser BungeeCord et corriger les bugs. Les données d’analyse sont envoyées anonymement et cryptées aux développeurs.

### connection_throttle_limit

Ce nombre détermine combien de tentatives de connexion un joueur peut faire avant d’être obligé d’attendre la durée définie dans *connection_throttle* avant de réessayer.

<InlineVoucher />