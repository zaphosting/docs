---
id: dedicated-linux-ts6
title: "Serveur dédié : Installer un serveur Teamspeak 6 sur votre serveur dédié Linux"
description: "Découvrez comment installer et optimiser le serveur TeamSpeak 6 pour un hébergement fiable et performant → En savoir plus maintenant"
sidebar_label: Installer le serveur Teamspeak 6
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

À l’été 2025, TeamSpeak a lancé la **version Beta** du **serveur TeamSpeak 6**. Vous pouvez maintenant découvrir de première main la prochaine génération de TeamSpeak !

Vous pensez à héberger ce service vous-même ? On vous guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)





## Prérequis

Avant d’installer le **serveur Teamspeak 6**, assurez-vous que votre environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum     | Recommandation ZAP-Hosting |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 cœur CPU  | 4 cœurs CPU                |
| RAM        | 1 Go        | 4 Go                       |
| Espace disque | 1 Go      | 25 Go                      |



## Préparation

Avant de configurer le **serveur TeamSpeak 6**, vous devez préparer votre système. Cela inclut la mise à jour de votre système d’exploitation à la dernière version et l’installation de toutes les dépendances nécessaires. Ces préparatifs assurent un environnement stable et évitent les problèmes pendant ou après l’installation.


### Mettre à jour le système
Pour garantir que votre système tourne avec les dernières améliorations logicielles et de sécurité, commencez toujours par une mise à jour système. Pour cela, lancez la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que votre système dispose des derniers correctifs de sécurité et versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, vous pouvez passer à l’installation des dépendances. Pour une installation rapide, simple et recommandée, on vous conseille d’utiliser Docker. Pour cela, il faut installer le moteur Docker :

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installation
Maintenant que toutes les exigences sont remplies et que les préparatifs sont faits, vous pouvez procéder à l’installation de l’application serveur Teamspeak 6.

L’étape suivante est de créer le fichier Docker Compose `docker-compose.yml` pour le serveur TeamSpeak 6. Vous pouvez choisir n’importe quel répertoire, mais dans cet exemple, le fichier sera créé sous `/opt/containers/ts6/`. Pour cela, on utilise le fichier Compose officiel de TeamSpeak :

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

Allez dans le dossier où le fichier doit être créé et créez-le. Pour cela, utilisez la commande `nano docker-compose.yml` et collez-y le contenu.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Pour démarrer le conteneur Docker et le serveur TeamSpeak 6, lancez la commande Docker Compose suivante :
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Le conteneur Docker pour le serveur TeamSpeak 6 va maintenant démarrer. Par défaut, il ne tourne pas encore en mode persistant. Au premier démarrage, vous verrez des **informations importantes** concernant le **compte admin Server Query** et la **clé de privilège**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Pensez bien à sauvegarder ces infos en lieu sûr, car elles ne seront plus affichées lors des prochains démarrages. Ensuite, arrêtez le conteneur avec `CTRL+C`.



## Configuration

Vous pouvez ajuster des paramètres supplémentaires pour le serveur TeamSpeak 6 via des **variables d’environnement** dans le fichier Docker Compose. Cela vous permet de configurer le serveur selon vos besoins. La liste complète des options disponibles se trouve dans la documentation officielle [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Exemple dans `docker-compose.yml` :

```
environment:
  - TS6_SERVER_NAME=MonServeurTS6
  - TS6_QUERY_PORT=10022
```



## Gestion du serveur

Pour garder le serveur TeamSpeak 6 actif en arrière-plan, lancez le conteneur avec la commande suivante :

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Pour arrêter le serveur TeamSpeak 6, stoppez le conteneur avec la commande suivante :

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Connexion au serveur

Une fois le serveur TeamSpeak 6 lancé, vous pouvez vous connecter avec le client TeamSpeak 6. Il suffit d’utiliser l’adresse IP de votre serveur avec le bon port. Entrez ces infos dans le client pour vous connecter et commencer à tester.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusion et ressources supplémentaires

Félicitations ! Vous avez maintenant installé et configuré avec succès le serveur Teamspeak 6 sur votre serveur dédié. On vous recommande aussi de jeter un œil aux ressources suivantes, qui peuvent vous aider et vous guider pendant la configuration de votre serveur :

- [Site officiel](https://teamspeak.com/en/) - Infos et téléchargements pour TeamSpeak 6
- [Forum communautaire](https://community.teamspeak.com/) - Support utilisateur et discussions
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Signaler des bugs et suivre les problèmes ouverts

Vous avez des questions spécifiques qui ne sont pas abordées ici ? Pour toute autre question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂