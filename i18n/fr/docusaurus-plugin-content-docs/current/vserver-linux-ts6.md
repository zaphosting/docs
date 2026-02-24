---
id: vserver-linux-ts6
title: "Installer un serveur TeamSpeak 6 sur un serveur Linux - Déploie ta propre plateforme vocale"
description: "Découvre comment installer et optimiser le serveur TeamSpeak 6 pour un hébergement fiable et performant → En savoir plus maintenant"
sidebar_label: Installer le serveur Teamspeak 6
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

À l'été 2025, TeamSpeak a lancé la **version Beta** du **serveur TeamSpeak 6**. Tu peux maintenant tester la prochaine génération de TeamSpeak en avant-première !

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Prérequis

Avant d’installer le **serveur Teamspeak 6**, assure-toi que ton environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cœurs | 4 vCPU Cœurs               |
| RAM        | 1 Go         | 4 Go                       |
| Espace disque | 1 Go       | 25 Go                      |



## Préparation

Avant de configurer le **serveur TeamSpeak 6**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation à la dernière version et l’installation de toutes les dépendances nécessaires. Ces étapes garantissent un environnement stable et évitent les soucis pendant ou après l’installation.


### Mise à jour du système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par faire une mise à jour système. Pour ça, lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, tu peux passer à l’installation des dépendances. Pour une installation rapide, simple et recommandée, on te conseille d’utiliser Docker. Pour cela, installe d’abord le moteur Docker :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installation
Maintenant que tous les prérequis sont remplis et que la préparation est faite, tu peux passer à l’installation de l’application serveur Teamspeak 6.

L’étape suivante est de créer le fichier Docker Compose `docker-compose.yml` pour le serveur TeamSpeak 6. Tu peux choisir n’importe quel dossier, mais dans cet exemple, le fichier sera créé sous `/opt/containers/ts6/`. On utilise pour ça le fichier Compose officiel de TeamSpeak :

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Port vocal
      - "30033:30033/tcp" # Transfert de fichiers
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Va dans le dossier où tu veux créer le fichier et crée-le. Pour ça, utilise la commande `nano docker-compose.yml` et colle le contenu.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Pour démarrer le conteneur Docker et le serveur TeamSpeak 6, lance la commande Docker Compose suivante :
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Le conteneur Docker pour le serveur TeamSpeak 6 va maintenant démarrer. Par défaut, il ne tourne pas encore en mode persistant. Au premier démarrage, tu verras des **infos importantes** concernant le **compte admin Server Query** et la **clé de privilège**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Pense bien à sauvegarder ces infos en lieu sûr, elles ne seront plus affichées aux démarrages suivants. Ensuite, arrête le conteneur avec `CTRL+C`.



## Configuration

Tu peux ajuster d’autres paramètres pour le serveur TeamSpeak 6 via les **variables d’environnement** dans le fichier Docker Compose. Ça te permet de configurer le serveur selon tes besoins. La liste complète des options est dispo dans la doc officielle [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Exemple dans `docker-compose.yml` :

```
environment:
  - TS6_SERVER_NAME=MonServeurTS6
  - TS6_QUERY_PORT=10022
```



## Exploitation du serveur

Pour garder le serveur TeamSpeak 6 actif en arrière-plan, démarre le conteneur avec la commande suivante :

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Pour arrêter le serveur TeamSpeak 6, stoppe le conteneur avec cette commande :

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Connexion au serveur

Une fois le serveur TeamSpeak 6 lancé, tu peux te connecter avec le client TeamSpeak 6. Il suffit d’utiliser l’adresse IP de ton serveur avec le bon port. Entre ces infos dans le client pour te connecter et commencer à tester.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré avec succès le serveur Teamspeak 6 sur ton VPS/serveur dédié. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’aider et te guider encore plus dans ta config serveur :

- [Site officiel](https://teamspeak.com/en/) - Infos et téléchargements pour TeamSpeak 6
- [Forum communautaire](https://community.teamspeak.com/) - Support utilisateur et discussions
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Signaler des bugs et suivre les problèmes ouverts

Tu as des questions précises qui ne sont pas couvertes ici ? Pour toute demande ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂